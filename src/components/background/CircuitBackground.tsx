// src/components/background/CircuitBackground.tsx
'use client'

import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const generateCircuitPaths = () => {
    const paths = []
    const gridSize = 50

    for (let i = 0; i < 20; i++) {
        const startX = Math.floor(Math.random() * gridSize) * 20
        const startY = Math.floor(Math.random() * gridSize) * 20

        let path = `M ${startX} ${startY} `
        let currentX = startX
        let currentY = startY

        // Generate random path segments
        for (let j = 0; j < 4; j++) {
            const direction = Math.floor(Math.random() * 4)
            const length = Math.random() * 100 + 50

            switch (direction) {
                case 0: // Right
                    currentX += length
                    path += `h ${length} `
                    break
                case 1: // Down
                    currentY += length
                    path += `v ${length} `
                    break
                case 2: // Diagonal down-right
                    currentX += length
                    currentY += length
                    path += `l ${length} ${length} `
                    break
                case 3: // Curved
                    path += `q ${length} 0 ${length} ${length} `
                    currentX += length
                    currentY += length
                    break
            }
        }

        paths.push(path)
    }

    return paths
}

export default function CircuitBackground() {
    const svgRef = useRef<SVGSVGElement>(null)

    useEffect(() => {
        const paths = svgRef.current?.querySelectorAll('.circuit-path')

        paths?.forEach((path) => {
            // Get path length for animation
            const length = (path as SVGPathElement).getTotalLength()

            // Set up initial state
            gsap.set(path, {
                strokeDasharray: length,
                strokeDashoffset: length,
            })

            // Animate path when it comes into view
            gsap.to(path, {
                strokeDashoffset: 0,
                duration: 2,
                ease: 'none',
                scrollTrigger: {
                    trigger: path,
                    start: 'top bottom',
                    end: 'bottom top',
                    scrub: 1,
                },
            })
        })
    }, [])

    return (
        <svg
            ref={svgRef}
            className="absolute inset-0 w-full h-full pointer-events-none opacity-20"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="xMidYMid slice"
        >
            <defs>
                <filter id="glow">
                    <feGaussianBlur stdDeviation="2" result="coloredBlur" />
                    <feMerge>
                        <feMergeNode in="coloredBlur" />
                        <feMergeNode in="SourceGraphic" />
                    </feMerge>
                </filter>
            </defs>

            {generateCircuitPaths().map((path, index) => (
                <path
                    key={index}
                    className="circuit-path"
                    d={path}
                    fill="none"
                    stroke={`rgba(99, 102, 241, ${0.2 + Math.random() * 0.3})`}
                    strokeWidth={1 + Math.random()}
                    filter="url(#glow)"
                />
            ))}
        </svg>
    )
}