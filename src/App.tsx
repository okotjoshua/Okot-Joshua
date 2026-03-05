/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect, useRef } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'motion/react';
import { 
  Cpu, 
  Code2, 
  GraduationCap, 
  Rocket, 
  Github, 
  Linkedin, 
  Mail, 
  MessageSquare, 
  ExternalLink, 
  ChevronRight,
  Menu,
  X,
  Bot,
  Globe,
  Zap,
  Briefcase,
  Calendar,
  MapPin
} from 'lucide-react';

// --- Types ---
interface Project {
  id: number;
  title: string;
  description: string;
  tags: string[];
  link: string;
  image: string;
}

interface Skill {
  name: string;
  level: number;
  icon: React.ReactNode;
}

interface Experience {
  role: string;
  company: string;
  period: string;
  description: string;
}

// --- Data ---
const PROJECTS: Project[] = [
  {
    id: 1,
    title: "Robotics Training Program",
    description: "A comprehensive curriculum designed to introduce youth to robotics and automation using accessible hardware.",
    tags: ["Robotics", "Education", "Arduino"],
    link: "#",
    image: "https://picsum.photos/seed/robotics/800/600"
  },
  {
    id: 2,
    title: "Youth Innovation Hub",
    description: "A digital space for collaboration and skill-sharing among young tech enthusiasts in the community.",
    tags: ["Community", "Platform", "Innovation"],
    link: "#",
    image: "https://picsum.photos/seed/hub/800/600"
  },
  {
    id: 3,
    title: "Smart Agriculture Initiative",
    description: "IoT-based solution for monitoring soil health and automating irrigation for local farmers.",
    tags: ["IoT", "Agriculture", "Sustainability"],
    link: "#",
    image: "https://picsum.photos/seed/agri/800/600"
  },
  {
    id: 4,
    title: "Technovation Mentorship",
    description: "Connecting industry professionals with aspiring developers to bridge the digital skills gap.",
    tags: ["Mentorship", "EdTech", "Career"],
    link: "#",
    image: "https://picsum.photos/seed/mentor/800/600"
  }
];

const SKILLS: Skill[] = [
  { name: "Robotics", level: 90, icon: <Bot className="w-5 h-5" /> },
  { name: "Software Development", level: 85, icon: <Code2 className="w-5 h-5" /> },
  { name: "ICT Training", level: 95, icon: <GraduationCap className="w-5 h-5" /> },
  { name: "Innovation & Entrepreneurship", level: 80, icon: <Rocket className="w-5 h-5" /> },
  { name: "Web Development", level: 88, icon: <Globe className="w-5 h-5" /> },
  { name: "Community Tech Programs", level: 92, icon: <Zap className="w-5 h-5" /> }
];

const EXPERIENCES: Experience[] = [
  {
    role: "Founder / Tech Lead",
    company: "Innovation Lab",
    period: "2022 - Present",
    description: "Leading technical strategy and community outreach for grassroots technology initiatives."
  },
  {
    role: "Robotics Trainer",
    company: "Digital Skills Academy",
    period: "2020 - 2022",
    description: "Developed and delivered robotics workshops for over 500 students across various schools."
  },
  {
    role: "Innovation Program Coordinator",
    company: "Youth Empowerment Hub",
    period: "2018 - 2020",
    description: "Managed cross-functional teams to implement digital literacy programs in rural areas."
  },
  {
    role: "Community Technology Advocate",
    company: "Tech For All",
    period: "2016 - 2018",
    description: "Advocated for open-source technology adoption and organized local hackathons."
  }
];

