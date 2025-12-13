import { ReactNode, useState, useEffect } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import OnboardingForm from "./OnboardingForm";

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  const [showOnboarding, setShowOnboarding] = useState(true);

  useEffect(() => {
    const hasSeenOnboarding = localStorage.getItem("supershape_onboarding_completed");
    if (hasSeenOnboarding) {
      setShowOnboarding(false);
    }
  }, []);

  const handleOnboardingComplete = () => {
    localStorage.setItem("supershape_onboarding_completed", "true");
    setShowOnboarding(false);
  };

  if (showOnboarding) {
    return <OnboardingForm onComplete={handleOnboardingComplete} />;
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 pt-16 md:pt-20">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
