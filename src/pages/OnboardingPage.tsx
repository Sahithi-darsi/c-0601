
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ArrowLeft, ArrowRight, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Progress } from "@/components/ui/progress";
import { 
  Card, 
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle 
} from "@/components/ui/card";

interface OnboardingStep {
  title: string;
  description: string;
  component: React.ReactNode;
}

export default function OnboardingPage() {
  const [currentStep, setCurrentStep] = useState(0);
  const [formData, setFormData] = useState({
    interests: [] as string[],
    experience: "",
    goal: "",
    timeCommitment: "",
    learningStyle: "",
  });
  const navigate = useNavigate();

  const handleInterestChange = (interest: string) => {
    setFormData(prev => {
      if (prev.interests.includes(interest)) {
        return {
          ...prev,
          interests: prev.interests.filter(i => i !== interest)
        };
      } else {
        return {
          ...prev,
          interests: [...prev.interests, interest]
        };
      }
    });
  };

  const handleRadioChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleNext = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      // Submit the data and navigate to the dashboard
      console.log("Onboarding completed:", formData);
      navigate("/dashboard");
    }
  };

  const handleBack = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const isCurrentStepValid = () => {
    switch (currentStep) {
      case 0:
        return formData.interests.length > 0;
      case 1:
        return Boolean(formData.experience);
      case 2:
        return Boolean(formData.goal);
      case 3:
        return Boolean(formData.timeCommitment);
      case 4:
        return Boolean(formData.learningStyle);
      default:
        return true;
    }
  };

  // Define the steps
  const steps: OnboardingStep[] = [
    {
      title: "Select your interests",
      description: "Choose areas you'd like to learn about. You can select multiple.",
      component: (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {[
            { id: "webDev", name: "Web Development", icon: "💻" },
            { id: "dataScience", name: "Data Science", icon: "📊" },
            { id: "design", name: "UI/UX Design", icon: "🎨" },
            { id: "mobileDev", name: "Mobile Development", icon: "📱" },
            { id: "ai", name: "Artificial Intelligence", icon: "🤖" },
            { id: "marketing", name: "Digital Marketing", icon: "📢" },
            { id: "productManagement", name: "Product Management", icon: "📋" },
            { id: "cybersecurity", name: "Cybersecurity", icon: "🔒" },
          ].map((interest) => (
            <div
              key={interest.id}
              className={`
                p-3 border rounded-md cursor-pointer transition-all flex items-center gap-3
                ${formData.interests.includes(interest.id)
                  ? "border-skill-purple bg-skill-purple/5"
                  : "border-gray-200 hover:border-skill-purple/60"}
              `}
              onClick={() => handleInterestChange(interest.id)}
            >
              <div className="text-2xl">{interest.icon}</div>
              <div className="flex-1">{interest.name}</div>
              {formData.interests.includes(interest.id) && (
                <CheckCircle className="h-5 w-5 text-skill-purple" />
              )}
            </div>
          ))}
        </div>
      ),
    },
    {
      title: "What's your experience level?",
      description: "This helps us tailor content to your current knowledge.",
      component: (
        <div className="space-y-4">
          <RadioGroup
            value={formData.experience}
            onValueChange={(value) => handleRadioChange("experience", value)}
            className="space-y-3"
          >
            {[
              { id: "beginner", label: "Beginner", description: "I'm just starting out" },
              { id: "intermediate", label: "Intermediate", description: "I have some knowledge and experience" },
              { id: "advanced", label: "Advanced", description: "I'm proficient and looking to expand my skills" },
              { id: "expert", label: "Expert", description: "I have extensive experience and want to deepen my expertise" },
            ].map((option) => (
              <label
                key={option.id}
                className={`
                  flex items-start p-3 border rounded-md cursor-pointer transition-all
                  ${formData.experience === option.id
                    ? "border-skill-purple bg-skill-purple/5"
                    : "border-gray-200 hover:border-skill-purple/60"}
                `}
              >
                <RadioGroupItem value={option.id} id={option.id} className="mt-1" />
                <div className="ml-3 space-y-1">
                  <div className="font-medium">{option.label}</div>
                  <div className="text-sm text-gray-500">{option.description}</div>
                </div>
              </label>
            ))}
          </RadioGroup>
        </div>
      ),
    },
    {
      title: "What's your learning goal?",
      description: "Knowing your goal helps us curate content that's most relevant to you.",
      component: (
        <div className="space-y-4">
          <RadioGroup
            value={formData.goal}
            onValueChange={(value) => handleRadioChange("goal", value)}
            className="space-y-3"
          >
            {[
              { id: "careerSwitch", label: "Career switch", description: "I want to transition to a new career" },
              { id: "skillEnhancement", label: "Skill enhancement", description: "I want to improve my current skillset" },
              { id: "hobby", label: "Personal interest", description: "I'm learning for fun or as a hobby" },
              { id: "certificate", label: "Certification", description: "I'm preparing for a specific certification or exam" },
            ].map((option) => (
              <label
                key={option.id}
                className={`
                  flex items-start p-3 border rounded-md cursor-pointer transition-all
                  ${formData.goal === option.id
                    ? "border-skill-purple bg-skill-purple/5"
                    : "border-gray-200 hover:border-skill-purple/60"}
                `}
              >
                <RadioGroupItem value={option.id} id={option.id} className="mt-1" />
                <div className="ml-3 space-y-1">
                  <div className="font-medium">{option.label}</div>
                  <div className="text-sm text-gray-500">{option.description}</div>
                </div>
              </label>
            ))}
          </RadioGroup>
        </div>
      ),
    },
    {
      title: "How much time can you commit?",
      description: "This helps us pace your learning roadmap appropriately.",
      component: (
        <div className="space-y-4">
          <RadioGroup
            value={formData.timeCommitment}
            onValueChange={(value) => handleRadioChange("timeCommitment", value)}
            className="space-y-3"
          >
            {[
              { id: "minimal", label: "1-3 hours per week", description: "I can commit a few hours a week" },
              { id: "moderate", label: "4-7 hours per week", description: "I can dedicate several hours each week" },
              { id: "significant", label: "8-15 hours per week", description: "I can commit substantial time weekly" },
              { id: "intensive", label: "15+ hours per week", description: "I'm ready to make learning a major focus" },
            ].map((option) => (
              <label
                key={option.id}
                className={`
                  flex items-start p-3 border rounded-md cursor-pointer transition-all
                  ${formData.timeCommitment === option.id
                    ? "border-skill-purple bg-skill-purple/5"
                    : "border-gray-200 hover:border-skill-purple/60"}
                `}
              >
                <RadioGroupItem value={option.id} id={option.id} className="mt-1" />
                <div className="ml-3 space-y-1">
                  <div className="font-medium">{option.label}</div>
                  <div className="text-sm text-gray-500">{option.description}</div>
                </div>
              </label>
            ))}
          </RadioGroup>
        </div>
      ),
    },
    {
      title: "What's your preferred learning style?",
      description: "We'll prioritize content formats that work best for you.",
      component: (
        <div className="space-y-4">
          <RadioGroup
            value={formData.learningStyle}
            onValueChange={(value) => handleRadioChange("learningStyle", value)}
            className="space-y-3"
          >
            {[
              { id: "visual", label: "Visual learner", description: "I prefer videos, diagrams, and illustrations" },
              { id: "reading", label: "Reading learner", description: "I prefer articles, books, and written content" },
              { id: "interactive", label: "Interactive learner", description: "I prefer hands-on exercises and projects" },
              { id: "social", label: "Social learner", description: "I prefer group learning and discussion" },
            ].map((option) => (
              <label
                key={option.id}
                className={`
                  flex items-start p-3 border rounded-md cursor-pointer transition-all
                  ${formData.learningStyle === option.id
                    ? "border-skill-purple bg-skill-purple/5"
                    : "border-gray-200 hover:border-skill-purple/60"}
                `}
              >
                <RadioGroupItem value={option.id} id={option.id} className="mt-1" />
                <div className="ml-3 space-y-1">
                  <div className="font-medium">{option.label}</div>
                  <div className="text-sm text-gray-500">{option.description}</div>
                </div>
              </label>
            ))}
          </RadioGroup>
        </div>
      ),
    },
  ];

  const currentStepData = steps[currentStep];
  const progress = ((currentStep + 1) / steps.length) * 100;

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <header className="border-b bg-white py-4">
        <div className="container flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="h-8 w-8 rounded-full bg-skill-purple flex items-center justify-center">
              <span className="font-bold text-white">SK</span>
            </div>
            <span className="font-bold text-xl">SkillKart</span>
          </div>
          <div className="text-sm text-gray-600">
            Step {currentStep + 1} of {steps.length}
          </div>
        </div>
      </header>

      <div className="container py-8 flex-1">
        <div className="max-w-2xl mx-auto">
          <div className="mb-8">
            <Progress value={progress} className="h-1.5" />
          </div>

          <Card className="mb-6">
            <CardHeader>
              <CardTitle>{currentStepData.title}</CardTitle>
              <CardDescription>{currentStepData.description}</CardDescription>
            </CardHeader>
            <CardContent>{currentStepData.component}</CardContent>
            <CardFooter className="flex justify-between">
              <Button
                variant="outline"
                onClick={handleBack}
                disabled={currentStep === 0}
              >
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back
              </Button>
              <Button 
                onClick={handleNext}
                disabled={!isCurrentStepValid()}
              >
                {currentStep === steps.length - 1 ? (
                  "Finish"
                ) : (
                  <>
                    Next
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </>
                )}
              </Button>
            </CardFooter>
          </Card>
        </div>
      </div>
    </div>
  );
}
