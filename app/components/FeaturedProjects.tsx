import React from "react";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";
import ProjectCard from "@/app/components/project-card";
import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";
import type { SanityImageSource } from "@sanity/image-url";

interface FeaturedProject {
    _id: string;
    title: string;
    description: string;
    coverImage?: SanityImageSource;
    sourceCodeUrl?: string;
    liveDemoUrl?: string;
    blogPost?: { slug: string };
}

const FEATURED_PROJECTS_QUERY = `*[_type == "featuredProjects"][0]{
    projects[]->{
        _id,
        title,
        description,
        coverImage,
        sourceCodeUrl,
        liveDemoUrl,
        blogPost->{ "slug": slug.current }
    }
}`;

const FeaturedProjects = async () => {
    let projects: FeaturedProject[] = [];
    try {
        const data = await client.fetch<{ projects?: FeaturedProject[] }>(FEATURED_PROJECTS_QUERY);
        projects = (data?.projects ?? []).slice(0, 5);
    } catch (error) {
        console.error("Failed to fetch featured projects from Sanity:", error);
    }

    return (
        <section id="projects" className="scroll-mt-[40px] px-8 py-10 md:px-16 md:py-16 lg:px-24">
            <h2 className="mb-6 text-center text-2xl font-bold text-white md:text-3xl">
                <span className="text-[var(--color-brand)]">featured</span> projects
            </h2>
            <div className="mx-auto grid max-w-[1200px] grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {projects.map((project) => (
                    <ProjectCard
                        key={project._id}
                        title={project.title}
                        description={project.description}
                        imageUrl={project.coverImage ? urlFor(project.coverImage).width(800).height(500).fit("crop").crop("center").url() : ""}
                        gitUrl={project.sourceCodeUrl ?? ""}
                        liveUrl={project.liveDemoUrl ?? ""}
                        readMoreUrl={project.blogPost ? `/blog/${project.blogPost.slug}` : ""}
                    />
                ))}
                <Link
                    href="/projects"
                    className="group flex aspect-[8/5] w-full flex-col items-center justify-center gap-2 self-start rounded-xl border-2 border-[var(--color-brand)] bg-[var(--color-brand)]/10 text-[var(--color-brand)] transition-colors duration-300 ease-in-out hover:bg-[var(--color-brand)] hover:text-white"
                >
                    <FaArrowRight className="h-6 w-6 transition-transform duration-300 ease-in-out group-hover:translate-x-1" />
                    <span className="text-lg font-bold">See More</span>
                </Link>
            </div>
        </section>
    );
};

export default FeaturedProjects;
