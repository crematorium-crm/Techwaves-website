"use client";

import { useState, useEffect, useRef } from 'react';
import club3 from "../assets/club3.png";
import club4 from "../assets/club4.png";
import club5 from "../assets/club5.png";

export default function ClubPhotos() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { threshold: 0.2 }
    );
    
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    
    return () => observer.disconnect();
  }, []);

  return (
    <section 
      ref={sectionRef}
      className="py-16 sm:py-24 md:py-32 px-4 sm:px-8 md:px-20"
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-20 items-center">
          
          {/* Left Side - Text */}
          <div 
            className={`text-white transition-all duration-1000 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-20'
            }`}
          >
            <div className="inline-block mb-4">
              <div className="h-1 w-16 bg-gradient-to-r from-blue-400 to-blue-600 mb-3" />
            </div>
            
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 leading-tight">
              MORE THAN<br />
              <span className="bg-gradient-to-r from-blue-300 to-blue-400 bg-clip-text text-transparent">
                JUST A CLUB
              </span>
            </h2>
            
            <p className="text-base sm:text-lg text-gray-300 leading-relaxed max-w-xl">
              We're a <span className="text-blue-300 font-semibold">family</span> of dreamers and innovators, 
              where every idea matters and every voice is heard. Together, we don't just learn technology—we 
              grow, inspire each other, and create memories that last a lifetime. This is where 
              <span className="text-blue-400 font-semibold"> belonging </span>meets purpose.
            </p>
          </div>

          {/* Right Side - Scattered Photos */}
          <div className="relative h-[400px] sm:h-[500px] lg:h-[600px]">
            
            {/* Photo 1 - Top Left */}
            <div 
              className={`absolute top-0 left-0 sm:left-8 w-[220px] sm:w-[280px] md:w-[320px] transform rotate-[-8deg] hover:rotate-[-4deg] transition-all duration-500 hover:scale-105 hover:z-30 z-20 shadow-2xl ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-20'
              }`}
              style={{ transitionDelay: '0.1s' }}
            >
              <div className="bg-white p-2 rounded-lg group relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br  opacity-0 group-hover:opacity-100 transition-opacity" />
                <img
                  src={club3.src}
                  alt="Club members gathering"
                  className="w-full h-[180px] sm:h-[200px] md:h-[240px] object-cover rounded"
                />
              </div>
            </div>

            {/* Photo 2 - Center Right */}
            <div 
              className={`absolute top-24 sm:top-32 right-0 w-[220px] sm:w-[280px] md:w-[320px] transform rotate-[10deg] hover:rotate-[6deg] transition-all duration-500 hover:scale-105 hover:z-30 z-10 shadow-2xl ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-20'
              }`}
              style={{ transitionDelay: '0.3s' }}
            >
              <div className="bg-white p-2 rounded-lg group relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-100 transition-opacity" />
                <img
                  src={club4.src}
                  alt="Educatek event"
                  className="w-full h-[180px] sm:h-[200px] md:h-[240px] object-cover rounded"
                />
              </div>
            </div>

            {/* Photo 3 - Bottom Center */}
            <div 
              className={`absolute bottom-0 sm:bottom-8 left-8 sm:left-20 w-[220px] sm:w-[280px] md:w-[320px] transform rotate-[-5deg] hover:rotate-[-2deg] transition-all duration-500 hover:scale-105 hover:z-30 z-30 shadow-2xl ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
              }`}
              style={{ transitionDelay: '0.5s' }}
            >
              <div className="bg-white p-2 rounded-lg group relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br  opacity-0 group-hover:opacity-100 transition-opacity" />
                <img
                  src={club5.src}
                  alt="Outdoor club activity"
                  className="w-full h-[180px] sm:h-[200px] md:h-[240px] object-cover rounded"
                />
              </div>
            </div>

            {/* Decorative elements */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 rounded-full blur-3xl animate-pulse" />
          </div>
        </div>
      </div>
    </section>
  );
}