import { useState } from "react";
import { SkillKartNavigation } from "@/components/SkillKartNavigation";
import Footer from "@/components/landing/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft } from "lucide-react";

export default function Roadmaps() {
  const [selectedRoadmap, setSelectedRoadmap] = useState<RoadmapType | null>(null);

  const roadmaps = [
    {
      id: 1,
      title: "Frontend Web Development",
      description: "Master modern web development with HTML, CSS, JavaScript, and React",
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cHJvZ3JhbW1pbmd8ZW58MHx8MHx8fDA%3D",
      level: "Beginner to Intermediate",
      duration: "12 weeks",
      progress: 75,
      progressColor: "bg-skill-blue",
      tags: ["HTML/CSS", "JavaScript", "React"],
      content: [
        {
          week: 1,
          title: "HTML Fundamentals",
          description: "Learn the building blocks of web pages",
          resources: [
            { type: "Video", title: "HTML Crash Course", url: "#" },
            { type: "Article", title: "HTML5 Semantic Elements", url: "#" },
            { type: "Practice", title: "Build Your First Webpage", url: "#" },
          ]
        },
        {
          week: 2,
          title: "CSS Basics",
          description: "Style your web pages",
          resources: [
            { type: "Video", title: "CSS Fundamentals", url: "#" },
            { type: "Article", title: "Flexbox vs Grid", url: "#" },
            { type: "Practice", title: "Styling Challenge", url: "#" },
          ]
        },
        {
          week: 3,
          title: "JavaScript Essentials",
          description: "Add interactivity to websites",
          resources: [
            { type: "Video", title: "JavaScript Basics", url: "#" },
            { type: "Article", title: "DOM Manipulation", url: "#" },
            { type: "Practice", title: "Interactive Website Elements", url: "#" },
          ]
        }
      ]
    },
    {
      id: 2,
      title: "Data Science Fundamentals",
      description: "Learn data analysis, visualization, and machine learning basics",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8ZGF0YSUyMHNjaWVuY2V8ZW58MHx8MHx8fDA%3D",
      level: "Intermediate",
      duration: "16 weeks",
      progress: 60,
      progressColor: "bg-skill-green",
      tags: ["Python", "Statistics", "ML"],
      content: [
        {
          week: 1,
          title: "Python for Data Science",
          description: "Learn Python basics for data analysis",
          resources: [
            { type: "Video", title: "Python Data Science Intro", url: "#" },
            { type: "Article", title: "NumPy and Pandas Basics", url: "#" },
            { type: "Practice", title: "Data Manipulation Exercise", url: "#" },
          ]
        },
        {
          week: 2,
          title: "Data Visualization",
          description: "Create insightful visualizations",
          resources: [
            { type: "Video", title: "Matplotlib & Seaborn", url: "#" },
            { type: "Article", title: "Data Visualization Best Practices", url: "#" },
            { type: "Practice", title: "Visualization Challenge", url: "#" },
          ]
        }
      ]
    },
    {
      id: 3,
      title: "UX/UI Design",
      description: "Create user-centered digital experiences from research to design",
      image: "https://images.unsplash.com/photo-1559028012-481c04fa702d?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8dWklMjBkZXNpZ258ZW58MHx8MHx8fDA%3D",
      level: "All Levels",
      duration: "10 weeks",
      progress: 85,
      progressColor: "bg-skill-purple",
      tags: ["User Research", "Figma", "UI"],
      content: [
        {
          week: 1,
          title: "User Research Fundamentals",
          description: "Learn how to understand user needs",
          resources: [
            { type: "Video", title: "User Research Methods", url: "#" },
            { type: "Article", title: "Creating User Personas", url: "#" },
            { type: "Practice", title: "User Interview Exercise", url: "#" },
          ]
        },
        {
          week: 2,
          title: "UI Design Principles",
          description: "Master the basics of visual design",
          resources: [
            { type: "Video", title: "UI Design Fundamentals", url: "#" },
            { type: "Article", title: "Color Theory for Designers", url: "#" },
            { type: "Practice", title: "Design a Simple Interface", url: "#" },
          ]
        }
      ]
    },
    {
      title: "Backend Development",
      description: "Build robust server-side applications and APIs",
      image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHNlcnZlcnxlbnwwfHwwfHx8MA%3D%3D",
      level: "Intermediate",
      duration: "14 weeks",
      progress: 0,
      progressColor: "bg-skill-blue",
      tags: ["Node.js", "Databases", "APIs"]
    },
    {
      title: "Mobile App Development",
      description: "Create native and cross-platform mobile applications",
      image: "https://images.unsplash.com/photo-1601784551446-20c9e07cdbdb?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bW9iaWxlJTIwYXBwfGVufDB8fDB8fHww",
      level: "Intermediate to Advanced",
      duration: "16 weeks",
      progress: 0,
      progressColor: "bg-skill-green",
      tags: ["React Native", "Swift", "Kotlin"]
    },
    {
      title: "DevOps & Cloud Computing",
      description: "Master deployment, infrastructure, and continuous integration",
      image: "https://images.unsplash.com/photo-1667372393119-3d4c48d07fc9?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8ZGV2b3BzfGVufDB8fDB8fHww",
      level: "Intermediate to Advanced",
      duration: "12 weeks",
      progress: 0,
      progressColor: "bg-skill-purple",
      tags: ["AWS", "Docker", "CI/CD"]
    }
  ];

  const handleViewRoadmap = (roadmap: RoadmapType) => {
    setSelectedRoadmap(roadmap);
    window.scrollTo(0, 0);
  };

  const handleBack = () => {
    setSelectedRoadmap(null);
    window.scrollTo(0, 0);
  };

  return (
    <div className="flex min-h-screen flex-col">
      <SkillKartNavigation />
      
      <main className="flex-1">
        {selectedRoadmap ? (
          <RoadmapDetail roadmap={selectedRoadmap} onBack={handleBack} />
        ) : (
          <div className="w-full py-12 md:py-24">
            <div className="container px-4 md:px-6">
              <div className="flex flex-col items-center justify-center space-y-4 text-center">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">Learning Roadmaps</h1>
                  <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                    Discover curated learning paths designed to help you master in-demand skills efficiently.
                  </p>
                </div>
              </div>
              <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 py-12 md:grid-cols-2 lg:grid-cols-3">
                {roadmaps.map((roadmap) => (
                  <RoadmapCard 
                    key={roadmap.id} 
                    {...roadmap} 
                    onViewRoadmap={() => handleViewRoadmap(roadmap)}
                  />
                ))}
              </div>
            </div>
          </div>
        )}
      </main>

      <Footer />
    </div>
  );
}

