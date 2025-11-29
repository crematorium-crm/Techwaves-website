"use client";

import React from 'react';
import { motion } from 'framer-motion';

export default function Testimonials() {
  const testimonials = [
    // Column 1
    [
      {
        text: "TechWaves transformed my coding journey. The workshops are hands-on and the mentors are incredibly supportive!",
        image: "/team/dorsane2.jpg",
        name: "Zertit Dorsane",
        role: "Leader of the club And IT & Development department",
      },
      {
        text: "Best tech community I've been part of! The networking events opened so many doors for internships.",
        image: "/team/mahinar2.jpg",
        name: "Zertit Mahinar",
        role: "Leader of Graphic Design Department and HR Leader",
      },
      {
        text: "The certification programs helped me land my dream job. Forever grateful to this amazing club!",
        image: "/team/razane2.jpg",
        name: "Boulbnane Razane",
        role: "Leader of Marketing & Public Relations",
      },
      {
        text: "TechWaves transformed my coding journey. The workshops are hands-on and the mentors are incredibly supportive!",
        image: "/team/Rym.png",
        name: "Bouchama Rym Ines",
        role: "CO-Leader of IT & Development Department",
      },
    ],
    // Column 2
    [
      {
        text: "The certification programs helped me land my dream job. Forever grateful to this amazing club!",
        image: "/team/belferiel.jpg",
        name: "Belaribi Feriel",
        role: "IT & Development Department"
      },
      {
        text: "Best tech community I've been part of! The networking events opened so many doors for internships.",
        image: "/team/soror2.jpg",
        name: "Soror Benabderhaman",
        role: "Leader of Content Creation & Events Departement",
      },
      {
        text: "The certification programs helped me land my dream job. Forever grateful to this amazing club!",
        image: "/team/assil.png",
        name: "Assil Bouzelak",
        role: "Leader of Organization & Logistics Departement",
      },
      {
        text: "TechWaves transformed my coding journey. The workshops are hands-on and the mentors are incredibly supportive!",
        image: "/team/belquis.jpg",
        name: "Balquis Khedara",
        role: "CO-Leader of Organization & Logistics Departement",
      },
    ],
    // Column 3
    [
      {
        text: "Best tech community I've been part of! The networking events opened so many doors for internships.",
        image: "/team/rahma.jpg",
        name: "Zendaoui Rahma Douaa",
        role: "IT & Development Department"
      },
      {
        text: "Best tech community I've been part of! The networking events opened so many doors for internships.",
        image: "/team/ahmed.png",
        name: "Mansouri Ahmed",
        role: "IT & Development Department"
      },
      {
        text: "The certification programs helped me land my dream job. Forever grateful to this amazing club!",
        image: "/team/khaledaddon.jpg",
        name: "Addoun Khaled",
        role: "IT & Development Department"
      },
    ],
  ];

  return (
    <section className="relative py-20">
      <div className="container z-10 mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true }}
          className="flex flex-col items-center justify-center max-w-[540px] mx-auto"
        >
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold tracking-tighter mt-5 text-slate-100">
            <span className="text-slate-400">Trusted by experts.</span>
            <br />
            <span className="font-semibold self-center">Loved by members.</span>
          </h2>
          <p className="text-center mt-5 opacity-75 text-slate-300">
            See what our club members have to say about us.
          </p>
        </motion.div>

        {/* Testimonial Cards Container */}
        <div className="flex justify-center gap-6 mt-10 [mask-image:linear-gradient(to_bottom,transparent,black_25%,black_75%,transparent)] max-h-[740px] overflow-hidden">
          
          {/* First Column */}
          <div className="">
            <motion.div
              animate={{ translateY: "-50%" }}
              transition={{
                duration: 15,
                repeat: Infinity,
                ease: "linear",
                repeatType: "loop",
              }}
              className="flex flex-col gap-6 pb-6"
            >
              {[...new Array(2).fill(0)].map((_, index) => (
                <React.Fragment key={index}>
                  {testimonials[0].map(({ text, image, name, role }, i) => (
                    <div 
                      className="p-10 rounded-3xl border border-slate-700/50 shadow-lg bg-slate-900/50 backdrop-blur-sm max-w-xs w-full" 
                      key={i}
                    >
                      <div className="text-slate-200 text-sm leading-relaxed">{text}</div>
                      <div className="flex items-center gap-2 mt-5">
                        <img
                          width={40}
                          height={40}
                          src={image}
                          alt={name}
                          className="h-10 w-10 rounded-full object-cover"
                        />
                        <div className="flex flex-col">
                          <div className="font-medium tracking-tight leading-5 text-slate-100">{name}</div>
                          <div className="leading-5 opacity-60 tracking-tight text-slate-300 text-xs">{role}</div>
                        </div>
                      </div>
                    </div>
                  ))}
                </React.Fragment>
              ))}
            </motion.div>
          </div>

          {/* Second Column - Hidden on mobile */}
          <div className="hidden md:block">
            <motion.div
              animate={{ translateY: "-50%" }}
              transition={{
                duration: 19,
                repeat: Infinity,
                ease: "linear",
                repeatType: "loop",
              }}
              className="flex flex-col gap-6 pb-6"
            >
              {[...new Array(2).fill(0)].map((_, index) => (
                <React.Fragment key={index}>
                  {testimonials[1].map(({ text, image, name, role }, i) => (
                    <div 
                      className="p-10 rounded-3xl border border-slate-700/50 shadow-lg bg-slate-900/50 backdrop-blur-sm max-w-xs w-full" 
                      key={i}
                    >
                      <div className="text-slate-200 text-sm leading-relaxed">{text}</div>
                      <div className="flex items-center gap-2 mt-5">
                        <img
                          width={40}
                          height={40}
                          src={image}
                          alt={name}
                          className="h-10 w-10 rounded-full object-cover"
                        />
                        <div className="flex flex-col">
                          <div className="font-medium tracking-tight leading-5 text-slate-100">{name}</div>
                          <div className="leading-5 opacity-60 tracking-tight text-slate-300 text-xs">{role}</div>
                        </div>
                      </div>
                    </div>
                  ))}
                </React.Fragment>
              ))}
            </motion.div>
          </div>

          {/* Third Column - Hidden on mobile and tablet */}
          <div className="hidden lg:block">
            <motion.div
              animate={{ translateY: "-50%" }}
              transition={{
                duration: 17,
                repeat: Infinity,
                ease: "linear",
                repeatType: "loop",
              }}
              className="flex flex-col gap-6 pb-6"
            >
              {[...new Array(2).fill(0)].map((_, index) => (
                <React.Fragment key={index}>
                  {testimonials[2].map(({ text, image, name, role }, i) => (
                    <div 
                      className="p-10 rounded-3xl border border-slate-700/50 shadow-lg bg-slate-900/50 backdrop-blur-sm max-w-xs w-full" 
                      key={i}
                    >
                      <div className="text-slate-200 text-sm leading-relaxed">{text}</div>
                      <div className="flex items-center gap-2 mt-5">
                        <img
                          width={40}
                          height={40}
                          src={image}
                          alt={name}
                          className="h-10 w-10 rounded-full object-cover"
                        />
                        <div className="flex flex-col">
                          <div className="font-medium tracking-tight leading-5 text-slate-100">{name}</div>
                          <div className="leading-5 opacity-60 tracking-tight text-slate-300 text-xs">{role}</div>
                        </div>
                      </div>
                    </div>
                  ))}
                </React.Fragment>
              ))}
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}