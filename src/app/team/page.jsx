"use client";

import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Linkedin, Mail } from 'lucide-react';
import Header from '@/components/Header';
import Section from '@/components/Section';
import Footer from '@/components/Footer';

const TeamShowcase = () => {
  const [centerIndex, setCenterIndex] = useState(3);
  const [isAnimating, setIsAnimating] = useState(false);
  const [animatedStats, setAnimatedStats] = useState({});

  const teamMembers = [
    { 
      id: 1, 
      name: 'Zertit Dorsane', 
      role: 'Leader of the club', 
      department: 'Leader of IT & Development department',
      linkedin: 'https://www.linkedin.com/in/zdorsane',
      image: '/team/dorsane2.jpg',
      color: 'from-slate-700 to-slate-900' 
    },
    { 
      id: 2, 
      name: 'Zertit Mahinar', 
      role: 'Leader of Graphic Design Department', 
      department: 'HR Leader',
      linkedin: 'https://www.linkedin.com/in/mahinar-zertit-53bbb3324',
      image: '/team/mahinar2.jpg',
      color: 'from-blue-600 to-slate-800' 
    },
    { 
      id: 3, 
      name: 'Boulbnane Razane', 
      role: 'Leader of Marketing & Public Relations', 
      department: 'Marketing Specialist',
      linkedin: 'https://linkedin.com/in/razane',
      image: '/team/razane2.jpg',
      color: 'from-blue-500 to-cyan-600' 
    },
    { 
      id: 4, 
      name: 'Bouchama Rym Ines', 
      role: 'CO-Leader of IT & Development Department', 
      department: 'Tech Lead',
      linkedin: 'https://www.linkedin.com/in/rym-bouchama-04295130b',
      image: '/team/Rym.png',
      color: 'from-cyan-500 to-blue-600' 
    },
    { 
      id: 5, 
      name: 'Soror Benabderhaman', 
      role: 'Leader of Content Creation & Events', 
      department: 'Event Coordinator',
      linkedin: 'https://linkedin.com/in/soror',
      image: '/team/soror2.jpg',
      color: 'from-slate-700 to-cyan-700' 
    },
    { 
      id: 6, 
      name: 'Assil Bouzelak', 
      role: 'Leader of Organization & Logistics', 
      department: 'Operations Manager',
      linkedin: 'https://www.linkedin.com/in/assil-b-a25b72356',
      image: '/team/assil.png',
      color: 'from-blue-600 to-slate-800' 
    },
    { 
      id: 7, 
      name: 'Balquis Khedara', 
      role: ' CO-Leader of Organization & Logistics', 
      department: 'PR Specialist',
      linkedin: 'https://linkedin.com/in/balquis',
      image: '/team/belquis2.jpg',
      color: 'from-cyan-600 to-blue-600' 
    },
    { 
      id: 8, 
      name: 'Maram Rouina', 
      role: 'Leader of Photography & Video Editing', 
      department: 'Visual Content Creator',
      linkedin: 'https://linkedin.com/in/maram',
      image: '/team/maram2.jpg',
      color: 'from-blue-500 to-cyan-600' 
    },
    { 
      id: 9, 
      name: 'Mohamed abderahman', 
      role: 'CO-Leader of Graphic Design Department', 
      department: 'Visual Content Creator',
      linkedin: 'https://linkedin.com/in/maram',
      image: '/team/abdou2.jpg',
      color: 'from-blue-500 to-cyan-600' 
    }
  ];

  const departments = [
    {
      id: 1,
      name: 'IT & Development',
      description: 'Building innovative solutions with cutting-edge technologies. Our developers create robust applications, websites, and software that power our digital presence.',
      icon: '💻',
      image: '/departments/it-dev.jpg',
      members: 25,
      color: 'from-blue-600 to-cyan-600'
    },
    {
      id: 2,
      name: 'Graphic Design',
      description: 'Crafting visual stories through creativity and design. Our designers bring ideas to life with stunning graphics, branding, and visual content.',
      icon: '🎨',
      image: '/departments/design.jpg',
      members: 18,
      color: 'from-purple-600 to-pink-600'
    },
    {
      id: 3,
      name: 'Marketing & Public Relations',
      description: 'Connecting with audiences and building our brand. We manage social media, campaigns, and public communications to grow our community.',
      icon: '📢',
      image: '/departments/marketing.jpg',
      members: 20,
      color: 'from-orange-600 to-red-600'
    },
    {
      id: 4,
      name: 'Content Creation & Events',
      description: 'Creating engaging content and memorable experiences. From articles to workshops, we produce valuable content and organize impactful events.',
      icon: '✨',
      image: '/departments/content.jpg',
      members: 15,
      color: 'from-green-600 to-teal-600'
    },
    {
      id: 5,
      name: 'Organization & Logistics',
      description: 'Ensuring everything runs smoothly behind the scenes. We handle planning, coordination, and resource management for all club activities.',
      icon: '📋',
      image: '/departments/logistics.jpg',
      members: 12,
      color: 'from-yellow-600 to-orange-600'
    },
    {
      id: 6,
      name: 'Photography & Video Editing',
      description: 'Capturing moments and telling visual stories. Our team produces high-quality photos and videos that document our journey and showcase our work.',
      icon: '🎬',
      image: '/departments/media.jpg',
      members: 16,
      color: 'from-pink-600 to-purple-600'
    }
  ];

  const clubStats = [
    { label: 'Active Members', value: 120, icon: '👥', suffix: '+' },
    { label: 'Departments', value: 6, icon: '🏢', suffix: '' },
    { label: 'Projects Completed', value: 45, icon: '✅', suffix: '+' },
    { label: 'Social Followers', value: 5000, icon: '📱', suffix: '+' },
    { label: 'Events Organized', value: 30, icon: '🎉', suffix: '+' },
    { label: 'Partners', value: 15, suffix: '+' },
    { label: 'Leaders', value: 9, icon: '⭐', suffix: '' },
    { label: 'Total Members', value: 106, suffix: '+' },
    { label: 'Departments', value: 6, icon: '📂', suffix: '' }
  ];

  // Animate statistics on mount
  useEffect(() => {
    const stats = {};
    clubStats.forEach((stat, index) => {
      stats[index] = 0;
    });
    setAnimatedStats(stats);

    const duration = 2000;
    const steps = 60;
    const interval = duration / steps;

    const timers = clubStats.map((stat, index) => {
      let currentStep = 0;
      return setInterval(() => {
        currentStep++;
        const progress = currentStep / steps;
        const currentValue = Math.floor(stat.value * progress);
        
        setAnimatedStats(prev => ({
          ...prev,
          [index]: currentValue
        }));

        if (currentStep >= steps) {
          clearInterval(timers[index]);
        }
      }, interval);
    });

    return () => timers.forEach(timer => clearInterval(timer));
  }, []);

  const formatStatValue = (index) => {
    const stat = clubStats[index];
    const value = animatedStats[index] || 0;
    
    if (stat.label === 'Social Followers' && value >= 1000) {
      return `${(value / 1000).toFixed(1)}K${stat.suffix}`;
    }
    return `${value}${stat.suffix}`;
  };

  const getCardPosition = (index) => {
    const diff = index - centerIndex;
    const isCenter = diff === 0;
    
    return {
      transform: `
        translateX(${diff * 140}px) 
        translateZ(${isCenter ? 0 : -200}px) 
        scale(${isCenter ? 1.2 : 0.85})
        rotateY(${diff * -5}deg)
      `,
      opacity: Math.abs(diff) > 3 ? 0 : Math.abs(diff) > 2 ? 0.3 : 1,
      zIndex: isCenter ? 50 : 40 - Math.abs(diff) * 10,
      filter: isCenter ? 'brightness(1.2) drop-shadow(0 0 30px rgba(34, 211, 238, 0.8))' : 'brightness(0.7)',
    };
  };

  const handleNext = () => {
    if (!isAnimating) {
      setIsAnimating(true);
      setCenterIndex((prev) => (prev + 1) % teamMembers.length);
      setTimeout(() => setIsAnimating(false), 500);
    }
  };

  const handlePrev = () => {
    if (!isAnimating) {
      setIsAnimating(true);
      setCenterIndex((prev) => (prev - 1 + teamMembers.length) % teamMembers.length);
      setTimeout(() => setIsAnimating(false), 500);
    }
  };

  useEffect(() => {
    const interval = setInterval(handleNext, 4000);
    return () => clearInterval(interval);
  }, [isAnimating]);

  return (
    <>
      <Header />
      <main className="pt-20 min-h-screen bg-black text-white overflow-hidden">
        {/* Animated Background with Grid */}
        <div className="fixed inset-0">
          <div className="absolute inset-0 opacity-20" style={{
            backgroundImage: `
              linear-gradient(rgba(34, 211, 238, 0.3) 1px, transparent 1px),
              linear-gradient(90deg, rgba(34, 211, 238, 0.3) 1px, transparent 1px)
            `,
            backgroundSize: '50px 50px',
            transform: 'perspective(500px) rotateX(60deg)',
            transformOrigin: 'center center'
          }}></div>
          
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500 rounded-full blur-3xl opacity-40 animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500 rounded-full blur-3xl opacity-40 animate-pulse" style={{ animationDelay: '1s' }}></div>
          <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-cyan-400 rounded-full blur-3xl opacity-30 animate-pulse" style={{ animationDelay: '2s' }}></div>
        </div>

        {/* Hero Section */}
        <Section title="OUR TEAM" subtitle="Meet the brilliant minds behind our success">
          {/* 3D Carousel Section */}
          <div className="relative h-[600px] flex items-center justify-center" style={{ perspective: '2000px' }}>
            <button
              onClick={handlePrev}
              className="absolute left-10 z-50 p-4 bg-cyan-600/50 hover:bg-cyan-500/70 rounded-full backdrop-blur-sm transition transform hover:scale-110"
              disabled={isAnimating}
            >
              <ChevronLeft size={24} />
            </button>

            <div className="relative w-full h-full flex items-center justify-center" style={{ transformStyle: 'preserve-3d' }}>
              {teamMembers.map((member, index) => {
                const position = getCardPosition(index);
                const isCenter = index === centerIndex;
                
                return (
                  <div
                    key={member.id}
                    className="absolute w-72 transition-all duration-500 ease-out cursor-pointer"
                    style={{
                      ...position,
                      transformStyle: 'preserve-3d',
                    }}
                    onClick={() => !isAnimating && setCenterIndex(index)}
                  >
                    <div className={`relative bg-gradient-to-br ${member.color} rounded-2xl p-4 border-2 ${
                      isCenter ? 'border-cyan-400' : 'border-cyan-600/30'
                    } shadow-2xl backdrop-blur-sm`}>
                      {isCenter && (
                        <>
                          <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-2xl blur-xl animate-pulse"></div>
                          <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 via-blue-500 to-cyan-600 rounded-2xl blur opacity-30 animate-pulse"></div>
                        </>
                      )}
                      
                      <div className="relative">
                        {/* Member Image */}
                        <div className="aspect-square bg-gradient-to-br from-cyan-600 to-blue-600 rounded-xl mb-4 overflow-hidden relative">
                          <img
                            src={member.image}
                            alt={member.name}
                            className="w-full h-full object-cover transform transition-transform duration-300 hover:scale-110"
                            onError={(e) => {
                              e.target.style.display = 'none';
                            }}
                          />
                          {/* Fallback display */}
                          <div className="absolute inset-0 flex items-center justify-center text-6xl">
                            
                          </div>
                        </div>
                        
                        <div className="text-left">
                          <h3 className="text-lg font-bold mb-1">{member.name}</h3>
                          <p className="text-xs text-cyan-400 mb-1 font-semibold">{member.role}</p>
                          <p className="text-xs text-gray-400 mb-4">{member.department}</p>
                          
                          {/* Social Links */}
                          <div className="flex gap-2">
                            <a
                              href={member.linkedin}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="w-8 h-8 bg-blue-600 hover:bg-blue-500 rounded flex items-center justify-center transition transform hover:scale-110"
                            >
                              <Linkedin size={14} />
                            </a>
                            
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            <button
              onClick={handleNext}
              className="absolute right-10 z-50 p-4 bg-cyan-600/50 hover:bg-cyan-500/70 rounded-full backdrop-blur-sm transition transform hover:scale-110"
              disabled={isAnimating}
            >
              <ChevronRight size={24} />
            </button>
          </div>
        </Section>

        {/* Club Statistics Section */}
        <Section title="OUR IMPACT" subtitle="By the numbers">
          <div className="relative w-full max-w-7xl mx-auto py-16">
            {/* Background gradient effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-black via-cyan-950/30 to-blue-950/30 rounded-3xl"></div>
            
            <div className="relative flex items-center justify-between px-12">
              {/* Left Description */}
              <div className="w-1/3 text-left pr-8">
                <h3 className="text-4xl font-bold text-cyan-400 mb-6">
                  Growing Together
                </h3>
                <p className="text-gray-400 leading-relaxed text-base">
                  Our community continues to expand with passionate members, successful projects, and meaningful partnerships. These numbers represent our collective achievements and the impact we're making together.
                </p>
              </div>

              {/* Center - Rotating Statistics Circle */}
              <div className="w-1/3 flex justify-center">
                <div className="relative h-[400px] w-[400px] flex items-center justify-center">
                  <style jsx>{`
                    @keyframes rotate-stats {
                      from {
                        transform: rotate(0deg);
                      }
                      to {
                        transform: rotate(360deg);
                      }
                    }
                    .stats-container {
                      animation: rotate-stats 20s linear infinite;
                    }
                    .stat-item {
                      animation: rotate-stats 20s linear infinite reverse;
                    }
                    @keyframes rotate-bubbles {
                      from {
                        transform: translate(-50%, -50%) rotate(0deg);
                      }
                      to {
                        transform: translate(-50%, -50%) rotate(360deg);
                      }
                    }
                    @keyframes counter-rotate {
                      from {
                        transform: rotate(0deg);
                      }
                      to {
                        transform: rotate(-360deg);
                      }
                    }
                    .bubble-orbit {
                      animation: rotate-bubbles 15s linear infinite;
                    }
                    .bubble-content {
                      animation: counter-rotate 15s linear infinite;
                    }
                  `}</style>
                  
                  {/* Rotating container with 6 outer stats */}
                  <div className="stats-container absolute inset-0">
                    {clubStats.slice(0, 6).map((stat, index) => {
                      const angle = (index * 360) / 6;
                      const radius = 140;
                      const x = Math.cos((angle * Math.PI) / 180) * radius;
                      const y = Math.sin((angle * Math.PI) / 180) * radius;
                      
                      return (
                        <div
                          key={index}
                          className="stat-item absolute top-1/2 left-1/2"
                          style={{
                            transform: `translate(calc(-50% + ${x}px), calc(-50% + ${y}px))`,
                          }}
                        >
                          <div className="relative bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-md rounded-full w-28 h-28 border-2 border-cyan-500/40 hover:border-cyan-400 transition-all duration-300 hover:scale-110 flex flex-col items-center justify-center overflow-hidden group cursor-pointer shadow-xl">
                            {/* Hover glow effect */}
                            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                              <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/20 to-blue-500/20 rounded-full blur-sm animate-pulse"></div>
                            </div>

                            {/* Content */}
                            <div className="relative z-10 text-center px-2">
                              <div className="text-3xl mb-1">{stat.icon}</div>
                              <div className="text-xl font-bold text-cyan-400">
                                {formatStatValue(index)}
                              </div>
                              <div className="text-[9px] text-gray-400 leading-tight">{stat.label}</div>
                            </div>

                            {/* Sparkle effect */}
                            <div className="absolute top-1 right-1 w-1.5 h-1.5 bg-cyan-400 rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-ping"></div>
                          </div>
                        </div>
                      );
                    })}
                  </div>

                  {/* Center circle with 3 rotating bubbles */}
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                    {/* Main center circle */}
                    <div className="relative w-32 h-32 bg-gradient-to-br from-cyan-600/30 to-blue-600/30 rounded-full backdrop-blur-sm border-2 border-cyan-500/50 flex flex-col items-center justify-center shadow-2xl shadow-cyan-500/30">
                
                      <div className="text-2xl font-bold text-cyan-400">Club</div>
                      <div className="text-xs text-gray-400">Stats</div>
                    </div>

                    {/* 3 Rotating bubbles around center */}
                    <div className="bubble-orbit absolute top-1/2 left-1/2 w-56 h-56">
                      {/* Bubble 1 - Members */}
                      <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2">
                        <div className="bubble-content w-20 h-20 bg-gradient-to-br from-blue-600/40 to-cyan-600/40 rounded-full backdrop-blur-sm border-2 border-cyan-400/60 flex flex-col items-center justify-center shadow-xl hover:scale-110 transition-transform cursor-pointer">
                          
                          <div className="text-lg font-bold text-cyan-300">{animatedStats[7] || 0}+</div>
                          <div className="text-[8px] text-gray-300">Members</div>
                        </div>
                      </div>

                      {/* Bubble 2 - Leaders */}
                      <div className="absolute top-1/2 right-0 translate-x-1/2 -translate-y-1/2">
                        <div className="bubble-content w-20 h-20 bg-gradient-to-br from-purple-600/40 to-pink-600/40 rounded-full backdrop-blur-sm border-2 border-pink-400/60 flex flex-col items-center justify-center shadow-xl hover:scale-110 transition-transform cursor-pointer">
                          
                          <div className="text-lg font-bold text-pink-300">{animatedStats[6] || 0}</div>
                          <div className="text-[8px] text-gray-300">Leaders</div>
                        </div>
                      </div>

                      {/* Bubble 3 - Departments */}
                      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2">
                        <div className="bubble-content w-20 h-20 bg-gradient-to-br from-orange-600/40 to-yellow-600/40 rounded-full backdrop-blur-sm border-2 border-orange-400/60 flex flex-col items-center justify-center shadow-xl hover:scale-110 transition-transform cursor-pointer">
                          
                          <div className="text-lg font-bold text-orange-300">{animatedStats[8] || 0}</div>
                          <div className="text-[8px] text-gray-300">Departments</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Description */}
              <div className="w-1/3 text-right pl-8">
                <h3 className="text-4xl font-bold text-cyan-400 mb-6">
                  Building Impact
                </h3>
                <p className="text-gray-400 leading-relaxed text-base">
                  From organizing events to creating innovative solutions, our members are at the heart of everything we do. Join us in making a difference and be part of our growing success story.
                </p>
              </div>
            </div>
          </div>
        </Section>

        {/* Departments Section */}
        <Section title="OUR DEPARTMENTS">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
            {departments.map((dept) => (
              <div
                key={dept.id}
                className="bg-slate-800/40 backdrop-blur-sm rounded-3xl p-8 hover:bg-slate-700/60 hover:shadow-2xl hover:shadow-cyan-500/20 transition-all duration-300 cursor-pointer group text-center shadow-lg transform hover:-translate-y-2"
              >
                {/* Icon Circle */}
                <div className="w-20 h-20 mx-auto mb-6 bg-slate-700/30 rounded-2xl flex items-center justify-center group-hover:scale-110 group-hover:bg-cyan-600/20 transition-all duration-300 shadow-md">
                  <div className="text-4xl filter drop-shadow-lg group-hover:scale-110 transition-transform duration-300">{dept.icon}</div>
                </div>

                {/* Department Title */}
                <h3 className="text-xl font-bold text-white mb-4 group-hover:text-cyan-400 transition-colors duration-300">
                  {dept.name}
                </h3>

                {/* Description */}
                <p className="text-gray-400 text-sm leading-relaxed mb-6 px-2 group-hover:text-gray-300 transition-colors duration-300">
                  {dept.description}
                </p>
              </div>
            ))}
          </div>
        </Section>
      </main>
      <Footer />
    </>
  );
};

export default TeamShowcase;
