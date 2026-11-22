import Image from "next/image";
import { PortableText, type PortableTextComponents, type PortableTextBlock } from "next-sanity";
import type { SanityImageSource } from "@sanity/image-url";
import { urlFor } from "@/sanity/lib/image";

type BodyImage = SanityImageSource & { alt?: string; asset?: { _ref: string } };

// Sanity image refs look like "image-<id>-<width>x<height>-<ext>"
const dimensionsFromRef = (ref: string) => {
    const match = ref.match(/-(\d+)x(\d+)-/);
    return match ? { width: Number(match[1]), height: Number(match[2]) } : { width: 1200, height: 800 };
};

const components: PortableTextComponents = {
    block: {
        normal: ({ children }) => <p className="mb-5 leading-relaxed text-white/80">{children}</p>,
        h1: ({ children }) => <h2 className="mt-10 mb-4 text-3xl font-bold text-white">{children}</h2>,
        h2: ({ children }) => <h2 className="mt-10 mb-4 text-2xl font-bold text-white">{children}</h2>,
        h3: ({ children }) => <h3 className="mt-8 mb-3 text-xl font-bold text-white">{children}</h3>,
        h4: ({ children }) => <h4 className="mt-6 mb-3 text-lg font-bold text-white">{children}</h4>,
        blockquote: ({ children }) => (
            <blockquote className="my-6 border-l-4 border-[var(--color-brand)] pl-4 italic text-white/70">
                {children}
            </blockquote>
        ),
    },
    list: {
        bullet: ({ children }) => <ul className="mb-5 ml-6 list-disc space-y-2 text-white/80">{children}</ul>,
    },
    marks: {
        strong: ({ children }) => <strong className="font-bold text-white">{children}</strong>,
        em: ({ children }) => <em className="italic">{children}</em>,
        link: ({ children, value }) => {
            const href: string = value?.href ?? "#";
            const external = /^https?:\/\//.test(href);
            return (
                <a
                    href={href}
                    className="text-[var(--color-brand)] underline underline-offset-2 hover:opacity-80"
                    {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                >
                    {children}
                </a>
            );
        },
    },
    types: {
        image: ({ value }: { value: BodyImage }) => {
            if (!value?.asset?._ref) return null;
            const { width, height } = dimensionsFromRef(value.asset._ref);
            return (
                <figure className="my-8">
                    <Image
                        src={urlFor(value).width(1200).fit("max").auto("format").url()}
                        alt={value.alt ?? ""}
                        width={width}
                        height={height}
                        sizes="(min-width: 768px) 768px, 100vw"
                        className="h-auto w-full rounded-xl"
                    />
                    {value.alt ? (
                        <figcaption className="mt-2 text-center text-sm text-white/50">{value.alt}</figcaption>
                    ) : null}
                </figure>
            );
        },
    },
};

const PostBody = ({ value }: { value: PortableTextBlock[] }) => {
    return <PortableText value={value} components={components} />;
};

export default PostBody;
