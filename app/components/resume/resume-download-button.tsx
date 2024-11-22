import React from "react";
import {FiDownload} from "react-icons/fi";

export default function ResumeDownloadButton() {
    return (
        <div className="text-center text-nowrap my-4">
            <a className="text-center" href="/files/resume.pdf" download="resume_connell_boyce.pdf">
                <div
                    className="flex bg-[#f9004d] border-4 font-bold hover:bg-black border-[#f9004d] py-2 px-4 rounded-xl mt-2.5 gap-2 w-min mx-auto">
                    <FiDownload className="font-bold"/>
                    <p>Download PDF</p>
                </div>
            </a>
        </div>
    );
}