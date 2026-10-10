"use client";
import React from "react";
import { TypeAnimation } from "react-type-animation";
import Button from "@/app/components/Button";

interface HeroProps {
    roles: string[];
}

const Hero = ({ roles }: HeroProps) => {
    const sequence = roles.flatMap((role) => [` ${role}. `, 1000]);

    return (
        <section className="flex min-h-[100vh] items-center px-8 md:px-16 lg:px-24">
            <div className="w-full max-w-2xl md:max-w-3xl">
                <h3 className="text-[#fcfc] text-sm md:text-lg font-sans tracking-widest font-bold">hello
                    my name is</h3>
                <h1 className="text-white text-4xl md:text-7xl font-bold py-1 md:py-2">connell<span
                    className="text-[var(--color-brand)]">boyce</span></h1>
                <p className="font-bold text-lg lg:text-2xl [contain:layout]">and I&apos;m a
                    <span className="text-[var(--color-brand)]">
                        <TypeAnimation
                            sequence={sequence}
                            wrapper="span"
                            speed={50}
                            repeat={Infinity}
                        />
                    </span>
                </p>
                <div className="mt-20 flex flex-col gap-4 sm:flex-row">
                    <Button emphasis="impact" href="/#contact">Get a Quote</Button>
                    <Button emphasis="primary" href="/#projects">Explore My Work</Button>
                </div>
            </div>
        </section>
    );
};

export default Hero;
