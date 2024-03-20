import { FaLinkedin, FaGithub, FaWhatsapp } from "react-icons/fa";


export const navLinks = [
     {
          id: 1,
          url: '/',
          name: 'القرآن'
     },
     {
          id: 2,
          url: '/PrayerTimes',
          name: 'مواقيت الصلاة'
     },
     {
          id: 3,
          url: '/asmaAlHusna',
          name: 'الأسماء الحسني'
     },
     {
          id: 4,
          url: '/sajda',
          name: 'آيات السجدة'
     },
     {
          id: 5,
          url: '/books',
          name: 'كتب'
     },
     {
          id: 6,
          url: '/adhkar',
          name: 'أذكار'
     }
]
export const arabicNormChar = {
     'ک': 'ك', 'ﻷ': 'لا', 'ؤ': 'و', 'ى': 'ی', 'ی': 'ي', 'ئ': 'ي', 'أ': 'ا', 'إ': 'ا', 'آ': 'ا', 'ٱ': 'ا', 'ٳ': 'ا', 'ء': '', 'هۡ': 'ه', 'ِ': '', 'ْ': '', 'ُ': '', 'َ': '', 'ّ': '', 'ٍ': '', 'ً': '', 'ٌ': '', 'ٓ': '', 'ٰ': '', 'ٔ': '', '�': ''
}

export let simplifyArabic = function (str) {
     return str.replace(/[^\u0000-\u007E]/g, function (a) {
          let retval = arabicNormChar[a]
          if (retval === undefined) { retval = a }
          return retval;
     }).normalize('NFKD').toLowerCase();
}

export const socialData = [
     {
          name:
               'whatsapp',
          icon:
               FaWhatsapp,
          url: 'https://wa.me/+201152989114'
     },
     {
          name:
               'github',
          icon: FaGithub,
          url:
               'https://github.com/Elsayed23'
     },
     {
          name:
               'linkedin',
          icon: FaLinkedin,
          url:
               'https://www.linkedin.com/in/el-sayed-kewan-48565a26b/'
     }
]


export const quickSurahsData = [
     {
          id: 1,
          surahName: "سورة الملك",
          surahId: 67,
          y: 60
     },
     {
          id: 2,
          surahName: "سورة يس",
          surahId: 36,
          y: 90
     },
     {
          id: 3,
          surahName: "سورة الكهف",
          surahId: 18,
          y: 120
     },
     {
          id: 4,
          surahName: "سورة الواقعة",
          surahId: 56,
          y: 180
     }
]

