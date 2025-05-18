
import { BookOpen, BarChart2, Users, Award, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { 
  Card, 
  CardContent, 
  CardDescription, 
  CardFooter, 
  CardHeader, 
  CardTitle 
} from "@/components/ui/card";

export default function FeaturesSection() {
  return (
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
          <FeatureCard 
            icon={<BookOpen className="h-5 w-5 text-skill-blue" />}
            iconBg="bg-skill-blue-light"
            title="Personalized Roadmaps"
            description="Create learning paths tailored to your goals, experience, and available time."
            content="Choose from curated templates or build custom learning journeys with exactly what you need."
            buttonColor="text-skill-blue"
          />
          <FeatureCard 
            icon={<BarChart2 className="h-5 w-5 text-skill-green" />}
            iconBg="bg-skill-green-light"
            title="Progress Tracking"
            description="Monitor your learning journey with visual progress indicators and analytics."
            content="Track completion rates, time spent, and skill mastery with detailed statistics and visualizations."
            buttonColor="text-skill-green"
          />
          <FeatureCard 
            icon={<Users className="h-5 w-5 text-skill-purple" />}
            iconBg="bg-skill-purple-light"
            title="Community Support"
            description="Connect with fellow learners, join study groups, and learn together."
            content="Engage in discussions, get help with challenging topics, and share your knowledge with others."
            buttonColor="text-skill-purple"
          />
          <FeatureCard 
            icon={<Award className="h-5 w-5 text-skill-yellow" />}
            iconBg="bg-yellow-100"
            title="Achievements & Gamification"
            description="Earn badges, unlock achievements, and stay motivated throughout your journey."
            content="Maintain learning streaks, complete challenges, and showcase your progress with a rewarding system."
            buttonColor="text-skill-yellow"
          />
          <FeatureCard 
            icon={<Users className="h-5 w-5 text-skill-blue" />}
            iconBg="bg-skill-blue-light"
            title="Expert Guidance"
            description="Access content curated by industry experts and experienced mentors."
            content="Learn from the best with high-quality resources and recommendations from professionals."
            buttonColor="text-skill-blue"
          />
          <FeatureCard 
            icon={<BookOpen className="h-5 w-5 text-skill-green" />}
            iconBg="bg-skill-green-light"
            title="Resource Library"
            description="Discover the best learning materials for any topic, all in one place."
            content="From videos and articles to interactive exercises, find everything you need to master new skills."
            buttonColor="text-skill-green"
          />
        </div>
      </div>
    </section>
  );
}

type FeatureCardProps = {
  icon: React.ReactNode;
  iconBg: string;
  title: string;
  description: string;
  content: string;
  buttonColor: string;
};

function FeatureCard({ icon, iconBg, title, description, content, buttonColor }: FeatureCardProps) {
  return (
    <Card className="roadmap-card">
      <CardHeader>
        <div className={`p-2 w-10 h-10 rounded-lg ${iconBg} flex items-center justify-center mb-3`}>
          {icon}
        </div>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-gray-500">{content}</p>
      </CardContent>
      <CardFooter>
        <Button variant="ghost" className={`gap-1 p-0 ${buttonColor}`}>
          Learn more
          <ChevronRight className="h-4 w-4" />
        </Button>
      </CardFooter>
    </Card>
  );
}
