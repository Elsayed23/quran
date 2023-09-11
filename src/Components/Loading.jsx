import React from 'react';

const Loading = () => {

    return (
        <div className="h-screen flex justify-center items-center fixed top-0 z-50 w-full bg-[#e8e8e8]">
            <div className="loader">
                <div className="dot"></div>
                <div className="dot"></div>
                <div className="dot"></div>
            </div>
        </div>
    )
}

export default Loading;