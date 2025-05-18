
import { useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { Eye, EyeOff, ArrowLeft, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { 
  Card, 
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle 
} from "@/components/ui/card";

export default function SignUpPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [step, setStep] = useState(1);
  const navigate = useNavigate();
  const location = useLocation();
  
  // Extract email from URL if provided
  const queryParams = new URLSearchParams(location.search);
  const emailFromQuery = queryParams.get("email");
  
  // Use the email from query params if provided
  useState(() => {
    if (emailFromQuery) {
      setFormData(prev => ({
        ...prev,
        email: emailFromQuery
      }));
    }
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // In a real app, this would call an API to register the user
    console.log("Sign up form submitted:", formData);
    
    // Move to the next step
    if (step === 1) {
      setStep(2);
    } else {
      // After all steps complete, navigate to onboarding
      navigate("/onboarding");
    }
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 p-4 sm:p-6 md:p-8">
      <Link to="/" className="absolute top-8 left-8 flex items-center gap-2 text-gray-600 hover:text-gray-900">
        <ArrowLeft className="h-4 w-4" />
        Back to home
      </Link>

      <div className="flex items-center space-x-2 mb-8">
        <div className="h-8 w-8 rounded-full bg-skill-purple flex items-center justify-center">
          <span className="font-bold text-white">SK</span>
        </div>
        <span className="font-bold text-xl">SkillKart</span>
      </div>

      <Card className="w-full max-w-md">
        <CardHeader className="space-y-1">
          <CardTitle className="text-2xl font-bold">
            {step === 1 ? "Create an account" : "Almost there!"}
          </CardTitle>
          <CardDescription>
            {step === 1 
              ? "Enter your information to get started" 
              : "Just a few more details to customize your experience"}
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            {step === 1 ? (
              <>
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium">
                    Full Name
                  </label>
                  <Input
                    id="name"
                    name="name"
                    placeholder="Enter your name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium">
                    Email
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="Enter your email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <label htmlFor="password" className="text-sm font-medium">
                      Password
                    </label>
                    <button
                      type="button"
                      onClick={togglePasswordVisibility}
                      className="text-xs text-gray-500"
                    >
                      {showPassword ? (
                        <span className="flex items-center">
                          <EyeOff className="h-3 w-3 mr-1" /> Hide
                        </span>
                      ) : (
                        <span className="flex items-center">
                          <Eye className="h-3 w-3 mr-1" /> Show
                        </span>
                      )}
                    </button>
                  </div>
                  <Input
                    id="password"
                    name="password"
                    type={showPassword ? "text" : "password"}
                    placeholder="Create a password"
                    value={formData.password}
                    onChange={handleChange}
                    required
                    minLength={8}
                  />
                  <div className="text-xs text-gray-500">
                    Password must be at least 8 characters
                  </div>
                </div>
              </>
            ) : (
              <div className="space-y-6">
                <div className="space-y-2">
                  <label className="text-sm font-medium">Email verification</label>
                  <div className="bg-green-50 border border-green-200 rounded-md p-3 flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                    <div>
                      <p className="text-sm font-medium text-green-800">Verification email sent!</p>
                      <p className="text-xs text-green-700 mt-1">
                        We've sent a verification link to {formData.email}. Please check your inbox.
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="space-y-2">
                  <label className="text-sm font-medium">Terms and Privacy</label>
                  <div className="flex items-start space-x-2">
                    <input
                      type="checkbox"
                      id="terms"
                      className="rounded border-gray-300 text-skill-purple focus:ring-skill-purple mt-1"
                      required
                    />
                    <label htmlFor="terms" className="text-sm text-gray-600">
                      I agree to the <a href="#" className="text-skill-purple hover:underline">Terms of Service</a> and{" "}
                      <a href="#" className="text-skill-purple hover:underline">Privacy Policy</a>
                    </label>
                  </div>
                </div>
              </div>
            )}
            <Button type="submit" className="w-full">
              {step === 1 ? "Continue" : "Create Account"}
            </Button>
          </form>

          {step === 1 && (
            <>
              <div className="relative my-6">
                <div className="absolute inset-0 flex items-center">
                  <Separator />
                </div>
                <div className="relative flex justify-center text-xs uppercase">
                  <span className="bg-white px-2 text-gray-500">
                    Or continue with
                  </span>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <Button variant="outline" className="w-full">
                  <svg className="mr-2 h-4 w-4" viewBox="0 0 24 24">
                    <path
                      d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                      fill="#4285F4"
                    />
                    <path
                      d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                      fill="#34A853"
                    />
                    <path
                      d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                      fill="#FBBC05"
                    />
                    <path
                      d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                      fill="#EA4335"
                    />
                  </svg>
                  Google
                </Button>
                <Button variant="outline" className="w-full">
                  <svg className="mr-2 h-4 w-4" viewBox="0 0 24 24">
                    <path
                      d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                      fill="#1877F2"
                    />
                  </svg>
                  Facebook
                </Button>
              </div>
            </>
          )}
        </CardContent>
        <CardFooter className="flex justify-center">
          <div className="text-sm text-gray-600">
            Already have an account?{" "}
            <Link to="/login" className="text-skill-purple hover:underline">
              Sign in
            </Link>
          </div>
        </CardFooter>
      </Card>
    </div>
  );
}
