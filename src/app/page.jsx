import Header from '@/components/Header'
import Hero from '@/components/Hero'
import Section from '@/components/Section'
import Footer from '@/components/Footer'

export default function Home() {
  const features = [
    {
      icon: '💻',
      title: 'Développement IT',
      description: 'Maîtrisez les technologies modernes avec nos workshops pratiques',
      gradient: 'from-blue-500 to-cyan-500'
    },
    {
      icon: '🎨',
      title: 'Design Graphique',
      description: 'Créez des designs impactants avec nos experts en design',
      gradient: 'from-purple-500 to-pink-500'
    },
    {
      icon: '📱',
      title: 'Innovation',
      description: 'Participez à des projets innovants qui changent le monde',
      gradient: 'from-green-500 to-teal-500'
    }
  ]

  const departments = [
    { name: 'IT & Development', leader: 'Zertit Dorsane (Founder)' },
    { name: 'Graphic Design', leader: 'Zertit Mahinar (Founder, HR Leader) & Melek Saidia' },
    { name: 'Marketing & Public Relations', leader: 'Boulbnane Razane' },
    { name: 'Content Creation & Events', leader: 'Soror Benabderhaman' },
    { name: 'Organization & Logistics', leader: 'Assil Bouzeiak & Balquis Khedara' },
    { name: 'Photography & Video Editing', leader: 'Maram Rouina & Rouia Hadj Khalouf' },
  ]

  return (
    <>
      <Header />
      <main className="pt-16">
        <Hero />
        
        {/* Features Section */}
        <Section 
          title="Ce Que Nous Offrons" 
          subtitle="Découvrez les domaines d'expertise de Techwaves ENSB"
          className="bg-tech-dark"
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div 
                key={index}
                className="tech-card rounded-2xl p-8 text-center group cursor-pointer"
              >
                <div className={`w-20 h-20 mx-auto mb-6 rounded-2xl bg-gradient-to-r ${feature.gradient} flex items-center justify-center text-2xl group-hover:scale-110 transition-transform duration-300`}>
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">
                  {feature.title}
                </h3>
                <p className="text-tech-300 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </Section>

        {/* À propos Section */}
        <Section 
          title="Notre Histoire" 
          subtitle="Fondé avec passion, grandi avec excellence"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="tech-card rounded-2xl p-6">
                <h3 className="text-2xl font-semibold text-white mb-4 tech-gradient-text">
                  Fondé le 5 octobre par Zertit Dorsane
                </h3>
                <p className="text-tech-300 mb-6 leading-relaxed">
                  Techwaves ENSB est bien plus qu'un club étudiant. C'est un écosystème 
                  dynamique où l'innovation rencontre l'excellence. Nous créons des 
                  opportunités uniques pour les passionnés de technologie.
                </p>
                <div className="space-y-3">
                  {[
                    "Ambassador of Skills Area Egypt",
                    "Ambassador of Huawei ICT Academy Constantine",
                    "Web developer & data analyst expertise"
                  ].map((item, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <div className="w-2 h-2 tech-gradient rounded-full flex-shrink-0"></div>
                      <span className="text-tech-300">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div className="tech-gradient rounded-2xl p-8 text-white relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-white bg-opacity-10 rounded-full -translate-y-16 translate-x-16"></div>
                <div className="absolute bottom-0 left-0 w-24 h-24 bg-white bg-opacity-10 rounded-full translate-y-12 -translate-x-12"></div>
                
                <div className="relative z-10">
                  <h4 className="text-2xl font-semibold mb-6">Notre Impact</h4>
                  <div className="grid grid-cols-2 gap-6">
                    {[
                      { number: '50+', label: 'Membres Actifs' },
                      { number: '20+', label: 'Événements' },
                      { number: '10+', label: 'Projets' },
                      { number: '5+', label: 'Partenaires' }
                    ].map((stat, index) => (
                      <div key={index} className="text-center">
                        <div className="text-3xl font-bold mb-1">{stat.number}</div>
                        <div className="text-tech-100 text-sm">{stat.label}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Section>

        {/* Départements Section */}
        <Section 
          title="Notre Structure" 
          subtitle="Une organisation optimisée pour l'excellence"
          className="bg-tech-dark"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {departments.map((dept, index) => (
              <div 
                key={index}
                className="tech-card rounded-xl p-6 group cursor-pointer"
              >
                <div className="flex items-start justify-between mb-4">
                  <h3 className="text-lg font-semibold text-white group-hover:tech-gradient-text transition-all duration-300">
                    {dept.name}
                  </h3>
                  <div className="w-2 h-2 tech-gradient rounded-full mt-2"></div>
                </div>
                <p className="text-tech-300 text-sm leading-relaxed">
                  {dept.leader}
                </p>
              </div>
            ))}
          </div>
        </Section>

        {/* CTA Section */}
        <Section>
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Prêt à Rejoindre la Révolution?
            </h2>
            <p className="text-tech-300 text-lg mb-8 max-w-2xl mx-auto">
              Rejoignez Techwaves ENSB aujourd'hui et commencez votre voyage 
              dans le monde passionnant de la technologie.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="tech-gradient text-white px-8 py-4 rounded-xl font-semibold text-lg hover:scale-105 transition-transform duration-300 neon-glow">
                Devenir Membre
              </button>
              <button className="border-2 border-tech-500 text-tech-300 px-8 py-4 rounded-xl font-semibold text-lg hover:bg-tech-500 hover:text-white transition-all duration-300">
                Voir les Projets
              </button>
            </div>
          </div>
        </Section>
      </main>
      <Footer />
    </>
  )
}