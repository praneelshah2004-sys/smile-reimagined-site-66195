import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { GraduationCap, Award, Heart, Stethoscope, Building2, TrendingUp, Phone } from "lucide-react";
import drMonaStone from "@/assets/dr-mona-stone.jpg";
import drNiranjanSavani from "@/assets/dr-niranjan-savani.jpg";
import clinicInterior from "@/assets/clinic-interior.jpg";
import bannerImage from "@/assets/banner-doctors.jpg";

const Doctor = () => {
  return (
    <main className="min-h-screen bg-background">
      {/* Hero Section with Banner */}
      <section className="relative h-[400px] flex items-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${bannerImage})`,
          }}
        />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 text-white">
            Meet the Doctors
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl text-gray-200 leading-relaxed max-w-3xl mx-auto">
            Our Expert Team of Oral and Maxillofacial Surgeons
          </p>
        </div>
      </section>

      {/* Dr. Mona Stone Profile */}
      <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-b from-background to-muted/20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-8">
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-2">Dr. Mona Stone</h2>
              <p className="text-lg text-muted-foreground">Oral and Maxillofacial Surgeon</p>
              <p className="text-base text-primary font-semibold mt-2 flex items-center justify-center gap-2">
                <Phone className="h-4 w-4" />
                (610) 301-0309
              </p>
            </div>
            
            <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 xl:gap-16 items-start mb-12">
              {/* Photo */}
              <div className="relative">
                <div className="relative rounded-2xl overflow-hidden shadow-2xl aspect-[3/4] bg-muted">
                  <img 
                    src={drMonaStone} 
                    alt="Dr. Mona Stone - Professional portrait"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -bottom-6 -right-6 bg-primary text-primary-foreground p-6 rounded-xl shadow-lg hidden md:block">
                  <div className="text-center">
                    <div className="text-3xl font-bold">15+</div>
                    <div className="text-sm">Years Experience</div>
                  </div>
                </div>
              </div>

              {/* Quick Facts & About */}
              <div className="space-y-6">
                <div className="bg-gradient-to-br from-primary/5 to-transparent rounded-2xl p-6">
                  <h3 className="text-xl font-bold mb-4 text-foreground">About</h3>
                  <div className="space-y-3 text-muted-foreground leading-relaxed">
                    <p>
                      Dr. Mona Stone is not only an esteemed oral and maxillofacial surgeon practicing full scope surgery, 
                      she is a public speaker, an activist, philanthropist and the cofounder to the grassroots organization 
                      Real Heroes Need Masks.
                    </p>
                    <p>
                      After receiving her dental degree from the University of Missouri-Kansas City, she went on to do a year 
                      of internship at Truman Medical Center and then a residency in Oral and Maxillofacial Surgery at Broward 
                      General Medical Center.
                    </p>
                  </div>
                </div>
                
                <Card className="border-2 hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="bg-primary/10 p-3 rounded-lg flex-shrink-0">
                        <GraduationCap className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <p className="font-semibold text-lg text-foreground">DDS from University of Missouri-Kansas City</p>
                        <p className="text-muted-foreground mt-1">Dental Degree with Honors</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-2 hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="bg-primary/10 p-3 rounded-lg flex-shrink-0">
                        <Stethoscope className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <p className="font-semibold text-lg text-foreground">Residency at Broward General Medical Center</p>
                        <p className="text-muted-foreground mt-1">Oral and Maxillofacial Surgery Specialization</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-2 hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="bg-primary/10 p-3 rounded-lg flex-shrink-0">
                        <Heart className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <p className="font-semibold text-lg text-foreground">Co-founder of Real Heroes Need Masks</p>
                        <p className="text-muted-foreground mt-1">Community-Focused Grassroots Organization</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-2 hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="bg-primary/10 p-3 rounded-lg flex-shrink-0">
                        <Building2 className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <p className="font-semibold text-lg text-foreground">Attending Surgeon</p>
                        <p className="text-muted-foreground mt-1">Baylor Medical Center (Grapevine, Irving) & Methodist Hospital</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Beyond the Practice */}
            <div className="bg-gradient-to-br from-accent/50 to-transparent rounded-2xl p-6 sm:p-8">
              <h3 className="text-xl font-bold mb-4 text-foreground">Beyond the Practice</h3>
              <p className="text-muted-foreground leading-relaxed">
                In addition to her role in the community, she is the mother of two beautiful toddlers, Max (1) and 
                Sofia (3), an avid supporter of motor sports and Formula 1, and a TikTok creator and social media activist.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Dr. Niranjan Savani Profile */}
      <section className="py-12 sm:py-16 lg:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-8">
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-2">Dr. Niranjan Savani</h2>
              <p className="text-lg text-muted-foreground">Implant Dentistry Specialist</p>
            </div>
            
            <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 xl:gap-16 items-start mb-12">
              {/* Photo */}
              <div className="relative lg:order-2">
                <div className="relative rounded-2xl overflow-hidden shadow-2xl aspect-[3/4] bg-muted">
                  <img 
                    src={drNiranjanSavani} 
                    alt="Dr. Niranjan Savani - Professional portrait"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -bottom-6 -left-6 bg-primary text-primary-foreground p-6 rounded-xl shadow-lg hidden md:block">
                  <div className="text-center">
                    <div className="text-3xl font-bold">29+</div>
                    <div className="text-sm">Years Experience</div>
                  </div>
                </div>
              </div>

              {/* Quick Facts & About */}
              <div className="space-y-6 lg:order-1">
                <div className="bg-gradient-to-br from-primary/5 to-transparent rounded-2xl p-6">
                  <h3 className="text-xl font-bold mb-4 text-foreground">About</h3>
                  <div className="space-y-3 text-muted-foreground leading-relaxed">
                    <p>
                      Dr. Niranjan Savani attended Temple University School of Dental Medicine in Philadelphia, PA, 
                      the second oldest dental school in the nation, where he graduated with his DMD in 1996.
                    </p>
                    <p>
                      He is dedicated to the newest advancements in dental technology and is frequently among the first 
                      dentists to use newer, more advanced techniques and equipment.
                    </p>
                    <p>
                      Dr. Savani believes in giving back to the community and is an active member of charity groups like United Way.
                    </p>
                  </div>
                </div>
                
                <Card className="border-2 hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="bg-primary/10 p-3 rounded-lg flex-shrink-0">
                        <GraduationCap className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <p className="font-semibold text-lg text-foreground">DMD from Temple University School of Dental Medicine</p>
                        <p className="text-muted-foreground mt-1">Philadelphia, PA - Graduated 1996</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-2 hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="bg-primary/10 p-3 rounded-lg flex-shrink-0">
                        <Award className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <p className="font-semibold text-lg text-foreground">American Academy of Implant Dentistry</p>
                        <p className="text-muted-foreground mt-1">Active Member</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-2 hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="bg-primary/10 p-3 rounded-lg flex-shrink-0">
                        <Award className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <p className="font-semibold text-lg text-foreground">Associate Fellowship - AAOI</p>
                        <p className="text-muted-foreground mt-1">American Academy of Oral Implantology</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-2 hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="bg-primary/10 p-3 rounded-lg flex-shrink-0">
                        <Heart className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <p className="font-semibold text-lg text-foreground">Community Involvement</p>
                        <p className="text-muted-foreground mt-1">Active Member of United Way</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Expertise Highlight */}
            <div className="bg-gradient-to-br from-accent/50 to-transparent rounded-2xl p-6 sm:p-8">
              <h3 className="text-xl font-bold mb-4 text-foreground">Pioneering Innovation</h3>
              <p className="text-muted-foreground leading-relaxed">
                Dr. Savani has placed numerous dental implants to date and continues to stay at the forefront of dental 
                technology, consistently implementing the latest advancements to provide the best possible care for his patients.
              </p>
            </div>
          </div>
        </div>
      </section>

            {/* Clinic Image */}
            <div className="mb-12 lg:mb-16">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl aspect-video bg-muted">
                <img 
                  src={clinicInterior} 
                  alt="State-of-the-art dental clinic interior"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent flex items-end">
                  <div className="p-6 sm:p-8 text-white">
                    <h3 className="text-xl sm:text-2xl font-bold mb-2">State-of-the-Art Facility</h3>
                    <p className="text-sm sm:text-base text-white/90">Equipped with the latest technology for optimal patient care</p>
                  </div>
                </div>
              </div>
            </div>

      {/* Areas of Expertise */}
      <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-b from-muted/20 to-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 text-foreground">Combined Areas of Expertise</h2>
              <p className="text-base sm:text-lg text-muted-foreground">
                Our team practices the full scope of oral and maxillofacial surgery, including:
              </p>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
              {[
                { title: "Maxillofacial Pathology", icon: Stethoscope },
                { title: "Dentoalveolar Surgery", icon: TrendingUp },
                { title: "Implant Surgery", icon: Award },
                { title: "Maxillofacial Reconstruction", icon: Building2 },
                { title: "Microvascular Surgery", icon: Heart },
                { title: "Facial Cosmetic Surgery", icon: Stethoscope },
                { title: "Trauma Surgery", icon: TrendingUp }
              ].map((expertise, index) => {
                const Icon = expertise.icon;
                return (
                  <Card key={index} className="border-l-4 border-l-primary hover:shadow-lg transition-all hover:scale-105">
                    <CardContent className="p-4 sm:p-6">
                      <div className="flex items-center gap-3">
                        <Icon className="h-5 w-5 text-primary flex-shrink-0" />
                        <p className="font-medium text-foreground">{expertise.title}</p>
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Doctor;
