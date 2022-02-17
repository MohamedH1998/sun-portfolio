import "./App.css"
import React, { useState, useEffect } from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"

import Nav from "./components/Nav/Nav"
import BlogsNav from "./components/Nav/BlogsNav"

import Hero from "./components/Hero/Hero"
import Profile from "./components/Profile/Profile"
import Portfolio from "./components/Portfolio/Portfolio"
import Blogs from "./components/Blogs/Blogs"
import Lost from "./components/Lost/Lost"
import BlogPosts from "./components/BlogPosts/BlogPosts"
import Footer from "./components/Footer/Footer"
import Stars from "./components/Background/Stars"
import { configureTheme } from "./utils"

function App() {
  const currentTheme = document.documentElement.classList.value
  const [bgColor, setBgColor] = useState(
    currentTheme === "dark" ? "dusk" : "dawn"
  )
  const handleThemeChange = () => {
    console.log("currentlySet to :", bgColor)
    document.documentElement.classList.value === "dark"
      ? setBgColor("dusk")
      : setBgColor("dawn")
  }
  useEffect(() => {
    configureTheme()
  }, [])
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
                <Footer />
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
