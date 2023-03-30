import React, { createContext, useState } from 'react';

export const loginContext = createContext("");

const Context = ({ children }) => {
    const [empData, setempData] = useState([]);
    const [empStatus, setempStatus] = useState([0, 0, 0, 0]);     //total emp, Remote employee, Fulltime employee, contract employee
    const [empAge, setempAge] = useState([0, 0, 0]); //age<20, age>=20&&age<=30, age>30

    return (
        <loginContext.Provider value={{ empData, setempData, empStatus, setempStatus, empAge, setempAge }}>
            {children}
        </loginContext.Provider >
    )
}

export default Context