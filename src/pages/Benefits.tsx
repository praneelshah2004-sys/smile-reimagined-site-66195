import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import {
  Check,
  Shield,
  Smile,
  Heart,
  Clock,
  DollarSign,
  Utensils,
  Users,
} from "lucide-react";
import bannerImage from "@/assets/banner-benefits.jpg";

const Benefits = () => {
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
          <h1 className="text-5xl font-bold mb-6 text-white">
            Benefits of All-on-4 Dental Implants
          </h1>
          <p className="text-xl max-w-3xl mx-auto text-gray-200">
            Discover why thousands choose All-on-4 for a life-changing smile
            transformation
          </p>
        </div>
      </section>

      {/* Main Benefits */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="p-8 hover:shadow-soft transition-shadow">
              <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mb-6">
                <Shield className="h-7 w-7 text-primary" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Permanent Solution</h3>
              <p className="text-muted-foreground">
                Unlike removable dentures, All-on-4 implants are permanently
                fixed in your mouth, providing a stable foundation that feels
                and functions like natural teeth.
              </p>
            </Card>

            <Card className="p-8 hover:shadow-soft transition-shadow">
              <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mb-6">
                <Smile className="h-7 w-7 text-primary" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Natural Appearance</h3>
              <p className="text-muted-foreground">
                Custom-designed to match your facial structure and desired
                aesthetic, giving you a beautiful, natural-looking smile you'll
                be proud to show off.
              </p>
            </Card>

            <Card className="p-8 hover:shadow-soft transition-shadow">
              <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mb-6">
                <Heart className="h-7 w-7 text-primary" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Improved Confidence</h3>
              <p className="text-muted-foreground">
                Speak, laugh, and smile without worry. No more concerns about
                slipping dentures or embarrassing moments in social situations.
              </p>
            </Card>

            <Card className="p-8 hover:shadow-soft transition-shadow">
              <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mb-6">
                <Utensils className="h-7 w-7 text-primary" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Eat What You Love</h3>
              <p className="text-muted-foreground">
                Enjoy all your favorite foods without restrictions. All-on-4
                implants restore full chewing power, unlike traditional dentures.
              </p>
            </Card>

            <Card className="p-8 hover:shadow-soft transition-shadow">
              <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mb-6">
                <Clock className="h-7 w-7 text-primary" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Long-Lasting Results</h3>
              <p className="text-muted-foreground">
                With proper care, All-on-4 implants can last for decades,
                making them a cost-effective long-term investment in your oral
                health.
              </p>
            </Card>

            <Card className="p-8 hover:shadow-soft transition-shadow">
              <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mb-6">
                <Users className="h-7 w-7 text-primary" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Bone Preservation</h3>
              <p className="text-muted-foreground">
                Implants stimulate the jawbone, preventing bone loss that
                typically occurs with missing teeth or traditional dentures.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Insurance Coverage */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <Shield className="h-16 w-16 text-primary mx-auto mb-6" />
              <h2 className="text-4xl font-bold mb-4">
                Insurance Coverage Available
              </h2>
              <p className="text-xl text-muted-foreground">
                We accept BlueCross BlueShield medical insurance
              </p>
            </div>

            <Card className="p-8 bg-background">
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <Check className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-lg mb-2">
                      Medical Insurance Accepted
                    </h3>
                    <p className="text-muted-foreground">
                      Many patients are surprised to learn that All-on-4
                      procedures may be covered under medical insurance, not
                      just dental insurance.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Check className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-lg mb-2">
                      Flexible Payment Options
                    </h3>
                    <p className="text-muted-foreground">
                      We offer various financing solutions to make your
                      treatment accessible and affordable.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Check className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-lg mb-2">
                      Cost-Effective Long-Term
                    </h3>
                    <p className="text-muted-foreground">
                      While the initial investment may be higher than dentures,
                      All-on-4 eliminates the need for adhesives, replacements,
                      and frequent adjustments.
                    </p>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Comparison vs Dentures */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">
            All-on-4 vs Traditional Dentures
          </h2>

          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8">
              <Card className="p-6 border-2 border-primary">
                <h3 className="text-2xl font-bold mb-6 text-center">
                  All-on-4 Implants
                </h3>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>No slipping or movement</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>No adhesives needed</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>Eat any food comfortably</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>Preserves facial structure</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>Lasts for decades</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>Easy maintenance</span>
                  </li>
                </ul>
              </Card>

              <Card className="p-6">
                <h3 className="text-2xl font-bold mb-6 text-center">
                  Traditional Dentures
                </h3>
                <ul className="space-y-4 text-muted-foreground">
                  <li className="flex items-start gap-3">
                    <span className="text-destructive mt-0.5">✗</span>
                    <span>Can slip and cause discomfort</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-destructive mt-0.5">✗</span>
                    <span>Require daily adhesive application</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-destructive mt-0.5">✗</span>
                    <span>Restrict certain foods</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-destructive mt-0.5">✗</span>
                    <span>May accelerate bone loss</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-destructive mt-0.5">✗</span>
                    <span>Need frequent adjustments</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-destructive mt-0.5">✗</span>
                    <span>Require special cleaning</span>
                  </li>
                </ul>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Experience the All-on-4 Difference
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Join thousands who have transformed their lives with All-on-4 dental
            implants
          </p>
          <Button size="lg" variant="secondary" asChild>
            <Link to="/contact">Get Started Today</Link>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Benefits;
