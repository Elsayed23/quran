import React from 'react'
import DownloadButton from './DownloadButton'

const ReciterCard = ({
     img,
     name,
     surahList
}) => {
     return (
          <div className='p-5 border rounded-sm flex flex-col gap-5 group'>
               <div className="overflow-hidden w-[265px] h-[265px] rounded-full">
                    <img src={img} alt="Reciter image" className='rounded-full group-hover:scale-110 duration-300 w-full h-full' />
               </div>
               <h3 className='text-center font-semibold'>{name}</h3>
               <DownloadButton reciterName={name} />
               <h3>{surahList.length === 114 ? 'كاملا' : 'ليس كاملا'}</h3>
          </div>
     )
}

export default ReciterCard