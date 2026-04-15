import { motion } from 'framer-motion';
import { SiSpringboot, SiMysql } from 'react-icons/si';
import {
  FaReact,
  FaJs,
  FaHtml5,
  FaCss3Alt,
  FaGitAlt,
  FaDocker,
  FaCodeBranch,
  FaMobileAlt,
  FaJava,
  FaServer,
  FaLinux,
} from 'react-icons/fa';
import { staggerContainer, fadeIn } from '@/lib/animations';

interface SkillCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  delay: number;
}

const SkillCard = ({ icon, title, description, delay }: SkillCardProps) => (
  <motion.div
    className="bg-cardBg p-6 rounded-lg shadow-md hover:shadow-accent/10 transition-shadow"
    variants={fadeIn('up', 'tween', delay, 0.5)}
  >
    <div className="text-4xl text-accent mb-4">{icon}</div>
    <h3 className="text-xl font-poppins font-semibold mb-2">{title}</h3>
    <p className="text-textSecondary text-sm">{description}</p>
  </motion.div>
);

const skills = [
  {
    icon: <FaJava />,
    title: 'Java',
    description: 'Knowledge of Core Java and Spring Core',
  },
  {
    icon: <SiSpringboot />,
    title: 'Spring Boot',
    description:
      'Building scalable REST APIs and backend applications quickly with minimal setup. ',
  },
  {
    icon: <FaHtml5 />,
    title: 'HTML5',
    description: 'Semantic markup, accessibility, and best practices.',
  },
  {
    icon: <FaCss3Alt />,
    title: 'CSS3',
    description: 'Advanced styling, animations, and responsive design.',
  },

  {
    icon: <FaJs />,
    title: 'JavaScript',
    description:
      'Modern ES6+ features, asynchronous patterns, and DOM manipulation.',
  },

  {
    icon: <FaLinux />,
    title: 'Linux',
    description: 'Knowledge of Linux Operating System',
  },
  {
    icon: <FaServer />,
    title: 'REST APIs',
    description: 'RESTful design principles and best practices.',
  },
  {
    icon: <SiMysql />,
    title: 'MYSQL',
    description: 'Schema design and Database',
  },
  {
    icon: <FaGitAlt />,
    title: 'Git',
    description: 'Version control, branching strategies, and collaboration.',
  },
  {
    icon: <FaDocker />,
    title: 'Docker',
    description: 'Containerization and deployment automation.',
  },
  {
    icon: <FaCodeBranch />,
    title: 'CI/CD',
    description: 'Automated testing and deployment pipelines.',
  },
  {
    icon: <FaMobileAlt />,
    title: 'Responsive',
    description: 'Mobile-first approach and cross-browser compatibility.',
  },
];

const SkillsSection = () => {
  return (
    <section
      id="skills"
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
            My <span className="gradient-text">Skills</span>
          </h2>
          <p className="text-textSecondary mt-4 max-w-2xl mx-auto text-lg">
            The technologies and tools I work with
          </p>
        </motion.div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-8">
          {skills.map((skill, index) => (
            <SkillCard
              key={skill.title}
              icon={skill.icon}
              title={skill.title}
              description={skill.description}
              delay={0.1 + index * 0.05}
            />
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default SkillsSection;