export const asmaAlHusnaData = [
     {
          "name": "الرَّحْمَنُ",
          "transliteration": "Ar Rahmaan",
          "number": 1,
          "en": {
               "meaning": "The Beneficent"
          }
     },
     {
          "name": "الرَّحِيمُ",
          "transliteration": "Ar Raheem",
          "number": 2,
          "en": {
               "meaning": "The Merciful"
          }
     },
     {
          "name": "الْمَلِكُ",
          "transliteration": "Al Malik",
          "number": 3,
          "en": {
               "meaning": "The King / Eternal Lord"
          }
     },
     {
          "name": "الْقُدُّوسُ",
          "transliteration": "Al Quddus",
          "number": 4,
          "en": {
               "meaning": "The Purest"
          }
     },
     {
          "name": "السَّلاَمُ",
          "transliteration": "As Salaam",
          "number": 5,
          "en": {
               "meaning": "The Source of Peace"
          }
     },
     {
          "name": "الْمُؤْمِنُ",
          "transliteration": "Al Mu'min",
          "number": 6,
          "en": {
               "meaning": "The inspirer of faith"
          }
     },
     {
          "name": "الْمُهَيْمِنُ",
          "transliteration": "Al Muhaymin",
          "number": 7,
          "en": {
               "meaning": "The Guardian"
          }
     },
     {
          "name": "الْعَزِيزُ",
          "transliteration": "Al Azeez",
          "number": 8,
          "en": {
               "meaning": "The Precious / The Most Mighty"
          }
     },
     {
          "name": "الْجَبَّارُ",
          "transliteration": "Al Jabbaar",
          "number": 9,
          "en": {
               "meaning": "The Compeller"
          }
     },
     {
          "name": "الْمُتَكَبِّرُ",
          "transliteration": "Al Mutakabbir",
          "number": 10,
          "en": {
               "meaning": "The Greatest"
          }
     },
     {
          "name": "الْخَالِقُ",
          "transliteration": "Al Khaaliq",
          "number": 11,
          "en": {
               "meaning": "The Creator"
          }
     },
     {
          "name": "الْبَارِئُ",
          "transliteration": "Al Baari",
          "number": 12,
          "en": {
               "meaning": "The Maker of Order"
          }
     },
     {
          "name": "الْمُصَوِّرُ",
          "transliteration": "Al Musawwir",
          "number": 13,
          "en": {
               "meaning": "The Shaper of Beauty"
          }
     },
     {
          "name": "الْغَفَّارُ",
          "transliteration": "Al Ghaffaar",
          "number": 14,
          "en": {
               "meaning": "The Forgiving"
          }
     },
     {
          "name": "الْقَهَّارُ",
          "transliteration": "Al Qahhaar",
          "number": 15,
          "en": {
               "meaning": "The Subduer"
          }
     },
     {
          "name": "الْوَهَّابُ",
          "transliteration": "Al Wahhaab",
          "number": 16,
          "en": {
               "meaning": "The Giver of All"
          }
     },
     {
          "name": "الرَّزَّاقُ",
          "transliteration": "Ar Razzaaq",
          "number": 17,
          "en": {
               "meaning": "The Sustainer"
          }
     },
     {
          "name": "الْفَتَّاحُ",
          "transliteration": "Al Fattaah",
          "number": 18,
          "en": {
               "meaning": "The Opener"
          }
     },
     {
          "name": "اَلْعَلِيْمُ",
          "transliteration": "Al 'Aleem",
          "number": 19,
          "en": {
               "meaning": "The Knower of all"
          }
     },
     {
          "name": "الْقَابِضُ",
          "transliteration": "Al Qaabid",
          "number": 20,
          "en": {
               "meaning": "The Constrictor"
          }
     },
     {
          "name": "الْبَاسِطُ",
          "transliteration": "Al Baasit",
          "number": 21,
          "en": {
               "meaning": "The Reliever"
          }
     },
     {
          "name": "الْخَافِضُ",
          "transliteration": "Al Khaafid",
          "number": 22,
          "en": {
               "meaning": "The Abaser"
          }
     },
     {
          "name": "الرَّافِعُ",
          "transliteration": "Ar Raafi'",
          "number": 23,
          "en": {
               "meaning": "The Exalter"
          }
     },
     {
          "name": "الْمُعِزُّ",
          "transliteration": "Al Mu'iz",
          "number": 24,
          "en": {
               "meaning": "The Bestower of Honour"
          }
     },
     {
          "name": "المُذِلُّ",
          "transliteration": "Al Mudhil",
          "number": 25,
          "en": {
               "meaning": "The Humiliator"
          }
     },
     {
          "name": "السَّمِيعُ",
          "transliteration": "As Samee'",
          "number": 26,
          "en": {
               "meaning": "The Hearer of all"
          }
     },
     {
          "name": "الْبَصِيرُ",
          "transliteration": "Al Baseer",
          "number": 27,
          "en": {
               "meaning": "The Seer of all"
          }
     },
     {
          "name": "الْحَكَمُ",
          "transliteration": "Al Hakam",
          "number": 28,
          "en": {
               "meaning": "The Judge"
          }
     },
     {
          "name": "الْعَدْلُ",
          "transliteration": "Al 'Adl",
          "number": 29,
          "en": {
               "meaning": "The Just"
          }
     },
     {
          "name": "اللَّطِيفُ",
          "transliteration": "Al Lateef",
          "number": 30,
          "en": {
               "meaning": "The Subtle One"
          }
     },
     {
          "name": "الْخَبِيرُ",
          "transliteration": "Al Khabeer",
          "number": 31,
          "en": {
               "meaning": "The All Aware"
          }
     },
     {
          "name": "الْحَلِيمُ",
          "transliteration": "Al Haleem",
          "number": 32,
          "en": {
               "meaning": "The Forebearing"
          }
     },
     {
          "name": "الْعَظِيمُ",
          "transliteration": "Al 'Azeem",
          "number": 33,
          "en": {
               "meaning": "The Maginificent"
          }
     },
     {
          "name": "الْغَفُورُ",
          "transliteration": "Al Ghafoor",
          "number": 34,
          "en": {
               "meaning": "The Great Forgiver"
          }
     },
     {
          "name": "الشَّكُورُ",
          "transliteration": "Ash Shakoor",
          "number": 35,
          "en": {
               "meaning": "The Rewarder of Thankfulness"
          }
     },
     {
          "name": "الْعَلِيُّ",
          "transliteration": "Al 'Aliyy",
          "number": 36,
          "en": {
               "meaning": "The Highest"
          }
     },
     {
          "name": "الْكَبِيرُ",
          "transliteration": "Al Kabeer",
          "number": 37,
          "en": {
               "meaning": "The Greatest"
          }
     },
     {
          "name": "الْحَفِيظُ",
          "transliteration": "Al Hafeez",
          "number": 38,
          "en": {
               "meaning": "The Preserver"
          }
     },
     {
          "name": "المُقيِت",
          "transliteration": "Al Muqeet",
          "number": 39,
          "en": {
               "meaning": "The Nourisher"
          }
     },
     {
          "name": "الْحسِيبُ",
          "transliteration": "Al Haseeb",
          "number": 40,
          "en": {
               "meaning": "The Reckoner"
          }
     },
     {
          "name": "الْجَلِيلُ",
          "transliteration": "Al Jaleel",
          "number": 41,
          "en": {
               "meaning": "The Majestic"
          }
     },
     {
          "name": "الْكَرِيمُ",
          "transliteration": "Al Kareem",
          "number": 42,
          "en": {
               "meaning": "The Generous"
          }
     },
     {
          "name": "الرَّقِيبُ",
          "transliteration": "Ar Raqeeb",
          "number": 43,
          "en": {
               "meaning": "The Watchful One"
          }
     },
     {
          "name": "الْمُجِيبُ",
          "transliteration": "Al Mujeeb ",
          "number": 44,
          "en": {
               "meaning": "The Responder to Prayer"
          }
     },
     {
          "name": "الْوَاسِعُ",
          "transliteration": "Al Waasi'",
          "number": 45,
          "en": {
               "meaning": "The All Comprehending"
          }
     },
     {
          "name": "الْحَكِيمُ",
          "transliteration": "Al Hakeem",
          "number": 46,
          "en": {
               "meaning": "The Perfectly Wise"
          }
     },
     {
          "name": "الْوَدُودُ",
          "transliteration": "Al Wudood",
          "number": 47,
          "en": {
               "meaning": "The Loving One"
          }
     },
     {
          "name": "الْمَجِيدُ",
          "transliteration": "Al Majeed",
          "number": 48,
          "en": {
               "meaning": "The Most Glorious One"
          }
     },
     {
          "name": "الْبَاعِثُ",
          "transliteration": "Al Baa'ith",
          "number": 49,
          "en": {
               "meaning": "The Resurrector"
          }
     },
     {
          "name": "الشَّهِيدُ",
          "transliteration": "Ash Shaheed",
          "number": 50,
          "en": {
               "meaning": "The Witness"
          }
     },
     {
          "name": "الْحَقُّ",
          "transliteration": "Al Haqq",
          "number": 51,
          "en": {
               "meaning": "The Truth"
          }
     },
     {
          "name": "الْوَكِيلُ",
          "transliteration": "Al Wakeel",
          "number": 52,
          "en": {
               "meaning": "The Trustee"
          }
     },
     {
          "name": "الْقَوِيُّ",
          "transliteration": "Al Qawiyy",
          "number": 53,
          "en": {
               "meaning": "The Possessor of all strength"
          }
     },
     {
          "name": "الْمَتِينُ",
          "transliteration": "Al Mateen",
          "number": 54,
          "en": {
               "meaning": "The Forceful"
          }
     },
     {
          "name": "الْوَلِيُّ",
          "transliteration": "Al Waliyy",
          "number": 55,
          "en": {
               "meaning": "The Protector"
          }
     },
     {
          "name": "الْحَمِيدُ",
          "transliteration": "Al Hameed",
          "number": 56,
          "en": {
               "meaning": "The Praised"
          }
     },
     {
          "name": "الْمُحْصِي",
          "transliteration": "Al Muhsi",
          "number": 57,
          "en": {
               "meaning": "The Appraiser"
          }
     },
     {
          "name": "الْمُبْدِئُ",
          "transliteration": "Al Mubdi",
          "number": 58,
          "en": {
               "meaning": "The Originator"
          }
     },
     {
          "name": "الْمُعِيدُ",
          "transliteration": "Al Mu'eed",
          "number": 59,
          "en": {
               "meaning": "The Restorer"
          }
     },
     {
          "name": "الْمُحْيِي",
          "transliteration": "Al Muhiy",
          "number": 60,
          "en": {
               "meaning": "The Giver of life"
          }
     },
     {
          "name": "اَلْمُمِيتُ",
          "transliteration": "Al Mumeet",
          "number": 61,
          "en": {
               "meaning": "The Taker of life"
          }
     },
     {
          "name": "الْحَيُّ",
          "transliteration": "Al Haiyy",
          "number": 62,
          "en": {
               "meaning": "The Ever Living"
          }
     },
     {
          "name": "الْقَيُّومُ",
          "transliteration": "Al Qayyoom",
          "number": 63,
          "en": {
               "meaning": "The Self Existing"
          }
     },
     {
          "name": "الْوَاجِدُ",
          "transliteration": "Al Waajid",
          "number": 64,
          "en": {
               "meaning": "The Finder"
          }
     },
     {
          "name": "الْمَاجِدُ",
          "transliteration": "Al Maajid",
          "number": 65,
          "en": {
               "meaning": "The Glorious"
          }
     },
     {
          "name": "الْواحِدُ",
          "transliteration": "Al Waahid",
          "number": 66,
          "en": {
               "meaning": "The Only One"
          }
     },
     {
          "name": "اَلاَحَدُ",
          "transliteration": "Al Ahad",
          "number": 67,
          "en": {
               "meaning": "The One"
          }
     },
     {
          "name": "الصَّمَدُ",
          "transliteration": "As Samad",
          "number": 68,
          "en": {
               "meaning": "The Supreme Provider"
          }
     },
     {
          "name": "الْقَادِرُ",
          "transliteration": "Al Qaadir",
          "number": 69,
          "en": {
               "meaning": "The Powerful"
          }
     },
     {
          "name": "الْمُقْتَدِرُ",
          "transliteration": "Al Muqtadir",
          "number": 70,
          "en": {
               "meaning": "The Creator of all power"
          }
     },
     {
          "name": "الْمُقَدِّمُ",
          "transliteration": "Al Muqaddim",
          "number": 71,
          "en": {
               "meaning": "The Expediter"
          }
     },
     {
          "name": "الْمُؤَخِّرُ",
          "transliteration": "Al Mu’akhir",
          "number": 72,
          "en": {
               "meaning": "The Delayer"
          }
     },
     {
          "name": "الأوَّلُ",
          "transliteration": "Al Awwal",
          "number": 73,
          "en": {
               "meaning": "The First"
          }
     },
     {
          "name": "الآخِرُ",
          "transliteration": "Al Aakhir",
          "number": 74,
          "en": {
               "meaning": "The Last"
          }
     },
     {
          "name": "الظَّاهِرُ",
          "transliteration": "Az Zaahir",
          "number": 75,
          "en": {
               "meaning": "The Manifest"
          }
     },
     {
          "name": "الْبَاطِنُ",
          "transliteration": "Al Baatin",
          "number": 76,
          "en": {
               "meaning": "The Hidden"
          }
     },
     {
          "name": "الْوَالِي",
          "transliteration": "Al Waali",
          "number": 77,
          "en": {
               "meaning": "The Governor"
          }
     },
     {
          "name": "الْمُتَعَالِي",
          "transliteration": "Al Muta’ali",
          "number": 78,
          "en": {
               "meaning": "The Supreme One"
          }
     },
     {
          "name": "الْبَرُّ",
          "transliteration": "Al Barr",
          "number": 79,
          "en": {
               "meaning": "The Doer of Good"
          }
     },
     {
          "name": "التَّوَابُ",
          "transliteration": "At Tawwaab",
          "number": 80,
          "en": {
               "meaning": "The Guide to Repentence"
          }
     },
     {
          "name": "الْمُنْتَقِمُ",
          "transliteration": "Al Muntaqim",
          "number": 81,
          "en": {
               "meaning": "The Avenger"
          }
     },
     {
          "name": "العَفُوُّ",
          "transliteration": "Al Afuww",
          "number": 82,
          "en": {
               "meaning": "The Forgiver"
          }
     },
     {
          "name": "الرَّؤُوفُ",
          "transliteration": "Ar Ra’oof",
          "number": 83,
          "en": {
               "meaning": "The Clement"
          }
     },
     {
          "name": "مَالِكُ الْمُلْكِ",
          "transliteration": "Maalik Ul Mulk",
          "number": 84,
          "en": {
               "meaning": "The Owner / Soverign of All"
          }
     },
     {
          "name": "ذُوالْجَلاَلِ وَالإكْرَامِ",
          "transliteration": "Dhu Al Jalaali Wa Al Ikraam",
          "number": 85,
          "en": {
               "meaning": "Possessor of Majesty and Bounty"
          }
     },
     {
          "name": "الْمُقْسِطُ",
          "transliteration": "Al Muqsit",
          "number": 86,
          "en": {
               "meaning": "The Equitable One"
          }
     },
     {
          "name": "الْجَامِعُ",
          "transliteration": "Al Jaami'",
          "number": 87,
          "en": {
               "meaning": "The Gatherer"
          }
     },
     {
          "name": "الْغَنِيُّ",
          "transliteration": "Al Ghaniyy",
          "number": 88,
          "en": {
               "meaning": "The Rich One"
          }
     },
     {
          "name": "الْمُغْنِي",
          "transliteration": "Al Mughi",
          "number": 89,
          "en": {
               "meaning": "The Enricher"
          }
     },
     {
          "name": "اَلْمَانِعُ",
          "transliteration": "Al Maani'",
          "number": 90,
          "en": {
               "meaning": "The Preventer of harm"
          }
     },
     {
          "name": "الضَّارَّ",
          "transliteration": "Ad Daaarr",
          "number": 91,
          "en": {
               "meaning": "The Creator of the harmful"
          }
     },
     {
          "name": "النَّافِعُ",
          "transliteration": "An Naafi’",
          "number": 92,
          "en": {
               "meaning": "The Bestower of Benefits"
          }
     },
     {
          "name": "النُّورُ",
          "transliteration": "An Noor",
          "number": 93,
          "en": {
               "meaning": "The Light"
          }
     },
     {
          "name": "الْهَادِي",
          "transliteration": "Al Haadi",
          "number": 94,
          "en": {
               "meaning": "The Guider"
          }
     },
     {
          "name": "الْبَدِيعُ",
          "transliteration": "Al Badi'",
          "number": 95,
          "en": {
               "meaning": "The Originator"
          }
     },
     {
          "name": "اَلْبَاقِي",
          "transliteration": "Al Baaqi",
          "number": 96,
          "en": {
               "meaning": "The Everlasting One"
          }
     },
     {
          "name": "الْوَارِثُ",
          "transliteration": "Al Waarith",
          "number": 97,
          "en": {
               "meaning": "The Inhertior"
          }
     },
     {
          "name": "الرَّشِيدُ",
          "transliteration": "Ar Rasheed",
          "number": 98,
          "en": {
               "meaning": "The Most Righteous Guide"
          }
     },
     {
          "name": "الصَّبُورُ",
          "transliteration": "As Saboor",
          "number": 99,
          "en": {
               "meaning": "The Patient One"
          }
     }
]

