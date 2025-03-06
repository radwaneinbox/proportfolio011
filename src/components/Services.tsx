import { motion } from 'framer-motion';
import { Code2, Layout, Smartphone, Palette, Gauge, Globe } from 'lucide-react';

const services = [
  {
    icon: Code2,
    title: 'Web Development',
    description: 'Building responsive and dynamic websites using modern technologies and best practices.'
  },
  {
    icon: Layout,
    title: 'UI/UX Design',
    description: 'Creating intuitive and visually appealing user interfaces that enhance user experience.'
  },
  {
    icon: Smartphone,
    title: 'Mobile-First Design',
    description: 'Ensuring your website looks and functions perfectly on all devices and screen sizes.'
  },
  {
    icon: Palette,
    title: 'Brand Identity',
    description: 'Developing cohesive visual identities that reflect your brand\'s values and mission.'
  },
  {
    icon: Gauge,
    title: 'Performance Optimization',
    description: 'Optimizing website performance for faster loading times and better user experience.'
  },
  {
    icon: Globe,
    title: 'SEO Integration',
    description: 'Implementing SEO best practices to improve your website\'s visibility in search results.'
  }
];

export default function Services() {
  return (
    <section id="services" className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-4xl font-bold text-white mb-4"
          >
            Services
          </motion.h2>
          <p className="text-gray-400 text-lg">
            Comprehensive solutions for your digital needs
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-gray-800 rounded-lg p-6 hover:bg-gray-700 transition-colors"
            >
              <service.icon className="w-12 h-12 text-blue-500 mb-4" />
              <h3 className="text-xl font-semibold text-white mb-3">
                {service.title}
              </h3>
              <p className="text-gray-400">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}