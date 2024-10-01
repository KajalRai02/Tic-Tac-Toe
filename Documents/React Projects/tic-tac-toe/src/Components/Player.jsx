import { useState } from "react"

export default function Player({initialName, symbol,isActive, onChangeName}){
    const[personName,setPersonName]=useState(initialName)
    const[isEditing, setIsEditing]=useState(false)

    function handleInput(){
    
         setIsEditing((editing) => {
             return !editing; // This uses the current value of editing
         });
         if(isEditing){
            onChangeName(symbol,personName)

         }
        
         
        
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

        <li className={isActive ? 'active': undefined}>
            <span className="player">
              {editablePlayerName}
              <span className="player-symbol">{symbol}</span>
            </span>
            <button onClick={handleInput}>{btnCaption}</button>
        </li>


    )
}