export const sajdaData = [
     {
          "number": 1160,
          "text": "إِنَّ ٱلَّذِينَ عِندَ رَبِّكَ لَا يَسْتَكْبِرُونَ عَنْ عِبَادَتِهِۦ وَيُسَبِّحُونَهُۥ وَلَهُۥ يَسْجُدُونَ ۩",
          "surah": {
               "number": 7,
               "name": "سُورَةُ الأَعۡرَافِ",
               "englishName": "Al-A'raaf",
               "englishNameTranslation": "The Heights",
               "revelationType": "Meccan",
               "numberOfAyahs": 206
          },
          "numberInSurah": 206,
          "juz": 9,
          "manzil": 2,
          "page": 176,
          "ruku": 145,
          "hizbQuarter": 70,
          "sajda": {
               "id": 1,
               "recommended": true,
               "obligatory": false
          }
     },
     {
          "number": 1722,
          "text": "وَلِلَّهِ يَسْجُدُ مَن فِى ٱلسَّمَٰوَٰتِ وَٱلْأَرْضِ طَوْعًۭا وَكَرْهًۭا وَظِلَٰلُهُم بِٱلْغُدُوِّ وَٱلْءَاصَالِ ۩",
          "surah": {
               "number": 13,
               "name": "سُورَةُ الرَّعۡدِ",
               "englishName": "Ar-Ra'd",
               "englishNameTranslation": "The Thunder",
               "revelationType": "Medinan",
               "numberOfAyahs": 43
          },
          "numberInSurah": 15,
          "juz": 13,
          "manzil": 3,
          "page": 251,
          "ruku": 206,
          "hizbQuarter": 100,
          "sajda": {
               "id": 2,
               "recommended": true,
               "obligatory": false
          }
     },
     {
          "number": 1951,
          "text": "يَخَافُونَ رَبَّهُم مِّن فَوْقِهِمْ وَيَفْعَلُونَ مَا يُؤْمَرُونَ ۩",
          "surah": {
               "number": 16,
               "name": "سُورَةُ النَّحۡلِ",
               "englishName": "An-Nahl",
               "englishNameTranslation": "The Bee",
               "revelationType": "Meccan",
               "numberOfAyahs": 128
          },
          "numberInSurah": 50,
          "juz": 14,
          "manzil": 3,
          "page": 272,
          "ruku": 229,
          "hizbQuarter": 108,
          "sajda": {
               "id": 3,
               "recommended": true,
               "obligatory": false
          }
     },
     {
          "number": 2138,
          "text": "وَيَخِرُّونَ لِلْأَذْقَانِ يَبْكُونَ وَيَزِيدُهُمْ خُشُوعًۭا ۩",
          "surah": {
               "number": 17,
               "name": "سُورَةُ الإِسۡرَاءِ",
               "englishName": "Al-Israa",
               "englishNameTranslation": "The Night Journey",
               "revelationType": "Meccan",
               "numberOfAyahs": 111
          },
          "numberInSurah": 109,
          "juz": 15,
          "manzil": 4,
          "page": 293,
          "ruku": 251,
          "hizbQuarter": 117,
          "sajda": {
               "id": 4,
               "recommended": true,
               "obligatory": false
          }
     },
     {
          "number": 2308,
          "text": "أُو۟لَٰٓئِكَ ٱلَّذِينَ أَنْعَمَ ٱللَّهُ عَلَيْهِم مِّنَ ٱلنَّبِيِّۦنَ مِن ذُرِّيَّةِ ءَادَمَ وَمِمَّنْ حَمَلْنَا مَعَ نُوحٍۢ وَمِن ذُرِّيَّةِ إِبْرَٰهِيمَ وَإِسْرَٰٓءِيلَ وَمِمَّنْ هَدَيْنَا وَٱجْتَبَيْنَآ ۚ إِذَا تُتْلَىٰ عَلَيْهِمْ ءَايَٰتُ ٱلرَّحْمَٰنِ خَرُّوا۟ سُجَّدًۭا وَبُكِيًّۭا ۩",
          "surah": {
               "number": 19,
               "name": "سُورَةُ مَرۡيَمَ",
               "englishName": "Maryam",
               "englishNameTranslation": "Mary",
               "revelationType": "Meccan",
               "numberOfAyahs": 98
          },
          "numberInSurah": 58,
          "juz": 16,
          "manzil": 4,
          "page": 309,
          "ruku": 267,
          "hizbQuarter": 123,
          "sajda": {
               "id": 5,
               "recommended": true,
               "obligatory": false
          }
     },
     {
          "number": 2613,
          "text": "أَلَمْ تَرَ أَنَّ ٱللَّهَ يَسْجُدُ لَهُۥ مَن فِى ٱلسَّمَٰوَٰتِ وَمَن فِى ٱلْأَرْضِ وَٱلشَّمْسُ وَٱلْقَمَرُ وَٱلنُّجُومُ وَٱلْجِبَالُ وَٱلشَّجَرُ وَٱلدَّوَآبُّ وَكَثِيرٌۭ مِّنَ ٱلنَّاسِ ۖ وَكَثِيرٌ حَقَّ عَلَيْهِ ٱلْعَذَابُ ۗ وَمَن يُهِنِ ٱللَّهُ فَمَا لَهُۥ مِن مُّكْرِمٍ ۚ إِنَّ ٱللَّهَ يَفْعَلُ مَا يَشَآءُ ۩",
          "surah": {
               "number": 22,
               "name": "سُورَةُ الحَجِّ",
               "englishName": "Al-Hajj",
               "englishNameTranslation": "The Pilgrimage",
               "revelationType": "Medinan",
               "numberOfAyahs": 78
          },
          "numberInSurah": 18,
          "juz": 17,
          "manzil": 4,
          "page": 334,
          "ruku": 286,
          "hizbQuarter": 133,
          "sajda": {
               "id": 6,
               "recommended": true,
               "obligatory": false
          }
     },
     {
          "number": 2672,
          "text": "يَٰٓأَيُّهَا ٱلَّذِينَ ءَامَنُوا۟ ٱرْكَعُوا۟ وَٱسْجُدُوا۟ وَٱعْبُدُوا۟ رَبَّكُمْ وَٱفْعَلُوا۟ ٱلْخَيْرَ لَعَلَّكُمْ تُفْلِحُونَ ۩",
          "surah": {
               "number": 22,
               "name": "سُورَةُ الحَجِّ",
               "englishName": "Al-Hajj",
               "englishNameTranslation": "The Pilgrimage",
               "revelationType": "Medinan",
               "numberOfAyahs": 78
          },
          "numberInSurah": 77,
          "juz": 17,
          "manzil": 4,
          "page": 341,
          "ruku": 294,
          "hizbQuarter": 136,
          "sajda": {
               "id": 7,
               "recommended": true,
               "obligatory": false
          }
     },
     {
          "number": 2915,
          "text": "وَإِذَا قِيلَ لَهُمُ ٱسْجُدُوا۟ لِلرَّحْمَٰنِ قَالُوا۟ وَمَا ٱلرَّحْمَٰنُ أَنَسْجُدُ لِمَا تَأْمُرُنَا وَزَادَهُمْ نُفُورًۭا ۩",
          "surah": {
               "number": 25,
               "name": "سُورَةُ الفُرۡقَانِ",
               "englishName": "Al-Furqaan",
               "englishNameTranslation": "The Criterion",
               "revelationType": "Meccan",
               "numberOfAyahs": 77
          },
          "numberInSurah": 60,
          "juz": 19,
          "manzil": 4,
          "page": 365,
          "ruku": 314,
          "hizbQuarter": 146,
          "sajda": {
               "id": 8,
               "recommended": true,
               "obligatory": false
          }
     },
     {
          "number": 3185,
          "text": "ٱللَّهُ لَآ إِلَٰهَ إِلَّا هُوَ رَبُّ ٱلْعَرْشِ ٱلْعَظِيمِ ۩",
          "surah": {
               "number": 27,
               "name": "سُورَةُ النَّمۡلِ",
               "englishName": "An-Naml",
               "englishNameTranslation": "The Ant",
               "revelationType": "Meccan",
               "numberOfAyahs": 93
          },
          "numberInSurah": 26,
          "juz": 19,
          "manzil": 5,
          "page": 379,
          "ruku": 328,
          "hizbQuarter": 151,
          "sajda": {
               "id": 9,
               "recommended": true,
               "obligatory": false
          }
     },
     {
          "number": 3518,
          "text": "إِنَّمَا يُؤْمِنُ بِـَٔايَٰتِنَا ٱلَّذِينَ إِذَا ذُكِّرُوا۟ بِهَا خَرُّوا۟ سُجَّدًۭا وَسَبَّحُوا۟ بِحَمْدِ رَبِّهِمْ وَهُمْ لَا يَسْتَكْبِرُونَ ۩",
          "surah": {
               "number": 32,
               "name": "سُورَةُ السَّجۡدَةِ",
               "englishName": "As-Sajda",
               "englishNameTranslation": "The Prostration",
               "revelationType": "Meccan",
               "numberOfAyahs": 30
          },
          "numberInSurah": 15,
          "juz": 21,
          "manzil": 5,
          "page": 416,
          "ruku": 359,
          "hizbQuarter": 166,
          "sajda": {
               "id": 10,
               "recommended": false,
               "obligatory": true
          }
     },
     {
          "number": 3994,
          "text": "قَالَ لَقَدْ ظَلَمَكَ بِسُؤَالِ نَعْجَتِكَ إِلَىٰ نِعَاجِهِۦ ۖ وَإِنَّ كَثِيرًۭا مِّنَ ٱلْخُلَطَآءِ لَيَبْغِى بَعْضُهُمْ عَلَىٰ بَعْضٍ إِلَّا ٱلَّذِينَ ءَامَنُوا۟ وَعَمِلُوا۟ ٱلصَّٰلِحَٰتِ وَقَلِيلٌۭ مَّا هُمْ ۗ وَظَنَّ دَاوُۥدُ أَنَّمَا فَتَنَّٰهُ فَٱسْتَغْفَرَ رَبَّهُۥ وَخَرَّ رَاكِعًۭا وَأَنَابَ ۩",
          "surah": {
               "number": 38,
               "name": "سُورَةُ صٓ",
               "englishName": "Saad",
               "englishNameTranslation": "The letter Saad",
               "revelationType": "Meccan",
               "numberOfAyahs": 88
          },
          "numberInSurah": 24,
          "juz": 23,
          "manzil": 6,
          "page": 454,
          "ruku": 392,
          "hizbQuarter": 182,
          "sajda": {
               "id": 11,
               "recommended": true,
               "obligatory": false
          }
     },
     {
          "number": 4256,
          "text": "فَإِنِ ٱسْتَكْبَرُوا۟ فَٱلَّذِينَ عِندَ رَبِّكَ يُسَبِّحُونَ لَهُۥ بِٱلَّيْلِ وَٱلنَّهَارِ وَهُمْ لَا يَسْـَٔمُونَ ۩",
          "surah": {
               "number": 41,
               "name": "سُورَةُ فُصِّلَتۡ",
               "englishName": "Fussilat",
               "englishNameTranslation": "Explained in detail",
               "revelationType": "Meccan",
               "numberOfAyahs": 54
          },
          "numberInSurah": 38,
          "juz": 24,
          "manzil": 6,
          "page": 480,
          "ruku": 417,
          "hizbQuarter": 192,
          "sajda": {
               "id": 12,
               "recommended": false,
               "obligatory": true
          }
     },
     {
          "number": 4846,
          "text": "فَٱسْجُدُوا۟ لِلَّهِ وَٱعْبُدُوا۟ ۩",
          "surah": {
               "number": 53,
               "name": "سُورَةُ النَّجۡمِ",
               "englishName": "An-Najm",
               "englishNameTranslation": "The Star",
               "revelationType": "Meccan",
               "numberOfAyahs": 62
          },
          "numberInSurah": 62,
          "juz": 27,
          "manzil": 7,
          "page": 528,
          "ruku": 462,
          "hizbQuarter": 211,
          "sajda": {
               "id": 13,
               "recommended": false,
               "obligatory": true
          }
     },
     {
          "number": 5905,
          "text": "وَإِذَا قُرِئَ عَلَيْهِمُ ٱلْقُرْءَانُ لَا يَسْجُدُونَ ۩",
          "surah": {
               "number": 84,
               "name": "سُورَةُ الانشِقَاقِ",
               "englishName": "Al-Inshiqaaq",
               "englishNameTranslation": "The Splitting Open",
               "revelationType": "Meccan",
               "numberOfAyahs": 25
          },
          "numberInSurah": 21,
          "juz": 30,
          "manzil": 7,
          "page": 589,
          "ruku": 526,
          "hizbQuarter": 236,
          "sajda": {
               "id": 14,
               "recommended": true,
               "obligatory": false
          }
     },
     {
          "number": 6125,
          "text": "كَلَّا لَا تُطِعْهُ وَٱسْجُدْ وَٱقْتَرِب ۩",
          "surah": {
               "number": 96,
               "name": "سُورَةُ العَلَقِ",
               "englishName": "Al-Alaq",
               "englishNameTranslation": "The Clot",
               "revelationType": "Meccan",
               "numberOfAyahs": 19
          },
          "numberInSurah": 19,
          "juz": 30,
          "manzil": 7,
          "page": 597,
          "ruku": 538,
          "hizbQuarter": 239,
          "sajda": {
               "id": 15,
               "recommended": false,
               "obligatory": true
          }
     }
]

