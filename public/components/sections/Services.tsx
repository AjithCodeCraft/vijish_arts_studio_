'use client';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Palette, Users, Camera, Sparkles, Clock, Award } from 'lucide-react';

const services = [
  {
    icon: Palette,
    title: "Custom Portraits",
    description: "Personalized portrait artwork from your photographs",
    features: ["Realistic style", "Multiple sizes available", "High-quality materials", "Digital preview"],
    price: "Starting from ₹1,500",
    duration: "7-14 days",
    popular: true
  },
  {
    icon: Users,
    title: "Family Portraits",
    description: "Beautiful family portraits capturing precious moments",
    features: ["Group compositions", "Multiple subjects", "Custom backgrounds", "Various mediums"],
    price: "Starting from ₹3,500",
    duration: "14-21 days",
    popular: false
  },
  {
    icon: Camera,
    title: "Pet Portraits",
    description: "Adorable pet portraits that capture their personality",
    features: ["Detailed fur textures", "Expressive eyes", "Natural poses", "Memorial options"],
    price: "Starting from ₹1,200",
    duration: "5-10 days",
    popular: false
  },
  {
    icon: Sparkles,
    title: "Digital Art",
    description: "Modern digital artwork with traditional art influence",
    features: ["High resolution", "Print ready", "Multiple formats", "Quick delivery"],
    price: "Starting from ₹2,000",
    duration: "3-7 days",
    popular: true
  }
];

const features = [
  {
    icon: Clock,
    title: "Fast Delivery",
    description: "Quick turnaround times without compromising quality"
  },
  {
    icon: Award,
    title: "Professional Quality",
    description: "Museum-quality materials and expert craftsmanship"
  },
  {
    icon: Palette,
    title: "Custom Styles",
    description: "Tailored artistic styles to match your preferences"
  }
];

export function Services() {
  return (
    <section id="services" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-purple-100 text-purple-700 hover:bg-purple-100">
            Services
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold text-stone-900 mb-6">
            Artistic Services
          </h2>
          <p className="text-xl text-stone-600 max-w-2xl mx-auto">
            Professional portrait services tailored to capture your most cherished memories
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <Card 
                key={index}
                className={`relative overflow-hidden border-0 shadow-lg hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 ${
                  service.popular ? 'ring-2 ring-purple-200' : ''
                }`}
              >
                {service.popular && (
                  <Badge className="absolute top-4 right-4 bg-purple-600 text-white">
                    Popular
                  </Badge>
                )}
                
                <CardHeader className="text-center pb-4">
                  <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <IconComponent className="w-8 h-8 text-purple-600" />
                  </div>
                  <CardTitle className="text-xl font-bold text-stone-900">
                    {service.title}
                  </CardTitle>
                </CardHeader>
                
                <CardContent className="space-y-4">
                  <p className="text-stone-600 text-center">
                    {service.description}
                  </p>
                  
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-stone-600">
                        <div className="w-1.5 h-1.5 bg-purple-600 rounded-full mr-3" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  
                  <div className="border-t pt-4 space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-stone-500">Price:</span>
                      <span className="font-semibold text-purple-600">{service.price}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-stone-500">Duration:</span>
                      <span className="font-medium text-stone-700">{service.duration}</span>
                    </div>
                  </div>
                  
                  <Button 
                    className={`w-full rounded-full ${
                      service.popular 
                        ? 'bg-purple-600 hover:bg-purple-700' 
                        : 'bg-stone-800 hover:bg-stone-900'
                    }`}
                  >
                    Get Quote
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Features */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <div key={index} className="text-center">
                <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <IconComponent className="w-6 h-6 text-purple-600" />
                </div>
                <h3 className="text-lg font-semibold text-stone-900 mb-2">
                  {feature.title}
                </h3>
                <p className="text-stone-600">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}