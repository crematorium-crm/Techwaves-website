import Header from '@/components/Header'
import Section from '@/components/Section'
import Footer from '@/components/Footer'

export default function Certificates() {
  const certificates = [
    {
      title: "Ambassador Skills Area Egypt",
      issuer: "Skills Area Egypt",
      date: "2024",
      description: "Certification officielle d'ambassadeur pour la région MENA",
      type: "Partnership",
      level: "International",
      image: "/certificates/skills-area.jpg"
    },
    {
      title: "Huawei ICT Academy Ambassador",
      issuer: "Huawei Technologies",
      date: "2024",
      description: "Ambassadeur officiel de l'académie ICT Huawei Constantine",
      type: "Partnership",
      level: "National",
      image: "/certificates/huawei.jpg"
    },
    {
      title: "Best Tech Club 2024",
      issuer: "ENSB University",
      date: "2024",
      description: "Reconnaissance comme meilleur club technologique de l'année",
      type: "Award",
      level: "University",
      image: "/certificates/best-club.jpg"
    },
    {
      title: "Innovation Excellence Award",
      issuer: "Algeria Tech Summit",
      date: "2024",
      description: "Prix d'excellence en innovation technologique",
      type: "Award",
      level: "National",
      image: "/certificates/innovation.jpg"
    },
    {
      title: "Community Impact Recognition",
      issuer: "Digital Algeria Initiative",
      date: "2024",
      description: "Reconnaissance pour l'impact communautaire positif",
      type: "Recognition",
      level: "National",
      image: "/certificates/community.jpg"
    },
    {
      title: "Excellence in Education",
      issuer: "Tech Education Alliance",
      date: "2023",
      description: "Certification d'excellence en éducation technologique",
      type: "Certification",
      level: "International",
      image: "/certificates/education.jpg"
    }
  ]

  const awards = [
    { name: "Hackathon National", count: "1er Prix", year: "2024", participants: "120+" },
    { name: "Web Development Challenge", count: "2ème Prix", year: "2024", participants: "80+" },
    { name: "AI Innovation Contest", count: "1er Prix", year: "2023", participants: "60+" },
    { name: "UI/UX Design Competition", count: "3ème Prix", year: "2023", participants: "45+" }
  ]

  const getTypeColor = (type) => {
    switch (type) {
      case "Partnership": return "from-blue-500 to-cyan-500"
      case "Award": return "from-purple-500 to-pink-500"
      case "Recognition": return "from-green-500 to-teal-500"
      default: return "from-orange-500 to-red-500"
    }
  }

  const getLevelColor = (level) => {
    switch (level) {
      case "International": return "text-yellow-400 bg-yellow-400 bg-opacity-10"
      case "National": return "text-green-400 bg-green-400 bg-opacity-10"
      default: return "text-blue-400 bg-blue-400 bg-opacity-10"
    }
  }

  return (
    <>
      <Header />
      <main className="pt-20 min-h-screen grid-background">
        <Section 
          title="Nos Certifications & Récompenses" 
          subtitle="Les reconnaissances qui témoignent de notre excellence"
        >
          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
            {[
              { number: "6", label: "Certifications" },
              { number: "4", label: "Prix Remportés" },
              { number: "2", label: "Partenariats" },
              { number: "3", label: "Reconnaissances" }
            ].map((stat, index) => (
              <div key={index} className="tech-card rounded-xl p-6 text-center">
                <div className="tech-gradient-text text-3xl font-bold mb-2">{stat.number}</div>
                <div className="text-tech-300 text-sm">{stat.label}</div>
              </div>
            ))}
          </div>

          {/* Galerie des certificats */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {certificates.map((cert, index) => (
              <div 
                key={index}
                className="tech-card rounded-2xl overflow-hidden group hover:neon-glow transition-all duration-500"
              >
                {/* Header avec gradient */}
                <div className={`h-32 bg-gradient-to-r ${getTypeColor(cert.type)} relative overflow-hidden`}>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-white text-center">
                      <div className="w-16 h-16 bg-white bg-opacity-20 rounded-2xl flex items-center justify-center mx-auto mb-3">
                        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </div>
                      <p className="text-sm opacity-90">{cert.type}</p>
                    </div>
                  </div>
                  
                  {/* Badge de niveau */}
                  <div className="absolute top-4 right-4">
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${getLevelColor(cert.level)}`}>
                      {cert.level}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-lg font-semibold text-white mb-2 group-hover:tech-gradient-text transition-all duration-300">
                    {cert.title}
                  </h3>
                  <p className="text-tech-neon font-medium mb-1">
                    {cert.issuer}
                  </p>
                  <p className="text-tech-500 text-sm mb-3">
                    {cert.date}
                  </p>
                  <p className="text-tech-300 text-sm mb-4 leading-relaxed">
                    {cert.description}
                  </p>
                  
                  <button className="w-full border border-tech-700 text-tech-300 py-2 px-4 rounded-lg font-medium hover:bg-tech-700 hover:text-white transition-all duration-300 text-sm">
                    Voir le Certificat
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Récompenses et Prix */}
          <div className="tech-card rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-center text-white mb-8">
              Nos Récompenses
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {awards.map((award, index) => (
                <div key={index} className="text-center group">
                  <div className="relative inline-block mb-4">
                    <div className="w-20 h-20 tech-gradient rounded-2xl flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300">
                      <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                      </svg>
                    </div>
                    <div className="absolute -top-2 -right-2 w-6 h-6 bg-yellow-500 rounded-full flex items-center justify-center text-xs font-bold text-white">
                      {index + 1}
                    </div>
                  </div>
                  <h4 className="font-semibold text-white mb-2 group-hover:tech-gradient-text transition-all duration-300">
                    {award.name}
                  </h4>
                  <p className="tech-gradient-text font-bold text-lg mb-1">
                    {award.count}
                  </p>
                  <p className="text-tech-500 text-sm mb-1">
                    {award.year}
                  </p>
                  <p className="text-tech-400 text-xs">
                    {award.participants} participants
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Partenariats Section */}
          <div className="tech-card rounded-2xl p-8 mt-12">
            <h3 className="text-2xl font-bold text-center text-white mb-8">
              Nos Partenariats Stratégiques
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="text-center p-6">
                <div className="w-16 h-16 tech-gradient rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold">SA</span>
                </div>
                <h4 className="text-xl font-semibold text-white mb-2">Skills Area Egypt</h4>
                <p className="text-tech-300 mb-4">
                  Partenaire officiel pour le développement des compétences dans la région MENA
                </p>
                <span className="px-3 py-1 bg-blue-400 bg-opacity-10 text-blue-400 rounded-full text-sm">
                  Partenaire International
                </span>
              </div>
              
              <div className="text-center p-6">
                <div className="w-16 h-16 tech-gradient rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold">H</span>
                </div>
                <h4 className="text-xl font-semibold text-white mb-2">Huawei ICT Academy</h4>
                <p className="text-tech-300 mb-4">
                  Collaboration pour la formation et certification en technologies ICT
                </p>
                <span className="px-3 py-1 bg-green-400 bg-opacity-10 text-green-400 rounded-full text-sm">
                  Partenaire National
                </span>
              </div>
            </div>
          </div>
        </Section>
      </main>
      <Footer />
    </>
  )
}