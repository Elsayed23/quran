import React from 'react'
import { motion, useScroll } from 'framer-motion'

const ProgressBar = () => {

    const { scrollYProgress } = useScroll();

    return (
        <motion.div
            className="progress-bar bg-white z-[99] fixed top-[80px] md:top-[77px] left-0 right-0 h-1 origin-[0%]"
            style={{ scaleX: scrollYProgress }}
            initial={{ scaleX: 0, z: 0 }}
        />
    )
}

export default ProgressBar