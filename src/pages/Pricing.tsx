import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Check, ArrowRight, Star } from "lucide-react";

const plans = [
  {
    name: "3 Months Plan",
    durationLabel: "12 Weeks",
    price: "₹8,600",
    description: "Most popular. Full transformation support.",
    features: [
      "Priority support 24/7",
      "Daily accountability",
      "Detailed meal plans",
      "Direct WhatsApp support",
      "Form check videos",
      "Lifestyle optimization",
      "Weekly Adjustments & Easy Communications"
    ],
    popular: true,
    paymentPageLink: "https://rzp.io/rzp/Lrbc4Nrc" // Razorpay Page Link for 3 Months
  },
  {
    name: "6 Months Plan",
    durationLabel: "24 Weeks",
    price: "₹15,999",
    description: "Premium 1-on-1 intensive coaching",
    features: [
      "Priority support 24/7",
      "Daily accountability",
      "Detailed meal plans",
      "Direct WhatsApp support",
      "Form check videos",
      "Lifestyle optimization",
      "Weekly Adjustments & Easy Communications"
    ],
    popular: false,
    paymentPageLink: "https://rzp.io/p/6months" // Razorpay Page Link for 6 Months
  }
];

const Pricing = () => {
  return (
    <div>
      {/* Hero */}
      <section className="section-padding bg-background pt-32">
        <div className="container-custom text-center">
          <h1 className="font-heading text-5xl md:text-6xl lg:text-7xl text-foreground mb-6">
            SIMPLE <span className="text-gradient">PRICING</span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            Transparent plans. No hidden fees. Choose what works for you.
          </p>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="section-padding bg-secondary">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto place-items-center">
            {plans.map((plan, index) => (
              <div 
                key={index} 
                className={`card-glass p-8 relative ${plan.popular ? 'border-primary ring-2 ring-primary/20' : ''}`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground px-4 py-1 rounded-full text-sm font-semibold flex items-center gap-1">
                    <Star className="w-4 h-4" />
                    Most Popular
                  </div>
                )}
                
                <div className="text-center mb-6">
                  <h3 className="font-heading text-3xl text-foreground">{plan.name}</h3>

                  <div className="mt-1 mb-3 text-sm font-medium tracking-wide text-primary/80">
                    {plan.durationLabel}
                  </div>

                  <p className="text-muted-foreground text-sm mb-4">{plan.description}</p>

                  <div className="flex items-baseline justify-center gap-1">
                    <span className="font-heading text-5xl text-primary">{plan.price}</span>
                  </div>
                </div>

                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center gap-3">
                      <Check className="w-5 h-5 text-primary flex-shrink-0" />
                      <span className="text-foreground text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* Razorpay Payment Page Button */}
                <Button
                  variant={plan.popular ? "default" : "outline"}
                  className="w-full"
                  onClick={() => window.open(plan.paymentPageLink, "_blank")}
                >
                  Enroll Now
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Payment Info */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="font-heading text-3xl md:text-4xl text-foreground mb-6">
              PAYMENT <span className="text-gradient">OPTIONS</span>
            </h2>
            <p className="text-muted-foreground mb-8">
              We accept all major payment methods for your convenience.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              {["UPI", "Bank Transfer", "Credit Card", "Debit Card", "PayTM"].map((method, index) => (
                <span key={index} className="px-4 py-2 bg-secondary rounded-lg text-foreground text-sm">
                  {method}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-secondary">
        <div className="container-custom text-center">
          <h2 className="font-heading text-4xl md:text-5xl text-foreground mb-6">
            QUESTIONS? <span className="text-gradient">LET'S TALK</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto mb-10">
            Not sure which plan is right for you? Reach out and we'll find the perfect fit together.
          </p>
          <Link to="/contact">
            <Button variant="hero" size="lg">
              Get in Touch
              <ArrowRight className="ml-2" />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Pricing;
