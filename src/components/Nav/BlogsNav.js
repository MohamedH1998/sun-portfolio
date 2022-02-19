import React, { useState, useEffect } from "react"
import { VscCircleLargeFilled } from "react-icons/vsc"
import { SiDwavesystems } from "react-icons/si"
import { Link } from "react-router-dom"
import "./Nav.css"
const BlogsNav = ({ bgColor, handleThemeChange }) => {
  const [click, setClick] = useState(false)

  const handleClick = () => {
    setClick(prev => !prev)
  }

  useEffect(() => {
    click
      ? (document.body.style.overflowX = "hidden")
      : (document.body.style.overflowX = "unset")
  }, [click])

  return (
    <div
      className={`sticky top-0 flex ${bgColor} items-center justify-start w-screen z-50 ${
        !click ? "overflow-hidden" : ""
      }`}
    >
      <div className="flex justify-between w-full h-full px-10">
        <i className="flex text-base md:text-3xl no-underline text-clr-skin my-7 justify-self-start ">
          <VscCircleLargeFilled />
        </i>
        <i className="dark:text-white cursor-pointer text-clr-bg flex justify-center items-center text-2xl md:text-3xl">
          <label
            htmlFor="toggle-theme"
            className={`flex relative items-center cursor-pointer ${
              bgColor === "dusk" ? "dusk-toggle" : "dawn-toggle"
            }`}
          >
            <input
              type="checkbox"
              onChange={() => handleThemeChange()}
              id="toggle-theme"
              className="sr-only w-full"
              checked={bgColor === "dusk"}
            />
            <div
              className={`w-14 h-6 bg-blue-300 rounded-full border border-white toggle-bg`}
            ></div>
          </label>
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
        className={`dark:bg-clr-bg flex flex-col pt-28 items-center bg-clr-bg-lightest-offset top-[4.5rem] ${
          click ? "slide-in" : "slide-out"
        }`}
      >
        <Link onClick={() => handleClick()} to="/">
          <li className="mb-2 cursor-pointer md:text-4xl text-2xl pt-12 pr-8 font-bold tracking-tight text-gray-900 dark:text-white">
            Home
          </li>
        </Link>
      </ul>
    </div>
  )
}

export default BlogsNav
