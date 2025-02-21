import ClientSlug from "@/components/blogs page/ClientSlug";
import { client } from "@/lib/sanity";

async function getBlog(slug) {
  const query = `*[_type == "post" && slug.current == "${slug}"][0] {
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
    body[] {
      ...,
      asset -> {
        url
      }
    },
    headingPairs[] {
      h2Heading,
      displayHeading
    },
    blogReference[]->{
      _id,
      ogTitle,
      slug {
        current
      }
    }
  }`;

  return client.fetch(query);
}

export default async function BlogPost({ params }) {
  const blog = await getBlog(params.slug);
  console.log(blog);

    return <ClientSlug blog={blog} />;
  
}
