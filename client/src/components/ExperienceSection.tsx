import { motion } from 'framer-motion';
import { staggerContainer, fadeIn } from '@/lib/animations';

interface TimelineEntryProps {
  title: string;
  company: string;
  period: string;
  description: string;
  isRight: boolean;
  delay: number;
}

const TimelineEntry = ({
  title,
  company,
  period,
  description,
  isRight,
  delay,
}: TimelineEntryProps) => (
  <div className="relative flex flex-col md:flex-row items-center">
    {/* Timeline Dot */}
    <motion.div
      className="absolute left-0 md:left-1/2 top-0 bottom-0 
                w-[2px] bg-gradient-to-b 
                from-transparent via-accent/40 to-transparent 
                transform md:-translate-x-1/2"
      variants={fadeIn('up', 'tween', delay, 0.5)}
    />

    {/* LEFT SIDE */}
    {!isRight && <div className="md:w-1/2 md:pr-12"></div>}

    {/* CARD */}
    <motion.div
      className={`md:w-1/2 ${isRight ? 'md:pr-12 md:text-left' : 'md:pl-12'}`}
      variants={fadeIn(isRight ? 'right' : 'left', 'tween', delay, 0.6)}
    >
      <div
        className="bg-cardBg/70 backdrop-blur-lg 
                      p-6 rounded-xl border border-accent/10 
                      shadow-xl hover:shadow-accent/20 
                      transition duration-300"
      >
        <h3 className="text-xl font-semibold mb-1">{title}</h3>

        <h4 className="text-accent font-medium mb-2">{company}</h4>

        <p className="text-sm text-textSecondary mb-3">{period}</p>

        <p className="text-textSecondary leading-relaxed">{description}</p>
      </div>
    </motion.div>

    {/* RIGHT SIDE */}
    {isRight && <div className="md:w-1/2 md:pl-12"></div>}
  </div>
);

const experiences = [
  {
    title: 'Java Full Stack Intern',
    company: 'Revature',
    period: 'Sep-2025 - Jan-2026',
    description:
      'Developed a Social Media Blog API and Recipe Hub using Java, Spring Boot, and RESTful architecture. Focused on backend performance, API design, and scalable web solutions.',
  },
  {
  title: 'AI & ML Virtual Intern',
  company: 'EduSkills (AICTE)',
  period: 'Oct 2024 - Dec 2024',
  description:
    'Completed a 10-week AI & ML Virtual Internship supported by Google for Developers. Worked on data analysis, basic machine learning models, and real-world problem-solving using Python and APIs.',
}
];

const ExperienceSection = () => {
  return (
    <section
      id="experience"
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
            My <span className="gradient-text">Experience</span>
          </h2>
          <p className="text-textSecondary mt-4 max-w-2xl mx-auto text-lg">
            My professional journey so far
          </p>
        </motion.div>
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-1 bg-accent/20 transform md:translate-x-[-50%]"></div>
          {/* Timeline entries */}
          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <TimelineEntry
                key={index}
                title={exp.title}
                company={exp.company}
                period={exp.period}
                description={exp.description}
                isRight={index % 2 === 0}
                delay={0.1 + index * 0.1}
              />
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default ExperienceSection;
