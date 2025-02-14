import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, ExternalLink, Code2, Palette, Lightbulb, ChevronDown, Blocks, FileCode, Zap, Braces, Sparkles, Star } from 'lucide-react';
import Navbar from './components/Navbar';
import ProjectCard from './components/ProjectCard';
import TechnologyBadge from './components/TechnologyBadge';

function App() {
  const technologies = [
    { name: 'React', icon: Blocks },
    { name: 'TypeScript', icon: Braces },
    { name: 'Vite', icon: Zap },
    { name: 'HTML5', icon: Code2 },
    { name: 'CSS3', icon: Palette },
    { name: 'JavaScript', icon: FileCode },
    { name: 'Tailwind CSS', icon: Palette },
  ];

  const projects = [
    {
      title: 'Bistrô Profano',
      description: 'Design and development of a modern restaurant website',
      image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&auto=format&fit=crop&q=60',
      link: '#'
    },
    {
      title: 'Posto Catitú',
      description: 'Branding and web design for a gas station chain',
      image: 'https://images.unsplash.com/photo-1545558014-8692077e9b5c?w=800&auto=format&fit=crop&q=60',
      link: '#'
    },
    {
      title: 'Alura/Google Gemini',
      description: 'AI-powered educational platform interface',
      image: 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=800&auto=format&fit=crop&q=60',
      link: '#'
    }
  ];

  return (
    <div className="min-h-screen bg-zinc-950 text-white">
      <Navbar />
      
      {/* Hero Section */}
      <motion.section 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="container mx-auto px-4 min-h-screen flex flex-col justify-center relative overflow-hidden"
      >
        {/* Background Elements */}
        <motion.div
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-purple-500/10 to-blue-500/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.1, 0.2, 0.1],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-r from-yellow-500/10 to-pink-500/10 rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.1, 0.2, 0.1],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />

        {/* Decorative Stars */}
        <motion.div className="absolute top-1/4 right-1/4">
          <motion.div
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.5, 1, 0.5],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            <Star className="w-6 h-6 text-yellow-400" />
          </motion.div>
        </motion.div>
        <motion.div className="absolute bottom-1/3 left-1/3">
          <motion.div
            animate={{
              scale: [1.2, 1, 1.2],
              opacity: [0.5, 1, 0.5],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            <Sparkles className="w-8 h-8 text-blue-400" />
          </motion.div>
        </motion.div>

        <div className="relative z-10 max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mb-8"
          >
            <motion.span 
              className="inline-block text-xl md:text-2xl text-zinc-400 mb-4"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1 }}
            >
              Hello, I'm Tarcio 👋
            </motion.span>
          </motion.div>

          <motion.h1 
            className="text-6xl md:text-8xl font-bold mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            <span className="gradient-text">Designer &</span>
            <br />
            <span className="relative inline-block mt-2">
              <span className="gradient-text">Creative Director</span>
              <motion.div
                className="absolute -right-12 top-0"
                animate={{ rotate: [0, 10, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <Sparkles className="w-8 h-8 text-yellow-400" />
              </motion.div>
            </span>
          </motion.h1>

          <motion.p 
            className="text-xl md:text-2xl text-zinc-400 max-w-2xl mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            Creating exceptional digital experiences through innovative design and creative direction since 2020.
          </motion.p>

          <motion.div 
            className="flex flex-wrap gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            <motion.a 
              href="#contact"
              className="group relative px-8 py-4 rounded-full overflow-hidden bg-gradient-to-r from-white to-zinc-200"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="relative z-10 text-black font-medium">Get in touch</span>
              <motion.div 
                className="absolute inset-0 bg-gradient-to-r from-zinc-200 to-white opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              />
            </motion.a>
            <motion.a 
              href="#work"
              className="group relative px-8 py-4 rounded-full overflow-hidden border border-white/20"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="relative z-10 font-medium">View work</span>
              <motion.div 
                className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              />
            </motion.a>
          </motion.div>
        </div>

        <motion.div 
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 floating"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
        >
          <ChevronDown className="w-6 h-6 text-white/50" />
        </motion.div>
      </motion.section>

      {/* About Section */}
      <section id="about" className="bg-zinc-900/50 py-20 relative overflow-hidden">
        <motion.div
          className="absolute inset-0 bg-gradient-to-b from-zinc-950 to-transparent"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        />
        <div className="container mx-auto px-4 relative">
          <motion.div 
            className="max-w-3xl mx-auto text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold mb-6 gradient-text">About Me</h2>
            <p className="text-xl text-zinc-400 mb-8 leading-relaxed">
              I'm a 22-year-old Brazilian designer and creative director passionate about creating meaningful digital experiences. 
              Specializing in Web & Mobile Experiences, User-Centered Design, and Identity & Strategy.
            </p>
            <div className="flex justify-center gap-6">
              <motion.a 
                href="https://github.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="p-3 hover:text-white/80 transition-colors hover-glow"
                whileHover={{ scale: 1.1 }}
              >
                <Github className="w-7 h-7" />
              </motion.a>
              <motion.a 
                href="https://linkedin.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="p-3 hover:text-white/80 transition-colors hover-glow"
                whileHover={{ scale: 1.1 }}
              >
                <Linkedin className="w-7 h-7" />
              </motion.a>
              <motion.a 
                href="mailto:contact@example.com" 
                className="p-3 hover:text-white/80 transition-colors hover-glow"
                whileHover={{ scale: 1.1 }}
              >
                <Mail className="w-7 h-7" />
              </motion.a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Work Section */}
      <section id="work" className="py-20">
        <div className="container mx-auto px-4">
          <motion.h2 
            className="text-4xl font-bold mb-12 text-center gradient-text"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Recent Projects
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <ProjectCard key={index} {...project} />
            ))}
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="bg-zinc-900/50 py-20 relative overflow-hidden">
        <motion.div
          className="absolute inset-0 bg-gradient-to-b from-transparent via-zinc-900/50 to-transparent"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        />
        <div className="container mx-auto px-4 relative">
          <motion.h2 
            className="text-4xl font-bold mb-12 text-center gradient-text"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Technologies
          </motion.h2>
          <div className="tech-grid">
            {technologies.map((tech, index) => (
              <TechnologyBadge key={index} name={tech.name} Icon={tech.icon} />
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 relative overflow-hidden">
        <motion.div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-white/5 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.1, 0.2, 0.1],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <div className="container mx-auto px-4 text-center relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold mb-6 gradient-text">Let's Work Together</h2>
            <p className="text-xl text-zinc-400 mb-8 max-w-2xl mx-auto">
              Have a project in mind? I'd love to help bring your ideas to life. Let's create something amazing together.
            </p>
            <motion.a 
              href="mailto:contact@example.com"
              className="inline-flex items-center gap-2 bg-white text-black px-8 py-4 rounded-full font-medium hover:bg-zinc-200 transition-all duration-300 hover:shadow-lg hover:shadow-white/10"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Mail className="w-5 h-5" />
              Get in Touch
            </motion.a>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

export default App;