interface ResourceType {
  type: string;
  title: string;
  url: string;
}

interface ContentWeekType {
  week: number;
  title: string;
  description: string;
  resources: ResourceType[];
}

interface RoadmapType {
  id: number;
  title: string;
  description: string;
  image: string;
  level: string;
  duration: string;
  progress: number;
  progressColor: string;
  tags: string[];
  content: ContentWeekType[];
}

function RoadmapCard({
  title,
  description,
  image,
  level,
  duration,
  progress,
  progressColor,
  tags,
  onViewRoadmap
}: {
  title: string;
  description: string;
  image: string;
  level: string;
  duration: string;
  progress: number;
  progressColor: string;
  tags: string[];
  onViewRoadmap: () => void;
}) {
  return (
    <Card className="roadmap-card overflow-hidden">
      <div className="h-48 overflow-hidden">
        <img
          alt={title}
          className="w-full h-full object-cover"
          src={image}
        />
      </div>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent className="space-y-2">
        <div className="flex items-center justify-between">
          <span className="text-sm text-gray-500">{level}</span>
          <span className="text-sm font-medium">{duration}</span>
        </div>
        <div className="h-2 w-full bg-gray-100 rounded-full overflow-hidden">
          <div className={`h-full ${progressColor}`} style={{width: `${progress}%`}}></div>
        </div>
        <div className="flex items-center gap-2 pt-2 flex-wrap">
          {tags.map((tag, index) => (
            <span key={index} className="rounded-full bg-gray-100 px-2 py-1 text-xs">{tag}</span>
          ))}
        </div>
      </CardContent>
      <CardFooter>
        <Button className="w-full" onClick={onViewRoadmap}>View Roadmap</Button>
      </CardFooter>
    </Card>
  );
}

