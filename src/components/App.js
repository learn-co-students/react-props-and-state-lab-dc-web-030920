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
  onChangeType = (e) => {
    console.log("I was changed")
    // here we will change filters:{type: }
    this.setState({
      filters: {type: e.target.value}
    })
  }

  handleClick = (e) => {
    if(this.state.filters.type === "all"){
        fetch('/api/pets').then(resp => resp.json())
        .then(data => {
          this.setState({
            pets: [...data]
          })
        })

    } else{
        fetch(`/api/pets?type=${this.state.filters.type}`)
        .then(resp => resp.json())
        .then(data => {
          this.setState({
            pets: [...data]
          })
        
        })
    }
  }

  onAdoptPet = (id) => {
    console.log("about to be adopted")
    const allPets = this.state.pets
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
              <Filters onChangeType = {this.onChangeType} handleClick={this.handleClick} />
            </div>
            <div className="twelve wide column">
              <PetBrowser onAdoptPet={this.onAdoptPet} state={this.state.pets} />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App
