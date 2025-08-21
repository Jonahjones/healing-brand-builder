import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { Mail, Phone, MapPin, Clock, Send, Calendar } from "lucide-react";

export default function ContactSection({ withId = true }: { withId?: boolean }) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState('');
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitError('');
    
    try {
      const form = e.currentTarget;
      const formData = new FormData(form);
      
      const response = await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams(formData as any).toString(),
      });
      
      if (response.ok) {
        toast({
          title: "🎉 Your message is on its way!",
          description: "Thanks for reaching out! I'll get back to you within 24 hours to schedule your free consultation.",
          variant: "success",
        });
        form.reset();
      } else {
        throw new Error('Form submission failed');
      }
    } catch (error) {
      setSubmitError('There was an error sending your message. Please try again or email me directly.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id={withId ? "contact" : undefined} data-page-hero className={`pt-24 pb-16 ${withId ? 'backdrop-blur-sm bg-white/5' : 'bg-gradient-to-br from-warm-cream via-natural-beige to-soft-sage/30'} relative overflow-hidden min-h-screen transition-all duration-1000 ease-out`}>
      {/* Background Decorative Elements */}
      <div className="absolute top-20 left-20 w-96 h-96 bg-gradient-to-br from-gentle-terracotta/8 to-earth-clay/8 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-20 w-80 h-80 bg-gradient-to-tl from-soft-sage/8 to-cozy-brown/8 rounded-full blur-3xl"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        {/* More compact header */}
        <div data-lead="contact" className="text-center mb-4 sm:mb-6">          
                  <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
          <span className="text-cozy-brown block">Ready to Make Real Progress?</span>
          <span className="text-transparent bg-gradient-to-r from-gentle-terracotta/90 via-earth-clay/85 to-cozy-brown/90 bg-clip-text block">
            Let's Connect!
          </span>
        </h1>
          <p className="text-base sm:text-lg text-cozy-brown/80 max-w-4xl mx-auto">
            Book your free 15-minute online therapy consultation to discover how virtual counseling guides meaningful progress.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-6">
          {/* More compact contact form */}
          <div className="lg:col-span-2" data-role="contact-form">
            <Card className="bg-white/95 backdrop-blur-sm border-2 border-cozy-brown/10 shadow-xl overflow-hidden">
              <div className="h-1 bg-gradient-to-r from-gentle-terracotta to-earth-clay"></div>
              <CardHeader className="bg-gradient-to-br from-gentle-terracotta/5 to-earth-clay/5 pb-2 sm:pb-3">
                <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-3 mb-3">
                  <div className="w-10 h-10 bg-gentle-terracotta/20 rounded-xl flex items-center justify-center">
                    <Send className="w-5 h-5 text-gentle-terracotta" />
                  </div>
                  <div>
                    <CardTitle className="text-lg sm:text-xl font-heading font-bold text-cozy-brown">Send a Confidential Message</CardTitle>
                    <CardDescription className="text-cozy-brown/70 text-sm sm:text-base">
                      24-hour response. Confidential communications.
              </CardDescription>
                  </div>
                </div>
            </CardHeader>
              <CardContent className="space-y-3 sm:space-y-4 p-3 sm:p-4">
                <form 
                  name="contact" 
                  method="POST" 
                  data-netlify="true" 
                  data-netlify-honeypot="bot-field"
                  onSubmit={handleSubmit} 
                  className="space-y-2.5 sm:space-y-3"
                >
                  {/* Netlify form detection */}
                  <input type="hidden" name="form-name" value="contact" />
                  {/* Honeypot field for spam protection */}
                  <div style={{ display: 'none' }}>
                    <label>
                      Don't fill this out if you're human: <input name="bot-field" />
                    </label>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3">
                    <div className="space-y-1 sm:space-y-2">
                      <Label htmlFor="firstName" className="font-semibold text-cozy-brown text-xs uppercase tracking-wider">First Name *</Label>
                  <Input 
                    id="firstName" 
                    name="firstName"
                    placeholder="Your first name" 
                        className="border-2 border-soft-sage/30 focus:border-gentle-terracotta focus:ring-gentle-terracotta/20 bg-white/95 backdrop-blur-sm rounded-lg py-1.5 text-sm h-9"
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
                        className="border-2 border-soft-sage/30 focus:border-gentle-terracotta focus:ring-gentle-terracotta/20 bg-white/95 backdrop-blur-sm rounded-lg py-1.5 text-sm h-9"
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
                      className="border-2 border-soft-sage/30 focus:border-gentle-terracotta focus:ring-gentle-terracotta/20 bg-white/95 backdrop-blur-sm rounded-lg py-2 text-sm"
                  required
                  aria-required="true"
                  aria-describedby="email-description"
                />
                    <p id="email-description" className="text-xs text-cozy-brown/60">For appointment confirmations and secure messages</p>
              </div>
                  
                  <div className="space-y-1 sm:space-y-2">
                    <Label htmlFor="phone" className="font-semibold text-cozy-brown text-xs uppercase tracking-wider">Phone Number (Optional)</Label>
                <Input 
                  id="phone" 
                  name="phone"
                  type="tel" 
                  placeholder="(555) 123-4567" 
                      className="border-2 border-soft-sage/30 focus:border-gentle-terracotta focus:ring-gentle-terracotta/20 bg-white/95 backdrop-blur-sm rounded-lg py-2 text-sm"
                  aria-describedby="phone-description"
                />

              </div>
                  
                  <div className="space-y-1 sm:space-y-2">
                    <Label htmlFor="message" className="font-semibold text-cozy-brown text-xs uppercase tracking-wider">What brings you to virtual therapy? *</Label>
                <Textarea 
                  id="message" 
                  name="message"
                  placeholder="Share what brings you to therapy... anxiety, depression, transitions, relationships, etc."
                      rows={2}
                      className="border-2 border-soft-sage/30 focus:border-gentle-terracotta focus:ring-gentle-terracotta/20 bg-white/95 backdrop-blur-sm rounded-lg resize-none text-sm py-1.5"
                  required
                  aria-required="true"
                  aria-describedby="message-description"
                />
                    <p id="message-description" className="text-xs text-cozy-brown/60">Confidential and HIPAA-protected</p>
                  </div>
                  
                  {/* Error Message */}
                  {submitError && (
                    <div 
                      className="bg-red-50 border border-red-200 rounded-lg p-4 text-center" 
                      role="alert"
                      aria-live="polite"
                    >
                      <div className="flex items-center justify-center mb-2">
                        <div className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center">
                          <span className="text-red-600" aria-hidden="true">!</span>
                        </div>
                      </div>
                      <h4 className="font-bold text-red-600 mb-1">Submission Error</h4>
                      <p className="text-sm text-red-700">{submitError}</p>
                    </div>
                  )}

                  {/* Submit Button */}
              <Button 
                type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-gradient-to-r from-gentle-terracotta to-earth-clay hover:from-earth-clay hover:to-gentle-terracotta text-white font-bold py-2.5 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      <div className="flex items-center justify-center">
                        <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                        Sending...
                      </div>
                    ) : (
                      <><Calendar className="w-5 h-5 mr-2" />Send Message & Book Your Free Consultation</>
                    )}
              </Button>
                  <p id="submit-description" className="text-xs text-center text-cozy-brown/60">
                    Consultation communications only. No spam.
              </p>
                </form>
            </CardContent>
          </Card>
          </div>

          {/* More compact contact info */}
          <div className="space-y-4 sm:space-y-6" data-role="contact-aside">
            <Card className="bg-white/95 backdrop-blur-sm border border-cozy-brown/10 shadow-lg">
              <CardHeader className="pb-3 sm:pb-4">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-8 h-8 bg-cozy-brown/20 rounded-lg flex items-center justify-center">
                    <Mail className="w-4 h-4 text-cozy-brown" />
                  </div>
                  <CardTitle className="text-base font-heading font-bold text-cozy-brown">Direct Contact</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="pt-0 space-y-3">
                <a 
                  href="mailto:zach@resilientmindcounseling.info" 
                  className="flex items-center gap-3 p-2 bg-cozy-brown/5 rounded-lg hover:bg-cozy-brown/10 transition-colors duration-200 cursor-pointer group"
                >
                  <Mail className="w-4 h-4 text-cozy-brown/70 group-hover:text-cozy-brown transition-colors duration-200" />
                  <div>
                    <p className="font-medium text-cozy-brown text-sm group-hover:text-cozy-brown/90">Email</p>
                    <p className="text-xs text-cozy-brown/70 group-hover:text-cozy-brown">
                      zach@resilientmindcounseling.info
                    </p>
                  </div>
                </a>
                <a 
                  href="tel:+14143480996" 
                  className="flex items-center gap-3 p-2 bg-cozy-brown/5 rounded-lg hover:bg-cozy-brown/10 transition-colors duration-200 cursor-pointer group"
                >
                  <Phone className="w-4 h-4 text-cozy-brown/70 group-hover:text-cozy-brown transition-colors duration-200" />
                  <div>
                    <p className="font-medium text-cozy-brown text-sm group-hover:text-cozy-brown/90">Phone</p>
                    <p className="text-xs text-cozy-brown/70 group-hover:text-cozy-brown">
                      (414) 348-0996
                    </p>
                  </div>
                </a>
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
            
            <Card className="bg-white/95 backdrop-blur-sm border border-cozy-brown/10 shadow-lg">
              <CardContent className="p-4 sm:p-6">
                <h4 className="text-base font-bold text-cozy-brown mb-2">Free Consultation</h4>
                <p className="text-xs sm:text-sm text-cozy-brown/80 mb-3">
                  15 minutes to see if we're a good fit. No pressure.
                </p>
                <div className="bg-white/95 backdrop-blur-sm rounded-lg p-3 border border-gentle-terracotta/20">
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
}