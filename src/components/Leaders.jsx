"use client";

import { Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';
import dorsane from "../assets/dorsane.png";
import mahinar from "../assets/mahinar.png";

function Leaders() {
  return (
    <section className="relative py-24 px-4">
      <div className="relative max-w-5xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-20">
          <div className="inline-block mb-4">
            <span className="text-blue-400 font-semibold text-sm uppercase tracking-wider">Leadership Team</span>
          </div>
          <h2 className="text-5xl font-bold text-white mb-6 bg-gradient-to-r from-blue-400 via-blue-500 to-cyan-400 bg-clip-text text-transparent">
            Meet Our Leaders
          </h2>
          <p className="text-blue-200/80 text-xl max-w-2xl mx-auto">
            The visionaries driving TechWaves forward with passion and dedication
          </p>
        </div>

        {/* Leaders Container */}
        <div className="grid lg:grid-cols-2 gap-8 max-w-4xl mx-auto">
          
          {/* President Card - Dorsane Zertit */}
          <div className="group relative">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-2xl blur-xl opacity-0 group-hover:opacity-30 transition-opacity duration-500"></div>
            <div className="relative backdrop-blur-xl bg-white/10 rounded-2xl p-6 shadow-2xl border border-blue-300/20 hover:border-blue-300/40 transition-all duration-500 hover:-translate-y-2">
              
              {/* Profile Image */}
              <div className="flex justify-center mb-6">
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full blur-md opacity-30"></div>
                  <div className="relative w-32 h-32 rounded-full overflow-hidden border-4 border-blue-300/30 shadow-2xl">
                    <img 
                      src={dorsane.src} 
                      alt="Dorsane Zertit"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>
              
              {/* Name & Title */}
              <div className="text-center mb-4">
                <h3 className="text-3xl font-bold text-white mb-2">Dorsane Zertit</h3>
                <div className="flex flex-col gap-1">
                  <p className="text-blue-400 font-bold text-base">President of TechWaves</p>
                  <p className="text-cyan-300 font-semibold text-sm">Public Relations</p>
                </div>
              </div>
              
              {/* Bio */}
              <p className="text-white/90 text-center mb-6 leading-relaxed text-sm">
                Leading TechWaves with strategic vision and fostering meaningful connections within our community. Dedicated to building bridges and creating impactful experiences for every member.
              </p>
              
              {/* Social Links */}
              <div className="flex justify-center gap-3">
                <a href="#" className="w-10 h-10 rounded-full bg-blue-500/20 hover:bg-blue-500/30 backdrop-blur-sm flex items-center justify-center transition-all duration-300 hover:scale-110 border border-blue-300/20">
                  <Facebook className="w-5 h-5 text-white" />
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-blue-500/20 hover:bg-blue-500/30 backdrop-blur-sm flex items-center justify-center transition-all duration-300 hover:scale-110 border border-blue-300/20">
                  <Twitter className="w-4 h-4 text-white" />
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-blue-500/20 hover:bg-blue-500/30 backdrop-blur-sm flex items-center justify-center transition-all duration-300 hover:scale-110 border border-blue-300/20">
                  <Linkedin className="w-4 h-4 text-white" />
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-blue-500/20 hover:bg-blue-500/30 backdrop-blur-sm flex items-center justify-center transition-all duration-300 hover:scale-110 border border-blue-300/20">
                  <Instagram className="w-4 h-4 text-white" />
                </a>
              </div>
            </div>
          </div>

          {/* Co-Leader Card - Zertit Mahinar */}
          <div className="group relative lg:mt-12">
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-2xl blur-xl opacity-0 group-hover:opacity-30 transition-opacity duration-500"></div>
            <div className="relative backdrop-blur-xl bg-white/10 rounded-2xl p-6 shadow-2xl border border-blue-300/20 hover:border-blue-300/40 transition-all duration-500 hover:-translate-y-2">
              
              {/* Profile Image */}
              <div className="flex justify-center mb-6">
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full blur-md opacity-30"></div>
                  <div className="relative w-32 h-32 rounded-full overflow-hidden border-4 border-blue-300/30 shadow-2xl">
                    <img 
                      src={mahinar.src}
                      alt="Zertit Mahinar"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>
              
              {/* Name & Title */}
              <div className="text-center mb-4">
                <h3 className="text-3xl font-bold text-white mb-2">Zertit Mahinar</h3>
                <div className="flex flex-col gap-1">
                  <p className="text-cyan-400 font-bold text-base">Co-Leader</p>
                  <p className="text-blue-300 font-semibold text-sm">Organizer & Human Resources</p>
                </div>
              </div>
              
              {/* Bio */}
              <p className="text-white/90 text-center mb-6 leading-relaxed text-sm">
                Orchestrating seamless operations and nurturing our talent ecosystem. Committed to creating a collaborative environment where innovation thrives and every member feels valued.
              </p>
              
              {/* Social Links */}
              <div className="flex justify-center gap-3">
                <a href="#" className="w-10 h-10 rounded-full bg-blue-500/20 hover:bg-blue-500/30 backdrop-blur-sm flex items-center justify-center transition-all duration-300 hover:scale-110 border border-blue-300/20">
                  <Facebook className="w-4 h-4 text-white" />
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-blue-500/20 hover:bg-blue-500/30 backdrop-blur-sm flex items-center justify-center transition-all duration-300 hover:scale-110 border border-blue-300/20">
                  <Twitter className="w-4 h-4 text-white" />
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-blue-500/20 hover:bg-blue-500/30 backdrop-blur-sm flex items-center justify-center transition-all duration-300 hover:scale-110 border border-blue-300/20">
                  <Linkedin className="w-4 h-4 text-white" />
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-blue-500/20 hover:bg-blue-500/30 backdrop-blur-sm flex items-center justify-center transition-all duration-300 hover:scale-110 border border-blue-300/20">
                  <Instagram className="w-4 h-4 text-white" />
                </a>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default Leaders;