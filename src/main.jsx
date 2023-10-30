import React from 'react'
import ReactDOM from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle'

import Layout from './Layout'
import StoreGlobal from './context/StoreGlobal'
import UserContext from './context/UserContext'

ReactDOM.createRoot(document.querySelector('#root')).render(
    <StoreGlobal>
        <UserContext>
            <Layout />
        </UserContext>
    </StoreGlobal>
)