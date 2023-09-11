import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {

    const [shadow, setShadow] = React.useState(false)

    window.addEventListener("scroll", () => {
        window.scrollY > 80 ? setShadow(true) : setShadow(false)
    })

    return (
        <nav className={`bg-white ${shadow && 'shadow-md'} duration-300 border-gray-200 dark:bg-gray-900 dark:border-gray-700 fixed top-0 w-full z-50`}>
            <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4 w-full">
                <Link to="/allSurahs" className="flex items-center">
                    <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white"><img src={require('../../logo/quran-icon.png')} style={{ width: 60 }} alt="" /></span>
                </Link>
                <button data-collapse-toggle="navbar-default" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-default" aria-expanded="false">
                    <span className="sr-only">Open main menu</span>
                    <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
                    </svg>
                </button>
                <div className="hidden w-full md:block md:w-auto" id="navbar-default">
                    <ul className="font-medium gap-5 flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row  md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                        <li>
                            <Link to="/allSurahs" className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">جميع السور</Link>
                        </li>
                        <li>
                            <Link to="/asmaAlHusna" className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">الأسماء الحسني</Link>
                        </li>
                        <li>
                            <Link to="/sajda" className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">آيات السجدة</Link>
                        </li>
                        <li>
                            <Link to="/books" className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">كتب</Link>
                        </li>
                        <li>
                            <button id="dropdownNavbarLink" data-dropdown-toggle="dropdownNavbar" className="flex items-center gap-1 justify-between w-full py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 md:w-auto dark:text-white md:dark:hover:text-blue-500 dark:focus:text-white dark:border-gray-700 dark:hover:bg-gray-700 md:dark:hover:bg-transparent">أذكار <svg className="w-2.5 h-2.5 ml-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4" />
                            </svg></button>
                            <div id="dropdownNavbar" className="z-10 hidden font-normal bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 dark:divide-gray-600">
                                <ul className="py-2 text-sm text-gray-700 dark:text-gray-400" aria-labelledby="dropdownLargeButton">
                                    <li>
                                        <Link to="/azkar/azkar_sabah" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">أذكار الصباح</Link>
                                    </li>
                                    <li>
                                        <Link to="/azkar/azkar_massa" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">أذكار المساء</Link>
                                    </li>
                                    <li>
                                        <Link to="/azkar/PostPrayer_azkar" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">أذكار بعد الصلاة</Link>
                                    </li>
                                </ul>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar;