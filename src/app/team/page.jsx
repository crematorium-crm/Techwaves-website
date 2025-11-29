"use client";

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { CircularTestimonials } from './circular-testimonials';
import DisplayCards from './display-cards';
import Header from '@/components/Header';

const TeamShowcasePage = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    if (isMobile) return;

    const handleMouseMove = (e) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth - 0.5) * 20,
        y: (e.clientY / window.innerHeight - 0.5) * 20
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [isMobile]);

  // Organized team members by department
  const teamByDepartment = {
    leadership: [
      {
        name: 'Zertit Dorsane',
        designation: 'Leader of the club And IT & Development department',
        quote: 'Leading with innovation and dedication, driving our club towards excellence in technology and development. Together, we build the future.',
        src: '/team/dorsane2.jpg',
        linkedin: 'https://www.linkedin.com/in/zdorsane'
      },
      {
        name: 'Zertit Mahinar',
        designation: 'Leader of Graphic Design Department and HR Leader',
        quote: 'Bridging creativity and people management, fostering a culture where design thinking meets organizational excellence.',
        src: '/team/mahinar2.jpg',
        linkedin: 'https://www.linkedin.com/in/mahinar-zertit-53bbb3324'
      },
      {
        name: 'Boulbnane Razane',
        designation: 'Leader of Marketing & Public Relations',
        quote: 'Connecting our message with the world, building relationships that amplify our impact and expand our reach.',
        src: '/team/razane2.jpg',
        linkedin: 'https://linkedin.com/'
      }
    ],
    itDevelopment: [
      {
        name: 'Bouchama Rym Ines',
        designation: 'CO-Leader of IT & Development Department',
        quote: 'Transforming ideas into elegant code solutions. Passionate about building scalable applications that solve real-world problems.',
        src: '/team/Rym.png',
        linkedin: 'https://www.linkedin.com/in/rym-bouchama-04295130b'
      },
      
      {
        name: 'Belaribi Feriel',
        designation: 'IT & Development Department',
        quote: 'Building tomorrow\'s technology today. Committed to excellence in software development and innovation.',
        src: '/team/belferiel.jpg',
        linkedin: 'https://www.linkedin.com/in/feriel-belaribi-3b3694268'
      },
      {
        name: 'Zendaoui Rahma Douaa',
        designation: 'IT & Development Department',
        quote: 'Dedicated to creating seamless user experiences through clean code and innovative solutions.',
        src: '/team/rahma.jpg',
        linkedin: 'https://www.linkedin.com/in/rahma-zendaoui-ba4809268'
      },
      {
        name: 'Hamidane Yacine',
        designation: 'IT & Development Department',
        quote: 'Crafting robust solutions with attention to detail and a passion for cutting-edge technology.',
        src: '/team/yasine.JPG',
        linkedin: 'https://linkedin.com/'
      },
      {
        name: 'Mansouri Ahmed',
        designation: 'IT & Development Department',
        quote: 'Driven by curiosity and problem-solving, always exploring new technologies to create better solutions.',
        src: '/team/ahmed.png',
        linkedin: 'https://www.linkedin.com/in/ahmed-mansouri-14557b280/'
      },
      {
        name: 'Addoun Khaled',
        designation: 'IT & Development Department',
        quote: 'Passionate about coding and innovation, bringing ideas to life through technology.',
        src: '/team/khaledaddon.jpg',
        linkedin: 'https://linkedin.com/'
      }
    ],
    humanResources: [
      {
        name: 'Nada Cheghib',
        designation: 'Human Resources Department',
        quote: 'Building strong teams through empathy and dedication. People are our greatest asset.',
        src: '/team/nada.png',
        linkedin: 'https://linkedin.com/'
      },
      {
        name: 'Ikhlef Rym',
        designation: 'Human Resources Department',
        quote: 'Fostering a culture of growth and collaboration. Together we achieve more.',
        src: '/team/IKHLEFRYM.JPG',
        linkedin: 'https://linkedin.com/'
      },
      {
        name: 'Rahmani Yasmine',
        designation: 'Human Resources Department',
        quote: 'Connecting talent with opportunity. Building relationships that strengthen our community.',
        src: '/team/yasmine.JPG',
        linkedin: 'https://linkedin.com/'
      },
      {
        name: 'Kerkar Sahar',
        designation: 'Human Resources Department',
        quote: 'Committed to creating an inclusive environment where everyone can thrive and succeed.',
        src: '/team/sahar.PNG',
        linkedin: 'https://linkedin.com/'
      },
      {
        name: 'Khattab Hadjer',
        designation: 'Human Resources Department',
        quote: 'Supporting our team members to reach their full potential and achieve their goals.',
        src: '/team/hadjer.png',
        linkedin: 'https://linkedin.com/'
      },
      {
        name: 'Maram Otmane',
        designation: 'Human Resources Department',
        quote: 'Nurturing talent and building connections that make our organization stronger.',
        src: '/team/maram.jpg',
        linkedin: 'https://linkedin.com/'
      },
      {
        name: 'Haouari Nour Ayet Errahmane',
        designation: 'Human Resources Department',
        quote: 'Creating pathways for growth and success. Every team member matters.',
        src: '/team/nour.jpeg',
        linkedin: 'https://www.linkedin.com/in/nour-haouari-770b54189'
      }
    ],
   
    graphicDesign: [
      {
        name: 'Bouchareb Mouad',
        designation: 'Graphic Design Department',
        quote: 'Bringing imagination to reality through pixels and colors. Every design tells a unique story.',
        src: '/team/mouad.jpeg',
        linkedin: 'https://www.linkedin.com/in/mouad-bouchareb-89b7aa380'
      },
      {
        name: 'Mohamed Abderahman',
        designation: 'Leader of Graphic Design Department',
        quote: 'Creating visual stories that inspire and communicate. Design is not just what it looks like, it\'s how it works.',
        src: '/team/abdou2.jpg',
        linkedin: 'https://linkedin.com/'
      },
      
    ],
    
    logistics: [
      {
        name: 'Assil Bouzelak',
        designation: 'Leader of Organization & Logistics Department',
        quote: 'Ensuring every detail is perfect. Great events happen when planning meets passion and precision.',
        src: '/team/assil.png',
        linkedin: 'https://www.linkedin.com/in/assil-b-a25b72356'
      },
      {
        name: 'Balquis Khedara',
        designation: 'CO-Leader of Organization & Logistics Department',
        quote: 'Coordinating success behind the scenes. Excellence in logistics makes excellence visible.',
        src: '/team/belquis.jpg',
        linkedin: 'https://linkedin.com/'
      }
    ],
    media: [
      {
        name: 'Maram Rouina',
        designation: 'Leader of Photography & Video Editing Department',
        quote: 'Capturing moments that matter, telling stories through the lens that inspire and engage.',
        src: '/team/maram2.jpg',
        linkedin: 'https://linkedin.com/'
      },
      {
        name: 'Kharoubi Malak',
        designation: 'Media & Photography Department',
        quote: 'Every frame tells a story. Passionate about visual storytelling through photography.',
        src: '/team/malakkh.jpg',
        linkedin: 'https://linkedin.com/'
      }
    ],
    
     contentEvents: [
      {
        name: 'Soror Benabderhaman',
        designation: 'Leader of Content Creation & Events Department',
        quote: 'Crafting memorable experiences and engaging content that connects people and creates lasting impact.',
        src: '/team/soror2.jpg',
        linkedin: 'https://linkedin.com/'
      }
    ],
  };

  const departmentInfo = {
    leadership: {
      title: 'Leadership',
      description: 'Guiding vision and strategic direction',
      members: 3,
    },
    itDevelopment: {
      title: 'IT & Development',
      description: 'Building innovative solutions',
      members: 6,
    },
    graphicDesign: {
      title: 'Graphic Design',
      description: 'Crafting visual stories',
      members: 2,
    },
    contentEvents: {
      title: 'Content & Events',
      description: 'Creating memorable experiences',
      members: 1,
    },
    logistics: {
      title: 'Logistics',
      description: 'Ensuring smooth operations',
      members: 2,
    },
    media: {
      title: 'Media',
      description: 'Capturing visual stories',
      members: 2,
    },
    humanResources: {
      title: 'Human Resources',
      description: 'Building our team culture',
      members: 7,
    }
  };

  // Create department cards for display
  const departmentCards = Object.entries(departmentInfo).map(([key, dept], index) => ({
    title: dept.title,
    description: dept.description,
    date: `${dept.members} members`,
    className: index === 0 
      ? "[grid-area:stack] hover:-translate-y-10 before:absolute before:w-[100%] before:outline-1 before:rounded-xl before:outline-border before:h-[100%] before:content-[''] before:bg-blend-overlay before:bg-background/50 grayscale-[100%] hover:before:opacity-0 before:transition-opacity before:duration-700 hover:grayscale-0 before:left-0 before:top-0"
      : index === 1
      ? "[grid-area:stack] translate-x-16 translate-y-10 hover:-translate-y-1 before:absolute before:w-[100%] before:outline-1 before:rounded-xl before:outline-border before:h-[100%] before:content-[''] before:bg-blend-overlay before:bg-background/50 grayscale-[100%] hover:before:opacity-0 before:transition-opacity before:duration-700 hover:grayscale-0 before:left-0 before:top-0"
      : "[grid-area:stack] translate-x-32 translate-y-20 hover:translate-y-10"
  })).slice(0, 3);

  return (
    <main className="relative min-h-screen bg-slate-950 overflow-hidden">
      <Header/>
      {/* Minimal Background */}
      <div className="fixed inset-0 -z-10">
        <div className="absolute inset-0 bg-slate-950" />
        
        <div className="absolute inset-0 opacity-10">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `
                linear-gradient(90deg, rgba(148, 163, 184, 0.1) 1px, transparent 1px),
                linear-gradient(180deg, rgba(148, 163, 184, 0.1) 1px, transparent 1px)
              `,
              backgroundSize: '40px 40px',
            }}
          />
        </div>

        <div
          className="absolute top-1/4 right-1/4 w-96 h-96 rounded-full blur-3xl opacity-20"
          style={{
            background: 'radial-gradient(circle, rgba(148, 163, 184, 0.3) 0%, transparent 70%)',
            transform: isMobile ? 'none' : `translate(${mousePosition.x * 0.5}px, ${mousePosition.y * 0.5}px)`
          }}
        />
      </div>

      <div className="relative pt-16 pb-16 px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true }}
          className="flex flex-col items-center justify-center max-w-[540px] mx-auto mb-20"
        >
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold tracking-tighter mt-10 text-slate-100 text-center">
            <span className="text-slate-400">Meet the talented people.</span>
            <br />
            <span className="font-semibold">Behind our success.</span>
          </h2>
          <p className="text-center mt-5 opacity-75 text-slate-300">
            Discover the brilliant minds driving innovation and excellence.
          </p>
        </motion.div>

        {/* Department Cards Preview */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true }}
          className="flex justify-center mb-32"
        >
          <DisplayCards cards={departmentCards} />
        </motion.div>

        {/* Department Sections */}
        {Object.entries(teamByDepartment).map(([deptKey, members], index) => {
          const dept = departmentInfo[deptKey];
          
          return (
            <motion.div
              key={deptKey}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              viewport={{ once: true }}
              className="mb-32 max-w-6xl mx-auto"
            >
              {/* Department Title */}
              <div className="text-center mb-12">
                <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-slate-100 mb-2">
                  {dept.title}
                </h3>
                <p className="text-sm text-slate-400">
                  {dept.description} • {members.length} members
                </p>
              </div>

              {/* Members Carousel */}
              <div className="flex justify-center">
                <div className="w-full">
                  <CircularTestimonials
                    testimonials={members}
                    autoplay={true}
                    colors={{
                      name: '#ffffff',
                      designation: '#94a3b8',
                      testimony: '#cbd5e1',
                      arrowBackground: '#1e293b',
                      arrowForeground: '#ffffff',
                      arrowHoverBackground: '#334155',
                    }}
                    fontSizes={{
                      name: '20px',
                      designation: '14px',
                      quote: '15px',
                    }}
                  />
                </div>
              </div>
            </motion.div>
          );
        })}

        {/* Simple CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true }}
          className="text-center mt-32 max-w-2xl mx-auto"
        >
          <div className="p-8 bg-slate-900/40 backdrop-blur-sm border border-slate-800 rounded-lg">
            <h2 className="text-2xl md:text-3xl font-bold mb-3 text-slate-100">
              Join Our Team
            </h2>
            <p className="text-base text-slate-400 mb-6">
              Be part of something meaningful and make an impact
            </p>
            <button className="px-6 py-3 bg-white text-slate-950 rounded-md font-medium text-sm hover:bg-slate-200 transition-colors">
              Get In Touch
            </button>
          </div>
        </motion.div>
      </div>
    </main>
  );
};

export default TeamShowcasePage;