import React from 'react'




class Pet extends React.Component {
  render() {
    //Deconstruct an object 
    let {id ,name, type, age, weight, gender, isAdopted} = this.props.pet
    
    return (
      <div className="card">
        <div className="content">
          <a className="header">
            {/* ternary statement: condition ? if true do this:  if false do this  */}
            { gender === "male" ? "M - " : "F -" }
            {name}
          </a>
          <div className="meta">
            <span className="date">{type}</span>
          </div>
          <div className="description">
            <p>Age: {age}</p>
            <p>Weight: {weight}</p>
          </div>
        </div>
        <div className="extra content">
          {/* You pass information back to the parent as an ARGUMENT inside an arrow function*/}
          {isAdopted ? <button className="ui disabled button">Already adopted</button> : <button className="ui primary button" onClick={ () => this.props.onAdoptPet(id) }>Adopt pet</button> }
        </div>
      </div>
    )
  }
}

export default Pet
