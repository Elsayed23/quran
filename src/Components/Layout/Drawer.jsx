import React from "react";
import {
     Drawer,
     Typography,
     IconButton,
} from "@material-tailwind/react";
import { Link } from "react-router-dom";
import { navLinks } from "../../constants";

const DrawerDefault = ({ open, setOpen }) => {


     const closeDrawer = () => setOpen(false);

     const links = navLinks.map(link => {
          return (
               <li key={link.id}>
                    <Link to={link.url} className={`nav--item block py-3 border-t border-t-[#464b50] text-[#e7e9ea] hover:text-opacity-60 duration-100`}>{link.name}</Link>
               </li>
          )
     })


     return (
          <React.Fragment>
               <Drawer open={open} onClose={closeDrawer} className="py-4 px-6 top-10 bg-transparent backdrop-blur-lg text-[#e7e9ea]" placement='right' overlay={false}>
                    <div className="mb-6 flex items-center justify-between">
                         <Typography variant="h5">
                              Quran
                         </Typography>
                         <IconButton variant="text" className="rounded-full" color="white" onClick={closeDrawer}>
                              <svg
                                   xmlns="http://www.w3.org/2000/svg"
                                   fill="none"
                                   viewBox="0 0 24 24"
                                   strokeWidth={2}
                                   stroke="currentColor"
                                   className="h-5 w-5"
                              >
                                   <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M6 18L18 6M6 6l12 12"
                                   />
                              </svg>
                         </IconButton>
                    </div>
                    <h6 className="font-bold text-sm mb-5">
                         القائمة
                    </h6>
                    <ul className="font-medium flex flex-col">
                         {links}
                    </ul>
               </Drawer>
          </React.Fragment>
     );
}

export default DrawerDefault