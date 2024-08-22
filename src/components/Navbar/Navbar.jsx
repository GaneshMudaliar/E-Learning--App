import React, { useState } from 'react';
import {IoMdMenu} from "react-icons/io";
import { IoClose } from 'react-icons/io5';
import { Link } from 'react-router-dom';




const NavbarMenu = [
  {
    id: 1,
    title: "Home",
    path: "/",
  },
  {
    id: 2,
    title: "Services",
    link: "#",
  },
  

  {
    id: 5,
    title: "Contact Us",
    link: "#",
  },
];




const Navbar = () => {
const [isOpen , setIsOpen] =useState(false);

  return (
    <nav className="relative z-20 bg-light">
       <div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        className="container py-10 flex justify-between items-center"
      > 
        {/* Logo section */}
        <div>
          <Link to="/" className="font-bold text-blue-500 text-2xl">Code4U</Link>
        </div>

       
        {/* Menu section */}
        <div className="hidden lg:block">
          <ul className="flex items-center gap-3 ">
            {NavbarMenu.map((menu) => (
              <li key={menu.id}>
                <Link
                  to={menu.path}
                  className="inline-block py-2 px-3 hover:text-secondary relative group"
                >
                  <div className="w-2 h-2 bg-secondary absolute mt-4 rounded-full left-1/2 -translate-x-1/2 top-1/2 bottom-0 group-hover:block hidden"></div>
                  {menu.title}
                </Link>
              </li>
            ))}

            <Link to="/login">
            <button className="primary-btn">Log In</button>
            </Link>
          </ul>
        </div>
         {/* Mobile Hamburger menu section */}

         <div className="lg:hidden text-3xl">
         <button  onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <IoClose /> : <IoMdMenu />}
         </button>

        </div>
      </div>
      {isOpen && (
        <div className="md:hidden block">
          <ul className="flex flex-col items-center space-y-4 bg-light ">
            {NavbarMenu.map((menu) => (
              <li key={menu.id}>
                <Link
                  to={menu.path}
                  onClick={() => setIsOpen(!isOpen)}
                  className="inline-block py-2 px-3 hover:text-secondary relative group"
                >
                  <div className="w-2 h-2 bg-secondary absolute mt-4 rounded-full left-1/2 -translate-x-1/2 top-1/2 bottom-0 group-hover:block hidden"></div>
                  {menu.title}
                </Link>
              </li>
            ))}
            <Link to="/login" onClick={() => setIsOpen(!isOpen)}>
            <button className="primary-btn">Log In</button>
            </Link>
          </ul>
        </div>
        
      )}




    </nav>



  )
}

export default Navbar;