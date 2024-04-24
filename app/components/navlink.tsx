import React, { FC } from "react";
import Link from "next/link";

const NavLink = ({ href, title  }: {href: string, title: string}) => {
    return (
        <Link href={href} className="block py-2 pl-3 pr-4 sm:text-xl text-white rounded md:p-0 transition-colors duration-300 ease-in-out hover:text-[#f9004d]">{title}</Link>
    );
};

export default NavLink;