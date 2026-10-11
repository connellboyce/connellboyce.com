"use client";
import React, { useState } from "react";
import { FaGithub, FaCheckCircle, FaLinkedin } from "react-icons/fa";
import Link from "next/link";
import Button from "@/app/components/Button";

const inputStyles =
    "mb-2 w-full rounded-lg border border-gray-600 bg-white p-2.5 text-black placeholder-slate-500";

const Contact = () => {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [emailSubmitted, setEmailSubmitted] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setError(null);
        setIsSubmitting(true);

        const form = e.currentTarget;
        const formData = new FormData(form);
        const data = {
            name: formData.get("name"),
            email: formData.get("email"),
            subject: formData.get("subject"),
            message: formData.get("message"),
        };

        try {
            const res = await fetch("/api/send", {
                method: "POST",
                body: JSON.stringify(data),
            });

            if (!res.ok) {
                const body = await res.json().catch(() => null);
                throw new Error(body?.error || "Failed to send message");
            }

            setEmailSubmitted(true);
            form.reset();
        } catch (err) {
            const message = err instanceof Error ? err.message : "Something went wrong sending your message. Please try again.";
            setError(message);
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <section id="contact" className="grid scroll-mt-[40px] gap-8 px-8 py-16 md:grid-cols-2 md:gap-16 md:px-16 md:py-24 lg:px-24">
            <div>
                <h2 className="text-2xl font-bold text-white mb-4 md:text-3xl">
                    <span className="text-[var(--color-brand)]">contact</span> me
                </h2>
                <p className="mb-4 max-w-md text-base text-white/80">
                    Get in touch with me using the form provided. Reach out for commission information, professional inquiries,
                    or just to say hi! You can also follow me on my socials!
                </p>
                <div className="flex flex-row gap-4 text-3xl text-white">
                    <Link
                        href="https://github.com/connellboyce"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="GitHub"
                        className="transition-colors duration-300 ease-in-out hover:text-[var(--color-brand)]"
                    >
                        <FaGithub />
                    </Link>
                    <Link
                        href="https://www.linkedin.com/in/connellpboyce"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="LinkedIn"
                        className="transition-colors duration-300 ease-in-out hover:text-[var(--color-brand)]"
                    >
                        <FaLinkedin />
                    </Link>
                </div>
            </div>
            <div>
                <form className="flex flex-col" onSubmit={handleSubmit}>
                    <div>
                        <label htmlFor="email" className="mb-1 block text-sm font-medium text-white">
                            enter your <span className="text-[var(--color-brand)]">email.</span>
                        </label>
                        <input
                            name="email"
                            type="email"
                            id="email"
                            autoComplete="email"
                            required
                            className={inputStyles}
                            placeholder="foo@bar.com"
                        />
                    </div>
                    <div>
                        <label htmlFor="name" className="mb-1 block text-sm font-medium text-white">
                            enter your <span className="text-[var(--color-brand)]">name.</span>
                        </label>
                        <input
                            name="name"
                            type="text"
                            id="name"
                            autoComplete="name"
                            required
                            className={inputStyles}
                            placeholder="John Doe"
                        />
                    </div>
                    <div>
                        <label htmlFor="subject" className="mb-1 block text-sm font-medium text-white">
                            enter a <span className="text-[var(--color-brand)]">subject.</span>
                        </label>
                        <input
                            name="subject"
                            type="text"
                            id="subject"
                            required
                            className={inputStyles}
                            placeholder="Subject"
                        />
                    </div>
                    <div>
                        <label htmlFor="message" className="mb-1 block text-sm font-medium text-white">
                            write your <span className="text-[var(--color-brand)]">message.</span>
                        </label>
                        <textarea
                            name="message"
                            id="message"
                            rows={5}
                            required
                            className={`${inputStyles} resize-none overflow-auto`}
                            placeholder="Hi Connell, I'm reaching out about..."
                        />
                    </div>
                    <div className="mt-2.5">
                        <Button emphasis="impact" type="submit" disabled={isSubmitting}>
                            {isSubmitting ? "Sending..." : "Send!"}
                        </Button>
                    </div>
                    {error && (
                        <p className="mt-2 text-red-500">{error}</p>
                    )}
                    {emailSubmitted && (
                        <p className="mt-2 flex items-center gap-2 text-green-500">
                            <FaCheckCircle /> Message has been sent! Thank you.
                        </p>
                    )}
                </form>
            </div>
        </section>
    );
};

export default Contact;
