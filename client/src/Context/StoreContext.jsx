import { createContext, useEffect, useState } from "react";

export const Context = createContext();


export const ContextProvider = ({ children }) => {
    const [catagory , setCatagory] = useState('All');
    

    useEffect(() => {
        console.log(catagory);
    },[catagory])

   
    const contextValue = {
        catagory,
        setCatagory,
    }


    return (
        <Context.Provider value={contextValue}>
            {children}
        </Context.Provider>
    )
}
