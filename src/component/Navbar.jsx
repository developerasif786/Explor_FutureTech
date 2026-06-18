import React from "react";
import { NavLink } from "react-router-dom";
import "../App.css";
import imgero from "./img/ero1.png";
import logo1 from "./img/Logo.png";
import navicon from "./img/nav-icon.png";

function Navbar() {
  return (
    <>
      {/* top nav  */}
      <div className="flex justify-center items-center gap-3 bg-141414 py-3"> 
        <p className="heding-10">
          Subscribe to our Newsletter For Blogs and Resources
        </p>
        <img
          src={imgero}
          alt="img"
          className="ob object-contain size-[13.75px]"
        />
      </div>
      {/* navbar  */}
      <nav
        className="py-4 px-4 sm:px-20  bg-1A1A1A flex justify-between border-1 border-666666 fixed top-0">
        {/* logo div  */}
        <div className="">
          <img src={logo1} alt="logo" className="w-143px h-10 object-center" />
        </div>
        <div className="fixed top-0">
        <div className=".heding-10 text-[#7E7E7E] hidden sm:block capitalize">
          <ul className="flex gap-6">
            {/* 1 */}
            <li>
              <NavLink className="" to="/">
                home
              </NavLink>
            </li>
            {/* 2 */}
            <li>
              <NavLink className="" to="/News">
                news
              </NavLink>
            </li>
            {/* 3 */}
            <li>
              <NavLink className="" to="/Podcast">
                Podcasts
              </NavLink>
            </li>
            {/* 4 */}
            <li>
              <NavLink className="" to="/Resours">
                Resources
              </NavLink>
            </li>
          </ul>
        </div>
        {/* 3 div */}
        <div className="">
          <img src={navicon} alt="img" className=" size-[34px] sm:hidden" />
          <button className="bg-[#FFD11A] py-[10px] px-[14px] heading-10 rounded-[6px] hidden sm:block">
            <NavLink className="" to="/Contact">
              Contact Us
            </NavLink>
          </button>
        </div> </div>
      </nav>
    </>
  );
}

export default Navbar;
