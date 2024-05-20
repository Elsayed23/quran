import React from 'react'
import { motion } from 'framer-motion'
import { CiPause1, CiPlay1 } from 'react-icons/ci'

const PlayButton = ({ isPlaying, setIsPlaying }) => {
     return (
          <motion.div
               whileTap={{ scale: .95 }}
               onClick={() => { setIsPlaying(prev => !prev) }}
               className="toggleAudio flex items-center gap-3 outline-1 outline cursor-pointer px-4 py-2 text-[#2ca4ab] hover:bg-[#2ca4ab] rounded-sm"
          >
               <span className='pt-1'>{isPlaying ? 'إيقاف' : 'تشغيل'} الصوت</span>
               {
                    isPlaying ? <CiPause1 size={19} /> : <CiPlay1 size={19} />

               }
          </motion.div>
     )
}

export default PlayButton