import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import procedureDiagram from "@/assets/procedure-diagram.jpg";
import bannerImage from "@/assets/banner-all-on-4.jpg";

const AllOnFour = () => {
  return (
    <div className="min-h-screen">
      {/* Header with Banner */}
      <section className="relative h-[400px] flex items-center">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${bannerImage})`,
          }}
        />
        <div className="container mx-auto px-4 relative z-10 text-center">
          <h1 className="text-5xl font-bold mb-6 text-white">All-on-4 Dental Implants</h1>
          <p className="text-xl max-w-3xl mx-auto text-gray-200">
            Understanding the revolutionary dental implant procedure that can
            restore your full smile with just four implants
          </p>
        </div>
      </section>

      {/* Procedure Steps */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">The Procedure: 4 Key Steps</h2>
            <p className="text-xl text-muted-foreground">
              A straightforward process designed for your comfort and success
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <Card className="p-8">
              <div className="w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-xl mb-4">
                1
              </div>
              <h3 className="text-2xl font-semibold mb-3">Initial Consultation</h3>
              <p className="text-muted-foreground">
                Comprehensive examination and 3D imaging to create your
                personalized treatment plan. We assess your oral health and
                discuss your goals.
              </p>
            </Card>

            <Card className="p-8">
              <div className="w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-xl mb-4">
                2
              </div>
              <h3 className="text-2xl font-semibold mb-3">Implant Placement</h3>
              <p className="text-muted-foreground">
                Four titanium implants are surgically placed in the jawbone at
                precise angles. These serve as artificial roots, bonding with
                the bone over several months.
              </p>
            </Card>

            <Card className="p-8">
              <div className="w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-xl mb-4">
                3
              </div>
              <h3 className="text-2xl font-semibold mb-3">
                Abutment & Crown Placement
              </h3>
              <p className="text-muted-foreground">
                After healing, custom abutments and crowns are attached to the
                implants, completing your natural-looking restoration with
                perfectly matched teeth.
              </p>
            </Card>

            <Card className="p-8">
              <div className="w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-xl mb-4">
                4
              </div>
              <h3 className="text-2xl font-semibold mb-3">Follow-Up Care</h3>
              <p className="text-muted-foreground">
                Regular check-ups ensure proper healing and function. We provide
                guidance on maintaining your implants for long-lasting results.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Visual Explanation */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-8">
              <h2 className="text-4xl font-bold mb-4">How All-on-4 Works</h2>
              <p className="text-xl text-muted-foreground">
                Four implants strategically placed to support a full arch of teeth
              </p>
            </div>
            <div className="bg-white rounded-lg p-8 shadow-lg">
              <img
                src={procedureDiagram}
                alt="All-on-4 dental implant procedure diagram"
                className="w-full rounded-lg"
              />
              <p className="text-center text-sm text-muted-foreground mt-6">
                The angled placement of the rear implants maximizes use of
                available bone and provides superior support
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Comparison Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">
            Comparing Tooth Replacement Options
          </h2>

          <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            <Card className="p-6 border-2 border-primary">
              <div className="text-center mb-4">
                <div className="inline-block px-3 py-1 bg-primary text-primary-foreground rounded-full text-sm font-semibold mb-4">
                  Recommended
                </div>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-center">
                All-on-4 Implants
              </h3>
              <ul className="space-y-3 text-sm">
                <li className="flex items-start gap-2">
                  <span className="text-primary font-bold">✓</span>
                  <span>Permanent and secure</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary font-bold">✓</span>
                  <span>Natural look and feel</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary font-bold">✓</span>
                  <span>No slipping or adhesives</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary font-bold">✓</span>
                  <span>Preserves jawbone</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary font-bold">✓</span>
                  <span>Long-lasting solution</span>
                </li>
              </ul>
            </Card>

            <Card className="p-6">
              <h3 className="text-2xl font-bold mb-4 text-center">
                Traditional Dentures
              </h3>
              <ul className="space-y-3 text-sm">
                <li className="flex items-start gap-2">
                  <span className="text-muted-foreground">•</span>
                  <span>Removable prosthetic</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-muted-foreground">•</span>
                  <span>May slip or move</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-muted-foreground">•</span>
                  <span>Requires adhesives</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-muted-foreground">•</span>
                  <span>Non-surgical option</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-muted-foreground">•</span>
                  <span>More affordable initially</span>
                </li>
              </ul>
            </Card>

            <Card className="p-6">
              <h3 className="text-2xl font-bold mb-4 text-center">
                Dental Bridges
              </h3>
              <ul className="space-y-3 text-sm">
                <li className="flex items-start gap-2">
                  <span className="text-muted-foreground">•</span>
                  <span>Fixed prosthetic</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-muted-foreground">•</span>
                  <span>Relies on adjacent teeth</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-muted-foreground">•</span>
                  <span>May require tooth alteration</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-muted-foreground">•</span>
                  <span>Good for smaller gaps</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-muted-foreground">•</span>
                  <span>Moderate lifespan</span>
                </li>
              </ul>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Is All-on-4 Right for You?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Schedule a consultation to discuss your options and get a
            personalized treatment plan
          </p>
          <Button size="lg" variant="secondary" asChild>
            <Link to="/contact">Schedule Consultation</Link>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default AllOnFour;
