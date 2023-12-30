import React from 'react';

const Box = ({ prayerName, prayerTime }) => {

    return (
        <div className="border border-[#2ca4ab] rounded-md p-5 text-center">
            <h2 className='mb-2 font-semibold text-2xl'>{prayerName}</h2>
            <h1 className='text-xl font-bold'>{prayerTime}</h1>
        </div>
    );
}

export default Box;