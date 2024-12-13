// src/app/projects/[id]/page.tsx
'use client'

import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { projects } from '@/lib/projects'

export default function ProjectPage({ params }: { params: { id: string } }) {
    const [activeImage, setActiveImage] = useState(0)
    const [project, setProject] = useState<typeof projects[0] | null>(null)
    const [loading, setLoading] = useState(true)
    const [isClient, setIsClient] = useState(false)

    useEffect(() => {
        setIsClient(true)
    }, [])

    useEffect(() => {
        // Find project after component mounts
        const foundProject = projects.find(p => p.id === params.id)
        setProject(foundProject || null)
        setLoading(false)
    }, [params.id])

    if (loading) {
        return <div className="min-h-screen flex items-center justify-center">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-indigo-500"></div>
        </div>
    }

    if (!project) {
        return <div className="min-h-screen flex items-center justify-center text-white">
            Project not found
        </div>
    }

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="min-h-screen bg-gray-900 pt-20"
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                {/* Project Header */}
                <div className="bg-white/10 backdrop-blur-sm rounded-xl shadow-lg overflow-hidden">
                    <div className="relative h-96">
                        <Image
                            src={project.image}
                            alt={project.title}
                            fill
                            className="object-cover"
                        />
                    </div>

                    <div className="p-8">
                        <div className="flex justify-between items-start">
                            <div>
                                <h1 className="text-4xl font-bold mb-4">{project.title}</h1>
                                <span className="inline-block px-4 py-2 bg-indigo-100 text-indigo-600 rounded-full text-sm font-medium mb-4">
                                    {project.category}
                                </span>
                            </div>
                            <div className="flex gap-4">
                                <a
                                    href={project.demoUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="px-6 py-3 bg-indigo-600 text-white rounded-full hover:bg-indigo-700 transition-colors"
                                >
                                    Live Demo
                                </a>
                                <a
                                    href={project.githubUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="px-6 py-3 border-2 border-indigo-600 text-indigo-600 rounded-full hover:bg-indigo-50 transition-colors"
                                >
                                    View Code
                                </a>
                            </div>
                        </div>

                        {/* Project Description */}
                        <div className="mt-8">
                            <h2 className="text-2xl font-bold mb-4">Project Overview</h2>
                            <p className="text-gray-600 leading-relaxed mb-8">
                                {project.longDescription}
                            </p>

                            {/* Technologies */}
                            <h3 className="text-xl font-bold mb-4">Technologies Used</h3>
                            <div className="flex flex-wrap gap-2 mb-8">
                                {project.tech.map((tech) => (
                                    <span
                                        key={tech}
                                        className="px-4 py-2 bg-gray-100 rounded-full text-gray-700"
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>

                            {/* Features */}
                            <h3 className="text-xl font-bold mb-4">Key Features</h3>
                            <ul className="list-disc list-inside mb-8 space-y-2">
                                {project.features.map((feature, index) => (
                                    <li key={index} className="text-gray-600">
                                        {feature}
                                    </li>
                                ))}
                            </ul>

                            {/* Project Images */}
                            {project.images && (
                                <div className="mt-8">
                                    <h3 className="text-xl font-bold mb-4">Project Gallery</h3>
                                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                                        {project.images.map((image, index) => (
                                            <div
                                                key={index}
                                                className="relative h-48 cursor-pointer rounded-lg overflow-hidden"
                                                onClick={() => setActiveImage(index)}
                                            >
                                                <Image
                                                    src={image}
                                                    alt={`${project.title} screenshot ${index + 1}`}
                                                    fill
                                                    className="object-cover hover:scale-105 transition-transform duration-300"
                                                />
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            )}

                            {/* Testimonial */}
                            {project.testimonial && (
                                <div className="mt-12 bg-indigo-50 rounded-xl p-8">
                                    <blockquote className="text-lg italic text-gray-700 mb-4">
                                        "{project.testimonial.text}"
                                    </blockquote>
                                    <div className="font-medium">
                                        <div className="text-indigo-600">{project.testimonial.author}</div>
                                        <div className="text-gray-500">{project.testimonial.role}</div>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                </div>

                {/* Back to Projects */}
                <div className="mt-8">
                    <Link
                        href="/projects"
                        className="inline-flex items-center text-indigo-600 hover:text-indigo-700"
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
                        Back to Projects
                    </Link>
                </div>
            </div>
        </motion.div>
    )
}