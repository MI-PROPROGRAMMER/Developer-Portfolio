// src/app/sitemap.ts
import { MetadataRoute } from 'next'
import { getBlogPosts } from '@/lib/blog'
import { getProjects } from '@/lib/projects'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
    const blogs = await getBlogPosts()
    const projects = await getProjects()

    const baseUrl = 'https://yourdomain.com'

    // Base routes
    const routes = [
        '',
        '/about',
        '/projects',
        '/blog',
        '/contact',
    ].map((route) => ({
        url: `${baseUrl}${route}`,
        lastModified: new Date(),
        changeFrequency: 'daily',
        priority: 1,
    }))

    // Blog posts
    const blogUrls = blogs.map((post) => ({
        url: `${baseUrl}/blog/${post.slug}`,
        lastModified: new Date(post.date),
        changeFrequency: 'weekly',
        priority: 0.8,
    }))

    // Projects
    const projectUrls = projects.map((project) => ({
        url: `${baseUrl}/projects/${project.slug}`,
        lastModified: new Date(project.updatedAt),
        changeFrequency: 'weekly',
        priority: 0.8,
    }))

    return [...routes, ...blogUrls, ...projectUrls]
}