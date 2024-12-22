import { Code2, Plug, SmilePlus, TreePalm } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export default function HowItWorks() {
  return (
    <div className="w-full  py-20 px-4 bg-black relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-bl to-35%  transition-colors duration-200 from-purple-500/20" />

      <div className="max-w-7xl mx-auto w-full space-y-12 relative z-10">
        <h2 className="text-4xl md:text-6xl font-bold text-center bg-gradient-to-r from-purple-400 to-purple-600 text-transparent bg-clip-text">
          Hoe Het Werkt!
        </h2>
        <div className="grid md:grid-cols-4 gap-6 md:gap-8">
          <Card className="bg-zinc-900/30 border-zinc-800 backdrop-blur-sm hover:bg-zinc-900/50 transition-all duration-300 group">
            <CardContent className="p-6 space-y-4">
              <div className="w-12 h-12 rounded-lg bg-purple-500/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <Code2 className="w-6 h-6 text-purple-400" />
              </div>
              <h3 className="text-2xl font-semibold text-white">
                Aangepast Systeem
              </h3>
              <p className="text-zinc-300 leading-relaxed">
                Wij ontwerpen en bouwen jouw AI-gestuurde voice assistent
                volledig op maat, afgestemd op jouw bedrijf, merkidentiteit en
                specifieke doelen. Geen standaardoplossingen—alles is ontworpen
                om jouw unieke behoeften te ondersteunenoplossing om aan uw
                specifieke behoeften en wensen te voldoen.
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
                Onze oplossing integreert direct met jouw bestaande systemen
                zoals CRM-tools, kalenders en communicatieplatformen. Dit zorgt
                ervoor dat jouw workflows ongestoord blijven terwijl de AI
                direct aan de slag kan.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-zinc-900/30 border-zinc-800 backdrop-blur-sm hover:bg-zinc-900/50 transition-all duration-300 group">
            <CardContent className="p-6 space-y-4">
              <div className="w-12 h-12 rounded-lg bg-purple-500/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <SmilePlus className="w-6 h-6 text-purple-400" />
              </div>
              <h3 className="text-2xl font-semibold text-white">
                Eerste Resultaten
              </h3>
              <p className="text-zinc-300 leading-relaxed">
                Vanaf dag één begint onze Voice Assistent waarde toe te voegen.
                Ervaar direct snellere opvolgingen, betere klantgesprekken en
                een gestroomlijnde planning die jouw team tijd bespaart en jouw
                omzet verhoogt.
              </p>
            </CardContent>
          </Card>
          <Card className="bg-zinc-900/30 border-zinc-800 backdrop-blur-sm hover:bg-zinc-900/50 transition-all duration-300 group">
            <CardContent className="p-6 space-y-4">
              <div className="w-12 h-12 rounded-lg bg-purple-500/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <TreePalm className="w-6 h-6 text-purple-400" />
              </div>
              <h3 className="text-2xl font-semibold text-white">
                Optimaliseren en Schalen
              </h3>
              <p className="text-zinc-300 leading-relaxed">
                Na de implementatie blijft onze AI leren en zich aanpassen aan
                jouw klanten en processen. Met waardevolle inzichten en data kun
                je jouw strategie continu optimaliseren en je bedrijf verder
                laten groeien—efficiënt en schaalbaar
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
