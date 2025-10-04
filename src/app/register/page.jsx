import Header from '@/components/Header'
import Section from '@/components/Section'
import Footer from '@/components/Footer'

export default function Register() {
  const departments = [
    "IT & Development",
    "Graphic Design", 
    "Marketing & Public Relations",
    "Content Creation & Events",
    "Organization & Logistics",
    "Photography & Video Editing"
  ]

  return (
    <>
      <Header />
      <main className="pt-20 min-h-screen grid-background">
        <Section 
          title="Rejoindre Techwaves" 
          subtitle="Devenez membre de notre communauté innovante"
        >
          <div className="max-w-2xl mx-auto">
            <div className="tech-card rounded-2xl p-8 neon-glow">
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-tech-300 mb-3">
                      Prénom *
                    </label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 bg-tech-800 border border-tech-700 rounded-xl focus:ring-2 focus:ring-tech-neon focus:border-transparent text-white placeholder-tech-500 transition-all duration-300"
                      placeholder="Votre prénom"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-tech-300 mb-3">
                      Nom *
                    </label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 bg-tech-800 border border-tech-700 rounded-xl focus:ring-2 focus:ring-tech-neon focus:border-transparent text-white placeholder-tech-500 transition-all duration-300"
                      placeholder="Votre nom"
                      required
                    />
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-tech-300 mb-3">
                    Email *
                  </label>
                  <input
                    type="email"
                    className="w-full px-4 py-3 bg-tech-800 border border-tech-700 rounded-xl focus:ring-2 focus:ring-tech-neon focus:border-transparent text-white placeholder-tech-500 transition-all duration-300"
                    placeholder="votre@email.com"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-tech-300 mb-3">
                    Téléphone
                  </label>
                  <input
                    type="tel"
                    className="w-full px-4 py-3 bg-tech-800 border border-tech-700 rounded-xl focus:ring-2 focus:ring-tech-neon focus:border-transparent text-white placeholder-tech-500 transition-all duration-300"
                    placeholder="+213 XX XX XX XX"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-tech-300 mb-3">
                    Département d'intérêt *
                  </label>
                  <select className="w-full px-4 py-3 bg-tech-800 border border-tech-700 rounded-xl focus:ring-2 focus:ring-tech-neon focus:border-transparent text-white transition-all duration-300">
                    <option value="" className="bg-tech-800">Choisissez un département</option>
                    {departments.map((dept, index) => (
                      <option key={index} value={dept} className="bg-tech-800">
                        {dept}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-tech-300 mb-3">
                    Niveau d'études
                  </label>
                  <select className="w-full px-4 py-3 bg-tech-800 border border-tech-700 rounded-xl focus:ring-2 focus:ring-tech-neon focus:border-transparent text-white transition-all duration-300">
                    <option value="" className="bg-tech-800">Choisissez votre niveau</option>
                    <option value="1ere" className="bg-tech-800">1ère année</option>
                    <option value="2eme" className="bg-tech-800">2ème année</option>
                    <option value="3eme" className="bg-tech-800">3ème année</option>
                    <option value="4eme" className="bg-tech-800">4ème année</option>
                    <option value="5eme" className="bg-tech-800">5ème année</option>
                  </select>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-tech-300 mb-3">
                    Motivation *
                  </label>
                  <textarea
                    rows="4"
                    className="w-full px-4 py-3 bg-tech-800 border border-tech-700 rounded-xl focus:ring-2 focus:ring-tech-neon focus:border-transparent text-white placeholder-tech-500 transition-all duration-300"
                    placeholder="Pourquoi souhaitez-vous rejoindre Techwaves ENSB ? Quelles sont vos compétences et passions ?"
                    required
                  ></textarea>
                </div>

                <div className="flex items-center space-x-3">
                  <input
                    type="checkbox"
                    id="newsletter"
                    className="w-4 h-4 tech-gradient rounded focus:ring-tech-neon"
                  />
                  <label htmlFor="newsletter" className="text-sm text-tech-300">
                    Je souhaite recevoir les newsletters et actualités du club
                  </label>
                </div>
                
                <button
                  type="submit"
                  className="w-full tech-gradient text-white font-semibold py-4 px-6 rounded-xl hover:scale-105 transition-transform duration-300 neon-glow text-lg"
                >
                  Soumettre ma candidature
                </button>

                <p className="text-center text-tech-400 text-sm">
                  Nous vous contacterons dans les 48h pour un entretien
                </p>
              </form>
            </div>

            {/* Info supplémentaire */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
              {[
                {
                  icon: "🚀",
                  title: "Processus Simple",
                  description: "Inscription rapide suivie d'un entretien amical"
                },
                {
                  icon: "👥",
                  title: "Communauté Active",
                  description: "Rejoignez 50+ membres passionnés de tech"
                },
                {
                  icon: "💼",
                  title: "Opportunités",
                  description: "Accès à des projets réels et formations"
                }
              ].map((item, index) => (
                <div key={index} className="tech-card rounded-xl p-6 text-center">
                  <div className="text-3xl mb-3">{item.icon}</div>
                  <h4 className="font-semibold text-white mb-2">{item.title}</h4>
                  <p className="text-tech-300 text-sm">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </Section>
      </main>
      <Footer />
    </>
  )
}