import React from "react"
import { Link } from "react-router-dom"

const Lost = () => {
  return (
    <div className="min-w-screen min-h-screenflex items-start h-screen p-5 lg:p-20 overflow-hidden relative">
      <div className="flex-1  relative md:flex items-start text-center md:text-left">
        <div className="w-full md:w-1/2">
          <div className="mb-10 lg:mb-20">
            <img
              alt=""
              src="https://flipstore.withun.link/identity/Group%201.svg"
            />
          </div>
          <div className="mb-10 md:mb-20 text-base text-clr-bg dark:text-white">
            <h1 className="font-black uppercase text-2xl lg:text-5xl text-clr-bg mb-10 dark:text-white">
              you shouldn't be here
            </h1>
            <p className="pb-4">
              But since you are, send me a nice{" "}
              <a
                className="underline underline-offset-2"
                href="https://twitter.com/momito8_"
              >
                tweet
              </a>
              .
            </p>

            <Link className="underline underline-offset-2" to="/">
              Or go home
            </Link>
          </div>
        </div>
        <div className="w-full md:w-1/2 text-center">
          <img
            src="https://images.unsplash.com/photo-1570395623789-d9c9a31598a6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
            alt=""
            className="object-fit"
          />
        </div>
      </div>
    </div>
  )
}

export default Lost
