import React from 'react';

const Loading = () => {
    return (
        <div className="h-[calc(100vh-199.95px)] sm:h-[calc(100vh-194px)] flex justify-center items-center relative top-0 z-50 w-full bg-transparent">
            <div className="loader relative w-[70px] h-[70px] rounded-[10px]">
                <div className="bar1 w-[8%] h-[24%] bg-white absolute left-2/4 top-[30%] opacity-0 rounded-[50px]" style={{ transform: 'rotate(0deg) translate(0, -130%)', animationDelay: '0s' }}></div>
                <div className="bar2 w-[8%] h-[24%] bg-white absolute left-2/4 top-[30%] opacity-0 rounded-[50px]" style={{ transform: 'rotate(30deg) translate(0, -130%)', animationDelay: '-1.1s' }}></div>
                <div className="bar3 w-[8%] h-[24%] bg-white absolute left-2/4 top-[30%] opacity-0 rounded-[50px]" style={{ transform: 'rotate(60deg) translate(0, -130%)', animationDelay: '-1s' }}></div>
                <div className="bar4 w-[8%] h-[24%] bg-white absolute left-2/4 top-[30%] opacity-0 rounded-[50px]" style={{ transform: 'rotate(90deg) translate(0, -130%)', animationDelay: '-0.9s' }}></div>
                <div className="bar5 w-[8%] h-[24%] bg-white absolute left-2/4 top-[30%] opacity-0 rounded-[50px]" style={{ transform: 'rotate(120deg) translate(0, -130%)', animationDelay: '-0.8s' }}></div>
                <div className="bar6 w-[8%] h-[24%] bg-white absolute left-2/4 top-[30%] opacity-0 rounded-[50px]" style={{ transform: 'rotate(150deg) translate(0, -130%)', animationDelay: '-0.7s' }}></div>
                <div className="bar7 w-[8%] h-[24%] bg-white absolute left-2/4 top-[30%] opacity-0 rounded-[50px]" style={{ transform: 'rotate(180deg) translate(0, -130%)', animationDelay: '-0.6s' }}></div>
                <div className="bar8 w-[8%] h-[24%] bg-white absolute left-2/4 top-[30%] opacity-0 rounded-[50px]" style={{ transform: 'rotate(210deg) translate(0, -130%)', animationDelay: '-0.5s' }}></div>
                <div className="bar9 w-[8%] h-[24%] bg-white absolute left-2/4 top-[30%] opacity-0 rounded-[50px]" style={{ transform: 'rotate(240deg) translate(0, -130%)', animationDelay: '-0.4s' }}></div>
                <div className="bar10 w-[8%] h-[24%] bg-white absolute left-2/4 top-[30%] opacity-0 rounded-[50px]" style={{ transform: 'rotate(270deg) translate(0, -130%)', animationDelay: '-0.3s' }}></div>
                <div className="bar11 w-[8%] h-[24%] bg-white absolute left-2/4 top-[30%] opacity-0 rounded-[50px]" style={{ transform: 'rotate(300deg) translate(0, -130%)', animationDelay: '-0.2s' }}></div>
                <div className="bar12 w-[8%] h-[24%] bg-white absolute left-2/4 top-[30%] opacity-0 rounded-[50px]" style={{ transform: 'rotate(330deg) translate(0, -130%)', animationDelay: '-0.1s' }}></div>
            </div>
        </div>
    );
};

export default Loading;
