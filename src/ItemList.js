import React from 'react'

import ListItems from './ListItems';

const ItemList = ({items,handleOnchange,handleDelete}) => {
  return (
    <ul className='list-items'>
    {items.map((eachitem)=>{
      return (
        <ListItems  eachitem={eachitem}
        key={eachitem.id}
        handleOnchange={handleOnchange}
        handleDelete={handleDelete}/>
       )
    })}
   </ul>
  )
}

export default ItemList;