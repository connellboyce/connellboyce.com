import type { Metadata } from "next";
import type { SanityImageSource } from "@sanity/image-url";
import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";
import BlogPostCard, { type BlogPostCardProps } from "@/app/components/blog/BlogPostCard";
import BlogPostListItem from "@/app/components/blog/BlogPostListItem";

export const metadata: Metadata = {
    title: "Blog | Connell Boyce",
};

// Re-fetch from Sanity at most once a minute so CMS edits show up without a redeploy
export const revalidate = 60;

// Number of posts shown in the "recent posts" grid (one row on desktop)
const RECENT_COUNT = 3;

interface PostSummary {
    _id: string;
    title: string;
    slug: string;
    publishedAt?: string;
    description?: string;
    tags?: (string | null)[];
    mainImage?: SanityImageSource & { alt?: string };
}

const POST_SUMMARY_FIELDS = `
    _id,
    title,
    "slug": slug.current,
    publishedAt,
    description,
    "tags": categories[]->title,
    mainImage
`;

const BLOG_INDEX_QUERY = `{
    "featured": *[_type == "featuredPosts"][0].posts[defined(@->slug.current)]->{ ${POST_SUMMARY_FIELDS} },
    "all": *[_type == "post" && defined(slug.current) && defined(publishedAt)] | order(publishedAt desc){ ${POST_SUMMARY_FIELDS} }
}`;

const toCardProps = (post: PostSummary): BlogPostCardProps => ({
    href: `/blog/${post.slug}`,
    title: post.title,
    description: post.description,
    image: post.mainImage
        ? {
              src: urlFor(post.mainImage).width(800).height(500).fit("crop").auto("format").url(),
              alt: post.mainImage.alt ?? post.title,
          }
        : undefined,
    tags: getTags(post),
    date: post.publishedAt,
});

const getTags = (post: PostSummary) => post.tags?.filter((tag): tag is string => Boolean(tag));

const PostGrid = ({ posts }: { posts: PostSummary[] }) => (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {posts.map((post) => (
            <BlogPostCard key={post._id} {...toCardProps(post)} />
        ))}
    </div>
);

export default async function BlogPage() {
    let featured: PostSummary[] = [];
    let all: PostSummary[] = [];
    try {
        const data = await client.fetch<{ featured?: PostSummary[] | null; all?: PostSummary[] }>(BLOG_INDEX_QUERY);
        featured = data?.featured ?? [];
        all = data?.all ?? [];
    } catch (error) {
        console.error("Failed to fetch blog posts from Sanity:", error);
    }
    const recent = all.slice(0, RECENT_COUNT);

    return (
        <main className="px-8 pt-28 pb-16 md:px-16 lg:px-24">
            <h1 className="mb-12 text-center text-4xl font-bold text-white">
                <span className="text-[var(--color-brand)]">my</span> blog
            </h1>

            {featured.length > 0 ? (
                <section className="mx-auto mb-16 max-w-[1200px]">
                    <h2 className="mb-6 text-2xl font-bold text-white md:text-3xl">
                        <span className="text-[var(--color-brand)]">featured</span> posts
                    </h2>
                    <PostGrid posts={featured} />
                </section>
            ) : null}

            <section className="mx-auto mb-16 max-w-[1200px]">
                <h2 className="mb-6 text-2xl font-bold text-white md:text-3xl">
                    <span className="text-[var(--color-brand)]">recent</span> posts
                </h2>
                {recent.length > 0 ? (
                    <PostGrid posts={recent} />
                ) : (
                    <p className="text-white/60">No posts yet. Check back soon!</p>
                )}
            </section>

            {all.length > 0 ? (
                <section className="mx-auto max-w-[1200px]">
                    <h2 className="mb-2 text-2xl font-bold text-white md:text-3xl">
                        <span className="text-[var(--color-brand)]">all</span> posts
                    </h2>
                    <ul className="divide-y divide-white/10">
                        {all.map((post) => (
                            <BlogPostListItem
                                key={post._id}
                                href={`/blog/${post.slug}`}
                                title={post.title}
                                tags={getTags(post)}
                                date={post.publishedAt}
                            />
                        ))}
                    </ul>
                </section>
            ) : null}
        </main>
    );
}
