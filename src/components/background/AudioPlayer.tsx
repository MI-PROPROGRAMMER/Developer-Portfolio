// src/components/background/AudioPlayer.tsx
'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export default function AudioPlayer() {
    const [isPlaying, setIsPlaying] = useState(true)
    const [audio] = useState(new Audio('/music/Podcast_about_Muhammad_Ismaeel_(Me).mp3'))

    useEffect(() => {
        // Setup audio
        audio.loop = true
        audio.volume = 0.3

        // Play immediately
        const playAudio = () => {
            audio.play().catch(() => setIsPlaying(false))
        }

        playAudio()

        // Cleanup
        return () => {
            audio.pause()
            audio.currentTime = 0
        }
    }, [audio])

    const togglePlay = () => {
        if (isPlaying) {
            audio.pause()
        } else {
            audio.play()
        }
        setIsPlaying(!isPlaying)
    }

    // Add this script to the page
    return (
            <motion.button
            onClick={togglePlay}
                className="fixed bottom-8 right-8 z-50 group"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1 }}
            >
                <div className="relative w-16 h-16">
                    {/* Outer glow */}
                    <div className="absolute inset-0 rounded-full bg-cyan-500 opacity-20 blur-xl group-hover:opacity-30 transition-opacity duration-300" />

                    {/* Neon circles */}
                    <div className="absolute inset-0">
                        <svg className="w-full h-full" viewBox="0 0 100 100">
                            {/* Outer circle */}
                            <circle
                                cx="50"
                                cy="50"
                                r="45"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                className="text-cyan-400"
                                strokeDasharray="283"
                                strokeDashoffset="0"
                            >
                                <animate
                                    attributeName="stroke-dashoffset"
                                    values="0;283;0"
                                    dur="3s"
                                    repeatCount="indefinite"
                                />
                            </circle>

                            {/* Inner circle */}
                            <circle
                                cx="50"
                                cy="50"
                                r="35"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                className="text-cyan-400"
                                strokeDasharray="220"
                                strokeDashoffset="0"
                            >
                                <animate
                                    attributeName="stroke-dashoffset"
                                    values="0;-220;0"
                                    dur="3s"
                                    repeatCount="indefinite"
                                />
                            </circle>
                        </svg>
                    </div>

                    {/* Play/Pause icon */}
                    <div className="absolute inset-0 flex items-center justify-center">
                        <AnimatePresence mode="wait">
                            {isPlaying ? (
                                <motion.div
                                    key="pause"
                                    initial={{ scale: 0 }}
                                    animate={{ scale: 1 }}
                                    exit={{ scale: 0 }}
                                    className="relative"
                                >
                                    <div className="flex gap-2">
                                        <div className="w-2 h-8 bg-cyan-400 rounded-sm shadow-[0_0_10px_#22d3ee]" />
                                        <div className="w-2 h-8 bg-cyan-400 rounded-sm shadow-[0_0_10px_#22d3ee]" />
                                    </div>
                                </motion.div>
                            ) : (
                                <motion.div
                                    key="play"
                                    initial={{ scale: 0 }}
                                    animate={{ scale: 1 }}
                                    exit={{ scale: 0 }}
                                    className="relative w-0 h-0 border-l-[20px] border-l-cyan-400 border-y-[12px] border-y-transparent ml-2"
                                    style={{
                                        filter: 'drop-shadow(0 0 10px #22d3ee)',
                                    }}
                                />
                            )}
                        </AnimatePresence>
                    </div>

                    {/* Moving light effect */}
                    <div
                        className="absolute inset-0 rounded-full"
                        style={{
                            background: 'linear-gradient(45deg, transparent, rgba(34, 211, 238, 0.3), transparent)',
                            animation: 'rotate 2s linear infinite',
                        }}
                    />
                </div>

                {/* Tooltip */}
                <span className="absolute right-full mr-4 top-1/2 -translate-y-1/2 px-3 py-1 bg-gray-900/90 text-cyan-400 text-sm rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap pointer-events-none">
                    {isPlaying ? 'Pause' : 'Learn About Ismaeel'}
                </span>
            </motion.button>
    )
}