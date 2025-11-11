import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Gallery = () => {
  const testimonials = [
    {
      name: "William Goldman",
      text: "The All-on-4 procedure changed my life. I can finally smile with confidence and eat all the foods I love. The team was professional and caring throughout the entire process.",
    },
    {
      name: "Samuel Campos",
      text: "I was nervous about getting dental implants, but the staff made me feel comfortable every step of the way. The results exceeded my expectations!",
    },
    {
      name: "Jennifer Martinez",
      text: "After years of struggling with dentures, All-on-4 has been a game-changer. No more adhesives or worrying about slipping. It feels just like having my natural teeth back.",
    },
    {
      name: "Robert Chen",
      text: "The difference in my quality of life is remarkable. I wish I had done this years ago. The procedure was straightforward and the recovery was easier than expected.",
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Header */}
      <section className="bg-hero-gradient text-primary-foreground py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-6">Before & After Gallery</h1>
          <p className="text-xl max-w-3xl mx-auto">
            See the life-changing transformations our patients have experienced
          </p>
        </div>
      </section>

      {/* Gallery Introduction */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">
              Transforming Smiles, One Patient at a Time
            </h2>
            <p className="text-xl text-muted-foreground">
              Every smile tells a story of renewed confidence and improved
              quality of life. Our All-on-4 dental implant results speak for
              themselves.
            </p>
          </div>

          {/* Before/After Placeholder */}
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <Card className="p-6">
              <div className="aspect-video bg-muted rounded-lg flex items-center justify-center mb-4">
                <div className="text-center">
                  <p className="text-4xl font-bold text-primary mb-2">Before</p>
                  <p className="text-muted-foreground">Missing teeth and gaps</p>
                </div>
              </div>
              <p className="text-sm text-muted-foreground text-center">
                Traditional dentures causing discomfort and limiting food choices
              </p>
            </Card>

            <Card className="p-6">
              <div className="aspect-video bg-muted rounded-lg flex items-center justify-center mb-4">
                <div className="text-center">
                  <p className="text-4xl font-bold text-primary mb-2">After</p>
                  <p className="text-muted-foreground">Complete, beautiful smile</p>
                </div>
              </div>
              <p className="text-sm text-muted-foreground text-center">
                Natural-looking All-on-4 implants restoring confidence and function
              </p>
            </Card>
          </div>

          <div className="text-center">
            <p className="text-lg text-muted-foreground mb-6">
              Results shown are representative of typical outcomes. Individual
              results may vary.
            </p>
          </div>
        </div>
      </section>

      {/* Patient Testimonials */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Patient Success Stories</h2>
            <p className="text-xl text-muted-foreground">
              Hear from real patients about their All-on-4 experience
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="p-8 bg-background">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <span className="text-primary font-bold text-lg">
                      {testimonial.name.charAt(0)}
                    </span>
                  </div>
                  <div>
                    <p className="font-semibold">{testimonial.name}</p>
                    <div className="flex gap-1">
                      {[...Array(5)].map((_, i) => (
                        <span key={i} className="text-primary">★</span>
                      ))}
                    </div>
                  </div>
                </div>
                <p className="text-muted-foreground italic">"{testimonial.text}"</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 max-w-5xl mx-auto">
            <div className="text-center">
              <div className="text-5xl font-bold text-primary mb-2">98%</div>
              <p className="text-muted-foreground">Success Rate</p>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-primary mb-2">1000+</div>
              <p className="text-muted-foreground">Patients Treated</p>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-primary mb-2">15+</div>
              <p className="text-muted-foreground">Years Experience</p>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-primary mb-2">20+</div>
              <p className="text-muted-foreground">Years Lasting</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Ready to Start Your Transformation?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Schedule your consultation today and take the first step toward your
            new smile
          </p>
          <Button size="lg" variant="secondary" asChild>
            <Link to="/contact">Book Consultation</Link>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Gallery;
