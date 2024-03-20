import React from 'react';
import SEO from '../other/SEO'
import SecTitle from '../other/SecTitle';
import SajdaSurah from './SajdaSurah';
import Loading from '../other/Loading';
import ProgressBar from '../other/ProgressBar';
// import bgImage from '../../assets/images/sajda.webp'
import { sajdaData } from '../../constants';


const Sajda = () => {

    const ayah = sajdaData?.map((ayah, idx) =>
        <SajdaSurah
            key={idx}
            {...ayah}
        />
    )

    return (
        ayah
            ?
            <>
                <SEO title='آيات السجدة' desc='Discover the verses of prostration in the Quran. Our Verses of Prostration page provides insight into the specific verses where Muslims perform Sujud. Enhance your Quranic studies and deepen your connection with these sacred verses.' />
                <ProgressBar />
                <div className="py-14 ">
                    <SecTitle title='آيَآتُ السَّجْدَة' />
                    <ul className='flex flex-col gap-14 text-3xl list-decimal pr-4 pl-3 md:pr-16'>
                        {ayah}
                    </ul>
                </div>
            </>
            :
            <Loading />
    )
}

export default Sajda;