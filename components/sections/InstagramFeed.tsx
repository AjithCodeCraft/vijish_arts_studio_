'use client';

import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Instagram, Heart, MessageCircle, ExternalLink } from 'lucide-react';

const instagramPosts = [
  {
    id: 1,
    image: "/IMG_20250315_124536.jpg",
    likes: 234,
    comments: 18,
    caption: "Latest portrait commission completed! ✨ #portraitart #realism"
  },
  {
    id: 2,
    image: "/IMG-20250624-WA0024.jpg",
    likes: 189,
    comments: 12,
    caption: "Charcoal magic in progress 🎨 #charcoalart #workinprogress"
  },
  {
    id: 3,
    image: "/IMG-20250624-WA0027.jpg",
    likes: 156,
    comments: 9,
    caption: "Pencil details that bring life to paper ✏️ #pencilart #details"
  },
  {
    id: 4,
    image: "/IMG-20250624-WA0023.jpg",
    likes: 201,
    comments: 15,
    caption: "Digital meets traditional art 💫 #digitalart #portrait"
  },
  {
    id: 5,
    image: "/IMG_20250315_124536.jpg",
    likes: 178,
    comments: 11,
    caption: "Behind the scenes of portrait creation 🎭 #artistlife"
  },
  {
    id: 6,
    image: "/IMG-20250624-WA0024.jpg",
    likes: 167,
    comments: 8,
    caption: "Every stroke tells a story 📖 #storytelling #art"
  }
];

export function InstagramFeed() {
  return (
    <section className="py-20 bg-stone-50">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-purple-100 text-purple-700 hover:bg-purple-100">
            <Instagram className="w-4 h-4 mr-2" />
            Instagram
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold text-stone-900 mb-6">
            Follow the <span className="text-purple-600">Journey</span>
          </h2>
          <p className="text-xl text-stone-600 max-w-2xl mx-auto">
            Get a behind-the-scenes look at the artistic process and latest creations
          </p>
        </div>

        {/* Instagram Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-12">
          {instagramPosts.map((post) => (
            <div 
              key={post.id}
              className="group relative aspect-square bg-stone-100 rounded-lg overflow-hidden cursor-pointer"
            >
              <img 
                src={post.image} 
                alt="Instagram post"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              
              {/* Overlay */}
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <div className="text-white text-center space-y-2">
                  <div className="flex items-center justify-center space-x-4">
                    <div className="flex items-center space-x-1">
                      <Heart className="w-5 h-5" />
                      <span className="text-sm font-medium">{post.likes}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <MessageCircle className="w-5 h-5" />
                      <span className="text-sm font-medium">{post.comments}</span>
                    </div>
                  </div>
                  <ExternalLink className="w-6 h-6 mx-auto" />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Follow Button */}
        <div className="text-center">
          <Button 
            size="lg" 
            className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-8 py-3 rounded-full"
          >
            <Instagram className="w-5 h-5 mr-2" />
            Follow @vijisharts
          </Button>
        </div>
      </div>
    </section>
  );
}