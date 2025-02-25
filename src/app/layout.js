import "./globals.css";
import "../app/styles/fonts.css";
import { GoogleTagManager } from "@next/third-parties/google";
import HeaderFooterWrapper from "@/components/HeaderFooterWrapper";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <GoogleTagManager gtmId="GTM-T9XQH8N8" />
      <body>
        <HeaderFooterWrapper>
          <div className="relative z-30"> {children}</div>
        </HeaderFooterWrapper>
      </body>
    </html>
  );
}
