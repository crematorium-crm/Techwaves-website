import Header from '@/components/Header'
import Section from '@/components/Section'
import Footer from '@/components/Footer'

export default function History() {
  const timeline = [
    {
      year: "2023",
      title: "Fondation du Club",
      description: "Techwaves ENSB a été fondé le 5 octobre par Zertit Dorsane avec une vision claire : créer une communauté technologique dynamique à l'ENSB.",
      icon: "🚀",
      milestones: ["Création officielle", "Première équipe formée", "Définition de la mission"]
    },
    {
      year: "2023",
      title: "Premier Workshop & Recrutement",
      description: "Organisation de notre premier workshop sur le développement web qui a attiré plus de 50 étudiants passionnés.",
      icon: "👥",
      milestones: ["50+ participants", "Premier workshop réussi", "Expansion de l'équipe"]
    },
    {
      year: "2024",
      title: "Partenariat Huawei ICT Academy",
      description: "Devenu Ambassador officiel de Huawei ICT Academy Constantine, ouvrant des opportunités de certification pour nos membres.",
      icon: "🤝",
      milestones: ["Partenaire Huawei", "Certifications ICT", "Formations avancées"]
    },
    {
      year: "2024",
      title: "Ambassador Skills Area Egypt",
      description: "Reconnu comme Ambassador pour Skills Area Egypt, élargissant notre réseau international et nos opportunités.",
      icon: "🌍",
      milestones: ["Réseau international", "Collaborations MENA", "Visibilité régionale"]
    },
    {
      year: "2024",
      title: "Hackathon National & Expansion",
      description: "Organisation de notre premier hackathon national avec 120 participants et lancement de multiples projets innovants.",
      icon: "💡",
      milestones: ["120 participants", "Projets innovants", "Reconnaissance nationale"]
    }
  ]

  const stats = [
    { number: "1+", label: "Année d'Existence", description: "Depuis notre création en 2023" },
    { number: "50+", label: "Membres Actifs", description: "Communauté en croissance" },
    { number: "20+", label: "Événements", description: "Workshops, conférences, hackathons" },
    { number: "10+", label: "Projets", description: "Solutions innovantes développées" }
  ]

  return (
    <>
      <Header />
      <main className="pt-20 min-h-screen grid-background">
        <Section 
          title="Notre Histoire" 
          subtitle="Le parcours extraordinaire de Techwaves ENSB depuis sa création"
        >
          {/* Stats Intro */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
            {stats.map((stat, index) => (
              <div key={index} className="tech-card rounded-xl p-6 text-center">
                <div className="tech-gradient-text text-3xl font-bold mb-2">{stat.number}</div>
                <div className="text-tech-300 font-medium mb-1">{stat.label}</div>
                <div className="text-tech-500 text-sm">{stat.description}</div>
              </div>
            ))}
          </div>

          {/* Timeline */}
          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {/* Ligne verticale centrale */}
              <div className="absolute left-1/2 transform -translate-x-1/2 w-1 tech-gradient h-full rounded-full"></div>
              
              {timeline.map((item, index) => (
                <div key={index} className={`relative flex items-center mb-12 ${
                  index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'
                }`}>
                  {/* Point sur la timeline */}
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 tech-gradient rounded-full border-4 border-tech-dark z-10 flex items-center justify-center">
                    <span className="text-white text-xs">{index + 1}</span>
                  </div>
                  
                  {/* Contenu */}
                  <div className={`w-5/12 ${index % 2 === 0 ? 'pr-8' : 'pl-8'}`}>
                    <div className="tech-card rounded-2xl p-6 group hover:neon-glow transition-all duration-500">
                      {/* En-tête */}
                      <div className="flex items-center space-x-3 mb-4">
                        <div className="w-12 h-12 tech-gradient rounded-xl flex items-center justify-center text-lg">
                          {item.icon}
                        </div>
                        <div>
                          <span className="inline-block px-3 py-1 bg-tech-800 text-tech-neon rounded-full text-sm font-semibold mb-1">
                            {item.year}
                          </span>
                          <h3 className="text-xl font-semibold text-white group-hover:tech-gradient-text transition-all duration-300">
                            {item.title}
                          </h3>
                        </div>
                      </div>
                      
                      {/* Description */}
                      <p className="text-tech-300 mb-4 leading-relaxed">
                        {item.description}
                      </p>
                      
                      {/* Jalons */}
                      <div className="space-y-2">
                        {item.milestones.map((milestone, mileIndex) => (
                          <div key={mileIndex} className="flex items-center space-x-2 text-sm">
                            <div className="w-1.5 h-1.5 tech-gradient rounded-full flex-shrink-0"></div>
                            <span className="text-tech-400">{milestone}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Section Vidéos Historiques */}
            <div className="mt-16">
              <h3 className="text-2xl font-bold text-center text-white mb-8">
                Moments Historiques en Vidéo
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[
                  {
                    title: "Fondation du Club",
                    description: "Les premiers jours de Techwaves ENSB",
                    duration: "2:15"
                  },
                  {
                    title: "Premier Hackathon",
                    description: "Retour en images sur notre premier grand événement",
                    duration: "4:30"
                  },
                  {
                    title: "Cérémonie des Partenariats",
                    description: "Signature des accords avec Huawei et Skills Area",
                    duration: "3:45"
                  },
                  {
                    title: "Témoignages des Membres",
                    description: "Ce que Techwaves représente pour notre communauté",
                    duration: "5:20"
                  }
                ].map((video, index) => (
                  <div 
                    key={index}
                    className="tech-card rounded-2xl overflow-hidden group hover:neon-glow transition-all duration-500"
                  >
                    <div className="h-48 tech-gradient relative overflow-hidden">
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="text-white text-center">
                          <div className="w-16 h-16 bg-white bg-opacity-20 rounded-2xl flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform duration-300">
                            <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                              <path d="M8 5v14l11-7z"/>
                            </svg>
                          </div>
                          <p className="text-sm opacity-90">{video.duration}</p>
                        </div>
                      </div>
                    </div>
                    <div className="p-6">
                      <h4 className="text-lg font-semibold text-white mb-2 group-hover:tech-gradient-text transition-all duration-300">
                        {video.title}
                      </h4>
                      <p className="text-tech-300 text-sm mb-4">
                        {video.description}
                      </p>
                      <button className="w-full border border-tech-700 text-tech-300 py-2 px-4 rounded-lg font-medium hover:bg-tech-700 hover:text-white transition-all duration-300 text-sm">
                        Regarder la Vidéo
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Section Futur */}
            <div className="tech-card rounded-2xl p-8 mt-12 text-center">
              <h3 className="text-2xl font-bold text-white mb-4">
                Le Futur de Techwaves
              </h3>
              <p className="text-tech-300 mb-6 max-w-2xl mx-auto leading-relaxed">
                Notre histoire ne fait que commencer. Avec une communauté grandissante, 
                des partenariats stratégiques et une vision claire, nous continuons à 
                repousser les limites de l'innovation technologique à l'ENSB et au-delà.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
                {[
                  { goal: "100+ Membres", description: "Communauté active" },
                  { goal: "Projets Internationaux", description: "Collaboration globale" },
                  { goal: "Centre d'Innovation", description: "Espace dédié" }
                ].map((item, index) => (
                  <div key={index} className="text-center p-4">
                    <div className="w-12 h-12 tech-gradient rounded-xl flex items-center justify-center mx-auto mb-3">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                      </svg>
                    </div>
                    <h4 className="font-semibold text-white mb-1">{item.goal}</h4>
                    <p className="text-tech-400 text-sm">{item.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Section>
      </main>
      <Footer />
    </>
  )
}