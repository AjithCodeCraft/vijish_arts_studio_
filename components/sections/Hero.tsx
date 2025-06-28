'use client';

import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Sparkles, ChevronLeft, ChevronRight, Play, Palette, Award } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const heroSlides = [
  {
    id: 1,
    image: "/IMG_20250315_124536.jpg",
    title: "Bringing Your Vision to Life",
    subtitle: "Custom portraits that capture the essence of your most precious moments",
    cta: "View Portfolio",
    accent: "from-yellow-400 via-pink-400 to-purple-400"
  },
  {
    id: 2,
    image: "/IMG-20250624-WA0024.jpg",
    title: "Masterful Charcoal Artistry",
    subtitle: "Professional charcoal portraits with stunning detail and emotion",
    cta: "Explore Gallery",
    accent: "from-pink-400 via-purple-400 to-red-400"
  },
  {
    id: 3,
    image: "/IMG-20250624-WA0027.jpg",
    title: "Pencil Perfect Portraits",
    subtitle: "Detailed pencil sketches that tell your unique story",
    cta: "Commission Art",
    accent: "from-purple-400 via-pink-400 to-yellow-400"
  }
];

export function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);

  useEffect(() => {
    if (!isPlaying) return;
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [isPlaying]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length);
  };

  const scrollToPortfolio = () => {
    document.getElementById('portfolio')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="relative min-h-screen bg-gradient-to-br from-purple-900 via-pink-800 to-red-800 overflow-hidden ">
      {/* Animated Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 20% 50%, rgba(168, 85, 247, 0.4) 0%, transparent 50%),
                           radial-gradient(circle at 80% 20%, rgba(236, 72, 153, 0.4) 0%, transparent 50%),
                           radial-gradient(circle at 60% 80%, rgba(251, 191, 36, 0.4) 0%, transparent 50%)`
        }} />
      </div>

      <div className="container mx-auto px-4 h-screen flex items-center">
        <div className="grid lg:grid-cols-2 gap-12 items-center w-full">

          {/* Left Side - Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8 relative z-10"
          >
            {/* Artist Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center space-x-3 bg-gradient-to-r from-purple-500/20 to-pink-500/20 backdrop-blur-sm border border-purple-500/30 rounded-2xl px-6 py-3"
            >
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
              >
                <Sparkles className="w-5 h-5 text-yellow-400" />
              </motion.div>
              <span className="text-white font-medium tracking-wide">Professional Portrait Artist</span>
              <Award className="w-4 h-4 text-purple-400" />
            </motion.div>

            {/* Dynamic Title */}
            <AnimatePresence mode="wait">
              <motion.div
                key={currentSlide}
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -40 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="space-y-4"
              >
                <h1 className="text-6xl lg:text-7xl font-black leading-tight">
                  <span className="text-white">
                    {heroSlides[currentSlide].title.split(' ').slice(0, 2).join(' ')}
                  </span>
                  <br />
                  <span className={`bg-gradient-to-r ${heroSlides[currentSlide].accent} bg-clip-text text-transparent`}>
                    {heroSlides[currentSlide].title.split(' ').slice(2).join(' ')}
                  </span>
                </h1>

                <p className="text-xl text-gray-300 leading-relaxed max-w-lg">
                  {heroSlides[currentSlide].subtitle}
                </p>
              </motion.div>
            </AnimatePresence>

            {/* Stats Row */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="flex space-x-8"
            >
              {[
                { number: "500+", label: "Portraits Created" },
                { number: "5+", label: "Years Experience" },
                { number: "100%", label: "Satisfaction" }
              ].map((stat, index) => (
                <motion.div
                  key={stat.label}
                  whileHover={{ scale: 1.05 }}
                  className="text-center"
                >
                  <div className={`text-3xl font-bold bg-gradient-to-r ${heroSlides[currentSlide].accent} bg-clip-text text-transparent mb-1`}>
                    {stat.number}
                  </div>
                  <div className="text-gray-400 text-sm font-medium">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>

            {/* Action Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="flex flex-wrap gap-4"
            >
              <motion.div
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Button
                  size="lg"
                  onClick={scrollToPortfolio}
                  className={`bg-gradient-to-r ${heroSlides[currentSlide].accent} hover:shadow-lg hover:shadow-purple-500/25 text-white font-semibold px-8 py-6 rounded-2xl transition-all duration-300 text-lg`}
                >
                  {heroSlides[currentSlide].cta}
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Button
                  variant="outline"
                  size="lg"
                  className="border-2 border-pink-400/40 text-white hover:bg-gradient-to-r hover:from-purple-500 hover:to-pink-500 hover:text-white font-semibold px-8 py-6 rounded-2xl transition-all duration-300 text-lg backdrop-blur-sm"
                >
                  <Palette className="w-5 h-5 mr-2" />
                  Commission Art
                </Button>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Right Side - Image Gallery */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            {/* Main Image Container */}
            <div className="relative h-[600px] rounded-3xl overflow-hidden">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentSlide}
                  initial={{ opacity: 0, scale: 0.8, rotateY: 90 }}
                  animate={{ opacity: 1, scale: 1, rotateY: 0 }}
                  exit={{ opacity: 0, scale: 0.8, rotateY: -90 }}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                  className="absolute inset-0"
                >
                  <div className="relative h-full">
                    <img
                      src={heroSlides[currentSlide].image}
                      alt={heroSlides[currentSlide].title}
                      className="w-full h-full object-cover"
                    />
                    {/* Gradient Overlay */}
                    <div className={`absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent`} />

                    {/* Image Info Badge */}
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.5 }}
                      className="absolute bottom-6 left-6 right-6"
                    >
                      <div className="bg-black/40 backdrop-blur-md rounded-2xl p-4">
                        <div className="flex items-center justify-between">
                          <div>
                            <h3 className="text-white font-semibold text-lg">
                              {heroSlides[currentSlide].title.split(' ').slice(-2).join(' ')}
                            </h3>
                            <p className="text-gray-300 text-sm">Professional Artwork</p>
                          </div>
                          <motion.button
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            onClick={() => setIsPlaying(!isPlaying)}
                            className="p-3 bg-white/20 rounded-full hover:bg-white/30 transition-colors"
                          >
                            <Play className={`w-5 h-5 text-white ${isPlaying ? 'opacity-100' : 'opacity-50'}`} />
                          </motion.button>
                        </div>
                      </div>
                    </motion.div>
                  </div>
                </motion.div>
              </AnimatePresence>

              {/* Navigation Controls */}
              <div className="absolute top-1/2 -translate-y-1/2 left-4 right-4 flex justify-between">
                <motion.button
                  whileHover={{ scale: 1.1, backgroundColor: "rgba(255,255,255,0.3)" }}
                  whileTap={{ scale: 0.9 }}
                  onClick={prevSlide}
                  className="p-3 rounded-full bg-black/30 backdrop-blur-md transition-all duration-200"
                >
                  <ChevronLeft className="w-6 h-6 text-white" />
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.1, backgroundColor: "rgba(255,255,255,0.3)" }}
                  whileTap={{ scale: 0.9 }}
                  onClick={nextSlide}
                  className="p-3 rounded-full bg-black/30 backdrop-blur-md transition-all duration-200"
                >
                  <ChevronRight className="w-6 h-6 text-white" />
                </motion.button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Floating Particles */}
      {[...Array(6)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-2 h-2 bg-white/20 rounded-full"
          animate={{
            x: [0, 100, 0],
            y: [0, -100, 0],
            opacity: [0, 1, 0],
          }}
          transition={{
            duration: 4 + i,
            repeat: Infinity,
            delay: i * 0.5,
            ease: "easeInOut"
          }}
          style={{
            left: `${10 + i * 15}%`,
            top: `${20 + i * 10}%`,
          }}
        />
      ))}
    </section>
  );
}