import React from 'react';
import Navbar from './Navbar';
import { Outlet } from 'react-router-dom';

const layout = () => {
    return (
        <>
            <Navbar />
            <Outlet />
        </>
    )
}

export default layout;