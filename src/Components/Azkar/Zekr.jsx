import React from 'react';
import { useParams } from 'react-router-dom';
import SEO from '../other/SEO';
import SecTitle from '../other/SecTitle';
import List from './ZekrList'
import ProgressBar from '../other/ProgressBar';
import adhkar from '../../adhkar.json'
import { motion } from 'framer-motion';
import { faPause, faPlay } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


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

    const handlePlaySurah = async () => {
        try {
            await audioRef.current.play()
        } catch (error) {

        }
    };

    // Pause other playing audio elements when play surah
    React.useEffect(() => {
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

    const handlePauseSurah = async () => {
        try {
            await audioRef.current.pause()
        } catch (error) {
            console.log(error);
        }
    };


    return (
        <>
            <SEO title={zekrName} desc='Immerse yourself in the serene world of remembrances. Our Azkar page offers a collection of morning and evening supplications, fostering a mindful and spiritual atmosphere. Start and end your day with these beautiful Azkar to bring tranquility to your heart and soul.' />
            <ProgressBar />
            <div className='py-14 px-4 md:px-16'>
                <SecTitle title={zekrName} />
                <div className='flex gap-4 mb-9'>
                    <audio ref={audioRef} onEnded={() => { setIsEnded(true) }} src={require(`../../assets/audio/${getZerk[0].filename}.mp3`)} />
                    <motion.div whileTap={{ scale: .9 }} onClick={() => { setIsPlaying(prev => !prev) }} className="toggleAudio cursor-pointer px-4 py-2 text-[#2ca4ab] hover:bg-[#2ca4ab] rounded-sm">
                        <div className='flex items-center gap-3' onClick={isPlaying ? handlePauseSurah : handlePlaySurah}>
                            {isPlaying ? 'Pause' : 'Play'} Audio
                            {
                                isPlaying
                                    ?
                                    <FontAwesomeIcon icon={faPause} size='sm' />
                                    :
                                    <FontAwesomeIcon icon={faPlay} size='sm' />
                            }
                        </div>
                    </motion.div>
                </div>
                <ul className='flex flex-col gap-8 text-xl md:text-3xl leading-normal'>
                    {zekr}
                </ul>
            </div>
        </>
    )
}

export default Zekr;