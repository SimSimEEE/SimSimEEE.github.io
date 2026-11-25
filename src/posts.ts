import { getCollection } from "astro:content";

/** Published posts, newest first. Drafts are left out of every page, the RSS feed and the sitemap. */
export async function publishedPosts() {
  const all = await getCollection("posts", ({ data }) => !data.draft);
  return all.sort((a, b) => b.data.published.valueOf() - a.data.published.valueOf());
}
