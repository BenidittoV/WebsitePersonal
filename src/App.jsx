import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Slider from 'react-slick';
import { FaLinkedin, FaInstagram, FaGithub, FaWhatsapp } from 'react-icons/fa';
import profileImage from './assets/Profile.jpg';
import ProjectImage1 from './assets/Project1.png';
import ProjectImage2 from './assets/Project2.png';
import ProjectImage3 from './assets/Project3.png';
import ProjectImage4 from './assets/Project4.png';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const App = () => {
  const projects = [
    {
      name: 'Reusemart',
      url: '',
      description: 'An online platform for buying and selling second-hand goods.',
      image: ProjectImage1,
      languages: ['React JS', 'Flutter', 'MySQL', 'Laravel'],
    },
    {
      name: 'IniHotel',
      url: '',
      description: 'A hotel booking website enabling users to search, compare, and reserve accommodations.',
      image: ProjectImage2,
      languages: ['Laravel', 'MySQL'],
    },
    {
      name: 'Atma Travel',
      url: '',
      description: 'A delivery application for managing and tracking shipments in real-time.',
      image: ProjectImage3,
      languages: ['Flutter', 'MySQL'],
    },
    {
      name: 'Image Mussroom Classification',
      url: '',
      description: 'A mushroom classification system powered by image recognition and machine learning.',
      image: ProjectImage4,
      languages: ['Python', 'CNN'],
    },
  ];

  const techStack = [
    { name: 'Kotlin', logo: 'https://cdn.jsdelivr.net/npm/devicon@2.15.1/icons/kotlin/kotlin-original.svg' },
    { name: 'Flutter', logo: 'https://cdn.jsdelivr.net/npm/devicon@2.15.1/icons/flutter/flutter-original.svg' },
    { name: 'Dart', logo: 'https://cdn.jsdelivr.net/npm/devicon@2.15.1/icons/dart/dart-original.svg' },
    { name: 'Android Studio', logo: 'https://cdn.jsdelivr.net/npm/devicon@2.15.1/icons/androidstudio/androidstudio-original.svg' },
    { name: 'HTML', logo: 'https://cdn.jsdelivr.net/npm/devicon@2.15.1/icons/html5/html5-original.svg' },
    { name: 'CSS', logo: 'https://cdn.jsdelivr.net/npm/devicon@2.15.1/icons/css3/css3-original.svg' },
    { name: 'JavaScript', logo: 'https://cdn.jsdelivr.net/npm/devicon@2.15.1/icons/javascript/javascript-original.svg' },
    { name: 'Bootstrap', logo: 'https://cdn.jsdelivr.net/npm/devicon@2.15.1/icons/bootstrap/bootstrap-original.svg' },
    { name: 'Tailwind', logo: 'https://cdn.jsdelivr.net/npm/devicon@2.15.1/icons/tailwindcss/tailwindcss-plain.svg' },
    { name: 'PHP', logo: 'https://cdn.jsdelivr.net/npm/devicon@2.15.1/icons/php/php-original.svg' },
    { name: 'MySQL', logo: 'https://cdn.jsdelivr.net/npm/devicon@2.15.1/icons/mysql/mysql-original.svg' },
    { name: 'MongoDB', logo: 'https://cdn.jsdelivr.net/npm/devicon@2.15.1/icons/mongodb/mongodb-original.svg' },
    { name: 'C', logo: 'https://cdn.jsdelivr.net/npm/devicon@2.15.1/icons/c/c-original.svg' },
    { name: 'Java', logo: 'https://cdn.jsdelivr.net/npm/devicon@2.15.1/icons/java/java-original.svg' },
    { name: 'Git', logo: 'https://cdn.jsdelivr.net/npm/devicon@2.15.1/icons/git/git-original.svg' },
    { name: 'GitHub', logo: 'https://cdn.jsdelivr.net/npm/devicon@2.15.1/icons/github/github-original.svg' },
  ];

  // Animation variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
  };

  const staggerContainer = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  // Carousel settings
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 640,
        settings: { slidesToShow: 1 },
      },
    ],
  };

  return (
    <div className="min-h-screen bg-black text-white font-['Inter'] relative overflow-hidden">
      {/* Particle Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-950/30 to-black pointer-events-none">
        <div className="absolute inset-0 animate-pulse opacity-30 bg-[radial-gradient(circle,rgba(255,255,255,0.08)_1px,transparent_1px)] bg-[length:15px_15px]"></div>
      </div>

      {/* Header */}
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className="bg-black/60 backdrop-blur-md p-4 sticky top-0 z-20 border-b border-blue-800/20"
      >
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-semibold tracking-wide bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-blue-600">
            Beniditto Eka Viyantyo
          </h1>
          <nav className="space-x-5">
            {['about', 'projects', 'tech', 'contact'].map((section) => (
              <a
                key={section}
                href={`#${section}`}
                className="text-gray-400 hover:text-blue-400 transition duration-300 relative group"
              >
                {section.charAt(0).toUpperCase() + section.slice(1)}
                <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-blue-400 group-hover:w-full transition-all duration-300"></span>
              </a>
            ))}
          </nav>
        </div>
      </motion.header>

      {/* Hero Section with About Me */}
      <section id="about" className="container mx-auto py-16 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="md:w-1/2 text-left"
          >
            <h2 className="text-3xl md:text-4xl font-semibold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-blue-600">
              About Me
            </h2>
            <p className="text-lg mt-4 text-gray-300 max-w-md">
              I am Beniditto Eka Viyantyo, born in Palembang, South Sumatra. My passion lies in programming, spanning mobile and web development. Currently, I am pursuing a degree in Computer Science at Universitas Atma Jaya Yogyakarta, where I hone my skills to build innovative and impactful solutions.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="relative group"
          >
            <img
              src={profileImage}
              alt="Profile"
              className="w-56 md:w-72 object-cover border-2 border-blue-600/50 shadow-[0_0_15px_rgba(59,130,246,0.4)] group-hover:shadow-[0_0_25px_rgba(59,130,246,0.7)] transition duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-blue-800 opacity-0 group-hover:opacity-20 transition duration-500"></div>
          </motion.div>
        </div>
      </section>

      {/* Projects Section (Carousel) */}
      <section id="projects" className="py-16 relative z-10">
        <div className="container mx-auto">
          <motion.h3
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-3xl font-semibold text-center mb-10 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-blue-600"
          >
            My Projects
          </motion.h3>
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <Slider {...sliderSettings}>
              {projects.map((project, index) => (
                <motion.div
                  key={index}
                  variants={fadeInUp}
                  className="px-2"
                >
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="relative bg-gray-900/60 p-5 rounded-lg shadow-[0_0_10px_rgba(59,130,246,0.2)] hover:shadow-[0_0_20px_rgba(59,130,246,0.5)] transition duration-500 group overflow-hidden"
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-blue-800/10 opacity-0 group-hover:opacity-100 transition duration-500"></div>
                    <img
                      src={project.image}
                      alt={project.name}
                      className="sm:max-w-full object-cover rounded-md mb-4 relative z-10"
                    />
                    <h4 className="text-lg font-medium text-blue-400 relative z-10">{project.name}</h4>
                    <p className="text-gray-300 mt-2 relative z-10">{project.description}</p>
                    <p className="text-gray-400 mt-2 relative z-10">Languages: {project.languages.join(', ')}</p>
                  </a>
                </motion.div>
              ))}
            </Slider>
          </motion.div>
        </div>
      </section>

      {/* Tech Stack Section */}
      <section id="tech" className="py-16 bg-black/40 backdrop-blur-sm relative z-10">
        <div className="container mx-auto">
          <motion.h3
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-3xl font-semibold text-center mb-10 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-blue-600"
          >
            Tech Stack
          </motion.h3>
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="max-w-3xl mx-auto grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4"
          >
            {techStack.map((tech) => (
              <motion.div
                key={tech.name}
                variants={fadeInUp}
                className="flex flex-col items-center p-3 bg-gray-900/60 rounded-lg hover:shadow-[0_0_12px_rgba(59,130,246,0.4)] transition duration-300"
              >
                <img src={tech.logo} alt={tech.name} className="w-12 h-12 mb-2" />
                <span className="text-gray-300 text-sm">{tech.name}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Contact Me Section */}
      <section id="contact" className="py-16 relative z-10">
        <div className="container mx-auto">
          <motion.h3
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-3xl font-semibold text-center mb-10 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-blue-600"
          >
            Contact Me
          </motion.h3>
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="flex justify-center gap-6"
          >
            {[
              { icon: FaLinkedin, url: 'https://www.linkedin.com/in/beniditto-eka-viyantyo-4288b81a5?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app', name: 'LinkedIn' },
              { icon: FaInstagram, url: 'https://www.instagram.com/ditto_viyant/profilecard/?igsh=MTh6Y3c5ZHUzc2hrZA==', name: 'Instagram' },
              { icon: FaGithub, url: 'https://github.com/BenidittoV', name: 'Github' },
              { icon: FaWhatsapp, url: 'https://api.whatsapp.com/send/?phone=6285369406838&text&type=phone_number&app_absent=0', name: 'WhatsApp' },
            ].map((social) => (
              <motion.a
                key={social.name}
                variants={fadeInUp}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-blue-400 transition duration-300"
              >
                <social.icon className="w-8 h-8" />
              </motion.a>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black/60 backdrop-blur-md text-center p-5 border-t border-blue-800/20 relative z-10">
        <p className="text-gray-400">© 2025 Beniditto Eka Viyantyo. All rights reserved.</p>
      </footer>

      {/* Inline Google Fonts */}
      <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&display=swap" rel="stylesheet" />
    </div>
  );
};

export default App;
