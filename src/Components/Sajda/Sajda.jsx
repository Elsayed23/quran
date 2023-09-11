import React from 'react';
import PageTitle from '../PageTitle'
import SecTitle from '../SecTitle';
import axios from 'axios';
import SajdaSurah from './SajdaSurah';
import Loading from '../Loading';

const Sajda = () => {

    const [ayahs, setAyahs] = React.useState(null)
    const [loading, setLoading] = React.useState(true);

    async function getAyahs() {
        const { data } = await axios.get('http://api.alquran.cloud/v1/sajda/quran-uthmani')
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
                <PageTitle title='آيات السجدة' />
                <div className="py-8 pr-4 pl-3 md:pr-16">
                    <SecTitle title='آيات السجدة' />
                    <ol className='flex flex-col gap-14 text-3xl list-decimal'>
                        {test}
                    </ol>
                </div>
            </>
    )
}

export default Sajda;