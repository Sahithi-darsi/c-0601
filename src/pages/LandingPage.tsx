
import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, BookOpen, ChevronRight, Award, Users, BarChart2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { 
  Card, 
  CardContent, 
  CardDescription, 
  CardFooter, 
  CardHeader, 
  CardTitle 
} from "@/components/ui/card";
import { SkillKartNavigation } from "@/components/SkillKartNavigation";

export default function LandingPage() {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, this would handle the signup/newsletter logic
    console.log("Email submitted:", email);
    window.location.href = "/signup?email=" + encodeURIComponent(email);
  };

  return (
    <div className="flex min-h-screen flex-col">
      <SkillKartNavigation />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-36 bg-white">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-[1fr_500px] lg:gap-12 xl:grid-cols-[1fr_550px]">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl">
                    Learn Skills That Matter, <span className="text-skill-purple">Your Way</span>
                  </h1>
                  <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                    Create personalized learning roadmaps, track your progress, and connect with a community of learners.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Link to="/signup">
                    <Button size="lg" className="gap-1.5">
                      Create Your Roadmap
                      <ArrowRight className="h-4 w-4" />
                    </Button>
                  </Link>
                  <Link to="/roadmaps">
                    <Button size="lg" variant="outline">
                      Explore Roadmaps
                    </Button>
                  </Link>
                </div>
              </div>
              <div className="mx-auto aspect-video overflow-hidden rounded-xl object-cover sm:w-full lg:order-last">
                <img
                  alt="SkillKart Learning Dashboard Preview"
                  className="w-full h-auto object-cover"
                  src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Y29kaW5nfGVufDB8fDB8fHww"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-50">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-gray-100 px-3 py-1 text-sm">Features</div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  Everything You Need to Master New Skills
                </h2>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  SkillKart provides all the tools you need to create effective learning roadmaps and track your progress.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-12 md:grid-cols-2 lg:grid-cols-3">
              <Card className="roadmap-card">
                <CardHeader>
                  <div className="p-2 w-10 h-10 rounded-lg bg-skill-blue-light flex items-center justify-center mb-3">
                    <BookOpen className="h-5 w-5 text-skill-blue" />
                  </div>
                  <CardTitle>Personalized Roadmaps</CardTitle>
                  <CardDescription>
                    Create learning paths tailored to your goals, experience, and available time.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-500">
                    Choose from curated templates or build custom learning journeys with exactly what you need.
                  </p>
                </CardContent>
                <CardFooter>
                  <Button variant="ghost" className="gap-1 p-0 text-skill-blue">
                    Learn more
                    <ChevronRight className="h-4 w-4" />
                  </Button>
                </CardFooter>
              </Card>
              <Card className="roadmap-card">
                <CardHeader>
                  <div className="p-2 w-10 h-10 rounded-lg bg-skill-green-light flex items-center justify-center mb-3">
                    <BarChart2 className="h-5 w-5 text-skill-green" />
                  </div>
                  <CardTitle>Progress Tracking</CardTitle>
                  <CardDescription>
                    Monitor your learning journey with visual progress indicators and analytics.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-500">
                    Track completion rates, time spent, and skill mastery with detailed statistics and visualizations.
                  </p>
                </CardContent>
                <CardFooter>
                  <Button variant="ghost" className="gap-1 p-0 text-skill-green">
                    Learn more
                    <ChevronRight className="h-4 w-4" />
                  </Button>
                </CardFooter>
              </Card>
              <Card className="roadmap-card">
                <CardHeader>
                  <div className="p-2 w-10 h-10 rounded-lg bg-skill-purple-light flex items-center justify-center mb-3">
                    <Users className="h-5 w-5 text-skill-purple" />
                  </div>
                  <CardTitle>Community Support</CardTitle>
                  <CardDescription>
                    Connect with fellow learners, join study groups, and learn together.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-500">
                    Engage in discussions, get help with challenging topics, and share your knowledge with others.
                  </p>
                </CardContent>
                <CardFooter>
                  <Button variant="ghost" className="gap-1 p-0 text-skill-purple">
                    Learn more
                    <ChevronRight className="h-4 w-4" />
                  </Button>
                </CardFooter>
              </Card>
              <Card className="roadmap-card">
                <CardHeader>
                  <div className="p-2 w-10 h-10 rounded-lg bg-yellow-100 flex items-center justify-center mb-3">
                    <Award className="h-5 w-5 text-skill-yellow" />
                  </div>
                  <CardTitle>Achievements & Gamification</CardTitle>
                  <CardDescription>
                    Earn badges, unlock achievements, and stay motivated throughout your journey.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-500">
                    Maintain learning streaks, complete challenges, and showcase your progress with a rewarding system.
                  </p>
                </CardContent>
                <CardFooter>
                  <Button variant="ghost" className="gap-1 p-0 text-skill-yellow">
                    Learn more
                    <ChevronRight className="h-4 w-4" />
                  </Button>
                </CardFooter>
              </Card>
              <Card className="roadmap-card">
                <CardHeader>
                  <div className="p-2 w-10 h-10 rounded-lg bg-skill-blue-light flex items-center justify-center mb-3">
                    <Users className="h-5 w-5 text-skill-blue" />
                  </div>
                  <CardTitle>Expert Guidance</CardTitle>
                  <CardDescription>
                    Access content curated by industry experts and experienced mentors.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-500">
                    Learn from the best with high-quality resources and recommendations from professionals.
                  </p>
                </CardContent>
                <CardFooter>
                  <Button variant="ghost" className="gap-1 p-0 text-skill-blue">
                    Learn more
                    <ChevronRight className="h-4 w-4" />
                  </Button>
                </CardFooter>
              </Card>
              <Card className="roadmap-card">
                <CardHeader>
                  <div className="p-2 w-10 h-10 rounded-lg bg-skill-green-light flex items-center justify-center mb-3">
                    <BookOpen className="h-5 w-5 text-skill-green" />
                  </div>
                  <CardTitle>Resource Library</CardTitle>
                  <CardDescription>
                    Discover the best learning materials for any topic, all in one place.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-500">
                    From videos and articles to interactive exercises, find everything you need to master new skills.
                  </p>
                </CardContent>
                <CardFooter>
                  <Button variant="ghost" className="gap-1 p-0 text-skill-green">
                    Learn more
                    <ChevronRight className="h-4 w-4" />
                  </Button>
                </CardFooter>
              </Card>
            </div>
          </div>
        </section>

        {/* Popular Roadmaps Section */}
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-gray-100 px-3 py-1 text-sm">Explore</div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Popular Learning Roadmaps</h2>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Discover curated learning paths designed to help you master in-demand skills efficiently.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 py-12 md:grid-cols-2 lg:grid-cols-3">
              <Card className="roadmap-card overflow-hidden">
                <div className="h-48 overflow-hidden">
                  <img
                    alt="Frontend Development"
                    className="w-full h-full object-cover"
                    src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cHJvZ3JhbW1pbmd8ZW58MHx8MHx8fDA%3D"
                  />
                </div>
                <CardHeader>
                  <CardTitle>Frontend Web Development</CardTitle>
                  <CardDescription>
                    Master modern web development with HTML, CSS, JavaScript, and React
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-500">Beginner to Intermediate</span>
                    <span className="text-sm font-medium">12 weeks</span>
                  </div>
                  <div className="skill-progress-bar">
                    <div className="progress bg-skill-blue" style={{width: "75%"}}></div>
                  </div>
                  <div className="flex items-center gap-2 pt-2">
                    <span className="rounded-full bg-gray-100 px-2 py-1 text-xs">HTML/CSS</span>
                    <span className="rounded-full bg-gray-100 px-2 py-1 text-xs">JavaScript</span>
                    <span className="rounded-full bg-gray-100 px-2 py-1 text-xs">React</span>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button className="w-full">View Roadmap</Button>
                </CardFooter>
              </Card>
              <Card className="roadmap-card overflow-hidden">
                <div className="h-48 overflow-hidden">
                  <img
                    alt="Data Science"
                    className="w-full h-full object-cover"
                    src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8ZGF0YSUyMHNjaWVuY2V8ZW58MHx8MHx8fDA%3D"
                  />
                </div>
                <CardHeader>
                  <CardTitle>Data Science Fundamentals</CardTitle>
                  <CardDescription>
                    Learn data analysis, visualization, and machine learning basics
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-500">Intermediate</span>
                    <span className="text-sm font-medium">16 weeks</span>
                  </div>
                  <div className="skill-progress-bar">
                    <div className="progress bg-skill-green" style={{width: "60%"}}></div>
                  </div>
                  <div className="flex items-center gap-2 pt-2">
                    <span className="rounded-full bg-gray-100 px-2 py-1 text-xs">Python</span>
                    <span className="rounded-full bg-gray-100 px-2 py-1 text-xs">Statistics</span>
                    <span className="rounded-full bg-gray-100 px-2 py-1 text-xs">ML</span>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button className="w-full">View Roadmap</Button>
                </CardFooter>
              </Card>
              <Card className="roadmap-card overflow-hidden">
                <div className="h-48 overflow-hidden">
                  <img
                    alt="UX Design"
                    className="w-full h-full object-cover"
                    src="https://images.unsplash.com/photo-1559028012-481c04fa702d?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8dWklMjBkZXNpZ258ZW58MHx8MHx8fDA%3D"
                  />
                </div>
                <CardHeader>
                  <CardTitle>UX/UI Design</CardTitle>
                  <CardDescription>
                    Create user-centered digital experiences from research to design
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-500">All Levels</span>
                    <span className="text-sm font-medium">10 weeks</span>
                  </div>
                  <div className="skill-progress-bar">
                    <div className="progress bg-skill-purple" style={{width: "85%"}}></div>
                  </div>
                  <div className="flex items-center gap-2 pt-2">
                    <span className="rounded-full bg-gray-100 px-2 py-1 text-xs">User Research</span>
                    <span className="rounded-full bg-gray-100 px-2 py-1 text-xs">Figma</span>
                    <span className="rounded-full bg-gray-100 px-2 py-1 text-xs">UI</span>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button className="w-full">View Roadmap</Button>
                </CardFooter>
              </Card>
            </div>
            <div className="flex justify-center">
              <Link to="/roadmaps">
                <Button variant="outline" size="lg" className="gap-2">
                  Browse All Roadmaps
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* CTA Section */}
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
      </main>

      {/* Footer */}
      <footer className="w-full border-t bg-white py-12">
        <div className="container px-4 md:px-6">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <div className="h-8 w-8 rounded-full bg-skill-purple flex items-center justify-center">
                  <span className="font-bold text-white">SK</span>
                </div>
                <span className="font-bold text-xl">SkillKart</span>
              </div>
              <p className="text-sm text-gray-500">
                Building the future of personalized education, one roadmap at a time.
              </p>
              <div className="flex gap-4">
                <a href="#" className="text-gray-500 hover:text-gray-900">
                  <TwitterIcon className="h-5 w-5" />
                </a>
                <a href="#" className="text-gray-500 hover:text-gray-900">
                  <LinkedInIcon className="h-5 w-5" />
                </a>
                <a href="#" className="text-gray-500 hover:text-gray-900">
                  <FacebookIcon className="h-5 w-5" />
                </a>
              </div>
            </div>
            <div className="space-y-4">
              <h4 className="font-medium text-base">Product</h4>
              <ul className="space-y-2 text-sm text-gray-500">
                <li>
                  <a href="#" className="hover:underline">Features</a>
                </li>
                <li>
                  <a href="#" className="hover:underline">Roadmaps</a>
                </li>
                <li>
                  <a href="#" className="hover:underline">Pricing</a>
                </li>
                <li>
                  <a href="#" className="hover:underline">Enterprise</a>
                </li>
              </ul>
            </div>
            <div className="space-y-4">
              <h4 className="font-medium text-base">Resources</h4>
              <ul className="space-y-2 text-sm text-gray-500">
                <li>
                  <a href="#" className="hover:underline">Community</a>
                </li>
                <li>
                  <a href="#" className="hover:underline">Guides</a>
                </li>
                <li>
                  <a href="#" className="hover:underline">Blog</a>
                </li>
                <li>
                  <a href="#" className="hover:underline">Support</a>
                </li>
              </ul>
            </div>
            <div className="space-y-4">
              <h4 className="font-medium text-base">Company</h4>
              <ul className="space-y-2 text-sm text-gray-500">
                <li>
                  <a href="#" className="hover:underline">About</a>
                </li>
                <li>
                  <a href="#" className="hover:underline">Careers</a>
                </li>
                <li>
                  <a href="#" className="hover:underline">Privacy</a>
                </li>
                <li>
                  <a href="#" className="hover:underline">Terms</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="mt-8 border-t pt-8 text-center text-sm text-gray-500">
            © {new Date().getFullYear()} SkillKart. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}

// Social Icons Components
function TwitterIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
    </svg>
  );
}

function LinkedInIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect width="4" height="12" x="2" y="9" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}

function FacebookIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  );
}
