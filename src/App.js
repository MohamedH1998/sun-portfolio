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
      <div className={`${bgColor} relative`}>
        {bgColor === "dusk" ? <Stars /> : ""}
        <Routes>
          <Route
            exact
            path="/"
            element={
              <>
                <Nav bgColor={bgColor} handleThemeChange={handleThemeChange} />
                <Hero bgColor={bgColor} />
                <Profile />
                <Portfolio />
                <Blogs />
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
                <BlogPosts />
              </>
            }
          />
          <Route
            exact
            path="*"
            element={
              <>
                <Nav bgColor={bgColor} handleThemeChange={handleThemeChange} />
                <Lost />
              </>
            }
          />
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App
