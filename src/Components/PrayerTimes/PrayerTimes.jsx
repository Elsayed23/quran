import React from 'react';
import PageTitle from '../other/PageTitle';
import SecTitle from '../other/SecTitle';
import axios from 'axios';
import PrayerBox from './PrayerBox'
import Loading from '../other/Loading';
import Prostrationimage from '../../assets/prostration.jpg'
import moment from 'moment';

const PrayerTimes = () => {

    const [timings, setTimings] = React.useState({
        Fajr: '',
        Dhuhr: '',
        Asr: '',
        Maghrib: '',
        Isha: '',
    })

    const [currYear, setCurrYear] = React.useState({
        hijri: '',
    })
    const [currDay, setCurrDay] = React.useState({
        ar: '',
    })
    const [currDayNumAndMonth, setCurrDayNumAndMonth] = React.useState({
        ar: '',
        number: ''
    })
    const [loading, setloading] = React.useState(true);



    function formatHoursTo12(fDate, lDate) {
        return `${fDate % 12 || 12}:${lDate}`;
    }

    const currTime = moment().format('h:mm')

    const prayers = [
        {
            id: 1,
            prayerName: 'الفجر',
            prayerTime: formatHoursTo12(timings.Fajr.slice(0, 2), timings.Fajr.slice(3))
        },
        {
            id: 2,
            prayerName: 'الظهر',
            prayerTime: formatHoursTo12(timings.Dhuhr.slice(0, 2), timings.Dhuhr.slice(3))
        },
        {
            id: 3,
            prayerName: 'العصر',
            prayerTime: formatHoursTo12(timings.Asr.slice(0, 2), timings.Asr.slice(3))
        },
        {
            id: 4,
            prayerName: 'المغرب',
            prayerTime: formatHoursTo12(timings.Maghrib.slice(0, 2), timings.Maghrib.slice(3))
        },
        {
            id: 5,
            prayerName: 'العشاء',
            prayerTime: formatHoursTo12(timings.Isha.slice(0, 2), timings.Isha.slice(3))
        },
    ]

    async function getAllPrayerTimes() {
        const { data } = await axios.get('https://api.aladhan.com/v1/timingsByCity?city=Cairo&country=Egypt&method=8')

        const { timings } = data.data

        const { hijri } = data.data.date

        const { weekday, month } = data.data.date.hijri

        setTimings(timings)

        setloading(false)

        setCurrYear(prevDate => {
            return {
                ...prevDate,
                hijri: hijri.year,
            }
        })
        setCurrDay(prevDay => {
            return {
                ...prevDay,
                ar: weekday.ar,
            }
        })
        setCurrDayNumAndMonth(prevDay => {
            return {
                ...prevDay,
                ar: month.ar,
                number: month.number
            }
        })

    }
    React.useEffect(() => {
        getAllPrayerTimes()
    }, [])

    // Handle next pray Time
    const [nextPrayerIndex, setNextPrayerIndex] = React.useState(2);
    const [remainingTime, setRemainingTime] = React.useState("");

    const prayersArray = [
        { key: "Fajr", displayName: "الفجر" },
        { key: "Dhuhr", displayName: "الظهر" },
        { key: "Asr", displayName: "العصر" },
        { key: "Sunset", displayName: "المغرب" },
        { key: "Isha", displayName: "العشاء" },
    ];

    React.useEffect(() => {
        let interval = setInterval(() => {
            setupCountdownTimer();
        }, 1000);


        return () => {
            clearInterval(interval);
        };
    }, [timings]);

    const setupCountdownTimer = () => {
        const momentNow = moment();

        let prayerIndex = 2;

        if (
            momentNow.isAfter(moment(timings["Fajr"], "hh:mm")) &&
            momentNow.isBefore(moment(timings["Dhuhr"], "hh:mm"))
        ) {
            prayerIndex = 1;
        } else if (
            momentNow.isAfter(moment(timings["Dhuhr"], "hh:mm")) &&
            momentNow.isBefore(moment(timings["Asr"], "hh:mm"))
        ) {
            prayerIndex = 2;
        } else if (
            momentNow.isAfter(moment(timings["Asr"], "hh:mm")) &&
            momentNow.isBefore(moment(timings["Sunset"], "hh:mm"))
        ) {
            prayerIndex = 3;
        } else if (
            momentNow.isAfter(moment(timings["Sunset"], "hh:mm")) &&
            momentNow.isBefore(moment(timings["Isha"], "hh:mm"))
        ) {
            prayerIndex = 4;
        } else {
            prayerIndex = 0;
        }

        setNextPrayerIndex(prayerIndex);

        const nextPrayerObject = prayersArray[prayerIndex];
        const nextPrayerTime = timings[nextPrayerObject.key];
        const nextPrayerTimeMoment = moment(nextPrayerTime, "hh:mm");

        let remainingTime = moment(nextPrayerTime, "hh:mm").diff(momentNow);

        if (remainingTime < 0) {
            const midnightDiff = moment("23:59:59", "hh:mm:ss").diff(momentNow);
            const fajrToMidnightDiff = nextPrayerTimeMoment.diff(
                moment("00:00:00", "hh:mm:ss")
            );

            const totalDiffernce = midnightDiff + fajrToMidnightDiff;

            remainingTime = totalDiffernce;
        }

        const durationRemainingTime = moment.duration(remainingTime);

        setRemainingTime(
            `${durationRemainingTime.seconds()} : ${durationRemainingTime.minutes()} : ${durationRemainingTime.hours()}`
        );
    };
    //#########################

    return (
        loading
            ?
            <Loading />
            :
            <>
                <PageTitle title='Quran | مواقيت الصلاة' />
                <div className="py-14 px-4 md:px-16 min-h-[calc(100vh-(77px+80.28px))] before:fixed before:w-full before:h-full before:bg-[#000000e6] before:left-0 before:top-0 before:-z-[9]">
                    <img src={Prostrationimage} alt="" className='fixed top-0 left-0 w-full h-full -z-10' />
                    <SecTitle title='مَوَاقِيتُ ٱلصَّلَاةَ' />
                    <div className="flex items-center justify-around lg:gap-0 gap-6 flex-col lg:flex-row mb-10">
                        <h5 className='text-xl'>{currDay.ar} {currDayNumAndMonth.number} {currDayNumAndMonth.ar} {currYear.hijri} | {currTime}</h5>
                        <h1 className='text-3xl flex gap-2 sm:flex-row flex-col items-center'>متبقي علي صلاة  {prayersArray[nextPrayerIndex].displayName} <span className='font-bold'>{remainingTime}</span></h1>
                    </div>
                    <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 justify-center gap-5">
                        {
                            prayers.map(pray => {
                                return (
                                    <PrayerBox key={pray.id} {...pray} />
                                )
                            })
                        }
                    </div>
                </div>
            </>
    );
}

export default PrayerTimes;