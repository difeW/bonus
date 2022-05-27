import { createContext, useReducer, useEffect } from 'react'
import { useContext, useState } from 'react'

export const Context = createContext()

const ContextProvider = ({ children }) => {

    const [list, setlist] = useState([{
        username: 'Thanh',
        score: 9000,
    }, {
        username: 'Toan',
        score: 7800,
    }, {
        username: 'Trai',
        score: 5000,
    }])

    const Data = { list, setlist }
    // Return provider
    return (
        <Context.Provider value={Data}>
            {children}
        </Context.Provider>
    )
}
export default ContextProvider
