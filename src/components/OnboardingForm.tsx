import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ArrowRight, X } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";

interface OnboardingFormProps {
  onComplete?: () => void;
}

// Paste your Apps Script Web App URL here (must end with /exec)
const SHEET_API_URL =
  "https://script.google.com/macros/s/AKfycbwBwGGw1t80OOxwKQVFN-OSOIGu0AxGqsk8FP_FqLLeOh8MH2ND9Ayi3fEX7mb5Zzem/exec";

const steps = [
  {
    key: "name",
    label: "What's your name?",
    placeholder: "Enter your name",
    type: "text",
  },
  {
    key: "phone",
    label: "What's your phone number?",
    placeholder: "Enter your phone number",
    type: "tel",
  },
  {
    key: "email",
    label: "What's your email?",
    placeholder: "Enter your email",
    type: "email",
  },
  {
    key: "occupation",
    label: "What do you do?",
    placeholder: "Select your occupation",
    type: "select",
  },
  {
    key: "goal",
    label: "What's your transformation goal?",
    placeholder: "Describe your goal",
    type: "text",
  },
] as const;

type FormData = {
  name: string;
  phone: string;
  email: string;
  occupation: string;
  goal: string;
};

const OnboardingForm = ({ onComplete }: OnboardingFormProps) => {
  const navigate = useNavigate();
  const [currentStep, setCurrentStep] = useState(0);
  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState<FormData>({
    name: "",
    phone: "",
    email: "",
    occupation: "",
    goal: "",
  });

  const currentStepData = steps[currentStep];

  const isCurrentStepValid = () => {
    const key = currentStepData.key as keyof FormData;
    return formData[key].trim() !== "";
  };
const submitToSheet = async () => {
  setLoading(true);
  try {
    await fetch(SHEET_API_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
      mode: "no-cors", // important
    });

    toast.success("Your form has been submitted 🎉");
    setTimeout(() => {
      onComplete?.();
      navigate("/Pricing");
    }, 1800);
  } catch (err) {
    console.error("Fetch error:", err);
    toast.error("Something went wrong ❌");
    setLoading(false);
  }
};


  const handleNext = () => {
    if (!isCurrentStepValid() || loading) return;

    if (currentStep < steps.length - 1) {
      setCurrentStep((prev) => prev + 1);
    } else {
      void submitToSheet();
    }
  };

  const handleSkip = () => {
    onComplete?.();
    navigate("/Pricing");
  };

  const handleInputChange = (value: string) => {
    setFormData((prev) => ({ ...prev, [currentStepData.key]: value }));
  };

  return (
    <div className="fixed inset-0 z-50 bg-background flex flex-col items-center justify-center px-6">
      {/* Skip */}
      <button
        onClick={handleSkip}
        className="absolute top-6 right-6 flex items-center gap-2 text-muted-foreground hover:text-foreground"
      >
        <span className="text-sm">Skip</span>
        <X className="w-5 h-5" />
      </button>

      {/* Progress */}
      <div className="absolute top-6 left-6 flex gap-2">
        {steps.map((_, index) => (
          <div
            key={index}
            className={`h-1 w-8 rounded-full ${
              index <= currentStep ? "bg-primary" : "bg-muted"
            }`}
          />
        ))}
      </div>

      {/* Content */}
      <div className="w-full max-w-md space-y-8 animate-fade-in" key={currentStep}>
        <div className="text-center space-y-2">
          <span className="text-primary text-sm font-medium">
            Step {currentStep + 1} of {steps.length}
          </span>
          <h1 className="text-3xl md:text-4xl font-heading font-bold">
            {currentStepData.label}
          </h1>
        </div>

        {currentStepData.type === "select" ? (
          <select
            value={formData.occupation}
            onChange={(e) => handleInputChange(e.target.value)}
            className="w-full h-14 bg-card border border-border rounded-md px-4 text-lg text-center focus:outline-none focus:ring-2 focus:ring-primary"
          >
            <option value="" disabled>
              Select your occupation
            </option>
            <option value="Student">Student</option>
            <option value="Job">Job</option>
            <option value="Business">Business</option>
            <option value="Pursuing Nothing Currently">
              Pursuing Nothing Currently
            </option>
          </select>
        ) : (
          <Input
            type={currentStepData.type}
            placeholder={currentStepData.placeholder}
            value={formData[currentStepData.key as keyof FormData]}
            onChange={(e) => handleInputChange(e.target.value)}
            className="h-14 text-lg bg-card border-border text-center"
            autoFocus
            onKeyDown={(e) => {
              if (e.key === "Enter" && isCurrentStepValid()) handleNext();
            }}
          />
        )}

        <Button
          onClick={handleNext}
          className="w-full h-14 text-lg"
          variant="hero"
          disabled={!isCurrentStepValid() || loading}
        >
          {loading
            ? "Submitting..."
            : currentStep < steps.length - 1
            ? "Next"
            : "Submit"}
          <ArrowRight className="ml-2 w-5 h-5" />
        </Button>
      </div>

      {/* Brand */}
      <div className="absolute bottom-6">
        <span className="font-heading text-2xl text-primary">SUPERSHAPE</span>
      </div>
    </div>
  );
};

export default OnboardingForm;
