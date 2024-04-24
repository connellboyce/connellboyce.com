import React from "react";
import Image from "next/image";

const About = () => {
    return (
        <section className="grid md:grid-cols-2 my-12 md:my-12 py-24 gap-24">
            <div className="place-self-center align-middle hidden md:block">
                <Image
                    src="/images/placeholder_about.jpg"
                    alt="second placeholder"
                    width={400}
                    height={700}
                />
            </div>
            <div>
                <div>
                    <h5 className="text-4xl font-bold text-white my-2 text-center"><span className="text-[#f9004d]">about</span> me</h5>
                    <p className="text-[#fcfc]">
                        I am a passionate software engineer looking to help you with your website and software needs! After developing a passion for innovation at a young age, I advanced my skills as a student at Penn State University. Since graduating, I have begun offering my services to the community as a freelancer in addition to working full-time as a software engineer.
                    </p>
                </div>
                <div>
                    <h5 className="text-4xl font-bold text-white my-2 text-center pt-8">my <span
                        className="text-[#f9004d]">skills</span></h5>
                    <p className="text-[#fcfc] md:w-1/2 w-full text-center mx-auto">
                        <span className="text-white font-semibold">Java</span> &nbsp; Maven &nbsp; <span className="text-white font-semibold">Spring Boot</span> &nbsp; GitHub &nbsp; JavaScript &nbsp; <span className="text-white font-semibold">NextJS</span>  &nbsp; HTML  &nbsp; CSS &nbsp; React
                        &nbsp; Git &nbsp; Node.js &nbsp; Docker &nbsp; MongoDB &nbsp; <span className="text-white font-semibold">AWS</span> &nbsp; Tailwind
                    </p>
                </div>
            </div>
        </section>
    )
}

export default About;