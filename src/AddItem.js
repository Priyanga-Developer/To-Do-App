import React from 'react'

const AddItem = ({  newItem ,setNewItem ,handleSubmit}) => {
  return (
    <>
    <form className='add-item' onSubmit={handleSubmit}>
        <label htmlFor='addItem'></label>
        <input
        autoFocus
        id='addItem'
        type='text'
        placeholder='Add Task'
        required
        value={newItem}
        onChange={(e)=>setNewItem(e.target.value)}
        />
    <button type='submit' >Add</button>
    </form>
    </>
  )
}

export default AddItem