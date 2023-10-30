import React, { useRef } from 'react'

const AddItem = ({  newItem ,setNewItem ,handleSubmit}) => {
  const inputEl=useRef("")
  return (
    <>
    <form className='add-item' onSubmit={handleSubmit}>
        <label htmlFor='addItem'></label>
        <input
        autoFocus
        ref={inputEl}
        id='addItem'
        type='text'
        placeholder='Add Task'
        required
        value={newItem}
        onChange={(e)=>setNewItem(e.target.value)}
        />
    <button type='submit' onClick={()=>inputEl.current.focus()} >Add</button>
    </form>
    </>
  )
}

export default AddItem