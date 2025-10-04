import Header from '@/components/Header'
import Section from '@/components/Section'
import Footer from '@/components/Footer'

export default function Projects() {
  const projects = [
    {
      title: "Site Web Techwaves",
      description: "Développement du site officiel du club avec les technologies les plus modernes",
      technologies: ["Next.js", "Tailwind CSS", "React", "Framer Motion"],
      status: "Complété",
      progress: 100,
      team: ["Zertit D.", "Frontend Team"],
      link: "#",
      github: "#",
      image: "/projects/website.jpg"
    },
    {
      title: "App Mobile Événements",
      description: "Application mobile cross-platform pour la gestion et participation aux événements",
      technologies: ["React Native", "Firebase", "Node.js", "Redux"],
      status: "En développement",
      progress: 75,
      team: ["Mobile Team", "Backend Team"],
      link: "#",
      github: "#",
      image: "/projects/app.jpg"
    },
    {
      title: "Plateforme E-Learning",
      description: "Solution complète d'apprentissage en ligne avec suivi de progression",
      technologies: ["Vue.js", "MongoDB", "Express", "Socket.io"],
      status: "En développement",
      progress: 60,
      team: ["Fullstack Team", "Design Team"],
      link: "#",
      github: "#",
      image: "/projects/elearning.jpg"
    },
    {
      title: "Système de Gestion",
      description: "ERP interne pour la gestion des membres, événements et ressources",
      technologies: ["React", "PostgreSQL", "NestJS", "TypeScript"],
      status: "Planifié",
      progress: 20,
      team: ["Backend Team", "DevOps"],
      link: "#",
      github: "#",
      image: "/projects/management.jpg"
    },
    {
      title: "AI Chatbot Assistant",
      description: "Chatbot intelligent utilisant l'IA pour répondre aux questions des membres",
      technologies: ["Python", "TensorFlow", "FastAPI", "React"],
      status: "En recherche",
      progress: 15,
      team: ["AI Team", "NLP Experts"],
      link: "#",
      github: "#",
      image: "/projects/chatbot.jpg"
    },
    {
      title: "Portail Étudiant ENSB",
      description: "Portail centralisé pour les ressources et services étudiants",
      technologies: ["Angular", "MySQL", "Spring Boot", "Docker"],
      status: "Planifié",
      progress: 5,
      team: ["ENSB Partnership", "Web Team"],
      link: "#",
      github: "#",
      image: "/projects/portal.jpg"
    }
  ]

  const getStatusColor = (status) => {
    switch (status) {
      case "Complété": return "text-green-400 bg-green-400 bg-opacity-10"
      case "En développement": return "text-yellow-400 bg-yellow-400 bg-opacity-10"
      case "En recherche": return "text-purple-400 bg-purple-400 bg-opacity-10"
      default: return "text-blue-400 bg-blue-400 bg-opacity-10"
    }
  }

  return (
    <>
      <Header />
      <main className="pt-20 min-h-screen grid-background">
        <Section 
          title="Nos Projets Innovants" 
          subtitle="Des solutions technologiques qui repoussent les limites"
        >
          {/* Stats des projets */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
            {[
              { number: "6", label: "Projets Actifs" },
              { number: "15+", label: "Technologies" },
              { number: "20+", label: "Développeurs" },
              { number: "1", label: "Projet Live" }
            ].map((stat, index) => (
              <div key={index} className="tech-card rounded-xl p-6 text-center">
                <div className="tech-gradient-text text-3xl font-bold mb-2">{stat.number}</div>
                <div className="text-tech-300 text-sm">{stat.label}</div>
              </div>
            ))}
          </div>

          {/* Grille des projets */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <div 
                key={index}
                className="tech-card rounded-2xl overflow-hidden group hover:neon-glow transition-all duration-500"
              >
                {/* Image/Header du projet */}
                <div className="h-48 tech-gradient relative overflow-hidden">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-white text-center">
                      <div className="w-16 h-16 bg-white bg-opacity-20 rounded-2xl flex items-center justify-center mx-auto mb-3">
                        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                        </svg>
                      </div>
                      <p className="text-sm opacity-90">Projet {index + 1}</p>
                    </div>
                  </div>
                  
                  {/* Badge de statut */}
                  <div className="absolute top-4 right-4">
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(project.status)}`}>
                      {project.status}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-white mb-3 group-hover:tech-gradient-text transition-all duration-300">
                    {project.title}
                  </h3>
                  <p className="text-tech-300 mb-4 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Barre de progression */}
                  <div className="mb-4">
                    <div className="flex justify-between text-sm text-tech-400 mb-2">
                      <span>Progression</span>
                      <span>{project.progress}%</span>
                    </div>
                    <div className="w-full bg-tech-800 rounded-full h-2">
                      <div 
                        className="tech-gradient h-2 rounded-full transition-all duration-1000"
                        style={{ width: `${project.progress}%` }}
                      ></div>
                    </div>
                  </div>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech, techIndex) => (
                      <span 
                        key={techIndex}
                        className="px-2 py-1 bg-tech-800 text-tech-300 rounded-lg text-xs border border-tech-700"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Équipe */}
                  <div className="flex items-center justify-between text-sm text-tech-400 mb-4">
                    <span>Équipe: {project.team.join(", ")}</span>
                  </div>

                  {/* Actions */}
                  <div className="flex space-x-3">
                    <button className="flex-1 tech-gradient text-white py-2 px-4 rounded-lg font-medium hover:scale-105 transition-transform duration-300 text-sm">
                      Voir le Projet
                    </button>
                    <button className="w-10 h-10 border border-tech-700 rounded-lg flex items-center justify-center text-tech-400 hover:bg-tech-700 hover:text-white transition-all duration-300">
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* CTA Section */}
          <div className="text-center mt-16">
            <div className="tech-card rounded-2xl p-8 max-w-2xl mx-auto">
              <h3 className="text-2xl font-bold text-white mb-4">
                Vous Avez une Idée de Projet ?
              </h3>
              <p className="text-tech-300 mb-6">
                Rejoignez-nous pour transformer vos idées innovantes en réalité. 
                Nous fournissons les ressources et l'expertise nécessaires.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="tech-gradient text-white px-8 py-3 rounded-xl font-semibold hover:scale-105 transition-transform duration-300 neon-glow">
                  Proposer un Projet
                </button>
                <button className="border-2 border-tech-500 text-tech-300 px-8 py-3 rounded-xl font-semibold hover:bg-tech-500 hover:text-white transition-all duration-300">
                  Voir le GitHub
                </button>
              </div>
            </div>
          </div>
        </Section>
      </main>
      <Footer />
    </>
  )
}