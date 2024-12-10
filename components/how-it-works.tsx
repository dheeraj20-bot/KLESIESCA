import { Code2, Plug, SmilePlus } from 'lucide-react'
import { Card, CardContent } from "@/components/ui/card"

export default function HowItWorks() {
  return (
    <div className="w-full min-h-screen flex flex-col items-center justify-center p-4 md:p-8 bg-black relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-purple-900 via-black to-black opacity-50"></div>
      <div className="max-w-7xl mx-auto w-full space-y-12 relative z-10">
        <h2 className="text-4xl md:text-6xl font-bold text-center bg-gradient-to-r from-purple-400 to-purple-600 text-transparent bg-clip-text">
          Hoe Het Werkt!
        </h2>
        <div className="grid md:grid-cols-3 gap-6 md:gap-8">
          <Card className="bg-zinc-900/30 border-zinc-800 backdrop-blur-sm hover:bg-zinc-900/50 transition-all duration-300 group">
            <CardContent className="p-6 space-y-4">
              <div className="w-12 h-12 rounded-lg bg-purple-500/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <Code2 className="w-6 h-6 text-purple-400" />
              </div>
              <h3 className="text-2xl font-semibold text-white">
                Aangepast Systeem
              </h3>
              <p className="text-zinc-300 leading-relaxed">
                We ontwerpen en bouwen uw AI-gestuurde beloplossing om aan uw specifieke behoeften en wensen te voldoen.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-zinc-900/30 border-zinc-800 backdrop-blur-sm hover:bg-zinc-900/50 transition-all duration-300 group">
            <CardContent className="p-6 space-y-4">
              <div className="w-12 h-12 rounded-lg bg-purple-500/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <Plug className="w-6 h-6 text-purple-400" />
              </div>
              <h3 className="text-2xl font-semibold text-white">
                Naadloze Integratie
              </h3>
              <p className="text-zinc-300 leading-relaxed">
                Ons systeem integreert soepel met uw bestaande tools en processen, zodat uw bedrijf minimaal wordt verstoord.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-zinc-900/30 border-zinc-800 backdrop-blur-sm hover:bg-zinc-900/50 transition-all duration-300 group">
            <CardContent className="p-6 space-y-4">
              <div className="w-12 h-12 rounded-lg bg-purple-500/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <SmilePlus className="w-6 h-6 text-purple-400" />
              </div>
              <h3 className="text-2xl font-semibold text-white">
                Tevreden Conversies
              </h3>
              <p className="text-zinc-300 leading-relaxed">
                Begin met het ervaren van slimmere gesprekken, betere leadkwalificatie en hogere conversieratio's—moeiteloos.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
