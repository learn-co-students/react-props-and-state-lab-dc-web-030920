import React from 'react'
import Pet from './Pet'

class PetBrowser extends React.Component {

    render() {
      return(
      
        <div className="ui cards">
            {this.props.onAdoptPet.map( petObject => <Pet key={petObject.id} petObj={petObject} func={this.props.func}/>)}
        </div>
      )
  }

}
export default PetBrowser
