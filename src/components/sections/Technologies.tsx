// // src/components/sections/Technologies.tsx

// // Version 1.0

// 'use client'

// import { useEffect, useRef, useState } from 'react'
// import { motion, useScroll, useTransform } from 'framer-motion'
// import CircuitBackground from '../background/CircuitBackground'

// interface Technology {
//   name: string
//   category: string
//   proficiency: number
//   icon: string
// }

// const technologies: Technology[] = [
//   // Frontend
//   { name: 'React', category: 'Frontend', proficiency: 95, icon: '⚛️' },
//   { name: 'Next.js', category: 'Frontend', proficiency: 90, icon: '▲' },
//   { name: 'TypeScript', category: 'Frontend', proficiency: 85, icon: '📘' },

//   // Backend
//   { name: 'Node.js', category: 'Backend', proficiency: 90, icon: '🟢' },
//   { name: 'Express', category: 'Backend', proficiency: 88, icon: '🚂' },
//   { name: 'MongoDB', category: 'Backend', proficiency: 85, icon: '🍃' },

//   // AI/ML
//   { name: 'TensorFlow', category: 'AI/ML', proficiency: 80, icon: '🧠' },
//   { name: 'Python', category: 'AI/ML', proficiency: 85, icon: '🐍' },

//   // Blockchain
//   { name: 'Solidity', category: 'Blockchain', proficiency: 82, icon: '⟠' },
//   { name: 'Web3.js', category: 'Blockchain', proficiency: 80, icon: '🔗' }
// ]

// export default function Technologies() {
//   const containerRef = useRef<HTMLDivElement>(null)
//   const { scrollYProgress } = useScroll({
//     target: containerRef,
//     offset: ['start end', 'end start']
//   })

//   const [isClient, setIsClient] = useState(false)

//   useEffect(() => {
//     setIsClient(true)
//   }, [])

//   return (
//     <section
//       ref={containerRef}
//       id="technologies"
//       className="relative min-h-screen py-20 bg-gray-900 text-white overflow-hidden"
//     >
//       {/* Animated Circuit Background */}
//       <CircuitBackground />

//       {/* Content */}
//       <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.8 }}
//           className="text-center mb-16"
//         >
//           <h2 className="text-4xl font-bold mb-4">Technical Expertise</h2>
//           <p className="text-gray-400 max-w-2xl mx-auto">
//             Leveraging cutting-edge technologies to build powerful, scalable solutions.
//           </p>
//         </motion.div>

//         {/* Technology Grid */}
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//           {technologies.map((tech, index) => (
//             <motion.div
//               key={tech.name}
//               initial={{ opacity: 0, scale: 0.9 }}
//               whileInView={{ opacity: 1, scale: 1 }}
//               viewport={{ once: true }}
//               transition={{ duration: 0.5, delay: index * 0.1 }}
//               className="relative group"
//             >
//               <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 hover:bg-gray-800/70 transition-all duration-300">
//                 <div className="flex items-center mb-4">
//                   <span className="text-2xl mr-3">{tech.icon}</span>
//                   <div>
//                     <h3 className="text-xl font-semibold">{tech.name}</h3>
//                     <span className="text-sm text-gray-400">{tech.category}</span>
//                   </div>
//                 </div>

//                 {/* Proficiency Bar */}
//                 <div className="relative h-2 bg-gray-700 rounded-full overflow-hidden">
//                   <motion.div
//                     className="absolute top-0 left-0 h-full bg-gradient-to-r from-blue-500 to-indigo-500"
//                     initial={{ width: 0 }}
//                     whileInView={{ width: `${tech.proficiency}%` }}
//                     viewport={{ once: true }}
//                     transition={{ duration: 1, delay: 0.5 + index * 0.1 }}
//                   />
//                 </div>
//                 <div className="mt-2 text-right text-sm text-gray-400">
//                   {tech.proficiency}%
//                 </div>

//                 {/* Hover Effect */}
//                 <div className="absolute inset-0 border-2 border-indigo-500/0 rounded-xl group-hover:border-indigo-500/50 transition-all duration-300" />
//               </div>
//             </motion.div>
//           ))}
//         </div>

