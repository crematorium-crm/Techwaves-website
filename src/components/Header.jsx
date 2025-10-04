'use client'
import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navItems = [
    { name: 'Accueil', href: '/' },
    { name: 'Inscription', href: '/register' },
    { name: 'Histoire', href: '/history' },
    { name: 'Équipe', href: '/team' },
    { name: 'Projets', href: '/projects' },
    { name: 'Certificats', href: '/certificates' },
    { name: 'Événements', href: '/events' },
    { name: 'Média', href: '/media' },
  ]

  return (
    <>
      {/* Header Principal */}
      <header className={`
        fixed top-0 w-full z-50 transition-all duration-500
        ${isScrolled 
          ? 'py-3 bg-tech-dark/95 backdrop-blur-xl border-b border-tech-700/50 shadow-2xl' 
          : 'py-5 bg-gradient-to-b from-tech-dark/95 to-transparent'
        }
      `}>
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center">
            
            {/* Logo avec animation */}
            <Link 
              href="/" 
              className="flex items-center space-x-3 group relative"
            >
              <div className="relative">
                <div className="w-12 h-12 tech-gradient rounded-xl flex items-center justify-center shadow-lg group-hover:shadow-tech-neon/30 transition-all duration-300">
                  <span className="text-white font-bold text-lg">T</span>
                </div>
                <div className="absolute -inset-1 tech-gradient rounded-xl opacity-0 group-hover:opacity-30 blur transition-all duration-500"></div>
              </div>
              <div className="flex flex-col">
                <h1 className="text-xl font-bold tech-gradient-text leading-tight">Techwaves</h1>
                <p className="text-xs text-tech-300 leading-tight">ENSB</p>
                <div className="w-0 group-hover:w-full h-0.5 tech-gradient transition-all duration-500 mt-1"></div>
              </div>
            </Link>

            {/* Navigation Desktop - Centrée */}
            <nav className="hidden xl:flex items-center space-x-1 absolute left-1/2 transform -translate-x-1/2">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`
                    relative px-4 py-2 rounded-lg font-medium transition-all duration-300 group
                    ${pathname === item.href 
                      ? 'text-tech-neon' 
                      : 'text-tech-300 hover:text-white'
                    }
                  `}
                >
                  {item.name}
                  <span className={`
                    absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-0.5 tech-gradient 
                    transition-all duration-300 group-hover:w-3/4
                    ${pathname === item.href ? 'w-3/4' : ''}
                  `}></span>
                  
                  {/* Effet de background au hover */}
                  <div className="absolute inset-0 bg-tech-700/20 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></div>
                </Link>
              ))}
            </nav>

            {/* CTA Desktop */}
            <div className="hidden lg:flex items-center space-x-4">
              <Link 
                href="/register" 
                className="
                  tech-gradient text-white px-6 py-2.5 rounded-xl font-semibold 
                  hover:shadow-lg hover:scale-105 transition-all duration-300 
                  shadow-lg shadow-tech-electric/20
                "
              >
                Rejoindre
              </Link>
            </div>

            {/* Menu Mobile Button */}
            <button
              className="lg:hidden relative w-10 h-10 flex flex-col items-center justify-center"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Menu"
            >
              <div className={`
                w-6 h-0.5 bg-white transition-all duration-300
                ${isMenuOpen ? 'rotate-45 translate-y-1.5' : ''}
              `}></div>
              <div className={`
                w-6 h-0.5 bg-white transition-all duration-300 my-1.5
                ${isMenuOpen ? 'opacity-0' : 'opacity-100'}
              `}></div>
              <div className={`
                w-6 h-0.5 bg-white transition-all duration-300
                ${isMenuOpen ? '-rotate-45 -translate-y-1.5' : ''}
              `}></div>
            </button>
          </div>
        </div>

        {/* Menu Mobile */}
        <div className={`
          lg:hidden absolute top-full left-0 w-full 
          bg-tech-dark/95 backdrop-blur-xl border-t border-tech-700/50
          transition-all duration-500 overflow-hidden
          ${isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}
        `}>
          <div className="container mx-auto px-4 py-4">
            <nav className="flex flex-col space-y-2">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`
                    px-4 py-3 rounded-xl font-medium transition-all duration-300
                    ${pathname === item.href 
                      ? 'tech-gradient text-white shadow-lg' 
                      : 'text-tech-300 hover:bg-tech-700/50 hover:text-white'
                    }
                  `}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              
              {/* CTA Mobile */}
              <Link 
                href="/register" 
                className="
                  tech-gradient text-white px-4 py-3 rounded-xl font-semibold 
                  text-center mt-4 hover:shadow-lg transition-all duration-300
                "
                onClick={() => setIsMenuOpen(false)}
              >
                Rejoindre le Club
              </Link>
            </nav>
          </div>
        </div>
      </header>

      {/* Espace réservé pour compenser le header fixed */}
      <div className="h-20 lg:h-24"></div>
    </>
  )
}