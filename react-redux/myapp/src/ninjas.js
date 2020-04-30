import React, { Component } from 'react';
import './Ninja.css';

// Functions don't need state
// UI function
const Ninjas = ({ninjas, deleteNinja}) => {
  // console.log(this.props);
  // const { ninjas }= props;
  /*const ninjaList = ninjas.map(ninja => {
    if (ninja.age > 20) {
      return (
        <div className="ninja" key={ ninja.id }>
          <div>Name: { ninja.name }</div>
          <div>Age: { ninja.age }</div>
        </div>
      )
    } else {
      return null;
    }
  })*/

  return(
    <div className="ninja-list">
    {
      ninjas.map(ninja => {
        return ninja.age > 20 ? (
          <div className="ninja" key={ ninja.id }>
            <div>Name: { ninja.name }</div>
            <div>Age: { ninja.age }</div>
            <button onClick={() => deleteNinja(ninja.id)}>Delete Ninja</button>
          </div>
        ) : null;
      })
    }
    </div>
  )
}

export default Ninjas;