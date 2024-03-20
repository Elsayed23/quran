import React from 'react';

const SecTitle = ({ title, className }) => {
    return (
        <h1 className={`mb-20 text-4xl text-center font-bold font-[p-1] ${className}`}>{title}</h1>
    )
}

export default SecTitle;