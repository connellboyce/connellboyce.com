"use client";
import React from "react";
import Image from "next/image";
import { TypeAnimation } from 'react-type-animation';

const Introduction = () => {
    return (
        <section>
            <div className="grid grid-cols-1 lg:grid-cols-12 px-8">
                <div className="col-span-5 self-center">
                    <h3 className="pt-24 md:pt-0 text-[#fcfc] text-sm md:text-lg font-sans tracking-widest font-bold">hello
                        my name is</h3>
                    <h1 className="text-white text-3xl md:text-7xl font-bold md:py-8">connell <span
                        className="text-[#f9004d]">boyce</span></h1>
                    <p className="pb-16 md:pb-0 font-bold lg:text-2xl">and I&apos;m a&nbsp;
                        <span className="text-[#f9004d]">
                            <TypeAnimation
                                sequence={[
                                    "full stack developer.  ",
                                    1000,
                                    "software engineer. ",
                                    1000,
                                    "web designer. ",
                                    1000,
                                    "freelancer. ",
                                    1000,
                                    "java developer. ",
                                    1000,
                                    "cloud developer. ",
                                    1000
                                ]}
                                wrapper="span"
                                speed={50}
                                repeat={Infinity}
                            />
                        </span>
                    </p>
                </div>
                <div className="col-span-7">
                    <div className="lg:w-[900px] lg:h-[900px]">
                        <Image
                            src="/images/placeholder_headshot.png"
                            alt="headshot"
                            width={900}
                            height={900}
                            className="rounded-full"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Introduction;