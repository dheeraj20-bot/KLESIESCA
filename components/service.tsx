"use client"
import { CheckCircle } from 'lucide-react'
import Image from 'next/image'
import { motion } from 'framer-motion'

export default function Service() {
  return (
    <div className="min-h-screen text-white p-8 space-y-12 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-purple-800 via-gray-900 to-black opacity-50"></div>
      
      <motion.section 
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto relative z-10"
      >
        <div className="space-y-6">
          <h2 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">
            Beheer piekmomenten in het callcenter
          </h2>
          <p className="text-neutral-200">
            Zorg voor een naadloze klantervaring met minimale wachttijden en snelle probleemoplossing. 
            Beantwoord en bel meerdere klanten tegelijkertijd, zelfs tijdens piekuren.
          </p>
          <div className="space-y-4">
            <motion.div 
              className="flex items-start gap-3"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <CheckCircle className="text-green-500 mt-1" />
              <p className="text-gray-300">
                Zorg ervoor dat geen enkel klantgesprek onbeantwoord blijft, ongeacht het belvolume of tijdstip
              </p>
            </motion.div>
            <motion.div 
              className="flex items-start gap-3"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <CheckCircle className="text-green-500 mt-1" />
              <p className="text-gray-300">
                Schaal eenvoudig uw gespreksverwerkingscapaciteit op zonder extra personeel nodig te hebben
              </p>
            </motion.div>
          </div>
        </div>
        <div 
          className="w-full overflow-hidden rounded-2xl p-6 h-72 bg-gradient-to-br from-purple-500/20 to-pink-500/20 backdrop-blur-sm"
          
        >
          <Image src="/man.jpg" width={1000} height={1000} className='h-full rounded-2xl object-cover w-full ' alt='Man aan het werk in een callcenter'/>
        </div>
      </motion.section>

      <motion.section 
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto relative z-10"
      >
        <div 
          className="rounded-2xl overflow-hidden w-full p-6 h-72 bg-gradient-to-br from-blue-500/20 to-green-500/20 backdrop-blur-sm order-2 md:order-1"
          
        >
          <Image src="/feedback.jpg" width={1000} height={1000} className='h-full rounded-2xl object-cover w-full ' alt='Visuele weergave van klantfeedback'/>
        </div>
        <div className="space-y-6 order-1 md:order-2">
          <h2 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-green-600">
            Verzamel waardevolle klantfeedback
          </h2>
          <p className="text-neutral-200">
            Luister actief naar de feedback van uw klanten en markeer de belangrijkste gespreksuittreksels. 
            Identificeer en adresseer snel gemiste kansen of risicovolle klanten met gerichte vervolgoproepen.
          </p>
          <div className="space-y-4">
            <motion.div 
              className="flex items-start gap-3"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <CheckCircle className="text-green-500 mt-1" />
              <p className="text-gray-300">
                Verzamel moeiteloos waardevolle klantinzichten en feedback via geautomatiseerde vervolgoproepen
              </p>
            </motion.div>
            <motion.div 
              className="flex items-start gap-3"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              <CheckCircle className="text-green-500 mt-1" />
              <p className="text-gray-300">
                Identificeer trends en veelvoorkomende problemen door gespreksuittreksels en sentiment te analyseren
              </p>
            </motion.div>
          </div>
        </div>
      </motion.section>
    </div>
  )
}

