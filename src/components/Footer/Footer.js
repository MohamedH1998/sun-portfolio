import React from "react"
import { BsGithub } from "react-icons/bs"
import { BsLinkedin } from "react-icons/bs"

import { BsTwitter } from "react-icons/bs"

const Footer = () => {
  return (
    <footer className="p-4 w-screen shadow flex items-center justify-center bg-clr-bg text-white">
      <a
        href="https://github.com/MohamedH98"
        className="px-4 text-2xl md:text-4xl py-4"
      >
        <BsGithub />
      </a>
      <a
        href="https://www.linkedin.com/in/mohamed-hassan-898399150/"
        className="px-4 text-2xl md:text-4xl py-4"
      >
        <BsLinkedin />
      </a>
      <a
        href="https://twitter.com/momito8_"
        className="px-4 text-2xl md:text-4xl py-4"
      >
        <BsTwitter />
      </a>
    </footer>
  )
}

export default Footer
