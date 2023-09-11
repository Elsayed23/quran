import React from 'react';

const List = ({ zekr, repeat, bless }) => {
    const font = {
        fontFamily: '"Traditional Arabic", "Times New Roman"'
    }

    return (
        <li style={font} className='border p-3 rounded-md'>
            <h1 className={`${bless && 'mb-3'}`}>{zekr} {repeat > 1 && repeat < 100 ? `| ${repeat} مرات` : repeat === 1 ? '' : `| ${repeat} مره`}</h1> {bless && `"${bless}"`}
        </li>
    )
}

export default List;