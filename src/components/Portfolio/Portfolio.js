import React from "react"
import Project from "./Project/Project"
import projectsInfo from "../../assets/project/projectsInfo"

const Portfolio = () => {
  return (
    <div className="relative flex flex-row justify-center items-start h-full w-screen">
      <div className="w-9/12">
        <h1 className="portfolio text-5xl dark:text-white text-clr-bg hero-header py-7">
          Portfolio
        </h1>
        <hr className="w-full border-2 border-clr-skin" />
        <div className="flex flex-wrap justify-start w-full py-10 mt-5">
          {projectsInfo.map((project, i) => (
            <Project
              key={i}
              photo={project.photo}
              cardTitle={project.title}
              sourceCode={project.sourceCode}
              liveDemo={project.liveDemo}
              cardText={project.cardText}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default Portfolio
