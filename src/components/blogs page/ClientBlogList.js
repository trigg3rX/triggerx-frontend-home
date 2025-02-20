"use client";
import Image from "next/image";
import Link from "next/link";
import { useSearch } from "@/app/context/SearchContext";

export default function ClientBlogList({ blogs }) {
  const { search } = useSearch();

  const filteredBlogs = blogs.filter((blog) =>
    blog.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="mt-10">
      {filteredBlogs.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-8">
          {filteredBlogs.map((blog) => (
            <Link
            href={`/blog/${blog.slug?.current}`}
            key={blog._id}
              className="rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow bg-[#0F0F0F] p-3 border border-[#5F5F5F] flex flex-col justify-between"
            >
              {blog.mainImage?.asset?.url ? (
                <div className="w-full h-[200px] rounded-2xl border border-[#5F5F5F] relative overflow-hidden">
                  <Image
                    src={blog.mainImage.asset.url}
                    alt={blog.title || "Blog Image"}
                    fill
                    className="h-full w-auto"
                  />
                </div>
              ) : (
                <div className="w-full h-[200px] rounded-2xl bg-green-50 flex items-center justify-center">
                  <span className="text-gray-400 text-sm">No Image</span>
                </div>
              )}

              <h2 className="font-actayWide text-xl group-hover:text-[#B7B7B7] transition-colors p-4 mt-8">
                {blog.title}
              </h2>

              <div className="mt-8 p-4">
                <time className="text-sm bg-[#222222] text-[#B7B7B7] px-6 py-2 rounded-lg w-max">
                  {new Date(blog.publishedAt).toLocaleDateString("en-US", {
                    month: "short",
                    day: "2-digit",
                    year: "numeric",
                  })}
                </time>
              </div>
            </Link>
          ))}
        </div>
      ) : (
        <div className="flex justify-center items-center h-48">
          <p className="text-gray-400 text-lg">No blogs found.</p>
        </div>
      )}
    </div>
  );
}
