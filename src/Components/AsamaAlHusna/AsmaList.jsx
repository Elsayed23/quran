import React from 'react';

const AsmaList = ({ name, transliteration, number }) => {
    return (
        <li className='flex items-center leading-normal'>
            <span className='text-4xl ml-3'>{number}.</span>{name} | {transliteration}
        </li>
    )
}

export default AsmaList;