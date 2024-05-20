import React, { useState } from 'react'
import SecTitle from '../../components/other/SecTitle'
import SEO from '../../components/other/SEO'
import ProgressBar from '../../components/other/ProgressBar'
import { recitersData } from '../../recitersData'
import ReciterCard from './ReciterCard'
import { useLocation } from 'react-router-dom'
import { Input } from '@material-tailwind/react'

const DownloadMoshaf = () => {

     const location = useLocation();

     const sheikh = new URLSearchParams(location.search).get('sheikh');

     const [search, setSearch] = useState(sheikh || '')

     const reciters = recitersData?.filter(reciter => {
          return search === '' ? reciter : reciter.name.includes(search)
     })?.map((reciter, idx) => {
          return (
               <ReciterCard key={idx} {...reciter} />
          )
     })

     return (
          <>
               <ProgressBar />
               <SEO title='تحميل المصحف' />
               <div className="py-14 ">
                    <SecTitle title='تحميل المصحف' />
                    <div className="container mx-auto px-4">
                         <div className='md:w-[430px] mb-5'>
                              <Input color='white' label='إبحث عن القارئ' defaultValue={sheikh || ''} variant='standard' className='w-full' onChange={(e) => { setSearch(e.target.value.toLowerCase()) }} />
                         </div>
                         {
                              reciters.length
                                   ?
                                   <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-5">
                                        {reciters}
                                   </div>
                                   :
                                   <div className="text-center font-medium text-4xl font-sans h-[calc(528px-61px)] flex justify-center items-center">
                                        القارئ غير موجود
                                   </div>
                         }

                    </div>
               </div>
          </>
     )
}

export default DownloadMoshaf