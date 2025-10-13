import { Card, CardContent } from "@/components/ui/card";
import { Star, Quote } from "lucide-react";

const Reviews = () => {
  const reviews = [
    {
      name: "Sarah M. – Manly, NSW",
      rating: 5,
      text: "The most natural tan I’ve ever had! Wicked Bronze gave me the perfect golden glow — no streaks, no orange tones, just flawless results. Sarah made me feel super comfortable and explained everything clearly. I’ve already had so many compliments!",
      service: "Spray Tan",
    },
    {
      name: "Emily R. – Dee Why",
      rating: 5,
      text: "My go-to before every event! Every tan I’ve had here has been perfect. The colour looks natural, lasts for ages, and fades beautifully. The salon smells amazing and the girls are so friendly — I wouldn’t go anywhere else.",
      service: "Spray Tan",
    },
    {
      name: "Chloe W. – Freshwater",
      rating: 5,
      text: "“Absolutely flawless result! I booked for my sister’s wedding and couldn’t be happier. The tan looked stunning in photos and gave me that fresh, healthy glow. Wicked Bronze truly knows how to make you feel confident.",
      service: "",
    },
    {
      name: "Jess T. – Narrabeen",
      rating: 5,
      text: "Such a confidence boost! From start to finish, the experience was amazing. The team were so welcoming and professional. My skin looked radiant, smooth, and perfectly bronzed — I’m obsessed!",
      service: "Spray Tan",
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
