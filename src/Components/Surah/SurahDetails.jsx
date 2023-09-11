import React from 'react';
import axios from 'axios';
import Ayat from './Ayat';
import { useParams } from 'react-router-dom';
import PageTitle from '../PageTitle';
import Loading from '../Loading';
import { Select, Option } from "@material-tailwind/react";

const AyaDetails = () => {
    const { id } = useParams()

    const [aya, setAya] = React.useState(null)
    const [ayatCount, setAyatCount] = React.useState(null)
    const [surah, setSurah] = React.useState(null)
    const [surahCount, setSurahCount] = React.useState(null)
    const [engName, setEngName] = React.useState(null)
    const [loading, setLoading] = React.useState(true);
    const [shekh, setShekh] = React.useState('عبدالباسط');
    const [audio, setAudio] = React.useState(`https://download.quranicaudio.com/qdc/abdul_baset/murattal/${id}.mp3`);




    async function getAyat() {

        try {
            const { data } = await axios.get(`http://api.alquran.cloud/v1/surah/${id}`)

            const { ayahs, name, numberOfAyahs, number, englishName } = data.data

            setAya(ayahs)
            setSurah(name)
            setAyatCount(numberOfAyahs)
            setSurahCount(number)
            setEngName(englishName)
            setLoading(false)

        } catch (error) {
            console.log(error);
        }

    }
    console.log(shekh);

    function handleChange(value) {
        setShekh(value)
    }



    React.useEffect(() => {
        getAyat()
    }, [])

    React.useEffect(() => {
        if (shekh === 'عبدالباسط') {
            setAudio(`https://download.quranicaudio.com/qdc/abdul_baset/murattal/${id}.mp3`)
        } else if (shekh === 'مشاري العفاسي') {
            setAudio(`https://cdn.islamic.network/quran/audio-surah/128/ar.alafasy/${id}.mp3`)
        }
    }, [shekh])

    const ayat = aya?.map(aya => {
        return (
            <Ayat key={aya.number} {...aya} />
        )
    })

    return (
        loading
            ?
            <Loading />
            :
            <>
                <PageTitle title={`${surah}`} />
                <div className='py-16 pr-4 pl-3 md:pr-16'>
                    <h1 className='text-center mb-20 leading-normal text-2xl md:text-4xl font-semibold'>{engName} | {surah} - سورة {surahCount} - عدد آياتها {ayatCount}</h1>
                    <div className="w-72 mb-5">
                        <Select color="blue" onChange={handleChange} label='القارئ' variant='standard' value={shekh}>
                            <Option value="عبدالباسط">عبدالباسط</Option>
                            <Option value="مشاري العفاسي">مشاري العفاسي</Option>
                        </Select>
                    </div>

                    <audio controls src={audio} className='mb-8' />


                    <ol className='flex flex-col gap-14 text-4xl md:text-5xl'>
                        {ayat}
                    </ol>
                </div>
            </>
    )
}
export default AyaDetails;