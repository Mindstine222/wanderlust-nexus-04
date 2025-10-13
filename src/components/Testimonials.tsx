import { Quote } from "lucide-react";

const Testimonials = () => {
  const testimonial = {
    name: "Abdullah Khan",
    text: "Fly Zone Elite Travels made the visa application process smooth and stress-free. Highly recommend!",
  };

  return (
    <section className="py-12 md:py-16">
      <div className="container mx-auto px-4">
        <div className="bg-primary rounded-3xl p-8 md:p-12 shadow-large">
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">
                Testimonials
              </h2>
              
              <div className="space-y-6">
                <Quote className="h-12 w-12 text-secondary" />
                
                <p className="text-white text-lg md:text-xl leading-relaxed">
                  {testimonial.text}
                </p>

                <div>
                  <div className="font-semibold text-white text-xl">{testimonial.name}</div>
                </div>
              </div>
            </div>

            <div className="flex justify-center md:justify-end">
              <div className="relative">
                <div className="w-48 h-48 md:w-64 md:h-64 rounded-full overflow-hidden border-4 border-secondary shadow-glow">
                  <img
                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop"
                    alt="Abdullah Khan"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="mt-8 text-center">
            <button className="bg-secondary hover:bg-secondary/90 text-secondary-foreground font-semibold px-8 py-3 rounded-lg transition-smooth">
              Read More
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
