import axios from 'axios';
import React from 'react';
import AsmaList from './AsmaList';
import SecTitle from '../SecTitle';
import PageTitle from '../PageTitle';
import Loading from '../Loading';

const AsmaAlHusna = () => {

    const [asmaa, setAsmaa] = React.useState(null)
    const [loading, setLoading] = React.useState(true);

    async function asmaAlHusna() {
        const { data } = await axios.get('http://api.aladhan.com/v1/asmaAlHusna')
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
                <PageTitle title='الأسماء الحسني' />
                <div className="py-8 px-4 md:pr-16">
                    <SecTitle title='الأسماء الحسني' />
                    <ol className='flex flex-col gap-14 text-2xl md:text-3xl'>
                        {Asma}
                    </ol>
                </div>
            </>
    )
}

export default AsmaAlHusna;