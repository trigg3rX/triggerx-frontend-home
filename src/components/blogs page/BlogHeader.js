"use client"
import search1 from "@/app/assets/blogs page/search1.svg";
import search2 from "@/app/assets/blogs page/search2.svg";
import Image from "next/image";
import Link from "next/link";
import { useSearch } from "@/app/context/SearchContext";


export default function BlogHeader() {
    const { search, setSearch } = useSearch();

    return (
    <>
      <header className="w-[95%] mx-auto flex justify-between items-center">
        <h1 className="font-sharpGrotesk text-center text-2xl sm:text-5xl md:text-5xl xl:text-[70px] 2xl:text-[4vw] font-light transform scale-y-[.8]">
          Blog
        </h1>
        <div className="relative">
          <input
            type="text"
            placeholder="Search"
            className="bg-[#141313] text-v w-[300px] px-12 py-3 rounded-full focus:outline-none border border-[#5F5F5F]"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <Image
            src={search1}
            alt="search"
            className="w-4 h-4 absolute left-4 top-3.5"
          ></Image>
          <Image
            src={search2}
            alt="search"
            className="w-11 h-11 absolute right-0 top-0"
          ></Image>
        </div>
      </header>
      <div className="mt-10 bg-[#0F0F0F] p-20 rounded-2xl flex items-start justify-between gap-6 border border-[#5F5F5F] h-auto">
        <div className="w-1/2">
          <p className="text-[#FBF197] text-sm">Dec 20, 2024</p>
          <h2 className="text-5xl font-sharpGrotesk font-light mt-4 leading-tight transform scale-y-[.8]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit
          </h2>
        </div>
        <div className="w-1/2">
          <p className="text-[#B7B7B7] text-sm">[6 min read]</p>
          <p className="text-gray-300 mt-4 font-actayWide">
            Relax, your automation tasks are in safe hands. TriggerX's
            integration with EigenLayer and its innovative AVS system ensures
            that keepers are incentivized to act honestly, protecting you from
            any malicious activity.
          </p>
          <Link
            href="#"
            className="text-white text-base mt-28 inline-block hover:underline"
          >
            Read ↗
          </Link>
        </div>
      </div>
    </>
  );
}
