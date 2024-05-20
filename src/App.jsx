import React from 'react';
import Layout from './components/Layout/Layout';
import Home from './routes/home/AllSurahs';
import PrayerTimes from './routes/prayerTimes/PrayerTimes'
import { RouterProvider, createBrowserRouter, createHashRouter } from 'react-router-dom';
import SurahDetails from './routes/surah/SurahDetails';
import AsmaAlHusna from './routes/asamaAlHusna/AsmaAlHusna';
import Sajda from './routes/sajda/Sajda'
import Books from './routes/books/Books'
import Zekr from './routes/azkar/Zekr';
import NotFound from './components/other/NotFound';
import Azkar from './routes/azkar/Azkar';
import Verse from './routes/verse/Verse';
import DownloadMoshaf from './routes/downloadMoshaf/DownloadMoshaf'


const App = () => {

  const router = createHashRouter([
    {
      path: '', element: <Layout />, children: [
        { path: '/', element: <Home /> },
        { path: 'prayer_times', element: <PrayerTimes /> },
        { path: 'surah_details/:id', element: <SurahDetails /> },
        { path: 'verse/:surahId/:verseId', element: <Verse /> },
        { path: 'asma_alHusna', element: <AsmaAlHusna /> },
        { path: 'sajda', element: <Sajda /> },
        { path: 'books', element: <Books /> },
        { path: 'adhkar', element: <Azkar /> },
        { path: 'zekr/:id', element: <Zekr /> },
        { path: 'quran_download', element: <DownloadMoshaf /> },
      ]
    },
    { path: '*', element: <NotFound /> },
  ])

  return (
    <RouterProvider router={router} />
  )
}

export default App;