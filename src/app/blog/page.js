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
  title: "TriggerX | Blog",
  description:
    "Automate Tasks Effortlessly",
};

