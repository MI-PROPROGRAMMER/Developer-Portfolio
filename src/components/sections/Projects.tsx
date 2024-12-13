// src/components/sections/Projects.tsx
'use client'

import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import SectionWrapper from '../layout/SectionWrapper'
import InteractiveCard from '../ui/InteractiveCard'
import Image from 'next/image'

// Project type definition
interface Project {
    id: string;
    title: string;
    category: 'MERN' | 'AI' | 'Blockchain';
    description: string;
    tech: string[];
    demoUrl: string;
    image: string;
}
// Projects data
const projects: Project[] = [
    {
        id: '1',
        title: 'AI-Powered Healthcare Platform',
        category: 'AI',
        description: 'Revolutionary healthcare solution using MERN stack and advanced AI algorithms',
        tech: ['React', 'Node.js', 'TensorFlow', 'MongoDB', 'Express'],
        demoUrl: 'https://fastly.picsum.photos/id/134/800/400.jpg?hmac=wFjsh5f0v4VjZiO38BEBNljKGDBo-gZLSJ0HX6Ykhwc',
        image: '/projects/healthcare-ai.jpg' // Add your image path
    },
    {
        id: '2',
        title: 'DeFi Trading Platform',
        category: 'Blockchain',
        description: 'Decentralized finance platform with real-time trading and smart contracts',
        tech: ['Ethereum', 'Solidity', 'Web3.js', 'React', 'Node.js'],
        demoUrl: 'https://defi-trading.demo.com',
        image: '/projects/defi-platform.jpg' // Add your image path
    },
    {
        id: '3',
        title: 'E-Learning Management System',
        category: 'MERN',
        description: 'Scalable LMS built with MERN stack featuring real-time collaboration',
        tech: ['React', 'Express', 'MongoDB', 'Socket.io', 'Node.js'],
        demoUrl: 'https://lms-platform.demo.com',
        image: '/projects/lms-platform.jpg' // Add your image path
    }
]

export default function Projects() {
    const [activeFilter, setActiveFilter] = useState('All')

    const [isClient, setIsClient] = useState(false)

    useEffect(() => {
        setIsClient(true)
    }, [])

    // Filter projects based on active filter
    const filteredProjects = activeFilter === 'All'
        ? projects
        : projects.filter(project => project.category === activeFilter)

    return (
        <SectionWrapper id="projects" className="py-32">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl font-bold text-white mb-4">Featured Projects</h2>
                    <p className="text-gray-400 max-w-2xl mx-auto">
                        Explore my latest work showcasing innovative solutions in MERN Stack, AI, and Blockchain development
                    </p>
                </motion.div>

                {/* Filter Buttons */}
                <div className="flex justify-center gap-4 mb-16">
                    {['All', 'MERN', 'AI', 'Blockchain'].map((filter) => (
                        <button
                            key={filter}
                            onClick={() => setActiveFilter(filter)}
                            className={`px-6 py-2 rounded-full transition-all duration-300 backdrop-blur-sm
                ${activeFilter === filter
                                    ? 'bg-indigo-600/90 text-white shadow-lg shadow-indigo-500/25'
                                    : 'bg-gray-800/50 text-gray-400 hover:bg-gray-800/80'
                                }`}
                        >
                            {filter}
                        </button>
                    ))}
                </div>

                {/* Projects Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {filteredProjects.map((project) => (
                        <motion.div
                            key={project.id}
                            layout
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.9 }}
                        >
                            <InteractiveCard
                                glowColor={
                                    project.category === 'AI' ? 'rgba(139, 92, 246, 0.15)' :
                                        project.category === 'MERN' ? 'rgba(99, 102, 241, 0.15)' :
                                            'rgba(59, 130, 246, 0.15)'
                                }
                                className="h-full"
                            >
                                {/* Project Image */}
                                <div className="relative h-48 w-full">
                                    <Image
                                        src={project.image}
                                        alt={project.title}
                                        fill
                                        className="object-cover"
                                    />
                                    <div className={`absolute inset-0 ${project.category === 'AI' ? 'bg-gradient-to-r from-violet-600/90 to-indigo-600/90' :
                                            project.category === 'MERN' ? 'bg-gradient-to-r from-indigo-600/90 to-blue-600/90' :
                                                'bg-gradient-to-r from-blue-600/90 to-indigo-600/90'
                                        }`}>
                                        <div className="p-6">
                                            <span className="inline-block px-3 py-1 bg-white/20 rounded-full text-sm text-white backdrop-blur-sm">
                                                {project.category}
                                            </span>
                                        </div>
                                    </div>
                                </div>

                                <div className="p-6">
                                    <h4 className="text-lg font-semibold text-white mb-2">{project.title}</h4>
                                    <p className="text-gray-400 mb-4">{project.description}</p>

                                    {/* Tech Stack */}
                                    <div className="flex flex-wrap gap-2 mb-6">
                                        {project.tech.map((tech) => (
                                            <span
                                                key={tech}
                                                className="px-3 py-1 rounded-full text-sm bg-gray-800/50 text-gray-300"
                                            >
                                                {tech}
                                            </span>
                                        ))}
                                    </div>

                                    {/* Action Buttons */}
                                    <div className="flex gap-4">
                                        <Link
                                            href={`/projects/${project.id}`}
                                            className="flex-1 text-center px-4 py-2 rounded-full bg-indigo-600/90 text-white hover:bg-indigo-600 transition-colors"
                                        >
                                            View Details
                                        </Link>
                                        <Link
                                            href={project.demoUrl}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex-1 text-center px-4 py-2 rounded-full border border-indigo-500/50 text-indigo-400 hover:bg-indigo-500/10 transition-colors"
                                        >
                                            Live Demo
                                        </Link>
                                    </div>
                                </div>
                            </InteractiveCard>
                        </motion.div>
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
                        href="/projects"
                        className="inline-flex items-center text-indigo-400 hover:text-indigo-300 transition-colors"
                    >
                        View All Projects
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
            </div>
        </SectionWrapper>
    )
}