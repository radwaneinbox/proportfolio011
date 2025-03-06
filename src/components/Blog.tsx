import { motion } from 'framer-motion';
import { Calendar, Clock, ArrowRight } from 'lucide-react';

const posts = [
  {
    title: 'The Future of Web Development',
    excerpt: 'Exploring upcoming trends and technologies in web development for 2025 and beyond.',
    date: 'Mar 15, 2025',
    readTime: '5 min read',
    image: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&q=80',
    link: '#'
  },
  {
    title: 'Mastering React Performance',
    excerpt: 'Tips and tricks for optimizing your React applications for better performance.',
    date: 'Mar 10, 2025',
    readTime: '7 min read',
    image: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?auto=format&fit=crop&q=80',
    link: '#'
  },
  {
    title: 'UI/UX Design Principles',
    excerpt: 'Essential design principles every frontend developer should know.',
    date: 'Mar 5, 2025',
    readTime: '6 min read',
    image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&q=80',
    link: '#'
  }
];

export default function Blog() {
  return (
    <section id="blog" className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-white mb-4">Latest Articles</h2>
          <p className="text-gray-400 text-lg">
            Insights and thoughts on web development and design
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post, index) => (
            <motion.article
              key={post.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-gray-800 rounded-lg overflow-hidden group"
            >
              <div className="relative">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 to-transparent" />
              </div>
              
              <div className="p-6">
                <div className="flex items-center gap-4 text-sm text-gray-400 mb-3">
                  <span className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    {post.date}
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    {post.readTime}
                  </span>
                </div>
                
                <h3 className="text-xl font-semibold text-white mb-2">
                  {post.title}
                </h3>
                <p className="text-gray-400 mb-4">
                  {post.excerpt}
                </p>
                
                <a
                  href={post.link}
                  className="inline-flex items-center text-blue-400 hover:text-blue-300 transition-colors"
                >
                  Read More
                  <ArrowRight className="w-4 h-4 ml-2" />
                </a>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}