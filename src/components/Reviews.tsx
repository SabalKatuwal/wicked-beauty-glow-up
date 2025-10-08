import { Card, CardContent } from "@/components/ui/card";
import { Star, Quote } from "lucide-react";

const Reviews = () => {
  const reviews = [
    {
      name: "Sarah M.",
      rating: 5,
      text: "Absolutely love my lash extensions! The technician was so skilled and made me feel completely comfortable. I wake up looking gorgeous every day!",
      service: "Eyelash Extensions",
    },
    {
      name: "Emma L.",
      rating: 5,
      text: "Best spray tan I've ever had! The color is so natural and it lasted for ages. The service was professional and the salon is beautiful.",
      service: "Spray Tan",
    },
    {
      name: "Olivia K.",
      rating: 5,
      text: "My brows have never looked better! The lamination gave them such a beautiful shape and they're so easy to maintain now. Highly recommend!",
      service: "Brow Lamination",
    },
    {
      name: "Jessica R.",
      rating: 5,
      text: "The henna brows are incredible! They look so natural and defined. The whole experience at Wicked Beauty was luxurious and relaxing.",
      service: "Henna Hybrid Brows",
    },
  ];

  return (
    <section id="reviews" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fadeIn">
          <h2 className="font-serif text-5xl md:text-6xl font-bold text-foreground mb-4">
            Client Love
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Hear what our beautiful clients have to say about their experience
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {reviews.map((review, index) => (
            <Card
              key={index}
              className="border-none shadow-card hover:shadow-elegant transition-all duration-500 animate-slideUp"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <CardContent className="p-8 bg-gradient-to-br from-card to-muted/10 relative">
                <Quote className="absolute top-4 right-4 h-12 w-12 text-primary/20" />
                
                <div className="flex items-center mb-4">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="h-5 w-5 text-accent fill-accent"
                    />
                  ))}
                </div>

                <p className="text-foreground leading-relaxed mb-6 relative z-10">
                  "{review.text}"
                </p>

                <div className="flex items-center justify-between pt-4 border-t border-border">
                  <div>
                    <p className="font-semibold text-foreground">{review.name}</p>
                    <p className="text-sm text-muted-foreground">{review.service}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12 p-8 bg-gradient-to-r from-primary/10 to-secondary/10 rounded-2xl max-w-4xl mx-auto animate-fadeIn">
          <div className="flex items-center justify-center mb-4">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="h-6 w-6 text-accent fill-accent" />
            ))}
          </div>
          <h3 className="font-serif text-3xl font-bold text-foreground mb-2">
            5.0 Average Rating
          </h3>
          <p className="text-muted-foreground">
            Based on 100+ happy clients
          </p>
        </div>
      </div>
    </section>
  );
};

export default Reviews;
