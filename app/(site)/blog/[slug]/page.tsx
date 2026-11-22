import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import type { PortableTextBlock } from "next-sanity";
import type { SanityImageSource } from "@sanity/image-url";
import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";
import PostBody from "@/app/components/blog/post-body";
import { formatDate } from "@/app/components/blog/format-date";

interface Post {
    title: string;
    description?: string;
    publishedAt?: string;
    author?: { name: string; image?: SanityImageSource };
    tags?: { _id: string; title: string }[];
    mainImage?: SanityImageSource & { alt?: string };
    body?: PortableTextBlock[];
}

// Re-fetch from Sanity at most once a minute so CMS edits show up without a redeploy
export const revalidate = 60;

const POST_QUERY =`*[_type == "post" && slug.current == $slug][0]{
    title,
    description,
    publishedAt,
    author->{ name, image },
    "tags": categories[]->{ _id, title },
    mainImage,
    body
}`;

const POST_SLUGS_QUERY = `*[_type == "post" && defined(slug.current)]{ "slug": slug.current }`;

const getPost = (slug: string) => client.fetch<Post | null>(POST_QUERY, { slug });

export async function generateStaticParams() {
    // If Sanity is unreachable at build time (e.g. CI with placeholder credentials),
    // skip prerendering; posts are rendered on demand instead.
    try {
        return await client.fetch<{ slug: string }[]>(POST_SLUGS_QUERY);
    } catch (error) {
        console.error("Failed to fetch post slugs from Sanity; skipping prerender:", error);
        return [];
    }
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
    const { slug } = await params;
    const post = await getPost(slug);
    if (!post) return {};
    return {
        title: `${post.title} | Connell Boyce`,
        description: post.description,
        openGraph: post.mainImage
            ? { images: [urlFor(post.mainImage).width(1200).height(630).fit("crop").url()] }
            : undefined,
    };
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const post = await getPost(slug);
    if (!post) notFound();

    const { title, author, tags, mainImage, body, publishedAt } = post;

    return (
        <main className="px-8 pt-28 pb-16 md:px-16 lg:px-24">
            <article className="mx-auto max-w-3xl">
                <header className="mb-8">
                    {tags && tags.length > 0 ? (
                        <ul className="mb-4 flex flex-wrap gap-2">
                            {tags.map((tag) => (
                                <li
                                    key={tag._id}
                                    className="rounded-full border border-[var(--color-brand)] bg-[var(--color-brand)]/10 px-3 py-1 text-xs font-semibold text-[var(--color-brand)]"
                                >
                                    {tag.title}
                                </li>
                            ))}
                        </ul>
                    ) : null}

                    <h1 className="text-3xl font-bold text-white md:text-5xl">{title}</h1>

                    {author || publishedAt ? (
                        <div className="mt-6 flex items-center gap-3 text-sm text-white/70">
                            {author?.image ? (
                                <Image
                                    src={urlFor(author.image).width(80).height(80).fit("crop").url()}
                                    alt={author.name}
                                    width={40}
                                    height={40}
                                    className="h-10 w-10 rounded-full object-cover"
                                />
                            ) : null}
                            <div className="flex flex-col">
                                {author ? <span className="font-semibold text-white">{author.name}</span> : null}
                                {publishedAt ? (
                                    <time dateTime={publishedAt}>
                                        {formatDate(publishedAt)}
                                    </time>
                                ) : null}
                            </div>
                        </div>
                    ) : null}
                </header>

                {mainImage ? (
                    <Image
                        src={urlFor(mainImage).width(1600).height(900).fit("crop").auto("format").url()}
                        alt={mainImage.alt ?? title}
                        width={1600}
                        height={900}
                        priority
                        sizes="(min-width: 768px) 768px, 100vw"
                        className="mb-10 h-auto w-full rounded-2xl object-cover"
                    />
                ) : null}

                {body ? <PostBody value={body} /> : null}
            </article>
        </main>
    );
}
