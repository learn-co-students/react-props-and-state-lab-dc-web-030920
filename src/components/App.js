import React from 'react'

import Filters from './Filters'
import PetBrowser from './PetBrowser'

class App extends React.Component {
  constructor() {
    super()

    this.state = {
      pets: [],
      filters: {
        type: 'all' 
      }
    }
  }

  
 onChangeType = (event) => {
   this.setState({
     filters: {...this.filters,
     type: event.target.value
     }
    })
 }

 onFindPetsClick =  (event) => {
  const type = this.state.filters.type

  if(this.state.filters.type == 'all'){
    fetch('/api/pets')
    .then(response => response.json())
    .then(petObjArray => {
      this.setState({
        pets: petObjArray
      })
    })
    
  }else{
    fetch(`/api/pets?type=${type}`)
    .then(response => response.json())
    .then(petObjArrayByType => {
      this.setState({
        pets: petObjArrayByType
      })
    })
  }
 }

onAdoptPet = (event, petObject) => {

  const id = petObject.id 
  const newArray = this.state.pets.map(pet => {
    if(pet.id == id){
      pet.isAdopted = true
    }
    return pet
  })

  this.setState({
    pets: newArray
  })
  

  
  
}


  render() {
    return (
      <div className="ui container">
        <header>
          <h1 className="ui dividing header">React Animal Shelter</h1>
        </header>
        <div className="ui container">
          <div className="ui grid">
            <div className="four wide column">
              <Filters onChangeType={this.onChangeType} onFindPetsClick={this.onFindPetsClick}/>
            </div>
            <div className="twelve wide column">
              <PetBrowser onAdoptPet={this.state.pets} func={this.onAdoptPet}/>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App
