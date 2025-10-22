import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ImageWithFallback } from './figma/ImageWithFallback';

const heroSlides = [
  {
    id: 1,
    image: 'https://images.unsplash.com/photo-1760229803865-6d70d9b96d8c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhaXJwbGFuZSUyMHRyYXZlbCUyMGRlc3RpbmF0aW9ufGVufDF8fHx8MTc2MDYwOTE4Mnww&ixlib=rb-4.1.0&q=80&w=1080',
    title: 'Your Travel Partner for Visas, Flights, and Tours',
    subtitle: 'Experience hassle-free travel with our comprehensive services',
  },
  {
    id: 2,
    image: 'https://images.unsplash.com/photo-1613398591223-81408bc4aa2e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiZWFjaCUyMHBhcmFkaXNlJTIwdmFjYXRpb258ZW58MXx8fHwxNzYwNjA5MTgyfDA&ixlib=rb-4.1.0&q=80&w=1080',
    title: 'Discover Your Dream Destination',
    subtitle: 'Explore the world with exclusive travel packages',
  },
  {
    id: 3,
    image: 'https://images.unsplash.com/photo-1624889164456-2d65f10b6a79?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBjaXR5JTIwc2t5bGluZXxlbnwxfHx8fDE3NjA2MDQ5NDJ8MA&ixlib=rb-4.1.0&q=80&w=1080',
    title: 'Best Prices Guaranteed',
    subtitle: 'Book flights, hotels, and cars at unbeatable rates',
  },
];

export function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative h-[600px] md:h-[700px] overflow-hidden">
      {/* Background Image Slider */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentSlide}
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
          className="absolute inset-0"
        >
          <ImageWithFallback
            src={heroSlides[currentSlide].image}
            alt={heroSlides[currentSlide].title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/70"></div>
        </motion.div>
      </AnimatePresence>

      {/* Content */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex flex-col justify-center">
        {/* Hero Text */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-center"
        >
          <h1 className="text-white text-3xl md:text-5xl lg:text-6xl mb-4 px-4">
            {heroSlides[currentSlide].title}
          </h1>
          <p className="text-white/90 text-lg md:text-xl max-w-3xl mx-auto px-4">
            {heroSlides[currentSlide].subtitle}
          </p>
        </motion.div>

        {/* Slide Indicators */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-2">
          {heroSlides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                index === currentSlide ? 'bg-white w-8' : 'bg-white/50'
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
