import React from "react";
import Image from "next/image";

export default function Certifications() {
    return (
        <div className="mt-8 mb-52 text-right">
            <h3 className="text-3xl md:text-4xl font-bold text-white">my <span className="text-[#f9004d]">certifications</span></h3>
            <h5 className="text-2xl md:text-3xl mt-4">AWS Certified Developer - Associate</h5>
            <div>
                <p className="md:text-xl"><i>April 2024 - April 2027</i></p>
                <div className={"flex float-end mt-2"}>
                    <Image src={"/images/dva-c02.png"} alt={"DVA-C02 Certification"} width={150} height={150}/>
                </div>
            </div>
        </div>
    );
}