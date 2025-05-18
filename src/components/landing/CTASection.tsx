
import { useState } from "react";
import { Button } from "@/components/ui/button";

export default function CTASection() {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, this would handle the signup/newsletter logic
    console.log("Email submitted:", email);
    window.location.href = "/signup?email=" + encodeURIComponent(email);
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
          <div className="w-full max-w-sm space-y-2">
            <form className="flex flex-col gap-2 sm:flex-row" onSubmit={handleSubmit}>
              <input
                className="flex h-12 w-full rounded-md border border-white/20 bg-white/10 px-3 py-2 text-sm text-white placeholder:text-white/50 focus:outline-none focus:ring-2 focus:ring-white/20"
                placeholder="Enter your email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <Button type="submit" size="lg" className="bg-white text-skill-purple hover:bg-white/90">
                Get Started
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