// --- Components ---

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Work', href: '#work' },
    { name: 'Experience', href: '#experience' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${scrolled ? 'glass-dark py-4 shadow-2xl' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="text-2xl font-display font-bold tracking-tighter text-white flex items-center gap-2"
        >
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-cyan-400 to-purple-600 flex items-center justify-center">
            <span className="text-xs">OJ</span>
          </div>
          <span className="hidden sm:block">Okot Joshua</span>
        </motion.div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link, i) => (
            <motion.a
              key={link.name}
              href={link.href}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="text-sm font-medium text-white/70 hover:text-cyan-400 transition-colors"
            >
              {link.name}
            </motion.a>
          ))}
          <motion.button
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="px-5 py-2 rounded-full bg-white text-black text-sm font-bold hover:bg-cyan-400 transition-colors"
          >
            Resume
          </motion.button>
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden text-white" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden glass-dark border-b border-white/10 overflow-hidden"
          >
            <div className="px-6 py-8 flex flex-col gap-6">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="text-lg font-display font-medium text-white/80"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Hero = () => {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, 200]);
  const y2 = useTransform(scrollY, [0, 500], [0, -150]);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-[120px] animate-mesh" />
        <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-purple-600/10 rounded-full blur-[150px] animate-mesh" style={{ animationDelay: '-5s' }} />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="inline-block mb-6 px-4 py-1.5 rounded-full glass border-white/10 text-xs font-mono uppercase tracking-widest text-cyan-400"
        >
          Available for Innovation
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-6xl md:text-8xl lg:text-9xl font-display font-bold tracking-tighter mb-8 bg-clip-text text-transparent bg-gradient-to-b from-white to-white/40"
        >
          Okot Joshua
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-lg md:text-2xl text-white/60 max-w-3xl mx-auto mb-12 font-light leading-relaxed"
        >
          Tech Innovator | Robotics Expert | Software Developer | Digital Skills Trainer. 
          <span className="block mt-2 text-white/80">Building technology that empowers communities and inspires the next generation.</span>
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a href="#work" className="group relative px-8 py-4 rounded-full bg-white text-black font-bold overflow-hidden transition-all hover:scale-105">
            <span className="relative z-10">View My Work</span>
            <div className="absolute inset-0 bg-cyan-400 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
          </a>
          <a href="#contact" className="px-8 py-4 rounded-full glass border-white/20 text-white font-bold hover:bg-white/10 transition-all">
            Contact Me
          </a>
        </motion.div>
      </div>

      {/* Floating Shapes */}
      <motion.div style={{ y: y1 }} className="absolute top-1/3 right-[10%] hidden lg:block opacity-20">
        <div className="w-24 h-24 border-2 border-cyan-400 rounded-2xl rotate-12 animate-pulse" />
      </motion.div>
      <motion.div style={{ y: y2 }} className="absolute bottom-1/4 left-[10%] hidden lg:block opacity-20">
        <div className="w-32 h-32 border-2 border-purple-500 rounded-full animate-bounce" style={{ animationDuration: '4s' }} />
      </motion.div>
    </section>
  );
};

