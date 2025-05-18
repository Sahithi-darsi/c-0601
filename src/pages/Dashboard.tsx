
import { useState, useEffect } from "react";
import { SkillKartNavigation } from "@/components/SkillKartNavigation";
import Footer from "@/components/landing/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";
import { ArrowRight, Plus, Compass, BookOpen, User, Settings, MessageSquare } from "lucide-react";
import { 
  Dialog, 
  DialogContent, 
  DialogDescription, 
  DialogHeader, 
  DialogTitle,
  DialogTrigger,
  DialogFooter,
  DialogClose
} from "@/components/ui/dialog";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs";
import { useToast } from "@/components/ui/use-toast";
import { Link } from "react-router-dom";

export default function Dashboard() {
  const { toast } = useToast();
  const [createDialogOpen, setCreateDialogOpen] = useState(false);
  
  // User data state
  const [userData, setUserData] = useState({
    name: "Guest User",
    joinedDate: "May 2023",
    learningStreak: 0,
    completedTopics: 0,
    enrolledRoadmaps: 0,
    level: "Beginner",
    profileImage: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=80&h=80&fit=crop&q=80"
  });

  // Load user data from localStorage on component mount
  useEffect(() => {
    const storedUser = localStorage.getItem('currentUser');
    if (storedUser) {
      setUserData(JSON.parse(storedUser));
    }
  }, []);

  const myRoadmaps = [
    {
      id: 1,
      title: "Frontend Web Development",
      progress: 75,
      lastActivity: "2 days ago",
      nextTopic: "React Component Lifecycle",
      progressColor: "bg-skill-blue"
    },
    {
      id: 2,
      title: "UX/UI Design",
      progress: 40,
      lastActivity: "1 week ago",
      nextTopic: "User Testing Methods",
      progressColor: "bg-skill-purple"
    },
    {
      id: 3,
      title: "Python Programming",
      progress: 25,
      lastActivity: "3 days ago",
      nextTopic: "Data Structures in Python",
      progressColor: "bg-skill-green"
    }
  ];

  const handleCreateRoadmap = () => {
    setCreateDialogOpen(false);
    toast({
      title: "Roadmap Created!",
      description: "Your custom roadmap has been created successfully.",
    });
  };

  return (
    <div className="min-h-screen flex flex-col">
      <SkillKartNavigation />
      
      <div className="flex-1">
        <div className="container px-4 md:px-6 py-8">
          {/* User Welcome & Quick Actions */}
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
            <div className="flex items-center gap-4">
              <div className="h-16 w-16 rounded-full overflow-hidden">
                <img 
                  src={userData.profileImage} 
                  alt="Profile" 
                  className="w-full h-full object-cover" 
                />
              </div>
              <div>
                <h1 className="text-2xl font-bold">Welcome back, {userData.name}!</h1>
                <p className="text-gray-500">
                  {userData.learningStreak} day streak • {userData.completedTopics} topics completed
                </p>
              </div>
            </div>
            
            <div className="flex gap-3">
              <Dialog open={createDialogOpen} onOpenChange={setCreateDialogOpen}>
                <DialogTrigger asChild>
                  <Button className="gap-2">
                    <Plus className="h-4 w-4" />
                    Create Roadmap
                  </Button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-[600px]">
                  <DialogHeader>
                    <DialogTitle>Create Your Learning Roadmap</DialogTitle>
                    <DialogDescription>
                      Customize your learning path with the skills and topics you want to master.
                    </DialogDescription>
                  </DialogHeader>
                  
                  <div className="py-4 space-y-6">
                    <div className="space-y-4">
                      <h4 className="font-medium">Select your primary focus</h4>
                      <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                        {["Web Development", "Data Science", "UX/UI Design", "Mobile Development", "DevOps", "AI & ML"].map((item) => (
                          <Button 
                            key={item} 
                            variant="outline" 
                            className="h-auto py-3 justify-start gap-2"
                          >
                            {item}
                          </Button>
                        ))}
                      </div>
                    </div>
                    
                    <div className="space-y-4">
                      <h4 className="font-medium">Your experience level</h4>
                      <div className="grid grid-cols-3 gap-3">
                        {["Beginner", "Intermediate", "Advanced"].map((item) => (
                          <Button 
                            key={item} 
                            variant="outline" 
                            className="h-auto py-3"
                          >
                            {item}
                          </Button>
                        ))}
                      </div>
                    </div>
                    
                    <div className="space-y-4">
                      <h4 className="font-medium">Learning commitment</h4>
                      <div className="grid grid-cols-3 gap-3">
                        {["1-3 hours/week", "4-7 hours/week", "8+ hours/week"].map((item) => (
                          <Button 
                            key={item} 
                            variant="outline" 
                            className="h-auto py-3"
                          >
                            {item}
                          </Button>
                        ))}
                      </div>
                    </div>
                  </div>
                  
                  <DialogFooter>
                    <DialogClose asChild>
                      <Button variant="outline">Cancel</Button>
                    </DialogClose>
                    <Button onClick={handleCreateRoadmap}>Create Roadmap</Button>
                  </DialogFooter>
                </DialogContent>
              </Dialog>
              
              <Link to="/roadmaps">
                <Button variant="outline" className="gap-2">
                  <Compass className="h-4 w-4" />
                  Browse Roadmaps
                </Button>
              </Link>
            </div>
          </div>
          
          {/* Main Dashboard Content */}
          <Tabs defaultValue="roadmaps" className="w-full">
            <TabsList className="grid grid-cols-4 md:w-fit mb-6">
              <TabsTrigger value="roadmaps">My Roadmaps</TabsTrigger>
              <TabsTrigger value="resources">Saved Resources</TabsTrigger>
              <TabsTrigger value="community">Community</TabsTrigger>
              <TabsTrigger value="profile">Profile</TabsTrigger>
            </TabsList>
            
            <TabsContent value="roadmaps" className="space-y-6">
              <h2 className="text-xl font-bold">Your Learning Roadmaps</h2>
              
              {myRoadmaps.map((roadmap) => (
                <Card key={roadmap.id} className="overflow-hidden">
                  <div className="flex flex-col md:flex-row">
                    <div className="flex-1 p-6">
                      <CardTitle>{roadmap.title}</CardTitle>
                      <div className="flex items-center gap-4 mt-2 text-sm text-gray-500">
                        <span>Progress: {roadmap.progress}%</span>
                        <span>Last activity: {roadmap.lastActivity}</span>
                      </div>
                      
                      <div className="mt-4">
                        <p className="text-sm text-gray-500">Next topic:</p>
                        <p className="font-medium">{roadmap.nextTopic}</p>
                      </div>
                      
                      <div className="h-2 w-full bg-gray-100 rounded-full overflow-hidden mt-4">
                        <div 
                          className={`h-full ${roadmap.progressColor}`} 
                          style={{width: `${roadmap.progress}%`}}
                        ></div>
                      </div>
                    </div>
                    
                    <div className="bg-gray-50 p-6 flex flex-col justify-center items-center md:w-64">
                      <Button className="w-full mb-2">Continue Learning</Button>
                      <Button variant="outline" className="w-full">View Details</Button>
                    </div>
                  </div>
                </Card>
              ))}
              
              <Card className="border-dashed">
                <CardContent className="p-6 flex flex-col items-center justify-center min-h-[200px]">
                  <Button 
                    variant="outline" 
                    className="gap-2"
                    onClick={() => setCreateDialogOpen(true)}
                  >
                    <Plus className="h-4 w-4" />
                    Create a New Roadmap
                  </Button>
                  <p className="text-sm text-gray-500 mt-2 text-center max-w-md">
                    Design a custom learning path tailored to your specific goals and interests
                  </p>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="resources">
              <div className="space-y-6">
                <h2 className="text-xl font-bold">Saved Resources</h2>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  <Card>
                    <CardHeader className="pb-2">
                      <CardTitle className="text-base">JavaScript: Understanding the Weird Parts</CardTitle>
                      <CardDescription>Advanced JavaScript concepts</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-gray-500">Video Course • 12 hours</p>
                      <div className="flex items-center mt-2 text-xs text-gray-500">
                        <div className="bg-gray-100 px-2 py-1 rounded">Frontend</div>
                      </div>
                    </CardContent>
                    <CardFooter>
                      <Button variant="ghost" size="sm" className="text-skill-purple">
                        Access Resource
                      </Button>
                    </CardFooter>
                  </Card>
                  
                  <Card>
                    <CardHeader className="pb-2">
                      <CardTitle className="text-base">Responsive Web Design Patterns</CardTitle>
                      <CardDescription>Modern layout techniques</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-gray-500">Article • 25 min read</p>
                      <div className="flex items-center mt-2 text-xs text-gray-500">
                        <div className="bg-gray-100 px-2 py-1 rounded">CSS</div>
                      </div>
                    </CardContent>
                    <CardFooter>
                      <Button variant="ghost" size="sm" className="text-skill-purple">
                        Access Resource
                      </Button>
                    </CardFooter>
                  </Card>
                  
                  <Link to="/resources">
                    <Card className="h-full flex flex-col border-dashed">
                      <CardContent className="flex items-center justify-center flex-1 p-6">
                        <div className="text-center">
                          <div className="rounded-full bg-gray-100 h-12 w-12 flex items-center justify-center mx-auto mb-3">
                            <BookOpen className="h-6 w-6 text-gray-500" />
                          </div>
                          <p className="font-medium">Browse More Resources</p>
                          <p className="text-sm text-gray-500">Discover tutorials, courses, and more</p>
                        </div>
                      </CardContent>
                    </Card>
                  </Link>
                </div>
              </div>
            </TabsContent>
            
            <TabsContent value="community">
              <div className="space-y-6">
                <h2 className="text-xl font-bold">Community</h2>
                <Card className="bg-gray-50">
                  <CardContent className="p-8 text-center">
                    <div className="rounded-full bg-gray-100 h-16 w-16 flex items-center justify-center mx-auto mb-4">
                      <MessageSquare className="h-8 w-8 text-gray-400" />
                    </div>
                    <h3 className="text-xl font-semibold mb-2">Connect with Learners</h3>
                    <p className="text-gray-500 max-w-md mx-auto mb-4">
                      Join forums, study groups, and connect with mentors to enhance your learning journey.
                    </p>
                    <Button 
                      onClick={() => toast({
                        title: "Coming Soon",
                        description: "Community features will be available soon!",
                      })}
                    >
                      Explore Community
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
            
            <TabsContent value="profile">
              <div className="space-y-6">
                <h2 className="text-xl font-bold">Your Profile</h2>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <Card>
                    <CardHeader>
                      <CardTitle>Personal Information</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="flex justify-center mb-4">
                        <div className="h-24 w-24 rounded-full overflow-hidden">
                          <img src={userData.profileImage} alt="Profile" className="w-full h-full object-cover" />
                        </div>
                      </div>
                      
                      <div>
                        <p className="text-sm text-gray-500">Full Name</p>
                        <p className="font-medium">{userData.name}</p>
                      </div>
                      
                      <div>
                        <p className="text-sm text-gray-500">Member Since</p>
                        <p className="font-medium">{userData.joinedDate}</p>
                      </div>
                      
                      <div>
                        <p className="text-sm text-gray-500">Skill Level</p>
                        <p className="font-medium">{userData.level}</p>
                      </div>
                    </CardContent>
                    <CardFooter>
                      <Button variant="outline" size="sm" className="w-full gap-2">
                        <Settings className="h-4 w-4" />
                        Edit Profile
                      </Button>
                    </CardFooter>
                  </Card>
                  
                  <Card className="md:col-span-2">
                    <CardHeader>
                      <CardTitle>Learning Statistics</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-6">
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
                        <div className="p-4 bg-gray-50 rounded-lg">
                          <p className="text-2xl font-bold">{userData.learningStreak}</p>
                          <p className="text-sm text-gray-500">Day Streak</p>
                        </div>
                        <div className="p-4 bg-gray-50 rounded-lg">
                          <p className="text-2xl font-bold">{userData.enrolledRoadmaps}</p>
                          <p className="text-sm text-gray-500">Roadmaps</p>
                        </div>
                        <div className="p-4 bg-gray-50 rounded-lg">
                          <p className="text-2xl font-bold">{userData.completedTopics}</p>
                          <p className="text-sm text-gray-500">Topics Done</p>
                        </div>
                        <div className="p-4 bg-gray-50 rounded-lg">
                          <p className="text-2xl font-bold">32</p>
                          <p className="text-sm text-gray-500">Hours Spent</p>
                        </div>
                      </div>
                      
                      <div>
                        <h4 className="font-medium mb-3">Recent Activity</h4>
                        <div className="space-y-2">
                          <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                            <div>
                              <p className="font-medium">Completed: CSS Flexbox Basics</p>
                              <p className="text-sm text-gray-500">Frontend Web Development</p>
                            </div>
                            <span className="text-sm text-gray-500">Yesterday</span>
                          </div>
                          <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                            <div>
                              <p className="font-medium">Started: JavaScript Functions</p>
                              <p className="text-sm text-gray-500">Frontend Web Development</p>
                            </div>
                            <span className="text-sm text-gray-500">3 days ago</span>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
      
      <Footer />
    </div>
  );
}
