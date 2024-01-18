import React from 'react';
import SEO from './SEO';

const NotFound = () => {
    return (
        <>
            <SEO title='NotFound' desc="Oops! It seems like you've wandered into uncharted territory. Our apologies, the page you're looking for isn't here. Let's guide you back to the heart of our site, where a wealth of Islamic knowledge and resources awaits your exploration." />
            <div className="h-[calc(100vh-92px)] pb-[63.98px] flex justify-center items-center text-5xl font-bold">
                NotFound Page My Brother
            </div>
        </>
    )
}

export default NotFound;