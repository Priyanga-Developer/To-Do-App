import React from 'react'

import ListItems from './ListItems';

const ItemList = ({items,handleOnCheck,handleDelete}) => {
  return (
    <ul className='list-items'>
    {items.map((eachitem)=>{
      return (
        <ListItems  eachitem={eachitem}
        key={eachitem.id}
        handleOnCheck={handleOnCheck}
        handleDelete={handleDelete}/>
       )
    })}
   </ul>
  )
}

export default ItemList;