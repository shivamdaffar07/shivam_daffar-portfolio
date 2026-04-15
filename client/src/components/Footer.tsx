import {
  FaGithub,
  FaLinkedin,
  FaInstagram,
} from 'react-icons/fa';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-secondary pt-16 pb-8 px-4 md:px-8 border-t border-accent/10">
      {/* Top Gradient Line */}
      <div
        className="absolute top-0 left-0 w-full h-[2px] 
                      bg-gradient-to-r from-transparent via-accent to-transparent"
      />

      <div className="container mx-auto">
        <div className="grid md:grid-cols-3 gap-10 items-center">
          {/* BRAND */}
          <div>
            <h1 className="text-3xl font-bold gradient-text">Shivam Daffar</h1>
            <p className="text-textSecondary mt-4 text-sm leading-relaxed max-w-sm">
              Java Full Stack Developer focused on building scalable,
              user-friendly web applications and modern digital experiences.
            </p>
          </div>

          {/* QUICK LINKS */}
          <div className="flex flex-col items-center">
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>

            <div className="flex flex-wrap gap-6 text-textSecondary">
              <a href="#home" className="hover:text-accent transition">
                Home
              </a>
              <a href="#projects" className="hover:text-accent transition">
                Projects
              </a>
              <a href="#experience" className="hover:text-accent transition">
                Experience
              </a>
              <a href="#contact" className="hover:text-accent transition">
                Contact
              </a>
            </div>
          </div>

          {/* SOCIAL */}
          <div className="flex flex-col items-center md:items-end">
            <h3 className="text-lg font-semibold mb-4">Connect With Me</h3>

            <div className="flex gap-5">
              <SocialIcon href="https://github.com/Syedasif101">
                <FaGithub />
              </SocialIcon>

              <SocialIcon href="https://www.linkedin.com/in/syed-asif101/">
                <FaLinkedin />
              </SocialIcon>

              <SocialIcon href="https://www.instagram.com/j_ack_rabbit/">
                <FaInstagram />
              </SocialIcon>

               
            </div>
          </div>
        </div>

        {/* COPYRIGHT */}
        <div className="mt-14 pt-6 border-t border-accent/10 text-center text-textSecondary text-sm">
          © {currentYear} shivam Daffar Built with ❤️ using React & Tailwind.
        </div>
      </div>
    </footer>
  );
};

/* SOCIAL ICON COMPONENT */
const SocialIcon = ({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="bg-accent/10 hover:bg-accent 
               hover:text-white text-accent 
               p-3 rounded-xl transition duration-300 
               hover:scale-110"
  >
    {children}
  </a>
);

export default Footer;
