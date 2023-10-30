import React, { createContext, useState } from 'react'

export const ContextUser = createContext()

const UserContext = ({ children }) => {

    const [currentUser, setCurrentUser] = useState(null)

    const login = () => {
        setCurrentUser({
            email: "lrodriguez@4geeks.co"
        })
    }

    const logout = () => {
        setCurrentUser(null)
    }

    return (
        <ContextUser.Provider value={{ currentUser, login, logout }}>
            {children}
        </ContextUser.Provider>
    )
}

export default UserContext