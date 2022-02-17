import React, { useState, useEffect } from "react"
import { VscCircleLargeFilled } from "react-icons/vsc"
import { SiDwavesystems } from "react-icons/si"

import "./Nav.css"
import NavLink from "./NavLink"
const Nav = ({ handleThemeChange }) => {
  const [click, setClick] = useState(false)

  const handleClick = () => {
    setClick(prev => !prev)
  }

  useEffect(() => {
    click
      ? (document.body.style.overflow = "hidden")
      : (document.body.style.overflow = "unset")
  }, [click])

  return (
    <div
      className={`sticky top-0 flex items-center justify-start w-screen z-50 ${
        !click ? "overflow-hidden" : ""
      }`}
    >
      <div className="flex justify-between w-full h-full px-10">
        <i className="flex text-base md:text-3xl no-underline text-clr-skin my-7 justify-self-start ">
          <VscCircleLargeFilled />
        </i>
        <i
          onClick={() => handleThemeChange()}
          className="dark:text-white cursor-pointer text-clr-bg flex justify-center items-center text-2xl md:text-3xl"
        >
          <button
            id="theme-toggle"
            type="button"
            className="dark:text-white text-gray-400  focus:outline-none focus:ring-4  rounded-lg text-sm p-2.5"
          >
            <svg
              id="theme-toggle-dark-icon"
              className="w-5 h-5 hidden"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"></path>
            </svg>
            <svg
              id="theme-toggle-light-icon"
              className="w-5 h-5 hidden"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"
                fillRule="evenodd"
                clipRule="evenodd"
              ></path>
            </svg>
          </button>
        </i>
        <span
          onClick={handleClick}
          className={`flex justify-center cursor-pointer my-4 text-4xl md:text-5xl font-black dark:text-white  text-clr-bg right-10 nav-icon ${
            click && "active-nav-icon"
          }`}
        >
          <SiDwavesystems />
        </span>
      </div>

      <ul
        id="slider"
        className={`dark:bg-clr-bg flex flex-col justify-start bg-clr-bg-lightest-offset top-[4.5rem] ${
          click ? "slide-in" : "slide-out"
        }`}
      >
        <NavLink handleClick={handleClick} dest="name" destName="Home" />
        <NavLink handleClick={handleClick} dest="about" destName="About" />
        <NavLink
          handleClick={handleClick}
          dest="portfolio"
          destName="Portfolio"
        />
        <NavLink handleClick={handleClick} dest="blogs" destName="Blogs" />
      </ul>
    </div>
  )
}

export default Nav
