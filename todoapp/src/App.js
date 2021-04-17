import React,{useState} from "react";
import ToDoList from "./ToDoList";


const App=()=>{
  const[inputList,setInputList]=useState("");
  const[Items,setItems]= useState([]);
  
  const itemEvent=(event)=>{
    setInputList(event.target.value);
  }
  const listOfItems=()=>{
    setItems((oldItems)=>{
      return [...oldItems,inputList]; // empty array me new items to store kr rhe hain with previous value.
    })
    setInputList("");
  };
  const deleteItem=(id)=>{
    setItems((oldItems)=>{
      return oldItems.filter((arrElem,index)=>{  //check kr rhe hain ki jo id hamne pass kiya
        return index !==id;    // hai vo kya hamare purane array me match kr rhi hai
      })  // jo value nhi match kr rhi ussi ko return kra do
    })
  }
  return(
    <>
      <div className="main_div">
        <div className="center_div">
          <br/>
          <h1>ToDO list</h1>
          <br />
          <input type="text" placeholder="Add a Item" onChange={itemEvent} value={inputList} />
          <button onClick={listOfItems}> + </button>
          <ol>
            {Items.map((itemval,index)=>{
                return <ToDoList key={index} id={index} text={itemval} onSelect={deleteItem} />;
            })}
          </ol>
        </div>
      </div>
    </>

  )
}

export default App;
