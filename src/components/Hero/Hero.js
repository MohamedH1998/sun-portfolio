import React, { useState } from "react"
import { Link } from "react-scroll"

import { FiChevronDown } from "react-icons/fi"

import moon from "../../assets/images/moon.png"
import sun from "../../assets/images/sun.png"

import "./Hero.css"
const Hero = ({ checkedTheme }) => {
  const [loaded1, setLoaded1] = useState(false)
  const [loaded2, setLoaded2] = useState(false)
  const [loaded3, setLoaded3] = useState(false)
  const [loaded4, setLoaded4] = useState(false)

  return (
    <div className="relative flex justify-center items-center w-screen">
      <div className="flex top-full flex-col md:w-9/12 items-start justify-start pl-10 pr-1 pb-10 h-full  relative home">
        <p className="w-6/12 text-sm dark:text-clr-bg-lightest-offset text-clr-bg-darker-offset md:text-base py-7">
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
          <p className="w-6/12 text-right md:text-left dark:text-white text-clr-bg origin-top-left top-full left-0 -rotate-90 text-small md:text-lg">
            self-taught dev
          </p>
          <div className="absolute top-0 right-0 w-full max-w-xs">
            {checkedTheme && (
              <div className="relative">
                <img
                  src={sun}
                  onLoad={() => setLoaded1(true)}
                  className={`slide-out-tl  absolute top-0 object-cover smooth-image image-${
                    loaded1 ? "visible" : "hidden"
                  } left-12 md:left-0 w-10/12 md:w-full `}
                  alt="self"
                />
                <img
                  src={moon}
                  onLoad={() => setLoaded2(true)}
                  className={`slide-in-br absolute top-0 object-cover smooth-image image-${
                    loaded2 ? "visible" : "hidden"
                  } left-12 md:left-0 w-10/12 md:w-full `}
                  alt="self"
                />
              </div>
            )}
            {!checkedTheme && (
              <div className="relative">
                <img
                  src={moon}
                  onLoad={() => setLoaded3(true)}
                  className={`slide-out-tl  absolute top-0 object-cover smooth-image image-${
                    loaded3 ? "visible" : "hidden"
                  } left-12 md:left-0 w-10/12 md:w-full `}
                  alt="self"
                />
                <img
                  src={sun}
                  onLoad={() => setLoaded4(true)}
                  className={`slide-in-br absolute top-0 object-cover smooth-image image-${
                    loaded4 ? "visible" : "hidden"
                  } left-12  md:left-0 w-10/12 md:w-full `}
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
