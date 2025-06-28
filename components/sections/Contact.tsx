'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Mail, Phone, MapPin, Send, CheckCircle, Instagram, Youtube, Twitter, MessageCircle } from 'lucide-react';
import { motion } from 'framer-motion';

export function Contact() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitted(true);
      setIsSubmitting(false);
      setFormData({ firstName: '', lastName: '', email: '', message: '' });
    }, 2000);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSocialMediaClick = (platform: string) => {
    const urls: Record<string, string> = {
      instagram: "https://instagram.com/yourusername",
      youtube: "https://youtube.com/yourchannel",
      twitter: "https://twitter.com/yourhandle",
      whatsapp: "https://wa.me/919876543210"
    };
    window.open(urls[platform], '_blank');
  };

  if (isSubmitted) {
    return (
      <section id="contact" className="py-20 bg-stone-50">
        <div className="container mx-auto px-4">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="max-w-2xl mx-auto text-center"
          >
            <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <CheckCircle className="w-10 h-10 text-green-600" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-stone-900 mb-4">
              Thank You!
            </h2>
            <p className="text-xl text-stone-600 mb-8">
              Your message has been sent. Follow me for daily content updates!
            </p>
            <div className="flex justify-center gap-4 mb-8">
              <Button variant="outline" onClick={() => handleSocialMediaClick('instagram')}>
                <Instagram className="w-4 h-4 mr-2" />
                Instagram
              </Button>
              <Button variant="outline" onClick={() => handleSocialMediaClick('youtube')}>
                <Youtube className="w-4 h-4 mr-2" />
                YouTube
              </Button>
            </div>
            <Button onClick={() => setIsSubmitted(false)} variant="outline">
              Send Another Message
            </Button>
          </motion.div>
        </div>
      </section>
    );
  }

  return (
    <section id="contact" className="py-20 bg-stone-50">
      <div className="container mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <Badge className="mb-4 bg-purple-100 text-purple-700 hover:bg-purple-100">
            Connect With Me
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold text-stone-900 mb-6">
            Let's Create Something <span className="text-purple-600">Amazing</span>
          </h2>
          <p className="text-xl text-stone-600 max-w-2xl mx-auto">
            Reach out for collaborations or just to say hello!
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {/* Contact Form Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-2"
          >
            <Card className="shadow-sm border border-stone-200 h-[510px]">
              <CardHeader>
                <CardTitle className="text-xl font-bold flex items-center gap-2">
                  <Send className="w-5 h-5 text-purple-600" />
                  Send a Message
                </CardTitle>
                <CardDescription>
                  Fill out the form and I'll get back to you soon
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="firstName">First Name</Label>
                      <Input
                        id="firstName"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="lastName">Last Name</Label>
                      <Input
                        id="lastName"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Message</Label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      rows={4}
                      required
                    />
                  </div>
                  <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                    <Button 
                      type="submit" 
                      disabled={isSubmitting}
                      className="w-full bg-purple-600 hover:bg-purple-700 text-white py-3"
                    >
                      {isSubmitting ? (
                        <>
                          <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin mr-2" />
                          Sending...
                        </>
                      ) : (
                        <>
                          <Send className="w-4 h-4 mr-2" />
                          Send Message
                        </>
                      )}
                    </Button>
                  </motion.div>
                </form>
              </CardContent>
            </Card>
          </motion.div>

          {/* Right Side Cards */}
          <div className="space-y-6">
            {/* Contact Info Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              <Card className="shadow-sm border border-stone-200">
                <CardHeader>
                  <CardTitle className="text-xl font-bold flex items-center gap-2">
                    <Mail className="w-5 h-5 text-purple-600" />
                    Get in Touch
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-purple-100 rounded-full">
                      <Phone className="w-4 h-4 text-purple-600" />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-stone-500">Phone/WhatsApp</p>
                      <p className="font-medium">+91 98765 43210</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-purple-100 rounded-full">
                      <Mail className="w-4 h-4 text-purple-600" />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-stone-500">Email</p>
                      <p className="font-medium">hello@yourart.com</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-purple-100 rounded-full">
                      <MapPin className="w-4 h-4 text-purple-600" />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-stone-500">Location</p>
                      <p className="font-medium">Kerala, India</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Social Media Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <Card className="shadow-sm border border-stone-200">
                <CardHeader>
                  <CardTitle className="text-xl font-bold flex items-center gap-2">
                    <Instagram className="w-5 h-5 text-purple-600" />
                    Follow Me
                  </CardTitle>
                  <CardDescription>
                    For daily content and updates
                  </CardDescription>
                </CardHeader>
                <CardContent className="grid grid-cols-2 gap-3">
                  <Button 
                    variant="outline" 
                    onClick={() => handleSocialMediaClick('instagram')}
                    className="flex items-center gap-2"
                  >
                    <Instagram className="w-4 h-4 text-pink-600" />
                    Instagram
                  </Button>
                  <Button 
                    variant="outline" 
                    onClick={() => handleSocialMediaClick('youtube')}
                    className="flex items-center gap-2"
                  >
                    <Youtube className="w-4 h-4 text-red-600" />
                    YouTube
                  </Button>
                  <Button 
                    variant="outline" 
                    onClick={() => handleSocialMediaClick('twitter')}
                    className="flex items-center gap-2"
                  >
                    <Twitter className="w-4 h-4 text-blue-500" />
                    Twitter
                  </Button>
                  <Button 
                    variant="outline" 
                    onClick={() => handleSocialMediaClick('whatsapp')}
                    className="flex items-center gap-2"
                  >
                    <MessageCircle className="w-4 h-4 text-green-600" />
                    WhatsApp
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}