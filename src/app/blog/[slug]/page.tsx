// src/app/blog/[slug]/page.tsx
import { Metadata } from 'next'
import { getBlogPost } from '@/lib/blog'
import BlogPostComponent from '@/components/blog/BlogPost'

// Generate metadata for SEO
export async function generateMetadata(
    { params }: { params: { slug: string } }
): Promise<Metadata> {
    const post = await getBlogPost(params.slug)

    return {
        title: post.title,
        description: post.excerpt,
        openGraph: {
            title: post.title,
            description: post.excerpt,
            type: 'article',
            publishedTime: post.date,
            authors: ['Your Name'],
            images: [
                {
                    url: post.image,
                    width: 1200,
                    height: 630,
                    alt: post.title,
                },
            ],
        },
        twitter: {
            card: 'summary_large_image',
            title: post.title,
            description: post.excerpt,
            images: [post.image],
        },
        // Add structured data for blog post
        alternates: {
            canonical: `https://yourdomain.com/blog/${params.slug}`,
        },
    }
}

// Generate static paths for all blog posts
export async function generateStaticParams() {
    const posts = await getBlogPosts()
    return posts.map((post) => ({
        slug: post.slug,
    }))
}

export default async function BlogPost({ params }: { params: { slug: string } }) {
    const post = await getBlogPost(params.slug)

    return <BlogPostComponent post={post} />
}