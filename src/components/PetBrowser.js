import React from 'react'

import Pet from './Pet'


// Should receive a pets prop. This is an array of pets that the component uses to render 
// <Pet /> components. 
// Should receive an onAdoptPet prop. This callback prop gets passed to its <Pet /> children components.



//Result: <Pet pets={this.props.pets} onAdoptPet = {this.props.onAdoptPet} />

class PetBrowser extends React.Component {
  render() {
    const petCards = this.props.pets.map((pet) => (
      <Pet pet={pet}  key={pet.id} onAdoptPet={this.props.onAdoptPet}/>
    ))
    console.log(this.props.pets)
    // id={pet.id} name={pet.name} age={pet.age}

  return <div className="ui cards">{petCards}</div>
  }
}

export default PetBrowser
