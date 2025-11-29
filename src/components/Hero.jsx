"use client";

import { useState, useEffect } from 'react';
import { ArrowRight, Github, Linkedin, Mail } from 'lucide-react';
import { motion } from 'framer-motion';
import techwaveswhite from '../assets/techwaveslogowhite.png';

// Typewriter Effect Component for description
const DescriptionTypewriter = ({ text, className = "", cursorClassName = "" }) => {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (currentIndex < text.length) {
      const timer = setTimeout(() => {
        setDisplayText(prev => prev + text[currentIndex]);
        setCurrentIndex(prev => prev + 1);
      }, 35);

      return () => clearTimeout(timer);
    }
  }, [currentIndex, text]);

  return (
    <div className={`${className}`}>
      <motion.p 
        className="text-gray-400 text-center max-w-2xl mb-8 text-sm sm:text-base"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.8 }}
      >
        {displayText}
        {currentIndex < text.length && (
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, repeat: Infinity, repeatType: "reverse" }}
            className={`inline-block ml-1 w-2 h-4 bg-cyan-400 align-middle ${cursorClassName}`}
          />
        )}
      </motion.p>
    </div>
  );
};

function Hero() {
  const [textOpacity, setTextOpacity] = useState(1);

  const descriptionText = "Powerful, self-serve student engagement tools and activities. Supercharge your skills & keep members engaged from anywhere";

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden pt-20 pb-20 px-8">
      
      {/* Animated background glow */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-600/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-600/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="relative z-10 flex flex-col items-center justify-center w-full max-w-4xl">
        
        {/* Glowing blue arc at top */}
        <div className="relative mb-6 w-full max-w-3xl animate-fade-in">
          <svg 
            viewBox="0 0 400 100" 
            className="w-full h-auto"
            style={{ 
              filter: 'drop-shadow(0 0 40px rgba(59, 130, 246, 1)) drop-shadow(0 0 60px rgba(59, 130, 246, 0.8)) drop-shadow(0 0 80px rgba(59, 130, 246, 0.6))'
            }}
          >
            <defs>
              <linearGradient id="arcGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="rgba(6, 182, 212, 0)" />
                <stop offset="15%" stopColor="rgba(6, 182, 212, 0.9)" />
                <stop offset="50%" stopColor="rgba(59, 130, 246, 1)" />
                <stop offset="85%" stopColor="rgba(6, 182, 212, 0.9)" />
                <stop offset="100%" stopColor="rgba(6, 182, 212, 0)" />
              </linearGradient>
            </defs>
            <path
              d="M 20 70 Q 200 10, 380 70"
              fill="none"
              stroke="url(#arcGradient)"
              strokeWidth="5"
              strokeLinecap="round"
            />
          </svg>
        </div>

        {/* Logo */}
        <div className="relative mb-8 animate-fade-in" style={{ animationDelay: '0.3s' }}>
          <img 
            src={techwaveswhite.src} 
            alt="Techwaves Club Official Logo" 
            className="w-100 sm:w-80 lg:w-96 mx-auto relative z-10"
          />
        </div>

        {/* Main Heading */}
        <h1 
          className="text-2xl sm:text-3xl lg:text-4xl font-light tracking-wide text-white text-center mb-2 animate-fade-in -mt-10"
          style={{ 
            opacity: textOpacity, 
            animationDelay: '0.1s',
            fontFamily: "'Inter', 'Segoe UI', system-ui, -apple-system, sans-serif"
          }}
        >
          ENSB tech club.
        </h1>
        
        {/* Subheading */}
        <p 
          className="text-2xl sm:text-3xl lg:text-4xl font-light tracking-wide text-gray-400 text-center mb-8 animate-fade-in"
          style={{ 
            opacity: textOpacity, 
            animationDelay: '0.2s',
            fontFamily: "'Inter', 'Segoe UI', system-ui, -apple-system, sans-serif"
          }}
        >
          The future of innovation.
        </p>

        {/* Description with Typewriter Effect */}
        <DescriptionTypewriter 
          text={descriptionText}
          className="text-center"
        />

        {/* CTA Buttons */}
        <div className="relative z-10 flex flex-col sm:flex-row flex-wrap gap-5 justify-center mb-16 animate-fade-in-up px-8"
          style={{ 
            opacity: textOpacity,
            animationDelay: '0.4s'
          }}
        >
          <button className="group relative bg-slate-800 hover:bg-slate-700 text-white px-10 py-4 rounded-full flex items-center justify-center gap-3 transition-all duration-300 overflow-hidden hover:scale-105 hover:shadow-lg hover:shadow-slate-700/40">
            <span className="absolute inset-0 w-0 bg-gradient-to-r from-slate-700 to-slate-600 transition-all duration-500 ease-out group-hover:w-full"></span>
            <span className="relative text-base">Read More</span>
            <ArrowRight className="relative w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
          <button className="group relative bg-gradient-to-r from-cyan-700 to-cyan-700 hover:from-cyan-400 hover:to-blue-500 text-white px-10 py-4 rounded-full flex items-center justify-center gap-3 transition-all duration-300 overflow-hidden hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/40">
            <span className="absolute inset-0 w-0 bg-white/20 transition-all duration-500 ease-out group-hover:w-full"></span>
            <span className="relative font-semibold text-base">Join the Club</span>
            <ArrowRight className="relative w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        {/* Social Links */}
        <div 
          className="flex flex-col sm:flex-row items-center gap-5 sm:space-x-5 pt-8 border-t border-slate-700/50 animate-fade-in-up px-8"
          style={{ animationDelay: '0.6s' }}
        >
          <span className="text-slate-400 text-base">Follow us:</span>
          <div className="flex space-x-4">
            <a href="#" className="group text-slate-400 hover:text-cyan-400 transition-all duration-300 bg-slate-800/30 hover:bg-slate-800/60 p-3 rounded-full hover:scale-110 hover:rotate-6">
              <Github size={20} className="group-hover:animate-pulse" />
            </a>
            <a href="#" className="group text-slate-400 hover:text-cyan-400 transition-all duration-300 bg-slate-800/30 hover:bg-slate-800/60 p-3 rounded-full hover:scale-110 hover:rotate-6">
              <Linkedin size={20} className="group-hover:animate-pulse" />
            </a>
            <a href="#" className="group text-slate-400 hover:text-cyan-400 transition-all duration-300 bg-slate-800/30 hover:bg-slate-800/60 p-3 rounded-full hover:scale-110 hover:rotate-6">
              <Mail size={20} className="group-hover:animate-pulse" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;