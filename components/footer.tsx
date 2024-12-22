
export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="relative overflow-hidden bg-black text-white pt-12">
      <div className="absolute inset-0 bg-[radial-gradient(circle,_var(--tw-gradient-stops))] from-purple-700/30 via-black-900 to-black-900"></div>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="space-y-4">
            <h3 className="text-2xl font-bold">Klesiescall</h3>
            <p className="text-gray-400 max-w-xl">Geef je bedrijf een boost met de kracht van AI—moeiteloze automatisering, eindeloze groei.</p>
          </div>
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Contact Us</h4>
            <p className="text-gray-400">Email: info@Klesiescall.com</p>
          </div>

          {/* <div className="space-y-4">
            <h4 className="text-lg font-semibold">Follow Us</h4>
            <div className="flex space-x-4">
              <a href="#" aria-label="Facebook" className="text-gray-400 hover:text-white transition-colors">
                <Facebook size={24} />
              </a>
              <a href="#" aria-label="Twitter" className="text-gray-400 hover:text-white transition-colors">
                <Twitter size={24} />
              </a>
              <a href="#" aria-label="Instagram" className="text-gray-400 hover:text-white transition-colors">
                <Instagram size={24} />
              </a>
              <a href="#" aria-label="LinkedIn" className="text-gray-400 hover:text-white transition-colors">
                <Linkedin size={24} />
              </a>
            </div>
          </div> */}
        </div>
        <div className="mt-8 pt-3 mb-2  border-t border-gray-800 text-center">
          <p className="text-gray-400">&copy; {currentYear}  Klesiescall. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

