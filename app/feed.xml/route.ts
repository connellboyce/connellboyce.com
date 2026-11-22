import { client } from "@/sanity/lib/client";

// Re-fetch from Sanity at most once an hour
export const revalidate = 3600;

const SITE_URL = (process.env.NEXT_PUBLIC_SITE_URL ?? "https://connellboyce.com").replace(/\/$/, "");
const FEED_TITLE = "Connell Boyce";
const FEED_DESCRIPTION = "Posts from Connell Boyce's blog.";

interface FeedPost {
    _id: string;
    title: string;
    slug: string;
    publishedAt: string;
    description?: string;
    author?: string;
    tags?: string[];
}

const FEED_QUERY = `*[_type == "post" && defined(slug.current) && defined(publishedAt)] | order(publishedAt desc)[0...10]{
    _id,
    title,
    "slug": slug.current,
    publishedAt,
    description,
    "author": author->name,
    "tags": categories[]->title
}`;

const escapeXml = (value: string) =>
    value
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&apos;");

const renderItem = (post: FeedPost) => {
    const url = `${SITE_URL}/blog/${post.slug}`;
    return [
        "    <item>",
        `      <title>${escapeXml(post.title)}</title>`,
        `      <link>${escapeXml(url)}</link>`,
        `      <guid isPermaLink="true">${escapeXml(url)}</guid>`,
        `      <pubDate>${new Date(post.publishedAt).toUTCString()}</pubDate>`,
        post.author ? `      <dc:creator>${escapeXml(post.author)}</dc:creator>` : null,
        ...(post.tags ?? []).filter(Boolean).map((tag) => `      <category>${escapeXml(tag)}</category>`),
        post.description ? `      <description>${escapeXml(post.description)}</description>` : null,
        "    </item>",
    ]
        .filter((line) => line !== null)
        .join("\n");
};

export async function GET() {
    let posts: FeedPost[] = [];
    try {
        posts = await client.fetch<FeedPost[]>(FEED_QUERY);
    } catch (error) {
        console.error("Failed to fetch posts for RSS feed:", error);
        return new Response("Feed temporarily unavailable", { status: 503 });
    }

    const lastBuildDate = posts[0] ? new Date(posts[0].publishedAt) : new Date();

    const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom" xmlns:dc="http://purl.org/dc/elements/1.1/">
  <channel>
    <title>${escapeXml(FEED_TITLE)}</title>
    <link>${SITE_URL}/blog</link>
    <description>${escapeXml(FEED_DESCRIPTION)}</description>
    <language>en-us</language>
    <lastBuildDate>${lastBuildDate.toUTCString()}</lastBuildDate>
    <atom:link href="${SITE_URL}/feed.xml" rel="self" type="application/rss+xml" />
${posts.map(renderItem).join("\n")}
  </channel>
</rss>
`;

    return new Response(xml, {
        headers: {
            "Content-Type": "application/rss+xml; charset=utf-8",
        },
    });
}
