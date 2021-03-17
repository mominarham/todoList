import React, { useState } from "react";
import "./newtodo.css";
import Todolist from "./Todolist";

function Newtodo() {
  const [items, setItems] = useState("");

  const task = (e) => {
    setItems(e.target.value);
  };
  const [itemslist, setItemslist] = useState([]);

  const save = () => {
    setItemslist((olditems) => {
      return [...olditems, items];
    });
    setItems("");
  };

  const deleteitems = (id) => {
    setItemslist((olditems) => {
      return olditems.filter((arrEle, index) => {
        return index !== id;
      });
    });
  };
  return (<>
      <h1 className='heading' > React Todo List</h1>
    <div className="maindiv">
          <input className='inputfield' placeholder='Enter your Task' type="text" value={items} onChange={task} /> 
          <button onClick={save} className='btna' >Add Task</button>
          
        <ol className="tasklist">
          {itemslist.map((events, index) => {
            return (
              <Todolist
                task={events}
                key={index}
                id={index}
                onSelect={deleteitems}
              />
            );
          })}
        </ol>
    </div>
    </>
  );
}

export default Newtodo;
