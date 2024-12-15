"use client"
import { CheckCircle } from 'lucide-react'
import Image from 'next/image'
import { motion } from 'framer-motion'

export default function Service() {
  return (
    <div className="min-h-screen py-10 md:py-20 text-white p-8 space-y-12 relative overflow-hidden">
      
      <motion.section 
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto relative z-10"
      >
        <div className="space-y-6">
          <h2 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">
          Optimaliseer je klantcontact tijdens piekmomenten
          </h2>
          <p className="text-neutral-200">
          Garandeer een vlekkeloze klantervaring, zelfs op de drukste momenten. Onze AI beantwoordt en belt meerdere klanten tegelijk, zodat wachttijden verdwijnen en problemen razendsnel worden opgelost.
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
              Altijd bereikbaar: Geen enkel klantgesprek blijft onbeantwoord, ongeacht het tijdstip of de drukte.
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
              Schaalbaarheid zonder grenzen: Vergroot je gesprekscapaciteit eenvoudig, zonder extra personeel of hoge kosten
              </p>
            </motion.div>
          </div>
        </div>
        <div 
          className="w-full overflow-hidden rounded-2xl p-6 h-full"
          
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
          className="rounded-2xl overflow-hidden w-full p-6 h-full order-2 md:order-1"
          
        >
          <Image src="/feedback.jpg" width={1000} height={1000} className='h-full rounded-2xl object-cover w-full ' alt='Visuele weergave van klantfeedback'/>
        </div>
        <div className="space-y-6 order-1 md:order-2">
          <h2 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-green-600">
          Haal Meer uit Klantfeedback
          </h2>
          <p className="text-neutral-200">
          Krijg directe inzichten in wat jouw klanten écht belangrijk vinden. Onze AI analyseert gesprekken en markeert de belangrijkste momenten, zodat je snel kunt reageren op kansen en risicovolle situaties
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
              Eenvoudig feedback verzamelen: Ontvang moeiteloos waardevolle klantinzichten via geautomatiseerde follow-ups, zonder extra handmatig werk
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
              Trends en problemen herkennen: Ontdek patronen en veelvoorkomende problemen met behulp van gespreksanalyse en sentimentherkenning.
              </p>
            </motion.div>
          </div>
        </div>
      </motion.section>
    </div>
  )
}

