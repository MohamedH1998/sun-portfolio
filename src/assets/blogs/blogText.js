import React from "react"
import Motivations from "./Motivations"
import TurningPoint from "./TurningPoint"
import Natural from "./Natural"
import FirstRole from "./FirstRole"

const blogText = id => {
  if (id === "0") {
    return <TurningPoint />
  } else if (id === "1") {
    return <Motivations />
  } else if (id === "2") {
    return <Natural />
  } else if (id === "3") {
    return <FirstRole />
  } else {
    return null
  }
}

export default blogText
