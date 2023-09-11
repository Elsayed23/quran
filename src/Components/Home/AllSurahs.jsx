import React from 'react';
import axios from 'axios';
import Surah from './Surah';
import SecTitle from '../SecTitle';
import PageTitle from '../PageTitle';
import Loading from '../Loading';


const Home = () => {

    const [surah, setSurah] = React.useState(null)
    const [loading, setLoading] = React.useState(true);


    async function getSurah() {
        const { data } = await axios.get('http://api.alquran.cloud/v1/surah')
        setSurah(data.data)
        setLoading(false)
    }

    const suraH = surah?.map((surah, idx) => {
        return (
            <Surah key={idx} {...surah} />
        )
    })

    React.useEffect(() => {
        getSurah()
    }, [])

    return (
        loading
            ?
            <Loading />
            :
            <>
                <PageTitle title='جميع السور' />
                <div className="py-8 px-4 md:pr-16">
                    <SecTitle title='جميع السور' />
                    <ul className='flex flex-col gap-14 text-2xl md:text-3xl'>
                        {suraH}
                    </ul>
                </div>
            </>
    )
}


export default Home;