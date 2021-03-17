import React from 'react'
import './todolist.css'

function Todolist(props) {
    return (
        <>
        <div className= 'task'>
        
         <h3><span><i class="fa fa-times cross-button" onClick={()=>{
                props.onSelect(props.id)
            }} aria-hidden="true"></i></span>{props.task}</h3>
            
        </div>
        </>
    )
}




export default Todolist
