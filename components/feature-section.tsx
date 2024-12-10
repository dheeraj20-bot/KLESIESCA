import React from "react";
import { useId } from "react";

export function FeaturesSection() {
  return (
    <div className="py-20  relative">
      <div className="absolute -z-10 inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-purple-900 via-black to-black opacity-50"></div>
      <h2 className="text-4xl text-white mb-10 md:text-6xl font-bold text-center">
        Geavanceerde  <span className=" bg-gradient-to-r from-purple-400 to-purple-600 text-transparent bg-clip-text">AI-functionaliteiten</span>
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
      "Onze AI-spraakagenten zijn uitgerust met geavanceerde NLU-mogelijkheden, waarmee ze gebruikersintenties en context nauwkeurig begrijpen.",
  },
  {
    id: 2,
    title: "Multi-Channel Integratie",
    description:
      "Integreer naadloos met telefoonsystemen, messaging-apps en spraakplatforms zoals Alexa en Google Assistant.",
  },
  {
    id: 3,
    title: "Real-Time Spraak-naar-Tekst Conversie",
    description:
      "Converteer spraakinput direct naar tekst met hoge nauwkeurigheid voor naadloze interactie en verwerking.",
  },
  {
    id: 4,
    title: "Gepersonaliseerde Antwoorden",
    description:
      "Lever op maat gemaakte antwoorden op basis van gebruikersvoorkeuren en historische interacties om de klantervaring te verbeteren.",
  },
  {
    id: 5,
    title: "Sentimentanalyse",
    description:
      "Analyseer de emoties van gebruikers in real-time om reacties aan te passen en empathische ondersteuning te bieden.",
  },
  {
    id: 6,
    title: "Meertalige Ondersteuning",
    description:
      "Betrek gebruikers in hun voorkeurstaal met ingebouwde meertalige mogelijkheden om diverse doelgroepen te bedienen.",
  },
  {
    id: 7,
    title: "Continue Leren",
    description:
      "Onze AI-agenten verbeteren in de loop van de tijd door machine learning, waardoor ze zich aanpassen aan gebruikersgedrag en voorkeuren.",
  },
  {
    id: 8,
    title: "Aanpasbare Stemprofielen",
    description:
      "Kies uit een verscheidenheid aan stemprofielen of maak een aangepast profiel dat overeenkomt met je merkidentiteit.",
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