export const surahsData = [
     {
          "number": 1,
          "name": "سُورَةُ ٱلْفَاتِحَةِ",
          "englishName": "Al-Faatiha",
          "englishNameTranslation": "The Opening",
          "numberOfAyahs": 7,
          "revelationType": "Meccan"
     },
     {
          "number": 2,
          "name": "سُورَةُ البَقَرَةِ",
          "englishName": "Al-Baqara",
          "englishNameTranslation": "The Cow",
          "numberOfAyahs": 286,
          "revelationType": "Medinan"
     },
     {
          "number": 3,
          "name": "سُورَةُ آلِ عِمۡرَانَ",
          "englishName": "Aal-i-Imraan",
          "englishNameTranslation": "The Family of Imraan",
          "numberOfAyahs": 200,
          "revelationType": "Medinan"
     },
     {
          "number": 4,
          "name": "سُورَةُ النِّسَاءِ",
          "englishName": "An-Nisaa",
          "englishNameTranslation": "The Women",
          "numberOfAyahs": 176,
          "revelationType": "Medinan"
     },
     {
          "number": 5,
          "name": "سُورَةُ المَائـِدَةِ",
          "englishName": "Al-Maaida",
          "englishNameTranslation": "The Table",
          "numberOfAyahs": 120,
          "revelationType": "Medinan"
     },
     {
          "number": 6,
          "name": "سُورَةُ الأَنۡعَامِ",
          "englishName": "Al-An'aam",
          "englishNameTranslation": "The Cattle",
          "numberOfAyahs": 165,
          "revelationType": "Meccan"
     },
     {
          "number": 7,
          "name": "سُورَةُ الأَعۡرَافِ",
          "englishName": "Al-A'raaf",
          "englishNameTranslation": "The Heights",
          "numberOfAyahs": 206,
          "revelationType": "Meccan"
     },
     {
          "number": 8,
          "name": "سُورَةُ الأَنفَالِ",
          "englishName": "Al-Anfaal",
          "englishNameTranslation": "The Spoils of War",
          "numberOfAyahs": 75,
          "revelationType": "Medinan"
     },
     {
          "number": 9,
          "name": "سُورَةُ التَّوۡبَةِ",
          "englishName": "At-Tawba",
          "englishNameTranslation": "The Repentance",
          "numberOfAyahs": 129,
          "revelationType": "Medinan"
     },
     {
          "number": 10,
          "name": "سُورَةُ يُونُسَ",
          "englishName": "Yunus",
          "englishNameTranslation": "Jonas",
          "numberOfAyahs": 109,
          "revelationType": "Meccan"
     },
     {
          "number": 11,
          "name": "سُورَةُ هُودٍ",
          "englishName": "Hud",
          "englishNameTranslation": "Hud",
          "numberOfAyahs": 123,
          "revelationType": "Meccan"
     },
     {
          "number": 12,
          "name": "سُورَةُ يُوسُفَ",
          "englishName": "Yusuf",
          "englishNameTranslation": "Joseph",
          "numberOfAyahs": 111,
          "revelationType": "Meccan"
     },
     {
          "number": 13,
          "name": "سُورَةُ الرَّعۡدِ",
          "englishName": "Ar-Ra'd",
          "englishNameTranslation": "The Thunder",
          "numberOfAyahs": 43,
          "revelationType": "Medinan"
     },
     {
          "number": 14,
          "name": "سُورَةُ إِبۡرَاهِيمَ",
          "englishName": "Ibrahim",
          "englishNameTranslation": "Abraham",
          "numberOfAyahs": 52,
          "revelationType": "Meccan"
     },
     {
          "number": 15,
          "name": "سُورَةُ الحِجۡرِ",
          "englishName": "Al-Hijr",
          "englishNameTranslation": "The Rock",
          "numberOfAyahs": 99,
          "revelationType": "Meccan"
     },
     {
          "number": 16,
          "name": "سُورَةُ النَّحۡلِ",
          "englishName": "An-Nahl",
          "englishNameTranslation": "The Bee",
          "numberOfAyahs": 128,
          "revelationType": "Meccan"
     },
     {
          "number": 17,
          "name": "سُورَةُ الإِسۡرَاءِ",
          "englishName": "Al-Israa",
          "englishNameTranslation": "The Night Journey",
          "numberOfAyahs": 111,
          "revelationType": "Meccan"
     },
     {
          "number": 18,
          "name": "سُورَةُ الكَهۡفِ",
          "englishName": "Al-Kahf",
          "englishNameTranslation": "The Cave",
          "numberOfAyahs": 110,
          "revelationType": "Meccan"
     },
     {
          "number": 19,
          "name": "سُورَةُ مَرۡيَمَ",
          "englishName": "Maryam",
          "englishNameTranslation": "Mary",
          "numberOfAyahs": 98,
          "revelationType": "Meccan"
     },
     {
          "number": 20,
          "name": "سُورَةُ طه",
          "englishName": "Taa-Haa",
          "englishNameTranslation": "Taa-Haa",
          "numberOfAyahs": 135,
          "revelationType": "Meccan"
     },
     {
          "number": 21,
          "name": "سُورَةُ الأَنبِيَاءِ",
          "englishName": "Al-Anbiyaa",
          "englishNameTranslation": "The Prophets",
          "numberOfAyahs": 112,
          "revelationType": "Meccan"
     },
     {
          "number": 22,
          "name": "سُورَةُ الحَجِّ",
          "englishName": "Al-Hajj",
          "englishNameTranslation": "The Pilgrimage",
          "numberOfAyahs": 78,
          "revelationType": "Medinan"
     },
     {
          "number": 23,
          "name": "سُورَةُ المُؤۡمِنُونَ",
          "englishName": "Al-Muminoon",
          "englishNameTranslation": "The Believers",
          "numberOfAyahs": 118,
          "revelationType": "Meccan"
     },
     {
          "number": 24,
          "name": "سُورَةُ النُّورِ",
          "englishName": "An-Noor",
          "englishNameTranslation": "The Light",
          "numberOfAyahs": 64,
          "revelationType": "Medinan"
     },
     {
          "number": 25,
          "name": "سُورَةُ الفُرۡقَانِ",
          "englishName": "Al-Furqaan",
          "englishNameTranslation": "The Criterion",
          "numberOfAyahs": 77,
          "revelationType": "Meccan"
     },
     {
          "number": 26,
          "name": "سُورَةُ الشُّعَرَاءِ",
          "englishName": "Ash-Shu'araa",
          "englishNameTranslation": "The Poets",
          "numberOfAyahs": 227,
          "revelationType": "Meccan"
     },
     {
          "number": 27,
          "name": "سُورَةُ النَّمۡلِ",
          "englishName": "An-Naml",
          "englishNameTranslation": "The Ant",
          "numberOfAyahs": 93,
          "revelationType": "Meccan"
     },
     {
          "number": 28,
          "name": "سُورَةُ القَصَصِ",
          "englishName": "Al-Qasas",
          "englishNameTranslation": "The Stories",
          "numberOfAyahs": 88,
          "revelationType": "Meccan"
     },
     {
          "number": 29,
          "name": "سُورَةُ العَنكَبُوتِ",
          "englishName": "Al-Ankaboot",
          "englishNameTranslation": "The Spider",
          "numberOfAyahs": 69,
          "revelationType": "Meccan"
     },
     {
          "number": 30,
          "name": "سُورَةُ الرُّومِ",
          "englishName": "Ar-Room",
          "englishNameTranslation": "The Romans",
          "numberOfAyahs": 60,
          "revelationType": "Meccan"
     },
     {
          "number": 31,
          "name": "سُورَةُ لُقۡمَانَ",
          "englishName": "Luqman",
          "englishNameTranslation": "Luqman",
          "numberOfAyahs": 34,
          "revelationType": "Meccan"
     },
     {
          "number": 32,
          "name": "سُورَةُ السَّجۡدَةِ",
          "englishName": "As-Sajda",
          "englishNameTranslation": "The Prostration",
          "numberOfAyahs": 30,
          "revelationType": "Meccan"
     },
     {
          "number": 33,
          "name": "سُورَةُ الأَحۡزَابِ",
          "englishName": "Al-Ahzaab",
          "englishNameTranslation": "The Clans",
          "numberOfAyahs": 73,
          "revelationType": "Medinan"
     },
     {
          "number": 34,
          "name": "سُورَةُ سَبَإٍ",
          "englishName": "Saba",
          "englishNameTranslation": "Sheba",
          "numberOfAyahs": 54,
          "revelationType": "Meccan"
     },
     {
          "number": 35,
          "name": "سُورَةُ فَاطِرٍ",
          "englishName": "Faatir",
          "englishNameTranslation": "The Originator",
          "numberOfAyahs": 45,
          "revelationType": "Meccan"
     },
     {
          "number": 36,
          "name": "سُورَةُ يسٓ",
          "englishName": "Yaseen",
          "englishNameTranslation": "Yaseen",
          "numberOfAyahs": 83,
          "revelationType": "Meccan"
     },
     {
          "number": 37,
          "name": "سُورَةُ الصَّافَّاتِ",
          "englishName": "As-Saaffaat",
          "englishNameTranslation": "Those drawn up in Ranks",
          "numberOfAyahs": 182,
          "revelationType": "Meccan"
     },
     {
          "number": 38,
          "name": "سُورَةُ صٓ",
          "englishName": "Saad",
          "englishNameTranslation": "The letter Saad",
          "numberOfAyahs": 88,
          "revelationType": "Meccan"
     },
     {
          "number": 39,
          "name": "سُورَةُ الزُّمَرِ",
          "englishName": "Az-Zumar",
          "englishNameTranslation": "The Groups",
          "numberOfAyahs": 75,
          "revelationType": "Meccan"
     },
     {
          "number": 40,
          "name": "سُورَةُ غَافِرٍ",
          "englishName": "Ghafir",
          "englishNameTranslation": "The Forgiver",
          "numberOfAyahs": 85,
          "revelationType": "Meccan"
     },
     {
          "number": 41,
          "name": "سُورَةُ فُصِّلَتۡ",
          "englishName": "Fussilat",
          "englishNameTranslation": "Explained in detail",
          "numberOfAyahs": 54,
          "revelationType": "Meccan"
     },
     {
          "number": 42,
          "name": "سُورَةُ الشُّورَىٰ",
          "englishName": "Ash-Shura",
          "englishNameTranslation": "Consultation",
          "numberOfAyahs": 53,
          "revelationType": "Meccan"
     },
     {
          "number": 43,
          "name": "سُورَةُ الزُّخۡرُفِ",
          "englishName": "Az-Zukhruf",
          "englishNameTranslation": "Ornaments of gold",
          "numberOfAyahs": 89,
          "revelationType": "Meccan"
     },
     {
          "number": 44,
          "name": "سُورَةُ الدُّخَانِ",
          "englishName": "Ad-Dukhaan",
          "englishNameTranslation": "The Smoke",
          "numberOfAyahs": 59,
          "revelationType": "Meccan"
     },
     {
          "number": 45,
          "name": "سُورَةُ الجَاثِيَةِ",
          "englishName": "Al-Jaathiya",
          "englishNameTranslation": "Crouching",
          "numberOfAyahs": 37,
          "revelationType": "Meccan"
     },
     {
          "number": 46,
          "name": "سُورَةُ الأَحۡقَافِ",
          "englishName": "Al-Ahqaf",
          "englishNameTranslation": "The Dunes",
          "numberOfAyahs": 35,
          "revelationType": "Meccan"
     },
     {
          "number": 47,
          "name": "سُورَةُ مُحَمَّدٍ",
          "englishName": "Muhammad",
          "englishNameTranslation": "Muhammad",
          "numberOfAyahs": 38,
          "revelationType": "Medinan"
     },
     {
          "number": 48,
          "name": "سُورَةُ الفَتۡحِ",
          "englishName": "Al-Fath",
          "englishNameTranslation": "The Victory",
          "numberOfAyahs": 29,
          "revelationType": "Medinan"
     },
     {
          "number": 49,
          "name": "سُورَةُ الحُجُرَاتِ",
          "englishName": "Al-Hujuraat",
          "englishNameTranslation": "The Inner Apartments",
          "numberOfAyahs": 18,
          "revelationType": "Medinan"
     },
     {
          "number": 50,
          "name": "سُورَةُ قٓ",
          "englishName": "Qaaf",
          "englishNameTranslation": "The letter Qaaf",
          "numberOfAyahs": 45,
          "revelationType": "Meccan"
     },
     {
          "number": 51,
          "name": "سُورَةُ الذَّارِيَاتِ",
          "englishName": "Adh-Dhaariyat",
          "englishNameTranslation": "The Winnowing Winds",
          "numberOfAyahs": 60,
          "revelationType": "Meccan"
     },
     {
          "number": 52,
          "name": "سُورَةُ الطُّورِ",
          "englishName": "At-Tur",
          "englishNameTranslation": "The Mount",
          "numberOfAyahs": 49,
          "revelationType": "Meccan"
     },
     {
          "number": 53,
          "name": "سُورَةُ النَّجۡمِ",
          "englishName": "An-Najm",
          "englishNameTranslation": "The Star",
          "numberOfAyahs": 62,
          "revelationType": "Meccan"
     },
     {
          "number": 54,
          "name": "سُورَةُ القَمَرِ",
          "englishName": "Al-Qamar",
          "englishNameTranslation": "The Moon",
          "numberOfAyahs": 55,
          "revelationType": "Meccan"
     },
     {
          "number": 55,
          "name": "سُورَةُ الرَّحۡمَٰن",
          "englishName": "Ar-Rahmaan",
          "englishNameTranslation": "The Beneficent",
          "numberOfAyahs": 78,
          "revelationType": "Medinan"
     },
     {
          "number": 56,
          "name": "سُورَةُ الوَاقِعَةِ",
          "englishName": "Al-Waaqia",
          "englishNameTranslation": "The Inevitable",
          "numberOfAyahs": 96,
          "revelationType": "Meccan"
     },
     {
          "number": 57,
          "name": "سُورَةُ الحَدِيدِ",
          "englishName": "Al-Hadid",
          "englishNameTranslation": "The Iron",
          "numberOfAyahs": 29,
          "revelationType": "Medinan"
     },
     {
          "number": 58,
          "name": "سُورَةُ المُجَادلَةِ",
          "englishName": "Al-Mujaadila",
          "englishNameTranslation": "The Pleading Woman",
          "numberOfAyahs": 22,
          "revelationType": "Medinan"
     },
     {
          "number": 59,
          "name": "سُورَةُ الحَشۡرِ",
          "englishName": "Al-Hashr",
          "englishNameTranslation": "The Exile",
          "numberOfAyahs": 24,
          "revelationType": "Medinan"
     },
     {
          "number": 60,
          "name": "سُورَةُ المُمۡتَحنَةِ",
          "englishName": "Al-Mumtahana",
          "englishNameTranslation": "She that is to be examined",
          "numberOfAyahs": 13,
          "revelationType": "Medinan"
     },
     {
          "number": 61,
          "name": "سُورَةُ الصَّفِّ",
          "englishName": "As-Saff",
          "englishNameTranslation": "The Ranks",
          "numberOfAyahs": 14,
          "revelationType": "Medinan"
     },
     {
          "number": 62,
          "name": "سُورَةُ الجُمُعَةِ",
          "englishName": "Al-Jumu'a",
          "englishNameTranslation": "Friday",
          "numberOfAyahs": 11,
          "revelationType": "Medinan"
     },
     {
          "number": 63,
          "name": "سُورَةُ المُنَافِقُونَ",
          "englishName": "Al-Munaafiqoon",
          "englishNameTranslation": "The Hypocrites",
          "numberOfAyahs": 11,
          "revelationType": "Medinan"
     },
     {
          "number": 64,
          "name": "سُورَةُ التَّغَابُنِ",
          "englishName": "At-Taghaabun",
          "englishNameTranslation": "Mutual Disillusion",
          "numberOfAyahs": 18,
          "revelationType": "Medinan"
     },
     {
          "number": 65,
          "name": "سُورَةُ الطَّلَاقِ",
          "englishName": "At-Talaaq",
          "englishNameTranslation": "Divorce",
          "numberOfAyahs": 12,
          "revelationType": "Medinan"
     },
     {
          "number": 66,
          "name": "سُورَةُ التَّحۡرِيمِ",
          "englishName": "At-Tahrim",
          "englishNameTranslation": "The Prohibition",
          "numberOfAyahs": 12,
          "revelationType": "Medinan"
     },
     {
          "number": 67,
          "name": "سُورَةُ المُلۡكِ",
          "englishName": "Al-Mulk",
          "englishNameTranslation": "The Sovereignty",
          "numberOfAyahs": 30,
          "revelationType": "Meccan"
     },
     {
          "number": 68,
          "name": "سُورَةُ القَلَمِ",
          "englishName": "Al-Qalam",
          "englishNameTranslation": "The Pen",
          "numberOfAyahs": 52,
          "revelationType": "Meccan"
     },
     {
          "number": 69,
          "name": "سُورَةُ الحَاقَّةِ",
          "englishName": "Al-Haaqqa",
          "englishNameTranslation": "The Reality",
          "numberOfAyahs": 52,
          "revelationType": "Meccan"
     },
     {
          "number": 70,
          "name": "سُورَةُ المَعَارِجِ",
          "englishName": "Al-Ma'aarij",
          "englishNameTranslation": "The Ascending Stairways",
          "numberOfAyahs": 44,
          "revelationType": "Meccan"
     },
     {
          "number": 71,
          "name": "سُورَةُ نُوحٍ",
          "englishName": "Nooh",
          "englishNameTranslation": "Noah",
          "numberOfAyahs": 28,
          "revelationType": "Meccan"
     },
     {
          "number": 72,
          "name": "سُورَةُ الجِنِّ",
          "englishName": "Al-Jinn",
          "englishNameTranslation": "The Jinn",
          "numberOfAyahs": 28,
          "revelationType": "Meccan"
     },
     {
          "number": 73,
          "name": "سُورَةُ المُزَّمِّلِ",
          "englishName": "Al-Muzzammil",
          "englishNameTranslation": "The Enshrouded One",
          "numberOfAyahs": 20,
          "revelationType": "Meccan"
     },
     {
          "number": 74,
          "name": "سُورَةُ المُدَّثِّرِ",
          "englishName": "Al-Muddaththir",
          "englishNameTranslation": "The Cloaked One",
          "numberOfAyahs": 56,
          "revelationType": "Meccan"
     },
     {
          "number": 75,
          "name": "سُورَةُ القِيَامَةِ",
          "englishName": "Al-Qiyaama",
          "englishNameTranslation": "The Resurrection",
          "numberOfAyahs": 40,
          "revelationType": "Meccan"
     },
     {
          "number": 76,
          "name": "سُورَةُ الإِنسَانِ",
          "englishName": "Al-Insaan",
          "englishNameTranslation": "Man",
          "numberOfAyahs": 31,
          "revelationType": "Medinan"
     },
     {
          "number": 77,
          "name": "سُورَةُ المُرۡسَلَاتِ",
          "englishName": "Al-Mursalaat",
          "englishNameTranslation": "The Emissaries",
          "numberOfAyahs": 50,
          "revelationType": "Meccan"
     },
     {
          "number": 78,
          "name": "سُورَةُ النَّبَإِ",
          "englishName": "An-Naba",
          "englishNameTranslation": "The Announcement",
          "numberOfAyahs": 40,
          "revelationType": "Meccan"
     },
     {
          "number": 79,
          "name": "سُورَةُ النَّازِعَاتِ",
          "englishName": "An-Naazi'aat",
          "englishNameTranslation": "Those who drag forth",
          "numberOfAyahs": 46,
          "revelationType": "Meccan"
     },
     {
          "number": 80,
          "name": "سُورَةُ عَبَسَ",
          "englishName": "Abasa",
          "englishNameTranslation": "He frowned",
          "numberOfAyahs": 42,
          "revelationType": "Meccan"
     },
     {
          "number": 81,
          "name": "سُورَةُ التَّكۡوِيرِ",
          "englishName": "At-Takwir",
          "englishNameTranslation": "The Overthrowing",
          "numberOfAyahs": 29,
          "revelationType": "Meccan"
     },
     {
          "number": 82,
          "name": "سُورَةُ الانفِطَارِ",
          "englishName": "Al-Infitaar",
          "englishNameTranslation": "The Cleaving",
          "numberOfAyahs": 19,
          "revelationType": "Meccan"
     },
     {
          "number": 83,
          "name": "سُورَةُ المُطَفِّفِينَ",
          "englishName": "Al-Mutaffifin",
          "englishNameTranslation": "Defrauding",
          "numberOfAyahs": 36,
          "revelationType": "Meccan"
     },
     {
          "number": 84,
          "name": "سُورَةُ الانشِقَاقِ",
          "englishName": "Al-Inshiqaaq",
          "englishNameTranslation": "The Splitting Open",
          "numberOfAyahs": 25,
          "revelationType": "Meccan"
     },
     {
          "number": 85,
          "name": "سُورَةُ البُرُوجِ",
          "englishName": "Al-Burooj",
          "englishNameTranslation": "The Constellations",
          "numberOfAyahs": 22,
          "revelationType": "Meccan"
     },
     {
          "number": 86,
          "name": "سُورَةُ الطَّارِقِ",
          "englishName": "At-Taariq",
          "englishNameTranslation": "The Morning Star",
          "numberOfAyahs": 17,
          "revelationType": "Meccan"
     },
     {
          "number": 87,
          "name": "سُورَةُ الأَعۡلَىٰ",
          "englishName": "Al-A'laa",
          "englishNameTranslation": "The Most High",
          "numberOfAyahs": 19,
          "revelationType": "Meccan"
     },
     {
          "number": 88,
          "name": "سُورَةُ الغَاشِيَةِ",
          "englishName": "Al-Ghaashiya",
          "englishNameTranslation": "The Overwhelming",
          "numberOfAyahs": 26,
          "revelationType": "Meccan"
     },
     {
          "number": 89,
          "name": "سُورَةُ الفَجۡرِ",
          "englishName": "Al-Fajr",
          "englishNameTranslation": "The Dawn",
          "numberOfAyahs": 30,
          "revelationType": "Meccan"
     },
     {
          "number": 90,
          "name": "سُورَةُ البَلَدِ",
          "englishName": "Al-Balad",
          "englishNameTranslation": "The City",
          "numberOfAyahs": 20,
          "revelationType": "Meccan"
     },
     {
          "number": 91,
          "name": "سُورَةُ الشَّمۡسِ",
          "englishName": "Ash-Shams",
          "englishNameTranslation": "The Sun",
          "numberOfAyahs": 15,
          "revelationType": "Meccan"
     },
     {
          "number": 92,
          "name": "سُورَةُ اللَّيۡلِ",
          "englishName": "Al-Lail",
          "englishNameTranslation": "The Night",
          "numberOfAyahs": 21,
          "revelationType": "Meccan"
     },
     {
          "number": 93,
          "name": "سُورَةُ الضُّحَىٰ",
          "englishName": "Ad-Dhuhaa",
          "englishNameTranslation": "The Morning Hours",
          "numberOfAyahs": 11,
          "revelationType": "Meccan"
     },
     {
          "number": 94,
          "name": "سُورَةُ الشَّرۡحِ",
          "englishName": "Ash-Sharh",
          "englishNameTranslation": "The Consolation",
          "numberOfAyahs": 8,
          "revelationType": "Meccan"
     },
     {
          "number": 95,
          "name": "سُورَةُ التِّينِ",
          "englishName": "At-Tin",
          "englishNameTranslation": "The Fig",
          "numberOfAyahs": 8,
          "revelationType": "Meccan"
     },
     {
          "number": 96,
          "name": "سُورَةُ العَلَقِ",
          "englishName": "Al-Alaq",
          "englishNameTranslation": "The Clot",
          "numberOfAyahs": 19,
          "revelationType": "Meccan"
     },
     {
          "number": 97,
          "name": "سُورَةُ القَدۡرِ",
          "englishName": "Al-Qadr",
          "englishNameTranslation": "The Power, Fate",
          "numberOfAyahs": 5,
          "revelationType": "Meccan"
     },
     {
          "number": 98,
          "name": "سُورَةُ البَيِّنَةِ",
          "englishName": "Al-Bayyina",
          "englishNameTranslation": "The Evidence",
          "numberOfAyahs": 8,
          "revelationType": "Medinan"
     },
     {
          "number": 99,
          "name": "سُورَةُ الزَّلۡزَلَةِ",
          "englishName": "Az-Zalzala",
          "englishNameTranslation": "The Earthquake",
          "numberOfAyahs": 8,
          "revelationType": "Medinan"
     },
     {
          "number": 100,
          "name": "سُورَةُ العَادِيَاتِ",
          "englishName": "Al-Aadiyaat",
          "englishNameTranslation": "The Chargers",
          "numberOfAyahs": 11,
          "revelationType": "Meccan"
     },
     {
          "number": 101,
          "name": "سُورَةُ القَارِعَةِ",
          "englishName": "Al-Qaari'a",
          "englishNameTranslation": "The Calamity",
          "numberOfAyahs": 11,
          "revelationType": "Meccan"
     },
     {
          "number": 102,
          "name": "سُورَةُ التَّكَاثُرِ",
          "englishName": "At-Takaathur",
          "englishNameTranslation": "Competition",
          "numberOfAyahs": 8,
          "revelationType": "Meccan"
     },
     {
          "number": 103,
          "name": "سُورَةُ العَصۡرِ",
          "englishName": "Al-Asr",
          "englishNameTranslation": "The Declining Day, Epoch",
          "numberOfAyahs": 3,
          "revelationType": "Meccan"
     },
     {
          "number": 104,
          "name": "سُورَةُ الهُمَزَةِ",
          "englishName": "Al-Humaza",
          "englishNameTranslation": "The Traducer",
          "numberOfAyahs": 9,
          "revelationType": "Meccan"
     },
     {
          "number": 105,
          "name": "سُورَةُ الفِيلِ",
          "englishName": "Al-Fil",
          "englishNameTranslation": "The Elephant",
          "numberOfAyahs": 5,
          "revelationType": "Meccan"
     },
     {
          "number": 106,
          "name": "سُورَةُ قُرَيۡشٍ",
          "englishName": "Quraish",
          "englishNameTranslation": "Quraysh",
          "numberOfAyahs": 4,
          "revelationType": "Meccan"
     },
     {
          "number": 107,
          "name": "سُورَةُ المَاعُونِ",
          "englishName": "Al-Maa'un",
          "englishNameTranslation": "Almsgiving",
          "numberOfAyahs": 7,
          "revelationType": "Meccan"
     },
     {
          "number": 108,
          "name": "سُورَةُ الكَوۡثَرِ",
          "englishName": "Al-Kawthar",
          "englishNameTranslation": "Abundance",
          "numberOfAyahs": 3,
          "revelationType": "Meccan"
     },
     {
          "number": 109,
          "name": "سُورَةُ الكَافِرُونَ",
          "englishName": "Al-Kaafiroon",
          "englishNameTranslation": "The Disbelievers",
          "numberOfAyahs": 6,
          "revelationType": "Meccan"
     },
     {
          "number": 110,
          "name": "سُورَةُ النَّصۡرِ",
          "englishName": "An-Nasr",
          "englishNameTranslation": "Divine Support",
          "numberOfAyahs": 3,
          "revelationType": "Medinan"
     },
     {
          "number": 111,
          "name": "سُورَةُ المَسَدِ",
          "englishName": "Al-Masad",
          "englishNameTranslation": "The Palm Fibre",
          "numberOfAyahs": 5,
          "revelationType": "Meccan"
     },
     {
          "number": 112,
          "name": "سُورَةُ الإِخۡلَاصِ",
          "englishName": "Al-Ikhlaas",
          "englishNameTranslation": "Sincerity",
          "numberOfAyahs": 4,
          "revelationType": "Meccan"
     },
     {
          "number": 113,
          "name": "سُورَةُ الفَلَقِ",
          "englishName": "Al-Falaq",
          "englishNameTranslation": "The Dawn",
          "numberOfAyahs": 5,
          "revelationType": "Meccan"
     },
     {
          "number": 114,
          "name": "سُورَةُ النَّاسِ",
          "englishName": "An-Naas",
          "englishNameTranslation": "Mankind",
          "numberOfAyahs": 6,
          "revelationType": "Meccan"
     }
]

