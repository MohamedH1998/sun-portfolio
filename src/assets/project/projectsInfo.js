import theCamperApp from "./images/camp-app.png"
import mapty from "./images/mapty.png"
import forkify from "./images/forkify.png"
import papaya from "./images/papaya.png"
import kiqs from "./images/kiqs.png"
import tasktrckr from "./images/tasktrckr.png"
import elixir from "./images/elixir.png"

const projectsInfo = [
  {
    title: "The Camper App",
    sourceCode: "https://github.com/MohamedH1998/CamperApp",
    liveDemo: "https://the-camperapp.herokuapp.com/",
    cardText:
      "The Camper App is a full-stack application that enables users to view various campground locations from around the world and allows them to create their own.",
    photo: theCamperApp
  },
  {
    title: "Elixir",
    sourceCode: "https://github.com/MohamedH1998/elixir",
    liveDemo: "https://elixir-commerce.netlify.app/",
    cardText:
      "Elixir commerce is a react application made using React JS, Redux, OAuth (authentication).",
    photo: elixir
  },
  {
    title: "Task Tracker",
    sourceCode: "https://github.com/MohamedH1998/react-task-manager",
    liveDemo: "https://tasktrckr.netlify.app//",
    cardText:
      "This a React task tracker app that allows users to create/delete tasks and toggle whether they want reminders for the tasks or not.",
    photo: tasktrckr
  }
]

export default projectsInfo