function RoadmapDetail({ roadmap, onBack }: { roadmap: RoadmapType, onBack: () => void }) {
  return (
    <div className="container px-4 md:px-6 py-12">
      <Button variant="outline" onClick={onBack} className="mb-6 flex items-center gap-2">
        <ArrowLeft className="h-4 w-4" />
        Back to Roadmaps
      </Button>
      
      <div className="space-y-6">
        <div className="flex flex-col md:flex-row gap-6">
          <div className="md:w-1/3">
            <div className="aspect-video overflow-hidden rounded-lg">
              <img 
                src={roadmap.image} 
                alt={roadmap.title} 
                className="w-full h-full object-cover" 
              />
            </div>
          </div>
          
          <div className="md:w-2/3 space-y-4">
            <h1 className="text-3xl font-bold">{roadmap.title}</h1>
            <p className="text-gray-500">{roadmap.description}</p>
            
            <div className="flex flex-wrap gap-4 py-2">
              <div className="bg-gray-100 px-4 py-2 rounded-md">
                <div className="text-sm text-gray-500">Level</div>
                <div className="font-medium">{roadmap.level}</div>
              </div>
              <div className="bg-gray-100 px-4 py-2 rounded-md">
                <div className="text-sm text-gray-500">Duration</div>
                <div className="font-medium">{roadmap.duration}</div>
              </div>
              <div className="flex-1 bg-gray-100 px-4 py-2 rounded-md">
                <div className="text-sm text-gray-500">Progress</div>
                <div className="h-2 w-full bg-gray-200 rounded-full overflow-hidden mt-2">
                  <div className={`h-full ${roadmap.progressColor}`} style={{width: `${roadmap.progress}%`}}></div>
                </div>
              </div>
            </div>
            
            <div className="flex flex-wrap gap-2">
              {roadmap.tags.map((tag, index) => (
                <span key={index} className="rounded-full bg-gray-100 px-3 py-1">{tag}</span>
              ))}
            </div>
            
            <div className="flex gap-2 pt-4">
              <Button className="gap-2">Start Learning</Button>
              <Button variant="outline">Customize Roadmap</Button>
            </div>
          </div>
        </div>
        
        <div className="mt-12">
          <h2 className="text-2xl font-bold mb-6">Weekly Learning Plan</h2>
          <div className="space-y-6">
            {roadmap.content.map((week) => (
              <Card key={week.week} className="overflow-hidden">
                <CardHeader className="bg-gray-50">
                  <div className="flex justify-between items-center">
                    <CardTitle>Week {week.week}: {week.title}</CardTitle>
                    <Button variant="outline" size="sm">Mark Complete</Button>
                  </div>
                  <CardDescription>{week.description}</CardDescription>
                </CardHeader>
                <CardContent className="pt-6">
                  <h4 className="font-semibold mb-4">Resources</h4>
                  <div className="space-y-4">
                    {week.resources.map((resource, index) => (
                      <div key={index} className="flex items-center gap-4 p-3 bg-gray-50 rounded-lg">
                        <div className="h-10 w-10 rounded bg-gray-200 flex items-center justify-center text-gray-600">
                          {resource.type === "Video" && "🎬"}
                          {resource.type === "Article" && "📄"}
                          {resource.type === "Practice" && "⚙️"}
                        </div>
                        <div className="flex-1">
                          <h5 className="font-medium">{resource.title}</h5>
                          <p className="text-sm text-gray-500">{resource.type}</p>
                        </div>
                        <Button variant="ghost" size="sm" asChild>
                          <a href={resource.url} target="_blank" rel="noopener noreferrer">
                            Access
                          </a>
                        </Button>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
