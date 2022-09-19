import React from "react"

const Person = (props) => {
   return (
    <div>
        <h3>{props.name}</h3>
        <span>{props.age}</span>
        {props.age >= 18 &&
        <p>"Go Vote!</p>

        }
    </div>
   ) 

}

export default Person