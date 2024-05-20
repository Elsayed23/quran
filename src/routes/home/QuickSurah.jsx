import React from 'react'
import { quickSurahsData } from '../../constants'
import { motion, easeInOut } from 'framer-motion'
import { Link } from 'react-router-dom'

const QuickSurah = () => {

     return (
          quickSurahsData.map(({ surahId, surahName, y }, idx) => {
               return (
                    <motion.div
                         initial={{
                              opacity: 0,
                              y: y
                         }}
                         animate={{
                              opacity: 1,
                              y: 0,
                              transition: { duration: .8, ease: easeInOut },

                         }}
                         whileTap={{ scale: .9 }}
                         key={idx}>
                         <Link to={`/surah_details/${surahId}`} className='bg-white px-4 py-1 text-[#272727] rounded-full block'>
                              {surahName}
                         </Link>
                    </motion.div>
               )
          }))
}

export default QuickSurah