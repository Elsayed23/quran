import { useState, useEffect } from 'react';

const ScrollHandler = () => {
     const [prevScrollPos, setPrevScrollPos] = useState(window.pageYOffset);

     useEffect(() => {
          const handleScroll = () => {
               const currentScrollPos = window.pageYOffset;
               if (prevScrollPos > currentScrollPos) {
                    document.getElementById("navbar").style.top = "40px";
               } else {
                    document.getElementById("navbar").style.top = "-40px";
               }
               setPrevScrollPos(currentScrollPos);
          };

          window.addEventListener('scroll', handleScroll);

          return () => {
               window.removeEventListener('scroll', handleScroll);
          };
     }, [prevScrollPos]);

     return null; // This component doesn't render anything
};

export default ScrollHandler;
