import React ,{useState} from "react";

const ToDoList=(props)=>
{
    
    return(
        <>
            <div className="todo_style">
                <button onClick={()=>  //callback function is called which will redirect it to App.
                {
                    props.onSelect(props.id);
                }
                }>*</button>
                <li> {props.text}</li>
            </div>
        </>

    )
}

export default ToDoList; 