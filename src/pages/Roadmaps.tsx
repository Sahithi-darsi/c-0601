
import { SkillKartNavigation } from "@/components/SkillKartNavigation";
import Footer from "@/components/landing/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

export default function Roadmaps() {
  const roadmaps = [
    {
      title: "Frontend Web Development",
      description: "Master modern web development with HTML, CSS, JavaScript, and React",
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cHJvZ3JhbW1pbmd8ZW58MHx8MHx8fDA%3D",
      level: "Beginner to Intermediate",
      duration: "12 weeks",
      progress: 75,
      progressColor: "bg-skill-blue",
      tags: ["HTML/CSS", "JavaScript", "React"]
    },
    {
      title: "Data Science Fundamentals",
      description: "Learn data analysis, visualization, and machine learning basics",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8ZGF0YSUyMHNjaWVuY2V8ZW58MHx8MHx8fDA%3D",
      level: "Intermediate",
      duration: "16 weeks",
      progress: 60,
      progressColor: "bg-skill-green",
      tags: ["Python", "Statistics", "ML"]
    },
    {
      title: "UX/UI Design",
      description: "Create user-centered digital experiences from research to design",
      image: "https://images.unsplash.com/photo-1559028012-481c04fa702d?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8dWklMjBkZXNpZ258ZW58MHx8MHx8fDA%3D",
      level: "All Levels",
      duration: "10 weeks",
      progress: 85,
      progressColor: "bg-skill-purple",
      tags: ["User Research", "Figma", "UI"]
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

  return (
    <div className="flex min-h-screen flex-col">
      <SkillKartNavigation />
      
      <main className="flex-1">
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
              {roadmaps.map((roadmap, index) => (
                <RoadmapCard key={index} {...roadmap} />
              ))}
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}

function RoadmapCard({
  title,
  description,
  image,
  level,
  duration,
  progress,
  progressColor,
  tags
}: {
  title: string;
  description: string;
  image: string;
  level: string;
  duration: string;
  progress: number;
  progressColor: string;
  tags: string[];
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
        <Button className="w-full">View Roadmap</Button>
      </CardFooter>
    </Card>
  );
}
