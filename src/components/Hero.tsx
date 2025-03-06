import { motion } from 'framer-motion';
import { ArrowRight, Github, Mail } from 'lucide-react';

const textVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.3,
      duration: 0.8,
      ease: "easeOut"
    }
  })
};

const socialVariants = {
  hidden: { opacity: 0, scale: 0 },
  visible: (i: number) => ({
    opacity: 1,
    scale: 1,
    transition: {
      delay: 1.5 + (i * 0.1),
      duration: 0.3,
      type: "spring",
      stiffness: 200
    }
  })
};

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center bg-[url('https://cdn.pixabay.com/photo/2020/01/26/20/14/computer-4795762_1280.jpg')] bg-cover bg-center"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/70 to-black/80 backdrop-blur-sm" />

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={textVariants}
            custom={0}
            className="inline-block"
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-emerald-400 bg-clip-text text-transparent animate-gradient">
                Rdioane Khoubbane
              </span>
            </h1>
          </motion.div>

          <motion.div
            initial="hidden"
            animate="visible"
            variants={textVariants}
            custom={1}
          >
            <h2 className="text-2xl md:text-4xl font-light mb-8 text-gray-200">
              <span className="relative">
                Frontend Developer
                <motion.span
                  className="absolute -bottom-1 left-0 w-full h-0.5 bg-blue-400"
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ delay: 1.2, duration: 0.8 }}
                />
              </span>
              {" & "}
              <span className="relative">
                UI/UX Designer
                <motion.span
                  className="absolute -bottom-1 left-0 w-full h-0.5 bg-emerald-400"
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ delay: 1.4, duration: 0.8 }}
                />
              </span>
            </h2>
          </motion.div>

          <motion.p
            initial="hidden"
            animate="visible"
            variants={textVariants}
            custom={2}
            className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto mb-12 leading-relaxed"
          >
            Crafting exceptional digital experiences through modern web development
            and innovative design solutions.
          </motion.p>

          <motion.div
            initial="hidden"
            animate="visible"
            variants={textVariants}
            custom={3}
            className="flex flex-col sm:flex-row items-center justify-center gap-6"
          >
            <motion.a
              href="#projects"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="group relative px-8 py-3 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-full overflow-hidden shadow-lg hover:shadow-blue-500/25 transition-all duration-300"
            >
              <span className="absolute inset-0 bg-gradient-to-r from-blue-400 to-emerald-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <span className="relative flex items-center gap-2">
                View My Work
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </span>
            </motion.a>

            <div className="flex items-center gap-4">
              {[
                { icon: Github, href: "https://github.com/radwaneinbox?tab=repositories", label: "GitHub" },
                { icon: Mail, href: "mailto:redzmourine671@gmail.com", label: "Email" }
              ].map((social, index) => (
                <motion.a
                  key={social.label}
                  custom={index}
                  initial="hidden"
                  animate="visible"
                  variants={socialVariants}
                  whileHover={{ scale: 1.1, rotate: [0, -10, 10, 0] }}
                  whileTap={{ scale: 0.9 }}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-white/10 rounded-full hover:bg-white/20 transition-colors duration-300 backdrop-blur-sm"
                  aria-label={social.label}
                >
                  <social.icon className="w-6 h-6" />
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
