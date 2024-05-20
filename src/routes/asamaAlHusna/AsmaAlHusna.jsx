import React from 'react';
import AsmaList from './AsmaList';
import SecTitle from '../../components/other/SecTitle';
import SEO from '../../components/other/SEO';
import Loading from '../../components/other/Loading';
import ProgressBar from '../../components/other/ProgressBar';
import { asmaAlHusnaData } from '../../constants';

const AsmaAlHusna = () => {

    const Asma = asmaAlHusnaData.map((asmaa, idx) => {
        return (
            <AsmaList key={idx} {...asmaa} />
        )
    })

    return (
        asmaAlHusnaData
            ?
            <>
                <SEO title='الأسماء الحسني' desc="Explore the divine beauty of Allah's Names. Our AsmaAlHusna page provides a comprehensive list of the 99 Names of Allah, each carrying profound meanings and significance in Islamic tradition. Delve into the spiritual journey of understanding and reflecting upon the attributes of the Almighty." />
                <ProgressBar />
                <div className="overflow-hidden container mx-auto py-14 px-4">
                    <SecTitle title='ٱلۡأَسۡمَآءُ ٱلۡحُسۡنَى' />
                    <ol className='grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-5'>
                        {Asma}
                    </ol>
                </div>
            </>
            :
            <Loading />
    )
}

export default AsmaAlHusna;