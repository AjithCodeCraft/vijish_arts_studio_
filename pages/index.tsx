'use client';

import { useState } from 'react';
import { Header } from '@/components/layout/Header';
import { Hero } from '@/components/sections/Hero';
import { FeaturedWorks } from '@/components/sections/FeaturedWorks';
import { Portfolio } from '@/components/sections/Portfolio';
import { Services } from '@/components/sections/Services';
import { About } from '@/components/sections/About';
import { Testimonials } from '@/components/sections/Testimonials';
import { InstagramFeed } from '@/components/sections/InstagramFeed';
import { Contact } from '@/components/sections/Contact';
import { Newsletter } from '@/components/sections/Newsletter';
import { Footer } from '@/components/layout/Footer';
import { ProductModal } from '@/components/product/ProductModal';
import { ProductProvider } from '@/contexts/ProductContext';
import { CartProvider } from '@/contexts/CartContext';
import { Cart } from '@/components/cart/Cart';
import { motion } from 'framer-motion';

export default function Home() {
  const [isCartOpen, setIsCartOpen] = useState(false);

  return (
    <CartProvider>
      <ProductProvider>
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="min-h-screen bg-gradient-to-br from-slate-50 to-stone-100"
        >
          <Header onCartClick={() => setIsCartOpen(true)} />
          <main>
            <Hero />
            <Portfolio />
            <FeaturedWorks />
            <Services />
   
            <Testimonials />
            <InstagramFeed />
            <Contact />
            {/* <Newsletter /> */}
          </main>
          <Footer />
          <ProductModal />
          <Cart isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
        </motion.div>
      </ProductProvider>
    </CartProvider>
  );
}