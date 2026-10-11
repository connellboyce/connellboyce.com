import React from "react";
import Image from "next/image";
import Button from "@/app/components/Button";

const About = () => {
    return (
        <section id="about" className="grid scroll-mt-[40px] grid-cols-1 gap-8 px-8 pt-8 pb-16 md:grid-cols-2 md:gap-16 md:px-16 md:pt-12 md:pb-24 lg:px-24">
            <div className="hidden md:block md:mx-auto md:w-72 md:self-center lg:w-80">
                <Image
                    src="/images/connell_profile.jpg"
                    alt="Connell Boyce"
                    width={400}
                    height={600}
                    sizes="(min-width: 1024px) 320px, 288px"
                    className="h-auto w-full rounded-2xl object-cover"
                />
            </div>
            <div className="flex flex-col gap-4 md:justify-center">
                <h2 className="text-2xl font-bold text-white md:text-3xl">
                    <span className="text-[var(--color-brand)]">about</span> me
                </h2>
                <p className="text-base text-white/80">
                    I&apos;m a software engineer and lifelong tinkerer who likes figuring out how things work and then finding a way to make them better. I work across application development, identity and access management, and Zero Trust architecture, helping turn complicated problems into software that is secure, reliable, and genuinely useful.
                </p>
                <p className="text-base text-white/80">
                    When I&apos;m not working, I&apos;m probably still building something. I run a homelab where I experiment with self-hosting, infrastructure, networking, and home automation, and I have a steady rotation of side projects that give me an excuse to learn something new. I also enjoy cooking, working on projects around the house, and generally finding ways to turn “I wonder if I could…” into an actual project.
                </p>
                <p className="text-base text-white/80">
                    I take the same approach to professional work that I do to my personal projects: understand the problem, build something that makes sense, and make it secure.
                </p>
                <div className="mt-4">
                    <Button emphasis="primary" href="/blog">Read more on my blog</Button>
                </div>
            </div>
        </section>
    )
}

export default About;
