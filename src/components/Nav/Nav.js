import React, { useState, useEffect } from "react"
import { VscCircleLargeFilled } from "react-icons/vsc"
import { SiDwavesystems } from "react-icons/si"

import "./Nav.css"
import NavLink from "./NavLink"
const Nav = ({ bgColor, handleThemeChange }) => {
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
        <i className="dark:text-white cursor-pointer text-clr-bg flex justify-center items-center text-2xl md:text-3xl">
          <label
            for="toggle-example"
            class={`flex relative items-center cursor-pointer ${bgColor}`}
          >
            <input
              type="checkbox"
              onClick={() => handleThemeChange()}
              id="toggle-example"
              class="sr-only w-full"
              checked={bgColor === "dusk"}
            />
            <div
              class={`w-20 h-8 bg-blue-300 rounded-full border border-blue-400 toggle-bg`}
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
