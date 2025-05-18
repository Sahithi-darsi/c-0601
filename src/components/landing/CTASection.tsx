
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { useToast } from "@/components/ui/use-toast";

export default function CTASection() {
  const [email, setEmail] = useState("");
  const navigate = useNavigate();
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (email) {
      // In a real app with authentication, this would handle the signup/newsletter logic
      console.log("Email submitted:", email);
      navigate(`/signup?email=${encodeURIComponent(email)}`);
    } else {
      toast({
        title: "Please enter your email",
        description: "An email is required to get started",
        variant: "destructive",
      });
    }
  };

  const handleCreateRoadmap = () => {
    // Take the user to the dashboard where they can create a roadmap
    navigate("/dashboard");
    
    toast({
      title: "Create Your Roadmap",
      description: "You'll find the roadmap creation tool in your dashboard",
    });
  };

  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-skill-purple text-white">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Start Your Learning Journey Today
            </h2>
            <p className="mx-auto max-w-[700px] text-white/80 md:text-xl">
              Create your personalized learning roadmap and join thousands of learners achieving their goals.
            </p>
          </div>
          <div className="flex flex-col gap-4 sm:flex-row sm:gap-6">
            <Button 
              size="lg" 
              className="bg-white text-skill-purple hover:bg-white/90"
              onClick={handleCreateRoadmap}
            >
              Create Your Roadmap
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="border-white text-white hover:bg-white/10"
              onClick={() => navigate('/roadmaps')}
            >
              Explore Popular Roadmaps
            </Button>
          </div>
          
          <div className="w-full max-w-sm space-y-2 mt-8">
            <p className="text-sm font-medium mb-2">Get updates on new roadmaps and resources</p>
            <form className="flex flex-col gap-2 sm:flex-row" onSubmit={handleSubmit}>
              <input
                className="flex h-12 w-full rounded-md border border-white/20 bg-white/10 px-3 py-2 text-sm text-white placeholder:text-white/50 focus:outline-none focus:ring-2 focus:ring-white/20"
                placeholder="Enter your email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <Button type="submit" size="lg" className="bg-white text-skill-purple hover:bg-white/90">
                Subscribe
              </Button>
            </form>
            <p className="text-xs text-white/60">
              By signing up, you agree to our Terms of Service and Privacy Policy.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
