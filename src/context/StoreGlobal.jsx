import React, { createContext, useEffect, useState } from 'react'

/*  
Context: Context.Provider y Context.Consumer
*/

export const Context = createContext()

const StoreGlobal = ({ children }) => {

    const [name, setName] = useState("")
    const [cart, setCart] = useState([])
    const [todos, setTodos] = useState([])
    const [task, setTask] = useState("")
    const [users, setUsers] = useState(null)

    const changeName = (e) => {
        setName(e.target.value)
    }

    const addToCart = () => {
        const newCart = [...cart]
        newCart.push(1)
        setCart(newCart)
    }

    const addTodos = () => {
        const newTodos = [...todos]
        newTodos.push(task)
        setTodos(newTodos)
        setTask("")
    }

    useEffect(() => {
        getUsers()
    }, [])

    const getUsers = () => {
        fetch("https://jsonplaceholder.typicode.com/users")
            .then(response => response.json())
            .then(data => setUsers(data))
    }

    return (
        <>
            <Context.Provider value={{ name, changeName, cart, addToCart, task, setTask, todos, addTodos }}>
                {children}
            </Context.Provider>
        </>
    )
}

export default StoreGlobal


