import { Button } from "@/components/ui/button";
import { MessageCircle, Instagram, Mail, ArrowUpRight } from "lucide-react";

const contactMethods = [
  {
    icon: MessageCircle,
    name: "WhatsApp",
    description: "Quick and direct. Message me anytime.",
    action: "Chat on WhatsApp",
    href: "https://wa.me/919876543210",
    color: "bg-green-600 hover:bg-green-700"
  },
  {
    icon: Instagram,
    name: "Instagram",
    description: "Follow the journey. Send a DM.",
    action: "Follow @supershape",
    href: "https://instagram.com/supershape",
    color: "bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700"
  },
  {
    icon: Mail,
    name: "Email",
    description: "For detailed inquiries and questions.",
    action: "Send Email",
    href: "mailto:contact@supershape.com",
    color: "bg-blue-600 hover:bg-blue-700"
  }
];

const Contact = () => {
  return (
    <div>
      {/* Hero */}
      <section className="section-padding bg-background pt-32">
        <div className="container-custom text-center">
          <h1 className="font-heading text-5xl md:text-6xl lg:text-7xl text-foreground mb-6">
            LET'S <span className="text-gradient">CONNECT</span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            Your transformation starts with a simple message. Reach out directly—no forms, no waiting.
          </p>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="section-padding bg-secondary">
        <div className="container-custom">
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {contactMethods.map((method, index) => (
              <a 
                key={index}
                href={method.href}
                target="_blank"
                rel="noopener noreferrer"
                className="card-glass p-8 text-center hover:border-primary/50 transition-all duration-300 group"
              >
                <div className={`w-16 h-16 mx-auto mb-6 rounded-full ${method.color} flex items-center justify-center transition-transform group-hover:scale-110`}>
                  <method.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="font-heading text-2xl text-foreground mb-2">{method.name}</h3>
                <p className="text-muted-foreground text-sm mb-6">{method.description}</p>
                <span className="inline-flex items-center text-primary font-medium">
                  {method.action}
                  <ArrowUpRight className="w-4 h-4 ml-1" />
                </span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Direct CTA */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="font-heading text-4xl md:text-5xl text-foreground mb-6">
              READY TO <span className="text-gradient">BEGIN</span>?
            </h2>
            <p className="text-muted-foreground text-lg mb-8">
              The hardest step is the first one. But you're already here. 
              That tells me you're serious about change.
            </p>
            <a 
              href="https://wa.me/919876543210" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              <Button variant="hero" size="lg">
                <MessageCircle className="mr-2" />
                Message Me on WhatsApp
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* Closing Message */}
      <section className="section-padding bg-secondary">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <blockquote className="font-heading text-3xl md:text-4xl text-foreground mb-6">
              "THE BEST TIME TO START WAS YESTERDAY. <br/>
              <span className="text-gradient">THE SECOND BEST TIME IS NOW.</span>"
            </blockquote>
            <p className="text-muted-foreground">
              Don't wait for the "perfect" moment. Create it.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
