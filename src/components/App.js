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

  onChangeType = event => {
  
    console.log("On change type")
    this.setState({
      filters: {
        ...this.state.filters,
        type: event.target.value
      }
    })
  }


  // Fetch over animals specifially if type is dog, at, or micropig.
 

fetchAnimal = () =>{
  const url = "/api/pets"
  if (this.state.filters.type !== "all"){
   const otherUrl = `/api/pets?type=${this.state.filters.type}`
   // this fetch retruns an array of specfic type of pet
    fetch(otherUrl)
    .then(resp => resp.json())
    .then(petsArray => this.setState({pets: petsArray}))  }
  else{
    // This fetch reteruns array of all pets
    fetch(url)
    .then(resp => resp.json())
    .then(petsArray => this.setState({pets: petsArray}))  }
      
    }


    // Finally, App should pass a callback prop, onAdoptPet, to <PetBrowser />. 
    // This callback should take in an id for a pet,
    //  find the matching pet in state.pets and set the isAdopted property to true

// given a pet find that pet from the pets and change the value of that pet's isAdopted to true

// this.state.pets

    //
    onAdoptPet = (petId) => {
      console.log("Adopt Click")
      let pets = this.state.pets.map( pet => {
        if (petId === pet.id) {
         return pet.isAdopted = true
        }
      })
      return pets
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
              <Filters 
              onChangeType={this.onChangeType}
              onFindPetsClick={this.fetchAnimal}
              />
            </div>
            <div className="twelve wide column">
              <PetBrowser 
              pets ={this.state.pets}
              onAdoptPet={this.onAdoptPet}
              />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App
