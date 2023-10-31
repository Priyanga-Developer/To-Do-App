import ItemList from "./ItemList";

const Content = ({items,handleOnCheck,handleDelete}) => {
 
  return (
    <>
    <div className='content'>  
       {(items.length)?(<ItemList
        items={items}
        handleOnCheck={handleOnCheck}
        handleDelete={handleDelete}
        />):(<p>Your list is Empty</p>)
      }
 
    </div>

    </>
  )
}

export default Content;