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
      filters: {type: event.target.value}
    })
  }

  onFindPetsClick = () => {
    console.log("Find pets was clicked")
    var type = this.state.filters.type
  
    if(type === 'all'){
      fetch('/api/pets')
      .then(resp => resp.json())
      .then(petsArr => {
        this.setState({
          pets: petsArr
        })
      })
    } else {
      fetch(`/api/pets?type=${type}`)
      .then(resp => resp.json())
      .then(petsArr => {
        this.setState({ // we are setting the state for pets
          pets: petsArr
        })
      })
    }
    
  }

  onAdoptPet = (id) => {
    const allPets = this.state.pets // [{},{},{},{}......]
    const mappedArray = allPets.map(pet => {
      if(pet.id === id){
        pet.isAdopted = true
        return pet
      } else {
        return pet
      }
    })
    this.setState({
      pets: mappedArray
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
              <PetBrowser pets={this.state.pets} onAdoptPet={this.onAdoptPet}/>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App
