"use client";
import React from "react";
import { BentoCard } from "./Bentogrid";
import { Keyboard } from "./ui/keyboard";
import { LogoCluster } from "./ui/logocluster";
import { Map } from "./ui/map";
// import { BentoCard } from "@/components/bentocard";
// import { LogoCluster } from "@/components/eldoraui/logocluster";
// import { Map } from "@/components/eldoraui/map";

export function BentoSection() {
  return (
    <div className="mt-10 max-w-7xl relative mx-auto px-5 pb-10 grid grid-cols-1 gap-4 sm:mt-16 lg:grid-cols-6 lg:grid-rows-2">
       
      <BentoCard
        eyebrow="Inzichten na het gesprek"
        title="Gesprekken Opnemen, Samenvatten en Analyseren"
        description=
        "Krijg volledige duidelijkheid na elk gesprek met geautomatiseerde opnames, samenvattingen en belangrijke inzichten. Begrijp gesprekken beter, stroomlijn follow-ups en bespaar uren aan handmatige aantekeningen."
        graphic={
          // eslint-disable-next-line tailwindcss/no-contradicting-classname
          <div className="h-80 bg-[url(https://res.cloudinary.com/dr4majoko/image/upload/v1734272595/zfsh0ltle8zjrjnkcvo8.jpg)] bg-[size:1000px_560px] bg-[left_-40px_top_-12px] bg-no-repeat" />
        }
        fade={["bottom"]}
        className="max-lg:rounded-t-4xl inset-0 bg-gradient-to-t to-35%  transition-colors duration-200 from-teal-500/20 lg:rounded-tl-4xl lg:col-span-3"
      />
      <BentoCard
        eyebrow="CRM-Klaar Dashboard"
        title="Volg, Filter en Analyseer met Gemak"
        description=
        "Beheer je gegevens moeiteloos met geavanceerde filters, gedetailleerde rapporten en uitgebreide analyses. Stroomlijn workflows, monitor prestaties en neem onderbouwde beslissingen—alléén vanuit één centrale plek."
        graphic={
          // eslint-disable-next-line tailwindcss/no-contradicting-classname
          <div className="absolute to-35%  transition-colors duration-200 from-teal-500/20  inset-0 bg-[url(https://res.cloudinary.com/dr4majoko/image/upload/v1734272592/co7gvjyaeit7ei6ddinc.jpg)] bg-[size:1100px_650px] bg-[left_-38px_top_-73px] bg-no-repeat" />
        }
        fade={["bottom"]}
        className="lg:rounded-tr-4xl inset-0 bg-gradient-to-t to-35%  transition-colors duration-200 from-violet-500/20 lg:col-span-3 "
      />
      <BentoCard
        eyebrow="Snelheid"
        title="Directe Reacties, 24/7"
        description=
        "Onze AI-spraakassistent staat altijd klaar om klanten snel en nauwkeurig te helpen."
        graphic={
          <div className="flex size-full pl-10 pt-10">
            <Keyboard highlighted={["LeftCommand", "C", "S"]} />
          </div>
        }
        className="lg:rounded-bl-4xl lg:col-span-2"
      />
      <BentoCard
        eyebrow="Naadloze Integratie"
        title="Jouw AI, Jouw Manier"
        description=
        "Integreer onze AI-spraakassistent moeiteloos met je bestaande CRM en andere systemen."
        graphic={<LogoCluster />}
        className="lg:col-span-2"
      />
      <BentoCard
        eyebrow="Grenzeloos"
        title="Globaal, Lokaal, Verbonden"
        description=
        "Onze AI-spraakassistent ondersteunt meerdere talen, waardoor je wereldwijd kunt communiceren."
        graphic={<Map />}
        className="max-lg:rounded-b-4xl lg:rounded-br-4xl lg:col-span-2"
      />
    </div>
  );
}
