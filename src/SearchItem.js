import React from 'react'

const SearchItem = ({search,setSearch}) => {
  return (
    <form className='search-item' onSubmit={(e)=>e.preventDefault()}>
       <label htmlFor='search'></label>
       <input
          id='search'
          type='search'
          placeholder='Search Items'
          value={search}
          onChange={(e)=>setSearch(e.target.value)}
       />
    </form>
  )
}

export default SearchItem