import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { CheckCircle2, Shield, Clock, Award } from "lucide-react";
import heroImage from "@/assets/hero-dental.jpg";
import dentalImplantsImage from "@/assets/dental-implants.jpg";

const Home = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[600px] flex items-center">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url(${heroImage})`,
          }}
        />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-2xl text-white animate-fade-in">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              Transform Your Smile with{" "}
              <span className="text-primary">All-on-4</span> Dental Implants
            </h1>
            <p className="text-xl mb-8 text-gray-200">
              A permanent solution for missing teeth. Speak, chew, and smile
              with confidence.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button size="lg" asChild>
                <Link to="/contact">Book Consultation</Link>
              </Button>
              <Button size="lg" variant="outline" asChild className="bg-white/10 hover:bg-white/20 text-white border-white">
                <Link to="/all-on-4">Learn More</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose All-on-4 */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">
              Why Choose All-on-4 Dental Implants?
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Unlike traditional dentures, All-on-4 uses four strategically
              placed implants for a secure, natural-looking smile
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="p-6 text-center hover:shadow-soft transition-shadow">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <CheckCircle2 className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-semibold text-lg mb-2">
                Advanced Technology
              </h3>
              <p className="text-sm text-muted-foreground">
                Precise results using state-of-the-art dental technology
              </p>
            </Card>

            <Card className="p-6 text-center hover:shadow-soft transition-shadow">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <Shield className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-semibold text-lg mb-2">
                Experienced Team
              </h3>
              <p className="text-sm text-muted-foreground">
                Specialists dedicated to All-on-4 implant procedures
              </p>
            </Card>

            <Card className="p-6 text-center hover:shadow-soft transition-shadow">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <Clock className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-semibold text-lg mb-2">
                Personalized Care
              </h3>
              <p className="text-sm text-muted-foreground">
                Comfort and confidence throughout your treatment journey
              </p>
            </Card>

            <Card className="p-6 text-center hover:shadow-soft transition-shadow">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <Award className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-semibold text-lg mb-2">
                Long-lasting Results
              </h3>
              <p className="text-sm text-muted-foreground">
                Natural-looking smiles designed to last for years
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* About All-on-4 */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <img
                src={dentalImplantsImage}
                alt="Perfect smile with dental implants"
                className="rounded-lg shadow-lg"
              />
            </div>
            <div>
              <h2 className="text-4xl font-bold mb-6">
                What Are All-on-4 Dental Implants?
              </h2>
              <p className="text-lg text-muted-foreground mb-6">
                All-on-4 dental implants are a revolutionary solution for those
                missing a full arch of teeth. Using just four strategically
                placed titanium implants, we can anchor a complete set of
                natural-looking teeth.
              </p>
              <ul className="space-y-4 mb-8">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
                  <span>
                    <strong>Stable & Secure:</strong> No slipping or discomfort
                    like traditional dentures
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
                  <span>
                    <strong>Permanent Solution:</strong> Designed to last for
                    many years with proper care
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
                  <span>
                    <strong>Natural Appearance:</strong> Custom-designed for a
                    beautiful, confident smile
                  </span>
                </li>
              </ul>
              <Button size="lg" asChild>
                <Link to="/all-on-4">Learn About the Procedure</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Ready to Transform Your Smile?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Schedule a consultation today and discover how All-on-4 dental
            implants can change your life.
          </p>
          <Button size="lg" variant="secondary" asChild>
            <Link to="/contact">Book Your Consultation</Link>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Home;
