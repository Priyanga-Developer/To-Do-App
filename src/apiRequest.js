

const apiRequest = async (url="",OptionsObj=null,ErrMsg=null) => {
 
    try{
       const response= await fetch (url,OptionsObj);
       if (!response.ok) throw Error("Please reload the Page");
    }

    catch(err){
       ErrMsg=err.Message;
    }
    finally{
     return ErrMsg;
    }
}

export default apiRequest