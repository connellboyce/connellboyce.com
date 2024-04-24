import React from "react";
import ProjectCard from "@/app/components/project-card";

const projectList = [
    {
        id: 1,
        title: "connellboyce.com",
        description: "Personal website: NextJS, HTML/CSS, AWS Amplify...",
        imageUrl: "/images/projects/personal_website.png",
        readMoreUrl: "",
        gitUrl: "https://github.com/connellboyce/portfolio-website",
    },
    {
        id: 2,
        title: "Irish Culture Club of Delaware Website",
        description: "Former website of the ICCD: Spring Boot, Bootstrap, AWS...",
        imageUrl: "/images/projects/iccd.png",
        readMoreUrl: "",
        gitUrl: "",
    },
    {
        id: 3,
        title: "Pepper Garden",
        description: "Internship project, Spring Boot, Bootstrap, AWS...",
        imageUrl: "/images/projects/pepper_garden.png",
        readMoreUrl: "",
        gitUrl: "https://github.com/connellboyce/pepper-garden",
    },
    {
        id: 4,
        title: "road.io",
        description: "Senior capstone project, ReactJS, Spring Boot, Heroku...",
        imageUrl: "/images/projects/roadio.png",
        readMoreUrl: "",
        gitUrl: "https://github.com/connellboyce/road.io?tab=readme-ov-file",
    },
    {
        id: 5,
        title: "Personal Minecraft Server",
        description: "A Minecraft server running on AWS infrastructure...",
        imageUrl: "/images/projects/minecraft_server.png",
        readMoreUrl: "",
        gitUrl: "",
    },
];

const Projects = () => {
    return (
        <div>
            <h1 className="text-center text-4xl font-bold mt-4 mb-4"><span className="text-[#f9004d]">my</span> projects</h1>
            <div className="grid md:grid-cols-3 gap-8 md:gap-12">
                {projectList.map((project) => <ProjectCard key={project.id} title={project.title} description={project.description} imageUrl={project.imageUrl} gitUrl={project.gitUrl} readMoreUrl={project.readMoreUrl} />)}
            </div>
        </div>
    )
}

export default Projects;