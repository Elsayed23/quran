import React, { useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Collapse, Navbar } from '@material-tailwind/react';

const NavBar = () => {

    const [isOpen, setIsOpen] = React.useState(false);


    const location = useLocation();
    const checkRef = useRef()

    React.useEffect(() => {
        setIsOpen(false)
        checkRef.current.checked = false
    }, [location.pathname])

    const handleWindowResize = () =>
        window.innerWidth >= 960 && setIsOpen(false);

    React.useEffect(() => {
        window.addEventListener("resize", handleWindowResize);

        return () => {
            window.removeEventListener("resize", handleWindowResize);
        };
    }, []);


    function handleChange(e) {
        const { checked } = e.target
        console.log(checked);
        setIsOpen(checked)
    }


    const linksData = [
        {
            id: 1,
            url: '/allSurahs',
            name: 'القرآن'
        },
        {
            id: 2,
            url: '/PrayerTimes',
            name: 'مواقيت الصلاة'
        },
        {
            id: 3,
            url: '/asmaAlHusna',
            name: 'الأسماء الحسني'
        },
        {
            id: 4,
            url: '/sajda',
            name: 'آيات السجدة'
        },
        {
            id: 5,
            url: '/books',
            name: 'كتب'
        },
        {
            id: 6,
            url: '/adhkar',
            name: 'أذكار'
        }
    ]


    const activeClasses = 'md:before:right-[0!important] bg-blue-gray-600 md:bg-transparent md:text-[#2ca4ab] md:before:w-full md:before:h-[2px]'

    const links = linksData.map(link => {
        return (
            <li key={link.id}>
                <Link to={link.url} className={`nav--item block py-2 px-3 rounded md:border-0 hover:bg-blue-gray-600 md:hover:bg-transparent md:hover:text-[#2ca4ab] md:py-2 md:px-1 relative md:before:absolute md:before:w-0 md:before:h-[0] md:before:right-2/4 md:before:bottom-0 md:before:bg-[#2ca4ab] hover:before:w-full hover:before:h-[2px] hover:before:right-0 md:before:duration-300 duration-300 ${location.pathname === link.url || location.pathname === '/' && link.url.includes('/allSurahs') && activeClasses || location.pathname.startsWith('/surahDetails') && link.url.includes('/allSurahs') && activeClasses || location.pathname.startsWith('/zekr') && link.url.includes('/adhkar') && activeClasses ? activeClasses : ''}`}>{link.name}</Link>
            </li>
        )
    })



    return (
        <nav className='bg-[#343a40] duration-300 border-gray-200 fixed top-0 w-full z-[999]'>
            <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4 w-full">
                <Link to="/">
                    <img src={require('../../assets/images/logo.jpg')} style={{ width: 45 }} className='rounded-full' alt="logo" />
                </Link>
                <label className="hamburger cursor-pointer block md:hidden" >
                    <input type="checkbox" ref={checkRef} onChange={handleChange} className='hidden' />
                    <svg viewBox="0 0 32 32">
                        <path className="line line-top-bottom" d="M27 10 13 10C10.8 10 9 8.2 9 6 9 3.5 10.8 2 13 2 15.2 2 17 3.8 17 6L17 26C17 28.2 18.8 30 21 30 23.2 30 25 28.2 25 26 25 23.8 23.2 22 21 22L7 22"></path>
                        <path className="line" d="M7 16 27 16"></path>
                    </svg>
                </label>
                <div className='hidden md:block'>
                    <ul className="font-medium gap-3 flex flex-col py-4 md:p-0 mt-4 border-t md:flex-row  md:mt-0 md:border-0">
                        {links}
                    </ul>
                </div>
            </div>
            <Collapse open={isOpen}>
                <ul className="font-medium gap-3 flex flex-col py-4 md:p-0 mt-4 border-t md:flex-row  md:mt-0 md:border-0">
                    {links}
                </ul>
            </Collapse>
        </nav>
    )
}

export default NavBar;