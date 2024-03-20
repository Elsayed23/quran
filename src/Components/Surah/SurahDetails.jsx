import React from 'react';
import axios from 'axios';
import Ayat from './Ayat';
import { useParams } from 'react-router-dom';
import SEO from '../other/SEO';
import Loading from '../other/Loading';
import { Select, Option } from "@material-tailwind/react";
import ProgressBar from '../other/ProgressBar';
import besmAllah from '../besmAllah.svg'
import Download from './Download';
import PlayButton from '../other/PlayButton';
import { HashLink as Link } from 'react-router-hash-link';

const SurahDetails = () => {


    const { id } = useParams()

    const [aya, setAya] = React.useState(null)
    const [surah, setSurah] = React.useState(null)
    const [revelationType, setRevelationType] = React.useState(null);
    const [loading, setLoading] = React.useState(true);
    const [sheikh, setSheikh] = React.useState('المنشاوي');
    // const [sheikhImg, setSheikhImg] = React.useState(require('../../assets/images/Elminshwey.jpg'))
    const [isPlaying, setIsPlaying] = React.useState(false)
    const [isEnded, setIsEnded] = React.useState(false)
    const [audio, setAudio] = React.useState(`https://download.quranicaudio.com/qdc/siddiq_minshawi/murattal/${id}.mp3`);
    const [singleAyahs, setSingleAyahs] = React.useState('https://everyayah.com/data/Yasser_Ad-Dussary_128kbps/')

    const audioRef = React.useRef(null);

    React.useEffect(() => {
        isEnded && setIsPlaying(false)
    }, [isEnded])


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
    }, [isPlaying])

    React.useEffect(() => {
        setIsPlaying(false)
    }, [sheikh])


    React.useEffect(() => {
        const handleKeyPress = (event) => {
            if (event.code === 'Space') {
                setIsPlaying(prev => !prev);
            }
        };

        window.addEventListener('keydown', handleKeyPress);

        return () => {
            window.removeEventListener('keydown', handleKeyPress);
        };
    }, []);


    const getAyat = async () => {

        try {
            const { data: { data } } = await axios.get(`https://api.quran.gading.dev/surah/${id}`)

            const { verses, revelation: { en }, name: { short } } = data

            en === 'Medinan' ? setRevelationType('مدنية') : setRevelationType('مكية')
            setAya(verses)
            setSurah(short)
            setLoading(false)

        } catch (error) {
            console.log(error);
        }

    }


    // Important
    // const getSurahPerPage = aya?.reduce((result, item) => {
    //     const pageNumber = item.meta.page;
    //     const verse = item.text.arab;

    //     if (result[pageNumber]) {
    //         result[pageNumber].push(verse);
    //     } else {
    //         result[pageNumber] = [verse];
    //     }

    //     return result;
    // }, {});


    const surahsCount = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99, 100, 101, 102, 103, 104, 105, 106, 107, 108, 109, 110, 111, 112, 113, 114]

    const handleSurahNum = id < 10 ? `00${id}` : id >= 10 && id < 100 ? `0${id}` : id;



    const recitations = [
        {
            id: 1,
            name: 'المنشاوي',
            audio: `https://download.quranicaudio.com/qdc/siddiq_minshawi/murattal/${id}.mp3`,
            img: require('../../assets/images/Elminshwey.jpg'),
            surahList: surahsCount,
        },
        {
            id: 2,
            name: 'حموده عثمان',
            audio: `https://ia801203.us.archive.org/15/items/001_20231216/${handleSurahNum}.mp3`,
            img: require('../../assets/images/Hamoda.png'),
            surahList: [1],
        },
        {
            id: 3,
            name: 'هيثم الدخين',
            audio: `https://server16.mp3quran.net/h_dukhain/Rewayat-Hafs-A-n-Assem/${handleSurahNum}.mp3`,
            img: require('../../assets/images/Haitham.jpg'),
            surahList: surahsCount,
        },
        {
            id: 4,
            name: 'ياسر الدوسري',
            audio: `https://download.quranicaudio.com/quran/yasser_ad-dussary//${handleSurahNum}.mp3`,
            img: require('../../assets/images/Yasser_dusary.jpg'),
            surahList: surahsCount,
        },
        {
            id: 5,
            name: 'عبد الباسط',
            audio: `https://download.quranicaudio.com/qdc/abdul_baset/murattal/${id}.mp3`,
            img: require('../../assets/images/Abd_El_Basset.jpg'),
            surahList: surahsCount,
        },
        {
            id: 6,
            name: 'محمد ايوب',
            audio: `https://download.quranicaudio.com/quran/muhammad_ayyoob_hq//${handleSurahNum}.mp3`,
            img: require('../../assets/images/Mohamed_Ayoub.jpg'),
            surahList: surahsCount,
        },
        {
            id: 7,
            name: 'الحصري',
            audio: `https://download.quranicaudio.com/qdc/khalil_al_husary/murattal/${id}.mp3`,
            img: require('../../assets/images/ELhosary.jpg'),
            surahList: surahsCount,
        },
        {
            id: 8,
            name: 'مشاري العفاسي',
            audio: `https://download.quranicaudio.com/qdc/mishari_al_afasy/murattal/${id}.mp3`,
            img: require('../../assets/images/Mishari.jpg'),
            surahList: surahsCount,
        },
        {
            id: 9,
            name: 'ماهر المعيقلي',
            audio: `https://download.quranicaudio.com/quran/maher_256//${handleSurahNum}.mp3`,
            img: require('../../assets/images/Maher.png'),
            surahList: surahsCount,
        },
        {
            id: 10,
            name: 'عبدالله علي جابر',
            audio: `https://download.quranicaudio.com/quran/abdullaah_alee_jaabir_studio//${handleSurahNum}.mp3`,
            img: require('../../assets/images/Abdullah_Ali.jpg'),
            surahList: surahsCount,
        },
        {
            id: 11,
            name: 'ناصر القطامي',
            audio: `https://download.quranicaudio.com/quran/nasser_bin_ali_alqatami//${handleSurahNum}.mp3`,
            img: require('../../assets/images/Naser.jpg'),
            surahList: surahsCount,
        },
        {
            id: 12,
            name: 'عبد الرشيد صوفي',
            audio: `https://download.quranicaudio.com/quran/abdurrashid_sufi//${handleSurahNum}.mp3`,
            img: require('../../assets/images/Abdul_Rashid_Sufi.jpg'),
            surahList: surahsCount,
        },
        {
            id: 13,
            name: 'سعود الشريم',
            audio: `https://server7.mp3quran.net/shur/${handleSurahNum}.mp3`,
            img: require('../../assets/images/Saud_Al-Shuraim.jpg'),
            surahList: surahsCount,
        },
        {
            id: 14,
            name: 'عبد الرحمن السديس',
            audio: `https://server11.mp3quran.net/sds/${handleSurahNum}.mp3`,
            img: require('../../assets/images/Abdullrahman_Alsudais.jpg'),
            surahList: surahsCount,
        },
        {
            id: 15,
            name: 'حسن صالح',
            audio: `https://server16.mp3quran.net/h_saleh/Rewayat-Hafs-A-n-Assem/${handleSurahNum}.mp3`,
            img: require('../../assets/images/Hasan_Saleh.jpg'),
            surahList: surahsCount,
        },
        {
            id: 16,
            name: 'فارس عباد',
            audio: `https://server8.mp3quran.net/frs_a/${handleSurahNum}.mp3`,
            img: require('../../assets/images/Fares_Abbad.jpg'),
            surahList: surahsCount,
        },
        {
            id: 17,
            name: 'منصور السالمي',
            audio: `https://server14.mp3quran.net/mansor/${handleSurahNum}.mp3`,
            img: require('../../assets/images/Mansour_Al-Salmi.jpg'),
            surahList: surahsCount,
        },
        {
            id: 18,
            name: 'إدريس أبكر',
            audio: `https://server6.mp3quran.net/abkr/${handleSurahNum}.mp3`,
            img: require('../../assets/images/Idris_Abkar.jpg'),
            surahList: surahsCount,
        },
        {
            id: 19,
            name: 'أحمد النفيس',
            audio: `https://server16.mp3quran.net/nufais/Rewayat-Hafs-A-n-Assem/${handleSurahNum}.mp3`,
            img: require('../../assets/images/Ahmed_Al-Nafis.jpg'),
            surahList: surahsCount,
        },
        {
            id: 20,
            name: 'خالد الجليل',
            audio: `https://server10.mp3quran.net/jleel/${handleSurahNum}.mp3`,
            img: require('../../assets/images/Khalid_Galilee.jpg'),
            surahList: surahsCount,
        },
        {
            id: 21,
            name: 'محمد اللحيدان',
            audio: `https://server8.mp3quran.net/lhdan/${handleSurahNum}.mp3`,
            img: require('../../assets/images/Mohamed_Ellhidan.jpg'),
            surahList: surahsCount,
        },
        {
            id: 22,
            name: 'أحمد عبدالرازق نصر',
            audio: `https://ia903103.us.archive.org/19/items/xxxxxxxxxxxxxxxxxxxxxxxxxxx2_20191118_201911/${handleSurahNum}.mp3`,
            img: require('../../assets/images/Ahmed_Nasr.jpg'),
            surahList: surahsCount,
        },
        {
            id: 23,
            name: 'هزاع البلوشي',
            audio: `https://server11.mp3quran.net/hazza/${handleSurahNum}.mp3`,
            img: require('../../assets/images/Hazza_Al-Balushi.jpg'),
            surahList: [1, 13, 14, 15, 18, 19, 25, 29, 30, 31, 36, 37, 38, 39, 40, 42, 44, 47, 49, 50, 51, 52, 53, 54, 55, 56, 57, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99, 100, 101, 102, 103, 104, 105, 106, 107, 108, 109, 110, 111, 112, 113, 114],
        },
        {
            id: 24,
            name: 'عبدالعزيز سحيم (ورش عن نافع) ',
            audio: `https://server16.mp3quran.net/a_sheim/Rewayat-Warsh-A-n-Nafi/${handleSurahNum}.mp3`,
            img: require('../../assets/images/Abdulaziz_Suhaim.jpg'),
            surahList: [1, 18, 31, 50, 56, 57, 67, 72, 75, 112],
        },
        {
            id: 25,
            name: 'إسلام صبحي',
            audio: `https://ia801200.us.archive.org/26/items/002_20231210_202312/${handleSurahNum}.mp3`,
            img: require('../../assets/images/Islam_Sobhy.jpg'),
            surahList: [1, 2, 3, 4, 5, 6, 7, 8, 11, 12, 13, 14, 15, 17, 18, 19, 20, 21, 23, 24, 25, 26, 27, 29, 30, 31, 32, 34, 35, 36, 38, 41, 42, 44, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 66, 67, 68, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99, 100, 101, 102, 103, 104, 105, 106, 107, 108, 109, 110, 111, 113, 114],
        },
        {
            id: 26,
            name: 'رعد محمد الكردي',
            audio: `https://server6.mp3quran.net/kurdi/${handleSurahNum}.mp3`,
            img: require('../../assets/images/Raad_Kurdi.jpg'),
            surahList: [1, 2, 3, 12, 13, 17, 18, 19, 20, 21, 22, 23, 25, 26, 27, 28, 29, 30, 31, 32, 33, 35, 36, 37, 38, 39, 41, 42, 43, 44, 46, 47, 48, 51, 52, 56, 57, 58, 59, 60, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99, 100, 101, 102, 103, 104, 105, 106, 107, 108, 109, 110, 111, 112, 113, 114],
        },
    ]

    React.useEffect(() => {
        if (recitations[1].surahList.includes(+id)) {
            setSheikh('حموده عثمان')
            setSingleAyahs('https://ia801200.us.archive.org/3/items/001007_202312/')
        } else {
            setSheikh('المنشاوي')
            setSingleAyahs('https://everyayah.com/data/Yasser_Ad-Dussary_128kbps/')
        }
        setLoading(true)
        getAyat()
        setIsPlaying(false)
    }, [id])




    React.useEffect(() => {
        recitations.map((recitation) => {
            if (recitation.name === sheikh) {
                if (recitation.surahList.includes(+id)) {
                    setAudio(recitation.audio)
                }
                // setSheikhImg(recitation.img)
            }
        })
    }, [sheikh, id])

    const ayat = aya?.map((aya, idx) => {

        return (
            <Ayat key={idx} singleAyahs={singleAyahs} id={id} setIsPlayingSurah={setIsPlaying} {...aya} />
        )
    })

    return (
        loading
            ?
            <Loading />
            :
            <>
                <SEO title={surah}
                    desc='xplore the Quran online - Listen to beautiful recitations, read the complete Quranic text, and deepen your understanding of Islamic teachings. Our Quran page provides a digital gateway to spiritual enlightenment.'
                />
                {/* <div
                    className="before:fixed before:w-full before:h-full before:bg-[#000000e6] before:left-0 before:top-0 before:z-[-9]"
                >
                    <img
                        src={sheikhImg}
                        className='fixed w-full h-full -z-10'
                        alt="sheikh"
                    />
                </div> */}
                <ProgressBar />
                <div
                    className='pt-10 sm:pt-16 pb-5 sm:pb-7 px-4 container mx-auto'>
                    <div
                        className="revelationType absolute w-fit top-[120px] rounded-bl-md md:top-[117px] right-0 px-3 py-1 bg-[#2ca4ab] z-20">
                        {revelationType}
                    </div>
                    <div
                        className="flex flex-col items-center gap-6 mb-6 md:mb-20">
                        <h1
                            className='font-[surahnames] text-4xl md:text-5xl'>{handleSurahNum}surah</h1>
                        <img
                            src={besmAllah} alt="besmAllah" />
                    </div>
                    <div
                        className="w-72 mb-5 select">
                        <Select color='blue-gray' onChange={(value) => { setSheikh(value) }} animate={{ mount: { y: 0 }, unmount: { y: 25 } }} label='القارئ' variant='standard' value={sheikh} className='text-white'>
                            {
                                recitations.map((recitation, idx) => {
                                    return (
                                        <Option
                                            className={`text-[#2ca4ab] duration-0`}
                                            hidden={!recitation.surahList.includes(+id)}
                                            key={idx}
                                            value={recitation.name}
                                        >
                                            {
                                                recitation.name
                                            }
                                        </Option>
                                    )
                                })
                            }
                        </Select>
                    </div>
                    <div className="flex justify-between mb-9 items-center">
                        <div>
                            <audio
                                ref={audioRef}
                                onEnded={() => { setIsEnded(true) }}
                                src={audio}
                            />
                            <PlayButton isPlaying={isPlaying} setIsPlaying={setIsPlaying} />
                        </div>
                        <Download
                            url={audio}
                            surahName={surah}
                            recitation={sheikh}
                        />
                    </div>
                    <Alert
                        sheikh={
                            recitations[1].surahList.includes(+id)
                                ? 'حموده عثمان'
                                : 'ياسر الدوسري'
                        }
                    />
                    <ul className='flex flex-col mb-5 sm:mb-7'>
                        {ayat}
                    </ul>
                    <div dir='ltr' className="grid grid-cols-2">
                        <Link
                            to={`/surahDetails/${id > 1 ? +id - 1 : 1}`}
                            className={`previous_surah py-3 px-5 text-center text-[#2ca4ab] hover:bg-[#2ca4ab] rounded-sm ${id > 1 ? 'visible' : 'invisible'}`}
                        >
                            السورة السابقة
                        </Link>
                        <Link
                            to={`/surahDetails/${id < 114 ? +id + 1 : 114}`}
                            className={`next_surah py-3 px-5 text-center text-[#2ca4ab] hover:bg-[#2ca4ab] rounded-sm ${id < 114 ? 'visible' : 'invisible'}`}
                        >
                            السورة التالية
                        </Link>
                    </div>
                </div>
            </>
    )
}
export default SurahDetails;

const Alert = ({ sheikh }) => {
    return (
        <div className="flex items-center gap-2 bg-[#2ca4ab] px-3 py-2 rounded-lg w-fit mb-4">
            <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="h-5 w-5"
            >
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z"
                />
            </svg>
            <span className='text-sm'>الأيات المنفرده تكون بصوت ق/ {sheikh} فقط .</span>
        </div>
    );
}