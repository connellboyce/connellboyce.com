import React from "react";
import Link from "next/link";

const Footer = () => {
    return (
        <footer className="border-t-2 border-gray-500 px-8 py-8 md:px-16 lg:px-24">
            <div className="flex flex-col items-center gap-2 text-center md:flex-row md:justify-between md:text-left">
                <Link href="/" className="text-md font-bold text-white md:text-xl">
                    connell<span className="text-[var(--color-brand)]">boyce</span>.
                </Link>
                <p className="text-xs text-white/60">
                    &copy; {new Date().getFullYear()} Connell Boyce. All rights reserved.
                </p>
            </div>
        </footer>
    );
};

export default Footer;
