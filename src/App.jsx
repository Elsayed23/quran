import React from 'react';
import Layout from './Components/Layout/Layout';
import Home from './Components/Home/AllSurahs';
import PrayerTimes from './Components/PrayerTimes/PrayerTimes'
import { RouterProvider, createBrowserRouter, createHashRouter } from 'react-router-dom';
import SurahDetails from './Components/Surah/SurahDetails';
import AsmaAlHusna from './Components/AsamaAlHusna/AsmaAlHusna';
import Sajda from './Components/Sajda/Sajda'
import Books from './Components/Books/Books'
import Zekr from './Components/Azkar/Zekr';
import NotFound from './Components/other/NotFound';
import Azkar from './Components/Azkar/Azkar';
import Verse from './Components/verse/Verse';


const App = () => {

  const router = createHashRouter([
    {
      path: '', element: <Layout />, children: [
        { path: '/', element: <Home /> },
        { path: 'PrayerTimes', element: <PrayerTimes /> },
        { path: 'surahDetails/:id', element: <SurahDetails /> },
        { path: 'verse/:surahId/:verseId', element: <Verse /> },
        { path: 'asmaAlHusna', element: <AsmaAlHusna /> },
        { path: 'sajda', element: <Sajda /> },
        { path: 'books', element: <Books /> },
        { path: 'adhkar', element: <Azkar /> },
        { path: 'zekr/:id', element: <Zekr /> },
      ]
    },
    { path: '*', element: <NotFound /> },
  ])

  return (
    <RouterProvider router={router} />
  )
}

export default App;