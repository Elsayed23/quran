import React from 'react';
import { Link } from 'react-router-dom';

const Surah = ({ name, number, englishName }) => {
    return (
        <ol>
            <Link to={`/surahDetails/${number}`} className='hover:text-blue-700 duration-200'>
                <span className='ml-2'>{number}.</span>
                {name} | {englishName}
            </Link>
        </ol>
    )
}

export default Surah;