import React from 'react'
import { motion } from 'framer-motion'
import { FaDownload } from "react-icons/fa";

import axios from 'axios'

const Download = ({ url, surahName, recitation }) => {

    const [progress, setProgress] = React.useState(100)
    const [downloadCancelled, setDownloadCancelled] = React.useState(false);

    async function handleDownload() {
        try {
            const { data } = await axios.get(url, {
                responseType: 'blob',
                onDownloadProgress: (e) => {
                    let num = Math.round(
                        (e.loaded * 100) / e.total
                    )
                    setProgress(num);
                },
                cancelToken: new axios.CancelToken((cancel) => {
                    setDownloadCancelled(() => cancel);
                }),
            });

            const Url = window.URL.createObjectURL(new Blob([data]))

            const link = document.createElement('a');
            link.href = Url;
            link.setAttribute('download', `${surahName} | ${recitation}.mp3`)
            document.body.appendChild(link);
            link.click()
            window.URL.revokeObjectURL(Url)
        } catch (error) {
            if (axios.isCancel(error)) {
                console.log('Download cancelled');
            }
        } finally {
            setProgress(100)
        }
    }

    function handleCancelDownload() {
        if (downloadCancelled) {
            downloadCancelled('Download cancelled by user');
            setProgress(100);
        }
    }


    return (
        <div className='relative'>
            {
                progress !== 100
                &&
                <div className="pt-1 w-9 md:w-9 h-9 md:h-9 absolute top-2/4 -translate-y-2/4 md:translate-y-0 md:-top-7 font-bold -right-6 translate-x-full md:right-0 md:translate-x-2/4 flex text-xs justify-center items-center bg-[#2ca4ab] rounded-full before:absolute before:bg-[#2ca4ab] before:w-6 before:h-[2px] before:-translate-x-full before:left-0 md:before:hidden">
                    {progress}%
                </div>
            }
            <motion.div whileTap={{ scale: .9 }} onClick={progress !== 100 ? handleCancelDownload : handleDownload} className="download outline-1 outline flex justify-center items-center gap-3 cursor-pointer w-[46px] h-[30px] md:w-fit md:h-fit md:px-4 md:py-2 text-[#2ca4ab] hover:bg-[#2ca4ab] rounded-sm">
                <span className='hidden md:block pt-1'>{progress !== 100 ? 'إلغاء التحميل' : 'تحميل السورة'}</span>
                {
                    progress !== 100
                        ?
                        <span className='text-xs md:hidden'>إلغاء</span>
                        :
                        <FaDownload className='md:hidden' />


                }
                <FaDownload className='hidden md:block' />

            </motion.div>
        </div>
    )
}

export default Download