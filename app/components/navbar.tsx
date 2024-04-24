"use client";
import React from "react";
import Link from "next/link";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import NavLink from "@/app/components/navlink";
import MenuOverlay from "@/app/components/menu-overlay";

const navLinks = [
    {
        title: "About",
        href: "#about"
    },
    {
        title: "Projects",
        href: "#projects"
    },
    {
        title: "Contact",
        href: "#contact"
    },
    {
        title: "Resume",
        href: "#resume"
    },
]

const Navbar = () => {
    const [navbarOpen, setNavbarOpen] = React.useState(false);

    return (
        <nav className="fixed top-0 left-0 right-0 z-10 bg-black bg-opacity-80">
            <div className="flex flex-wrap items-center justify-between mx-auto p-8">
                <Link href={'/'} className="text-md md:text-3xl text-white font-bold">connell<span className="text-[#f9004d]">boyce.</span></Link>
                <div className="mobile-menu block md:hidden">
                    {
                        !navbarOpen ? (
                            <button onClick={() => setNavbarOpen(true)} className="flex items-center px-3 py-2 border rounded border-white text-white hover:text-[#f9004d] hover:border-[#f9004d]">
                                <Bars3Icon className="h-5 w-5" />
                            </button>
                        ) : (
                            <button onClick={() => setNavbarOpen(false)} className="flex items-center px-3 py-2 border rounded border-white text-white hover:text-[#f9004d] hover:border-[#f9004d]">
                                <XMarkIcon className="h-5 w-5"/>
                            </button>
                        )
                    }
                </div>
                <div className="menu hidden md:block md:w-auto" id="navbar">
                    <ul className="flex p-4 md:p-0 md:flex-row md:space-x-8 mt-0">
                        {navLinks.map((link, index) => (
                                <li key={index}>
                                    <NavLink href={link.href} title={link.title}></NavLink>
                                </li>
                            ))}
                    </ul>
                </div>
            </div>
            {navbarOpen ? <MenuOverlay links={navLinks} /> : null}
        </nav>
    );
};

export default Navbar;