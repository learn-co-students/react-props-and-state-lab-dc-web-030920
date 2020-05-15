import React from 'react'

import Pet from './Pet'

class PetBrowser extends React.Component {
  render() {
    
    const petsToRender = this.props.state
    return <div className="ui cards">
        {petsToRender.map((pet, index) => <Pet onAdoptPet={this.props.onAdoptPet} pet={pet} key={index} /> )}

      </div>
  }
}

export default PetBrowser
