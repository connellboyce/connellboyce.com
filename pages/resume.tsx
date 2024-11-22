import Curtain from "@/app/components/curtain";
import Navbar from "@/app/components/navbar";
import Footer from "@/app/components/footer";
import Head from "next/head";
import React from "react";
import ResumeDownloadButton from "@/app/components/resume/resume-download-button";
import Experience from "@/app/components/resume/experience";
import Education from "@/app/components/resume/education";
import Skills from "@/app/components/resume/skills";
import Certifications from "@/app/components/resume/certifications";
import Organizations from "@/app/components/resume/organizations";

export default function Resume() {
    return (
        <main className="flex flex-col bg-black container mx-auto font-sans scroll-smooth">
            <Head>
                <title>Resume - Connell Boyce</title>
            </Head>
            <Curtain />
            <div className="min-h-screen mx-8 md:mx-48">
                <Navbar/>
                <div className="mt-24">
                    <h5 className="text-5xl font-bold text-white my-2 text-center"><span
                        className="text-[#f9004d]">my</span> resume</h5>
                    <ResumeDownloadButton/>
                    <hr className="mt-8"/>
                    <Experience/>
                    <hr className="mt-8"/>
                    <Education/>
                    <hr className="mt-8"/>
                    <Skills/>
                    <hr className="mt-8"/>
                    <Certifications/>
                    <hr className="mt-8"/>
                    <Organizations/>
                    <br/>
                </div>
            </div>
            <Footer/>
        </main>
    );
}