export const arabicNumbers = [
     "١", "٢", "٣", "٤", "٥", "٦", "٧", "٨", "٩", "١٠",
     "١١", "١٢", "١٣", "١٤", "١٥", "١٦", "١٧", "١٨", "١٩", "٢٠",
     "٢١", "٢٢", "٢٣", "٢٤", "٢٥", "٢٦", "٢٧", "٢٨", "٢٩", "٣٠",
     "٣١", "٣٢", "٣٣", "٣٤", "٣٥", "٣٦", "٣٧", "٣٨", "٣٩", "٤٠",
     "٤١", "٤٢", "٤٣", "٤٤", "٤٥", "٤٦", "٤٧", "٤٨", "٤٩", "٥٠",
     "٥١", "٥٢", "٥٣", "٥٤", "٥٥", "٥٦", "٥٧", "٥٨", "٥٩", "٦٠",
     "٦١", "٦٢", "٦٣", "٦٤", "٦٥", "٦٦", "٦٧", "٦٨", "٦٩", "٧٠",
     "٧١", "٧٢", "٧٣", "٧٤", "٧٥", "٧٦", "٧٧", "٧٨", "٧٩", "٨٠",
     "٨١", "٨٢", "٨٣", "٨٤", "٨٥", "٨٦", "٨٧", "٨٨", "٨٩", "٩٠",
     "٩١", "٩٢", "٩٣", "٩٤", "٩٥", "٩٦", "٩٧", "٩٨", "٩٩",
     "١٠٠", "١٠١", "١٠٢", "١٠٣", "١٠٤", "١٠٥", "١٠٦", "١٠٧", "١٠٨", "١٠٩",
     "١١٠", "١١١", "١١٢", "١١٣", "١١٤", "١١٥", "١١٦", "١١٧", "١١٨", "١١٩",
     "١٢٠", "١٢١", "١٢٢", "١٢٣", "١٢٤", "١٢٥", "١٢٦", "١٢٧", "١٢٨", "١٢٩",
     "١٣٠", "١٣١", "١٣٢", "١٣٣", "١٣٤", "١٣٥", "١٣٦", "١٣٧", "١٣٨", "١٣٩",
     "١٤٠", "١٤١", "١٤٢", "١٤٣", "١٤٤", "١٤٥", "١٤٦", "١٤٧", "١٤٨", "١٤٩",
     "١٥٠", "١٥١", "١٥٢", "١٥٣", "١٥٤", "١٥٥", "١٥٦", "١٥٧", "١٥٨", "١٥٩",
     "١٦٠", "١٦١", "١٦٢", "١٦٣", "١٦٤", "١٦٥", "١٦٦", "١٦٧", "١٦٨", "١٦٩",
     "١٧٠", "١٧١", "١٧٢", "١٧٣", "١٧٤", "١٧٥", "١٧٦", "١٧٧", "١٧٨", "١٧٩",
     "١٨٠", "١٨١", "١٨٢", "١٨٣", "١٨٤", "١٨٥", "١٨٦", "١٨٧", "١٨٨", "١٨٩",
     "١٩٠", "١٩١", "١٩٢", "١٩٣", "١٩٤", "١٩٥", "١٩٦", "١٩٧", "١٩٨", "١٩٩",
     "٢٠٠", "٢٠١", "٢٠٢", "٢٠٣", "٢٠٤", "٢٠٥", "٢٠٦", "٢٠٧", "٢٠٨", "٢٠٩",
     "٢١٠", "٢١١", "٢١٢", "٢١٣", "٢١٤", "٢١٥", "٢١٦", "٢١٧", "٢١٨", "٢١٩",
     "٢٢٠", "٢٢١", "٢٢٢", "٢٢٣", "٢٢٤", "٢٢٥", "٢٢٦", "٢٢٧", "٢٢٨", "٢٢٩",
     "٢٣٠", "٢٣١", "٢٣٢", "٢٣٣", "٢٣٤", "٢٣٥", "٢٣٦", "٢٣٧", "٢٣٨", "٢٣٩",
     "٢٤٠", "٢٤١", "٢٤٢", "٢٤٣", "٢٤٤", "٢٤٥", "٢٤٦", "٢٤٧", "٢٤٨", "٢٤٩",
     "٢٥٠", "٢٥١", "٢٥٢", "٢٥٣", "٢٥٤", "٢٥٥", "٢٥٦", "٢٥٧", "٢٥٨", "٢٥٩",
     "٢٦٠", "٢٦١", "٢٦٢", "٢٦٣", "٢٦٤", "٢٦٥", "٢٦٦", "٢٦٧", "٢٦٨", "٢٦٩",
     "٢٧٠", "٢٧١", "٢٧٢", "٢٧٣", "٢٧٤", "٢٧٥", "٢٧٦", "٢٧٧", "٢٧٨", "٢٧٩",
     "٢٨٠", "٢٨١", "٢٨٢", "٢٨٣", "٢٨٤", "٢٨٥", "٢٨٦", "٢٨٧", "٢٨٨", "٢٨٩",
     "٢٩٠", "٢٩١", "٢٩٢", "٢٩٣", "٢٩٤", "٢٩٥", "٢٩٦", "٢٩٧", "٢٩٨", "٢٩٩",
     "٣٠٠", "٣٠١", "٣٠٢", "٣٠٣", "٣٠٤", "٣٠٥", "٣٠٦", "٣٠٧", "٣٠٨", "٣٠٩",
     "٣١٠", "٣١١", "٣١٢", "٣١٣", "٣١٤", "٣١٥", "٣١٦", "٣١٧", "٣١٨", "٣١٩",
     "٣٢٠", "٣٢١", "٣٢٢", "٣٢٣", "٣٢٤", "٣٢٥", "٣٢٦", "٣٢٧", "٣٢٨", "٣٢٩",
     "٣٣٠", "٣٣١", "٣٣٢", "٣٣٣", "٣٣٤", "٣٣٥", "٣٣٦", "٣٣٧", "٣٣٨", "٣٣٩",
     "٣٤٠", "٣٤١", "٣٤٢", "٣٤٣", "٣٤٤", "٣٤٥", "٣٤٦", "٣٤٧", "٣٤٨", "٣٤٩",
     "٣٥٠", "٣٥١", "٣٥٢", "٣٥٣", "٣٥٤", "٣٥٥", "٣٥٦", "٣٥٧", "٣٥٨", "٣٥٩",
     "٣٦٠", "٣٦١", "٣٦٢", "٣٦٣", "٣٦٤", "٣٦٥", "٣٦٦", "٣٦٧", "٣٦٨", "٣٦٩",
     "٣٧٠", "٣٧١", "٣٧٢", "٣٧٣", "٣٧٤", "٣٧٥", "٣٧٦", "٣٧٧", "٣٧٨", "٣٧٩",
     "٣٨٠", "٣٨١", "٣٨٢", "٣٨٣", "٣٨٤", "٣٨٥", "٣٨٦", "٣٨٧", "٣٨٨", "٣٨٩",
     "٣٩٠", "٣٩١", "٣٩٢", "٣٩٣", "٣٩٤", "٣٩٥", "٣٩٦", "٣٩٧", "٣٩٨", "٣٩٩",
     "٤٠٠", "٤٠١", "٤٠٢", "٤٠٣", "٤٠٤", "٤٠٥", "٤٠٦", "٤٠٧", "٤٠٨", "٤٠٩",
     "٤١٠", "٤١١", "٤١٢", "٤١٣", "٤١٤", "٤١٥", "٤١٦", "٤١٧", "٤١٨", "٤١٩",
     "٤٢٠", "٤٢١", "٤٢٢", "٤٢٣", "٤٢٤", "٤٢٥", "٤٢٦", "٤٢٧", "٤٢٨", "٤٢٩",
     "٤٣٠", "٤٣١", "٤٣٢", "٤٣٣", "٤٣٤", "٤٣٥", "٤٣٦", "٤٣٧", "٤٣٨", "٤٣٩",
     "٤٤٠", "٤٤١", "٤٤٢", "٤٤٣", "٤٤٤", "٤٤٥", "٤٤٦", "٤٤٧", "٤٤٨", "٤٤٩",
     "٤٥٠", "٤٥١", "٤٥٢", "٤٥٣", "٤٥٤", "٤٥٥", "٤٥٦", "٤٥٧", "٤٥٨", "٤٥٩",
     "٤٦٠", "٤٦١", "٤٦٢", "٤٦٣", "٤٦٤", "٤٦٥", "٤٦٦", "٤٦٧", "٤٦٨", "٤٦٩",
     "٤٧٠", "٤٧١", "٤٧٢", "٤٧٣", "٤٧٤", "٤٧٥", "٤٧٦", "٤٧٧", "٤٧٨", "٤٧٩",
     "٤٨٠", "٤٨١", "٤٨٢", "٤٨٣", "٤٨٤", "٤٨٥", "٤٨٦", "٤٨٧", "٤٨٨", "٤٨٩",
     "٤٩٠", "٤٩١", "٤٩٢", "٤٩٣", "٤٩٤", "٤٩٥", "٤٩٦", "٤٩٧", "٤٩٨", "٤٩٩",
     "٥٠٠", "٥٠١", "٥٠٢", "٥٠٣", "٥٠٤", "٥٠٥", "٥٠٦", "٥٠٧", "٥٠٨", "٥٠٩",
]