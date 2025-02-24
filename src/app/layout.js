import "./globals.css";
import "../app/styles/fonts.css";
import { GoogleTagManager } from "@next/third-parties/google";
import Footer from "@/components/Footer";
import Header from "@/components/Header";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <GoogleTagManager gtmId="GTM-T9XQH8N8" />
      <body>
        <div className="relative z-50">
          <Header />
        </div>
        <div className="relative z-30"> {children}</div>
        <Footer />
      </body>
    </html>
  );
}
