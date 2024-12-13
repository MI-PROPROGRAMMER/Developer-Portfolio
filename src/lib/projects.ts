// src/lib/projects.ts
export interface Project {
    id: string;
    title: string;
    slug: string;
    category: 'MERN' | 'AI' | 'Blockchain';
    description: string;
    longDescription: string;
    challenges: string[];
    solutions: string[];
    technologies: {
        name: string;
        icon: string;
        description: string;
    }[];
    features: string[];
    images: string[];
    demoUrl: string;
    githubUrl: string;
    liveUrl?: string;
    testimonial?: {
        text: string;
        author: string;
        role: string;
        company: string;
        image: string;
    };
}

// Sample project data
export const projects: Project[] = [
    {
        id: '1',
        title: 'AI-Powered Healthcare Platform',
        slug: 'ai-healthcare-platform',
        category: 'AI',
        description: 'Revolutionary healthcare solution using MERN stack and advanced AI algorithms',
        longDescription: `A comprehensive healthcare platform that leverages artificial intelligence 
            to provide predictive analytics and personalized patient care recommendations. 
            The system integrates with existing medical records and provides real-time insights 
            to healthcare providers.`,
        challenges: [
            'Implementing HIPAA-compliant data storage and transmission',
            'Processing large volumes of medical data in real-time',
            'Creating accurate prediction models for patient diagnosis',
            'Ensuring seamless integration with existing healthcare systems'
        ],
        solutions: [
            'Developed custom encryption system for secure data handling',
            'Implemented distributed computing architecture for real-time processing',
            'Used advanced machine learning algorithms with continuous training',
            'Created standardized API interfaces for system integration'
        ],
        technologies: [
            {
                name: 'React',
                icon: '/icons/react.svg',
                description: 'Frontend development with React for dynamic user interfaces'
            },
            {
                name: 'Node.js',
                icon: '/icons/nodejs.svg',
                description: 'Backend server implementation with Express.js'
            },
            {
                name: 'TensorFlow',
                icon: '/icons/tensorflow.svg',
                description: 'Machine learning model development and deployment'
            },
            {
                name: 'MongoDB',
                icon: '/icons/mongodb.svg',
                description: 'Scalable database for medical records'
            }
        ],
        features: [
            'Real-time patient monitoring dashboard',
            'AI-powered diagnosis assistance',
            'Secure medical record management',
            'Automated reporting system',
            'Patient engagement portal'
        ],
        images: [
            '/projects/healthcare/dashboard.jpg',
            '/projects/healthcare/patient-view.jpg',
            '/projects/healthcare/analytics.jpg',
            '/projects/healthcare/reporting.jpg'
        ],
        demoUrl: 'https://healthcare-demo.com',
        githubUrl: 'https://github.com/yourusername/healthcare-ai',
        testimonial: {
            text: "This platform has revolutionized how we handle patient care. The AI-powered insights have helped us make better decisions faster.",
            author: "Dr. Sarah Johnson",
            role: "Chief Medical Officer",
            company: "Metropolitan Hospital",
            image: "/testimonials/sarah-johnson.jpg"
        }
    },
    // Add more projects...
]

// Get all projects
export async function getProjects(): Promise<Project[]> {
    // In a real application, this would fetch from an API or database
    return projects
}

// Get a single project by slug
export async function getProject(slug: string): Promise<Project | null> {
    const project = projects.find(p => p.slug === slug)
    return project || null
}

// Get projects by category
export async function getProjectsByCategory(category: Project['category']): Promise<Project[]> {
    return projects.filter(p => p.category === category)
}

// Get related projects
export async function getRelatedProjects(currentSlug: string, limit: number = 3): Promise<Project[]> {
    const currentProject = projects.find(p => p.slug === currentSlug)
    if (!currentProject) return []

    return projects
        .filter(p => p.slug !== currentSlug && p.category === currentProject.category)
        .slice(0, limit)
}

// Search projects
export async function searchProjects(query: string): Promise<Project[]> {
    const searchTerm = query.toLowerCase()
    return projects.filter(project =>
        project.title.toLowerCase().includes(searchTerm) ||
        project.description.toLowerCase().includes(searchTerm) ||
        project.technologies.some(tech =>
            tech.name.toLowerCase().includes(searchTerm)
        )
    )
}

// Get featured projects
export async function getFeaturedProjects(limit: number = 3): Promise<Project[]> {
    // In a real application, you might have a 'featured' flag in your data
    return projects.slice(0, limit)
}