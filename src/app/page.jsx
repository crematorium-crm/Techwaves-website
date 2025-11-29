"use client";

import HeroSection from '@/components/Hero';
import PhotosSection from '@/components/ClubPhotos';


//import LeadersSection from '@/components/LeadersSection';
//import OffersSection from '@/components/Hero/OffersSection';
//import TestimonialsSection from '@/components/TestimonialsSection';

import Header from '@/components/Header';
import Projects from '@/components/Projects';
import Footer from '@/components/Footer';
import ClubPhotos from '@/components/ClubPhotos';
import Testimonials from '@/components/Testimonials';
import Leaders from '@/components/Leaders';
import ChatPreview from '@/components/ChatPreview';

export default function Home() {
  return (
    <div className="bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 min-h-screen overflow-hidden">
      <style jsx global>{`
        @keyframes scroll-left { 0% { transform: translateX(0); } 100% { transform: translateX(-50%); } }
        @keyframes float { 0%, 100% { transform: translateY(0px) translateX(0px); } 50% { transform: translateY(-15px) translateX(8px); } }
        @keyframes float-slow { 0%, 100% { transform: translateY(0px); } 50% { transform: translateY(-8px); } }
        @keyframes bounce-right { 0%, 100% { transform: translateX(0); } 50% { transform: translateX(4px); } }
        @keyframes gradient-x { 0%, 100% { background-position: 0% 50%; } 50% { background-position: 100% 50%; } }
        @keyframes expand-width { 0% { width: 0; } 100% { width: 100%; } }
        @keyframes line-down { 0% { transform: translateY(-100%); opacity: 0; } 50% { opacity: 1; } 100% { transform: translateY(100%); opacity: 0; } }
        @keyframes pulse-glow { 0%, 100% { box-shadow: 0 0 15px rgba(6, 182, 212, 0.5); } 50% { box-shadow: 0 0 30px rgba(6, 182, 212, 0.8); } }
        @keyframes slide-down { 0% { transform: translateY(-15px); opacity: 0; } 100% { transform: translateY(0); opacity: 1; } }
        @keyframes slide-up { 0% { transform: translateY(15px); opacity: 0; } 100% { transform: translateY(0); opacity: 1; } }
        @keyframes fade-in { 0% { opacity: 0; } 100% { opacity: 1; } }
        @keyframes fade-in-up { 0% { transform: translateY(20px); opacity: 0; } 100% { transform: translateY(0); opacity: 1; } }
        @keyframes scale-in { 0% { transform: scale(0.9); opacity: 0; } 100% { transform: scale(1); opacity: 1; } }
        .animate-float { animation: float 15s ease-in-out infinite; }
        .animate-float-slow { animation: float-slow 3s ease-in-out infinite; }
        .animate-bounce-right { animation: bounce-right 1s ease-in-out infinite; }
        .animate-gradient-x { background-size: 200% 200%; animation: gradient-x 3s ease infinite; }
        .animate-expand-width { animation: expand-width 0.8s ease-out forwards; }
        .animate-line-down { animation: line-down 1.5s ease-in-out infinite; }
        .animate-pulse-glow { animation: pulse-glow 2s ease-in-out infinite; }
        .animate-slide-down { animation: slide-down 0.5s ease-out forwards; }
        .animate-slide-up { animation: slide-up 0.5s ease-out forwards; }
        .animate-fade-in { animation: fade-in 0.7s ease-out forwards; }
        .animate-fade-in-up { animation: fade-in-up 0.7s ease-out forwards; }
        .animate-scale-in { animation: scale-in 0.7s ease-out forwards; }
        .animate-scroll-left { animation: scroll-left 25s linear infinite; }
        
        /* Hide default scrollbar */
        body {
          overflow-y: scroll;
          scrollbar-width: none;
          -ms-overflow-style: none;
        }
        body::-webkit-scrollbar {
          display: none;
        }
      `}</style>

      {/* Scroll Progress */}

      {/* Animated Background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-cyan-500/15 filter blur-2xl animate-pulse"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] rounded-full bg-blue-500/15 filter blur-2xl animate-pulse"></div>
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.02)_1px,transparent_1px)] bg-[size:50px_50px] opacity-20"></div>
      </div>

      {/* Header */}
      <Header />
      
      {/* Main Content */}
      <main>
        {/* Hero Section */}
        <HeroSection />

      

        {/* Club Photos Section */}
        <ClubPhotos />

        <Leaders/>

        {/* Testimonials Section */}


        <Testimonials/>

       
        {/* Projects Section */}
        <Projects />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}