import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin, faGithub, faWhatsapp } from '@fortawesome/free-brands-svg-icons';


const Footer = () => {

    const currYear = new Date().getFullYear()

    const socialData = [
        {
            name:
                'whatsapp',
            icon:
                faWhatsapp,
            url: 'https://wa.me/+201152989114'
        },
        {
            name:
                'github',
            icon: faGithub,
            url:
                'https://github.com/Elsayed23'
        },
        {
            name:
                'linkedin',
            icon: faLinkedin,
            url:
                'https://www.linkedin.com/in/el-sayed-kewan-48565a26b/'
        }
    ]

    return (
        <footer className='border-t-2 py-6'>
            <div className="flex flex-col items-center gap-4 sm:gap-0 sm:flex-row sm:justify-around">
                <div className="flex gap-4">
                    {
                        socialData.map((social, idx) => {
                            return (
                                <a key={idx} href={social.url} className='group block' target='_blank'>
                                    <FontAwesomeIcon icon={social.icon} className='group-hover:text-[#2ca4ab] duration-300' fontSize={25} />
                                </a>
                            )
                        })
                    }
                </div>
                <p>Made With <svg width='18px' height='18px' fill='#fff' className='inline' xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 122.88 107.39"><path className="cls-1" d="M60.83,17.18c8-8.35,13.62-15.57,26-17C110-2.46,131.27,21.26,119.57,44.61c-3.33,6.65-10.11,14.56-17.61,22.32-8.23,8.52-17.34,16.87-23.72,23.2l-17.4,17.26L46.46,93.55C29.16,76.89,1,55.92,0,29.94-.63,11.74,13.73.08,30.25.29c14.76.2,21,7.54,30.58,16.89Z" /><path xmlns="http://www.w3.org/2000/svg" className="cls-1" d="M60.83,17.18c8-8.35,13.62-15.57,26-17C110-2.46,131.27,21.26,119.57,44.61c-3.33,6.65-10.11,14.56-17.61,22.32-8.23,8.52-17.34,16.87-23.72,23.2l-17.4,17.26L46.46,93.55C29.16,76.89,1,55.92,0,29.94-.63,11.74,13.73.08,30.25.29c14.76.2,21,7.54,30.58,16.89Z" /></svg> By <span className='font-bold text-[#2ca4ab]'>Elsayed Kewan</span></p>
            </div>
        </footer>
    );
}

export default Footer;