// src/components/sections/Hero.tsx
'use client'

import { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { gsap } from 'gsap'

// Predefined positions for floating shapes to avoid hydration errors
const floatingShapes = [
    { size: 200, left: '10%', top: '20%', animateX: 50, animateY: 30, duration: 15 },
    { size: 150, left: '70%', top: '15%', animateX: -30, animateY: 50, duration: 18 },
    { size: 250, left: '25%', top: '60%', animateX: 40, animateY: -40, duration: 20 },
    { size: 180, left: '80%', top: '70%', animateX: -50, animateY: -30, duration: 17 },
    { size: 220, left: '40%', top: '30%', animateX: -40, animateY: 40, duration: 19 }
]

export default function Hero() {
    const containerRef = useRef<HTMLDivElement>(null)

    const [isClient, setIsClient] = useState(false)

    useEffect(() => {
        setIsClient(true)
    }, [])

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.to('.gradient-bg', {
                backgroundPosition: '200% center',
                duration: 15,
                repeat: -1,
                ease: 'none'
            })
        }, containerRef)

        return () => ctx.revert()
    }, [])

    return (
        <div ref={containerRef} className="relative min-h-screen flex items-center justify-center overflow-hidden">
            {/* Animated gradient background */}
            <div className="gradient-bg absolute inset-0 bg-gradient-to-r from-blue-600 via-indigo-500 to-blue-600 opacity-10"
                style={{ backgroundSize: '200% 100%' }} />

            {/* Animated shapes */}
            <div className="absolute inset-0 overflow-hidden">
                {floatingShapes.map((shape, i) => (
                    <motion.div
                        key={i}
                        className="absolute rounded-full bg-indigo-600/10"
                        style={{
                            width: shape.size,
                            height: shape.size,
                            left: shape.left,
                            top: shape.top,
                        }}
                        animate={{
                            x: [0, shape.animateX],
                            y: [0, shape.animateY],
                            scale: [1, 1.2],
                        }}
                        transition={{
                            duration: shape.duration,
                            repeat: Infinity,
                            repeatType: "reverse",
                            ease: "easeInOut",
                        }}
                    />
                ))}
            </div>

            {/* Content */}
            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-center"
                >
                    <motion.div
                        initial={{ scale: 0.9, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="mb-8"
                    >
                        <h2 className="text-2xl md:text-3xl font-medium text-indigo-600 mb-4">
                            Full Stack Developer
                        </h2>
                        <h1 className="text-5xl md:text-7xl mb-[40px] font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-blue-500 mb-6">
                            Crafting Digital Excellence
                        </h1>
                        <p className="text-xl md:text-2xl text-gray-400 max-w-3xl mx-auto">
                            Specializing in MERN Stack | AI Development | Blockchain Solutions
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        className="flex flex-col sm:flex-row gap-4 justify-center mt-12"
                    >
                        <Link
                            href="#projects"
                            className="px-8 py-4 bg-indigo-600 text-white rounded-full font-medium hover:bg-indigo-700 transition-colors transform hover:scale-105 duration-200 shadow-lg hover:shadow-xl"
                        >
                            View Projects
                        </Link>
                        <Link
                            href="#contact"
                            className="px-8 py-4 border-2 border-indigo-600 text-indigo-600 rounded-full font-medium hover:bg-indigo-50 transition-colors transform hover:scale-105 duration-200"
                        >
                            Let's Connect
                        </Link>
                    </motion.div>

                    {/* Tech stack */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.8, delay: 0.6 }}
                        className="mt-16 flex flex-wrap justify-center gap-4 text-gray-600"
                    >
                        {[
                            'React',
                            'Node.js',
                            'MongoDB',
                            'Express',
                            'TypeScript',
                            'AI',
                            'Blockchain'
                        ].map((tech, index) => (
                            <motion.span
                                key={tech}
                                className="px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full shadow-sm"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
                            >
                                {tech}
                            </motion.span>
                        ))}
                    </motion.div>
                </motion.div>

                {/* Scroll indicator */}
                <motion.div
                    className="absolute mt-[140px] left-1/2 transform -translate-x-1/2"
                    animate={{
                        y: [0, 10, 0],
                    }}
                    transition={{
                        duration: 1.5,
                        repeat: Infinity,
                        repeatType: "reverse",
                    }}
                >
                    <div className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center">
                        <div className="w-1 h-3 bg-gray-400 rounded-full mt-2" />
                    </div>
                </motion.div>
            </div>
        </div>
    )
}