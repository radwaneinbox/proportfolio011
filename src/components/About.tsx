import { motion } from 'framer-motion';

export default function About() {
  return (
    <section id="about" className="py-20 bg-gray-900">
      <div className="max-w-6xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid md:grid-cols-2 gap-12 items-center"
        >
          <div className="relative">
            <motion.img
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
              src="https://media.licdn.com/dms/image/v2/D4E03AQHpOZPVmEouAA/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1730480292291?e=1746662400&v=beta&t=Y5zI3H2XtqLjnU0QtoWRmbV6M2q5TLCbZ4q4wO3tXmY"
              alt="Profile"
              className="rounded-lg shadow-2xl"
            />
          </div>
          
          <div className="text-white">
            <motion.h2
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-4xl font-bold mb-6"
            >
              About Me
            </motion.h2>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="space-y-4 text-gray-300"
            >
              <p>
                As a frontend developer with one year of experience, I've developed a strong foundation in creating responsive and user-friendly web applications. My journey in tech began with a passion for creating beautiful and functional user interfaces.
              </p>
              <p>
                Currently, I'm expanding my skills through the ALX program, where I'm learning advanced software engineering concepts and best practices. This combination of practical experience and continuous learning allows me to bring fresh perspectives to every project.
              </p>
              <p>
                I specialize in modern frontend technologies and take pride in writing clean, maintainable code that delivers exceptional user experiences.
              </p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}