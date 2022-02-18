import React from "react"
import { Link } from "react-scroll"

import { FiChevronDown } from "react-icons/fi"

import "./Hero.css"
const Hero = ({ bgColor }) => {
  return (
    <div className="relative flex justify-center items-center w-screen overflow-hidden">
      <div className="flex top-full flex-col md:w-9/12 items-start justify-start pl-10 pr-1 pb-10 h-full  relative home">
        <p className="w-6/12 text-sm  dark:text-clr-bg-lightest-offset text-clr-bg-darker-offset md:text-base py-7">
          building smart, simple &#38; scalable solutions
        </p>
        <h1 className="text-5xl dark:text-white text-clr-bg hero-header py-4 md:text-6xl font-semibold md:font-bold">
          Mohamed Hassan
        </h1>
        <div className="flex items-center justify-between w-full pt-2">
          <Link
            to="about"
            spy={true}
            smooth={true}
            className="p-3 cursor-pointer text-base md:text-3xl dark:text-white text-clr-bg border-2 dark:border-white border-clr-bg-darker-offset rounded-full"
          >
            <FiChevronDown />
          </Link>

          <p className="w-6/12 text-sm md:text-base md:text-center dark:text-clr-bg-lightest-offset text-clr-bg-darker-offset text-small py-7">
            clarity comes from engagement, not thought.
          </p>
        </div>
        <div className="relative flex items-end justify-between w-full h-[22rem]">
          <p className="w-6/12 mb-16 md:mb-0 text-right md:text-left dark:text-white text-clr-bg origin-top-left top-full left-0 -rotate-90 text-small md:text-lg">
            self-taught dev
          </p>
          <div className="absolute top-0 right-0 w-full max-w-xs">
            {bgColor === "dawn" && (
              <div className="relative">
                <img
                  src="https://ik.imagekit.io/momito/tr:w-600/sun_32KS8__YU.png?ik-sdk-version=javascript-1.4.3&updatedAt=1645212367059"
                  className="slide-out-tl  absolute top-0 object-cover left-12 md:left-0 w-10/12 md:w-full"
                  alt="self"
                />
                <img
                  src="https://ik.imagekit.io/momito/tr:w-600/moon_Hd94QIPBG.png?ik-sdk-version=javascript-1.4.3&updatedAt=1645212365469"
                  className="slide-in-br absolute top-0 object-cover left-12 md:left-0 w-10/12 md:w-full"
                  alt="self"
                />
              </div>
            )}
            {bgColor === "dusk" && (
              <div className="relative">
                <img
                  src="https://ik.imagekit.io/momito/tr:w-600/moon_Hd94QIPBG.png?ik-sdk-version=javascript-1.4.3&updatedAt=1645212365469"
                  className="slide-out-tl  absolute top-0 object-cover left-12 md:left-0 w-10/12 md:w-full"
                  alt="self"
                />
                <img
                  src="https://ik.imagekit.io/momito/tr:w-600/sun_32KS8__YU.png?ik-sdk-version=javascript-1.4.3&updatedAt=1645212367059"
                  className="slide-in-br absolute top-0 object-cover left-12  md:left-0 w-10/12 md:w-full"
                  alt="self"
                />
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero
