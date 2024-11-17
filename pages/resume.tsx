import Curtain from "@/app/components/curtain";
import Navbar from "@/app/components/navbar";
import Footer from "@/app/components/footer";
import Head from "next/head";
import React from "react";
import ResumeDownloadButton from "@/app/components/resume/resume-download-button";

export default function Resume() {
    return (
        <main className="flex flex-col bg-black container mx-auto font-sans scroll-smooth">
            <Head>
                <title>Resume - Connell Boyce</title>
            </Head>
            <Curtain />
            <div className="min-h-screen">
                <Navbar/>
                <div className="mt-24">
                    <h5 className="text-4xl font-bold text-white my-2 text-center"><span className="text-[#f9004d]">my</span> resume</h5>
                    <ResumeDownloadButton/>
                </div>
            </div>
            <Footer/>
        </main>
    );
}