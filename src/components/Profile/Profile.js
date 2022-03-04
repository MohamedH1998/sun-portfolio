import React from "react"
import { Link } from "react-scroll"

import { FiChevronDown } from "react-icons/fi"
import rotatingText from "../../assets/images/rotating-txt.png"
import light from "../../assets/images/light.jpg"

import "./Profile.css"
const Profile = () => {
  return (
    <div className="relative flex justify-center items-start h-145 w-screen">
      <div className="about w-9/12">
        <h1 className="text-5xl dark:text-white text-clr-bg hero-header py-7">
          About me
        </h1>
        <hr className="w-full border-2 border-clr-skin" />
        <div className="flex flex-col md:flex-row items-start pt-8 justify-center w-full">
          <div className="flex items-center justify-between w-full pb-8">
            <p className="w-7/12 dark:text-white text-clr-bg text-base md:text-lg py-5">
              I am a self-taught dev who enjoys solving problems
              with clean, scalable solutions.
            </p>
            <Link
              to="portfolio"
              spy={true}
              smooth={true}
              className="p-3 mr-3 text-base cursor-pointer text-right dark:text-white text-clr-bg border-2 dark:border-white border-clr-bg rounded-full"
            >
              <FiChevronDown />
            </Link>
          </div>

          <div className="flex items-center justify-center w-full h-full relative">
            <img
              src={light}
              className=" object-cover w-10/12 md:w-8/12 max-h-96 max-w-sm shadow-inner shadow-clr-skin absolute top-0"
              alt="light"
            />
            <img
              src={rotatingText}
              className="rotating_text w-9/12 md:w-3/5 md:mt-4 max-w-sm object-cover absolute top-0 mt-4"
              alt="smart, simple, and scalable solutions"
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Profile
