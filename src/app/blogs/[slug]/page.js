import { client } from "@/lib/sanity";
import Image from "next/image";
import { PortableText } from "@portabletext/react";

async function getBlog(slug) {
  const query = `*[_type == "post" && slug.current == "${slug}"][0] {
    _id,
    title,
    slug,
    mainImage {
      asset -> {
        url
      }
    },
    body,
    publishedAt,
    author -> {
      name,
      image {
        asset -> {
          url
        }
      }
    }
  }`;

  return client.fetch(query);
}

export default async function BlogPost({ params }) {
  const blog = await getBlog(params.slug);

  return (
    <main className="w-[95%] mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <article>
        <header className="mb-8">
          <h1 className="text-4xl font-bold mb-4 text-center">{blog.title}</h1>
          <div className="flex items-center gap-4">
            {blog.mainImage?.asset?.url ? (
              <div className="w-full min-h-[400px] relative overflow-hidden">
                <Image
                  src={blog.mainImage.asset.url}
                  alt={blog.title || "Blog Image"}
                  fill
                  className="w-auto h-[400px] rounded-2xl object-contain"
                />
              </div>
            ) : (
              <div className="w-full h-[200px] rounded-2xl bg-green-50 relative overflow-hidden flex items-center justify-center">
                <span className="text-gray-400 text-sm">No Image</span>
              </div>
            )}
            <div>
            </div>
          </div>
        </header>

        {blog.mainImage?.asset?.url && (
          <div className="aspect-w-16 aspect-h-9 relative mb-8">
            <Image
              src={blog.mainImage.asset.url}
              alt={blog.title}
              fill
              className="object-cover rounded-lg"
            />
          </div>
        )}

        <div className="prose max-w-none">
          <PortableText value={blog.body} />
        </div>
      </article>
    </main>
  );
}
