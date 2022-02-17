import React, { useState, useEffect } from "react"
import { VscCircleLargeFilled } from "react-icons/vsc"
import { SiDwavesystems } from "react-icons/si"
import { Link } from "react-router-dom"
import { BsFillMoonFill } from "react-icons/bs"
import { BsFillSunFill } from "react-icons/bs"

import "./Nav.css"

const BlogsNav = ({ bgColor, handleThemeChange }) => {
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
            <i className={`w-5 h-5 hidden`} id="theme-toggle-light-icon">
              <BsFillMoonFill />
            </i>

            <i className={`w-5 h-5 hidden`} id="theme-toggle-dark-icon">
              <BsFillSunFill />
            </i>
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
        className={`dark:bg-clr-bg flex items-center justify-center bg-clr-bg-lightest-offset top-[4.5rem] ${
          click ? "slide-in" : "slide-out"
        }`}
      >
        <Link to="/">
          <li className="mb-2 cursor-pointer text-2xl pb-12 font-bold tracking-tight text-gray-900 dark:text-white">
            Home
          </li>
        </Link>
      </ul>
    </div>
  )
}

export default BlogsNav
