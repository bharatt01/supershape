import { useState } from "react"; // ⭐
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { MessageCircle, Mail, ArrowUpRight } from "lucide-react";
import { toast } from "sonner"; // ⭐

const SHEET_API_URL =
  "https://script.google.com/macros/s/AKfycbwU5GrOeGf0aIzIDd03uH48qdGOa14uMTiBbl7VHbJ8_cPlOb9rUSRPrRijeoS6BjIt/exec"; // ⭐

const contactMethods = [
  {
    icon: MessageCircle,
    name: "WhatsApp",
    description: "Quick and direct. Message me anytime.",
    action: "Chat on WhatsApp",
    href: "https://wa.me/919217800547",
    color: "bg-green-600 hover:bg-green-700",
  },
  {
    icon: Mail,
    name: "Email",
    description: "For detailed inquiries and questions.",
    action: "Send Email",
    href: "mailto:hrithik.supershame@gmail.com",
    color: "bg-blue-600 hover:bg-blue-700",
  },
];

const Contact = () => {
  // ⭐ SAME fields as onboarding
  const [formData, setFormData] = useState({
    name: "",
    age: "",
    occupation: "",
    goal: "",
    phone: "",
    email: "",
  });

  const [loading, setLoading] = useState(false);

  // ⭐ generic change handler
  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // ⭐ SAME submit logic as onboarding
  const submitToSheet = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    const fd = new FormData();
    Object.entries(formData).forEach(([k, v]) => fd.append(k, v));

    try {
      await fetch(SHEET_API_URL, {
        method: "POST",
        body: fd,
      });

      toast.success("Message sent successfully");
      setFormData({
        name: "",
        age: "",
        occupation: "",
        goal: "",
        phone: "",
        email: "",
      });
    } catch (err) {
      toast.error("Submission failed");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      {/* Hero */}
      <section className="section-padding bg-background pt-32">
        <div className="container-custom text-center">
          <h1 className="font-heading text-5xl md:text-6xl lg:text-7xl text-foreground mb-6">
            LET&apos;S <span className="text-gradient">CONNECT</span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            Your transformation starts with a simple message.
          </p>
        </div>
      </section>

      {/* Contact Form */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto card-glass p-8 md:p-12">
            <h2 className="font-heading text-4xl text-foreground mb-6 text-center">
              SEND A <span className="text-gradient">MESSAGE</span>
            </h2>

            {/* ⭐ ONLY THIS FORM IS WIRED */}
            <form className="space-y-6" onSubmit={submitToSheet}>
              <div className="grid md:grid-cols-2 gap-6">
                <Input
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your Name"
                  className="h-14 text-lg bg-card"
                  required
                />

                <Input
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Your Email"
                  className="h-14 text-lg bg-card"
                  required
                />
              </div>

              <Input
                name="age"
                value={formData.age}
                onChange={handleChange}
                placeholder="Your Age"
                className="h-14 text-lg bg-card"
                required
              />

              <Input
                name="phone"
                type="tel"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Phone Number"
                className="h-14 text-lg bg-card"
                required
              />

              <select
                name="occupation"
                value={formData.occupation}
                onChange={handleChange}
                required
                className="w-full h-14 bg-card border border-border rounded-md px-4 text-lg"
              >
                <option value="" disabled>
                  Your Occupation
                </option>
                <option value="Student">Student</option>
                <option value="Job">Job</option>
                <option value="Business">Business</option>
                <option value="Pursuing Nothing Currently">
                  Pursuing Nothing Currently
                </option>
              </select>

              <Textarea
                name="goal"
                value={formData.goal}
                onChange={handleChange}
                placeholder="Tell me about your goals..."
                rows={5}
                className="text-lg bg-card"
                required
              />

              <Button
                type="submit"
                variant="hero"
                size="lg"
                className="w-full"
                disabled={loading}
              >
                {loading ? "Sending..." : "Send Message"}
                <ArrowUpRight className="ml-2" />
              </Button>
            </form>
          </div>
        </div>
      </section>
{/* <section className="section-padding bg-secondary"> <div className="container-custom"> 
  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl mx-auto"> */}
     {/* {contactMethods.map((method, index) => ( <a key={index} href={method.href} target="_blank" rel="noopener noreferrer" className="card-glass p-8 text-center hover:border-primary/50 transition-all duration-300 group" > <div className={w-16 h-16 mx-auto mb-6 rounded-full ${method.color} flex items-center justify-center transition-transform group-hover:scale-110} > <method.icon className="w-8 h-8 text-white" /> </div> <h3 className="font-heading text-2xl text-foreground mb-2"> {method.name} </h3> <p className="text-muted-foreground text-sm mb-6"> {method.description} </p> <span className="inline-flex items-center text-primary font-medium"> {method.action} <ArrowUpRight className="w-4 h-4 ml-1" /> </span> </a> ))} </div> </div> </section> */}
   <section className="section-padding bg-background"> <div className="container-custom"> <div className="max-w-2xl mx-auto text-center"> <h2 className="font-heading text-4xl md:text-5xl text-foreground mb-6"> READY TO <span className="text-gradient">BEGIN</span>? </h2> <p className="text-muted-foreground text-lg mb-8"> The hardest step is the first one. But you&apos;re already here. That tells me you&apos;re serious about change. </p> <a href="https://wa.me/919217800547" target="_blank" rel="noopener noreferrer" > <Button variant="hero" size="lg"> <MessageCircle className="mr-2" /> Message Me on WhatsApp </Button> </a> </div> </div> </section> {/* Closing Message */} <section className="section-padding bg-secondary"> <div className="container-custom"> <div className="max-w-3xl mx-auto text-center"> <blockquote className="font-heading text-3xl md:text-4xl text-foreground mb-6"> &quot;THE BEST TIME TO START WAS YESTERDAY. <br /> <span className="text-gradient"> THE SECOND BEST TIME IS NOW. </span> &quot; </blockquote> <p className="text-muted-foreground"> Don&apos;t wait for the &quot;perfect&quot; moment. Create it. </p> </div> </div> </section>
    </div>
  );
};

export default Contact;
