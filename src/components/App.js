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

  onAdoptPet = (event) => {
    console.log(event.target.id)
    // ? pet.isAdopted = true : pet.isAdopted = False )
    const new_array = this.state.pets
    const index = new_array.findIndex(pet => pet.id === event.target.id) 
    new_array[index].isAdopted = true
    // pet.isAdopted = true

    this.setState({
      pets: new_array 
    })
   
  }

  onChangeType = (event) => {
    this.setState( {
      filters: {
        type: event.target.value
      } 
    })
  }
  
  onFindPetsClick = (event) => {
    if (this.state.filters.type === 'all') {
      fetch(`/api/pets`)
      .then(res => res.json())
       .then(data => {
          this.setState({
            pets: data 
          })
      })
    } else {
    fetch(`/api/pets?type=${this.state.filters.type}`)
    .then(res => res.json())
    .then(data => {
      this.setState({
        pets: data 
      })
    })
  }
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
              <Filters onChangeFunc={this.onChangeType} filterPets={this.onFindPetsClick} />
            </div>
            <div className="twelve wide column">
              <PetBrowser onAdoptPet={this.onAdoptPet} pets={this.state.pets} />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App
