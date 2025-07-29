import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Mail, Phone, MapPin, Clock, Send, Calendar } from "lucide-react";

const ContactSection = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      // You can add actual form submission logic here
    }, 2000);
  };

  return (
    <section id="contact" className="py-8 sm:py-12 bg-gradient-to-br from-cozy-brown/5 via-warm-cream to-gentle-terracotta/10 relative overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute top-20 left-20 w-96 h-96 bg-gradient-to-br from-gentle-terracotta/8 to-earth-clay/8 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-20 w-80 h-80 bg-gradient-to-tl from-soft-sage/8 to-cozy-brown/8 rounded-full blur-3xl"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        {/* More compact header */}
        <div className="text-center mb-8 sm:mb-12">          
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-heading font-bold text-cozy-brown mb-3 sm:mb-4">
            Ready to Make Real Progress? 
            <span className="block text-gentle-terracotta">Let's Connect.</span>
          </h2>
          <p className="text-base sm:text-lg text-cozy-brown/80 max-w-3xl mx-auto leading-relaxed">
            Book your free 15-minute consultation to see if Zach's clear, honest coaching is the breakthrough you need. Limited spots available.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8">
          {/* More compact contact form */}
          <div className="lg:col-span-2">
            <Card className="bg-white/70 backdrop-blur-sm border-2 border-soft-sage/20 shadow-xl overflow-hidden">
              <div className="h-1 bg-gradient-to-r from-gentle-terracotta to-earth-clay"></div>
              <CardHeader className="bg-gradient-to-br from-gentle-terracotta/5 to-earth-clay/5 pb-4 sm:pb-6">
                <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-3 mb-3">
                  <div className="w-10 h-10 bg-gentle-terracotta/20 rounded-xl flex items-center justify-center">
                    <Send className="w-5 h-5 text-gentle-terracotta" />
                  </div>
                  <div>
                    <CardTitle className="text-lg sm:text-xl font-heading font-bold text-cozy-brown">Send a Confidential Message</CardTitle>
                    <CardDescription className="text-cozy-brown/70 text-sm sm:text-base">
                      I'll respond within 24 hours. All communications are confidential.
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-4 sm:space-y-6 p-4 sm:p-6">
                <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                    <div className="space-y-1 sm:space-y-2">
                      <Label htmlFor="firstName" className="font-semibold text-cozy-brown text-xs uppercase tracking-wider">First Name *</Label>
                      <Input 
                        id="firstName" 
                        name="firstName"
                        placeholder="Your first name" 
                        className="border-2 border-soft-sage/30 focus:border-gentle-terracotta focus:ring-gentle-terracotta/20 bg-white/80 backdrop-blur-sm rounded-lg py-2 text-sm"
                        required
                        aria-required="true"
                      />
                    </div>
                    <div className="space-y-1 sm:space-y-2">
                      <Label htmlFor="lastName" className="font-semibold text-cozy-brown text-xs uppercase tracking-wider">Last Name *</Label>
                      <Input 
                        id="lastName" 
                        name="lastName"
                        placeholder="Your last name" 
                        className="border-2 border-soft-sage/30 focus:border-gentle-terracotta focus:ring-gentle-terracotta/20 bg-white/80 backdrop-blur-sm rounded-lg py-2 text-sm"
                        required
                        aria-required="true"
                      />
                    </div>
                  </div>
                  
                  <div className="space-y-1 sm:space-y-2">
                    <Label htmlFor="email" className="font-semibold text-cozy-brown text-xs uppercase tracking-wider">Email Address *</Label>
                    <Input 
                      id="email" 
                      name="email"
                      type="email"
                      placeholder="your.email@example.com" 
                      className="border-2 border-soft-sage/30 focus:border-gentle-terracotta focus:ring-gentle-terracotta/20 bg-white/80 backdrop-blur-sm rounded-lg py-2 text-sm"
                      required
                      aria-required="true"
                      aria-describedby="email-description"
                    />
                    <p id="email-description" className="text-xs text-cozy-brown/60">We'll use this to send you appointment confirmations and secure messages</p>
                  </div>
                  
                  <div className="space-y-1 sm:space-y-2">
                    <Label htmlFor="phone" className="font-semibold text-cozy-brown text-xs uppercase tracking-wider">Phone Number (Optional)</Label>
                    <Input 
                      id="phone" 
                      name="phone"
                      type="tel"
                      placeholder="(555) 123-4567" 
                      className="border-2 border-soft-sage/30 focus:border-gentle-terracotta focus:ring-gentle-terracotta/20 bg-white/80 backdrop-blur-sm rounded-lg py-2 text-sm"
                      aria-describedby="phone-description"
                    />
                    <p id="phone-description" className="text-xs text-cozy-brown/60">Optional - for appointment reminders only</p>
                  </div>
                  
                  <div className="space-y-1 sm:space-y-2">
                    <Label htmlFor="message" className="font-semibold text-cozy-brown text-xs uppercase tracking-wider">What brings you to online therapy? *</Label>
                    <Textarea 
                      id="message" 
                      name="message"
                      placeholder="Share what you're comfortable with... anxiety, depression, life transitions, relationships, etc. This helps me understand how I can best support you."
                      rows={3}
                      className="border-2 border-soft-sage/30 focus:border-gentle-terracotta focus:ring-gentle-terracotta/20 bg-white/80 backdrop-blur-sm rounded-lg resize-none text-sm"
                      required
                      aria-required="true"
                      aria-describedby="message-description"
                    />
                    <p id="message-description" className="text-xs text-cozy-brown/60">Your information is completely confidential and HIPAA-protected</p>
                  </div>
                  
                  <Button 
                    type="submit" 
                    disabled={isSubmitting}
                    className="w-full bg-gradient-to-r from-gentle-terracotta to-earth-clay hover:from-earth-clay hover:to-gentle-terracotta text-white font-bold py-3 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      <div className="flex items-center justify-center">
                        <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                        Sending...
                      </div>
                    ) : (
                      <>📱 Send Message & Book Free Consult</>
                    )}
                  </Button>
                  <p id="submit-description" className="text-xs text-center text-cozy-brown/60">
                    By submitting this form, you agree to receive email communications about your consultation. No spam, ever.
                  </p>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* More compact contact info */}
          <div className="space-y-4 sm:space-y-6">
            <Card className="bg-white/60 backdrop-blur-sm border border-cozy-brown/20 shadow-lg">
              <CardHeader className="pb-3 sm:pb-4">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-8 h-8 bg-cozy-brown/20 rounded-lg flex items-center justify-center">
                    <Mail className="w-4 h-4 text-cozy-brown" />
                  </div>
                  <CardTitle className="text-base font-heading font-bold text-cozy-brown">Direct Contact</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="pt-0 space-y-3">
                <div className="flex items-center gap-3 p-2 bg-cozy-brown/5 rounded-lg">
                  <Phone className="w-4 h-4 text-cozy-brown/70" />
                  <div>
                    <p className="font-medium text-cozy-brown text-sm">Phone</p>
                    <p className="text-xs text-cozy-brown/70">Available during consultation</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-2 bg-gentle-terracotta/5 rounded-lg">
                  <MapPin className="w-4 h-4 text-gentle-terracotta/70" />
                  <div>
                    <p className="font-medium text-cozy-brown text-sm">Serving</p>
                    <p className="text-xs text-cozy-brown/70">California & Wisconsin</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-2 bg-earth-clay/5 rounded-lg">
                  <Clock className="w-4 h-4 text-earth-clay/70" />
                  <div>
                    <p className="font-medium text-cozy-brown text-sm">Response Time</p>
                    <p className="text-xs text-cozy-brown/70">Within 24 hours</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-gentle-terracotta/10 to-earth-clay/10 border border-gentle-terracotta/20 shadow-lg">
              <CardContent className="p-4 sm:p-6">
                <h4 className="text-base font-heading font-bold text-cozy-brown mb-2">Free Consultation</h4>
                <p className="text-xs sm:text-sm text-cozy-brown/80 mb-3">
                  15 minutes to see if we're a good fit. No pressure, just honest conversation about your goals.
                </p>
                <div className="bg-white/70 rounded-lg p-3 border border-gentle-terracotta/20">
                  <p className="text-xs font-semibold text-gentle-terracotta uppercase tracking-wider mb-1">What We'll Cover</p>
                  <ul className="text-xs text-cozy-brown/80 space-y-1">
                    <li>• Your current challenges</li>
                    <li>• How I can help</li>
                    <li>• Next steps together</li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;