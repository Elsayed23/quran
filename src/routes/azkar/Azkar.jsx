import React from 'react'
import adhkar from '../../adhkar.json'
import SecTitle from '../../components/other/SecTitle';
import SEO from '../../components/other/SEO';
import ProgressBar from '../../components/other/ProgressBar';
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import InViewAnimate from '../../components/other/InViewAnimate'

const Adhkar = () => {

    const zekrName = adhkar.map((dhekr, idx) => {
        return (
            <Link key={idx} to={`/zekr/${dhekr.id}`} className=' leading-normal group'>
                <InViewAnimate id={idx} className='py-[16px] px-[19px] border border-[#464b50] hover:border-[#2ca4ab] rounded-md' >

                    <motion.div whileTap={{ scale: .9 }} className='flex items-center gap-6'>
                        <div className='bg-[#343a40] w-12 h-12 flex justify-center items-center rounded-md rotate-45 group-hover:bg-[#2ca4ab]'><span className='text-xl h-4'>*</span></div>
                        <span className='font-bold '>{dhekr.category}</span>
                    </motion.div>
                </InViewAnimate>
            </Link>
        )
    })

    return (
        <>
            <SEO title='أذكار و أدعية' desc='Immerse yourself in the serene world of remembrances. Our Azkar page offers a collection of morning and evening supplications, fostering a mindful and spiritual atmosphere. Start and end your day with these beautiful Azkar to bring tranquility to your heart and soul.' />
            <ProgressBar />
            <div className="overflow-hidden py-14 px-4 md:px-16">
                <SecTitle title='أذكار و أدعية' />
                <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-5">
                    {zekrName}
                </div>
            </div>
        </>
    )
}

export default Adhkar