//         {/* Additional Tech Categories */}
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.8, delay: 0.5 }}
//           className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
//         >
//           {['Development Tools', 'Cloud Services', 'Testing', 'DevOps'].map((category, index) => (
//             <div
//               key={category}
//               className="bg-gray-800/30 backdrop-blur-sm rounded-xl p-6 text-center"
//             >
//               <h4 className="text-lg font-semibold mb-2">{category}</h4>
//               <p className="text-gray-400 text-sm">
//                 Expert in industry-standard {category.toLowerCase()} and best practices
//               </p>
//             </div>
//           ))}
//         </motion.div>
//       </div>
//     </section>
//   )
// }


// Version 2.0


// src/components/sections/Technologies.tsx
'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import SectionWrapper from '../layout/SectionWrapper'

interface Technology {
  name: string;
  level: number;
  category: string;
}

const technologies: { category: string; items: Technology[] }[] = [
  {
    category: "Frontend Development",
    items: [
      { name: "React.js", level: 90, category: "Frontend" },
      { name: "Next.js", level: 85, category: "Frontend" },
      { name: "TypeScript", level: 85, category: "Frontend" },
      { name: "Tailwind CSS", level: 90, category: "Frontend" }
    ]
  },
  {
    category: "Backend Development",
    items: [
      { name: "Node.js", level: 88, category: "Backend" },
      { name: "Express.js", level: 85, category: "Backend" },
      { name: "MongoDB", level: 85, category: "Backend" },
      { name: "RESTful APIs", level: 90, category: "Backend" }
    ]
  },
  {
    category: "AI Development",
    items: [
      { name: "TensorFlow", level: 80, category: "AI" },
      { name: "Python", level: 85, category: "AI" },
      { name: "Machine Learning", level: 75, category: "AI" },
      { name: "Natural Language Processing", level: 78, category: "AI" }
    ]
  },
  {
    category: "Blockchain",
    items: [
      { name: "Solidity", level: 82, category: "Blockchain" },
      { name: "Web3.js", level: 80, category: "Blockchain" },
      { name: "Smart Contracts", level: 85, category: "Blockchain" },
      { name: "DApp Development", level: 78, category: "Blockchain" }
    ]
  }
]

export default function Technologies() {
  const [hoveredTech, setHoveredTech] = useState<string | null>(null)

  return (
    <SectionWrapper id="technologies" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-white mb-4">Technologies & Skills</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Proficient in a wide range of modern technologies, specializing in MERN stack,
            AI development, and blockchain solutions.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {technologies.map((techCategory, categoryIndex) => (
            <motion.div
              key={techCategory.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: categoryIndex * 0.2 }}
              className="bg-gray-900/50 backdrop-blur-sm rounded-xl p-6 border border-gray-800/50"
            >
              <h3 className="text-xl font-semibold text-white mb-6">{techCategory.category}</h3>
              <div className="space-y-6">
                {techCategory.items.map((tech, index) => (
                  <motion.div
                    key={tech.name}
                    onHoverStart={() => setHoveredTech(tech.name)}
                    onHoverEnd={() => setHoveredTech(null)}
                    className="relative"
                  >
                    <div className="flex justify-between mb-2">
                      <span className="text-gray-300">{tech.name}</span>
                      <span className="text-gray-400">{tech.level}%</span>
                    </div>
                    <div className="h-2 bg-gray-800 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${tech.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 0.5 + index * 0.1 }}
                        className="h-full rounded-full bg-gradient-to-r from-indigo-500 to-cyan-500"
                      />
                    </div>
                    {hoveredTech === tech.name && (
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="absolute -inset-0.5 bg-gradient-to-r from-indigo-500/20 to-cyan-500/20 rounded-lg blur"
                      />
                    )}
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Skills */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4"
        >
          {[
            "Git & Version Control",
            "CI/CD",
            "Docker",
            "AWS",
            "Testing",
            "Agile Development",
            "System Design",
            "Performance Optimization"
          ].map((skill) => (
            <div
              key={skill}
              className="bg-gray-900/30 backdrop-blur-sm rounded-lg p-4 text-center text-gray-400 hover:bg-gray-900/50 transition-colors"
            >
              {skill}
            </div>
          ))}
        </motion.div>
      </div>
    </SectionWrapper>
  )
}