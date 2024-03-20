import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import Drawer from './Drawer'
import { HiMiniBars3 } from "react-icons/hi2";
import ScrollHandler from './ScrollHandler';

const NavBar = () => {

    const [isOpen, setIsOpen] = React.useState(false);

    const openDrawer = () => setIsOpen(true);

    const location = useLocation();

    React.useEffect(() => {
        setIsOpen(false)
    }, [location.pathname])



    const handleWindowResize = () =>
        window.innerWidth >= 960 && setIsOpen(false);

    React.useEffect(() => {
        window.addEventListener("resize", handleWindowResize);

        return () => {
            window.removeEventListener("resize", handleWindowResize);
        };
    }, []);





    return (
        <>
            <ScrollHandler />
            <Drawer open={isOpen} setOpen={setIsOpen} />

            <nav id='navbar' className='duration-300 fixed backdrop-blur-lg top-10 w-full z-50'>
                <div className="px-16 py-4 flex flex-wrap items-center justify-between mx-auto w-full">
                    <div className="p-2 rounded-full hover:bg-black hover:bg-opacity-15 cursor-pointer duration-200" onClick={openDrawer}>
                        <HiMiniBars3 size={28} color='#e7e9ea' />
                    </div>
                    <Link to="/">
                        <img src={require('../../assets/images/logo.jpg')} style={{ width: 45 }} className='rounded-full' alt="logo" />
                    </Link>
                </div>

            </nav>
        </>
    )
}

export default NavBar;
