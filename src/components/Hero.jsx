import React from "react";

function Hero() {
  return (
    <div className="relative min-h-screen bg-[#01060B] text-white overflow-hidden">
      
      {/* Fond complètement unifié */}
      <div className="absolute inset-0 bg-[#000203]"></div>

      {/* Contenu principal */}
      <div className="relative h-screen flex items-center justify-center pt-16 md:pt-20 lg:pt-24">
        <div className="w-full px-8 md:px-12 lg:px-20 xl:px-24 max-w-[1600px] mx-auto">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-16 xl:gap-20">
          
            {/* Partie texte - Bien centrée et organisée */}
            <div className="flex-1 w-full lg:max-w-2xl">
              <div className="flex flex-col items-start space-y-8 md:space-y-10 lg:space-y-12">
                
                
                {/* Badge Techwaves */}
                <div className="inline-flex items-center gap-3 bg-gradient-to-r from-blue-500/15 to-cyan-500/10 border border-cyan-500/30 text-cyan-300 text-sm px-6 py-3 rounded-full font-medium backdrop-blur-sm">
                  <div className="w-2 h-2 bg-gradient-to-r from-cyan-400 to-blue-400 rounded-full animate-pulse"></div>
                  <span className="font-semibold">Techwaves ENSB</span>
                </div>
                
                {/* Bloc titre */}
                <div className="space-y-6 w-full">
                  <h1 className="text-6xl md:text-7xl lg:text-8xl xl:text-8xl font-black leading-[0.9] bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-500 bg-clip-text text-transparent">
                    Techwaves
                  </h1>
                  <h2 className="text-4xl md:text-5xl lg:text-6xl xl:text-6xl font-bold text-white">
                    ENSB
                  </h2>
                  
                  <p className="text-2xl md:text-3xl lg:text-3xl text-cyan-200 font-light tracking-wide pt-4">
                    <span className="text-gray-300">Dive Deep,</span>{' '}
                    <span className="font-semibold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                      Rise High
                    </span>
                  </p>
                </div>

                {/* Description */}
                <div className="space-y-6 max-w-2xl">
                  <p className="text-xl md:text-2xl lg:text-2xl text-gray-200 leading-relaxed font-light">
                    Rejoignez la révolution technologique à l'ENSB
                  </p>
                  <p className="text-lg md:text-xl lg:text-xl text-cyan-100/90 leading-relaxed">
                    <span className="font-semibold text-cyan-300">Workshops, hackathons, conférences</span>
                    {' '}et bien plus pour façonner l'avenir numérique.
                  </p>
                </div>

                {/* Boutons */}
                <div className="flex flex-col sm:flex-row gap-5 w-full sm:w-auto pt-4">
                  <button className="group bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-500 hover:to-cyan-500 text-white px-10 py-4 rounded-xl font-semibold text-lg md:text-xl transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/25 border border-cyan-400/30 flex items-center justify-center gap-3 whitespace-nowrap">
                    <span>Rejoindre le Club</span>
                    <svg className="w-6 h-6 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </button>
                  <button className="group bg-transparent border-2 border-cyan-500/40 text-cyan-300 hover:bg-cyan-500/10 hover:border-cyan-400 hover:text-cyan-200 px-10 py-4 rounded-xl font-semibold text-lg md:text-xl transition-all duration-300 flex items-center justify-center gap-3 whitespace-nowrap">
                    <span>Explorer les Projets</span>
                    <svg className="w-6 h-6 group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </button>
                </div>

                {/* Stats */}
                <div className="flex items-center gap-8 md:gap-12 pt-8 w-full max-w-xl">
                  <div className="text-center flex-1">
                    <div className="text-3xl md:text-4xl lg:text-4xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                      20+
                    </div>
                    <div className="text-sm md:text-base text-cyan-300/80 font-medium mt-2">
                      Événements
                    </div>
                  </div>
                  
                  <div className="w-px h-12 md:h-14 bg-gradient-to-b from-transparent via-cyan-500/30 to-transparent"></div>
                  
                  <div className="text-center flex-1">
                    <div className="text-3xl md:text-4xl lg:text-4xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                      10+
                    </div>
                    <div className="text-sm md:text-base text-blue-300/80 font-medium mt-2">
                      Projets
                    </div>
                  </div>
                  
                  <div className="w-px h-12 md:h-14 bg-gradient-to-b from-transparent via-blue-500/30 to-transparent"></div>
                  
                  <div className="text-center flex-1">
                    <div className="text-3xl md:text-4xl lg:text-4xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                      50+
                    </div>
                    <div className="text-sm md:text-base text-cyan-300/80 font-medium mt-2">
                      Membres
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Logo - Bien positionné à droite */}
            <div className="flex-1 flex justify-center lg:justify-end w-full">
              <div className="relative w-full max-w-md lg:max-w-lg xl:max-w-xl">
                <div className="relative w-full aspect-square">
                  <video
                    src="/logo.mov"
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full h-full object-contain"
                  />
                  {/* Glow effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 via-blue-500/8 to-cyan-500/5 rounded-full blur-2xl scale-105"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Indicateur de scroll */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
        <div className="w-5 h-8 border border-cyan-500/30 rounded-full flex justify-center">
          <div className="w-0.5 h-2 bg-cyan-400 rounded-full mt-2 animate-bounce"></div>
        </div>
      </div>
    </div>
  );
}

export default Hero;