import React from "react"
import Image from "next/image"
import Link from "next/link"
import SlideUp from "./SlideUp"
import { BsGithub, BsArrowUpRightSquare } from "react-icons/bs"

const projects = [
  {
    name: "DeFi Conquest",
    description:
      "DeFi Conquest is a No-Loss Rock, Paper, Scissors DeFi game where users deposit interest bearing tokens to enter and compete to win extra rewards",
    image: "/deficonquest.jpg",
    github: "https://github.com/0xBcamp/xRave-janus-dragon",
    link: "https://defi-conquest.vercel.app/",
  },
  {
    name: "Honey Badger HR",
    description:
      "HoneyBadger HR is an cross-chain payroll system built with Chainlink CCIP",
    image: "/honey-badger-hr.png",
    github: "https://github.com/Spencer-Sch/CCIP-Payroll",
    link: "https://devpost.com/software/ccip-payroll",
  },
{
    name: "Roam Genius",
    description: "RoamGenus is you ChatGPT powered travel buddy.",
    image: "/roamballon.png",
    github: "https://github.com/funkornaut001/RoamGenius",
    link: "https://roam-genius.vercel.app/",
  },
]

const ProjectsSection = () => {
  return (
    <section id="projects">
      <h1 className="my-10 text-center font-bold text-4xl">
        Projects
        <hr className="w-6 h-1 mx-auto my-4 bg-teal-500 border-0 rounded"></hr>
      </h1>

      <div className="flex flex-col space-y-28">
        {projects.map((project, idx) => {
          return (
            <div key={idx}>
              <SlideUp offset="-300px 0px -300px 0px">
                <div className="flex flex-col  animate-slideUpCubiBezier animation-delay-2 md:flex-row md:space-x-12">
                  <div className=" md:w-1/2">
                    <Link href={project.link}>
                      <Image
                        src={project.image}
                        alt=""
                        width={1000}
                        height={1000}
                        className="rounded-xl shadow-xl hover:opacity-70"
                      />
                    </Link>
                  </div>
                  <div className="mt-8 md:w-1/2">
                    <h1 className="text-4xl font-bold mb-6">{project.name}</h1>
                    <p className="text-xl leading-7 mb-4 text-neutral-600 dark:text-neutral-400">
                      {project.description}
                    </p>
                    <div className="flex flex-row align-bottom space-x-4">
                      <Link href={project.github} target="_blank">
                        <BsGithub
                          size={30}
                          className="hover:-translate-y-1 transition-transform cursor-pointer"
                        />
                      </Link>
                      <Link href={project.link} target="_blank">
                        <BsArrowUpRightSquare
                          size={30}
                          className="hover:-translate-y-1 transition-transform cursor-pointer"
                        />
                      </Link>
                    </div>
                  </div>
                </div>
              </SlideUp>
            </div>
          )
        })}
        
      </div>
    </section>
  )
}

export default ProjectsSection
