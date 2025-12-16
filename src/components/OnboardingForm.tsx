import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ArrowRight, X } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";

interface OnboardingFormProps {
  onComplete?: () => void;
}

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
    key: "age",
    label: "What's your age?",
    placeholder: "Enter your age",
    type: "text",
  },
  {
    key: "occupation",
    label: "What is your occupation?",
    placeholder: "Select your occupation",
    type: "select",
  },
  {
    key: "goal",
    label:
      "What Specific Result/Goal do you want to achieve while working with Hrithik?",
    placeholder: "Describe your goal",
    type: "text",
  },
  {
    key: "phone",
    label:
      "Please enter your Mobile number so I can contact you on WhatsApp",
    placeholder: "Enter your phone number",
    type: "tel",
  },
  {
    key: "email",
    label:
      "What is the best Email to contact you regarding this coaching enquiry?",
    placeholder: "Enter your email",
    type: "email",
  },
] as const;

type FormData = {
  name: string;
  age: string;
  occupation: string;
  goal: string;
  phone: string;
  email: string;
};

const OnboardingForm = ({ onComplete }: OnboardingFormProps) => {
  const navigate = useNavigate();
  const [currentStep, setCurrentStep] = useState(0);
  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState<FormData>({
    name: "",
    age: "",
    occupation: "",
    goal: "",
    phone: "",
    email: "",
  });

  const currentStepData = steps[currentStep];

  const isCurrentStepValid = () => {
    const key = currentStepData.key as keyof FormData;
    return formData[key]?.trim() !== "";
  };

  const handleInputChange = (value: string) => {
    setFormData((prev) => ({
      ...prev,
      [currentStepData.key]: value,
    }));
  };

  const submitToSheet = async () => {
    setLoading(true);
    try {
      await fetch(SHEET_API_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
        mode: "no-cors",
      });

      toast.success("Your form has been submitted 🎉");

      setTimeout(() => {
        onComplete?.();
        navigate("/Pricing");
      }, 1500);
    } catch (error) {
      console.error(error);
      toast.error("Something went wrong ❌");
      setLoading(false);
    }
  };

  const handleNext = () => {
    if (!isCurrentStepValid() || loading) return;

    if (currentStep < steps.length - 1) {
      setCurrentStep((prev) => prev + 1);
    } else {
      submitToSheet();
    }
  };

  const handleSkip = () => {
    onComplete?.();
    navigate("/Pricing");
  };

  return (
    <div className="fixed inset-0 z-50 bg-background flex items-center justify-center px-6">
      {/* Skip */}
      <button
        onClick={handleSkip}
        className="absolute top-6 right-6 flex items-center gap-2 text-muted-foreground"
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
      <div
        className="w-full max-w-md space-y-8 animate-fade-in"
        key={currentStep}
      >
        <div className="text-center space-y-2">
          <span className="text-primary text-sm font-medium">
            Step {currentStep + 1} of {steps.length}
          </span>
          <h1 className="text-3xl font-bold">
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
            value={
              formData[currentStepData.key as keyof FormData]
            }
            onChange={(e) => handleInputChange(e.target.value)}
            className="h-14 text-lg text-center"
            autoFocus
            onKeyDown={(e) => {
              if (e.key === "Enter") handleNext();
            }}
          />
        )}

        <Button
          onClick={handleNext}
          className="w-full h-14 text-lg"
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
    </div>
  );
};

export default OnboardingForm;
