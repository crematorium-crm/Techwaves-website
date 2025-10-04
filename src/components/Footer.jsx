export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="relative bg-tech-dark border-t border-tech-800">
      {/* Background décoratif */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute bottom-0 left-0 w-64 h-64 tech-gradient rounded-full filter blur-3xl"></div>
      </div>

      <div className="relative z-10 container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 tech-gradient rounded-xl flex items-center justify-center neon-glow">
                <span className="text-white font-bold text-lg">T</span>
              </div>
              <div>
                <h3 className="text-xl font-bold tech-gradient-text">Techwaves ENSB</h3>
                <p className="text-tech-400">Dive Deep, Rise High</p>
              </div>
            </div>
            <p className="text-tech-300 max-w-md leading-relaxed">
              Fondé le 5 octobre par Zertit Dorsane. Leader dans l'innovation technologique 
              et la formation des étudiants aux technologies modernes.
            </p>
            
            {/* Social Links */}
            <div className="flex space-x-4 mt-6">
              {['Facebook', 'Instagram', 'LinkedIn', 'GitHub'].map((social) => (
                <a
                  key={social}
                  href="#"
                  className="w-10 h-10 border border-tech-700 rounded-lg flex items-center justify-center text-tech-400 hover:tech-gradient hover:text-white hover:border-tech-neon transition-all duration-300"
                >
                  <span className="text-sm font-medium">{social[0]}</span>
                </a>
              ))}
            </div>
          </div>
          
          {/* Liens rapides */}
          <div>
            <h4 className="font-semibold text-white mb-4">Navigation</h4>
            <ul className="space-y-3">
              {['Accueil', 'Équipe', 'Projets', 'Événements', 'Certificats'].map((item) => (
                <li key={item}>
                  <a 
                    href={`/${item === 'Accueil' ? '' : item.toLowerCase()}`}
                    className="text-tech-400 hover:text-tech-neon transition-colors duration-300"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Contact */}
          <div>
            <h4 className="font-semibold text-white mb-4">Contact</h4>
            <ul className="space-y-3 text-tech-400">
              <li className="flex items-center space-x-2">
                <div className="w-1 h-1 tech-gradient rounded-full"></div>
                <span>contact@techwaves.com</span>
              </li>
              <li className="flex items-center space-x-2">
                <div className="w-1 h-1 tech-gradient rounded-full"></div>
                <span>ENSB, Université</span>
              </li>
              <li className="flex items-center space-x-2">
                <div className="w-1 h-1 tech-gradient rounded-full"></div>
                <span>Algérie</span>
              </li>
            </ul>

            {/* Ambassadeurs */}
            <div className="mt-6">
              <h5 className="font-medium text-tech-300 mb-2">Ambassadeurs</h5>
              <div className="flex flex-wrap gap-2">
                <span className="px-2 py-1 bg-tech-800 text-tech-300 rounded text-xs">Skills Area Egypt</span>
                <span className="px-2 py-1 bg-tech-800 text-tech-300 rounded text-xs">Huawei ICT</span>
              </div>
            </div>
          </div>
        </div>
        
        {/* Bottom */}
        <div className="border-t border-tech-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-tech-400 text-sm">
            &copy; {currentYear} Techwaves ENSB. Tous droits réservés.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-tech-400 hover:text-tech-neon text-sm transition-colors">Mentions légales</a>
            <a href="#" className="text-tech-400 hover:text-tech-neon text-sm transition-colors">Confidentialité</a>
          </div>
        </div>
      </div>
    </footer>
  )
}