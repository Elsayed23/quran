import React from 'react';
import InViewAnimate from '../../components/other/InViewAnimate';
import { arabicNumbers } from '../../constants';

const AsmaList = ({ name, transliteration, number }) => {
    return (
        <li className=' group'>
            <InViewAnimate id={number} className={'flex items-center justify-between leading-normal py-[16px] px-[19px] border border-[#464b50] hover:border-[#2ca4ab] rounded-md '}>
                <div className="flex items-center gap-6">
                    <div className='bg-[#343a40] w-12 h-12 flex justify-center items-center font-bold rounded-md rotate-45 group-hover:bg-[#2ca4ab]'><span className='-rotate-45 text-sm'>{arabicNumbers[number - 1]}</span></div>
                    <span className='lg:text-lg'>{name}</span>
                </div>
                <span className='lg:text-lg font-bold'>{transliteration}</span>
            </InViewAnimate>
        </li>
    )
}

export default AsmaList;