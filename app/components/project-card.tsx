import React from "react";
import { FaBookOpen, FaGithub } from "react-icons/fa";
import Link from "next/link";

const ProjectCard = ({imageUrl, title, description, gitUrl, readMoreUrl}: {imageUrl: string, title: string, description: string, gitUrl: string, readMoreUrl: string}) => {
    return (
        <div>
            <div className="h-52 md:h-72 rounded-t-xl relative group" style={{background: `url(${imageUrl})`, backgroundSize: "cover"}}>
                <div className="overlay items-center justify-center absolute top-0 left-0 w-full h-full bg-black bg-opacity-0 hidden group-hover:flex group-hover:bg-opacity-80 transition-all duration-500">
                    <Link href={readMoreUrl} className="h-14 w-14 border-2 relative rounded-full border-white hover:border-[#f9004d] group/read mx-2">
                        <FaBookOpen className="h-10 w-10 text-white m-2 relative transform -translate-x-[0.06rem] cursor-pointer group-hover/read:text-[#f9004d]"/>
                    </Link>
                    {gitUrl.length > 0 ?
                        <Link href={gitUrl} className="h-14 w-14 border-2 relative rounded-full border-white hover:border-[#f9004d] group/gh mx-2">
                            <FaGithub className="h-10 w-10 text-white m-2 relative transform -translate-x-[0.09rem] -translate-y-[0.09rem] cursor-pointer group-hover/gh:text-[#f9004d]"/>
                        </Link>
                        : null
                    }

                </div>
            </div>

            <div className="text-white rounded-b-xl pb-6 px-4">
                <h5 className="font-bold text-xl mb-2">{title}</h5>
                <p className="text-[#fcfc]">{description}</p>
            </div>
        </div>
    )
}

export default ProjectCard;