import React, { useState } from 'react'
import { FaTrash } from "react-icons/fa";


const Content = () => {
    const [items,setItems]=useState([{id:1,task:"Practice Coding",checked:true}]);
    const [searchfield,setSearchfield]=useState("Rajiv");


        const  handleOnchange=(e)=>{
            const result =e.target.value;
             return setSearchfield(result);
        }

        const addTask=(items)=>{
              console.log(searchfield)
              console.log(items)
        }

   
  return (
    <div className='content'>
        <input type='text' placeholder='Type here' onChange={(e)=>handleOnchange(e)}></input>
        <button type='button' onClick={()=>addTask(items)}>Add</button>
       <ul>
        {items.map((eachitem)=>{
          return (
            <li key={eachitem.id}>
                <input type='checkbox'  ></input>
                   <label>{eachitem.task}</label>
                   <FaTrash/> 
            </li>)
        })}
      
       </ul>
 
    </div>
  )
}

export default Content;