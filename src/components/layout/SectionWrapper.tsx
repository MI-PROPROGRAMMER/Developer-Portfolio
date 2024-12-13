// src/components/layout/SectionWrapper.tsx
'use client'

import { motion } from 'framer-motion'

interface SectionWrapperProps {
    children: React.ReactNode;
    className?: string;
    id?: string;
}

export default function SectionWrapper({ children, className = '', id }: SectionWrapperProps) {
    return (
        <section id={id} className={`relative min-h-screen ${className}`}>
            {/* Top gradient overlay */}
            <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-black to-transparent z-10" />

            {/* Content */}
            <div className="relative z-20">
                {children}
            </div>

            {/* Bottom gradient overlay */}
            <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black to-transparent z-10" />
        </section>
    )
}