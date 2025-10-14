import { Button } from "@/components/ui/button";
import { Sparkles, Star } from "lucide-react";
import heroImage from "@/assets/wicked-wallpaper.png";
// import wickedVideo from "@/assets/wickedVideo.mov";

const Hero = () => {
  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      {/* <div className="absolute inset-0 z-0">
        <video
          src={wickedVideo}
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-[hsl(var(--light-pink))]/60" />
      </div> */}

      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Wicked Beauty Luxury Salon"
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-[hsl(var(--light-pink))]/50" />
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-20 left-10 animate-pulse">
        <Sparkles className="h-8 w-8 text-accent opacity-60" />
      </div>
      <div className="absolute bottom-20 right-10 animate-pulse delay-700">
        <Star className="h-6 w-6 text-accent opacity-60" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto space-y-8 animate-fadeIn">
          {/* Logo/Brand */}
          <div className="flex items-center justify-center space-x-3 mb-6">
            <Sparkles className="h-10 w-10 text-accent" />
            <h1 className="font-serif text-6xl md:text-8xl font-bold text-white">
              Wicked Beauty
            </h1>
            <Sparkles className="h-10 w-10 text-accent" />
          </div>

          {/* Slogan */}
          <p className="text-2xl md:text-4xl font-serif text-white/90 italic">
            Where beauty dreams come true!
          </p>

          {/* Services Badges */}
          <div className="flex flex-wrap justify-center gap-4 py-6">
            {[
              "Spray Tans",
              "Eyelash Extensions",
              "Brow Lamination",
              "Henna Brows",
            ].map((service) => (
              <span
                key={service}
                className="px-6 py-2 bg-white/20 backdrop-blur-sm rounded-full text-white font-medium border border-white/30"
              >
                {service}
              </span>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
            <Button
              onClick={scrollToContact}
              size="lg"
              className="bg-white text-primary hover:bg-white/90 hover:shadow-glow transition-all text-lg px-8 py-6 rounded-full"
            >
              Book Your Appointment
            </Button>
            <Button
              onClick={() => {
                const element = document.getElementById("services");
                if (element) element.scrollIntoView({ behavior: "smooth" });
              }}
              size="lg"
              variant="outline"
              className="bg-transparent border-2 border-white text-white hover:bg-white/10 text-lg px-8 py-6 rounded-full"
            >
              Explore Services
            </Button>
          </div>

          {/* Certification Badge */}
          <div className="pt-8">
            <p className="text-white/80 text-sm font-medium tracking-wider">
              CERTIFIED LASH TECHNICIAN × 3
            </p>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      {/* <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-3 bg-white/70 rounded-full" />
        </div>
      </div> */}
    </section>
  );
};

export default Hero;
