// src/components/ui/InteractiveCard.tsx
'use client'

import { useState, useRef, useEffect } from 'react'
import { motion } from 'framer-motion'

interface InteractiveCardProps {
    children: React.ReactNode;
    className?: string;
    glowColor?: string;
}

export default function InteractiveCard({
    children,
    className = '',
    glowColor = 'rgba(99, 102, 241, 0.15)'
}: InteractiveCardProps) {
    const cardRef = useRef<HTMLDivElement>(null)
    const [rotation, setRotation] = useState({ x: 0, y: 0 })
    const [isHovered, setIsHovered] = useState(false)

    const [isClient, setIsClient] = useState(false)

    useEffect(() => {
        setIsClient(true)
    }, [])

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        if (!cardRef.current) return

        const rect = cardRef.current.getBoundingClientRect()
        const centerX = rect.left + rect.width / 2
        const centerY = rect.top + rect.height / 2

        const rotateY = ((e.clientX - centerX) / (rect.width / 2)) * 10
        const rotateX = -((e.clientY - centerY) / (rect.height / 2)) * 10

        setRotation({ x: rotateX, y: rotateY })
    }

    const handleMouseLeave = () => {
        setRotation({ x: 0, y: 0 })
        setIsHovered(false)
    }

    return (
        <motion.div
            ref={cardRef}
            className={`transform-gpu transition-transform duration-200 ${className}`}
            onMouseMove={handleMouseMove}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={handleMouseLeave}
            animate={{
                rotateX: rotation.x,
                rotateY: rotation.y,
                scale: isHovered ? 1.02 : 1,
            }}
            style={{
                transformStyle: 'preserve-3d',
            }}
        >
            {/* Glow Effect */}
            <div
                className="absolute -inset-0.5 rounded-2xl opacity-0 transition-opacity duration-300"
                style={{
                    background: glowColor,
                    filter: 'blur(20px)',
                    transform: 'translateZ(-1px)',
                    opacity: isHovered ? 0.7 : 0
                }}
            />

            {/* Content */}
            <div
                className="relative bg-gray-900/50 backdrop-blur-sm rounded-2xl border border-gray-800/50 overflow-hidden"
                style={{
                    transform: 'translateZ(50px)',
                }}
            >
                {children}
            </div>
        </motion.div>
    )
}