import React from "react"
import Project from "./Project/Project"
import projectsInfo from "../../assets/project/projectsInfo"

const Portfolio = () => {
  return (
    <div className="portfolio flex flex-col items-start justify-center min-h-full pl-10 pr-1 mt-10 h-fit ">
      <h1 className="text-5xl dark:text-white text-clr-bg hero-header py-7">
        Portfolio
      </h1>
      <hr className="w-full border-2 border-clr-skin" />
      <div className="flex flex-wrap justify-start w-full py-10 pr-6 mt-5">
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
  )
}

export default Portfolio
