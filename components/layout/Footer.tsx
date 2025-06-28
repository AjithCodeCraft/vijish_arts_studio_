'use client';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Separator } from '@/components/ui/separator';
import { 
  Mail, 
  Phone, 
  Instagram, 
  Facebook, 
  Twitter, 
  Youtube,
  Heart,
  Send,
  Palette,
  Sparkles,
  Brush,
  Camera,
  TabletSmartphone,
  PawPrint,
  Users,
  PencilRuler
} from 'lucide-react';
import Image from 'next/image';

const services = [
  { name: 'Custom Portraits', icon: Palette },
  { name: 'Family Portraits', icon: Users },
  { name: 'Pet Portraits', icon: PawPrint },
  { name: 'Digital Art', icon: TabletSmartphone },
  { name: 'Charcoal Art', icon: PencilRuler },
  { name: 'Oil Paintings', icon: Brush }
];

const quickLinks = [
  { name: 'About Us', href: '#about' },
  { name: 'Portfolio', href: '#portfolio' },
  { name: 'Process', href: '#process' },
  { name: 'Testimonials', href: '#testimonials' },
  { name: 'Pricing', href: '#pricing' },
  { name: 'Contact', href: '#contact' }
];

const socialLinks = [
  { icon: Instagram, href: 'https://instagram.com/vijisharts', label: 'Instagram' },
  { icon: Facebook, href: 'https://facebook.com/vijisharts', label: 'Facebook' },
  { icon: Twitter, href: 'https://twitter.com/vijisharts', label: 'Twitter' },
  { icon: Youtube, href: 'https://youtube.com/vijisharts', label: 'YouTube' }
];

export function Footer() {
  return (
    <footer className="bg-gradient-to-b from-stone-900 to-stone-950 text-white">
      {/* Top Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Brand Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-purple-600 to-pink-600 p-1.5 flex-shrink-0">
                <div className="w-full h-full rounded-lg bg-stone-900 flex items-center justify-center">
                  <Image 
                    src="/logo.png" 
                    alt="Vijish Arts Logo"
                    width={32}
                    height={32}
                    className="object-cover rounded"
                  />
                </div>
              </div>
              <div>
                <h1 className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                  Vijish Arts
                </h1>
                <p className="text-sm text-stone-400">Where Memories Become Art</p>
              </div>
            </div>
            <p className="text-stone-400 text-sm mb-6 leading-relaxed">
              Transforming your precious moments into timeless works of art with exceptional craftsmanship and attention to detail.
            </p>
            <div className="flex space-x-3 mb-8">
              {socialLinks.map((social) => (
                <a 
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-stone-800 flex items-center justify-center text-stone-300 hover:text-white hover:bg-gradient-to-r hover:from-purple-600 hover:to-pink-600 transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/20"
                  aria-label={social.label}
                >
                  <social.icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links & Services */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:col-span-2">
            <div>
              <h4 className="text-lg font-semibold mb-6 text-white relative inline-block pb-2">
                Quick Links
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-purple-500 to-pink-500"></span>
              </h4>
              <ul className="space-y-3">
                {quickLinks.map((link) => (
                  <li key={link.name}>
                    <a 
                      href={link.href}
                      className="flex items-center text-stone-400 hover:text-white transition-colors duration-300 group text-sm"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-pink-500 mr-3 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-6 text-white relative inline-block pb-2">
                Our Services
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-purple-500 to-pink-500"></span>
              </h4>
              <ul className="space-y-3">
                {services.map((service) => (
                  <li key={service.name}>
                    <a 
                      href="#"
                      className="flex items-center text-stone-400 hover:text-white transition-colors duration-300 group text-sm"
                    >
                      <service.icon className="w-4 h-4 mr-3 text-pink-400 opacity-70 group-hover:opacity-100 transition-opacity" />
                      {service.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Newsletter Section */}
     
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-stone-800">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-stone-500 text-sm text-center md:text-left mb-4 md:mb-0">
              {new Date().getFullYear()} Vijish Arts Studio. All rights reserved.
            </p>
            <div className="flex items-center space-x-6">
              <a href="mailto:hello@vijisharts.com" className="text-stone-500 hover:text-white transition-colors text-sm flex items-center">
                <Mail className="w-4 h-4 mr-1.5" />
                <span>hello@vijisharts.com</span>
              </a>
              <a href="tel:+919876543210" className="text-stone-500 hover:text-white transition-colors text-sm flex items-center">
                <Phone className="w-4 h-4 mr-1.5" />
                <span>+91 98765 43210</span>
              </a>
            </div>
          </div>
          <div className="mt-4 text-center md:text-right">
            <p className="text-stone-600 text-xs">
              Made with  by 
              <a 
                href="https://vijisharts.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-stone-400 hover:text-white transition-colors ml-1"
              >
                Ajith S
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}