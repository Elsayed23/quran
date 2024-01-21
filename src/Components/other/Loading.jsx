import React from 'react';

const Loading = () => {
    return (
        <div className="h-[calc(100vh-199.99px)] sm:h-[calc(100vh-157.4px)] flex justify-center items-center relative top-0 z-50 w-full bg-[#1f2125]">
            <div id="page">
                <div id="container">
                    <div id="ring"></div>
                    <div id="ring"></div>
                    <div id="ring"></div>
                    <div id="ring"></div>
                    <div id="h3">loading</div>
                </div>
            </div>

        </div>
    )
}

export default Loading;