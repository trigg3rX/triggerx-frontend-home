import { client } from "@/lib/sanity";
import ClientBlogList from "./ClientBlogList";

const query = `*[_type == "post"] | order(publishedAt desc) {
  _id,
  title,
  slug {
    current
  },
  mainImage {
    asset -> {
      url
    }
  },
  publishedAt,
  author -> {
    name,
    image {
      asset -> {
        url
      }
    }
  },
  body
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
