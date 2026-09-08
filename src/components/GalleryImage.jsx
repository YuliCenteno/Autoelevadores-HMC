import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';

function GalleryImage({ images = [] }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  if (!images.length) return null;

  const nextImage = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const previousImage = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const currentImage = images[currentIndex];

  return (
    <div className="w-full max-w-5xl mx-auto">
      {/* Imagen principal */}
      <div className="relative overflow-hidden rounded-2xl bg-muted shadow-xl aspect-[16/9] group">

        <AnimatePresence mode="wait">
          <motion.img
            key={currentIndex}
            src={currentImage.src}
            alt={currentImage.alt}
            initial={{ opacity: 0, scale: 1.02 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.98 }}
            transition={{ duration: 0.35 }}
            className="w-full h-full object-cover"
          />
        </AnimatePresence>

        {/* Degradado inferior */}
        <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-black/60 to-transparent pointer-events-none" />

        {/* Texto */}
        <div className="absolute bottom-5 left-6 right-6 text-white">
          <p className="text-sm md:text-base font-medium drop-shadow-lg">
            {currentImage.alt}
          </p>
        </div>

        {/* Botón anterior */}
        <button
          onClick={previousImage}
          aria-label="Imagen anterior"
          className="absolute left-4 top-1/2 -translate-y-1/2
                     w-11 h-11 rounded-full
                     bg-white/90 backdrop-blur-sm
                     text-foreground
                     flex items-center justify-center
                     shadow-lg
                     opacity-0 group-hover:opacity-100
                     hover:bg-white hover:scale-105
                     transition-all duration-200"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>

        {/* Botón siguiente */}
        <button
          onClick={nextImage}
          aria-label="Imagen siguiente"
          className="absolute right-4 top-1/2 -translate-y-1/2
                     w-11 h-11 rounded-full
                     bg-white/90 backdrop-blur-sm
                     text-foreground
                     flex items-center justify-center
                     shadow-lg
                     opacity-0 group-hover:opacity-100
                     hover:bg-white hover:scale-105
                     transition-all duration-200"
        >
          <ChevronRight className="w-6 h-6" />
        </button>

        {/* Contador */}
        <div className="absolute top-4 right-4 px-3 py-1.5
                        rounded-full bg-black/50 backdrop-blur-sm
                        text-white text-sm">
          {currentIndex + 1} / {images.length}
        </div>
      </div>

      {/* Miniaturas */}
      <div className="mt-4 grid grid-cols-4 gap-3">
        {images.slice(0, 4).map((image, index) => {
          const remaining = images.length - 4;

          return (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`relative overflow-hidden rounded-lg aspect-[4/3]
          transition-all duration-200
          ${currentIndex === index
                  ? 'ring-2 ring-primary ring-offset-2'
                  : 'opacity-70 hover:opacity-100'
                }`}
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover"
              />

              {/* +X sobre la última miniatura */}
              {index === 3 && remaining > 0 && (
                <div
                  className="absolute inset-0 bg-black/50 flex items-center justify-center
                       text-white text-lg font-semibold backdrop-blur-[1px]"
                >
                  +{remaining}
                </div>
              )}
            </button>
          );
        })}
      </div>

      {/* Indicadores */}
      <div className="flex justify-center gap-2 mt-5">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            aria-label={`Ir a imagen ${index + 1}`}
            className={`h-2 rounded-full transition-all duration-300 ${
              currentIndex === index
                ? 'w-7 bg-primary'
                : 'w-2 bg-muted-foreground/30 hover:bg-muted-foreground/50'
            }`}
          />
        ))}
      </div>
    </div>
  );
}

export default GalleryImage;