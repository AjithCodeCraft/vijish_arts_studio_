'use client';

import { useState } from 'react';
import { Menu, X, ShoppingCart, User, Search, Palette } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { useCart } from '@/contexts/CartContext';
import Image from 'next/image';

interface HeaderProps {
  onCartClick: () => void;
}

export function Header({ onCartClick }: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { items } = useCart();

  const itemCount = items.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <header className="sticky top-0 z-55 bg-white/95 backdrop-blur-md border-b border-stone-200 shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="relative">
              <div className="w-22 h-22 mt-3 ml-1  ">
                <Image 
                  src="/logo.png" 
                  alt="Vijish Arts Logo"
                  width={75}
                  height={75}
                  className="object-cover"
                />
              </div>
            </div>
            <div>
              <h1 className="text-xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                Vijish Arts Studio
              </h1>
              <p className="text-xs text-stone-600">Artistic Excellence</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#home" className="text-stone-700 hover:text-purple-600 transition-colors font-medium">
              Home
            </a>
            <a href="#gallery" className="text-stone-700 hover:text-purple-600 transition-colors font-medium">
              Gallery
            </a>
            <a href="#portraits" className="text-stone-700 hover:text-purple-600 transition-colors font-medium">
              Portraits
            </a>
            <a href="#commissions" className="text-stone-700 hover:text-purple-600 transition-colors font-medium">
              Commissions
            </a>
            <a href="#about" className="text-stone-700 hover:text-purple-600 transition-colors font-medium">
              About
            </a>
            <a href="#contact" className="text-stone-700 hover:text-purple-600 transition-colors font-medium">
              Contact
            </a>
          </nav>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center space-x-4">
          
        
            {/* <Button 
              variant="ghost" 
              size="sm" 
              className="text-stone-700 hover:text-purple-600 relative"
              onClick={onCartClick}
            >
              <ShoppingCart className="w-4 h-4" />
              {itemCount > 0 && (
                <Badge className="absolute -top-2 -right-2 h-5 w-5 flex items-center justify-center p-0 bg-purple-600 text-white text-xs">
                  {itemCount}
                </Badge>
              )}
            </Button> */}
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="sm"
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-stone-200">
            <nav className="flex flex-col space-y-4">
              <a href="#home" className="text-stone-700 hover:text-purple-600 transition-colors font-medium">
                Home
              </a>
              <a href="#gallery" className="text-stone-700 hover:text-purple-600 transition-colors font-medium">
                Gallery
              </a>
              <a href="#portraits" className="text-stone-700 hover:text-purple-600 transition-colors font-medium">
                Portraits
              </a>
              <a href="#commissions" className="text-stone-700 hover:text-purple-600 transition-colors font-medium">
                Commissions
              </a>
              <a href="#about" className="text-stone-700 hover:text-purple-600 transition-colors font-medium">
                About
              </a>
              <a href="#contact" className="text-stone-700 hover:text-purple-600 transition-colors font-medium">
                Contact
              </a>
              <div className="flex items-center space-x-4 pt-4 border-t border-stone-200">
                <Button variant="ghost" size="sm" className="text-stone-700">
                  <Search className="w-4 h-4 mr-2" />
                  Search
                </Button>
                <Button variant="ghost" size="sm" className="text-stone-700">
                  <User className="w-4 h-4 mr-2" />
                  Account
                </Button>
                <Button 
                  variant="ghost" 
                  size="sm" 
                  className="text-stone-700 relative"
                  onClick={onCartClick}
                >
                  <ShoppingCart className="w-4 h-4 mr-2" />
                  Cart
                  {itemCount > 0 && (
                    <Badge className="ml-2 h-5 w-5 flex items-center justify-center p-0 bg-purple-600 text-white text-xs">
                      {itemCount}
                    </Badge>
                  )}
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}