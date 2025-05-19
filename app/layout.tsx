import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { ThemeProvider } from '@/components/theme-provider';
import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';
import { Analytics } from "@vercel/analytics/react";

const inter = Inter({ subsets: ['latin'] });

interface ExtendedMetadata extends Metadata {
  openGraph?: {
    title: string;
    description: string;
    url: string;
    // site_name: string;
    images: {
      url: string;
      width: number;
      height: number;
      alt: string;
    }[];
  };
  twitter?: {
    card: string;
    title: string;
    description: string;
    image: string;
  };
}

export const metadata: ExtendedMetadata = {
  icons: {
    icon: '/favicon.ico',
  },
  title: 'Prem Acharya | Full-Stack Developer & React/Next.js Enthusiast',
  description: 'Explore the portfolio of Prem Acharya, showcasing web development and expertise in React.js and Next.js.',
  keywords: 'prem acharya, developer portfolio, dev portfolio, portfolio, full stack developer, frontend developer, backend developer, web design, developer, React js, Next js, node, web development',
  openGraph: {
    title: 'Prem Acharya | Full-Stack Developer & React/Next.js Enthusiast',
    description: 'Explore the portfolio of Prem Acharya, showcasing web development and expertise in React.js and Next.js.',
    url: 'https://premacharya.vercel.app/',
    images: [
      {
        url: 'https://premacharya.vercel.app/site_img.webp',
        width: 800,
        height: 600,
        alt: 'Prem Acharya Portfolio Image',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Prem Acharya | Full-Stack Developer & React/Next.js Enthusiast',
    description: 'Explore the portfolio of Prem Acharya, showcasing web development and expertise in React.js and Next.js.',
    image: 'https://premacharya.vercel.app/site_img.webp',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta property="og:site_name" content="Prem Acharya Portfolio" />
      </head>
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