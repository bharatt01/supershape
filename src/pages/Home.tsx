import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Target, Users, TrendingUp, ArrowRight } from "lucide-react";
import heroBg from "@/assets/bg-image.jpg";
import { useNavigate } from "react-router-dom";

const Home = () => {
    const navigate = useNavigate();

  return (
    <div>
      {/* Hero Section */}
      <section 
        className="relative min-h-[90vh] flex items-center justify-center"
        style={{
          backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,0.6), rgba(0,0,0,0.8)), url(${heroBg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="container-custom section-padding text-center">
          <h1 className="font-heading text-5xl md:text-7xl lg:text-8xl text-foreground mb-6 animate-fade-in">
            TRANSFORM YOUR <span className="text-gradient">BODY</span>
            <br />
            TRANSFORM YOUR <span className="text-gradient">LIFE</span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 animate-fade-in" style={{ animationDelay: '0.2s' }}>
            Personal guidance. Real accountability. Lasting results. 
            Join the transformation journey that actually works.
          </p>
     <div
  className="flex flex-col items-center justify-center animate-fade-in"
  style={{ animationDelay: "0.4s" }}
>
{/* <Link to="/form"> */}
  <Button
    variant="hero"
    size="lg"
    className="flex flex-col items-center py-6 leading-tight"
     onClick={() => navigate("/Onboardingform")}
  >
    <span className="flex items-center text-base font-semibold">
      Start Here
      <ArrowRight className="ml-2 w-4 h-4" />
    </span>

  
  </Button>
{/* </Link> */}

  {/* Sub-heading */}
  <span className="mt-2 text-sm text-muted-foreground">
    Takes only 2 minutes
  </span>
</div>

        </div>
      </section>

      {/* What is Supershape */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="font-heading text-4xl md:text-5xl text-foreground mb-6">
              Its A Long Term <span className="text-gradient">CHANGE</span>
            </h2>
            <p className="text-muted-foreground text-md">
              In Supershape Coaching, Hrithik guides you throughout your transformation journey with direct WhatsApp support.
No generic plans — everything is tailored to your lifestyle and goals.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Target,
                title: "Focused Approach",
                description: "Clear goals. Clear plan. Clear results. Every step is designed for your success."
              },
              {
                icon: Users,
                title: "Personal Guidance",
                description: "Direct access to real coaching. Not bots. Not automated responses. Real support."
              },
              {
                icon: TrendingUp,
                title: "Proven Results",
                description: "For those who commit to the process and stay consistent — with adjustments based on your lifestyle."
              }
            ].map((item, index) => (
              <div key={index} className="card-glass p-8 text-center hover:border-primary/50 transition-all duration-300">
                <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-primary/10 flex items-center justify-center">
                  <item.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="font-heading text-2xl text-foreground mb-4">{item.title}</h3>
                <p className="text-muted-foreground">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="section-padding bg-secondary">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-heading text-4xl md:text-5xl text-foreground mb-6">
                DISCIPLINE. <span className="text-gradient">CONSISTENCY.</span> RESULTS.
              </h2>
              <p className="text-muted-foreground text-lg mb-8">
                These aren't just words. They're the foundation of every successful transformation. 
                With Supershape, you get the structure and accountability to make them your reality.
              </p>
              <ul className="space-y-4">
                {[
                  "Personalized training and nutrition guidance",
                  "Regular check-ins and progress tracking",
                  "Mindset coaching for lasting change",
                  "Direct communication and support"
                ].map((item, index) => (
                  <li key={index} className="flex items-center gap-3 text-foreground">
                    <div className="w-2 h-2 rounded-full bg-primary" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="card-glass p-8 lg:p-12">
              <blockquote className="text-xl md:text-2xl text-foreground font-medium mb-6">
                "A Simple Transformation Process That Works."
              </blockquote>
              <p className="text-muted-foreground">
                Every transformation starts with a decision. The decision to commit. 
                The decision to trust the process. Are you ready to make yours?
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-background">
        <div className="container-custom text-center">
          <h2 className="font-heading text-4xl md:text-5xl text-foreground mb-6">
            READY TO <span className="text-gradient">START</span>?
          </h2>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto mb-10">
            Your transformation is one message away. Connect with me today and let's build something real.
          </p>
          <Link to="/onboardingform">
            <Button variant="hero" size="lg">
              Start Your Transformation
              <ArrowRight className="ml-2" />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
