"use client"
import Header from '@/components/Header'
import Footer from '@/components/Footer'

import { useState } from 'react'
import { Calendar, Clock, MapPin, User, Users, TrendingUp, Zap, Code, Cpu } from 'lucide-react'

export default function Events() {
  const [hoveredEvent, setHoveredEvent] = useState(null)

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
      icon: Code
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
      icon: Cpu
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
      icon: Zap
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
    { number: "12", label: "Événements Organisés", icon: Calendar },
    { number: "500+", label: "Participants Totaux", icon: Users },
    { number: "15", label: "Intervenants Experts", icon: User },
    { number: "3", label: "Types d'Événements", icon: TrendingUp }
  ]

  const getEventTypeColor = (type) => {
    switch (type) {
      case "Workshop": return "from-blue-600 via-blue-500 to-cyan-500"
      case "Hackathon": return "from-cyan-600 via-cyan-500 to-blue-400"
      case "Conférence": return "from-blue-500 via-cyan-500 to-cyan-400"
      default: return "from-blue-600 to-cyan-600"
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
      {/* Animated Background Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 -left-48 w-96 h-96 bg-cyan-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-pulse"></div>
        <div className="absolute top-1/3 -right-48 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-pulse delay-1000"></div>
        <div className="absolute bottom-1/4 left-1/3 w-96 h-96 bg-cyan-600 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-pulse delay-2000"></div>
      </div>

      {/* Grid Pattern Overlay */}
      <div className="fixed inset-0 pointer-events-none" style={{
        backgroundImage: `linear-gradient(rgba(6, 182, 212, 0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(6, 182, 212, 0.03) 1px, transparent 1px)`,
        backgroundSize: '50px 50px'
      }}></div>
      <Header />
      <main className="relative pt-24 pb-20 px-4 sm:px-6 lg:px-8">
        
        <div className="max-w-7xl mx-auto">
          {/* Hero Section */}
          <div className="text-center mb-16 relative">
            <div className="inline-block mb-6">
              <div className="flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-slate-800 to-slate-700 border border-cyan-500/20 rounded-full shadow-lg shadow-cyan-500/10">
                <Calendar className="w-5 h-5 text-cyan-400" />
                <span className="text-cyan-300 font-medium">Agenda 2024-2025</span>
              </div>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-cyan-500 bg-clip-text text-transparent">
                Événements Tech
              </span>
            </h1>
            <p className="text-xl text-slate-400 max-w-3xl mx-auto leading-relaxed">
              Rejoignez-nous pour des expériences technologiques inoubliables. 
              Workshops, hackathons et conférences avec les meilleurs experts du domaine.
            </p>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mb-20">
            {eventStats.map((stat, index) => {
              const Icon = stat.icon
              return (
                <div 
                  key={index} 
                  className="group relative bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-xl rounded-2xl p-6 border border-slate-700/50 hover:border-cyan-500/50 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/20"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/0 to-blue-500/0 group-hover:from-cyan-500/5 group-hover:to-blue-500/5 rounded-2xl transition-all duration-500"></div>
                  <div className="relative">
                    <Icon className="w-8 h-8 text-cyan-400 mb-4 group-hover:scale-110 transition-transform duration-300" />
                    <div className="text-4xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent mb-2">
                      {stat.number}
                    </div>
                    <div className="text-slate-400 text-sm font-medium">{stat.label}</div>
                  </div>
                </div>
              )
            })}
          </div>

          {/* Upcoming Events */}
          <div className="mb-20">
            <div className="flex items-center gap-4 mb-10">
              <div className="h-1 flex-1 bg-gradient-to-r from-transparent via-cyan-500 to-transparent"></div>
              <h2 className="text-3xl md:text-4xl font-bold text-white">
                <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                  Prochains Événements
                </span>
              </h2>
              <div className="h-1 flex-1 bg-gradient-to-r from-transparent via-cyan-500 to-transparent"></div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {upcomingEvents.map((event, index) => {
                const Icon = event.icon
                const progress = (event.registered / event.capacity) * 100
                
                return (
                  <div 
                    key={index}
                    onMouseEnter={() => setHoveredEvent(index)}
                    onMouseLeave={() => setHoveredEvent(null)}
                    className="group relative bg-gradient-to-br from-slate-800/90 to-slate-900/90 backdrop-blur-xl rounded-3xl overflow-hidden border border-slate-700/50 hover:border-cyan-500/50 transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl hover:shadow-cyan-500/20"
                  >
                    {/* Animated gradient overlay */}
                    <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/0 via-blue-500/0 to-cyan-500/0 group-hover:from-cyan-500/10 group-hover:via-blue-500/5 group-hover:to-cyan-500/10 transition-all duration-700"></div>
                    
                    {/* Header with gradient */}
                    <div className={`relative h-48 bg-gradient-to-br ${getEventTypeColor(event.type)} overflow-hidden`}>
                      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAwIDEwIEwgNDAgMTAgTSAxMCAwIEwgMTAgNDAgTSAwIDIwIEwgNDAgMjAgTSAyMCAwIEwgMjAgNDAgTSAwIDMwIEwgNDAgMzAgTSAzMCAwIEwgMzAgNDAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS1vcGFjaXR5PSIwLjEiIHN0cm9rZS13aWR0aD0iMSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmlkKSIvPjwvc3ZnPg==')] opacity-30"></div>
                      <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
                        <div className="relative mb-4">
                          <div className="absolute inset-0 bg-white/20 blur-xl rounded-full"></div>
                          <div className="relative bg-white/10 backdrop-blur-sm p-5 rounded-2xl border border-white/20 group-hover:scale-110 transition-transform duration-300">
                            <Icon className="w-10 h-10" />
                          </div>
                        </div>
                        <span className="text-lg font-semibold tracking-wide">{event.type}</span>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="relative p-6">
                      <div className="flex justify-between items-start mb-4">
                        <span className="px-4 py-1.5 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 text-cyan-400 rounded-full text-sm font-medium border border-cyan-500/30">
                          {event.type}
                        </span>
                        <div className="flex items-center gap-2 text-slate-400">
                          <Calendar className="w-4 h-4" />
                          <span className="text-sm font-medium">{event.date}</span>
                        </div>
                      </div>
                      
                      <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors duration-300">
                        {event.title}
                      </h3>
                      
                      <p className="text-slate-400 mb-6 leading-relaxed">
                        {event.description}
                      </p>

                      {/* Event Details */}
                      <div className="space-y-3 mb-6">
                        <div className="flex items-center gap-3 text-slate-400 hover:text-cyan-400 transition-colors">
                          <Clock className="w-4 h-4 text-cyan-500" />
                          <span className="text-sm">{event.time}</span>
                        </div>
                        <div className="flex items-center gap-3 text-slate-400 hover:text-cyan-400 transition-colors">
                          <MapPin className="w-4 h-4 text-cyan-500" />
                          <span className="text-sm">{event.location}</span>
                        </div>
                        <div className="flex items-center gap-3 text-slate-400 hover:text-cyan-400 transition-colors">
                          <User className="w-4 h-4 text-cyan-500" />
                          <span className="text-sm">{event.speaker}</span>
                        </div>
                      </div>

                      {/* Registration Progress */}
                      <div className="mb-6">
                        <div className="flex justify-between text-sm mb-2">
                          <span className="text-slate-400 font-medium">Inscriptions</span>
                          <span className="text-cyan-400 font-bold">{event.registered}/{event.capacity}</span>
                        </div>
                        <div className="relative h-2 bg-slate-700/50 rounded-full overflow-hidden">
                          <div 
                            className="absolute inset-y-0 left-0 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full transition-all duration-1000 ease-out"
                            style={{ 
                              width: `${progress}%`,
                              boxShadow: hoveredEvent === index ? '0 0 20px rgba(6, 182, 212, 0.5)' : 'none'
                            }}
                          >
                            <div className="absolute inset-0 bg-white/20 animate-pulse"></div>
                          </div>
                        </div>
                        {progress > 90 && (
                          <p className="text-xs text-amber-400 mt-2 font-medium">⚠️ Places limitées !</p>
                        )}
                      </div>

                      {/* CTA Button */}
                      <button className="w-full relative group/btn overflow-hidden bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-400 hover:to-blue-400 text-white font-semibold py-4 px-6 rounded-xl transition-all duration-300 hover:scale-[1.02] hover:shadow-lg hover:shadow-cyan-500/50">
                        <span className="relative z-10">S'inscrire Maintenant</span>
                        <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-cyan-500 opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300"></div>
                      </button>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>

          {/* Past Events */}
          <div className="mb-20">
            <div className="flex items-center gap-4 mb-10">
              <div className="h-1 flex-1 bg-gradient-to-r from-transparent via-blue-500 to-transparent"></div>
              <h2 className="text-3xl md:text-4xl font-bold text-white">
                <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                  Événements Passés
                </span>
              </h2>
              <div className="h-1 flex-1 bg-gradient-to-r from-transparent via-blue-500 to-transparent"></div>
            </div>

            <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-xl rounded-3xl overflow-hidden border border-slate-700/50">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-slate-700">
                      <th className="px-6 py-5 text-left text-sm font-semibold text-cyan-400 uppercase tracking-wider">
                        Événement
                      </th>
                      <th className="px-6 py-5 text-left text-sm font-semibold text-cyan-400 uppercase tracking-wider">
                        Date
                      </th>
                      <th className="px-6 py-5 text-left text-sm font-semibold text-cyan-400 uppercase tracking-wider">
                        Type
                      </th>
                      <th className="px-6 py-5 text-left text-sm font-semibold text-cyan-400 uppercase tracking-wider">
                        Participants
                      </th>
                      <th className="px-6 py-5 text-left text-sm font-semibold text-cyan-400 uppercase tracking-wider">
                        Statut
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-700/50">
                    {pastEvents.map((event, index) => (
                      <tr key={index} className="hover:bg-slate-800/50 transition-colors duration-300 group">
                        <td className="px-6 py-5">
                          <div className="text-sm font-semibold text-white group-hover:text-cyan-400 transition-colors">
                            {event.title}
                          </div>
                        </td>
                        <td className="px-6 py-5">
                          <div className="text-sm text-slate-400">
                            {event.date}
                          </div>
                        </td>
                        <td className="px-6 py-5">
                          <span className="px-3 py-1.5 text-xs bg-gradient-to-r from-slate-700 to-slate-600 text-slate-300 rounded-full border border-slate-600 font-medium">
                            {event.type}
                          </span>
                        </td>
                        <td className="px-6 py-5">
                          <div className="flex items-center gap-2 text-sm text-slate-400">
                            <Users className="w-4 h-4 text-cyan-500" />
                            <span>{event.participants}</span>
                          </div>
                        </td>
                        <td className="px-6 py-5">
                          <span className="px-3 py-1.5 text-xs bg-cyan-500/10 text-cyan-400 rounded-full border border-cyan-500/30 font-medium">
                            ✓ {event.status}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          {/* Newsletter Section */}
          <div className="relative bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-xl rounded-3xl p-10 md:p-14 border border-slate-700/50 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 via-blue-500/5 to-transparent"></div>
            <div className="absolute top-0 right-0 w-96 h-96 bg-cyan-500/10 rounded-full filter blur-3xl"></div>
            
            <div className="relative text-center">
              <div className="inline-block mb-6">
                <div className="bg-gradient-to-r from-cyan-500/10 to-blue-500/10 p-4 rounded-2xl border border-cyan-500/30">
                  <Zap className="w-12 h-12 text-cyan-400" />
                </div>
              </div>
              
              <h3 className="text-3xl md:text-4xl font-bold mb-4">
                <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                  Restez Connecté
                </span>
              </h3>
              
              <p className="text-slate-400 text-lg mb-8 max-w-2xl mx-auto leading-relaxed">
                Recevez en avant-première les annonces d'événements, les invitations exclusives 
                et les dernières actualités tech directement dans votre boîte mail.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 max-w-xl mx-auto">
                <input
                  type="email"
                  placeholder="votre@email.com"
                  className="flex-1 px-6 py-4 bg-slate-900/50 border border-slate-700 rounded-xl focus:ring-2 focus:ring-cyan-500 focus:border-transparent text-white placeholder-slate-500 outline-none transition-all duration-300"
                />
                <button className="relative group/sub overflow-hidden bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-400 hover:to-blue-400 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/50">
                  <span className="relative z-10">S'abonner</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-cyan-500 opacity-0 group-hover/sub:opacity-100 transition-opacity duration-300"></div>
                </button>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </main>

      <style jsx>{`
        @keyframes pulse {
          0%, 100% { opacity: 0.1; }
          50% { opacity: 0.15; }
        }
        .animate-pulse {
          animation: pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite;
        }
        .delay-1000 {
          animation-delay: 1s;
        }
        .delay-2000 {
          animation-delay: 2s;
        }
      `}</style>
    </div>
  )
}
