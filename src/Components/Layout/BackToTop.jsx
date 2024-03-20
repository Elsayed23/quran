import React from 'react'
import { motion } from 'framer-motion'
import { IoArrowUp } from "react-icons/io5";

const BackToTop = () => {
     const [isHidden, setIsHidden] = React.useState(true)

     const scrollToTop = () => {
          window.scrollTo({
               top: 0,
               behavior: 'smooth',
          });
     };

     const handleScroll = () => window.scrollY > 250 ? setIsHidden(false) : setIsHidden(true)

     React.useEffect(() => {
          window.addEventListener('scroll', handleScroll);
          return () => window.removeEventListener('scroll', handleScroll);
     }, []);

     return (
          <motion.div
               className="fixed bottom-8 right-8 cursor-pointer hover:scale-150 bg-[#2ca4ab] text-white flex justify-center items-center text-4xl w-12 h-12 z-50 rounded-full"
               initial={{
                    opacity: 0,
                    scale: 0
               }}
               whileTap={{
                    scale: 0.9
               }}
               whileHover={{
                    scale: 1.1
               }}
               animate={{
                    opacity: isHidden ? 0 : 1,
                    scale: isHidden ? 0 : 1
               }}
               onClick={scrollToTop}
          >
               <IoArrowUp size={25} />
          </motion.div>

     )
}

export default BackToTop