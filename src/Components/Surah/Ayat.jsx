import React from 'react';

const Card = ({ text, numberInSurah }) => {
    const font = {
        fontFamily: "Traditional Arabic, Times New Roman"
    }
    return (
        <li style={font} className='flex items-center leading-normal'>
            <span className='text-3xl md:text-4xl ml-3 font-bold'>{numberInSurah}.</span>{text}
        </li>
    )
}

export default Card;