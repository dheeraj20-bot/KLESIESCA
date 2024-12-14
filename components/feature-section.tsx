import React from "react";
import { useId } from "react";

export function FeaturesSection() {
  return (
    <div className="py-20  relative">
      <div className="absolute -z-10 inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-purple-900 via-black to-black opacity-50"></div>
      <h2 className="text-4xl text-white mb-10 md:text-6xl font-bold text-center">
      Waarom kiezen   <span className=" bg-gradient-to-r from-purple-400 to-purple-600 text-transparent bg-clip-text">voor ons</span>
      </h2>
      <div className="grid grid-cols-1  px-5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 md:gap-2 max-w-7xl mx-auto">
        {grid.map((feature) => (
          <div
            key={feature.id}
            className="relative bg-gradient-to-b from-neutral-900 to-neutral-950  p-6 rounded-3xl overflow-hidden"
          >
            <Grid size={20} />
            <p className="text-base font-bold text-white relative z-20">
              {feature.title}
            </p>
            <p className="text-neutral-400 mt-4 text-base font-normal relative z-20">
              {feature.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

const grid = [
  {
    id: 1,
    title: "Natuurlijke Taalbegrip (NLU)",
    description:
    "Onze AI-spraakagenten begrijpen intenties en context perfect dankzij geavanceerd natuurlijk taalbegrip. Ze klinken niet alleen menselijk, maar kunnen zelfs pauzeren, ‘uhmmm’ zeggen en nadenken, precies zoals een echte persoon. Deze subtiele nuances maken interacties natuurlijker en geloofwaardiger, zodat klanten het verschil niet merken"
  },
  {
    id: 2,
    title: "Multi-Channel Integratie",
    description:
    "Onze AI integreert moeiteloos met jouw telefoonsystemen, CRM-tools, en communicatieplatforms zoals WhatsApp, SMS en e-mail. Hierdoor kun je al je klantgesprekken vanuit één centraal systeem beheren, zonder gedoe met losse systemen of handmatige updates."
  },
  {
    id: 3,
    title: "Real-Time Spraak-naar-Tekst Conversie",
    description:
    "Converteer klantgesprekken in een oogwenk naar tekst, met ongeëvenaarde nauwkeurigheid. Dit maakt niet alleen directe verwerking mogelijk, maar zorgt er ook voor dat je een duidelijke, doorzoekbare gespreksgeschiedenis hebt voor toekomstige inzichten en verbeteringen."
  },
  {
    id: 4,
    title: "Gepersonaliseerde Antwoorden",
    description:
    "Onze AI levert hyperpersoonlijke antwoorden door gebruikersvoorkeuren en eerdere interacties te analyseren. Dit zorgt voor gesprekken die naadloos aansluiten bij de behoeften van de klant, alsof ze met een bekende spreken."
  },
  {
    id: 5,
    title: "Sentimentanalyse",
    description:
    "Met real-time sentimentanalyse herkent onze AI direct de emotie van de klant, van frustratie tot blijdschap. Hierdoor kun je je reacties aanpassen en empathie tonen, wat leidt tot een positievere klantervaring en betere resultaten."
  },
  {
    id: 6,
    title: "Meertalige Ondersteuning",
    description:
    "Bereik klanten over de hele wereld in hun eigen taal met ondersteuning voor meer dan 92 talen en regionale accenten. Onze AI zorgt ervoor dat elke interactie soepel en natuurlijk verloopt, ongeacht waar je klant zich bevindt"
  },
  {
    id: 7,
    title: "Continue Leren",
    description:
    "Onze AI leert van elke interactie en past zich constant aan veranderende klantgedragingen aan. Dit betekent dat jouw systeem slimmer en efficiënter wordt naarmate het vaker wordt gebruikt, zonder dat je extra moeite hoeft te doen"
  },
  {
    id: 8,
    title: "Aanpasbare Stemprofielen",
    description:
    "Geef je merk een menselijke touch door een stemprofiel te kiezen dat perfect past bij jouw identiteit. Of creëer een unieke stem die jouw klanten direct herkennen en vertrouwen, zoals die van jezelf bijvoorbeeld."
  },
];

export const Grid = ({
  pattern,
  size,
}: {
  pattern?: number[][];
  size?: number;
}) => {
  const p = pattern ?? [
    [Math.floor(Math.random() * 4) + 7, Math.floor(Math.random() * 6) + 1],
    [Math.floor(Math.random() * 4) + 7, Math.floor(Math.random() * 6) + 1],
    [Math.floor(Math.random() * 4) + 7, Math.floor(Math.random() * 6) + 1],
    [Math.floor(Math.random() * 4) + 7, Math.floor(Math.random() * 6) + 1],
    [Math.floor(Math.random() * 4) + 7, Math.floor(Math.random() * 6) + 1],
  ];
  return (
    <div className="pointer-events-none absolute left-1/2 top-0  -ml-20 -mt-2 h-full w-full [mask-image:linear-gradient(white,transparent)]">
      <div className="absolute inset-0 bg-gradient-to-r  [mask-image:radial-gradient(farthest-side_at_top,white,transparent)] from-zinc-900/30 to-zinc-900/30 opacity-100">
        <GridPattern
          width={size ?? 20}
          height={size ?? 20}
          x="-12"
          y="4"
          squares={p}
          className="absolute inset-0 h-full w-full  mix-blend-overlay fill-white/10 stroke-white/10 "
        />
      </div>
    </div>
  );
};

export function GridPattern({ width, height, x, y, squares, ...props }: any) {
  const patternId = useId();

  return (
    <svg aria-hidden="true" {...props}>
      <defs>
        <pattern
          id={patternId}
          width={width}
          height={height}
          patternUnits="userSpaceOnUse"
          x={x}
          y={y}
        >
          <path d={`M.5 ${height}V.5H${width}`} fill="none" />
        </pattern>
      </defs>
      <rect
        width="100%"
        height="100%"
        strokeWidth={0}
        fill={`url(#${patternId})`}
      />
      {squares && (
        <svg x={x} y={y} className="overflow-visible">
          {squares.map(([x, y]: any) => (
            <rect
              strokeWidth="0"
              key={`${x}-${y}`}
              width={width + 1}
              height={height + 1}
              x={x * width}
              y={y * height}
            />
          ))}
        </svg>
      )}
    </svg>
  );
}
