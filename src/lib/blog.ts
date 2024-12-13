// src/lib/blog.ts
export interface BlogPost {
    id: string;
    title: string;
    slug: string;
    date: string;
    updatedAt?: string;
    author: {
        name: string;
        image: string;
        role: string;
        bio?: string;
    };
    content: string;
    excerpt: string;
    category: string;
    readTime: string;
    image: string;
    tags: string[];
    relatedPosts?: {
        title: string;
        slug: string;
        image: string;
    }[];
    seo?: {
        title?: string;
        description?: string;
        keywords?: string[];
    };
}

// Sample blog posts data
export const blogPosts: BlogPost[] = [
    {
        id: '1',
        title: 'Building Scalable AI Applications with React and TensorFlow.js',
        slug: 'building-scalable-ai-applications-react-tensorflowjs',
        date: '2024-03-15',
        updatedAt: '2024-03-16',
        author: {
            name: 'Your Name',
            image: '/images/authors/your-image.jpg',
            role: 'Full Stack Developer',
            bio: 'Full Stack Developer specializing in AI and Web Development'
        },
        content: `# Building Scalable AI Applications

        Learn how to integrate machine learning models into your React applications using TensorFlow.js...
        
        ## Getting Started
        First, let's understand what TensorFlow.js is and how it can be integrated into a React application...
        
        ## Implementation
        Here's a step-by-step guide to implementing AI features in your React app...`,
        excerpt: 'Learn how to integrate machine learning models into your React applications using TensorFlow.js for real-time AI features.',
        category: 'AI Development',
        readTime: '8 min read',
        image: '/blog/ai-react-hero.jpg',
        tags: ['React', 'TensorFlow.js', 'AI', 'Machine Learning', 'JavaScript'],
        seo: {
            title: 'Building AI Apps with React and TensorFlow.js - Complete Guide',
            description: 'Learn how to create scalable AI applications using React and TensorFlow.js with this comprehensive guide.',
            keywords: ['React AI', 'TensorFlow.js', 'Machine Learning', 'Web Development']
        }
    },
    // Add more blog posts...
]

// Get all blog posts
export async function getBlogPosts(): Promise<BlogPost[]> {
    // In a real application, this would fetch from an API or database
    return blogPosts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
}

// Get a single blog post by slug
export async function getBlogPost(slug: string): Promise<BlogPost | null> {
    const post = blogPosts.find(p => p.slug === slug)
    return post || null
}

// Get posts by category
export async function getPostsByCategory(category: string): Promise<BlogPost[]> {
    return blogPosts
        .filter(p => p.category === category)
        .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
}

// Get posts by tag
export async function getPostsByTag(tag: string): Promise<BlogPost[]> {
    return blogPosts
        .filter(p => p.tags.includes(tag))
        .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
}

// Get related posts
export async function getRelatedPosts(currentSlug: string, limit: number = 3): Promise<BlogPost[]> {
    const currentPost = blogPosts.find(p => p.slug === currentSlug)
    if (!currentPost) return []

    // Find posts with similar tags or in the same category
    const related = blogPosts.filter(post =>
        post.slug !== currentSlug && (
            post.category === currentPost.category ||
            post.tags.some(tag => currentPost.tags.includes(tag))
        )
    )

    // Sort by number of matching tags
    return related
        .sort((a, b) => {
            const aMatchingTags = a.tags.filter(tag => currentPost.tags.includes(tag)).length
            const bMatchingTags = b.tags.filter(tag => currentPost.tags.includes(tag)).length
            return bMatchingTags - aMatchingTags
        })
        .slice(0, limit)
}

// Search posts
export async function searchPosts(query: string): Promise<BlogPost[]> {
    const searchTerm = query.toLowerCase()
    return blogPosts.filter(post =>
        post.title.toLowerCase().includes(searchTerm) ||
        post.excerpt.toLowerCase().includes(searchTerm) ||
        post.tags.some(tag => tag.toLowerCase().includes(searchTerm)) ||
        post.category.toLowerCase().includes(searchTerm)
    )
}

// Get latest posts
export async function getLatestPosts(limit: number = 5): Promise<BlogPost[]> {
    return blogPosts
        .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
        .slice(0, limit)
}

// Get post categories
export async function getCategories(): Promise<string[]> {
    return Array.from(new Set(blogPosts.map(post => post.category)))
}

// Get all tags
export async function getTags(): Promise<string[]> {
    const allTags = blogPosts.flatMap(post => post.tags)
    return Array.from(new Set(allTags))
}

// Get archive months
export async function getArchiveMonths(): Promise<{ month: string; count: number }[]> {
    const months = blogPosts.map(post => {
        const date = new Date(post.date)
        return date.toLocaleString('default', { month: 'long', year: 'numeric' })
    })

    const uniqueMonths = Array.from(new Set(months))
    return uniqueMonths.map(month => ({
        month,
        count: months.filter(m => m === month).length
    }))
}