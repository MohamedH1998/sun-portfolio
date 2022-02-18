const handleThemeChange = (bgColor, setBgColor) => {
  bgColor === "dawn" ? setBgColor("dusk") : setBgColor("dawn")

  document.documentElement.classList.contains("dark")
    ? document.documentElement.classList.remove("dark")
    : document.documentElement.classList.add("dark")
}

export default handleThemeChange
