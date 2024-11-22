import React from "react";

export default function Organizations() {
    return (
        <div className="mt-8 mb-4">
            <h3 className="text-3xl md:text-4xl font-bold text-white">my <span
                className="text-[#f9004d]">organizations</span></h3>
            <h5 className="text-2xl md:text-3xl mt-8">- Irish Culture Club of Delaware</h5>
            <div className="mt-2 md:mt-4">
                <p className="md:text-xl text-[#f9004d]">Vice President</p>
                <p>April 2023 - Present</p>
                <br/>
                <p className="md:text-xl text-[#f9004d]">Member</p>
                <p>January 2022 - Present</p>
                <br/>
            </div>
            <br/>
            <h5 className="text-2xl md:text-3xl mt-4">- Gamma Tau Phi, Penn State IST Honor Society</h5>
            <div className="mt-2 md:mt-4">
                <p className="md:text-xl text-[#f9004d]">Alumni</p>
                <p>February 2020 - May 2021</p>
            </div>
        </div>
    );
}