import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { Layout } from '@/components/layout/Layout';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});

export const metadata: Metadata = {
  title: 'NewsHub - Latest Breaking News & Updates',
  description: 'Stay informed with the latest breaking news and updates from around the world. Covering politics, sports, technology, business, and more.',
  keywords: ['news', 'breaking news', 'latest news', 'world news', 'politics', 'sports', 'technology', 'business', 'entertainment'],
  authors: [{ name: 'NewsHub Team' }],
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://newshub.example.com',
    title: 'NewsHub - Latest Breaking News & Updates',
    description: 'Stay informed with the latest breaking news and updates from around the world.',
    siteName: 'NewsHub',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'NewsHub - Latest Breaking News & Updates',
    description: 'Stay informed with the latest breaking news and updates from around the world.',
    creator: '@newshub',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} font-sans antialiased bg-white text-foreground`}>
        <Layout>
          {children}
        </Layout>
      </body>
    </html>
  );
}
