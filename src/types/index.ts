// src/types/index.ts
export interface Project {
    id: string;
    title: string;
    description: string;
    longDescription: string;
    category: 'MERN' | 'AI' | 'Blockchain';
    image: string;
    tech: string[];
    demoUrl: string;
    githubUrl: string;
    features: string[];
    challenges?: string[];
    solutions?: string[];
    images?: string[];
    testimonial?: {
        text: string;
        author: string;
        role: string;
    };
}

// src/types/blog.ts
export interface BlogPost {
    id: string;
    title: string;
    slug: string;
    date: string;
    author: {
        name: string;
        image: string;
        role: string;
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
}

export interface BlogCategory {
    name: string;
    slug: string;
    description: string;
}

export interface BlogTag {
    name: string;
    slug: string;
    count: number;
}