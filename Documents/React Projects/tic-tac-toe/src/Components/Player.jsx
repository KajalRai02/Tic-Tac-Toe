import { useState } from "react"

export default function Player({initialName, symbol}){
    const[personName,setPersonName]=useState(initialName)
    const[isEditing, setIsEditing]=useState(false)

    function handleInput(){

         // First method: using stale value directly
         console.log("Stale Editing (before toggle):", isEditing);
      
         setIsEditing(!isEditing); // This will use the old value of isEditing
         console.log("Stale Editing (after toggle):", isEditing);
 
         // Second method: using functional toggle
         setIsEditing((editing) => {
             console.log("Fresh Editing (before toggle):", editing);
             return !editing; // This uses the current value of editing
         });
         
        
    }

    function handleChange(event){
        setPersonName(event.target.value)
    }

    let editablePlayerName=<span className="player-name" >{personName}</span>
    let btnCaption='Edit'


    if(isEditing){
        editablePlayerName=<input type="text" required value={personName} onChange={handleChange}/>
        btnCaption="Save"
    }

    return (

        <li className="player">
            <span className="player">
              {editablePlayerName}
              <span className="player-symbol">{symbol}</span>
            </span>
            <button onClick={handleInput}>{btnCaption}</button>
        </li>


    )
}