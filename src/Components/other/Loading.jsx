import React from 'react';

const Loading = () => {
    return (
        <div className="h-screen flex justify-center items-center fixed top-0 z-50 w-full bg-[#1f2125]">
            <div className="loader w-full h-[15px] text-center">
                <div className="dot relative w-[15px] h-[15px] mx-[2px] inline-block"></div>
                <div className="dot relative w-[15px] h-[15px] mx-[2px] inline-block"></div>
                <div className="dot relative w-[15px] h-[15px] mx-[2px] inline-block"></div>
            </div>
        </div>
    )
}

export default Loading;