import React from 'react'
import adhkar from '../../adhkar.json'
import SecTitle from '../other/SecTitle'
import { Link } from 'react-router-dom'
import ProgressBar from '../other/ProgressBar'
import PageTitle from '../other/PageTitle'
import { motion } from 'framer-motion'
import arabicNumbers from '../../arabicNumbers'

const Adhkar = () => {

    const zekrName = adhkar.map((dhekr, idx) => {
        return (
            <Link key={idx} to={`/zekr/${dhekr.id}`} className=' leading-normal py-[16px] px-[19px] border border-[#464b50] hover:border-[#2ca4ab] rounded-md group'>
                <motion.div whileTap={{ scale: .9 }} className='flex items-center gap-6'>
                    <div className='bg-[#343a40] w-12 h-12 flex justify-center items-center font-bold rounded-md rotate-45 group-hover:bg-[#2ca4ab]'><span className='-rotate-45 text-sm'>{arabicNumbers[dhekr.id - 1]}</span></div>
                    <span className='font-bold '>{dhekr.category}</span>
                </motion.div>
            </Link>
        )
    })

    return (
        <>
            <PageTitle title='Quran | أذكار و أدعية' />
            <ProgressBar />
            <div className="py-14 px-4 md:px-16">
                <SecTitle title='أذكار و أدعية' />
                <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-5">
                    {zekrName}
                </div>
            </div>
        </>
    )
}

export default Adhkar