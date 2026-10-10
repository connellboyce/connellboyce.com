import React from "react";
import { FaBookOpen, FaGithub } from "react-icons/fa";
import { FaArrowUpRightFromSquare } from "react-icons/fa6";
import Link from "next/link";

const ProjectCard = ({imageUrl, title, description, gitUrl, readMoreUrl, liveUrl}: {imageUrl: string, title: string, description: string, gitUrl: string, readMoreUrl: string, liveUrl: string}) => {
    return (
        <div className="w-full self-start">
            <div className="aspect-[8/5] rounded-t-xl relative group" style={{background: `url(${imageUrl})`, backgroundSize: "cover", backgroundPosition: "center"}}>
                <div className="overlay items-center justify-center absolute top-0 left-0 w-full h-full bg-black/0 hidden group-hover:flex group-hover:bg-black/80 transition-all duration-500">
                    {readMoreUrl.length > 0 ?
                        <Link href={readMoreUrl} className="h-14 w-14 border-2 relative rounded-full border-white hover:border-[var(--color-brand)] group/read mx-2">
                            <FaBookOpen className="h-10 w-10 text-white m-2 relative transform -translate-x-[0.06rem] cursor-pointer group-hover/read:text-[var(--color-brand)]"/>
                        </Link>
                        : null
                    }
                    {gitUrl.length > 0 ?
                        <Link href={gitUrl} className="h-14 w-14 border-2 relative rounded-full border-white hover:border-[var(--color-brand)] group/gh mx-2">
                            <FaGithub className="h-10 w-10 text-white m-2 relative transform -translate-x-[0.09rem] -translate-y-[0.09rem] cursor-pointer group-hover/gh:text-[var(--color-brand)]"/>
                        </Link>
                        : null
                    }
                    {liveUrl.length > 0 ?
                        <Link href={liveUrl} className="h-14 w-14 border-2 relative rounded-full border-white hover:border-[var(--color-brand)] group/live mx-2">
                            <FaArrowUpRightFromSquare className="h-8 w-8 text-white m-3 relative cursor-pointer group-hover/live:text-[var(--color-brand)]"/>
                        </Link>
                        : null
                    }

                </div>
            </div>

            <div className="text-white rounded-b-xl pb-4 px-4">
                <h5 className="font-bold text-base mb-1">{title}</h5>
                <p className="text-sm text-white/80">{description}</p>
            </div>
        </div>
    )
}

export default ProjectCard;