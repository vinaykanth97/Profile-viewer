"use client";
const { createContext, useState } = require("react");

export const formContext = createContext()
export const FormContextProvider = ({ children }) => {

    const [formData, setFormData] = useState(JSON.parse(localStorage?.getItem('localFormDatas')))
    return (
        <formContext.Provider value={{ formData, setFormData }}>{children}</formContext.Provider>
    )
}