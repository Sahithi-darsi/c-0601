
import { SkillKartNavigation } from "@/components/SkillKartNavigation";
import Footer from "@/components/landing/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { BarChart2, BookOpen, Clock, Award, ChevronRight, ArrowUpRight } from "lucide-react";

export default function Dashboard() {
  return (
    <div className="flex min-h-screen flex-col">
      <SkillKartNavigation />
      
      <main className="flex-1 container px-4 md:px-6 py-8">
        <div className="space-y-8">
          <div className="flex justify-between items-center">
            <div>
              <h1 className="text-3xl font-bold">Dashboard</h1>
              <p className="text-gray-500">Welcome back! Track your learning progress</p>
            </div>
            <Button className="gap-2">
              <ArrowUpRight className="h-4 w-4" />
              Create New Roadmap
            </Button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <StatsCard title="Active Roadmaps" value="2" icon={<BookOpen className="h-5 w-5 text-skill-blue" />} color="bg-skill-blue-light" />
            <StatsCard title="Skills in Progress" value="5" icon={<BarChart2 className="h-5 w-5 text-skill-green" />} color="bg-skill-green-light" />
            <StatsCard title="Learning Hours" value="24" icon={<Clock className="h-5 w-5 text-skill-purple" />} color="bg-skill-purple-light" />
            <StatsCard title="Achievements" value="3" icon={<Award className="h-5 w-5 text-skill-yellow" />} color="bg-yellow-100" />
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <Card className="lg:col-span-2">
              <CardHeader>
                <CardTitle>Your Roadmaps</CardTitle>
                <CardDescription>Track your progress across active learning paths</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <RoadmapProgress 
                  title="Frontend Web Development"
                  progress={65}
                  progressColor="bg-skill-blue"
                  lastUpdated="Today"
                />
                <RoadmapProgress 
                  title="Data Science Fundamentals"
                  progress={30}
                  progressColor="bg-skill-green"
                  lastUpdated="2 days ago"
                />
              </CardContent>
              <CardFooter>
                <Button variant="ghost" className="gap-1 text-skill-purple">
                  View all roadmaps
                  <ChevronRight className="h-4 w-4" />
                </Button>
              </CardFooter>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle>Recent Achievements</CardTitle>
                <CardDescription>Your latest learning milestones</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <Achievement 
                  title="Consistent Learner" 
                  description="Completed 5 days learning streak"
                  date="May 15, 2025"
                  icon="🔥"
                />
                <Achievement 
                  title="HTML Master" 
                  description="Completed all HTML fundamentals"
                  date="May 12, 2025"
                  icon="🏆"
                />
                <Achievement 
                  title="First Project" 
                  description="Submitted your first practical project"
                  date="May 10, 2025"
                  icon="🚀"
                />
              </CardContent>
              <CardFooter>
                <Button variant="ghost" className="gap-1 text-skill-purple">
                  View all achievements
                  <ChevronRight className="h-4 w-4" />
                </Button>
              </CardFooter>
            </Card>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <Card className="lg:col-span-2">
              <CardHeader>
                <CardTitle>Recommended Next Steps</CardTitle>
                <CardDescription>Continue your learning journey</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <RecommendedItem 
                  title="CSS Flexbox & Grid"
                  type="Tutorial"
                  duration="45 mins"
                  description="Master modern layout techniques"
                />
                <RecommendedItem 
                  title="JavaScript ES6 Features"
                  type="Interactive Lesson"
                  duration="1 hour"
                  description="Learn modern JavaScript syntax"
                />
                <RecommendedItem 
                  title="Build a Responsive Portfolio"
                  type="Project"
                  duration="3 hours"
                  description="Apply your HTML & CSS skills"
                />
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle>Learning Stats</CardTitle>
                <CardDescription>Your activity this week</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <div className="flex justify-between items-center text-sm">
                    <span>Mon</span>
                    <span>Tue</span>
                    <span>Wed</span>
                    <span>Thu</span>
                    <span>Fri</span>
                    <span>Sat</span>
                    <span>Sun</span>
                  </div>
                  <div className="flex justify-between items-end h-24">
                    <div className="w-8 bg-skill-purple-light rounded-sm h-12"></div>
                    <div className="w-8 bg-skill-purple-light rounded-sm h-8"></div>
                    <div className="w-8 bg-skill-purple-light rounded-sm h-16"></div>
                    <div className="w-8 bg-skill-purple rounded-sm h-20"></div>
                    <div className="w-8 bg-skill-purple-light rounded-sm h-10"></div>
                    <div className="w-8 bg-skill-purple-light rounded-sm h-6"></div>
                    <div className="w-8 bg-gray-200 rounded-sm h-4"></div>
                  </div>
                </div>
                <div className="pt-4 border-t">
                  <div className="flex justify-between mb-2">
                    <span className="text-sm text-gray-500">Weekly Goal</span>
                    <span className="text-sm font-medium">5 hours / 10 hours</span>
                  </div>
                  <div className="h-2 w-full bg-gray-100 rounded-full overflow-hidden">
                    <div className="h-full bg-skill-purple" style={{width: '50%'}}></div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}

function StatsCard({ title, value, icon, color }: { title: string; value: string; icon: React.ReactNode; color: string }) {
  return (
    <Card>
      <CardContent className="p-6">
        <div className="flex justify-between items-center">
          <div>
            <p className="text-sm text-gray-500">{title}</p>
            <p className="text-3xl font-bold">{value}</p>
          </div>
          <div className={`p-3 rounded-lg ${color}`}>
            {icon}
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

function RoadmapProgress({ title, progress, progressColor, lastUpdated }: { title: string; progress: number; progressColor: string; lastUpdated: string }) {
  return (
    <div className="space-y-2">
      <div className="flex justify-between items-center">
        <h4 className="font-medium">{title}</h4>
        <span className="text-sm text-gray-500">Last updated: {lastUpdated}</span>
      </div>
      <div className="flex items-center gap-2">
        <div className="h-2 flex-1 bg-gray-100 rounded-full overflow-hidden">
          <div className={`h-full ${progressColor}`} style={{width: `${progress}%`}}></div>
        </div>
        <span className="text-sm font-medium">{progress}%</span>
      </div>
    </div>
  );
}

function Achievement({ title, description, date, icon }: { title: string; description: string; date: string; icon: string }) {
  return (
    <div className="flex items-start gap-3">
      <div className="text-xl">{icon}</div>
      <div>
        <h4 className="font-medium">{title}</h4>
        <p className="text-sm text-gray-500">{description}</p>
        <p className="text-xs text-gray-400 mt-1">{date}</p>
      </div>
    </div>
  );
}

function RecommendedItem({ title, type, duration, description }: { title: string; type: string; duration: string; description: string }) {
  return (
    <div className="flex items-start gap-4 border-l-2 border-skill-purple pl-4">
      <div className="flex-1">
        <h4 className="font-medium">{title}</h4>
        <p className="text-sm text-gray-500">{description}</p>
        <div className="flex items-center gap-2 mt-1">
          <span className="text-xs bg-gray-100 px-2 py-1 rounded-full">{type}</span>
          <span className="text-xs text-gray-500">{duration}</span>
        </div>
      </div>
      <Button variant="outline" size="sm">Start</Button>
    </div>
  );
}
