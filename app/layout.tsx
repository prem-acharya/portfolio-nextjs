import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { ThemeProvider } from '@/components/theme-provider';
import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';
import { Analytics } from "@vercel/analytics/react";
import Head from 'next/head';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  icons: {
    icon: '/favicon.ico',
  },
  title: 'Prem Acharya | Full-Stack Developer & React, Next.js Enthusiast',
  description: 'Discover Prem Acharya\'s portfolio featuring innovative web development, enthusiasm for React.js and Next.js, and scalable full-stack solutions for modern businesses.',
  keywords: 'Prem Acharya, full-stack developer, React developer, Next.js developer, web development portfolio, modern web design, freelance web developer, API integration, scalable web solutions',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <Head>
        <meta property="og:title" content="Prem Acharya | Full-Stack Developer & React, Next.js Enthusiast" />
        <meta property="og:description" content="Discover Prem Acharya's portfolio featuring innovative web development, enthusiasm for React.js and Next.js, and scalable full-stack solutions for modern businesses." />
        <meta property="og:url" content="https://premacharya.vercel.app/" />
        <meta property="og:site_name" content="Prem Acharya Portfolio" />
        <meta property="og:image" content="/site_img.webp" />
        <meta property="og:image:width" content="800" />
        <meta property="og:image:height" content="600" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Prem Acharya | Full-Stack Developer & React, Next.js Enthusiast" />
        <meta name="twitter:description" content="Discover Prem Acharya's portfolio featuring innovative web development, enthusiasm for React.js and Next.js, and scalable full-stack solutions for modern businesses." />
        <meta name="twitter:image" content="/site_img.webp" />
      </Head>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <Navbar />
          <main>
            {children}
            <Analytics />
          </main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}