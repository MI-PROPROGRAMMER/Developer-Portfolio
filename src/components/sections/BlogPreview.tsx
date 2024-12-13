// src/components/sections/BlogPreview.tsx
'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'
import SectionWrapper from '../layout/SectionWrapper'

const blogPosts = [
  {
    id: '1',
    title: 'Building Scalable AI Applications with React and TensorFlow.js',
    excerpt: 'Learn how to integrate machine learning models into your React applications using TensorFlow.js',
    image: '/blog/ai-react.jpg',
    category: 'AI Development',
    readTime: '8 min read',
    date: '2024-03-15'
  },
  {
    id: '2',
    title: 'Advanced State Management in Next.js Applications',
    excerpt: 'Exploring modern state management solutions for large-scale Next.js applications',
    image: '/blog/nextjs-state.jpg',
    category: 'Web Development',
    readTime: '6 min read',
    date: '2024-03-10'
  },
  {
    id: '3',
    title: 'Creating Smart Contracts with Solidity and Web3.js',
    excerpt: 'A comprehensive guide to building and deploying smart contracts on Ethereum',
    image: '/blog/blockchain.jpg',
    category: 'Blockchain',
    readTime: '10 min read',
    date: '2024-03-05'
  }
]

export default function BlogPreview() {
  return (
    <SectionWrapper id="blog" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-white mb-4">Latest Blog Posts</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Insights and tutorials about web development, AI, and blockchain technology
          </p>
        </motion.div>

        {/* Blog Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <motion.article
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="group"
            >
              <Link href={`/blog/${post.id}`}>
                <div className="bg-gray-900/50 backdrop-blur-sm rounded-2xl overflow-hidden border border-gray-800/50 hover:border-gray-700/50 transition-colors">
                  {/* Image */}
                  <div className="relative h-48 overflow-hidden">
                    <Image
                      src={post.image}
                      alt={post.title}
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900/75 to-transparent" />
                    <div className="absolute bottom-4 left-4">
                      <span className="px-3 py-1 bg-indigo-500/20 backdrop-blur-sm text-indigo-300 text-sm rounded-full">
                        {post.category}
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-indigo-400 transition-colors">
                      {post.title}
                    </h3>
                    <p className="text-gray-400 mb-4 line-clamp-2">
                      {post.excerpt}
                    </p>
                    <div className="flex items-center justify-between text-sm text-gray-500">
                      <span>{new Date(post.date).toLocaleDateString('en-US', {
                        month: 'short',
                        day: 'numeric',
                        year: 'numeric'
                      })}</span>
                      <span>{post.readTime}</span>
                    </div>
                  </div>
                </div>
              </Link>
            </motion.article>
          ))}
        </div>

        {/* View All Link */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <Link
            href="/blog"
            className="inline-flex items-center px-6 py-3 rounded-full border border-indigo-500/50 text-indigo-400 hover:bg-indigo-500/10 transition-colors"
          >
            View All Posts
            <svg
              className="ml-2 w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </Link>
        </motion.div>

        {/* Newsletter Signup */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-20 p-8 bg-gradient-to-r from-indigo-500/10 to-cyan-500/10 rounded-2xl backdrop-blur-sm border border-gray-800/50"
        >
          <div className="max-w-2xl mx-auto text-center">
            <h3 className="text-2xl font-bold text-white mb-4">
              Subscribe to My Newsletter
            </h3>
            <p className="text-gray-400 mb-6">
              Get the latest articles and tutorials directly in your inbox
            </p>
            <form className="flex flex-col sm:flex-row gap-4">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 bg-gray-900/50 rounded-lg border border-gray-800/50 text-white placeholder-gray-500 focus:outline-none focus:border-indigo-500"
              />
              <button
                type="submit"
                className="px-6 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors"
              >
                Subscribe
              </button>
            </form>
          </div>
        </motion.div>
      </div>
    </SectionWrapper>
  )
}