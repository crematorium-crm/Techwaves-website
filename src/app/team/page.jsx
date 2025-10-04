import Header from '@/components/Header'
import Section from '@/components/Section'
import Footer from '@/components/Footer'

export default function Team() {
  const teamMembers = [
    {
      name: "Zertit Dorsane",
      role: "Fondateur & Leader",
      department: "IT & Development",
      bio: "Web developer & data analyst, fondateur de Techwaves ENSB",
      badges: ["Fondateur", "Tech Lead"],
      social: { linkedin: "#", github: "#" }
    },
    {
      name: "Zertit Mahinar",
      role: "Co-Fondatrice & HR Leader",
      department: "Graphic Design",
      bio: "Founder et leader des ressources humaines",
      badges: ["Co-Fondatrice", "HR"],
      social: { linkedin: "#", behance: "#" }
    },
    {
      name: "Melek Saidia",
      role: "Co-Leader",
      department: "Graphic Design",
      bio: "Designer graphique talentueuse, spécialiste UI/UX",
      badges: ["Design", "Creative"],
      social: { linkedin: "#", behance: "#" }
    },
    {
      name: "Boulbnane Razane",
      role: "Leader",
      department: "Marketing & Public Relations",
      bio: "Responsable marketing et relations publiques",
      badges: ["Marketing", "PR"],
      social: { linkedin: "#", twitter: "#" }
    },
    {
      name: "Soror Benabderhaman",
      role: "Leader",
      department: "Content Creation & Events",
      bio: "Création de contenu et organisation d'événements",
      badges: ["Content", "Events"],
      social: { linkedin: "#", instagram: "#" }
    },
    {
      name: "Assil Bouzeiak",
      role: "Co-Leader",
      department: "Organization & Logistics",
      bio: "Organisation et logistique des événements",
      badges: ["Logistics", "Planning"],
      social: { linkedin: "#" }
    },
    {
      name: "Balquis Khedara",
      role: "Co-Leader",
      department: "Organization & Logistics",
      bio: "Organisation et logistique des événements",
      badges: ["Logistics", "Coordination"],
      social: { linkedin: "#" }
    },
    {
      name: "Maram Rouina",
      role: "Co-Leader",
      department: "Photography & Video Editing",
      bio: "Photographie et montage vidéo professionnel",
      badges: ["Photo", "Video"],
      social: { linkedin: "#", instagram: "#" }
    },
    {
      name: "Rouia Hadj Khalouf",
      role: "Co-Leader",
      department: "Photography & Video Editing",
      bio: "Photographie et montage vidéo créatif",
      badges: ["Photo", "Creative"],
      social: { linkedin: "#", instagram: "#" }
    }
  ]

  return (
    <>
      <Header />
      <main className="pt-20 min-h-screen grid-background">
        <Section 
          title="Notre Dream Team" 
          subtitle="Rencontrez les esprits brillants derrière Techwaves ENSB"
        >
          {/* Stats de l'équipe */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
            {[
              { number: "9", label: "Membres Leaders" },
              { number: "6", label: "Départements" },
              { number: "2", label: "Fondateurs" },
              { number: "50+", label: "Membres Totaux" }
            ].map((stat, index) => (
              <div key={index} className="tech-card rounded-xl p-6 text-center">
                <div className="tech-gradient-text text-3xl font-bold mb-2">{stat.number}</div>
                <div className="text-tech-300 text-sm">{stat.label}</div>
              </div>
            ))}
          </div>

          {/* Grille des membres */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <div 
                key={index}
                className="tech-card rounded-2xl overflow-hidden group hover:neon-glow transition-all duration-500"
              >
                {/* Header avec avatar */}
                <div className="relative h-32 tech-gradient">
                  <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2">
                    <div className="w-16 h-16 bg-tech-800 rounded-full border-4 border-tech-800 flex items-center justify-center">
                      <span className="text-xl font-bold tech-gradient-text">
                        {member.name.split(' ').map(n => n[0]).join('')}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="pt-10 pb-6 px-6 text-center">
                  <h3 className="text-xl font-semibold text-white mb-2 group-hover:tech-gradient-text transition-all duration-300">
                    {member.name}
                  </h3>
                  <p className="text-tech-neon font-medium mb-1">
                    {member.role}
                  </p>
                  <p className="text-tech-400 text-sm mb-4">
                    {member.department}
                  </p>
                  <p className="text-tech-300 text-sm mb-4 leading-relaxed">
                    {member.bio}
                  </p>

                  {/* Badges */}
                  <div className="flex flex-wrap justify-center gap-2 mb-4">
                    {member.badges.map((badge, badgeIndex) => (
                      <span 
                        key={badgeIndex}
                        className="px-2 py-1 bg-tech-800 text-tech-300 rounded-full text-xs border border-tech-700"
                      >
                        {badge}
                      </span>
                    ))}
                  </div>

                  {/* Social Links */}
                  <div className="flex justify-center space-x-3">
                    {Object.entries(member.social).map(([platform, link]) => (
                      <a
                        key={platform}
                        href={link}
                        className="w-8 h-8 border border-tech-700 rounded-lg flex items-center justify-center text-tech-400 hover:tech-gradient hover:text-white hover:border-tech-neon transition-all duration-300"
                      >
                        <span className="text-xs font-medium">{platform[0].toUpperCase()}</span>
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* CTA Section */}
          <div className="text-center mt-16">
            <div className="tech-card rounded-2xl p-8 max-w-2xl mx-auto">
              <h3 className="text-2xl font-bold text-white mb-4">
                Rejoignez Notre Équipe
              </h3>
              <p className="text-tech-300 mb-6">
                Vous souhaitez faire partie de cette aventure technologique ? 
                Postulez dès maintenant et développez vos compétences avec nous.
              </p>
              <button className="tech-gradient text-white px-8 py-3 rounded-xl font-semibold hover:scale-105 transition-transform duration-300 neon-glow">
                Postuler Maintenant
              </button>
            </div>
          </div>
        </Section>
      </main>
      <Footer />
    </>
  )
}