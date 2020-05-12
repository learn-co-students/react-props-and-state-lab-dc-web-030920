import React from 'react'

import Pet from './Pet'

class PetBrowser extends React.Component {

  
  render() {
    console.log(this.props)
    return <div className="ui cards">
      {this.props.pets.map(petI => {
      return  < Pet onAdoptPet={this.props.onAdoptPet} pet={petI} key={petI.id} /> })}
      </div>
  }
}

export default PetBrowser