const About = () => {
  return (
    <section id="about" className="py-32 relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative group perspective-1000"
          >
            <div className="relative w-full aspect-square max-w-md mx-auto preserve-3d transition-transform duration-500 group-hover:rotate-y-12 group-hover:rotate-x-6">
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500 to-purple-600 rounded-3xl blur-2xl opacity-20 group-hover:opacity-40 transition-opacity" />
              <div className="relative h-full w-full rounded-3xl overflow-hidden glass border-white/10 p-4">
                <img 
                  src="https://picsum.photos/seed/profile/600/600" 
                  alt="Okot Joshua" 
                  className="w-full h-full object-cover rounded-2xl grayscale hover:grayscale-0 transition-all duration-500"
                  referrerPolicy="no-referrer"
                />
              </div>
              {/* 3D Floating Elements */}
              <div className="absolute -top-6 -right-6 w-24 h-24 glass rounded-2xl flex items-center justify-center shadow-2xl transform translate-z-20">
                <Cpu className="w-10 h-10 text-cyan-400" />
              </div>
              <div className="absolute -bottom-6 -left-6 w-32 h-16 glass rounded-2xl flex items-center justify-center shadow-2xl transform translate-z-30">
                <span className="text-xs font-bold tracking-widest text-purple-400">INNOVATOR</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-8">
              Empowering Communities <br />
              <span className="text-cyan-400">Through Technology</span>
            </h2>
            <div className="space-y-6 text-white/60 text-lg leading-relaxed">
              <p>
                I am a dedicated technology professional with a deep-rooted passion for innovation and community development. 
                My journey in tech began with a curiosity for how things work, which evolved into a career focused on 
                robotics, software development, and digital skills training.
              </p>
              <p>
                Over the years, I've had the privilege of working with schools, youth organizations, and innovation hubs 
                to bridge the digital divide. My mission is to equip the next generation with the tools and mindset 
                needed to solve local problems using global technology.
              </p>
              <p>
                Whether it's building a smart irrigation system for local farmers or teaching a group of students 
                their first lines of code, I believe that technology is the ultimate equalizer for community empowerment.
              </p>
            </div>

            <div className="mt-12 grid grid-cols-2 sm:grid-cols-3 gap-6">
              {[
                { label: 'Experience', value: '8+ Years' },
                { label: 'Projects', value: '50+' },
                { label: 'Students', value: '1k+' },
              ].map((stat) => (
                <div key={stat.label} className="p-4 rounded-2xl glass border-white/5">
                  <div className="text-2xl font-bold text-white">{stat.value}</div>
                  <div className="text-xs text-white/40 uppercase tracking-wider">{stat.label}</div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Skills = () => {
  return (
    <section id="skills" className="py-32 bg-white/[0.02]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">Mastered Skills</h2>
          <p className="text-white/40 max-w-2xl mx-auto">A blend of technical expertise and leadership qualities honed through years of practical application.</p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {SKILLS.map((skill, i) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -10 }}
              className="group p-8 rounded-3xl glass border-white/5 hover:border-cyan-400/30 transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center mb-6 group-hover:bg-cyan-400 group-hover:text-black transition-colors">
                {skill.icon}
              </div>
              <h3 className="text-xl font-bold mb-4">{skill.name}</h3>
              <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.level}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: 0.5 }}
                  className="h-full bg-gradient-to-r from-cyan-400 to-purple-600"
                />
              </div>
              <div className="mt-2 text-right text-xs font-mono text-white/40">{skill.level}%</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Projects = () => {
  return (
    <section id="work" className="py-32">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
          <div className="max-w-2xl">
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">Featured Work</h2>
            <p className="text-white/40">Impactful projects that combine technical innovation with social responsibility.</p>
          </div>
          <button className="group flex items-center gap-2 text-cyan-400 font-bold hover:text-white transition-colors">
            View All Projects <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {PROJECTS.map((project, i) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group relative rounded-3xl overflow-hidden glass border-white/5"
            >
              <div className="aspect-[16/10] overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent opacity-80" />
              <div className="absolute inset-0 p-8 flex flex-col justify-end">
                <div className="flex gap-2 mb-4">
                  {project.tags.map(tag => (
                    <span key={tag} className="px-3 py-1 rounded-full bg-white/10 backdrop-blur-md text-[10px] font-bold uppercase tracking-wider text-white/80">
                      {tag}
                    </span>
                  ))}
                </div>
                <h3 className="text-2xl font-bold mb-2 group-hover:text-cyan-400 transition-colors">{project.title}</h3>
                <p className="text-white/60 text-sm mb-6 line-clamp-2">{project.description}</p>
                <div className="flex items-center justify-between">
                  <a href={project.link} className="flex items-center gap-2 text-sm font-bold text-white hover:text-cyan-400 transition-colors">
                    View Details <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Experience = () => {
  return (
    <section id="experience" className="py-32 bg-white/[0.02]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">Professional Journey</h2>
          <p className="text-white/40">A timeline of growth, leadership, and community impact.</p>
        </div>

        <div className="max-w-4xl mx-auto">
          {EXPERIENCES.map((exp, i) => (
            <motion.div
              key={exp.role}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="relative pl-12 pb-16 last:pb-0 group"
            >
              {/* Timeline Line */}
              <div className="absolute left-[11px] top-0 bottom-0 w-[2px] bg-white/10 group-last:bg-transparent" />
              
              {/* Timeline Dot */}
              <div className="absolute left-0 top-1.5 w-6 h-6 rounded-full glass border-white/20 flex items-center justify-center z-10 group-hover:border-cyan-400 transition-colors">
                <div className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
              </div>

              <div className="glass p-8 rounded-3xl border-white/5 hover:border-white/10 transition-all">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-white">{exp.role}</h3>
                    <div className="flex items-center gap-2 text-cyan-400 text-sm font-medium mt-1">
                      <Briefcase className="w-4 h-4" /> {exp.company}
                    </div>
                  </div>
                  <div className="flex items-center gap-2 text-white/40 text-sm font-mono">
                    <Calendar className="w-4 h-4" /> {exp.period}
                  </div>
                </div>
                <p className="text-white/60 leading-relaxed">{exp.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Contact = () => {
  return (
    <section id="contact" className="py-32">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-6xl font-display font-bold mb-8">Let's Build <br /> <span className="text-purple-500">Something Great</span></h2>
            <p className="text-white/60 text-lg mb-12">
              Have a project in mind or want to collaborate on community tech initiatives? 
              I'm always open to discussing new opportunities and ideas.
            </p>

            <div className="space-y-8">
              {[
                { icon: <Mail />, label: 'Email', value: 'hello@okotjoshua.com', href: 'mailto:hello@okotjoshua.com' },
                { icon: <Linkedin />, label: 'LinkedIn', value: 'linkedin.com/in/okotjoshua', href: '#' },
                { icon: <Github />, label: 'GitHub', value: 'github.com/okotjoshua', href: '#' },
                { icon: <MessageSquare />, label: 'WhatsApp', value: '+256 700 000 000', href: '#' },
              ].map((item) => (
                <a key={item.label} href={item.href} className="flex items-center gap-6 group">
                  <div className="w-14 h-14 rounded-2xl glass flex items-center justify-center group-hover:bg-white group-hover:text-black transition-all">
                    {item.icon}
                  </div>
                  <div>
                    <div className="text-xs text-white/40 uppercase tracking-widest mb-1">{item.label}</div>
                    <div className="text-lg font-bold text-white group-hover:text-cyan-400 transition-colors">{item.value}</div>
                  </div>
                </a>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="glass p-10 rounded-[40px] border-white/5"
          >
            <form className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs font-bold text-white/40 uppercase tracking-widest ml-2">Name</label>
                  <input type="text" placeholder="John Doe" className="w-full px-6 py-4 rounded-2xl bg-white/5 border border-white/10 focus:border-cyan-400 focus:outline-none focus:ring-1 focus:ring-cyan-400 transition-all" />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold text-white/40 uppercase tracking-widest ml-2">Email</label>
                  <input type="email" placeholder="john@example.com" className="w-full px-6 py-4 rounded-2xl bg-white/5 border border-white/10 focus:border-cyan-400 focus:outline-none focus:ring-1 focus:ring-cyan-400 transition-all" />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold text-white/40 uppercase tracking-widest ml-2">Subject</label>
                <input type="text" placeholder="Project Inquiry" className="w-full px-6 py-4 rounded-2xl bg-white/5 border border-white/10 focus:border-cyan-400 focus:outline-none focus:ring-1 focus:ring-cyan-400 transition-all" />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold text-white/40 uppercase tracking-widest ml-2">Message</label>
                <textarea rows={5} placeholder="Tell me about your project..." className="w-full px-6 py-4 rounded-2xl bg-white/5 border border-white/10 focus:border-cyan-400 focus:outline-none focus:ring-1 focus:ring-cyan-400 transition-all resize-none" />
              </div>
              <button className="w-full py-5 rounded-2xl bg-gradient-to-r from-cyan-400 to-purple-600 text-black font-bold text-lg hover:shadow-[0_0_30px_rgba(0,242,255,0.3)] transition-all">
                Send Message
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="py-20 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-12">
          <div className="text-center md:text-left">
            <div className="text-2xl font-display font-bold tracking-tighter mb-4">Okot Joshua</div>
            <p className="text-white/40 max-w-xs">Building technology that empowers communities and inspires innovation.</p>
          </div>

          <div className="flex gap-6">
            {[Github, Linkedin, Mail, MessageSquare].map((Icon, i) => (
              <a key={i} href="#" className="w-12 h-12 rounded-full glass flex items-center justify-center hover:bg-white hover:text-black transition-all">
                <Icon className="w-5 h-5" />
              </a>
            ))}
          </div>
        </div>

        <div className="mt-20 flex flex-col md:flex-row justify-between items-center gap-6 text-xs font-mono text-white/20 uppercase tracking-widest">
          <div>&copy; {new Date().getFullYear()} Okot Joshua. All rights reserved.</div>
          <div className="flex gap-8">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default function App() {
  return (
    <div className="font-sans selection:bg-cyan-400 selection:text-black">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Contact />
      </main>
      <Footer />

      {/* Global Background Noise/Grain Overlay */}
      <div className="fixed inset-0 pointer-events-none z-[100] opacity-[0.03] mix-blend-overlay bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
    </div>
  );
}
