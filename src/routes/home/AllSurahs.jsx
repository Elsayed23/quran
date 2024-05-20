import React from 'react';
import Surah from './Surah';
import SEO from '../../components/other/SEO';
import Loading from '../../components/other/Loading';
import ProgressBar from '../../components/other/ProgressBar';
import QName from '../../assets/images/QuranSVG.svg'
import { Input } from '@material-tailwind/react';
import { IoChevronUp } from "react-icons/io5";
import { easeInOut, motion } from 'framer-motion';
import { simplifyArabic, surahsData } from '../../constants';
import QuickSurah from './QuickSurah';


const Home = () => {

    const [surah, setSurah] = React.useState(surahsData)
    const [search, setSearch] = React.useState('')
    const [sort, setSort] = React.useState(true)

    const suraH = surah?.filter(surah => {
        return search === '' ? surah : simplifyArabic(surah.name).includes(search) || surah.englishName.toLowerCase().includes(search)
    })?.map((surah, idx) => {
        return (
            <Surah key={idx} {...surah} />
        )
    })

    const handleSort = () => {
        setSort(prev => !prev)
        setSurah(surah.reverse())
    }

    return (
        surah
            ?
            <>
                <SEO title='القرآن' desc='Explore the Quran online - Listen to beautiful recitations, read the complete Quranic text, and deepen your understanding of Islamic teachings. Our Quran page provides a digital gateway to spiritual enlightenment.' />
                <ProgressBar />
                <div className="pb-8 px-4 overflow-hidden">
                    <motion.div
                        initial={{
                            opacity: 0
                        }}
                        animate={{
                            opacity: 1,
                            transition: { duration: 1.5 },
                        }}
                        className="py-8 min-h-[50vh] relative"
                    >
                        {/* <div className="hero_bg w-full h-full absolute -z-10 inset-0"></div> */}
                        <div className="flex items-center flex-col gap-16">
                            <motion.img
                                initial={{
                                    opacity: 0,
                                    y: -100
                                }}
                                animate={{
                                    opacity: 1,
                                    y: 0,
                                    transition: { duration: .8, ease: easeInOut }
                                }}
                                src={QName}
                                alt='Quran_Karem_image'
                                className='w-72'
                            />
                            <div className='w-full md:w-[650px]'>
                                <Input color='white' label='إبحث عن سورة' variant='standard' className='w-full' onChange={(e) => { setSearch(e.target.value.toLowerCase()) }} />
                                <div className="flex justify-center items-center flex-wrap gap-x-3 gap-y-4 mt-8">
                                    <QuickSurah />
                                </div>
                            </div>
                        </div>
                    </motion.div>
                    <div className="container mx-auto py-5 border-t border-white min-h-[calc(100vh-668.88px)]">
                        <div className="pb-3 text-xs flex gap-1">
                            رتب:
                            <div className="flex items-center gap-2 font-bold cursor-pointer " onClick={handleSort}>
                                <span className='select-none'> {sort ? 'تصاعديًا' : 'تنازليًا'} </span>
                                <IoChevronUp className={`duration-300 ${!sort && '-rotate-180'}`} />
                            </div>
                        </div>
                        {
                            suraH.length
                                ?
                                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
                                    {suraH}
                                </div>
                                :
                                <div className="text-center font-medium text-4xl font-sans h-[calc(289.11px-69px)] flex justify-center items-center">
                                    لا يوجد سورة بهذا الاسم
                                </div>
                        }
                    </div>
                </div >
            </>
            :
            <Loading />
    )
}


export default Home;