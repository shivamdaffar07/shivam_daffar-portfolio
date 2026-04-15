import { motion } from 'framer-motion';
import {
  FaUserGraduate,
  FaMapMarkerAlt,
  FaLaptopCode,
  FaBriefcase,
  FaArrowRight,
} from 'react-icons/fa';
import { staggerContainer, fadeIn } from '@/lib/animations';

const AboutSection = () => {
  return (
    <section
      id="about"
      className="min-h-screen flex items-center py-20 px-4 md:px-8"
    >
      <motion.div
        className="container mx-auto section-transition"
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
      >
        <motion.div
          className="text-center mb-16"
          variants={fadeIn('up', 'tween', 0.1, 1)}
        >
          <h2 className="text-4xl md:text-5xl font-poppins font-bold mb-4">
            About <span className="gradient-text">Me</span>
          </h2>
          <p className="text-textSecondary mt-4 max-w-2xl mx-auto text-lg">
            Get to know more about my background and skills
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {/* MAIN DESCRIPTION */}
          <motion.div
            className="mb-12 text-center"
            variants={fadeIn('up', 'tween', 0.2, 1)}
          >
            <p className="text-textSecondary text-xl leading-relaxed mb-8">
              I'm a{' '}
              <span className="text-accent font-medium">
                Computer Science graduate
              </span>{' '}
              with a strong focus on backend development and problem-solving.
              I have hands-on experience building real-world projects using{' '}
              <span className="text-accent font-medium">Java</span>,{' '}
              <span className="text-accent font-medium">Spring Boot</span>, and{' '}
              <span className="text-accent font-medium">REST APIs</span>.
            </p>

            <p className="text-textSecondary text-xl leading-relaxed">
              I have solved 200+ DSA problems and built projects like YouTube
              sentiment analysis and full-stack applications. Currently looking
              for an opportunity as a{' '}
              <span className="text-accent font-medium">
                Software Engineer
              </span>{' '}
              where I can contribute and grow.
            </p>
          </motion.div>

          {/* INFO CARDS */}
          <motion.div
            className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12"
            variants={fadeIn('up', 'tween', 0.3, 1)}
          >
            <div className="bg-cardBg p-6 rounded-xl shadow-lg border border-gray-800 hover:border-accent/30 transition-all">
              <h4 className="font-poppins font-semibold mb-3 flex items-center text-lg">
                <FaUserGraduate className="text-accent mr-3 text-xl" />
                Education
              </h4>
             <p className="text-textSecondary text-sm leading-relaxed">
  B.E. in Computer Science Engineering <br />
  Prof. Ram Meghe College of Engineering & Management, Badnera
</p>
            </div>

            <div className="bg-cardBg p-6 rounded-xl shadow-lg border border-gray-800 hover:border-accent/30 transition-all">
              <h4 className="font-poppins font-semibold mb-3 flex items-center text-lg">
                <FaMapMarkerAlt className="text-accent mr-3 text-xl" />
                Location
              </h4>
              <p className="text-textSecondary">Maharashtra, India</p>
            </div>

            <div className="bg-cardBg p-6 rounded-xl shadow-lg border border-gray-800 hover:border-accent/30 transition-all">
              <h4 className="font-poppins font-semibold mb-3 flex items-center text-lg">
                <FaLaptopCode className="text-accent mr-3 text-xl" />
                Experience
              </h4>
              <p className="text-textSecondary">Fresher</p>
            </div>

            <div className="bg-cardBg p-6 rounded-xl shadow-lg border border-gray-800 hover:border-accent/30 transition-all">
              <h4 className="font-poppins font-semibold mb-3 flex items-center text-lg">
                <FaBriefcase className="text-accent mr-3 text-xl" />
                Role
              </h4>
              <p className="text-textSecondary">Open to Work</p>
            </div>
          </motion.div>

          {/* CTA */}
          <motion.div
            className="text-center"
            variants={fadeIn('up', 'tween', 0.4, 1)}
          >
            <a
              href="#contact"
              className="bg-accent hover:bg-accent/80 text-white py-3 px-8 rounded-lg transition-colors inline-flex items-center"
            >
              <span>Get In Touch</span>
              <FaArrowRight className="ml-2" />
            </a>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default AboutSection;