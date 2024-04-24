import React from "react";
import NavLink from "@/app/components/navlink";

const MenuOverlay = ({ links }: {links: { title: string, href: string }[]}) => {
    return (
        <ul className="flex flex-col py-4 items-center">
            {links.map((link, index) => (
                <li key={index}>
                    <NavLink href={link.href} title={link.title} />
                </li>
            ))}
        </ul>
    );
};

export default MenuOverlay;