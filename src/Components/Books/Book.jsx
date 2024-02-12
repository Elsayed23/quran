import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBook } from '@fortawesome/free-solid-svg-icons';
import InViewAnimate from '../other/InViewAnimate'

const Book = ({ title, description, attachments: [{ url }] }) => {


    return (
        <InViewAnimate>
            <div
                className="px-3 py-4 sm:px-4 text-center border flex flex-col justify-between border-[#2ca4ab] rounded-md">
                <div>
                    <h2 className='font-bold mb-3'>{title}</h2>
                    <p className='mb-4'>{description}</p>
                </div>
                <div className="flex justify-between">
                    <a href={url} rel='noreferrer' target='_blank' className='text-right block hover:text-[#2ca4ab] font-bold px-3 py-2 rounded-sm book--buttons text-[#2ca4ab] hover:bg-[#2ca4ab]'>قراءة <FontAwesomeIcon icon={faBook} className='mr-1' /></a>
                </div>
            </div>
        </InViewAnimate>
    )
}

export default Book;