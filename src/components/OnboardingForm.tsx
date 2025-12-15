import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ArrowRight, X } from "lucide-react";
import { useNavigate } from "react-router-dom";

interface OnboardingFormProps {
  onComplete: () => void;
}

const steps = [
  { key: "name", label: "What's your name?", placeholder: "Enter your name", type: "text" },
  { key: "number", label: "What's your phone number?", placeholder: "Enter your phone number", type: "tel" },
  { key: "email", label: "What's your email?", placeholder: "Enter your email", type: "email" },
  { key: "occupation", label: "What do you do?", placeholder: "Enter your occupation", type: "text" },
  { key: "goal", label: "What's your transformation goal?", placeholder: "Describe your goal", type: "text" },
];

const OnboardingForm = ({ onComplete }: OnboardingFormProps) => {
  const navigate = useNavigate();
  const [currentStep, setCurrentStep] = useState(0);

  const [formData, setFormData] = useState({
    name: "",
    number: "",
    email: "",
    occupation: "",
    goal: "",
  });

  // ✅ Validation for current step
  const isCurrentStepValid = () => {
    const key = steps[currentStep].key as keyof typeof formData;
    return formData[key].trim() !== "";
  };

  const handleNext = () => {
    if (!isCurrentStepValid()) return;

    if (currentStep < steps.length - 1) {
      setCurrentStep((prev) => prev + 1);
    } else {
      console.log("Form submitted:", formData);
      navigate("/Pricing");
      onComplete();
    }
  };

  const handleSkip = () => {
    onComplete();
  };

  const handleInputChange = (value: string) => {
    setFormData({
      ...formData,
      [steps[currentStep].key]: value,
    });
  };

  const currentStepData = steps[currentStep];

  return (
    <div className="fixed inset-0 z-50 bg-background flex flex-col items-center justify-center px-6">
      {/* Skip Button */}
      <button
        onClick={handleSkip}
        className="absolute top-6 right-6 flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
      >
        <span className="text-sm">Skip</span>
        <X className="w-5 h-5" />
      </button>

      {/* Progress Indicator */}
      <div className="absolute top-6 left-6 flex gap-2">
        {steps.map((_, index) => (
          <div
            key={index}
            className={`h-1 w-8 rounded-full transition-colors ${
              index <= currentStep ? "bg-primary" : "bg-muted"
            }`}
          />
        ))}
      </div>

      {/* Form Content */}
      <div className="w-full max-w-md space-y-8 animate-fade-in" key={currentStep}>
        <div className="text-center space-y-2">
          <span className="text-primary text-sm font-medium">
            Step {currentStep + 1} of {steps.length}
          </span>
          <h1 className="text-3xl md:text-4xl font-heading font-bold text-foreground">
            {currentStepData.label}
          </h1>
        </div>

        <Input
          type={currentStepData.type}
          placeholder={currentStepData.placeholder}
          value={formData[currentStepData.key as keyof typeof formData]}
          onChange={(e) => handleInputChange(e.target.value)}
          className="h-14 text-lg bg-card border-border focus:border-primary text-center"
          autoFocus
          onKeyDown={(e) => {
            if (e.key === "Enter" && isCurrentStepValid()) {
              handleNext();
            }
          }}
        />

        <Button
          onClick={handleNext}
          className="w-full h-14 text-lg"
          variant="hero"
          disabled={!isCurrentStepValid()}
        >
          {currentStep < steps.length - 1 ? "Next" : "Get Started"}
          <ArrowRight className="ml-2 w-5 h-5" />
        </Button>
      </div>

      {/* Brand */}
      <div className="absolute bottom-6 text-center">
        <span className="font-heading text-2xl text-primary">SUPERSHAPE</span>
      </div>
    </div>
  );
};

export default OnboardingForm;
