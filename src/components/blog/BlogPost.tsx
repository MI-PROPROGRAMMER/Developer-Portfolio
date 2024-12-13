// src/components/blog/BlogPost.tsx
'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { format } from 'date-fns'

interface BlogPostProps {
    post: {
        title: string;
        date: string;
        author: {
            name: string;
            image: string;
            role: string;
        };
        content: string;
        category: string;
        readTime: string;
        image: string;
        tags: string[];
        relatedPosts?: {
            title: string;
            slug: string;
            image: string;
        }[];
    }
}

export default function BlogPost({ post }: BlogPostProps) {
    const [hasShared, setHasShared] = useState(false)
    const [isScrolled, setIsScrolled] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 200)
        }
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    const sharePost = async () => {
        if (navigator.share) {
            try {
                await navigator.share({
                    title: post.title,
                    text: `Check out this post: ${post.title}`,
                    url: window.location.href,
                })
                setHasShared(true)
            } catch (error) {
                console.log('Error sharing:', error)
            }
        }
    }

    return (
        <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
            {/* Header */}
            <motion.header
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="mb-12"
            >
                <div className="mb-6">
                    <span className="inline-block px-3 py-1 bg-indigo-600/10 text-indigo-500 rounded-full text-sm font-medium">
                        {post.category}
                    </span>
                </div>

                <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
                    {post.title}
                </h1>

                <div className="flex items-center space-x-4 text-gray-400 mb-8">
                    <div className="flex items-center">
                        <Image
                            src={post.author.image}
                            alt={post.author.name}
                            width={40}
                            height={40}
                            className="rounded-full"
                        />
                        <div className="ml-3">
                            <p className="text-white font-medium">{post.author.name}</p>
                            <p className="text-sm">{post.author.role}</p>
                        </div>
                    </div>
                    <span>•</span>
                    <time dateTime={post.date}>
                        {format(new Date(post.date), 'MMMM d, yyyy')}
                    </time>
                    <span>•</span>
                    <span>{post.readTime}</span>
                </div>

                {/* Featured Image */}
                <div className="relative h-[400px] rounded-xl overflow-hidden mb-12">
                    <Image
                        src={post.image}
                        alt={post.title}
                        fill
                        className="object-cover"
                    />
                </div>
            </motion.header>

            {/* Floating Share Button */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: isScrolled ? 1 : 0 }}
                className="fixed right-8 top-24 z-30"
            >
                <button
                    onClick={sharePost}
                    className="p-3 bg-indigo-600/20 backdrop-blur-sm rounded-full text-white hover:bg-indigo-600/30 transition-colors"
                >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
                    </svg>
                </button>
            </motion.div>

            {/* Content */}
            <div className="prose prose-invert prose-lg max-w-none mb-12">
                <div dangerouslySetInnerHTML={{ __html: post.content }} />
            </div>

            {/* Tags */}
            <div className="mb-12">
                <h3 className="text-white font-medium mb-4">Tags</h3>
                <div className="flex flex-wrap gap-2">
                    {post.tags.map((tag) => (
                        <Link
                            key={tag}
                            href={`/blog/tag/${tag.toLowerCase()}`}
                            className="px-3 py-1 bg-gray-800 text-gray-300 rounded-full text-sm hover:bg-gray-700 transition-colors"
                        >
                            {tag}
                        </Link>
                    ))}
                </div>
            </div>

            {/* Related Posts */}
            {post.relatedPosts && post.relatedPosts.length > 0 && (
                <section className="border-t border-gray-800 pt-12">
                    <h2 className="text-2xl font-bold text-white mb-8">Related Posts</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {post.relatedPosts.map((relatedPost) => (
                            <Link
                                key={relatedPost.slug}
                                href={`/blog/${relatedPost.slug}`}
                                className="group"
                            >
                                <div className="relative h-48 rounded-xl overflow-hidden mb-4">
                                    <Image
                                        src={relatedPost.image}
                                        alt={relatedPost.title}
                                        fill
                                        className="object-cover transition-transform duration-300 group-hover:scale-105"
                                    />
                                </div>
                                <h3 className="text-lg font-medium text-white group-hover:text-indigo-400 transition-colors">
                                    {relatedPost.title}
                                </h3>
                            </Link>
                        ))}
                    </div>
                </section>
            )}

            {/* Back to Blog */}
            <div className="mt-12 text-center">
                <Link
                    href="/blog"
                    className="inline-flex items-center text-indigo-400 hover:text-indigo-300 transition-colors"
                >
                    <svg
                        className="w-5 h-5 mr-2"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M15 19l-7-7 7-7"
                        />
                    </svg>
                    Back to Blog
                </Link>
            </div>
        </article>
    )
}