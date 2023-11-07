import React, { useState } from 'react'
import Header from './components/Header/Header'

import { Outlet } from 'react-router-dom'


const Layout = () => {
    const [search, setsearch] = useState('New')

    return (
        <>
            <Header />
       
            <Outlet />

        </>
    )
}

export default Layout