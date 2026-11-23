import React from "react";
import { FaBookOpen, FaGithub } from "react-icons/fa";
import { FaArrowUpRightFromSquare } from "react-icons/fa6";
import Link from "next/link";

const ProjectCard = ({imageUrl, title, description, gitUrl, readMoreUrl, liveUrl}: {imageUrl: string, title: string, description: string, gitUrl: string, readMoreUrl: string, liveUrl: string}) => {
    const actions = [
        { href: readMoreUrl, label: "Read more", Icon: FaBookOpen, iconClass: "h-10 w-10 m-2 -translate-x-[0.06rem]" },
        { href: gitUrl, label: "GitHub", Icon: FaGithub, iconClass: "h-10 w-10 m-2 -translate-x-[0.09rem] -translate-y-[0.09rem]" },
        { href: liveUrl, label: "Live site", Icon: FaArrowUpRightFromSquare, iconClass: "h-8 w-8 m-3" },
    ].filter((action) => action.href.length > 0);

    return (
        <div className="w-full self-start">
            <div className="aspect-[8/5] rounded-t-xl relative group" style={{background: `url(${imageUrl})`, backgroundSize: "cover", backgroundPosition: "center"}}>
                {/* Hover overlay: only shown on devices that support hover (Tailwind v4 hover variants are gated on `@media (hover: hover)`), or when a link is keyboard-focused */}
                <div className="overlay items-center justify-center absolute top-0 left-0 w-full h-full bg-black/0 hidden group-hover:flex group-hover:bg-black/80 group-focus-within:flex group-focus-within:bg-black/80 transition-all duration-500">
                    {actions.map(({ href, label, Icon, iconClass }) => (
                        <Link key={label} href={href} aria-label={label} className="h-14 w-14 border-2 relative rounded-full border-white hover:border-[var(--color-brand)] group/action mx-2">
                            <Icon className={`${iconClass} text-white relative transform cursor-pointer group-hover/action:text-[var(--color-brand)]`}/>
                        </Link>
                    ))}
                </div>
            </div>

            <div className="text-white rounded-b-xl pb-4 px-4">
                <h5 className="font-bold text-base mb-1">{title}</h5>
                <p className="text-sm text-white/80">{description}</p>

                {/* Touch devices can't hover, so show the actions inline instead */}
                {actions.length > 0 ?
                    <div className="flex flex-wrap gap-2 mt-3 [@media(hover:hover)]:hidden">
                        {actions.map(({ href, label, Icon }) => (
                            <Link key={label} href={href} className="flex items-center gap-2 rounded-full border border-white/60 px-3 py-1.5 text-sm text-white active:border-[var(--color-brand)] active:text-[var(--color-brand)]">
                                <Icon className="h-4 w-4"/>
                                {label}
                            </Link>
                        ))}
                    </div>
                    : null
                }
            </div>
        </div>
    )
}

export default ProjectCard;
