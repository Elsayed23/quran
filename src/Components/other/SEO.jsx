import React from 'react';
import { Helmet } from 'react-helmet';

const SEO = ({ title, desc }) => {
    return (
        <Helmet title={`Quran | ${title}`}>
            <meta property="og:title" content={`quran | ${title}`} />
            <meta name="description" content={desc} />
            <meta property="og:description" content={desc} />
        </Helmet>
    )
}

export default SEO;