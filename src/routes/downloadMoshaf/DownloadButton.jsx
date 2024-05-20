import React, { useState, useRef } from 'react';
import JSZip from 'jszip';
import { saveAs } from 'file-saver';
import axios from 'axios';
import { recitersData } from '../../recitersData';

const surahNamesArabic = [
     "الفاتحة", "البقرة", "آل عمران", "النساء", "المائدة", "الأنعام", "الأعراف", "الأنفال", "التوبة", "يونس", "هود", "يوسف", "الرعد", "إبراهيم", "الحجر",
     "النحل", "الإسراء", "الكهف", "مريم", "طه", "الأنبياء", "الحج", "المؤمنون", "النور", "الفرقان", "الشعراء", "النمل", "القصص", "العنكبوت", "الروم",
     "لقمان", "السجدة", "الأحزاب", "سبأ", "فاطر", "يس", "الصافات", "ص", "الزمر", "غافر", "فصلت", "الشورى", "الزخرف", "الدخان", "الجاثية", "الأحقاف",
     "محمد", "الفتح", "الحجرات", "ق", "الذاريات", "الطور", "النجم", "القمر", "الرحمن", "الواقعة", "الحديد", "المجادلة", "الحشر", "الممتحنة", "الصف",
     "الجمعة", "المنافقون", "التغابن", "الطلاق", "التحريم", "الملك", "القلم", "الحاقة", "المعارج", "نوح", "الجن", "المزمل", "المدثر", "القيامة", "الإنسان",
     "المرسلات", "النبأ", "النازعات", "عبس", "التكوير", "الإنفطار", "المطففين", "الإنشقاق", "البروج", "الطارق", "الأعلى", "الغاشية", "الفجر", "البلد",
     "الشمس", "الليل", "الضحى", "الشرح", "التين", "العلق", "القدر", "البينة", "الزلزلة", "العاديات", "القارعة", "التكاثر", "العصر", "الهمزة", "الفيل",
     "قريش", "الماعون", "الكوثر", "الكافرون", "النصر", "المسد", "الإخلاص", "الفلق", "الناس"
];

const formatSurahNumber = (num) => {
     return num.toString().padStart(3, '0');
};

const generateRecitationUrls = (reciter) => {
     return reciter.surahList.map(surahNumber => ({
          url: `${reciter.baseUrl}${formatSurahNumber(surahNumber)}.mp3`,
          name: surahNamesArabic[surahNumber - 1]
     }));
};

// Update recitersData to include the generated recitationUrls
recitersData.forEach(reciter => {
     reciter.recitationUrls = generateRecitationUrls(reciter);
});

const DownloadButton = ({ reciterName }) => {
     const [progress, setProgress] = useState(0);
     const [currentFile, setCurrentFile] = useState('');
     const [downloading, setDownloading] = useState(false);
     const cancelTokensRef = useRef([]);

     const reciter = recitersData.find(r => r.name === reciterName);

     const downloadFilesAsZip = async () => {
          setDownloading(true);
          const zip = new JSZip();
          const recitationUrls = reciter.recitationUrls;
          const totalFiles = recitationUrls.length;

          cancelTokensRef.current = [];

          const fetchAndAddToZip = async ({ url, name }) => {
               const source = axios.CancelToken.source();
               cancelTokensRef.current.push(source);

               setCurrentFile(name);
               try {
                    const response = await axios.get(url, {
                         responseType: 'blob',
                         cancelToken: source.token,
                         onDownloadProgress: (progressEvent) => {
                              const total = progressEvent.total;
                              const current = progressEvent.loaded;
                              const percentage = ((current / total) * 100).toFixed(2);
                              console.log(`${percentage}% Downloading ${name}`);
                         }
                    });
                    zip.file(`${name}.mp3`, response.data);
               } catch (error) {
                    if (axios.isCancel(error)) {
                         console.log('Download cancelled:', name);
                    } else {
                         console.error('Download error:', error);
                    }
               }
          };

          for (let i = 0; i < totalFiles; i++) {
               await fetchAndAddToZip(recitationUrls[i]);
               setProgress(((i + 1) / totalFiles * 100).toFixed(0));
               if (cancelTokensRef.current.length === 0) break;  // Exit if download was cancelled
          }

          if (cancelTokensRef.current.length !== 0) {
               const zipBlob = await zip.generateAsync({ type: 'blob' });
               saveAs(zipBlob, `القارئ_${reciter.name}.zip`);
          }

          setProgress(100);
          setDownloading(false);
          setCurrentFile('');
          cancelTokensRef.current = [];
     };

     const cancelDownload = () => {
          cancelTokensRef.current.forEach(source => source.cancel());
          cancelTokensRef.current = [];
          setDownloading(false);
          setProgress(0);
          setCurrentFile('');
     };

     return (
          <div className='relative w-fit'>
               {
                    downloading &&
                    <div className="flex items-center gap-4 absolute -left-6 top-2/4 -translate-y-2/4 -translate-x-full">
                         <div className="pt-1 w-9 h-9 font-bold relative flex text-xs justify-center items-center bg-[#2ca4ab] rounded-full before:absolute before:bg-[#2ca4ab] before:w-6 before:h-[2px] before:translate-x-full before:right-0">
                              {progress}%
                         </div>
                         <h3>({currentFile})</h3>
                    </div>
               }
               <button onClick={downloading ? cancelDownload : downloadFilesAsZip} className='cursor-pointer px-5 border hover:border-[#2ca4ab] rounded-sm hover:bg-[#2ca4ab] duration-200 py-2 underline underline-offset-2'>
                    {downloading ? 'إلغاء التحميل' : 'تحميل المصحف'}
               </button>
          </div>
     );
};

export default DownloadButton;
