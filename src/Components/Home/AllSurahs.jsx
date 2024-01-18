import React from 'react';
import axios from 'axios';
import Surah from './Surah';
import SEO from '../other/SEO';
import Loading from '../other/Loading';
import QName from '../QuranSVG.svg'
import { Input } from '@material-tailwind/react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronUp } from '@fortawesome/free-solid-svg-icons';
import ProgressBar from '../other/ProgressBar';
import { motion } from 'framer-motion';

const Home = () => {

    const [surah, setSurah] = React.useState(null)
    const [loading, setLoading] = React.useState(true);
    const [search, setSearch] = React.useState('')
    const [sort, setSort] = React.useState(true)

    async function getSurah() {
        const { data } = await axios.get('https://api.alquran.cloud/v1/surah')
        setSurah(data.data)
        setLoading(false)
    }
    let arabicNormChar = {
        'ک': 'ك', 'ﻷ': 'لا', 'ؤ': 'و', 'ى': 'ی', 'ی': 'ي', 'ئ': 'ي', 'أ': 'ا', 'إ': 'ا', 'آ': 'ا', 'ٱ': 'ا', 'ٳ': 'ا', 'ء': '', 'هۡ': 'ه', 'ِ': '', 'ْ': '', 'ُ': '', 'َ': '', 'ّ': '', 'ٍ': '', 'ً': '', 'ٌ': '', 'ٓ': '', 'ٰ': '', 'ٔ': '', '�': ''
    }

    let simplifyArabic = function (str) {
        return str.replace(/[^\u0000-\u007E]/g, function (a) {
            let retval = arabicNormChar[a]
            if (retval == undefined) { retval = a }
            return retval;
        }).normalize('NFKD').toLowerCase();
    }




    const suraH = surah?.filter(surah => {
        return search.toLowerCase() === '' ? surah : simplifyArabic(surah.name).includes(search) || surah.englishName.toLowerCase().includes(search)
    })?.map((surah, idx) => {
        return (
            <Surah key={idx} {...surah} />
        )
    })

    function handleChange(e) {
        setSearch(e.target.value)
    }
    function handleSort() {
        setSort(prev => !prev)
        setSurah(surah.reverse())
    }


    const quickSurahsData = [
        {
            id: 1,
            surahName: "سورة الملك",
            surahId: 67
        },
        {
            id: 2,
            surahName: "سورة يس",
            surahId: 36
        },
        {
            id: 3,
            surahName: "سورة الكهف",
            surahId: 18
        },
        {
            id: 4,
            surahName: "سورة الواقعة",
            surahId: 56
        }
    ]
    const quickSurahs = quickSurahsData.map(surah => {
        return (
            <motion.div whileTap={{ scale: .9 }} key={surah.id}>
                <Link to={`/surahDetails/${surah.surahId}`} className='bg-white px-4 py-1 text-[#272727] rounded-full block'>
                    {surah.surahName}
                </Link>
            </motion.div>
        )
    })


    React.useEffect(() => {
        getSurah()
    }, [])


    return (
        loading
            ?
            <Loading />
            :
            <>
                <SEO title='القرآن' desc='Explore the Quran online - Listen to beautiful recitations, read the complete Quranic text, and deepen your understanding of Islamic teachings. Our Quran page provides a digital gateway to spiritual enlightenment.' />
                <ProgressBar />
                <div className="pb-8 px-4">
                    <div className="py-8 min-h-[50vh] relative">
                        <div className="hero_bg w-full h-full absolute -z-10 inset-0"></div>
                        <div className="flex items-center flex-col gap-16">
                            <img src={QName} className='w-72' />
                            <div className='w-full md:w-[650px]'>
                                <Input color='white' label='إبحث عن سورة' variant='standard' className='w-full' onChange={handleChange} />
                                <div className="flex justify-center items-center flex-wrap gap-x-3 gap-y-4 mt-8">
                                    {quickSurahs}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="container mx-auto py-5 border-t border-[#464b50]">
                        <div className="pb-3 text-xs flex gap-1">
                            رتب:
                            <div className="flex items-center gap-2">
                                <span onClick={handleSort} className='font-bold cursor-pointer'> {sort ? 'تصاعديًا' : 'تنازليًا'} </span>
                                <FontAwesomeIcon icon={faChevronUp} size='sm' className={`duration-300 ${!sort && '-rotate-180'}`} />
                            </div>
                        </div>
                        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
                            {suraH}
                        </div>
                    </div>
                </div >
            </>
    )
}


export default Home;