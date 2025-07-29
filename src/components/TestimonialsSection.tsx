import { Card, CardContent } from "@/components/ui/card";
import { Star, Quote } from "lucide-react";

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Sarah M.",
      role: "Marketing Professional",
      content: "Working with this therapist completely transformed how I handle work stress. I went from panic attacks to feeling confident in high-pressure situations.",
      rating: 5,
      outcome: "Reduced anxiety by 80% in 6 weeks"
    },
    {
      name: "Michael R.", 
      role: "Small Business Owner",
      content: "The mindfulness techniques I learned here saved my marriage. I finally understand how to communicate without getting overwhelmed by emotions.",
      rating: 5,
      outcome: "Improved relationship satisfaction"
    },
    {
      name: "Jennifer L.",
      role: "Healthcare Worker", 
      content: "After struggling with depression for years, I finally feel like myself again. The personalized approach made all the difference.",
      rating: 5,
      outcome: "Overcame depression in 3 months"
    }
  ];

  return (
    <section className="py-16 lg:py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="text-3xl lg:text-4xl font-serif font-semibold text-foreground mb-4">
            Real Stories of Transformation
          </h2>
          <p className="text-lg text-muted-foreground font-light max-w-2xl mx-auto">
            See how others have found healing, growth, and lasting change through our work together
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="border-border bg-card hover:shadow-lg transition-all duration-300 group">
              <CardContent className="p-6">
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-warm-gold text-warm-gold" />
                  ))}
                </div>
                
                <div className="relative mb-4">
                  <Quote className="w-6 h-6 text-warm-sage/30 absolute -top-2 -left-1" />
                  <p className="text-foreground font-light leading-relaxed pl-6">
                    "{testimonial.content}"
                  </p>
                </div>
                
                <div className="border-t border-border/50 pt-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-semibold text-foreground text-sm">{testimonial.name}</p>
                      <p className="text-muted-foreground text-xs">{testimonial.role}</p>
                    </div>
                  </div>
                  <div className="mt-3">
                    <span className="inline-block bg-warm-sage/10 text-warm-sage text-xs font-medium px-3 py-1 rounded-full">
                      ✨ {testimonial.outcome}
                    </span>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <div className="inline-flex items-center gap-4 bg-card border border-border rounded-lg px-6 py-4 shadow-sm">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-warm-sage/10 rounded-full flex items-center justify-center">
                <span className="text-warm-sage font-semibold text-sm">4.9</span>
              </div>
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-warm-gold text-warm-gold" />
                ))}
              </div>
            </div>
            <div className="text-left">
              <p className="text-sm font-medium text-foreground">Average rating</p>
              <p className="text-xs text-muted-foreground">Based on 150+ sessions</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;