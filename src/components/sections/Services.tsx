// src/components/sections/Services.tsx
'use client'

import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

const services = [
  {
    title: 'MERN Stack Development',
    description: 'End-to-end web applications using MongoDB, Express.js, React, and Node.js. Specializing in scalable, responsive, and performant solutions.',
    features: [
      'Custom Web Applications',
      'RESTful API Development',
      'Real-time Applications',
      'Database Design & Optimization'
    ],
    gradient: 'from-indigo-600 to-blue-600',
    glowColor: 'rgba(79, 70, 229, 0.2)'
  },
  {
    title: 'AI Development',
    description: 'Cutting-edge artificial intelligence solutions integrating machine learning models with web applications for intelligent automation.',
    features: [
      'Machine Learning Integration',
      'Natural Language Processing',
      'Computer Vision Solutions',
      'Predictive Analytics'
    ],
    gradient: 'from-violet-600 to-indigo-600',
    glowColor: 'rgba(124, 58, 237, 0.2)'
  },
  {
    title: 'Blockchain Development',
    description: 'Secure and decentralized blockchain solutions, from smart contracts to full-scale DApps using the latest Web3 technologies.',
    features: [
      'Smart Contract Development',
      'DApp Creation',
      'Web3 Integration',
      'Cryptocurrency Solutions'
    ],
    gradient: 'from-blue-600 to-violet-600',
    glowColor: 'rgba(37, 99, 235, 0.2)'
  }
]

export default function Services() {
  const [hoveredService, setHoveredService] = useState<number | null>(null)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
  }, [])

  return (
    <section ref={ref} id="services" className="min-h-screen py-20 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-white mb-4">Services & Expertise</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Delivering cutting-edge solutions across the technology spectrum, from web development to AI integration and blockchain innovation.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              onHoverStart={() => setHoveredService(index)}
              onHoverEnd={() => setHoveredService(null)}
              className="relative group"
            >
              {/* Glow Effect */}
              <div
                className="absolute inset-0 rounded-2xl transition-all duration-300"
                style={{
                  background: service.glowColor,
                  filter: 'blur(40px)',
                  opacity: hoveredService === index ? 0.4 : 0.1
                }}
              />

              {/* Card Content */}
              <div className="relative bg-gray-900/50 backdrop-blur-sm rounded-2xl border border-gray-800 overflow-hidden">
                {/* Header */}
                <div className={`p-6 bg-gradient-to-r ${service.gradient}`}>
                  <h3 className="text-2xl font-bold text-white mb-2">
                    {service.title}
                  </h3>
                  <p className="text-white/90">
                    {service.description}
                  </p>
                </div>

                {/* Features */}
                <div className="p-6">
                  <ul className="space-y-3">
                    {service.features.map((feature, i) => (
                      <motion.li
                        key={feature}
                        initial={{ opacity: 0, x: -20 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.5, delay: index * 0.1 + i * 0.1 }}
                        className="flex items-center text-gray-300"
                      >
                        <svg
                          className={`w-5 h-5 mr-3 text-indigo-500`}
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
                        {feature}
                      </motion.li>
                    ))}
                  </ul>

                  {/* Learn More Button */}
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className={`w-full mt-6 py-3 px-4 rounded-lg bg-gradient-to-r ${service.gradient} text-white font-medium 
                      transition-all duration-300 hover:shadow-lg hover:shadow-indigo-500/20`}
                  >
                    Learn More
                  </motion.button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-center mt-16"
        >
          <p className="text-gray-400 mb-6">
            Looking for a custom solution? Let's discuss your project requirements.
          </p>
          <a
            href="#contact"
            className="inline-flex items-center px-8 py-3 rounded-full bg-gradient-to-r from-indigo-600 to-violet-600 
              text-white font-medium hover:shadow-lg hover:shadow-indigo-500/20 transition-all duration-300"
          >
            Get in Touch
          </a>
        </motion.div>
      </div>
    </section>
  )
}