// src/components/sections/About.tsx
'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import SectionWrapper from '../layout/SectionWrapper'

const achievements = [
  {
    number: '5+',
    text: 'Years of Experience',
    description: 'In full-stack development'
  },
  {
    number: '50+',
    text: 'Projects Completed',
    description: 'Across various industries'
  },
  {
    number: '30+',
    text: 'Happy Clients',
    description: 'Worldwide collaboration'
  },
  {
    number: '15+',
    text: 'Tech Stack',
    description: 'Technologies mastered'
  }
]

const expertise = [
  {
    title: 'Full Stack Development',
    description: 'Building scalable web applications using modern technologies and best practices.',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
      </svg>
    )
  },
  {
    title: 'AI Development',
    description: 'Implementing machine learning solutions and intelligent automation systems.',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    )
  },
  {
    title: 'Blockchain Solutions',
    description: 'Developing decentralized applications and smart contracts.',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
      </svg>
    )
  }
]

export default function About() {
  return (
    <SectionWrapper id="about" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            A passionate Full Stack Developer with expertise in MERN Stack, AI Development, and Blockchain Solutions
          </p>
        </motion.div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Image Side */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="aspect-square relative rounded-2xl overflow-hidden bg-gradient-to-br from-indigo-500/10 to-cyan-500/10 backdrop-blur-sm border border-gray-800/50">
              <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/20 to-cyan-500/20" />
              <Image
                src="/images/profile.jpg" // Add your image
                alt="Profile"
                fill
                className="object-cover"
              />
            </div>

            {/* Floating card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="absolute -bottom-6 -right-6 bg-gray-900/90 backdrop-blur-sm rounded-xl p-4 border border-gray-800/50"
            >
              <p className="text-cyan-400 font-medium">Open to Work</p>
              <p className="text-gray-400 text-sm">Available for freelance</p>
            </motion.div>
          </motion.div>

          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-bold text-white">Building Digital Excellence</h3>
            <p className="text-gray-400">
              With over 5 years of experience in full-stack development, I specialize in creating robust and scalable web applications. My expertise spans across modern web technologies, artificial intelligence, and blockchain development.
            </p>
            <p className="text-gray-400">
              I'm passionate about turning complex problems into simple, beautiful, and intuitive solutions. When I'm not coding, I'm exploring new technologies or sharing knowledge with the developer community.
            </p>

            {/* Expertise Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8">
              {expertise.map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2 }}
                  className="p-4 bg-gray-900/50 backdrop-blur-sm rounded-xl border border-gray-800/50"
                >
                  <div className="text-cyan-400 mb-2">{item.icon}</div>
                  <h4 className="text-white font-medium mb-2">{item.title}</h4>
                  <p className="text-gray-400 text-sm">{item.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Achievements */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-20"
        >
          {achievements.map((achievement, index) => (
            <motion.div
              key={achievement.text}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="text-center p-6 bg-gray-900/50 backdrop-blur-sm rounded-xl border border-gray-800/50"
            >
              <div className="text-3xl font-bold bg-gradient-to-r from-indigo-400 to-cyan-400 bg-clip-text text-transparent mb-2">
                {achievement.number}
              </div>
              <div className="text-white font-medium mb-1">{achievement.text}</div>
              <div className="text-gray-400 text-sm">{achievement.description}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </SectionWrapper>
  )
}