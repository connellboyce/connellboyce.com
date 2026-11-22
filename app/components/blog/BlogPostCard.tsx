import Image from "next/image";
import Link from "next/link";
import { formatDate } from "@/app/components/blog/format-date";

export interface BlogPostCardProps {
    href: string;
    title: string;
    description?: string;
    image?: { src: string; alt: string };
    tags?: string[];
    /** ISO date string */
    date?: string;
}

const BlogPostCard = ({ href, title, description, image, tags, date }: BlogPostCardProps) => (
    <Link
        href={href}
        className="group flex flex-col overflow-hidden rounded-xl border border-white/10 bg-white/5 transition-colors duration-300 hover:border-[var(--color-brand)]"
    >
        <div className="relative aspect-[8/5] overflow-hidden bg-white/5">
            {image ? (
                <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    sizes="(min-width: 1024px) 400px, (min-width: 640px) 50vw, 100vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
            ) : (
                <div className="flex h-full items-center justify-center text-2xl font-bold text-white/20">
                    connell<span className="text-[var(--color-brand)]/40">boyce</span>.
                </div>
            )}
        </div>

        <div className="flex flex-1 flex-col gap-3 p-5">
            {tags && tags.length > 0 ? (
                <ul className="flex flex-wrap gap-2">
                    {tags.map((tag) => (
                        <li
                            key={tag}
                            className="rounded-full border border-[var(--color-brand)] bg-[var(--color-brand)]/10 px-2.5 py-0.5 text-xs font-semibold text-[var(--color-brand)]"
                        >
                            {tag}
                        </li>
                    ))}
                </ul>
            ) : null}

            <h3 className="text-lg font-bold text-white group-hover:text-[var(--color-brand)]">{title}</h3>

            {description ? <p className="line-clamp-3 text-sm text-white/70">{description}</p> : null}

            {date ? (
                <time dateTime={date} className="mt-auto pt-2 text-xs text-white/50">
                    {formatDate(date)}
                </time>
            ) : null}
        </div>
    </Link>
);

export default BlogPostCard;
