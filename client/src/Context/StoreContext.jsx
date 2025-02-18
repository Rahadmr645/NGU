import { createContext, useEffect, useState } from "react";

export const Context = createContext();


export const ContextProvider = ({ children }) => {
    const [catagory , setCatagory] = useState('All');
   const [showLogin, setShowLogin] = useState(false) ;
    const [formData,setFormData] = useState({
      name : "",
      email : "",
      password : "",
    });

    useEffect(() => {
        console.log(catagory);
    },[catagory])

   
    const contextValue = {
        catagory,
        setCatagory,
        formData,
        setFormData,
        showLogin,
        setShowLogin,
    }


    return (
        <Context.Provider value={contextValue}>
            {children}
        </Context.Provider>
    )
}
