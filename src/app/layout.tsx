import Navbar from "@/components/Navbar";
import "./globals.css";
import Footer from "@/components/Footer";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-US">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />

        <title>Radar</title>
        <meta name="theme-color" content="#4338ca" />
        <meta
          property="og:title"
          content="Find the Right Cybersecurity Tools"
        />
        <meta
          property="og:description"
          content="The directory for protecting, testing, and fortifying your digital environment."
        />
        <meta property="og:url" content="https://radar.krypton.ninja" />

        <link
          rel="apple-touch-icon"
          type="image/png"
          sizes="180x180"
          href="/static/images/favicon_180.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/static/images/favicon_32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/static/images/favicon_16.png"
        />
        <link
          rel="icon"
          type="image/x-icon"
          href="/static/images/favicon.ico"
        />
        <meta property="og:site_name" content="Radar" />
        <meta property="og:locale" content="en-US" />
        <meta property="og:image" content="/static/images/banner.webp" />
        <meta property="og:type" content="website" />

        <meta property="twitter:card" content="summary_large_image" />

        <meta name="robots" content="index, follow" />
      </head>
      <body>
        <main className="h-screen max-w-screen-xl mx-auto px-4 text-lg">
          <Navbar />
          {children}
          <Footer />
        </main>
      </body>
    </html>
  );
}
