import React from 'react';
import { useParams } from 'react-router-dom';
import SEO from '../other/SEO';
import SecTitle from '../other/SecTitle';
import List from './ZekrList'
import ProgressBar from '../other/ProgressBar';
import adhkar from '../../adhkar.json'
import PlayButton from '../other/PlayButton';


const Zekr = () => {


    const [isPlaying, setIsPlaying] = React.useState(false)
    const [isEnded, setIsEnded] = React.useState(false)


    React.useEffect(() => {
        isEnded && setIsPlaying(false)
    }, [isEnded])


    const { id } = useParams()

    const getZerk = adhkar.filter(zekr => {
        return zekr.id === +id
    })


    const zekr = getZerk[0].array.map((zekr, idx) => {
        return (
            <List key={idx} adhkarCount={getZerk[0].array.length} setIsPlayingZekr={setIsPlaying} {...zekr} />
        )
    })

    const audioRef = React.useRef(null);


    React.useEffect(() => {
        isPlaying ? audioRef.current?.play() : audioRef.current?.pause()

        const handleAudioState = () => {
            if (isPlaying) {
                document.querySelectorAll("audio").forEach((audio) => {
                    if (audio !== audioRef.current) {
                        audio.pause();
                        audio.currentTime = 0;
                    }
                });
                audioRef.current?.play();
            } else {
                audioRef.current?.pause();
            }
        };

        handleAudioState();
    }, [isPlaying]);

    const zekrName = getZerk[0].category


    return (
        <>
            <SEO title={zekrName} desc='Immerse yourself in the serene world of remembrances. Our Azkar page offers a collection of morning and evening supplications, fostering a mindful and spiritual atmosphere. Start and end your day with these beautiful Azkar to bring tranquility to your heart and soul.' />
            <ProgressBar />
            <div className='py-14 px-4 md:px-16 min-h-[calc(100vh-194px)]'>
                <SecTitle title={zekrName} />
                <div className='flex gap-4 mb-9'>
                    <audio ref={audioRef} onEnded={() => { setIsEnded(true) }} src={isPlaying ? require(`../../assets/audio/${getZerk[0].filename}.mp3`) : ''} />
                    < PlayButton isPlaying={isPlaying} setIsPlaying={setIsPlaying} />
                </div>
                <ul className='flex flex-col gap-8 text-xl md:text-3xl leading-normal'>
                    {zekr}
                </ul>
            </div>
        </>
    )
}

export default Zekr;