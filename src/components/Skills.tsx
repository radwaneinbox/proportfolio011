import { motion } from 'framer-motion';
import { Code2, Layout, Palette, Smartphone, Terminal, Workflow } from 'lucide-react';

const skills = [
  {
    icon: Code2,
    title: "Frontend Development",
    skills: ["HTML5", "CSS3", "JavaScript", "React"]
  },
  {
    icon: Layout,
    title: "UI Frameworks",
    skills: ["Tailwind CSS", "Sass", "Material-UI"]
  },
  {
    icon: Smartphone,
    title: "Responsive Design",
    skills: ["Mobile-First", "Cross-Browser", "Progressive Enhancement"]
  },
  {
    icon: Terminal,
    title: "Development Tools",
    skills: ["Git", "npm", "Webpack", "Vite"]
  },
  {
    icon: Workflow,
    title: "Best Practices",
    skills: ["Clean Code", "Performance", "SEO"]
  },
  {
    icon: Palette,
    title: "Design",
    skills: ["UI/UX Principles", "Color Theory", "Typography"]
  }
];

export default function Skills() {
  return (
    <section id="skills" className="py-20 bg-gray-800">
      <div className="max-w-6xl mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-4xl font-bold text-white text-center mb-16"
        >
          Skills & Expertise
        </motion.h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              className="bg-gray-900 p-6 rounded-lg"
            >
              <div className="flex items-center mb-4">
                <skill.icon className="w-6 h-6 text-blue-400 mr-3" />
                <h3 className="text-xl font-semibold text-white">{skill.title}</h3>
              </div>
              <ul className="space-y-2">
                {skill.skills.map((item) => (
                  <li key={item} className="text-gray-400">
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}