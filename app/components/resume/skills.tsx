import React from "react";

export default function Skills() {
    return (
        <div className="mt-8 mb-4">
            <h3 className="text-3xl md:text-4xl font-bold text-white">my <span className="text-[#f9004d]">skills</span></h3>
            <div className="mt-2 md:mt-4">
                <p className="md:text-3xl text-[#f9004d]">Technical Skills</p>
                <p className="md:text-xl md:w-3/5">Java, Spring Boot, Amazon Web Services, React, NextJS, JavaScript, HTML, CSS, Python, Maven, NodeJS, GitHub, Docker, Jenkins, Git, Bruno, Postman, MongoDB, Bash</p>
                <br/>
                <p className="md:text-3xl text-[#f9004d]">Soft Skills</p>
                <p className="md:text-xl">Human-Centered Design, Communication, Problem Solving, Critical Thinking</p>
            </div>
        </div>
    );
}