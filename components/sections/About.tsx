'use client';

import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Award, Users, Clock, Heart } from 'lucide-react';

const achievements = [
  {
    icon: Award,
    number: "500+",
    label: "Portraits Created",
    description: "Successfully completed portrait commissions"
  },
  {
    icon: Users,
    number: "300+",
    label: "Happy Clients",
    description: "Satisfied customers worldwide"
  },
  {
    icon: Clock,
    number: "5+",
    label: "Years Experience",
    description: "Professional artistic journey"
  },
  {
    icon: Heart,
    number: "100%",
    label: "Satisfaction Rate",
    description: "Commitment to excellence"
  }
];

export function About() {
  return (
    <section id="about" className="py-20 bg-stone-50">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div>
            <Badge className="mb-4 bg-purple-100 text-purple-700 hover:bg-purple-100">
              About the Artist
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold text-stone-900 mb-6">
              Passion Meets
              <span className="block text-purple-600">Precision</span>
            </h2>
            
            <div className="space-y-6 text-lg text-stone-600 mb-8">
              <p>
                Welcome to Vijish Arts Studio, where artistic vision transforms into timeless portraits. 
                With over 5 years of dedicated practice in portrait artistry, I specialize in creating 
                realistic drawings that capture not just the physical likeness, but the essence and 
                emotion of my subjects.
              </p>
              
              <p>
                My journey began with a simple pencil and paper, driven by an innate desire to bring 
                life to blank canvases. Today, I work across multiple mediums including graphite, 
                charcoal, and digital art, each chosen to best serve the unique story of every portrait.
              </p>
              
              <p>
                Every commission is a collaboration between artist and client, ensuring that each piece 
                reflects not only technical excellence but also personal meaning. From family portraits 
                to pet memorials, each artwork is crafted with meticulous attention to detail and 
                genuine care.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg" 
                className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-3 rounded-full"
              >
                Commission a Portrait
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                className="border-purple-200 text-purple-600 hover:bg-purple-50 px-8 py-3 rounded-full"
              >
                View Process
              </Button>
            </div>
          </div>

          {/* Artist Image */}
          <div className="relative">
            <div className="aspect-[4/5] bg-gradient-to-br from-purple-100 to-pink-100 rounded-2xl overflow-hidden shadow-2xl">
              <img 
                src="/IMG_20250315_124536.jpg" 
                alt="Vijish - Portrait Artist"
                className="w-full h-full object-cover"
              />
            </div>
            
            {/* Floating Elements */}
            <div className="absolute -top-6 -right-6 w-24 h-24 bg-purple-200 rounded-full opacity-60" />
            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-pink-200 rounded-full opacity-40" />
          </div>
        </div>

        {/* Achievements */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-20">
          {achievements.map((achievement, index) => {
            const IconComponent = achievement.icon;
            return (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-white rounded-full shadow-lg flex items-center justify-center mx-auto mb-4">
                  <IconComponent className="w-8 h-8 text-purple-600" />
                </div>
                <div className="text-3xl font-bold text-stone-900 mb-2">
                  {achievement.number}
                </div>
                <div className="text-lg font-semibold text-stone-700 mb-1">
                  {achievement.label}
                </div>
                <div className="text-sm text-stone-500">
                  {achievement.description}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}