import { client } from "@/lib/sanity";
import ClientBlogList from "./ClientBlogList";

const query = `*[_type == "post"] | order(publishedAt desc) {
  _id,
  title,
  seoTitle,
  metaDescription,
  canonicalUrl,
  ogTitle,
  ogDescription,
  ogImage {
    asset -> {
      url
    }
  },
  ogUrl,
  slug {
    current
  },
  publishedAt,
  readTime,
}`;


async function getBlogs() {
  try {
    const blogs = await client.fetch(query);
    console.log("Fetched blogs:", blogs);
    return blogs;
  } catch (error) {
    console.error("Error fetching blogs:", error);
    return [];
  }
}

export default async function BlogList() {
  const blogs = await getBlogs();

  return <ClientBlogList blogs={blogs} />;
}
