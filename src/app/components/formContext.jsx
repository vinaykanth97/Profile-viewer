"use client";
const { createContext } = require("react");

export const formContext = createContext()
export const FormContextProvider = ({ children }) => {


    return (
        <formContext.Provider value={''}>{children}</formContext.Provider>
    )
}