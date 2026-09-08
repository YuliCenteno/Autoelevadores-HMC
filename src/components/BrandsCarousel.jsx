import React from 'react';

const BRANDS = [
  {
    name: 'Toyota',
    logo: 'https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/toyota.svg',
    height: 'max-h-8 md:max-h-10',
  },
  {
    name: 'Caterpillar',
    logo: 'https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/caterpillar.svg',
    height: 'max-h-8 md:max-h-10',
  },
  {
    name: 'Mitsubishi',
    logo: 'https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/mitsubishi.svg',
    height: 'max-h-8 md:max-h-10',
  },
  {
    name: 'Nissan',
    logo: 'https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/nissan.svg',
    height: 'max-h-8 md:max-h-10',
  },
  {
    name: 'Linde',
    logo: '../../images/linde1.svg',
    height: 'max-h-10 md:max-h-12',
  },
  {
    name: 'Komatsu',
    logo: '../../images/komatsu1.svg',
    height: 'max-h-8 md:max-h-10',
  },
  {
    name: 'Jungheinrich',
    logo: '../../images/Jungheinrich.svg',
    height: 'max-h-7 md:max-h-9',
  },
  {
    name: 'Hyster',
    logo: '../../images/hyster.svg',
    height: 'max-h-9 md:max-h-11',
  },
  {
    name: 'Yale',
    logo: '../../images/yale.svg',
    height: 'max-h-9 md:max-h-11',
  },
  {
    name: 'Heli',
    logo: '../../images/heli.png',
    height: 'max-h-9 md:max-h-11',
  },
  {
    name: 'Clark',
    logo: '../../images/clark.svg',
    height: 'max-h-8 md:max-h-10',
  },
  {
    name: 'LiuGong',
    logo: '../../images/liugong.svg',
    height: 'max-h-8 md:max-h-10',
  },
];

export default function BrandsCarousel() {
  const doubleBrands = [...BRANDS, ...BRANDS];

  return (
    <section className="bg-slate-50/80 py-12 md:py-16 overflow-hidden w-full border-y border-slate-200">
      {/* Título centrado con estilo industrial */}
      <div className="w-full text-center mb-10 px-4">
        <p className="text-xs md:text-sm font-bold tracking-[0.2em] uppercase text-slate-500">
          Servicio Técnico y Repuestos Multimarca
        </p>
      </div>

      {/* Contenedor principal del carrusel */}
      <div className="relative w-full flex overflow-hidden select-none">
        {/* Sombras de desvanecido lateral */}
        <div className="absolute left-0 top-0 bottom-0 w-20 md:w-40 bg-gradient-to-r from-slate-50/80 to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-20 md:w-40 bg-gradient-to-l from-slate-50/80 to-transparent z-10 pointer-events-none" />

        {/* Pista del carrusel */}
        <div className="flex min-w-full shrink-0 items-center justify-around gap-8 md:gap-14 animate-infinite-scroll hover:[animation-play-state:paused]">
          {doubleBrands.map((brand, index) => (
            <div
              key={index}
              className="flex-none flex items-center justify-center w-36 md:w-44 h-20 px-4 py-2 rounded-lg bg-white border border-slate-200/60 shadow-sm grayscale opacity-70 hover:grayscale-0 hover:opacity-100 hover:shadow-md hover:border-amber-400 transition-all duration-300 group cursor-pointer"
            >
              <img
                src={brand.logo}
                alt={`Logo ${brand.name}`}
                className={`w-auto object-contain ${brand.height} transition-transform duration-300 group-hover:scale-105`}
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
