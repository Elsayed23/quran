import axios from 'axios'
import React from 'react'
import { useParams } from 'react-router-dom'
import Ayat from '../Surah/Ayat'
import { Button } from '@material-tailwind/react'
import { Link } from 'react-router-dom'
import Loading from '../other/Loading'

const Verse = () => {

     const [verses, setVerses] = React.useState(null)
     const singleAyahs = 'https://everyayah.com/data/Yasser_Ad-Dussary_128kbps/'

     const { surahId, verseId } = useParams()


     console.log(surahId, verseId);

     const getVerse = async () => {
          const { data: { data } } = await axios.get(`https://api.quran.gading.dev/surah/${surahId}/${verseId}`)
          setVerses(data)
     }


     React.useEffect(() => {
          getVerse()
     }, [])


     console.log(verses);

     return (
          verses
               ?
               <div className='container mx-auto pt-10 sm:pt-16 pb-5 sm:pb-7 px-4 flex flex-col gap-5 min-h-[calc(100vh-150.88px)]'>
                    <Ayat {...verses} singleAyahs={singleAyahs} id={surahId} />
                    <div className="flex justify-center items-center">
                         <Link to={`/surahDetails/${surahId}`}>
                              <Button variant='filled' color='cyan' className='active:ring-0 active:shadow-none'>أكمل السورة</Button>
                         </Link>
                    </div>
               </div>
               :
               <Loading />
     )
}

export default Verse