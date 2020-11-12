import React, { createContext, useState } from 'react'

export const UserContext = createContext();

export const UserProvider = props => {
    const [user,setUser]= useState([
        {
            gender:'female',
            age:'a',
            country:'Albania',
            size:'UK4',
            fit:'',
            bodyType:'1',
            style:'',
        }
    ])
    return(
        <UserContext.Provider value={[user,setUser]}>
            {props.children}
        </UserContext.Provider>
    )
}
