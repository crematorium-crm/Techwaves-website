import Header from '@/components/Header'
import Section from '@/components/Section'
import Footer from '@/components/Footer'

export default function Media() {
  const photoGalleries = [
    { 
      category: "Workshops", 
      count: 45,
      cover: "/gallery/workshops-cover.jpg",
      description: "Moments d'apprentissage et de partage"
    },
    { 
      category: "Hackathons", 
      count: 23,
      cover: "/gallery/hackathons-cover.jpg",
      description: "Compétitions et innovations intensives"
    },
    { 
      category: "Conférences", 
      count: 18,
      cover: "/gallery/conferences-cover.jpg",
      description: "Rencontres avec des experts"
    },
    { 
      category: "Événements Sociaux", 
      count: 32,
      cover: "/gallery/social-cover.jpg",
      description: "Moments de détente et networking"
    }
  ]

  const videos = [
    {
      title: "Hackathon National 2024 - Highlights",
      duration: "5:32",
      views: "1.2K",
      date: "15 Nov 2024",
      thumbnail: "/videos/hackathon.jpg",
      type: "Highlights"
    },
    {
      title: "Interview Exclusive du Fondateur",
      duration: "8:15",
      views: "2.4K",
      date: "10 Nov 2024",
      thumbnail: "/videos/interview.jpg",
      type: "Interview"
    },
    {
      title: "Workshop React - Session Complète",
      duration: "15:42",
      views: "3.1K",
      date: "5 Nov 2024",
      thumbnail: "/videos/workshop.jpg",
      type: "Tutorial"
    },
    {
      title: "Tour Virtuel du Club Techwaves",
      duration: "3:28",
      views: "1.8K",
      date: "1 Nov 2024",
      thumbnail: "/videos/tour.jpg",
      type: "Tour"
    }
  ]

  const mediaStats = [
    { number: "118", label: "Photos" },
    { number: "12", label: "Vidéos" },
    { number: "4", label: "Galeries" },
    { number: "5K+", label: "Vues Total" }
  ]

  return (
    <>
      <Header />
      <main className="pt-20 min-h-screen grid-background">
        <Section 
          title="Galerie Média" 
          subtitle="Captures de nos moments les plus mémorables"
        >
          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
            {mediaStats.map((stat, index) => (
              <div key={index} className="tech-card rounded-xl p-6 text-center">
                <div className="tech-gradient-text text-3xl font-bold mb-2">{stat.number}</div>
                <div className="text-tech-300 text-sm">{stat.label}</div>
              </div>
            ))}
          </div>

          {/* Galeries Photo */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-center text-white mb-8">
              Galeries Photo
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {photoGalleries.map((gallery, index) => (
                <div 
                  key={index}
                  className="tech-card rounded-2xl overflow-hidden group hover:neon-glow transition-all duration-500 cursor-pointer"
                >
                  {/* Cover Image */}
                  <div className="h-48 tech-gradient relative overflow-hidden">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-white text-center">
                        <svg className="w-12 h-12 mx-auto mb-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                        <p className="text-sm opacity-90">{gallery.count} photos</p>
                      </div>
                    </div>
                    <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300"></div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <h4 className="font-semibold text-white mb-2 group-hover:tech-gradient-text transition-all duration-300">
                      {gallery.category}
                    </h4>
                    <p className="text-tech-300 text-sm mb-4">
                      {gallery.description}
                    </p>
                    <button className="w-full border border-tech-700 text-tech-300 py-2 px-4 rounded-lg font-medium hover:bg-tech-700 hover:text-white transition-all duration-300 text-sm">
                      Voir la Galerie
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Vidéos */}
          <div className="mb-12">
            <h3 className="text-2xl font-bold text-center text-white mb-8">
              Vidéos
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {videos.map((video, index) => (
                <div 
                  key={index}
                  className="tech-card rounded-2xl overflow-hidden group hover:neon-glow transition-all duration-500"
                >
                  {/* Video Thumbnail */}
                  <div className="h-48 tech-gradient relative overflow-hidden">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-white text-center">
                        <div className="w-16 h-16 bg-white bg-opacity-20 rounded-2xl flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform duration-300">
                          <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M8 5v14l11-7z"/>
                          </svg>
                        </div>
                        <p className="text-sm opacity-90">Vidéo {index + 1}</p>
                      </div>
                    </div>
                    
                    {/* Overlay Info */}
                    <div className="absolute bottom-4 left-4 right-4 flex justify-between items-center">
                      <span className="px-2 py-1 bg-black bg-opacity-75 text-white rounded text-sm">
                        {video.duration}
                      </span>
                      <span className="px-2 py-1 bg-tech-800 text-tech-300 rounded text-xs border border-tech-700">
                        {video.type}
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <h4 className="text-lg font-semibold text-white mb-2 group-hover:tech-gradient-text transition-all duration-300">
                      {video.title}
                    </h4>
                    
                    <div className="flex justify-between items-center text-sm text-tech-400 mb-4">
                      <span>{video.views} vues</span>
                      <span>{video.date}</span>
                    </div>

                    <div className="flex space-x-3">
                      <button className="flex-1 tech-gradient text-white py-2 px-4 rounded-lg font-medium hover:scale-105 transition-transform duration-300 text-sm">
                        Regarder
                      </button>
                      <button className="w-10 h-10 border border-tech-700 rounded-lg flex items-center justify-center text-tech-400 hover:bg-tech-700 hover:text-white transition-all duration-300">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Chaîne YouTube */}
          <div className="tech-card rounded-2xl p-8 text-center">
            <h3 className="text-2xl font-bold text-white mb-4">
              Notre Chaîne YouTube
            </h3>
            <p className="text-tech-300 mb-6 max-w-2xl mx-auto">
              Abonnez-vous à notre chaîne YouTube pour ne manquer aucun contenu : 
              tutoriels, interviews, retours d'événements et bien plus encore.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button className="tech-gradient text-white px-8 py-3 rounded-xl font-semibold hover:scale-105 transition-transform duration-300 flex items-center space-x-2">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"/>
                </svg>
                <span>Visiter YouTube</span>
              </button>
              <button className="border-2 border-tech-500 text-tech-300 px-8 py-3 rounded-xl font-semibold hover:bg-tech-500 hover:text-white transition-all duration-300">
                Voir Plus de Vidéos
              </button>
            </div>
          </div>
        </Section>
      </main>
      <Footer />
    </>
  )
}