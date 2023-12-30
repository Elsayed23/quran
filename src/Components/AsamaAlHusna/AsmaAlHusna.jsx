import axios from 'axios';
import React from 'react';
import AsmaList from './AsmaList';
import SecTitle from '../other/SecTitle';
import PageTitle from '../other/PageTitle';
import Loading from '../other/Loading';
import ProgressBar from '../other/ProgressBar';
import bgImage from '../../assets/asmaaAlhosna.jpeg'

const AsmaAlHusna = () => {

    const [asmaa, setAsmaa] = React.useState(null)
    const [loading, setLoading] = React.useState(true);

    async function asmaAlHusna() {
        const { data } = await axios.get('https://api.aladhan.com/v1/asmaAlHusna')
        setAsmaa(data.data);
        setLoading(false)
    }


    const Asma = asmaa?.map((asmaa, idx) => {
        return (
            <AsmaList key={idx} {...asmaa} />
        )
    })

    React.useEffect(() => {
        asmaAlHusna()
    }, [])

    return (
        loading
            ?
            <Loading />
            :
            <>
                <PageTitle title='Quran | الأسماء الحسني' />
                <ProgressBar />
                <div className="py-14 px-4 md:px-16 before:fixed before:w-full before:h-full before:bg-[#000000e6] before:left-0 before:top-0 before:-z-[9]">
                    <img src={bgImage} className='fixed top-0 left-0 w-full h-full -z-10' />
                    <SecTitle title='ٱلۡأَسۡمَآءُ ٱلۡحُسۡنَى' />
                    <ol className='grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-5'>
                        {Asma}
                    </ol>
                </div>
            </>
    )
}

export default AsmaAlHusna;