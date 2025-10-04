import Header from '@/components/Header'
import Section from '@/components/Section'
import Footer from '@/components/Footer'

export default function Events() {
  const upcomingEvents = [
    {
      title: "Workshop React Avancé",
      date: "15 Déc 2024",
      time: "14:00 - 17:00",
      location: "Salle A12, ENSB",
      type: "Workshop",
      description: "Session avancée sur React 18, hooks personnalisés, et performance optimization",
      speaker: "Zertit Dorsane",
      capacity: 30,
      registered: 28,
      image: "/events/react-workshop.jpg"
    },
    {
      title: "Hackathon Intelligence Artificielle",
      date: "20-21 Déc 2024",
      time: "09:00 - 18:00",
      location: "Espace Innovation ENSB",
      type: "Hackathon",
      description: "48h de développement intensif autour des solutions IA et machine learning",
      speaker: "Équipe AI Techwaves",
      capacity: 120,
      registered: 95,
      image: "/events/ai-hackathon.jpg"
    },
    {
      title: "Conférence Cloud Computing",
      date: "10 Jan 2025",
      time: "10:00 - 12:00",
      location: "Amphithéâtre Principal",
      type: "Conférence",
      description: "Introduction aux technologies cloud et leur application dans les projets modernes",
      speaker: "Expert Huawei Cloud",
      capacity: 200,
      registered: 150,
      image: "/events/cloud-conference.jpg"
    }
  ]

  const pastEvents = [
    {
      title: "Workshop Débutant Web Development",
      date: "15 Nov 2024",
      participants: 45,
      type: "Workshop",
      status: "Complété"
    },
    {
      title: "Hackathon Innovation Digitale",
      date: "25-26 Oct 2024",
      participants: 120,
      type: "Hackathon",
      status: "Complété"
    },
    {
      title: "Conférence Cybersecurity",
      date: "5 Sep 2024",
      participants: 80,
      type: "Conférence",
      status: "Complété"
    },
    {
      title: "Atelier Design UI/UX",
      date: "20 Jul 2024",
      participants: 35,
      type: "Workshop",
      status: "Complété"
    }
  ]

  const eventStats = [
    { number: "12", label: "Événements Organisés" },
    { number: "500+", label: "Participants Totaux" },
    { number: "15", label: "Intervenants Experts" },
    { number: "3", label: "Types d'Événements" }
  ]

  const getEventTypeColor = (type) => {
    switch (type) {
      case "Workshop": return "from-blue-500 to-cyan-500"
      case "Hackathon": return "from-purple-500 to-pink-500"
      case "Conférence": return "from-green-500 to-teal-500"
      default: return "from-orange-500 to-red-500"
    }
  }

  return (
    <>
      <Header />
      <main className="pt-20 min-h-screen grid-background">
        <Section 
          title="Agenda des Événements" 
          subtitle="Ne manquez pas nos prochains rendez-vous technologiques"
        >
          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
            {eventStats.map((stat, index) => (
              <div key={index} className="tech-card rounded-xl p-6 text-center">
                <div className="tech-gradient-text text-3xl font-bold mb-2">{stat.number}</div>
                <div className="text-tech-300 text-sm">{stat.label}</div>
              </div>
            ))}
          </div>

          {/* Événements à venir */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-center text-white mb-8">
              Prochains Événements
            </h3>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {upcomingEvents.map((event, index) => (
                <div 
                  key={index}
                  className="tech-card rounded-2xl overflow-hidden group hover:neon-glow transition-all duration-500"
                >
                  {/* Header avec gradient */}
                  <div className={`h-32 bg-gradient-to-r ${getEventTypeColor(event.type)} relative`}>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-white text-center">
                        <div className="w-16 h-16 bg-white bg-opacity-20 rounded-2xl flex items-center justify-center mx-auto mb-3">
                          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                          </svg>
                        </div>
                        <p className="text-sm opacity-90">{event.type}</p>
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <div className="flex justify-between items-start mb-4">
                      <span className="px-3 py-1 bg-tech-800 text-tech-300 rounded-full text-sm font-medium border border-tech-700">
                        {event.type}
                      </span>
                      <span className="text-sm text-tech-500">
                        {event.date}
                      </span>
                    </div>
                    
                    <h4 className="text-xl font-semibold text-white mb-3 group-hover:tech-gradient-text transition-all duration-300">
                      {event.title}
                    </h4>
                    
                    <p className="text-tech-300 mb-4 leading-relaxed">
                      {event.description}
                    </p>

                    {/* Info détaillée */}
                    <div className="space-y-2 text-sm text-tech-400 mb-4">
                      <div className="flex items-center space-x-2">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <span>{event.time}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                        <span>{event.location}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                        </svg>
                        <span>Intervenant: {event.speaker}</span>
                      </div>
                    </div>

                    {/* Barre de progression des inscriptions */}
                    <div className="mb-4">
                      <div className="flex justify-between text-sm text-tech-400 mb-2">
                        <span>Inscriptions</span>
                        <span>{event.registered}/{event.capacity}</span>
                      </div>
                      <div className="w-full bg-tech-800 rounded-full h-2">
                        <div 
                          className="tech-gradient h-2 rounded-full transition-all duration-1000"
                          style={{ width: `${(event.registered / event.capacity) * 100}%` }}
                        ></div>
                      </div>
                    </div>

                    <button className="w-full tech-gradient text-white font-medium py-3 px-4 rounded-lg hover:scale-105 transition-transform duration-300">
                      S'inscrire Maintenant
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Archives des événements */}
          <div>
            <h3 className="text-2xl font-bold text-center text-white mb-8">
              Événements Passés
            </h3>
            <div className="tech-card rounded-2xl overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-tech-800">
                    <tr>
                      <th className="px-6 py-4 text-left text-sm font-medium text-tech-300 uppercase tracking-wider">
                        Événement
                      </th>
                      <th className="px-6 py-4 text-left text-sm font-medium text-tech-300 uppercase tracking-wider">
                        Date
                      </th>
                      <th className="px-6 py-4 text-left text-sm font-medium text-tech-300 uppercase tracking-wider">
                        Type
                      </th>
                      <th className="px-6 py-4 text-left text-sm font-medium text-tech-300 uppercase tracking-wider">
                        Participants
                      </th>
                      <th className="px-6 py-4 text-left text-sm font-medium text-tech-300 uppercase tracking-wider">
                        Statut
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-tech-800">
                    {pastEvents.map((event, index) => (
                      <tr key={index} className="hover:bg-tech-800 transition-colors duration-300">
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="text-sm font-medium text-white">
                            {event.title}
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="text-sm text-tech-400">
                            {event.date}
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <span className="px-3 py-1 text-xs bg-tech-700 text-tech-300 rounded-full border border-tech-600">
                            {event.type}
                          </span>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-tech-400">
                          {event.participants} participants
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <span className="px-2 py-1 text-xs bg-green-400 bg-opacity-10 text-green-400 rounded-full">
                            {event.status}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          {/* Newsletter */}
          <div className="tech-card rounded-2xl p-8 mt-12 text-center">
            <h3 className="text-2xl font-bold text-white mb-4">
              Restez Informé
            </h3>
            <p className="text-tech-300 mb-6 max-w-2xl mx-auto">
              Ne manquez aucun de nos événements. Inscrivez-vous à notre newsletter 
              pour recevoir les dernières actualités et invitations en avant-première.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Votre email"
                className="flex-1 px-4 py-3 bg-tech-800 border border-tech-700 rounded-xl focus:ring-2 focus:ring-tech-neon focus:border-transparent text-white placeholder-tech-500"
              />
              <button className="tech-gradient text-white px-6 py-3 rounded-xl font-semibold hover:scale-105 transition-transform duration-300">
                S'abonner
              </button>
            </div>
          </div>
        </Section>
      </main>
      <Footer />
    </>
  )
}