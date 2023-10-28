import React from 'react'
import { FaTrash } from "react-icons/fa";

const ListItems = ({eachitem,handleOnchange,handleDelete}) => {
  return (
    <li key={eachitem.id}>
    <input type='checkbox' onChange={()=>handleOnchange(eachitem.id)} checked={eachitem.checked} />
       <label style={(eachitem.checked)?{textDecoration:"line-through"}:null} 
       onDoubleClick={()=>handleOnchange(eachitem.id)}>{eachitem.task}
       </label>
       <FaTrash
       role="button"
       tabIndex="0"
       onClick={()=>handleDelete(eachitem.id)}
       /> 
</li>
  )
}

export default ListItems