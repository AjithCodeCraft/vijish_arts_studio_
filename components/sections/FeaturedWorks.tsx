'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Heart, Eye, Star, ArrowRight, MessageCircle } from 'lucide-react';
import { useProducts } from '@/contexts/ProductContext';
import { motion } from 'framer-motion';

export function FeaturedWorks() {
  const { products, setSelectedProduct } = useProducts();
  const [hoveredWork, setHoveredWork] = useState<string | null>(null);

  const featuredProducts = products.slice(0, 3);

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
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <Badge className="mb-4 bg-purple-100 text-purple-700 hover:bg-purple-100">
            Latest Works
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold text-stone-900 mb-6">
            Recent Masterpieces
          </h2>
          <p className="text-xl text-stone-600 max-w-2xl mx-auto">
            Explore the latest additions to our portfolio, showcasing the finest in portrait artistry
          </p>
        </motion.div>

        {/* Works Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {featuredProducts.map((work, index) => (
            <motion.div
              key={work.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
            >
              <Card 
                className="group overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2"
                onMouseEnter={() => setHoveredWork(work.id)}
                onMouseLeave={() => setHoveredWork(null)}
              >
                <div className="relative overflow-hidden">
                  {/* Work Image */}
                  <div className="aspect-[4/5] bg-stone-100 relative overflow-hidden">
                    <motion.img 
                      src={work.image} 
                      alt={work.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      loading="lazy"
                      whileHover={{ scale: 1.05 }}
                    />
                    
                    {/* Overlay */}
                    <motion.div 
                      initial={{ opacity: 0 }}
                      animate={{ 
                        opacity: hoveredWork === work.id ? 1 : 0 
                      }}
                      className="absolute inset-0 bg-black/40 transition-opacity duration-300"
                    />
                    
                    {/* Action Buttons */}
                    <motion.div 
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ 
                        opacity: hoveredWork === work.id ? 1 : 0,
                        y: hoveredWork === work.id ? 0 : 20
                      }}
                      className="absolute inset-0 flex items-center justify-center space-x-3 transition-all duration-300"
                    >
                      <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                        <Button 
                          size="sm" 
                          variant="secondary" 
                          className="rounded-full"
                          onClick={() => handleViewDetails(work)}
                        >
                          <Eye className="w-4 h-4" />
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
                          onClick={() => handleWhatsAppInquiry(work)}
                        >
                          <MessageCircle className="w-4 h-4" />
                        </Button>
                      </motion.div>
                    </motion.div>

                    {/* Category Badge */}
                    <Badge className="absolute top-4 left-4 bg-white/90 text-stone-700">
                      {work.category}
                    </Badge>
                  </div>

                  {/* Work Info */}
                  <CardContent className="p-6">
                    <div className="flex justify-between items-start mb-3">
                      <motion.h3 
                        whileHover={{ color: "#7c3aed" }}
                        className="text-xl font-bold text-stone-900 group-hover:text-purple-600 transition-colors cursor-pointer"
                        onClick={() => handleViewDetails(work)}
                      >
                        {work.title}
                      </motion.h3>
                      <div className="flex items-center space-x-1">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                        ))}
                      </div>
                    </div>
                    
                    <p className="text-stone-600 mb-4 line-clamp-2">
                      {work.description}
                    </p>
                    
                    <div className="space-y-2 mb-4">
                      <div className="flex justify-between text-sm">
                        <span className="text-stone-500">Medium:</span>
                        <span className="text-stone-700 font-medium">{work.medium}</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-stone-500">Size:</span>
                        <span className="text-stone-700 font-medium">{work.size}</span>
                      </div>
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div className="text-2xl font-bold text-purple-600">
                        ₹{work.price.toLocaleString()}
                      </div>
                      <Badge variant={work.isAvailable ? "default" : "secondary"}>
                        {work.isAvailable ? "Available" : "Sold"}
                      </Badge>
                    </div>

                    <motion.div 
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="mt-4"
                    >
                      <Button 
                        className="w-full bg-purple-600 hover:bg-purple-700"
                        onClick={() => handleViewDetails(work)}
                      >
                        View Details
                      </Button>
                    </motion.div>
                  </CardContent>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* View All Button */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button 
              size="lg" 
              className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-3 rounded-full"
              onClick={() => document.getElementById('portfolio')?.scrollIntoView({ behavior: 'smooth' })}
            >
              View Complete Portfolio
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}