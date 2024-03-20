import React from 'react';
import Navbar from './Navbar';
import { Outlet } from 'react-router-dom';
import Footer from './Footer';
import BackToTop from './BackToTop'

const Layout = ({ isOpen, setIsOpen }) => {

    console.log("اللهم علمنا ما ينفعنا، وانفعنا بما علمتنا، وزدنا علما");



    return (
        <>
            <div className='text-center fixed top-0 left-0 w-full py-2 bg-gradient-to-r from-teal-400 to-teal-600 z-[99]'>
                <h6 >اللهم علمنا ما ينفعنا، وانفعنا بما علمتنا، وزدنا علما</h6>
            </div>
            <Navbar isOpen={isOpen} setIsOpen={setIsOpen} />
            <BackToTop />
            <Outlet isOpen={isOpen} setIsOpen={setIsOpen} />
            <Footer />
        </>
    )
}

export default Layout;