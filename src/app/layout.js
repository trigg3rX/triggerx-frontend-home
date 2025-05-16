import "./globals.css";
import { GoogleTagManager } from "@next/third-parties/google";
import HeaderFooterWrapper from "@/components/HeaderFooterWrapper";
import localFont from 'next/font/local'; 


const actayRegular = localFont({
  src: [
    {
      path: '../../public/fonts/Actay-Regular.otf', 
      weight: '400', 
      style: 'normal',
    },
  ],
  variable: '--font-actay-regular', 
  display: 'swap', 
});

const sharpGrotesk300 = localFont({
  src: '../../public/fonts/sharp-grotesk-300.otf', 
  weight: '300',
  style: 'normal',
  variable: '--font-sharp-grotesk',
  display: 'swap',
});

const actayWideBold = localFont({
  src: '../../public/fonts/ActayWide-Bold.otf', 
  weight: '700', 
  style: 'normal',
  variable: '--font-actay-wide-bold',
  display: 'swap',
});

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${actayRegular.variable} ${sharpGrotesk300.variable} ${actayWideBold.variable}`}>
      <GoogleTagManager gtmId="GTM-T9XQH8N8" />
      <body>
        <HeaderFooterWrapper>
          <div className="relative z-30"> {children}</div>
        </HeaderFooterWrapper>
      </body>
    </html>
  );
}