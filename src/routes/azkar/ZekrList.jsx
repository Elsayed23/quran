import { CiPlay1, CiPause1 } from "react-icons/ci";
import { Button, Tooltip } from '@material-tailwind/react';
import { motion } from 'framer-motion'
import React from 'react';
import toast from "react-hot-toast";
import { FaRegClipboard } from "react-icons/fa";

const List = ({ text, filename, count, setIsPlayingZekr }) => {

    const audioRef = React.useRef(null);

    const [isPlaying, setIsPlaying] = React.useState(false)

    const [zekrCount, setZekrCount] = React.useState(count)

    const handleClickOnCounter = () => {
        zekrCount !== 0 ? setZekrCount(prev => prev - 1) : setZekrCount(0)
    }

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
        setIsPlayingZekr(false)
    }
    const handleCopyAyaText = async () => {
        try {
            await navigator.clipboard.writeText(text);
            toast.success('Copied to clipboard')
        } catch (error) {
            console.error(
                "Unable to copy to clipboard.",
                error
            );
            toast.error("Copy to clipboard failed");
        }
    };

    return (
        <li className={`leading-normal p-4 bg-black bg-opacity-20 rounded-md`}>
            <div className="mb-5 w-full flex sm:items-center gap-2 sm:gap-0 flex-col sm:flex-row justify-between">
                <div className="text-xl md:text-2xl sm:pl-7 leading-relaxed md:leading-relaxed tracking-wide">
                    {text}
                </div>
                <div className="flex flex-row-reverse sm:flex-col text-xs items-center font-semibold gap-2 text-[#777]" >
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
                </div>

            </div>
            <motion.div
                whileTap={{
                    scale: zekrCount !== 0 ? .97 : null
                }}
            >
                <Button ripple={false} disabled={zekrCount === 0} onClick={handleClickOnCounter} className={`w-full ${zekrCount === 0 ? 'bg-red-700' : 'bg-green-600'} py-4 text-sm`}>{zekrCount}</Button>
            </motion.div>
            <audio
                ref={audioRef}
                src={isPlaying ? require(`../../assets/audio/${filename}.mp3`) : ''} />
        </li>
    )
}

export default List;