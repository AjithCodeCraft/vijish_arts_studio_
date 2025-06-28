'use client';

import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { useProducts } from '@/contexts/ProductContext';
import { MessageCircle, Star, Heart, Share2 } from 'lucide-react';
import { motion } from 'framer-motion';

export function ProductModal() {
  const { selectedProduct, setSelectedProduct } = useProducts();

  const handleWhatsAppContact = () => {
    if (!selectedProduct) return;
    
    const phoneNumber = "919876543210"; // Replace with actual WhatsApp number
    const message = `Hi! I'm interested in "${selectedProduct.title}" priced at ₹${selectedProduct.price.toLocaleString()}. Could you please provide more details about this artwork?`;
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    
    window.open(whatsappUrl, '_blank');
  };

  if (!selectedProduct) return null;

  return (
    <Dialog open={!!selectedProduct} onOpenChange={() => setSelectedProduct(null)}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold">{selectedProduct.title}</DialogTitle>
        </DialogHeader>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Image Section */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="space-y-4"
          >
            <div className="aspect-square relative overflow-hidden rounded-lg">
              <img 
                src={selectedProduct.image} 
                alt={selectedProduct.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute top-4 left-4">
                <Badge className="bg-white/90 text-gray-800">
                  {selectedProduct.category}
                </Badge>
              </div>
              <div className="absolute top-4 right-4 flex space-x-2">
                <Button size="sm" variant="secondary" className="rounded-full">
                  <Heart className="w-4 h-4" />
                </Button>
                <Button size="sm" variant="secondary" className="rounded-full">
                  <Share2 className="w-4 h-4" />
                </Button>
              </div>
            </div>
          </motion.div>

          {/* Details Section */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="space-y-6"
          >
            <div>
              <div className="flex items-center space-x-2 mb-2">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                ))}
                <span className="text-sm text-gray-600">(4.9/5)</span>
              </div>
              <p className="text-gray-600 leading-relaxed">{selectedProduct.description}</p>
            </div>

            <div className="space-y-3">
              <h3 className="text-lg font-semibold">Artwork Details</h3>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <span className="text-sm text-gray-500">Medium:</span>
                  <p className="font-medium">{selectedProduct.medium}</p>
                </div>
                <div>
                  <span className="text-sm text-gray-500">Size:</span>
                  <p className="font-medium">{selectedProduct.size}</p>
                </div>
                <div>
                  <span className="text-sm text-gray-500">Category:</span>
                  <p className="font-medium">{selectedProduct.category}</p>
                </div>
                <div>
                  <span className="text-sm text-gray-500">Availability:</span>
                  <Badge variant={selectedProduct.isAvailable ? "default" : "secondary"}>
                    {selectedProduct.isAvailable ? "Available" : "Sold"}
                  </Badge>
                </div>
              </div>
            </div>

            <div className="border-t pt-6">
              <div className="flex items-center justify-between mb-4">
                <div>
                  <p className="text-sm text-gray-500">Price</p>
                  <p className="text-3xl font-bold text-purple-600">
                    ₹{selectedProduct.price.toLocaleString()}
                  </p>
                </div>
              </div>

              <div className="space-y-3">
                <Button 
                  onClick={handleWhatsAppContact}
                  className="w-full bg-green-600 hover:bg-green-700 text-white"
                  size="lg"
                >
                  <MessageCircle className="w-5 h-5 mr-2" />
                  Inquire on WhatsApp
                </Button>
                
                <Button 
                  variant="outline" 
                  className="w-full"
                  size="lg"
                >
                  Commission Similar Artwork
                </Button>
              </div>

              <div className="mt-4 p-4 bg-gray-50 rounded-lg">
                <h4 className="font-semibold mb-2">Why Choose Vijish Arts?</h4>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• 5+ years of professional experience</li>
                  <li>• 100% satisfaction guarantee</li>
                  <li>• High-quality materials used</li>
                  <li>• Custom framing available</li>
                </ul>
              </div>
            </div>
          </motion.div>
        </div>
      </DialogContent>
    </Dialog>
  );
}