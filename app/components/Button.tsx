"use client";
import React from "react";
import Link from "next/link";

export type ButtonEmphasis = "impact" | "primary";

interface ButtonProps {
    emphasis: ButtonEmphasis;
    href?: string;
    children: React.ReactNode;
    type?: "button" | "submit" | "reset";
    onClick?: () => void;
    disabled?: boolean;
}

const baseStyles =
    "inline-block w-full sm:w-auto rounded-xl border-2 sm:border-4 px-4 py-2 sm:px-6 sm:py-3 text-sm sm:text-base text-center font-bold transition-colors duration-300 ease-in-out disabled:cursor-not-allowed disabled:opacity-50";

const emphasisStyles: Record<ButtonEmphasis, string> = {
    impact:
        "border-[var(--color-brand)] bg-[var(--color-brand)] text-white hover:bg-black hover:text-[var(--color-brand)]",
    primary:
        "border-white bg-white text-black hover:bg-black hover:text-white",
};

const Button = ({ emphasis, href, children, type = "button", onClick, disabled = false }: ButtonProps) => {
    const className = `${baseStyles} ${emphasisStyles[emphasis]}`;

    const handleAnchorClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
        if (disabled) {
            e.preventDefault();
            return;
        }

        if (href) {
            const [path, hash] = href.split("#");
            const targetPath = path || "/";
            if (hash && window.location.pathname === targetPath && window.location.hash === `#${hash}`) {
                e.preventDefault();
                document.getElementById(hash)?.scrollIntoView({ behavior: "smooth" });
            }
        }

        onClick?.();
    };

    if (href) {
        return (
            <Link
                href={disabled ? "#" : href}
                aria-disabled={disabled}
                onClick={handleAnchorClick}
                className={className}
            >
                {children}
            </Link>
        );
    }

    return (
        <button type={type} onClick={onClick} disabled={disabled} className={className}>
            {children}
        </button>
    );
};

export default Button;
