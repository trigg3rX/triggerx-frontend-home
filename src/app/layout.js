import "./globals.css";
import "../app/styles/fonts.css";
import Head from "next/head";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        {/* Google Search Console Verification */}
        <meta
          name="google-site-verification"
          content="djQGIHSzWTlJhzreZXs-NxM40IBE2P_6I_V4VqdCXQY"
        />

        {/* Google Tag (gtag.js) */}
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-K47KJ7HQ0D"
        ></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-K47KJ7HQ0D');
            `,
          }}
        />

        {/* Google Tag Manager (GTM) */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
              'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','GTM-T9XQH8N8');
            `,
          }}
        />
      </Head>
      <body>
         {/* Google Tag Manager (noscript) */}
         <div
          dangerouslySetInnerHTML={{
            __html: `
              <noscript>
                <iframe 
                  src="https://www.googletagmanager.com/ns.html?id=GTM-T9XQH8N8"
                  height="0" width="0" 
                  style="display:none; visibility:hidden">
                </iframe>
              </noscript>
            `,
          }}
        />
        {children}
      </body>
    </html>
  );
}
