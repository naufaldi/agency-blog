import type { Metadata } from 'next'
import { Inter, JetBrains_Mono } from 'next/font/google' // Using Google Fonts directly via Next.js
import './globals.css'
import { ThemeProvider } from '@/components/theme-provider'

const inter = Inter({
  variable: '--font-sans',
  subsets: ['latin'],
})

const jetbrainsMono = JetBrains_Mono({
  variable: '--font-mono',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  metadataBase: new URL('https://agency-creative.com'),
  title: {
    default: 'Agency Creative - Digital Excellence Through Technical Transparency',
    template: '%s | Agency Creative',
  },
  description:
    'We transform complex ideas into elegant digital solutions. Creative agency specializing in web development, design, and technical excellence.',
  keywords: [
    'web development',
    'digital agency',
    'creative agency',
    'web design',
    'software development',
    'technical solutions',
    'UI/UX design',
    'next.js development',
    'react development',
  ],
  authors: [{ name: 'Agency Creative' }],
  creator: 'Agency Creative',
  publisher: 'Agency Creative',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://agency-creative.com',
    siteName: 'Agency Creative',
    title: 'Agency Creative - Digital Excellence Through Technical Transparency',
    description:
      'We transform complex ideas into elegant digital solutions. Creative agency specializing in web development, design, and technical excellence.',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Agency Creative - Technical Transparency',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Agency Creative - Digital Excellence Through Technical Transparency',
    description:
      'We transform complex ideas into elegant digital solutions. Creative agency specializing in web development, design, and technical excellence.',
    images: ['/og-image.png'],
    creator: '@agency_creative',
  },
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon.ico',
    apple: '/logo.png',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.variable} ${jetbrainsMono.variable} antialiased bg-background text-foreground`}
      >
        {/* Skip to main content for accessibility */}
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:z-50 focus:top-4 focus:left-4 focus:bg-cyan-500 focus:text-slate-900 focus:px-4 focus:py-2 focus:rounded focus:font-mono focus:text-sm"
        >
          Skip to main content
        </a>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem={false}
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
