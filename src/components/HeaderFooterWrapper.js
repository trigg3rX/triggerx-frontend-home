"use client"; // This component is a Client Component

import { usePathname } from "next/navigation";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function HeaderFooterWrapper({ children }) {
  const pathname = usePathname();
  const isStudioPage = pathname.startsWith("/studio"); // Hide on /studio and subroutes

  return (
    <>
      {!isStudioPage && (
        <div className="relative z-50">
          <Header />
        </div>
      )}
      <main>{children}</main>
      {!isStudioPage && <Footer />}
    </>
  );
}
