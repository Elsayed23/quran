import axios from 'axios';
import React from 'react';
import { Link } from 'react-router-dom';

const Book = ({ title, description, attachments: [{ url }] }) => {

    const handleDownload = async () => {
        try {
            const response = await axios.get(url, {
                responseType: 'blob',
            });

            const Url = window.URL.createObjectURL(new Blob([response.data]));
            const a = document.createElement('a');
            a.href = Url;
            a.download = `${title}.pdf`;
            a.click();
            window.URL.revokeObjectURL(Url);
        } catch (error) {
            console.error('Error:', error);
        }
    };

    return (
        <div className="p-4 text-center border">
            <h2 className='font-bold mb-3'>{title}</h2>
            <p className='mb-4'><span className='font-bold leading-relaxed'>الوصف:</span> {description}</p>
            <div className="flex justify-between">
                <Link to={url} target='_blank' className='text-right block hover:text-blue-700 duration-300 underline font-bold'>قراءة</Link>
                <button onClick={handleDownload} className='text-right block hover:text-blue-700 duration-300 underline font-bold'>تحميل</button>
            </div>
        </div>
    )
}

export default Book;