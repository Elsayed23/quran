import React from 'react';
import Navbar from './Navbar';
import { Outlet } from 'react-router-dom';
import Footer from './Footer';
import BackToTop from './BackToTop'

const layout = () => {
    return (
        <>
            <Navbar />
            <BackToTop />
            <Outlet />
            <Footer />
        </>
    )
}

export default layout;