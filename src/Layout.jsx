import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import NotFound from './pages/NotFound'
import Detail from './pages/Detail'
import Shop from './pages/Shop'
import injectContext from './context/AppContext'

const Layout = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/shop/:producto_id/detail' element={<Detail />} />
                <Route path="/shop" element={<Shop />} />
                <Route path="/" element={<Home />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
        </BrowserRouter>
    )
}

export default injectContext(Layout)