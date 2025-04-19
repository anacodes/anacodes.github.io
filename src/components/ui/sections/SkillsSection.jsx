"use client"

import { motion } from "framer-motion"
import { skills } from "../../data";
import { Code } from "lucide-react";

function SkillsSection() {
    return (
      <div className="w-full max-w-4xl mx-auto px-8 py-12 md:py-0">
        <div className="max-w-3xl mx-auto mb-12 text-center">
          <h1 className="text-4xl font-bold tracking-tight mb-4">Skills</h1>
          <p className="text-muted-foreground">
            Hands-on expertise in diverse technologies.
          </p>
        </div>
        <div
        className={`grid grid-cols-1 md:grid-cols-2 gap-8 ${
          Object.keys(skills).length % 2 !== 0
            ? "md:[&>*:last-child]:col-span-2 md:[&>*:last-child]:mx-auto md:[&>*:last-child]:max-w-[calc(60%-1rem)]"
            : ""
        }`}
      >
          {Object.entries(skills).map(
            ([category, { icon, skills, connections }]) => (
              <motion.div
                key={category}
                className="relative border-2 border-gray-300 p-6 bg-white"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                whileHover={{ scale: 1.02 }}
              >
                <div className="absolute -top-3 left-4 bg-white px-2 font-mono text-sm">
                  {category}
                </div>

                {/* Network Graph */}
                {/* <svg className="absolute inset-0 w-full h-full pointer-events-none">
                  {connections.map(([x, y], i) => (
                    <motion.circle
                      key={i}
                      cx={`${x}%`}
                      cy={`${y}%`}
                      r="2"
                      className="fill-black"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: i * 0.1 }}
                    />
                  ))}
                  {connections.map(([x1, y1], i) => {
                    const [x2, y2] = connections[(i + 1) % connections.length];
                    return (
                      <motion.line
                        key={i}
                        x1={`${x1}%`}
                        y1={`${y1}%`}
                        x2={`${x2}%`}
                        y2={`${y2}%`}
                        className="stroke-black stroke-[0.5]"
                        initial={{ pathLength: 0 }}
                        animate={{ pathLength: 1 }}
                        transition={{ duration: 1, delay: i * 0.2 }}
                      />
                    );
                  })}
                </svg> */}

                {/* Skills List */}
                <div className="relative z-10">
                  <div className="flex items-center gap-2 mb-4">
                    {icon}
                    <h3 className="font-mono font-bold">{category}</h3>
                  </div>
                  <div className="ffont-mono text-sm grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-1">
                    {skills.map((skill) => (
                      <motion.div
                        key={skill}
                        className="flex items-center gap-2"
                        whileHover={{ x: 10 }}
                      >
                        <Code className="w-4 h-4" />
                        {skill}
                      </motion.div> 
                    ))}
                  </div>
                </div>
              </motion.div>
            )
          )}
        </div>
      </div>
    );
}

export {SkillsSection};
