import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        {/* PWA Manifest */}
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#0070f3" />

        {/* Apple iOS PWA support */}
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        <meta name="apple-mobile-web-app-title" content="Cine Seek" />

        {/* Apple Touch Icons */}
        <link rel="apple-touch-icon" href="/icons/apple-icon-152x152.png" />

        {/* Fallback favicon */}
        <link rel="icon" href="/icons/android-chrome-192x192.png" />
      </Head>
      <body className="antialiased">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
