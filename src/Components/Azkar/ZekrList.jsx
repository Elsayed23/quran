import { faPlay, faPause } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Button, Tooltip } from '@material-tailwind/react';
import { motion } from 'framer-motion'
import React from 'react';

const List = ({ text, filename, count, setIsPlayingZekr }) => {

    const audioRef = React.useRef(null);

    const [isPlaying, setIsPlaying] = React.useState(false)
    const [innerWidth, setInnerWidth] = React.useState(window.innerWidth)

    const [zekrCount, setZekrCount] = React.useState(count)

    function handleClick() {
        zekrCount !== 0 ? setZekrCount(prev => prev - 1) : setZekrCount(0)
    }



    React.useEffect(() => {
        audioRef.current.addEventListener("ended", () => {
            setIsPlaying(false)
        });
        audioRef.current.addEventListener("pause", () => {
            setIsPlaying(false)
        });
        window.addEventListener("resize", () => {
            setInnerWidth(window.innerWidth)
        })

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


    const font = {
        fontFamily: '"Traditional Arabic", "Times New Roman"'
    }

    return (
        <li style={font} className={`leading-normal p-4 bg-black bg-opacity-20 rounded-md`}>
            <div className="mb-5 w-full flex sm:items-center gap-2 sm:gap-0 flex-col sm:flex-row justify-between">
                <div className="text-xl md:text-3xl sm:pl-7 leading-relaxed md:leading-relaxed tracking-wide">
                    {text}
                </div>
                <Tooltip
                    placement={innerWidth >= 540 ? 'top' : 'left'}
                    content={isPlaying ? 'Pause' : 'play'}
                    className='bg-[#2ca4ab]'
                >
                    <div className='w-fit'>
                        <div
                            onClick={() => { setIsPlaying(prev => !prev); setIsPlayingZekr(false) }}
                            className="toggleAudio flex items-center justify-center gap-3 cursor-pointer w-9 h-9 text-[#2ca4ab] hover:bg-[#2ca4ab] rounded-full">
                            <FontAwesomeIcon icon={isPlaying ? faPause : faPlay} size='sm' className='w-[14px] h-[14px]' />
                        </div>
                    </div>
                </Tooltip>
            </div>
            <motion.div
                whileTap={{
                    scale: zekrCount !== 0 ? .97 : null
                }}
            >
                <Button ripple={false} disabled={zekrCount === 0} onClick={handleClick} className={`w-full ${zekrCount === 0 ? 'bg-red-700' : 'bg-green-600'} py-4 text-sm`}>{zekrCount}</Button>
            </motion.div>
            <audio
                ref={audioRef}
                src={require(`../../assets/audio/${filename}.mp3`)} />
        </li>
    )
}

export default List;