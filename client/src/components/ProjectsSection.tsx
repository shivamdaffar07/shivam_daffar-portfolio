import { motion } from 'framer-motion';
import { FaEye, FaGithub } from 'react-icons/fa';
import { staggerContainer, fadeIn } from '@/lib/animations';

interface ProjectCardProps {
  image: string;
  title: string;
  description: string;
  technologies: string[];
  demoUrl: string;
  codeUrl: string;
  delay: number;
}

const ProjectCard = ({
  image,
  title,
  description,
  technologies,
  demoUrl,
  codeUrl,
  delay,
}: ProjectCardProps) => (
  <motion.div
    className="project-card bg-cardBg rounded-lg overflow-hidden shadow-lg"
    variants={fadeIn('up', 'tween', delay, 0.5)}
  >
    <div className="h-56 overflow-hidden">
      <img src={image} alt={title} className="w-full h-full object-cover" />
    </div>
    <div className="p-6">
      <h3 className="text-xl font-poppins font-semibold mb-2">{title}</h3>
      <p className="text-textSecondary text-sm mb-4">{description}</p>
      <div className="flex flex-wrap gap-2 mb-4">
        {technologies.map((tech, index) => (
          <span
            key={index}
            className="bg-accent/10 text-accent text-xs px-2 py-1 rounded-full"
          >
            {tech}
          </span>
        ))}
      </div>
      <div className="flex justify-between">
        <a
          href={demoUrl}
          className="text-accent hover:underline flex items-center"
        >
          <FaEye className="mr-1" /> View Demo
        </a>
        <a
          href={codeUrl}
          className="text-accent hover:underline flex items-center"
        >
          <FaGithub className="mr-1" /> Source Code
        </a>
      </div>
    </div>
  </motion.div>
);

const projects = [
  {
    image: 'https://images.openai.com/static-rsc-4/hJY26KrDrW0hSneQ11peaWpbUTN9gCHylwYUhcT1pzB-saBinPJ6nCIigKh2JLKE4qi-kSaQ6usH0z0NMZGOJKWgEYJfEKMrMhtpMdWjld8aAzr--TkEWCQMyBASTL89gtPAKkoMTmVt99Z6IYhutioRFy7asqlx9DENgNYigwBMPOT_5khKrdYMEFyO4wju?purpose=fullsize',
    title: 'YouTube Live Chat Sentiment Analysis',
    description:
      'Built a real-time sentiment analysis system for YouTube live chats using Python and APIs. Extracted live chat data, applied NLP techniques, and classified sentiments to analyze audience engagement during livestreams.',
    technologies: ['Python', 'APIs', 'NLP', 'Data Analysis'],
    demoUrl: '#',
    codeUrl: 'https://github.com/shivamdaffar07/YouTube-Livestream-Sentiment-Analysis',
  },

  {
    image: 'https://images.openai.com/static-rsc-4/MoZ9CKmrel2rTYY1E-rntW99JqNxJ9kZ7LQCxCgRVBYcQQACQznburuB8L6F2A5QUYVbjEW1zwU-5Y46MDJHdc3xkvUDUCG3zNQxtGVM78fs27zj4Zh4x0u3OH7LUmMi1VQ7Lvy5D5xXTWMNBaa1f_zUsKfWc79GzHvM2_nPJY8-kCwuq3HVYSxOmqqPdmPM?purpose=fullsize',
    title: 'Social Media Blog API (Spring Boot)',
    description:
      'Developed a RESTful backend API for a social media blogging platform using Spring Boot. Implemented authentication, CRUD operations, and database integration for scalable backend services.',
    technologies: ['Java', 'Spring Boot', 'REST API', 'MySQL'],
    demoUrl: '#',
    codeUrl: 'https://github.com/shivamdaffar07/shivamdaffar07-PEP-SpringSocialMediaBlogAPI-Project',
  },

  {
    image: 'https://images.openai.com/static-rsc-4/Cfdc4uAfoCsvrVPS5xo_Hz2Pa-gc8KfPfJfvOhKmRuubwnVweTh79n_vlU4Otph5r8kX_Y3Mnmjd60swPQkX65hu_9lr-qDwCO42AGssBD-Rv-PNccP8d-002ua_b4yWa48EYJf3nApMJK-UCH3lCbBJliPJgg6nhMZccth-stngz4rnp46VIFt6h0z0qxm-?purpose=fullsize',
    title: 'Recipe Web Application',
    description:
      'Built a web-based recipe management system with CRUD operations and user interaction features. Designed backend logic and integrated frontend for a complete full-stack experience.',
    technologies: ['Java', 'HTML', 'CSS', 'JavaScript'],
    demoUrl: '#',
    codeUrl: 'https://github.com/shivamdaffar07/shivamdaffar07-PEP-VS-WebDevProject-Recipe',
  },
];

const ProjectsSection = () => {
  return (
    <section
      id="projects"
      className="min-h-screen flex items-center bg-secondary py-20 px-4 md:px-8"
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
            My <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-textSecondary mt-4 max-w-2xl mx-auto text-lg">
            Here are some of my recent works
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard
              key={project.title}
              image={project.image}
              title={project.title}
              description={project.description}
              technologies={project.technologies}
              demoUrl={project.demoUrl}
              codeUrl={project.codeUrl}
              delay={0.1 + index * 0.1}
            />
          ))}
        </div>

        <motion.div
          className="text-center mt-12"
          variants={fadeIn('up', 'tween', 0.3, 1)}
        >
          <a
            href="https://github.com/shivamdaffar07"
            className="inline-flex items-center bg-transparent border border-accent text-accent hover:bg-accent hover:text-white transition-colors py-2 px-6 rounded-full font-poppins"
          >
            View All Projects <FaEye className="ml-2" />
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default ProjectsSection;
