import axios from 'axios';
import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBook, faDownload } from '@fortawesome/free-solid-svg-icons';
import { motion } from 'framer-motion';

const Book = ({ title, description, attachments: [{ url }] }) => {

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
        link.setAttribute('download', `${title}.pdf`)
        document.body.appendChild(link);
        link.click()
        window.URL.revokeObjectURL(Url)
    }

    return (
        <div className="p-4 text-center border flex flex-col justify-between border-[#2ca4ab] rounded-md">
            <div>
                <h2 className='font-bold mb-3'>{title}</h2>
                <p className='mb-4'>{description}</p>
            </div>
            <div className="flex justify-between">
                <Link to={url} target='_blank' className='text-right block hover:text-[#2ca4ab] font-bold px-3 py-2 rounded-sm book--buttons text-[#2ca4ab] hover:bg-[#2ca4ab]'>قراءة <FontAwesomeIcon icon={faBook} className='mr-1' /></Link>
                <div className='relative'>
                    {
                        progress !== 100
                        &&
                        <div className="badge w-full h-full absolute top-0 font-bold left-0 flex text-xs justify-center items-center bg-[#2ca4ab] rounded-sm">
                            {progress}%
                        </div>
                    }
                    <motion.div whileTap={{ scale: .9 }} onClick={handleDownload} className="download flex items-center gap-3 cursor-pointer px-4 py-2 text-[#2ca4ab] hover:bg-[#2ca4ab] rounded-sm">
                        <span className='hidden md:block'>تحميل</span>
                        <FontAwesomeIcon icon={faDownload} size='sm' />
                    </motion.div>
                </div>
            </div>
        </div>
    )
}

export default Book;