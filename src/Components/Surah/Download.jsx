import React from 'react'
import { motion } from 'framer-motion'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDownload } from '@fortawesome/free-solid-svg-icons'
import axios from 'axios'

const Download = ({ url, surahName, recitation }) => {

    const [progress, setProgress] = React.useState(100)

    async function handleDownload() {
        const { data } = await axios.get(url, {
            responseType: 'blob',
            onDownloadProgress: (e) => {
                let num = Math.round(
                    (e.loaded * 100) / e.total
                )
                setProgress(num);
            }
        });

        const Url = window.URL.createObjectURL(new Blob([data]))

        const link = document.createElement('a');
        link.href = Url;
        link.setAttribute('download', `${surahName} | ${recitation}.mp3`)
        document.body.appendChild(link);
        link.click()
        window.URL.revokeObjectURL(Url)
    }

    return (
        <div className='relative'>
            {
                progress !== 100
                &&
                <div className="badge w-full md:w-9 h-full md:h-9 absolute top-0 md:-top-7 font-bold left-0 md:right-0 md:translate-x-2/4 flex text-xs justify-center items-center bg-[#2ca4ab] md:rounded-full">
                    {progress}%
                </div>
            }
            <motion.div whileTap={{ scale: .9 }} onClick={handleDownload} className="download flex items-center gap-3 cursor-pointer px-4 py-2 text-[#2ca4ab] hover:bg-[#2ca4ab] rounded-sm">
                <span className='hidden md:block'>Download Surah</span>
                <FontAwesomeIcon icon={faDownload} size='sm' />
            </motion.div>
        </div>
    )
}

export default Download