import { useInView } from 'framer-motion';
import React, { useRef } from 'react'

const InViewAnimate = ({ children, className, id }) => {
     const ref = useRef(null);
     const isInView = useInView(ref, { once: true });

     return (
          <div ref={ref}
               className={`w-full h-full ${className}`}
               style={{
                    transform: isInView ? "none" : id % 2 === 0 ? "translateX(-200px) translateY(-50px)" : "translateX(200px) translateY(-50px)",
                    opacity: isInView ? 1 : 0,
                    transition: "all 0.8s cubic-bezier(0.17, 0.55, 0.55, 1) 0.2s"
               }}
          >

               {children}
          </div>
     );
}

export default InViewAnimate