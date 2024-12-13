"use client"

import { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'

const ParticleBackground = () => {
    const canvasRef = useRef(null)
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
    const particlesRef = useRef([])
    const animationFrameRef = useRef()
    const [isClient, setIsClient] = useState(false)

    useEffect(() => {
        setIsClient(true)
    }, [])

    useEffect(() => {
        const canvas = canvasRef.current
        const ctx = canvas.getContext('2d')
        let width = window.innerWidth
        let height = window.innerHeight

        // Set canvas size
        const updateSize = () => {
            width = window.innerWidth
            height = window.innerHeight
            canvas.width = width
            canvas.height = height
        }
        updateSize()
        window.addEventListener('resize', updateSize)

        // Particle class
        class Particle {
            constructor(x, y) {
                this.x = x
                this.y = y
                this.size = Math.random() * 2 + 1
                this.baseX = this.x
                this.baseY = this.y
                this.density = Math.random() * 30 + 1
                this.color = `rgba(99, 102, 241, ${Math.random() * 0.5 + 0.2})`
            }

            draw() {
                ctx.beginPath()
                ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2)
                ctx.fillStyle = this.color
                ctx.fill()

                // Draw connections
                for (let i = 0; i < particlesRef.current.length; i++) {
                    const dx = this.x - particlesRef.current[i].x
                    const dy = this.y - particlesRef.current[i].y
                    const distance = Math.sqrt(dx * dx + dy * dy)

                    if (distance < 100) {
                        ctx.beginPath()
                        ctx.strokeStyle = `rgba(99, 102, 241, ${0.1 * (1 - distance / 100)})`
                        ctx.lineWidth = 0.5
                        ctx.moveTo(this.x, this.y)
                        ctx.lineTo(particlesRef.current[i].x, particlesRef.current[i].y)
                        ctx.stroke()
                    }
                }
            }

            update() {
                const dx = mousePosition.x - this.x
                const dy = mousePosition.y - this.y
                const distance = Math.sqrt(dx * dx + dy * dy)
                const forceDirectionX = dx / distance
                const forceDirectionY = dy / distance
                const maxDistance = 100
                const force = (maxDistance - distance) / maxDistance

                if (distance < maxDistance) {
                    this.x -= forceDirectionX * force * this.density
                    this.y -= forceDirectionY * force * this.density
                } else {
                    if (this.x !== this.baseX) {
                        const dx = this.x - this.baseX
                        this.x -= dx / 10
                    }
                    if (this.y !== this.baseY) {
                        const dy = this.y - this.baseY
                        this.y -= dy / 10
                    }
                }
            }
        }

        // Initialize particles
        const initParticles = () => {
            particlesRef.current = []
            const numberOfParticles = (width * height) / 9000
            for (let i = 0; i < numberOfParticles; i++) {
                const x = Math.random() * width
                const y = Math.random() * height
                particlesRef.current.push(new Particle(x, y))
            }
        }
        initParticles()

        // Animation loop
        const animate = () => {
            ctx.clearRect(0, 0, width, height)
            particlesRef.current.forEach(particle => {
                particle.update()
                particle.draw()
            })
            animationFrameRef.current = requestAnimationFrame(animate)
        }
        animate()

        // Mouse move handler
        const handleMouseMove = (e) => {
            setMousePosition({ x: e.x, y: e.y })
        }
        window.addEventListener('mousemove', handleMouseMove)

        return () => {
            window.removeEventListener('resize', updateSize)
            window.removeEventListener('mousemove', handleMouseMove)
            cancelAnimationFrame(animationFrameRef.current)
        }
    }, [])

    return (
        <canvas
            ref={canvasRef}
            className="fixed inset-0 w-full h-full pointer-events-none z-0"
            style={{ background: 'rgba(0, 0, 0, 0.9)' }}
        />
    )
}

export default ParticleBackground