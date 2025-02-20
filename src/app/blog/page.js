import BlogHeader from "@/components/blogs page/BlogHeader";
import BlogList from "@/components/blogs page/BlogList";
import Header from "@/components/Header";
import { SearchProvider } from "@/app/context/SearchContext";

export default function blogs() {
  return (
    <SearchProvider>
      <Header />
      <div className="w-[95%] mx-auto my-16 relative z-40">
        <BlogHeader />
        <BlogList />
      </div>
    </SearchProvider>
  );
}
export const metadata = {
  metadataBase: new URL("https://www.triggerx.network/"),
  title: "TriggerX",
  description: "Automate Tasks Effortlessly",
  openGraph: {
    images: [
      {
        url: "opengraph-image.jpg",
        width: 800,
        height: 600,
      },
      {
        url: "opengraph-image.jpg",
        width: 1800,
        height: 1600,
        alt: "Blog",
      },
    ],
  },
};
