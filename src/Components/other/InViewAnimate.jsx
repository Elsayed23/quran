import { useInView } from 'framer-motion';
import React, { useRef } from 'react'

const InViewAnimate = ({ children, className, id }) => {
     const ref = useRef(null);
     const isInView = useInView(ref, { once: true });

     return (
          <div ref={ref}
               className={`w-full h-full ${className}`}
               style={{
                    transform: isInView ? 'translateY(0)' : 'translateY(100px)',
                    opacity: isInView ? 1 : 0,
                    transition: 'ease-in-out .7s'
               }}
          >

               {children}
          </div>
     );
}

export default InViewAnimate