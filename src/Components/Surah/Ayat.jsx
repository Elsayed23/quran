import React from 'react';
import { Tooltip } from "@material-tailwind/react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPause, faPlay } from '@fortawesome/free-solid-svg-icons';

const Card = ({ text, numberInSurah, id, setIsPlayingSurah, singleAyahs }) => {


    const audioRef = React.useRef(null);
    const [isPlaying, setIsPlaying] = React.useState(false)

    React.useEffect(() => {
        audioRef.current.addEventListener("ended", () => {
            setIsPlaying(false)
        });
        audioRef.current.addEventListener("pause", () => {
            setIsPlaying(false)
        });
    }, [])

    React.useEffect(() => {
        const handleAudioState = () => {
            if (isPlaying) {
                // Pause other playing audio elements
                document.querySelectorAll("audio").forEach((audio) => {
                    if (audio !== audioRef.current) {
                        audio.pause();
                        audio.currentTime = 0;
                    }
                });
                audioRef.current.play();
            } else {
                audioRef.current.pause();
            }
        };

        handleAudioState();
    }, [isPlaying]);

    function handleClick() {
        setIsPlaying(prev => !prev)
        setIsPlayingSurah(false)
    }


    return (
        <li className='flex items-center justify-between leading-normal py-10 border-b'>
            <div className="text-xl flex items-center gap-2 md:text-3xl pl-7 font-[quran-font] leading-relaxed md:leading-relaxed tracking-wide">
                {text.includes('بِسۡمِ ٱللَّهِ ٱلرَّحۡمَـٰنِ ٱلرَّحِیمِ ') ? text.slice(39) : text}
                <span className='text-xl  font-serif'>({numberInSurah})</span>
            </div>
            <div>
                <Tooltip
                    content={isPlaying ? 'Pause' : 'play'}
                    className='bg-[#2ca4ab]'
                >
                    <div
                        onClick={handleClick}
                        className="toggleAudio flex items-center justify-center gap-3 cursor-pointer w-9 h-9 text-[#2ca4ab] hover:bg-[#2ca4ab] rounded-full">
                        <FontAwesomeIcon icon={isPlaying ? faPause : faPlay} size='sm' className='w-[14px]' />
                    </div>
                </Tooltip>
                <audio
                    ref={audioRef}
                    src={`${singleAyahs}${id < 10 ? `00${id}` : id >= 10 && id < 100 ? `0${id}` : id}${numberInSurah < 10 ? `00${numberInSurah}` : numberInSurah >= 10 && numberInSurah < 100 ? `0${numberInSurah}` : numberInSurah}.mp3`} />
            </div>
        </li>
    )
}

export default Card;