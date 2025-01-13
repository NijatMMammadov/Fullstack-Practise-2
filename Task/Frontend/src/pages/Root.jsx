import React from 'react'
import Navbarr from '../components/Navbarr'
import Footerr from '../components/Footerr'
import Outlet from 'react-router'

function Root() {
    return (
        <>
            <Navbarr></Navbarr>
            <Outlet />
            <Footerr></Footerr>
        </>
    )
}

export default Root
