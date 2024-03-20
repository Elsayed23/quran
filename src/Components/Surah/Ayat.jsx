import React from 'react';
import { Tooltip } from "@material-tailwind/react";
import { FaLink } from "react-icons/fa6";
import { CiPause1, CiPlay1 } from 'react-icons/ci'
import { FaRegClipboard } from "react-icons/fa";
import toast from 'react-hot-toast';


const Card = ({ text: { arab }, number: { inSurah }, translation: { en }, id, setIsPlayingSurah, singleAyahs, meta: { page } }) => {

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

    const handleClick = () => {
        setIsPlaying(prev => !prev)
        setIsPlayingSurah && setIsPlayingSurah(false)
    }



    const handleCopyAyaText = async () => {
        try {
            await navigator.clipboard.writeText(arab);
            toast.success('Copied to clipboard')
        } catch (error) {
            console.error(
                "Unable to copy to clipboard.",
                error
            );
            toast.error("Copy to clipboard failed");
        }
    };

    const handleCopyLinkOfAya = async () => {
        try {
            await navigator.clipboard.writeText(`https://elsayed23.github.io/quran/verse/${id}/${inSurah}`);
            toast.success('Copied to clipboard')
        } catch (error) {
            console.error(
                "Unable to copy to clipboard.",
                error
            );
            toast.error("Copy to clipboard failed");
        }
    }

    return (
        <li id={inSurah} className={`flex flex-col-reverse items-start gap-3 sm:flex-row sm:items-center justify-between leading-normal py-10 border-b border-b-[#464b50]`}
            style={{
                transition: 'ease-in-out .4s'
            }}>
            <div className="flex flex-col w-full gap-2 sm:pl-7 md:text-3xl text-xl">
                <p className="leading-relaxed md:leading-relaxed tracking-wide">
                    {arab.includes('بِسۡمِ ٱللَّهِ ٱلرَّحۡمَـٰنِ ٱلرَّحِیمِ ') ? arab.slice(39) : arab}
                    <span className='font-serif mr-2'>({inSurah})</span>
                </p>
                <p dir='ltr' className="text-left leading-relaxed md:leading-normal font-sans tracking-wide">
                    {en}
                </p>
            </div>
            <div className='w-full sm:w-fit'>
                <div className="flex flex-row-reverse sm:flex-col text-xs items-center font-semibold gap-2 text-[#777]">
                    <span className='mt-1 sm:mt-0'>
                        {
                            `${id}:${inSurah}`
                        }
                    </span>
                    <Tooltip
                        content='نسخ النص'
                        className='bg-[#2ca4ab]'
                    >

                        <div
                            onClick={handleCopyAyaText}
                            className="toggleAudio clipboard flex items-center justify-center gap-3 cursor-pointer w-8 h-8 sm:w-9 sm:h-9 text-[#777] hover:text-[#2ca4ab] hover:bg-[#2ca4ab] rounded-full">
                            <FaRegClipboard size={18} />
                        </div>
                    </Tooltip>
                    <Tooltip
                        content={isPlaying ? 'ايقاف' : 'تشغيل'}
                        className='bg-[#2ca4ab]'
                    >
                        <div
                            onClick={handleClick}
                            className="toggleAudio flex items-center justify-center gap-3 cursor-pointer w-8 h-8 sm:w-9 sm:h-9 text-[#777] hover:text-[#2ca4ab] hover:bg-[#2ca4ab] rounded-full">
                            {isPlaying ? <CiPause1 size={18} /> : <CiPlay1 className='ml-1' size={18} />}
                        </div>
                    </Tooltip>
                    <Tooltip
                        content='نسخ الوصلة'
                        className='bg-[#2ca4ab]'
                    >
                        <div
                            onClick={handleCopyLinkOfAya}
                            className="toggleAudio flex items-center justify-center gap-3 cursor-pointer w-8 h-8 sm:w-9 sm:h-9 text-[#777] hover:text-[#2ca4ab] hover:bg-[#2ca4ab] rounded-full">
                            <FaLink size={18} />
                        </div>
                    </Tooltip>
                </div>
                <audio
                    ref={audioRef}
                    src={isPlaying ? `${singleAyahs}${id < 10 ? `00${id}` : id >= 10 && id < 100 ? `0${id}` : id}${inSurah < 10 ? `00${inSurah}` : inSurah >= 10 && inSurah < 100 ? `0${inSurah}` : inSurah}.mp3` : ''} />
            </div>
        </li>
    )
}

export default Card;