// src/app/metadata.ts
import { Metadata } from 'next'

const siteConfig = {
    title: 'Your Name - Full Stack Developer',
    description: 'Full Stack Developer specializing in MERN Stack, AI Development, and Blockchain Solutions',
    url: 'https://yourwebsite.com', // Replace with your domain
    author: 'Your Name',
    keywords: [
        'Full Stack Developer',
        'MERN Stack',
        'AI Development',
        'Blockchain',
        'Web Development',
        'JavaScript',
        'React',
        'Node.js'
    ]
}

export const defaultMetadata: Metadata = {
    title: {
        default: siteConfig.title,
        template: `%s | ${siteConfig.title}`
    },
    description: siteConfig.description,
    keywords: siteConfig.keywords,
    authors: [{ name: siteConfig.author }],
    creator: siteConfig.author,
    openGraph: {
        type: 'website',
        locale: 'en_US',
        url: siteConfig.url,
        title: siteConfig.title,
        description: siteConfig.description,
        siteName: siteConfig.title,
        images: [
            {
                url: `${siteConfig.url}/og-image.png`, // Add your OG image
                width: 1200,
                height: 630,
                alt: siteConfig.title
            }
        ]
    },
    twitter: {
        card: 'summary_large_image',
        title: siteConfig.title,
        description: siteConfig.description,
        images: [`${siteConfig.url}/og-image.png`], // Add your Twitter card image
        creator: '@yourtwitterhandle' // Your Twitter handle
    },
    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            'max-video-preview': -1,
            'max-image-preview': 'large',
            'max-snippet': -1
        }
    },
    icons: {
        icon: '/favicon.ico',
        shortcut: '/favicon-16x16.png',
        apple: '/apple-touch-icon.png'
    },
    manifest: '/site.webmanifest'
}