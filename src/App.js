import "./App.css"
import React, { useState } from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Nav from "./components/Nav/Nav"
import BlogsNav from "./components/Nav/BlogsNav"

import Hero from "./components/Hero/Hero"
import Profile from "./components/Profile/Profile"
import Portfolio from "./components/Portfolio/Portfolio"
import Blogs from "./components/Blogs/Blogs"
import Lost from "./components/Lost/Lost"
import BlogPosts from "./components/BlogPosts/BlogPosts"
import Stars from "./components/Background/Stars"

function App() {
  const [bgColor, setBgColor] = useState(
    document.documentElement.classList.contains("dark") ? "dusk" : "dawn"
  )

  const handleThemeChange = () => {
    if (bgColor === "dawn") {
      setBgColor("dusk")
      !document.documentElement.classList.contains("dark") &&
        document.documentElement.classList.add("dark")
    } else {
      setBgColor("dawn")
      document.documentElement.classList.contains("dark") &&
        document.documentElement.classList.remove("dark")
    }
  }

  return (
    <BrowserRouter>
      <div className={`${bgColor} relative w-screen`}>
        {bgColor === "dusk" ? <Stars /> : ""}
        <Routes>
          <Route
            exact
            path="/"
            element={
              <>
                <Nav bgColor={bgColor} handleThemeChange={handleThemeChange} />
                <div className="overflow-x-hidden">
                  <Hero bgColor={bgColor} />
                  <Profile />
                  <Portfolio />
                  <Blogs />
                </div>
              </>
            }
          />
          <Route
            exact
            path="/blogs/:id"
            element={
              <>
                <BlogsNav
                  bgColor={bgColor}
                  handleThemeChange={handleThemeChange}
                />
                <div className="overflow-x-hidden">
                  <BlogPosts />
                </div>
              </>
            }
          />
          <Route
            exact
            path="*"
            element={
              <>
                <BlogsNav
                  bgColor={bgColor}
                  handleThemeChange={handleThemeChange}
                />
                <div className="overflow-x-hidden">
                  <Lost />
                </div>
              </>
            }
          />
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App
