'use client'
import { useState, useEffect, useRef, useCallback } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import Image from 'next/image'
import techwaveswhite from '../assets/techwaveslogowhite.png'
import { clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

// Utility function
function cn(...inputs) {
  return twMerge(clsx(inputs))
}

// HoverButton Component
function HoverButton({ className, children, ...props }) {
  const buttonRef = useRef(null)
  const [isListening, setIsListening] = useState(false)
  const [circles, setCircles] = useState([])
  const lastAddedRef = useRef(0)

  const createCircle = useCallback((x, y) => {
    const buttonWidth = buttonRef.current?.offsetWidth || 0
    const xPos = x / buttonWidth
    const color = `linear-gradient(to right, var(--circle-start) ${xPos * 100}%, var(--circle-end) ${
      xPos * 100
    }%)`

    setCircles((prev) => [
      ...prev,
      { id: Date.now(), x, y, color, fadeState: null },
    ])
  }, [])

  const handlePointerMove = useCallback(
    (event) => {
      if (!isListening) return
      
      const currentTime = Date.now()
      if (currentTime - lastAddedRef.current > 100) {
        lastAddedRef.current = currentTime
        const rect = event.currentTarget.getBoundingClientRect()
        const x = event.clientX - rect.left
        const y = event.clientY - rect.top
        createCircle(x, y)
      }
    },
    [isListening, createCircle]
  )

  const handlePointerEnter = useCallback(() => {
    setIsListening(true)
  }, [])

  const handlePointerLeave = useCallback(() => {
    setIsListening(false)
  }, [])

  useEffect(() => {
    circles.forEach((circle) => {
      if (!circle.fadeState) {
        setTimeout(() => {
          setCircles((prev) =>
            prev.map((c) =>
              c.id === circle.id ? { ...c, fadeState: "in" } : c
            )
          )
        }, 0)

        setTimeout(() => {
          setCircles((prev) =>
            prev.map((c) =>
              c.id === circle.id ? { ...c, fadeState: "out" } : c
            )
          )
        }, 1000)

        setTimeout(() => {
          setCircles((prev) => prev.filter((c) => c.id !== circle.id))
        }, 2200)
      }
    })
  }, [circles])

  return (
    <button
      ref={buttonRef}
      className={cn(
        "relative isolate px-8 py-3 rounded-3xl",
        "text-white font-medium text-base leading-6",
        "backdrop-blur-lg bg-[rgba(43,55,80,0.1)]",
        "cursor-pointer overflow-hidden",
        "before:content-[''] before:absolute before:inset-0",
        "before:rounded-[inherit] before:pointer-events-none",
        "before:z-[1]",
        "before:shadow-[inset_0_0_0_1px_rgba(170,202,255,0.2),inset_0_0_16px_0_rgba(170,202,255,0.1),inset_0_-3px_12px_0_rgba(170,202,255,0.15),0_1px_3px_0_rgba(0,0,0,0.50),0_4px_12px_0_rgba(0,0,0,0.45)]",
        "before:mix-blend-multiply before:transition-transform before:duration-300",
        "active:before:scale-[0.975]",
        className
      )}
      onPointerMove={handlePointerMove}
      onPointerEnter={handlePointerEnter}
      onPointerLeave={handlePointerLeave}
      {...props}
      style={{
        "--circle-start": "var(--tw-gradient-from, #a0d9f8)",
        "--circle-end": "var(--tw-gradient-to, #3a5bbf)",
      }}
    >
      {circles.map(({ id, x, y, color, fadeState }) => (
        <div
          key={id}
          className={cn(
            "absolute w-3 h-3 -translate-x-1/2 -translate-y-1/2 rounded-full",
            "blur-lg pointer-events-none z-[-1] transition-opacity duration-300",
            fadeState === "in" && "opacity-75",
            fadeState === "out" && "opacity-0 duration-[1.2s]",
            !fadeState && "opacity-0"
          )}
          style={{
            left: x,
            top: y,
            background: color,
          }}
        />
      ))}
      {children}
    </button>
  )
}

// Main Header Component
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
    { name: 'Home', href: '/' },
    { name: 'History', href: '/history' },
    { name: 'Our team', href: '/team' },
    { name: 'Events', href: '/events' },
  ]

  return (
    <>
      {/* Header Principal - Floating Container */}
      <header className="fixed top-0 w-full z-50 pt-4 sm:pt-6 px-3 sm:px-6">
        <div className={`
          container mx-auto max-w-6xl
          bg-black/40 backdrop-blur-2xl
          border border-white/10
          rounded-full
          transition-all duration-500
          ${isScrolled 
            ? 'py-2 shadow-2xl shadow-black/20' 
            : 'py-2.5 shadow-xl shadow-black/10'
          }
        `}>
          <div className="px-3 sm:px-6 flex justify-between items-center">
            
            {/* Logo */}
            <Link 
              href="/" 
              className="flex items-center group relative z-10"
            >
              <Image 
                src={techwaveswhite} 
                alt="Techwaves Logo" 
                width={120}
                height={40}
                className="h-6 sm:h-8 w-auto"
                priority
              />
            </Link>

            {/* Navigation Desktop - Centrée */}
            <nav className="hidden xl:flex items-center space-x-1 absolute left-1/2 transform -translate-x-1/2">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`
                    relative px-3 py-1.5 rounded-lg text-sm font-medium transition-all duration-300
                    ${pathname === item.href 
                      ? 'text-white bg-white/10' 
                      : 'text-gray-300 hover:text-white hover:bg-white/5'
                    }
                  `}
                >
                  {item.name}
                </Link>
              ))}
            </nav>

            {/* CTA Desktop - HoverButton */}
            <div className="hidden lg:flex items-center">
              <Link href="/register">
                <HoverButton className="px-4 sm:px-6 py-2 sm:py-2.5 text-sm font-semibold">
                  Join Now
                </HoverButton>
              </Link>
            </div>

            {/* Menu Mobile Button */}
            <button
              className="lg:hidden relative w-10 h-10 flex flex-col items-center justify-center"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Menu"
            >
              <div className={`
                w-5 h-0.5 bg-white rounded-full transition-all duration-300
                ${isMenuOpen ? 'rotate-45 translate-y-1.5' : ''}
              `}></div>
              <div className={`
                w-5 h-0.5 bg-white rounded-full transition-all duration-300 my-1.5
                ${isMenuOpen ? 'opacity-0' : 'opacity-100'}
              `}></div>
              <div className={`
                w-5 h-0.5 bg-white rounded-full transition-all duration-300
                ${isMenuOpen ? '-rotate-45 -translate-y-1.5' : ''}
              `}></div>
            </button>
          </div>

          {/* Menu Mobile */}
          <div className={`
            lg:hidden overflow-hidden transition-all duration-500
            ${isMenuOpen ? 'max-h-[500px] opacity-100 mt-4' : 'max-h-0 opacity-0'}
          `}>
            <div className="px-4 sm:px-6 pb-4 border-t border-white/5 pt-4">
              <nav className="flex flex-col space-y-1">
                {navItems.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className={`
                      px-4 py-3 rounded-xl text-sm font-medium transition-all duration-300
                      ${pathname === item.href 
                        ? 'bg-white/10 text-white' 
                        : 'text-gray-300 hover:bg-white/5 hover:text-white'
                      }
                    `}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                ))}
                
                {/* CTA Mobile - HoverButton */}
                <div className="mt-4" onClick={() => setIsMenuOpen(false)}>
                  <Link href="/register" className="block">
                    <HoverButton className="w-full px-4 py-3 text-sm font-semibold">
                      Join Now
                    </HoverButton>
                  </Link>
                </div>
              </nav>
            </div>
          </div>
        </div>
      </header>
    </>
  )
}
