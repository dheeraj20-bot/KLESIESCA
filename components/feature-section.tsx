import React from "react";
import { useId } from "react";

export function FeaturesSection() {
  return (
    <div className="py-20 lg:py-40">

      <div className="grid grid-cols-1  px-5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 md:gap-2 max-w-7xl mx-auto">
        {grid.map((feature) => (
          <div
            key={feature.description}
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
      title: "Natural Language Understanding (NLU)",
      description:
        "Our AI voice agents are equipped with advanced NLU capabilities, enabling them to understand user intents and context with precision.",
    },
    {
      title: "Multi-Channel Integration",
      description:
        "Seamlessly integrate with phone systems, messaging apps, and voice platforms like Alexa and Google Assistant.",
    },
    {
      title: "Real-Time Voice-to-Text Conversion",
      description:
        "Instantly convert voice input into text with high accuracy for seamless interaction and processing.",
    },
    {
      title: "Personalized Responses",
      description:
        "Deliver tailored responses based on user preferences and historical interactions to enhance customer experience.",
    },
    {
      title: "Sentiment Analysis",
      description:
        "Analyze user emotions in real-time to adapt responses and provide empathetic support.",
    },
    {
      title: "Multilingual Support",
      description:
        "Engage users in their preferred language with built-in multilingual capabilities to serve diverse audiences.",
    },
    {
      title: "Continuous Learning",
      description:
        "Our AI agents improve over time through machine learning, adapting to user behavior and preferences.",
    },
    {
      title: "Customizable Voice Profiles",
      description:
        "Choose from a variety of voice profiles or create a custom voice that aligns with your brand identity.",
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
