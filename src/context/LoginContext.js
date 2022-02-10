import { createContext, useState } from "react";
import React from "react";
import { login } from "../auth/login";
export const loginContext = createContext();
export const LoginProvider = (props)=>{
    const [userData, setUserData] = useState([]);
    const [txnHistory, setTnxHistory] = useState([])
    return(
        <loginContext.Provider value={[userData, setUserData]}>
            {props.children}
        </loginContext.Provider>
    );
}