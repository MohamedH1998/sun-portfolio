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
import Footer from "./components/Footer/Footer"
import Stars from "./components/Background/Stars"
import { Helmet } from "react-helmet"

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
      <Helmet>
        <title>Momito</title>
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@momito8_" />
        <meta name="twitter:title" content="Momito" />
        <meta
          name="twitter:description"
          content="Random progress updates & musings"
        />
        <meta
          name="twitter:image"
          content="https://images.unsplash.com/photo-1623775027651-00956683ccf1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1632&q=80"
        />
      </Helmet>
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
