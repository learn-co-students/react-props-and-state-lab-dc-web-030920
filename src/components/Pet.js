import React from 'react'


class Pet extends React.Component {

  genderLogic = () => {
    if(this.props.gender === 'male'){
      return "♂"
    }else{
      return "♀"
    }
  }

  buttonLogic = () => {
    if(this.props.isAdopted === true){
      return (
        <div className="extra content">
          <button className="ui primary button" id={this.props.id} onClick={this.props.changeStatus}>Already adopted</button>
          <button className="ui disabled button"id={this.props.id} onClick={this.props.changeStatus}>Adopt pet</button>
        </div>
      )
    }else{
      return (
        <div className="extra content">
          <button className="ui disabled button" id={this.props.id} onClick={this.props.changeStatus}>Already adopted</button>
          <button className="ui primary button" id={this.props.id} onClick={this.props.changeStatus}>Adopt pet</button>
        </div>
      )
    }
  }
  render() {
    return (
      <div className="card">
        <div className="content">
          <a className="header">
            {/*'♀' OR '♂' */}
            {this.props.name + this.genderLogic()}
          </a>
          <div className="meta">
            <span className="date">{this.props.type}</span>
          </div>
          <div className="description">
            <p>Age: {this.props.age}</p>
            <p>Weight: {this.props.weight}</p>
          </div>
        </div>
          {this.buttonLogic()}
        
      </div>
    )
  }
}

export default Pet
