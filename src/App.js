import React, { useState } from 'react'
import Header from './Header';
import Content from './Content';
import Footer from './Footer';
import AddItem from './AddItem';
import SearchItem from './SearchItem';


const App=()=> {
  const [items,setItems]=useState(JSON.parse(localStorage.getItem("to-do-list")));
  const [newItem,setNewItem]=useState('');
  const [search,setSearch]=useState('');

  const addItem=(task)=>{
    console.log(items.length)
    const id= (items || []).length? items[items.length-1].id+1 :1;
    const addNewItem={id,task,checked:false}
    const listItems=[...items,addNewItem]
    setItems(listItems)
    localStorage.setItem("to-do-list",JSON.stringify(listItems))
  }

  const  handleOnchange=(id)=>{
      const listitems=items.map((item)=>
         item.id===id ?{...item,checked:!item.checked}:item)
         setItems(listitems)
         localStorage.setItem("to-do-list",JSON.stringify(listitems))
  }

    const handleDelete=(id)=>{
          const newlist=items.filter((item)=>item.id!==id )
          setItems(newlist)
          localStorage.setItem("to-do-list",JSON.stringify(newlist))

    }

    const handleSubmit=(e)=>{
            e.preventDefault()
            if(!newItem) return;
            console.log(newItem)
            addItem(newItem)
            setNewItem('')
    }

  

   return (
    
    <div className="App">
      <Header/>
      <AddItem 
           newItem={newItem}
           setNewItem={setNewItem}
           handleSubmit={handleSubmit}
      />
      <SearchItem
               search={search}
               setSearch={setSearch}
      />
      <Content items={(items||[]).filter(item=>(item.task.toLowerCase()).includes((search.toLowerCase())))}
               handleOnchange={handleOnchange}
               handleDelete={handleDelete}
      />
      <Footer/>
    </div>
    
  );
}

export default App;
