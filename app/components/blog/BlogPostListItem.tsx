import Link from "next/link";
import { formatDate } from "@/app/components/blog/format-date";

export interface BlogPostListItemProps {
    href: string;
    title: string;
    tags?: string[];
    /** ISO date string */
    date?: string;
}

const BlogPostListItem = ({ href, title, tags, date }: BlogPostListItemProps) => (
    <li>
        <Link
            href={href}
            className="group flex flex-col gap-1 py-4 sm:flex-row sm:items-center sm:gap-6"
        >
            <span className="shrink-0 text-xs text-white/50 sm:w-36">
                {date ? <time dateTime={date}>{formatDate(date)}</time> : null}
            </span>
            <span className="flex-1 font-semibold text-white group-hover:text-[var(--color-brand)]">{title}</span>
            {tags && tags.length > 0 ? (
                <span className="flex flex-wrap gap-2">
                    {tags.map((tag) => (
                        <span
                            key={tag}
                            className="rounded-full border border-[var(--color-brand)] bg-[var(--color-brand)]/10 px-2.5 py-0.5 text-xs font-semibold text-[var(--color-brand)]"
                        >
                            {tag}
                        </span>
                    ))}
                </span>
            ) : null}
        </Link>
    </li>
);

export default BlogPostListItem;
