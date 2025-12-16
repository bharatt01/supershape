import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";
const transformations = [
  {
    id: 1,
    duration: "12 weeks",
    caption: "Discipline and consistency. No shortcuts.",
    stats: { weight: "-15kg", muscle: "+8%", bodyfat: "-12%" }
  },
  {
    id: 2,
    duration: "16 weeks",
    caption: "From zero gym experience to complete transformation.",
    stats: { weight: "-20kg", muscle: "+10%", bodyfat: "-15%" }
  },
  {
    id: 3,
    duration: "8 weeks",
    caption: "Focused effort. Visible results. Real change.",
    stats: { weight: "-10kg", muscle: "+5%", bodyfat: "-8%" }
  },
  {
    id: 4,
    duration: "20 weeks",
    caption: "Long-term commitment pays off. Every single time.",
    stats: { weight: "-25kg", muscle: "+12%", bodyfat: "-18%" }
  }
];


const Transformations = () => {
  const navigate = useNavigate();
  return (
    <div>
      {/* Hero */}
      <section className="section-padding bg-background pt-32">
        <div className="container-custom text-center">
          <h1 className="font-heading text-5xl md:text-6xl lg:text-7xl text-foreground mb-6">
            REAL <span className="text-gradient">RESULTS</span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            These transformations speak for themselves. Discipline. Consistency. Time.
          </p>
        </div>
      </section>

      {/* Transformations Grid */}
      <section className="section-padding bg-secondary">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-8">
            {transformations.map((transformation) => (
              <div key={transformation.id} className="card-glass overflow-hidden hover:border-primary/50 transition-all duration-300">
                {/* Placeholder for before/after */}
                <div className="grid grid-cols-2 gap-px bg-border">
                  <div className="aspect-[3/4] bg-muted flex items-center justify-center">
                    <div className="text-center p-4">
                      <span className="font-heading text-3xl text-muted-foreground">BEFORE</span>
                    </div>
                  </div>
                  <div className="aspect-[3/4] bg-muted/50 flex items-center justify-center relative">
                    <div className="text-center p-4">
                      <span className="font-heading text-3xl text-primary">AFTER</span>
                    </div>
                    <div className="absolute top-4 right-4 bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-medium">
                      {transformation.duration}
                    </div>
                  </div>
                </div>
                
                {/* Stats & Caption */}
                <div className="p-6">
                  <div className="flex gap-6 mb-4">
                    <div className="text-center">
                      <div className="font-heading text-2xl text-primary">{transformation.stats.weight}</div>
                      <div className="text-xs text-muted-foreground uppercase">Weight</div>
                    </div>
                    <div className="text-center">
                      <div className="font-heading text-2xl text-primary">{transformation.stats.muscle}</div>
                      <div className="text-xs text-muted-foreground uppercase">Muscle</div>
                    </div>
                    <div className="text-center">
                      <div className="font-heading text-2xl text-primary">{transformation.stats.bodyfat}</div>
                      <div className="text-xs text-muted-foreground uppercase">Body Fat</div>
                    </div>
                  </div>
                  <p className="text-muted-foreground italic">"{transformation.caption}"</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Philosophy */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-heading text-4xl md:text-5xl text-foreground mb-6">
              THE <span className="text-gradient">FORMULA</span>
            </h2>
            <div className="grid grid-cols-3 gap-4 mb-8">
              {["DISCIPLINE", "CONSISTENCY", "TIME"].map((word, index) => (
                <div key={index} className="card-glass p-6">
                  <span className="font-heading text-xl md:text-2xl text-foreground">{word}</span>
                </div>
              ))}
            </div>
            <p className="text-muted-foreground text-lg">
              There are no secrets. No magic pills. Just commitment to the process and trust in the journey.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-secondary">
        <div className="container-custom text-center">
          <h2 className="font-heading text-4xl md:text-5xl text-foreground mb-6">
            YOUR TRANSFORMATION <span className="text-gradient">AWAITS</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto mb-10">
            Ready to become the next success story? Let's make it happen.
          </p>
          {/* <Link to="/contact"> */}
            <Button variant="hero" size="lg" onClick={() => navigate('/onboardingform')}>
              Start Now
              <ArrowRight className="ml-2" />
            </Button>
          {/* </Link> */}
        </div>
      </section>
    </div>
  );
};

export default Transformations;
