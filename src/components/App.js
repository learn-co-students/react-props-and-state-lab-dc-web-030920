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
    this.setState(Object.assign(this.state.filters,{type: event.target.value}))
   }

  onFindPetsClick = () => {
    if (this.state.filters.type === "all"){
      fetch("/api/pets")
      .then(response => response.json())
      .then(data => {
        this.setState({pets: data})
      })
    }
    if (this.state.filters.type === "cat"){
      fetch("/api/pets?type=cat")
      .then(response => response.json())
      .then(data => {
        this.setState({pets: data})
      })
    }
    if (this.state.filters.type === "dog"){
      fetch("/api/pets?type=dog")
      .then(response => response.json())
      .then(data => {
        this.setState({pets: data})
      })
    }
    if (this.state.filters.type === "micropig"){
      fetch("/api/pets?type=micropig")
      .then(response => response.json())
      .then(data => {
        this.setState({pets: data})
      })
    }
  }

  onAdoptPet = (id) => {
    console.log(this.state.pets)
  
    let foundPet = this.state.pets.filter(pet => pet.id.includes(id))[0]
    this.setState(Object.assign(this.state.pets.filter(pet => pet.id.includes(foundPet.id))[0],{isAdopted: true}));
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
              <Filters filterValue={this.onChangeType} onPetsClick={this.onFindPetsClick}/>
            </div>
            <div className="twelve wide column">
              <PetBrowser pets={this.state.pets} adoptPet={this.onAdoptPet}/>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App
