import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-secondary border-t border-border">
      <div className="container-custom section-padding !py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <Link to="/" className="inline-block">
              <span className="font-heading text-2xl text-foreground tracking-wider">
                SUPER<span className="text-primary">SHAPE</span>
              </span>
            </Link>
            <p className="mt-4 text-muted-foreground text-sm max-w-xs">
              Real transformation. Real results. Personal guidance for your fitness journey.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading text-lg text-foreground mb-4">Quick Links</h4>
            <nav className="flex flex-col gap-2">
              <Link to="/" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                Home
              </Link>
              {/* <Link to="/transformations" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                Transformations
              </Link> */}
              <Link to="/pricing" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                Pricing
              </Link>
              <Link to="/contact" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                Contact
              </Link>
            </nav>
          </div>

          {/* Connect */}
          <div>
            <h4 className="font-heading text-lg text-foreground mb-4">Connect</h4>
            <p className="text-muted-foreground text-sm mb-2">
              Ready to start your transformation?
            </p>
            <Link to="/contact" className="text-primary hover:underline text-sm font-medium">
              Get in touch →
            </Link>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-border text-center">
          <p className="text-muted-foreground text-sm">
            © {new Date().getFullYear()} Supershape. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
