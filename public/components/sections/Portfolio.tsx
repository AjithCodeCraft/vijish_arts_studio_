'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Eye, Heart, MessageCircle, ZoomIn } from 'lucide-react';
import { useProducts } from '@/contexts/ProductContext';
import { motion, AnimatePresence } from 'framer-motion';

const categories = ["All", "Pencil Art", "Charcoal Art", "Mixed Media", "Digital Art"];

export function Portfolio() {
  const { products, setSelectedProduct } = useProducts();
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);

  const filteredItems = selectedCategory === "All" 
    ? products 
    : products.filter(item => item.category === selectedCategory);

  const handleViewDetails = (product: any) => {
    setSelectedProduct(product);
  };

  const handleWhatsAppInquiry = (product: any) => {
    const phoneNumber = "919876543210";
    const message = `Hi! I'm interested in "${product.title}" priced at ₹${product.price.toLocaleString()}. Could you please provide more details?`;
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <section id="portfolio" className="py-20 bg-stone-50">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <Badge className="mb-4 bg-purple-100 text-purple-700 hover:bg-purple-100">
            Portfolio
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold text-stone-900 mb-8">
            My Artistic Journey
          </h2>
          <div className="max-w-4xl mx-auto mb-12">
            <p className="text-xl text-stone-600 leading-relaxed mb-6">
              Every stroke tells a story, every shade captures an emotion. My artistic journey began with a simple pencil and paper, 
              evolving into a passionate exploration of human expression through various mediums. From intimate portrait sessions 
              to grand commissioned pieces, each artwork represents a moment of connection between artist and subject.
            </p>
            <p className="text-lg text-stone-500 leading-relaxed">
              Browse through this curated collection that spans over 5 years of artistic evolution, featuring realistic portraits, 
              expressive charcoal works, and innovative mixed media pieces. Each piece reflects my commitment to capturing not just 
              the physical likeness, but the soul and essence of every subject.
            </p>
          </div>
        </motion.div>

        {/* Category Filter */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {categories.map((category) => (
            <motion.div
              key={category}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button
                variant={selectedCategory === category ? "default" : "outline"}
                onClick={() => setSelectedCategory(category)}
                className={`rounded-full px-6 py-2 transition-all duration-300 ${
                  selectedCategory === category 
                    ? "bg-purple-600 hover:bg-purple-700 text-white" 
                    : "border-purple-200 text-purple-600 hover:bg-purple-50"
                }`}
              >
                {category}
              </Button>
            </motion.div>
          ))}
        </motion.div>

        {/* Portfolio Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          <AnimatePresence>
            {filteredItems.map((item, index) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
              >
                <Card 
                  className="group overflow-hidden border-0 shadow-lg hover:shadow-xl transition-all duration-500"
                  onMouseEnter={() => setHoveredItem(item.id)}
                  onMouseLeave={() => setHoveredItem(null)}
                >
                  <div className="relative overflow-hidden">
                    <div className="aspect-square bg-stone-100 relative">
                      <motion.img 
                        src={item.image} 
                        alt={item.title}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                        loading="lazy"
                        whileHover={{ scale: 1.05 }}
                      />
                      
                      {/* Overlay */}
                      <motion.div 
                        initial={{ opacity: 0 }}
                        animate={{ 
                          opacity: hoveredItem === item.id ? 1 : 0 
                        }}
                        className="absolute inset-0 bg-black/50 transition-opacity duration-300"
                      />
                      
                      {/* Action Buttons */}
                      <motion.div 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ 
                          opacity: hoveredItem === item.id ? 1 : 0,
                          y: hoveredItem === item.id ? 0 : 20
                        }}
                        className="absolute inset-0 flex items-center justify-center space-x-3 transition-all duration-300"
                      >
                        <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                          <Button 
                            size="sm" 
                            variant="secondary" 
                            className="rounded-full"
                            onClick={() => handleViewDetails(item)}
                          >
                            <ZoomIn className="w-4 h-4" />
                          </Button>
                        </motion.div>
                        
                        <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                          <Button size="sm" variant="secondary" className="rounded-full">
                            <Heart className="w-4 h-4" />
                          </Button>
                        </motion.div>
                        
                        <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                          <Button 
                            size="sm" 
                            className="rounded-full bg-green-600 hover:bg-green-700"
                            onClick={() => handleWhatsAppInquiry(item)}
                          >
                            <MessageCircle className="w-4 h-4" />
                          </Button>
                        </motion.div>
                      </motion.div>

                      {/* Category Badge */}
                      <Badge className="absolute top-3 left-3 bg-white/90 text-stone-700 text-xs">
                        {item.category}
                      </Badge>

                      {/* Price Badge */}
                      <Badge className="absolute top-3 right-3 bg-purple-600 text-white text-xs">
                        ₹{item.price.toLocaleString()}
                      </Badge>
                    </div>

                    {/* Item Info */}
                    <div className="p-4">
                      <motion.h3 
                        whileHover={{ color: "#7c3aed" }}
                        className="font-semibold text-stone-900 mb-1 cursor-pointer transition-colors"
                        onClick={() => handleViewDetails(item)}
                      >
                        {item.title}
                      </motion.h3>
                      <p className="text-sm text-stone-600">{item.medium}</p>
                      
                      <motion.div 
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        className="mt-3"
                      >
                        <Button 
                          size="sm" 
                          className="w-full bg-purple-600 hover:bg-purple-700"
                          onClick={() => handleViewDetails(item)}
                        >
                          View Details
                        </Button>
                      </motion.div>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Achievements Collage */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-20"
        >
          <div className="text-center mb-12">
            <h3 className="text-3xl md:text-4xl font-bold text-stone-900 mb-4">
              Memorable Achievements
            </h3>
            <p className="text-lg text-stone-600 max-w-2xl mx-auto">
              A visual journey through exhibitions, awards, and milestone moments that have shaped my artistic career
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {/* Achievement Images */}
            <motion.div 
              whileHover={{ scale: 1.05 }}
              className="relative aspect-square overflow-hidden rounded-lg shadow-lg"
            >
              <img 
                src="/IMG_20250315_124536.jpg" 
                alt="Art Exhibition 2023"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <p className="text-white text-sm font-medium text-center px-2">Art Exhibition 2023</p>
              </div>
            </motion.div>

            <motion.div 
              whileHover={{ scale: 1.05 }}
              className="relative aspect-square overflow-hidden rounded-lg shadow-lg"
            >
              <img 
                src="/IMG-20250624-WA0024.jpg" 
                alt="Portrait Commission"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <p className="text-white text-sm font-medium text-center px-2">Featured Commission</p>
              </div>
            </motion.div>

            <motion.div 
              whileHover={{ scale: 1.05 }}
              className="relative aspect-square overflow-hidden rounded-lg shadow-lg"
            >
              <img 
                src="/IMG-20250624-WA0027.jpg" 
                alt="Studio Workshop"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <p className="text-white text-sm font-medium text-center px-2">Studio Workshop</p>
              </div>
            </motion.div>

            <motion.div 
              whileHover={{ scale: 1.05 }}
              className="relative aspect-square overflow-hidden rounded-lg shadow-lg"
            >
              <img 
                src="/IMG-20250624-WA0023.jpg" 
                alt="Award Recognition"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <p className="text-white text-sm font-medium text-center px-2">Award Recognition</p>
              </div>
            </motion.div>

            {/* Additional achievement items */}
            <motion.div 
              whileHover={{ scale: 1.05 }}
              className="relative aspect-square overflow-hidden rounded-lg shadow-lg bg-gradient-to-br from-purple-100 to-pink-100 flex items-center justify-center"
            >
              <div className="text-center p-4">
                <div className="text-3xl font-bold text-purple-600 mb-2">500+</div>
                <p className="text-sm text-purple-700 font-medium">Portraits Created</p>
              </div>
            </motion.div>

            <motion.div 
              whileHover={{ scale: 1.05 }}
              className="relative aspect-square overflow-hidden rounded-lg shadow-lg bg-gradient-to-br from-blue-100 to-indigo-100 flex items-center justify-center"
            >
              <div className="text-center p-4">
                <div className="text-3xl font-bold text-blue-600 mb-2">5+</div>
                <p className="text-sm text-blue-700 font-medium">Years Experience</p>
              </div>
            </motion.div>

            <motion.div 
              whileHover={{ scale: 1.05 }}
              className="relative aspect-square overflow-hidden rounded-lg shadow-lg bg-gradient-to-br from-green-100 to-emerald-100 flex items-center justify-center"
            >
              <div className="text-center p-4">
                <div className="text-3xl font-bold text-green-600 mb-2">300+</div>
                <p className="text-sm text-green-700 font-medium">Happy Clients</p>
              </div>
            </motion.div>

            <motion.div 
              whileHover={{ scale: 1.05 }}
              className="relative aspect-square overflow-hidden rounded-lg shadow-lg bg-gradient-to-br from-orange-100 to-red-100 flex items-center justify-center"
            >
              <div className="text-center p-4">
                <div className="text-3xl font-bold text-orange-600 mb-2">100%</div>
                <p className="text-sm text-orange-700 font-medium">Satisfaction</p>
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Load More Button */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button 
              variant="outline" 
              size="lg"
              className="border-purple-200 text-purple-600 hover:bg-purple-50 px-8 py-3 rounded-full"
            >
              Load More Artworks
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}