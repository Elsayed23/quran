import React from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import PageTitle from '../PageTitle';
import SecTitle from '../SecTitle';
import List from './ZekrList'
import Loading from '../Loading';

const Zekr = () => {

    const [zekr, setZekr] = React.useState(null)
    const [zekrName, setZekrName] = React.useState(null)
    const [loading, setLoading] = React.useState(true);

    const { name } = useParams()


    async function getZekr() {
        const { data } = await axios.get(`https://ahegazy.github.io/muslimKit/json/${name}.json`)
        const { title, content } = data
        setZekrName(title)
        setZekr(content)
        setLoading(false)
    }

    const list = zekr?.map((zekr, idx) => {
        return (
            <List key={idx} {...zekr} />
        )
    })

    React.useEffect(() => {
        getZekr()
    }, [name])



    return (
        loading
            ?
            <Loading />
            :
            <>
                <PageTitle title={zekrName} />
                <div className="py-8 px-4 md:px-16">
                    <SecTitle title={zekrName} />
                    <ul className='flex flex-col gap-14 text-4xl leading-normal'>
                        {list}
                    </ul>
                </div>
            </>
    )
}

export default Zekr;