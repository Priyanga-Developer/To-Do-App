import ItemList from "./ItemList";

const Content = ({items,handleOnchange,handleDelete}) => {
 
  return (
    <>
    <div className='content'>  
       {(items.length)?(<ItemList
        items={items}
        handleOnchange={handleOnchange}
        handleDelete={handleDelete}
        />):(<p>Your list is Empty</p>)
      }
 
    </div>

    </>
  )
}

export default Content;