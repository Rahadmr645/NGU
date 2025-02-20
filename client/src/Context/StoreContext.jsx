import { createContext, useEffect, useState } from "react";
import axios from "axios"
export const Context = createContext();

export const ContextProvider = ({ children }) => {
    const [catagory , setCatagory] = useState('All');
   const [showLogin, setShowLogin] = useState(false) ;
   const [currState,setCurrState] = useState("Sign Up") ;
    const [formData,setFormData] = useState({
      name : "",
      email : "",
      password : "",
    });
    
    
const onChangeHandler = (e) => {
 setFormData({...formData,[e.target.name] : e.target.value});
}

const onSubmitHandler = async(e) =>{
  e.preventDefault();
  const URL = currState ==="Sign Up"? "http://localhost:4003/api/user/create/"
    :"http://localhost:4003/api/user/login/"
  try{ 
  const response = await axios.post(URL,formData)
  
  if(response) {
    alert(response.data.message);
    console.log({user :response.data.newUser,token :response.data.token})
    setFormData({
    name: "",
    email: "",
    password: "",
  })
  setShowLogin(false);
  } else {
    return alert(response.data.message)
  }
  
  }catch(error) {
    console.error(error);
  }
}
   
    const contextValue = {
        catagory,
        setCatagory,
        formData,
        setFormData,
        showLogin,
        setShowLogin,
        onSubmitHandler,
        onChangeHandler,
        currState,
        setCurrState, 
    }


    return (
        <Context.Provider value={contextValue}>
            {children}
        </Context.Provider>
    )
}
