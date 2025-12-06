
import React from 'react';
import { motion } from 'framer-motion';
import { Navbar } from './components/Navbar';
import { NewsTicker } from './components/NewsTicker';
import { Footer } from './components/Footer';
import { VisitorStats } from './components/VisitorStats'; // Import the new component
import { PERSONAL_INFO, NEWS, PUBLICATIONS, PROJECTS, EDUCATION, SKILLS, HOBBIES } from './constants';
import { MapPin, Mail, GraduationCap, Code, ExternalLink, FileText, Camera } from 'lucide-react';

// Animation variants
const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 }
};

const App: React.FC = () => {
  return (
    <div className="min-h-screen font-sans">
      <Navbar />

      <main className="max-w-6xl mx-auto px-4 sm:px-6 pt-28 pb-10 space-y-24">
        
        {/* === ABOUT SECTION === */}
        <section id="about" className="scroll-mt-28">
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-12 gap-10"
            {...fadeInUp}
          >
            {/* Left: Photo */}
            <div className="md:col-span-4 flex flex-col items-center md:items-start">
              <div className="relative w-64 h-64 md:w-full md:h-auto aspect-[4/5] rounded-xl overflow-hidden shadow-lg bg-slate-100">
                <img 
                  src={PERSONAL_INFO.photoUrl} 
                  alt={PERSONAL_INFO.name}
                  className="w-full h-full object-cover"
                />
              </div>
              
              <div className="mt-6 space-y-3 text-sm text-slate-600 w-full">
                <div className="flex items-center gap-3">
                  <MapPin size={18} className="text-academic-500" />
                  <span>{PERSONAL_INFO.location}</span>
                </div>
                <div className="flex items-center gap-3">
                  <Mail size={18} className="text-academic-500" />
                  <a href={`mailto:${PERSONAL_INFO.email}`} className="hover:text-academic-accent transition-colors">
                    {PERSONAL_INFO.email}
                  </a>
                </div>
                <div className="flex items-center gap-3">
                  <GraduationCap size={18} className="text-academic-500" />
                  <span>{PERSONAL_INFO.university}</span>
                </div>
              </div>
            </div>

            {/* Right: Bio & News */}
            <div className="md:col-span-8">
              <h1 className="text-4xl font-bold text-slate-900 mb-2">👋🏻 Hi there! I'm Zhilin.</h1>
              <p className="text-xl text-slate-600 mb-6 font-light">{PERSONAL_INFO.title}</p>
              
              <div className="prose prose-slate text-slate-700 leading-relaxed mb-6 whitespace-pre-line">
                {PERSONAL_INFO.bio}
              </div>

              <div className="bg-blue-50 border border-blue-100 p-4 rounded-lg text-sm text-blue-900 flex gap-3 items-start">
                <span className="text-xl">📢</span>
                <p>{PERSONAL_INFO.seeking}</p>
              </div>

              <NewsTicker news={NEWS} />
            </div>
          </motion.div>
        </section>

        {/* === PUBLICATIONS SECTION === */}
        <section id="publications" className="scroll-mt-24 border-t border-slate-200 pt-16">
          <motion.div {...fadeInUp}>
            <div className="flex items-center gap-4 mb-10">
              <h2 className="text-2xl font-bold text-slate-900 uppercase tracking-wide">Publications</h2>
              <div className="h-px bg-slate-200 flex-1"></div>
            </div>

            <div className="space-y-16">
              {PUBLICATIONS.map((pub, idx) => (
                <div key={idx} className="flex flex-col lg:flex-row gap-8 items-start">
                  
                  {/* Left: Image with Hover Overlay */}
                  {/* Increased width to w-96 (approx 384px), Aspect Ratio 4:3, Object-Top to show header */}
                  <div className="group relative w-full lg:w-96 aspect-[4/3] rounded-lg overflow-hidden shadow-md flex-shrink-0 bg-slate-100 border border-slate-200 cursor-help">
                    <img 
                      src={pub.image || '/paper-placeholder.png'} 
                      alt={pub.title} 
                      className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                      onError={(e) => {
                        (e.target as HTMLImageElement).src = 'https://placehold.co/800x600?text=Paper+Preview';
                      }}
                    />
                    
                    {/* Hover Overlay with Abstract - Scrollable */}
                    <div className="absolute inset-0 bg-slate-900/95 p-6 flex flex-col justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="overflow-y-auto max-h-full custom-scrollbar pr-2">
                        <p className="text-sm text-slate-200 leading-relaxed text-left">
                          <span className="block text-xs font-bold text-slate-400 uppercase mb-2 tracking-wider">Abstract</span>
                          {pub.abstract || "Detailed abstract available in the full paper."}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Right: Content */}
                  <div className="flex-1 py-2">
                    <h3 className="text-xl font-bold text-slate-900 leading-tight">
                      {pub.title}
                    </h3>
                    <p className="text-slate-600 mt-3 text-base leading-relaxed">
                      {pub.authors.split('Zhilin Fan').map((part, i, arr) => (
                        <React.Fragment key={i}>
                          {part}
                          {i < arr.length - 1 && <span className="font-bold text-slate-900 underline decoration-slate-300 underline-offset-2">Zhilin Fan</span>}
                        </React.Fragment>
                      ))}
                    </p>
                    <div className="flex flex-wrap items-center gap-x-3 gap-y-2 mt-4 text-sm">
                      <span className="italic font-medium text-academic-700 text-base">{pub.venue}</span>
                      <span className="text-slate-300">|</span>
                      <span className="text-slate-500">{pub.year}</span>
                      
                      {pub.status && (
                        <span className="px-2.5 py-0.5 bg-slate-100 text-slate-600 text-xs font-medium rounded-full border border-slate-200">
                          {pub.status}
                        </span>
                      )}

                      {pub.tags?.map(tag => (
                        <span key={tag} className="px-2.5 py-0.5 bg-blue-50 text-blue-700 text-xs font-medium rounded-full border border-blue-100">
                          {tag}
                        </span>
                      ))}
                    </div>
                    
                    {pub.links.length > 0 && (
                      <div className="flex gap-4 mt-6">
                        {pub.links.map(link => (
                          <a 
                            key={link.name} 
                            href={link.url}
                            className="text-sm font-bold text-academic-accent hover:underline flex items-center gap-1.5 transition-colors hover:text-blue-700"
                          >
                            <FileText size={16} /> {link.name}
                          </a>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </section>

        {/* === PROJECTS SECTION === */}
        <section id="projects" className="scroll-mt-24 border-t border-slate-200 pt-16">
          <motion.div {...fadeInUp}>
            <div className="flex items-center gap-4 mb-8">
              <h2 className="text-2xl font-bold text-slate-900 uppercase tracking-wide">Selected Projects</h2>
              <div className="h-px bg-slate-200 flex-1"></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {PROJECTS.map((proj, idx) => (
                <div key={idx} className="bg-slate-50 rounded-xl p-6 border border-slate-100 hover:shadow-md transition-shadow">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="font-bold text-slate-800">{proj.title}</h3>
                    <span className="text-xs font-mono text-slate-400 bg-white px-2 py-1 rounded border border-slate-100">
                      {proj.duration}
                    </span>
                  </div>
                  <p className="text-xs font-medium text-academic-accent mb-3 uppercase tracking-wider">{proj.role}</p>
                  <p className="text-sm text-slate-600 mb-4 leading-relaxed">
                    {proj.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {proj.techStack.map(tech => (
                      <span key={tech} className="text-xs bg-white text-slate-500 px-2 py-1 rounded border border-slate-200 flex items-center gap-1">
                        <Code size={10} /> {tech}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </section>

        {/* === HOBBIES SECTION === */}
        <section id="hobbies" className="scroll-mt-24 border-t border-slate-200 pt-16">
          <motion.div {...fadeInUp}>
            <div className="flex items-center gap-4 mb-8">
              <h2 className="text-2xl font-bold text-slate-900 uppercase tracking-wide flex items-center gap-2">
                <Camera className="text-academic-500" size={24} /> Life & Hobbies
              </h2>
              <div className="h-px bg-slate-200 flex-1"></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {HOBBIES.map((hobby, idx) => (
                <div 
                  key={idx} 
                  className={`group relative rounded-xl overflow-hidden shadow-md cursor-pointer ${
                    hobby.size === 'large' ? 'md:col-span-2 md:row-span-2 aspect-square md:aspect-auto' : 'aspect-square'
                  }`}
                >
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"></div>
                  <img 
                    src={hobby.image} 
                    alt={hobby.title} 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    onError={(e) => {
                       (e.target as HTMLImageElement).src = 'https://placehold.co/600x600?text=Hobby';
                    }}
                  />
                  <div className="absolute bottom-0 left-0 p-4 translate-y-4 group-hover:translate-y-0 transition-transform duration-300 z-20 text-white">
                    <h3 className="font-bold text-lg">{hobby.title}</h3>
                    <p className="text-sm text-slate-200 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-75">
                      {hobby.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </section>

        {/* === RESUME SECTION (Education, Skills, Teaching) === */}
        <section className="scroll-mt-24 border-t border-slate-200 pt-16">
           <motion.div className="grid grid-cols-1 md:grid-cols-2 gap-12" {...fadeInUp}>
              
              {/* Education */}
              <div>
                <h3 className="text-lg font-bold text-slate-900 mb-6 flex items-center gap-2">
                  <GraduationCap className="text-academic-500" /> Education
                </h3>
                <div className="space-y-8">
                  {EDUCATION.map((edu, idx) => (
                    <div key={idx} className="relative pl-6 border-l border-slate-200">
                      <div className="absolute -left-1.5 top-1.5 w-3 h-3 rounded-full bg-slate-300 ring-4 ring-white"></div>
                      <h4 className="font-bold text-slate-800">{edu.school}</h4>
                      <p className="text-sm text-slate-600 italic">{edu.degree}</p>
                      <p className="text-xs text-slate-400 mb-2">{edu.duration}</p>
                      <ul className="text-sm text-slate-600 list-disc list-inside">
                        {edu.details.map((detail, i) => <li key={i}>{detail}</li>)}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>

              {/* Skills */}
              <div>
                <h3 className="text-lg font-bold text-slate-900 mb-6 flex items-center gap-2">
                  <Code className="text-academic-500" /> Skills
                </h3>
                <div className="space-y-4">
                  {SKILLS.map((skill, idx) => (
                    <div key={idx}>
                      <span className="block text-xs font-bold text-slate-400 uppercase tracking-wider mb-1">
                        {skill.category}
                      </span>
                      <p className="text-sm text-slate-700 font-medium">
                        {skill.items}
                      </p>
                    </div>
                  ))}
                </div>
                
                {/* Teaching Mini-Section */}
                <div className="mt-10">
                   <h3 className="text-lg font-bold text-slate-900 mb-4">Teaching</h3>
                   <div className="text-sm text-slate-600 space-y-2">
                      <p><strong className="text-slate-800">Forefront Research of Education</strong> (TA, Fall 2024)</p>
                      <p><strong className="text-slate-800">Frontiers in Educational Technology</strong> (TA, Spring 2024)</p>
                   </div>
                </div>
              </div>

           </motion.div>
        </section>
        
        {/* Contact Block */}
        <section id="contact" className="bg-slate-900 rounded-2xl p-8 md:p-12 text-center text-white scroll-mt-24">
          <h2 className="text-2xl font-bold mb-4">Let's Connect</h2>
          <p className="text-slate-300 mb-8 max-w-xl mx-auto">
            I'm always open to discussing collaboration opportunities in AI for Education and Learning Analytics.
          </p>
          <div className="flex justify-center gap-6">
             <a href={`mailto:${PERSONAL_INFO.email}`} className="flex items-center gap-2 px-6 py-3 bg-white text-slate-900 rounded-full font-bold hover:bg-slate-100 transition-colors">
               <Mail size={18} /> Email Me
             </a>
             <a href={PERSONAL_INFO.scholarUrl} target="_blank" rel="noreferrer" className="flex items-center gap-2 px-6 py-3 border border-white/20 text-white rounded-full font-bold hover:bg-white/10 transition-colors">
               <ExternalLink size={18} /> Google Scholar
             </a>
          </div>
        </section>
        {/* === VISITOR STATS SECTION === */}
        <VisitorStats />

      </main>

      <Footer />
    </div>
  );
};

export default App;
