import React, { useState } from "react"
import { Link } from "react-scroll"

const NavLink = ({ dest, destName }) => {
  const [click, setClick] = useState(false)
  const handleClick = () => {
    setClick(!click)
  }
  return (
    <li className="m-10 align-middle">
      <Link
        activeClass="active"
        to={dest}
        spy={true}
        smooth={true}
        onClick={handleClick}
        className="flex items-center h-full px-10 dark:text-white text-xl text-clr-bg "
      >
        {destName}
      </Link>
    </li>
  )
}

export default NavLink
