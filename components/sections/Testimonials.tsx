'use client';

import { useState, useEffect } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Star, Quote, ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const testimonials = [
  {
    id: 1,
    name: "Priya Sharma",
    location: "Mumbai, India",
    rating: 5,
    text: "Vijish created the most beautiful portrait of my grandmother. The attention to detail and the way he captured her gentle smile brought tears to my eyes. Absolutely incredible work!",
    service: "Custom Portrait",
    image: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=2"
  },
  {
    id: 2,
    name: "Rajesh Kumar",
    location: "Delhi, India",
    rating: 5,
    text: "The family portrait Vijish created for us is now the centerpiece of our living room. His ability to capture the essence of each family member is truly remarkable. Highly recommended!",
    service: "Family Portrait",
    image: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=2"
  },
  {
    id: 3,
    name: "Anita Patel",
    location: "Bangalore, India",
    rating: 5,
    text: "I commissioned a pet portrait of my beloved dog who passed away. Vijish's artwork helped me preserve those precious memories in the most beautiful way. Thank you for your incredible talent!",
    service: "Pet Portrait",
    image: "https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=2"
  },
  {
    id: 4,
    name: "Vikram Singh",
    location: "Chennai, India",
    rating: 5,
    text: "Professional, talented, and incredibly patient. Vijish worked with me through multiple revisions to ensure the portrait was perfect. The final result exceeded all my expectations!",
    service: "Custom Portrait",
    image: "https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=2"
  },
  {
    id: 5,
    name: "Meera Reddy",
    location: "Hyderabad, India",
    rating: 5,
    text: "The charcoal portrait of my husband is absolutely stunning. Vijish has an amazing ability to bring life to paper. We're planning to commission more artwork soon!",
    service: "Charcoal Portrait",
    image: "https://images.pexels.com/photos/1181424/pexels-photo-1181424.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=2"
  }
];

export function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const getVisibleTestimonials = () => {
    const visible = [];
    for (let i = 0; i < 3; i++) {
      const index = (currentIndex + i) % testimonials.length;
      visible.push(testimonials[index]);
    }
    return visible;
  };

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-purple-100 text-purple-700 hover:bg-purple-100">
            Testimonials
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold text-stone-900 mb-6">
            What <span className="text-purple-600">Clients Say</span>
          </h2>
          <p className="text-xl text-stone-600 max-w-2xl mx-auto">
            Read what our satisfied clients have to say about their portrait experience
          </p>
        </div>

        {/* Testimonials Carousel */}
        <div className="relative">
          {/* Navigation Buttons */}
          <Button
            variant="outline"
            size="sm"
            onClick={prevTestimonial}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 rounded-full w-12 h-12 border-purple-200 hover:bg-purple-50"
          >
            <ChevronLeft className="w-5 h-5" />
          </Button>
          <Button
            variant="outline"
            size="sm"
            onClick={nextTestimonial}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 rounded-full w-12 h-12 border-purple-200 hover:bg-purple-50"
          >
            <ChevronRight className="w-5 h-5" />
          </Button>

          {/* Testimonials Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-16">
            {getVisibleTestimonials().map((testimonial, index) => (
              <Card 
                key={`${testimonial.id}-${currentIndex}`}
                className={`border-0 shadow-lg hover:shadow-xl transition-all duration-500 ${
                  index === 1 ? 'md:scale-105 md:shadow-2xl' : ''
                }`}
              >
                <CardContent className="p-8">
                  {/* Quote Icon */}
                  <Quote className="w-8 h-8 text-purple-200 mb-4" />
                  
                  {/* Rating */}
                  <div className="flex items-center space-x-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  
                  {/* Testimonial Text */}
                  <p className="text-stone-600 mb-6 leading-relaxed">
                    "{testimonial.text}"
                  </p>
                  
                  {/* Client Info */}
                  <div className="flex items-center space-x-4">
                    <img 
                      src={testimonial.image} 
                      alt={testimonial.name}
                      className="w-12 h-12 rounded-full object-cover"
                    />
                    <div>
                      <div className="font-semibold text-stone-900">
                        {testimonial.name}
                      </div>
                      <div className="text-sm text-stone-500">
                        {testimonial.location}
                      </div>
                      <Badge variant="secondary" className="text-xs mt-1">
                        {testimonial.service}
                      </Badge>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Indicators */}
          <div className="flex justify-center space-x-2 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex ? 'bg-purple-600' : 'bg-purple-200'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <p className="text-lg text-stone-600 mb-6">
            Ready to create your own masterpiece?
          </p>
          <Button 
            size="lg" 
            className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-3 rounded-full"
          >
            Start Your Commission
          </Button>
        </div>
      </div>
    </section>
  );
}