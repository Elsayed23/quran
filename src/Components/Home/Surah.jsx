import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import arabicNumbers from '../../arabicNumbers';

const Surah = ({ number, englishName, numberOfAyahs }) => {


    const handleSurahNum = number < 10 ? `00${number}` : number >= 10 && number < 100 ? `0${number}` : number;

    return (
        <Link to={`/surahDetails/${number}`} className='py-[16px] px-[19px] border border-[#464b50] hover:border-[#2ca4ab] rounded-md group'>
            <motion.div whileTap={{ scale: .9 }}>
                <div className='flex justify-between items-center'>
                    <div className="flex gap-6 items-center">
                        <div className='bg-[#343a40] w-11 h-11 flex justify-center items-center font-bold rounded-md rotate-45 group-hover:bg-[#2ca4ab]'><span className='-rotate-45 text-sm'>{arabicNumbers[number - 1]}</span></div>
                        <div className='flex flex-col font-bold'>
                            <span className='font-[surahnames] text-3xl font-normal'>{handleSurahNum}</span>
                            <span className='text-[#777] text-xs group-hover:text-[#2ca4ab]'>{englishName}</span>
                        </div>
                    </div>
                    <div className="flex flex-col">
                        <span className='text-[#777] text-sm font-bold group-hover:text-[#2ca4ab]'>{numberOfAyahs} {numberOfAyahs < 10 ? 'آيات' : 'آية'}</span>
                    </div>
                </div>
            </motion.div>
        </Link>
    )
}

export default Surah;