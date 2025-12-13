import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { AlertCircle, CheckCircle, Target, Users, ArrowRight } from "lucide-react";

const WhyChooseUs = () => {
  const problems = [
    "Overwhelmed by conflicting fitness advice",
    "Following generic plans that don't work for you",
    "Lack of accountability and motivation",
    "Starting over again and again",
    "Not seeing real, lasting results"
  ];

  const solutions = [
    {
      icon: Target,
      title: "Clarity Over Confusion",
      description: "One clear path. One focused approach. No more guessing what works."
    },
    {
      icon: Users,
      title: "Personal Involvement",
      description: "I work with you directly. Not an app. Not a template. Real human guidance."
    },
    {
      icon: CheckCircle,
      title: "Accountability That Works",
      description: "Regular check-ins, progress tracking, and honest feedback to keep you on track."
    }
  ];

  return (
    <div>
      {/* Hero */}
      <section className="section-padding bg-background pt-32">
        <div className="container-custom text-center">
          <h1 className="font-heading text-5xl md:text-6xl lg:text-7xl text-foreground mb-6">
            WHY <span className="text-gradient">SUPERSHAPE</span>?
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            Because you deserve more than generic advice and empty promises.
          </p>
        </div>
      </section>

      {/* The Problem */}
      <section className="section-padding bg-secondary">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-heading text-4xl md:text-5xl text-foreground mb-6">
                THE <span className="text-gradient">PROBLEM</span>
              </h2>
              <p className="text-muted-foreground text-lg mb-8">
                Most people fail at fitness not because they lack motivation—but because they lack the right guidance and structure.
              </p>
            </div>
            <div className="space-y-4">
              {problems.map((problem, index) => (
                <div 
                  key={index} 
                  className="flex items-center gap-4 p-4 bg-background/50 rounded-lg border border-border"
                >
                  <AlertCircle className="w-6 h-6 text-destructive flex-shrink-0" />
                  <span className="text-foreground">{problem}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* The Solution */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="font-heading text-4xl md:text-5xl text-foreground mb-6">
              THE <span className="text-gradient">SOLUTION</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Supershape eliminates the noise. You get a clear plan, personal support, and the accountability you need to succeed.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {solutions.map((solution, index) => (
              <div key={index} className="card-glass p-8 text-center hover:border-primary/50 transition-all duration-300">
                <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-primary/10 flex items-center justify-center">
                  <solution.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="font-heading text-2xl text-foreground mb-4">{solution.title}</h3>
                <p className="text-muted-foreground">{solution.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What You Get */}
      <section className="section-padding bg-secondary">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-heading text-4xl md:text-5xl text-foreground mb-8">
              WHAT MAKES US <span className="text-gradient">DIFFERENT</span>
            </h2>
            <div className="grid sm:grid-cols-2 gap-6 text-left">
              {[
                "Direct personal communication",
                "Customized plans, not templates",
                "Mindset and motivation coaching",
                "Honest, no-nonsense feedback",
                "Flexible approach to your lifestyle",
                "Long-term sustainability focus"
              ].map((item, index) => (
                <div key={index} className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                  <span className="text-foreground">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-background">
        <div className="container-custom text-center">
          <h2 className="font-heading text-4xl md:text-5xl text-foreground mb-6">
            READY FOR <span className="text-gradient">REAL CHANGE</span>?
          </h2>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto mb-10">
            Stop searching for the perfect plan. Start your transformation today.
          </p>
          <Link to="/contact">
            <Button variant="hero" size="lg">
              Connect With Me
              <ArrowRight className="ml-2" />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default WhyChooseUs;
