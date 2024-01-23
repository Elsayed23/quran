import React from 'react';
import arabicNumbers from '../../arabicNumbers';
import { motion } from 'framer-motion';

const SajdaSurah = ({ text, surah: { name }, sajda: { id }, page, numberInSurah }) => {
    return (
        <motion.li initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className='flex items-center gap-3 leading-normal'>
            <span className='text-2xl'>{arabicNumbers[id - 1]}. </span>
            <h2 className='text-xl gap-2 flex flex-col font-semibold'>{name} | {numberInSurah} | صفحة {page}<span className='text-xl leading-loose font-normal'>{text}</span></h2>
        </motion.li>
    )
}

export default SajdaSurah;