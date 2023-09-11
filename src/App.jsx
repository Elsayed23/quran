import React from 'react';
import './App.css';
import Layout from './Components/Layout/Layout';
import Home from './Components/Home/AllSurahs';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import SurahDetails from './Components/Surah/SurahDetails';
import AsmaAlHusna from './Components/AsamaAlHusna/AsmaAlHusna';
import Sajda from './Components/Sajda/Sajda'
import Books from './Components/Books/Books'
import Zekr from './Components/Azkar/Zekr';
import NotFound from './Components/NotFound';


const App = () => {


  const router = createBrowserRouter([
    {
      path: '', element: <Layout />, children: [
        { path: '', element: <Home /> },
        { path: 'allSurahs', element: <Home /> },
        { path: 'surahDetails/:id', element: <SurahDetails /> },
        { path: 'asmaAlHusna', element: <AsmaAlHusna /> },
        { path: 'sajda', element: <Sajda /> },
        { path: 'books', element: <Books /> },
        { path: 'azkar/:name', element: <Zekr /> },
      ]
    },
    { path: '*', element: <NotFound /> },
  ])

  return (
    <RouterProvider router={router} />
  )
}

export default App;