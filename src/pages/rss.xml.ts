import rss from "@astrojs/rss";
import type { APIContext } from "astro";
import { SITE_TITLE, SITE_DESCRIPTION } from "../consts";
import { publishedPosts } from "../posts";

export async function GET(context: APIContext) {
  const posts = await publishedPosts();
  return rss({
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    site: context.site!,
    items: posts.map((p) => ({
      title: p.data.title,
      description: p.data.description,
      pubDate: p.data.published,
      link: `/posts/${p.id}/`,
    })),
  });
}
