"use client";
import React, { useState } from "react";
import { FaGithub, FaCheckCircle, FaLinkedin, FaTwitter } from "react-icons/fa";
import Link from "next/link";

const ContactPage = () => {
    const [emailSubmitted, setEmailSubmitted] = useState(false);

    const handleSubmit = async(e: React.ChangeEvent<any>) => {
        e.preventDefault();
        console.log(e.type)

        const data = {
            email: e.target.email.value,
            subject: e.target.subject.value,
            message: e.target.message.value,
            name: e.target.name.value,
        }
        const jsonData = JSON.stringify(data);
        const endpoint = "/api/send";

        const res = await fetch(endpoint, {
            method: "POST",
            body: JSON.stringify(data),
        });
        if (res.status === 200) {
            setEmailSubmitted(true);
        }
    }

    return (
        <section className="grid md:grid-cols-2 my-12 md:my-12 py-24 gap-4">
            <div>
                <h5 className="text-xl font-bold text-white my-2"><span className="text-[#f9004d]">contact</span> me!</h5>
                <p className="mb-4 max-w-md">
                    {" "}
                    Get in touch with me using the form provided. Reach out for commission information, professional inquiries,
                    or just to say hi! You can also follow me on my socials!
                </p>
                <div className="socials flex flex-row gap-4 text-3xl">
                    <Link href="https://github.com/connellboyce">
                        <FaGithub />
                    </Link>
                    <Link href="https://www.linkedin.com/in/connellpboyce">
                        <FaLinkedin />
                    </Link>
                    <Link href="https://twitter.com/ConnellBoyce">
                        <FaTwitter />
                    </Link>
                </div>
            </div>
            <div>
                <form className="flex flex-col" onSubmit={handleSubmit}>
                    <div>
                        <label
                            htmlFor="email"
                            className="text-white block text-sm font-medium">
                            enter your <span className="text-[#f9004d]">email.</span>
                        </label>
                        <input
                            name="email"
                            type="email"
                            id="email"
                            required
                            className="border border-gray-600 placeholder-slate-500 text-black mb-2 w-full rounded-lg p-1"
                            placeholder="foo@bar.com"
                        />
                    </div>
                    <div>
                        <label
                            htmlFor="name"
                            className="text-white block text-sm font-medium">
                            enter your <span className="text-[#f9004d]">name.</span>
                        </label>
                        <input
                            name="name"
                            type="text"
                            id="name"
                            required
                            className="border border-gray-600 placeholder-slate-500 text-black mb-2 w-full rounded-lg p-1"
                            placeholder="John Doe"
                        />
                    </div>
                    <div>
                        <label
                            htmlFor="subject"
                            className="text-white block text-sm font-medium">
                            enter a <span className="text-[#f9004d]">subject.</span>
                        </label>
                        <input
                            name="subject"
                            type="text"
                            id="subject"
                            required
                            className="border border-gray-600 placeholder-slate-500 text-black mb-2 w-full rounded-lg p-1"
                            placeholder="Subject"
                        />
                    </div>
                    <div>
                        <label
                            htmlFor="message"
                            className="text-white block text-sm font-medium">
                            write your <span className="text-[#f9004d]">message.</span>
                        </label>
                        <textarea
                            name="message"
                            id="message"
                            className="w-full p-2.5 rounded-lg placeholder-slate-500 text-black overflow-auto resize-none"
                            placeholder="Hi Connell, I'm reaching out about..."
                        />
                    </div>
                    <button
                        type="submit"
                        className="bg-[#f9004d] border-4 font-bold hover:bg-black border-[#f9004d] py-2 px-4 rounded-xl mt-2.5">
                        Send!
                    </button>
                    {
                        emailSubmitted && (
                            <p className="text-green-500 mt-2 text-nowrap flex"><FaCheckCircle /> &nbsp;Message has been sent! Thank you.</p>
                        )
                    }
                </form>
            </div>
        </section>
    )
}

export default ContactPage;