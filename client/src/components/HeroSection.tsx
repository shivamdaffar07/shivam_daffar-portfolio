import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { staggerContainer, fadeIn } from '@/lib/animations';
import profileImage from './shivam.png'; // replace with your image later

const HeroSection = () => (
  <section
    id="home"
    className="min-h-screen flex items-center justify-center px-4 md:px-8 pt-24"
  >
    <motion.div
      className="container mx-auto section-transition"
      variants={staggerContainer}
      initial="hidden"
      animate="show"
    >
      <div className="flex flex-col-reverse md:flex-row items-center">
        
        {/* LEFT SIDE */}
        <motion.div
          className="md:w-1/2 mt-10 md:mt-0"
          variants={fadeIn('right', 'tween', 0.2, 1)}
        >
          <h2 className="text-xl md:text-2xl font-poppins mb-2 text-textSecondary">
            Hello, I'm
          </h2>

          <h1 className="text-5xl md:text-7xl font-poppins font-bold mb-4">
            <span className="gradient-text">Shivam Daffar</span>
          </h1>

          <h3 className="text-2xl md:text-3xl font-poppins mb-6 text-textSecondary">
            Software Engineer | Java Full Stack Developer
          </h3>

          <p className="text-textSecondary mb-8 max-w-xl text-lg leading-relaxed">
            Computer Science graduate focused on building scalable backend systems 
            and full-stack web applications. Strong in Java, DSA, and REST APIs.
          </p>

          <ActionButtons />
          <SocialLinks />
        </motion.div>

        {/* RIGHT SIDE IMAGE */}
        <motion.div
          className="md:w-1/2 flex justify-center items-center"
          variants={fadeIn('left', 'tween', 0.4, 1)}
        >
          <div className="w-60 shadow-xl">
            <img
              src={profileImage}
              alt="Profile"
              className="w-full h-auto object-cover"
            />
          </div>
        </motion.div>
      </div>
    </motion.div>
  </section>
);

// BUTTONS
const ActionButtons = () => (
  <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
    <a
      href="#contact"
      className="bg-accent hover:bg-accent/90 text-white font-poppins py-3 px-8 rounded-lg transition-colors text-center"
    >
      Contact Me
    </a>

    <a
      href="#projects"
      className="border-2 border-accent text-accent hover:bg-accent/10 font-poppins py-3 px-8 rounded-lg transition-colors text-center"
    >
      View Projects
    </a>
  </div>
);

// SOCIAL LINKS (cleaned)
const SocialLinks = () => (
  <div className="flex mt-10 space-x-6">
    <a
      href="https://github.com/shivamdaffar07"
      target="_blank"
      className="text-textSecondary hover:text-accent transition-colors"
    >
      <FaGithub className="text-2xl" />
    </a>

    <a
      href="https://www.linkedin.com/in/shivam-daffar-96868b19a"
      target="_blank"
      className="text-textSecondary hover:text-accent transition-colors"
    >
      <FaLinkedin className="text-2xl" />
    </a>
  </div>
);

export default HeroSection;