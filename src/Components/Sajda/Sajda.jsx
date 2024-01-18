import React from 'react';
import SEO from '../other/SEO'
import SecTitle from '../other/SecTitle';
import axios from 'axios';
import SajdaSurah from './SajdaSurah';
import Loading from '../other/Loading';
import ProgressBar from '../other/ProgressBar';
import bgImage from '../../assets/sajda.webp'

const Sajda = () => {

    const [ayahs, setAyahs] = React.useState(null)
    const [loading, setLoading] = React.useState(true);

    async function getAyahs() {
        const { data } = await axios.get('https://api.alquran.cloud/v1/sajda/quran-uthmani')
        const { ayahs } = data.data
        setAyahs(ayahs);
        setLoading(false)
    }


    const test = ayahs?.map((ayah, idx) => {
        return (
            <SajdaSurah key={idx} {...ayah} />
        )
    })


    React.useEffect(() => {
        getAyahs()
    }, [])


    return (
        loading
            ?
            <Loading />
            :
            <>
                <SEO title='آيات السجدة' desc='Discover the verses of prostration in the Quran. Our Verses of Prostration page provides insight into the specific verses where Muslims perform Sujud. Enhance your Quranic studies and deepen your connection with these sacred verses.' />
                <ProgressBar />
                <div className="py-14 pr-4 pl-3 md:pr-16 before:fixed before:w-full before:h-full before:bg-[#000000e6] before:left-0 before:top-0 before:-z-[9]">
                    <img src={bgImage} className='fixed top-0 left-0 w-full h-full -z-10' />
                    <SecTitle title='آيَآتُ السَّجْدَة' />
                    <ol className='flex flex-col gap-14 text-3xl list-decimal'>
                        {test}
                    </ol>
                </div>
            </>
    )
}

export default Sajda;