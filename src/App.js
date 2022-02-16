import "./App.css"
import React, { useState, useEffect } from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"

import Nav from "./components/Nav/Nav"
import Hero from "./components/Hero/Hero"
import Profile from "./components/Profile/Profile"
import Portfolio from "./components/Portfolio/Portfolio"
import Blogs from "./components/Blogs/Blogs"
import Lost from "./components/Lost/Lost"
import BlogPosts from "./components/BlogPosts/BlogPosts"
import Footer from "./components/Footer/Footer"
import { configureTheme } from "./utils"

function App() {
  const [checkedTheme, setCheckedTheme] = useState(true)
  const currentTheme = document.documentElement.classList.value
  const [bgColor, setBgColor] = useState(
    currentTheme === "dark" ? "dusk" : "dawn"
  )
  const handleThemeChange = () => {
    setCheckedTheme(prev => !prev)
    document.documentElement.classList.value === "dark"
      ? setBgColor("dusk")
      : setBgColor("dawn")
  }
  useEffect(() => {
    configureTheme()
  }, [])
  return (
    <BrowserRouter>
      <div className={bgColor}>
        <Routes>
          <Route
            exact
            path="/"
            element={
              <>
                <Nav bgColor={bgColor} handleThemeChange={handleThemeChange} />
                <Hero checkedTheme={checkedTheme} />
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
                <Nav />
                <BlogPosts />
              </>
            }
          />
          <Route
            exact
            path="*"
            element={
              <>
                <Nav />
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
