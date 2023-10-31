import React, { useEffect, useState } from 'react'
import Header from './Header';
import Content from './Content';
import Footer from './Footer';
import AddItem from './AddItem';
import SearchItem from './SearchItem';
import apiRequest from './apiRequest';


const App=()=> {
  const [items,setItems]=useState([]);
  const [newItem,setNewItem]=useState('');
  const [search,setSearch]=useState('');
  const [fetchError,setFetchError]=useState(null);
  const [isLoading,setIsLoding]=useState(true);
  const API_URL= " http://localhost:3500/items";

  useEffect(()=>{
       const fetchItems= async()=>{
        try{
          const response=await fetch (API_URL);
          if(!response.ok) throw Error ("Data is not fetched")
          const listItems= await response.json();
          console.log(listItems);
          setItems(listItems);
        }
        catch(err){
          setFetchError(err.message)
          console.log(err.message)
        }
        finally{
          setIsLoding(false)
        }

       }
       setTimeout(() => {
        (async()=>await fetchItems())()
       },2000);
      
  },[])

  const addItem= async(task)=>{
    const id= items.length? items[items.length-1].id+1 :1;
    const addNewItem={id,task,checked:false}
    const listItems=[...items ,addNewItem]
    setItems(listItems)
    
    const postOptions={
      method:"POST",
      headers:{
        "Content-Type":"application/JSON"
      },
      body:JSON.stringify(addNewItem)
    }

    const result=await apiRequest(API_URL,postOptions)
    if(result)setFetchError(result)
    
  }

  const  handleOnCheck= async(id)=>{
      const listitems=items.map((item)=>
         item.id===id ?{...item,checked:!item.checked}:item)
         setItems(listitems)

         const myItems=listitems.filter((item)=>item.id===id)
         const patchOptions={
          method:"PATCH",
          headers:{
            "Content-Type":"application/JSON"
          },
          body:JSON.stringify({checked:myItems[0].checked})
         }

         const reqUrl=`${API_URL}/${id}`  //{API_URL}{localhost:3500/items}/2
        const result=await apiRequest(reqUrl,patchOptions)
        if(result)setFetchError(result)
  }

    const handleDelete= async(id)=>{
          const newlist=items.filter((item)=>item.id!==id )
          setItems(newlist)
          
          const deleteOptions={
            method:"DELETE"
          }
      
          const reqUrl=`${API_URL}/${id}`  //{API_URL}{localhost:3500/items}/2
          const result=await apiRequest(reqUrl,deleteOptions)
          if(result)setFetchError(result)
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
      <main>
      {isLoading&&<p>Data is loading ,Please wait...</p>}
        {fetchError&& <p>{`Error:${fetchError}`}</p>}

      {!isLoading && !fetchError &&
              <Content items={items.filter((item)=>((item.task).toLowerCase()).includes((search.toLowerCase())))}
               handleOnCheck={handleOnCheck}
               handleDelete={handleDelete}
               />
   }
      </main>
      <Footer/>
    </div>
    
  );
}

export default App;
