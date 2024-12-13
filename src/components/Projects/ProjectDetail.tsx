// src/components/projects/ProjectDetail.tsx
'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'

interface Technology {
    name: string;
    icon: string;
    description: string;
}

interface ProjectDetail {
    id: string;
    title: string;
    category: string;
    description: string;
    longDescription: string;
    challenges: string[];
    solutions: string[];
    technologies: Technology[];
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

interface ProjectDetailProps {
    project: ProjectDetail;
}

export default function ProjectDetail({ project }: ProjectDetailProps) {
    const [activeImage, setActiveImage] = useState(0)
    const [isLightboxOpen, setIsLightboxOpen] = useState(false)

    return (
        <article className="min-h-screen py-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-center mb-16"
                >
                    <div className="mb-6">
                        <span className="inline-block px-4 py-2 bg-indigo-600/10 text-indigo-400 rounded-full">
                            {project.category}
                        </span>
                    </div>
                    <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
                        {project.title}
                    </h1>
                    <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                        {project.description}
                    </p>
                </motion.div>

                {/* Main Image and Action Buttons */}
                <div className="mb-16">
                    <div className="relative h-[500px] rounded-xl overflow-hidden mb-8">
                        <Image
                            src={project.images[activeImage]}
                            alt={project.title}
                            fill
                            className="object-cover"
                            onClick={() => setIsLightboxOpen(true)}
                        />
                    </div>
                    <div className="flex justify-center gap-4">
                        <a
                            href={project.demoUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="px-8 py-3 bg-indigo-600 text-white rounded-full hover:bg-indigo-700 transition-colors"
                        >
                            Live Demo
                        </a>
                        <a
                            href={project.githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="px-8 py-3 border border-indigo-600 text-indigo-400 rounded-full hover:bg-indigo-600/10 transition-colors"
                        >
                            View Code
                        </a>
                    </div>
                </div>

                {/* Project Details Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-16">
                    {/* Tech Stack */}
                    <div className="lg:col-span-2">
                        <h2 className="text-2xl font-bold text-white mb-6">Technology Stack</h2>
                        <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
                            {project.technologies.map((tech) => (
                                <motion.div
                                    key={tech.name}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    className="p-4 bg-gray-900/50 backdrop-blur-sm rounded-xl border border-gray-800/50"
                                >
                                    <Image
                                        src={tech.icon}
                                        alt={tech.name}
                                        width={40}
                                        height={40}
                                        className="mb-3"
                                    />
                                    <h3 className="text-lg font-medium text-white mb-2">{tech.name}</h3>
                                    <p className="text-sm text-gray-400">{tech.description}</p>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    {/* Key Features */}
                    <div>
                        <h2 className="text-2xl font-bold text-white mb-6">Key Features</h2>
                        <ul className="space-y-4">
                            {project.features.map((feature, index) => (
                                <motion.li
                                    key={index}
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1 }}
                                    className="flex items-start"
                                >
                                    <svg
                                        className="w-6 h-6 text-indigo-400 mt-1 mr-3"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M5 13l4 4L19 7"
                                        />
                                    </svg>
                                    <span className="text-gray-300">{feature}</span>
                                </motion.li>
                            ))}
                        </ul>
                    </div>
                </div>

                {/* Challenges and Solutions */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
                    <div>
                        <h2 className="text-2xl font-bold text-white mb-6">Challenges</h2>
                        <ul className="space-y-4">
                            {project.challenges.map((challenge, index) => (
                                <motion.li
                                    key={index}
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    className="flex items-start text-gray-400"
                                >
                                    <span className="mr-3">•</span>
                                    {challenge}
                                </motion.li>
                            ))}
                        </ul>
                    </div>
                    <div>
                        <h2 className="text-2xl font-bold text-white mb-6">Solutions</h2>
                        <ul className="space-y-4">
                            {project.solutions.map((solution, index) => (
                                <motion.li
                                    key={index}
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    className="flex items-start text-gray-400"
                                >
                                    <span className="mr-3">•</span>
                                    {solution}
                                </motion.li>
                            ))}
                        </ul>
                    </div>
                </div>

                {/* Project Gallery */}
                <div className="mb-16">
                    <h2 className="text-2xl font-bold text-white mb-6">Project Gallery</h2>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        {project.images.map((image, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                className="relative aspect-video rounded-lg overflow-hidden cursor-pointer"
                                onClick={() => {
                                    setActiveImage(index)
                                    setIsLightboxOpen(true)
                                }}
                            >
                                <Image
                                    src={image}
                                    alt={`${project.title} screenshot ${index + 1}`}
                                    fill
                                    className="object-cover hover:scale-105 transition-transform duration-300"
                                />
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* Testimonial */}
                {project.testimonial && (
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="mb-16"
                    >
                        <div className="bg-indigo-600/10 rounded-2xl p-8 border border-indigo-500/20">
                            <blockquote className="text-xl text-gray-300 italic mb-6">
                                "{project.testimonial.text}"
                            </blockquote>
                            <div className="flex items-center">
                                <Image
                                    src={project.testimonial.image}
                                    alt={project.testimonial.author}
                                    width={48}
                                    height={48}
                                    className="rounded-full mr-4"
                                />
                                <div>
                                    <div className="font-medium text-white">
                                        {project.testimonial.author}
                                    </div>
                                    <div className="text-gray-400">
                                        {project.testimonial.role} at {project.testimonial.company}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                )}

                {/* Back to Projects */}
                <div className="text-center">
                    <Link
                        href="/projects"
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
                        Back to Projects
                    </Link>
                </div>
            </div>

            {/* Image Lightbox */}
            <AnimatePresence>
                {isLightboxOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
                        onClick={() => setIsLightboxOpen(false)}
                    >
                        <div className="relative max-w-7xl w-full aspect-video">
                            <Image
                                src={project.images[activeImage]}
                                alt={project.title}
                                fill
                                className="object-contain"
                            />
                            <button
                                className="absolute top-4 right-4 text-white p-2 hover:bg-white/10 rounded-full"
                                onClick={() => setIsLightboxOpen(false)}
                            >
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </button>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </article>
    )
}