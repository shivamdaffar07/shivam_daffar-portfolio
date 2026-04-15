import { useState } from 'react';
import { motion } from 'framer-motion';
import {
  FaMapMarkerAlt,
  FaEnvelope,
  FaPhone,
  FaGithub,
  FaLinkedin,
  FaInstagram,
} from 'react-icons/fa';
import { staggerContainer, fadeIn } from '@/lib/animations';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleInputChange = (e: any) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    console.log(formData);

    setFormData({
      name: '',
      email: '',
      subject: '',
      message: '',
    });
  };

  return (
    <section
      id="contact"
      className="min-h-screen flex items-center py-20 px-4 md:px-8"
    >
      <motion.div
        className="container mx-auto"
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
      >
        {/* Heading */}
        <motion.div
          className="text-center mb-16"
          variants={fadeIn('up', 'tween', 0.1, 1)}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Get In <span className="gradient-text">Touch</span>
          </h2>

          <p className="text-textSecondary max-w-xl mx-auto text-lg">
            Interested in collaboration, freelance work, or just want to say hi?
            Feel free to reach out.
          </p>
        </motion.div>

        <div className="flex flex-col md:flex-row gap-12">
          {/* FORM */}
          <motion.div
            className="md:w-1/2"
            variants={fadeIn('right', 'tween', 0.2, 1)}
          >
            <form
              onSubmit={handleSubmit}
              className="bg-cardBg/60 backdrop-blur-lg p-8 rounded-2xl border border-accent/10 shadow-xl space-y-6"
            >
              <div>
                <Label>Your Name</Label>
                <Input
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder="Shivam Daffar"
                  className="bg-secondary border border-accent/10 mt-2"
                  required
                />
              </div>

              <div>
                <Label>Email</Label>
                <Input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="shivamdaffar07@gmail.com"
                  className="bg-secondary border border-accent/10 mt-2"
                  required
                />
              </div>

              <div>
                <Label>Subject</Label>
                <Input
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  placeholder="Project Discussion"
                  className="bg-secondary border border-accent/10 mt-2"
                  required
                />
              </div>

              <div>
                <Label>Message</Label>
                <Textarea
                  rows={5}
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder="Tell me about your project..."
                  className="bg-secondary border border-accent/10 mt-2"
                  required
                />
              </div>

              <Button
                type="submit"
                className="w-full bg-accent hover:bg-accent/90 text-white py-3 rounded-lg"
              >
                Send Message
              </Button>
            </form>
          </motion.div>

          {/* CONTACT INFO */}
          <motion.div
            className="md:w-1/2"
            variants={fadeIn('left', 'tween', 0.3, 1)}
          >
            <div className="bg-cardBg/60 backdrop-blur-lg p-8 rounded-2xl border border-accent/10 shadow-xl h-full">
              <h3 className="text-2xl font-semibold mb-8">
                Contact Information
              </h3>

              <div className="space-y-6">
                <ContactItem
                  icon={<FaMapMarkerAlt />}
                  title="Location"
                  value="Amravati, Maharashtra, India"
                />
                <ContactItem
                  icon={<FaEnvelope />}
                  title="Email"
                  value="shivamdaffar07@gmail.com"
                />
                <ContactItem
                  icon={<FaPhone />}
                  title="Phone"
                  value="+91 7083567637"
                />
              </div>

              {/* SOCIAL */}
              <div className="mt-10">
                <h4 className="mb-4 font-semibold">Connect with me</h4>

                <div className="flex gap-4">
                  <SocialIcon href="https://github.com/shivamdaffar07">
                    <FaGithub />
                  </SocialIcon>
                  <SocialIcon href="https://www.linkedin.com/in/shivam-daffar-96868b19a">
                    <FaLinkedin />
                  </SocialIcon>
                    
                  <SocialIcon href="https://www.instagram.com/j_ack_rabbit/">
                    <FaInstagram />
                  </SocialIcon>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

/* COMPONENTS */

const ContactItem = ({ icon, title, value }: any) => (
  <div className="flex items-center gap-4">
    <div className="bg-accent/10 text-accent p-3 rounded-lg text-lg">
      {icon}
    </div>
    <div>
      <h4 className="font-semibold">{title}</h4>
      <p className="text-textSecondary">{value}</p>
    </div>
  </div>
);

const SocialIcon = ({ href, children }: any) => (
  <a
    href={href}
    target="_blank"
    className="bg-accent/10 hover:bg-accent/20 p-3 rounded-lg text-accent transition"
  >
    {children}
  </a>
);

export default ContactSection;
