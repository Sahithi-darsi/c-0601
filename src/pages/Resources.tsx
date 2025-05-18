
import { useState } from "react";
import { SkillKartNavigation } from "@/components/SkillKartNavigation";
import Footer from "@/components/landing/Footer";
import { BookOpen, BarChart2, Layers, Smartphone, Cloud, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function Resources() {
  const [activeCategory, setActiveCategory] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState<string>("");

  const categories = [
    { id: "all", name: "All Resources" },
    { id: "articles", name: "Articles & Tutorials" },
    { id: "videos", name: "Video Courses" },
    { id: "interactive", name: "Interactive Lessons" },
    { id: "projects", name: "Projects" }
  ];

  const resources = [
    {
      id: 1,
      title: "Web Development Fundamentals", 
      description: "Essential resources for learning HTML, CSS, and JavaScript",
      type: "Articles & Tutorials",
      category: "articles",
      icon: BookOpen,
      items: [
        { id: 101, title: "HTML5 Structure and Semantics", type: "Article", duration: "15 min read" },
        { id: 102, title: "CSS Flexbox Complete Guide", type: "Tutorial", duration: "30 min read" },
        { id: 103, title: "JavaScript DOM Manipulation", type: "Reference", duration: "20 min read" }
      ]
    },
    {
      id: 2,
      title: "Data Science Basics", 
      description: "Introduction to data analysis, Python, and statistics",
      type: "Video Courses",
      category: "videos",
      icon: BarChart2,
      items: [
        { id: 201, title: "Python for Data Analysis", type: "Video Course", duration: "2.5 hours" },
        { id: 202, title: "Statistical Analysis Fundamentals", type: "Video Series", duration: "3 hours" },
        { id: 203, title: "Data Visualization with Matplotlib", type: "Workshop", duration: "1.5 hours" }
      ]
    },
    {
      id: 3,
      title: "UX/UI Design Principles", 
      description: "Learn user-centered design and prototyping",
      type: "Interactive Lessons",
      category: "interactive",
      icon: Layers,
      items: [
        { id: 301, title: "User Research Methods", type: "Interactive Tutorial", duration: "45 min" },
        { id: 302, title: "Wireframing Basics", type: "Practice Exercise", duration: "1 hour" },
        { id: 303, title: "Color Theory in UI Design", type: "Interactive Guide", duration: "30 min" }
      ]
    },
    {
      id: 4,
      title: "Mobile Development", 
      description: "Build iOS and Android applications",
      type: "Project-Based Learning",
      category: "projects",
      icon: Smartphone,
      items: [
        { id: 401, title: "Build a Weather App", type: "Project", duration: "5 hours" },
        { id: 402, title: "Photo Sharing App Tutorial", type: "Step-by-Step Guide", duration: "8 hours" },
        { id: 403, title: "Mobile App UI Implementation", type: "Coding Project", duration: "6 hours" }
      ]
    },
    {
      id: 5,
      title: "DevOps & Cloud Computing", 
      description: "Infrastructure, deployment, and scalability",
      type: "Hands-on Labs",
      category: "interactive",
      icon: Cloud,
      items: [
        { id: 501, title: "AWS Fundamentals", type: "Lab Exercise", duration: "2 hours" },
        { id: 502, title: "Docker Container Basics", type: "Hands-on Tutorial", duration: "3 hours" },
        { id: 503, title: "CI/CD Pipeline Setup", type: "Guided Exercise", duration: "4 hours" }
      ]
    },
    {
      id: 6,
      title: "Machine Learning", 
      description: "AI algorithms, neural networks, and practical applications",
      type: "Guided Projects",
      category: "projects",
      icon: BookOpen,
      items: [
        { id: 601, title: "Image Classification with TensorFlow", type: "Project", duration: "5 hours" },
        { id: 602, title: "Natural Language Processing Basics", type: "Tutorial", duration: "4 hours" },
        { id: 603, title: "Regression Analysis for Predictions", type: "Guided Project", duration: "3 hours" }
      ]
    }
  ];

  const [expandedResource, setExpandedResource] = useState<number | null>(null);

  // Filter resources based on category and search query
  const filteredResources = resources.filter(resource => {
    const matchesCategory = activeCategory === 'all' || resource.category === activeCategory;
    const matchesSearch = searchQuery === '' || 
      resource.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      resource.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  // Toggle resource expansion
  const toggleResource = (resourceId: number) => {
    setExpandedResource(expandedResource === resourceId ? null : resourceId);
  };

  const getIcon = (iconName: string) => {
    switch(iconName) {
      case 'BookOpen': return <BookOpen className="h-5 w-5 text-skill-purple" />;
      case 'BarChart2': return <BarChart2 className="h-5 w-5 text-skill-purple" />;
      case 'Layers': return <Layers className="h-5 w-5 text-skill-purple" />;
      case 'Smartphone': return <Smartphone className="h-5 w-5 text-skill-purple" />;
      case 'Cloud': return <Cloud className="h-5 w-5 text-skill-purple" />;
      default: return <BookOpen className="h-5 w-5 text-skill-purple" />;
    }
  };

  return (
    <div className="flex min-h-screen flex-col">
      <SkillKartNavigation />
      
      <main className="flex-1 container px-4 md:px-6 py-12">
        <div className="space-y-8">
          <div className="text-center space-y-4">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Learning Resources</h1>
            <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl">
              Discover curated resources to help you master new skills and advance your learning journey.
            </p>
          </div>

          <div className="flex flex-col md:flex-row gap-6 items-center justify-between">
            {/* Search Bar */}
            <div className="relative w-full md:w-80">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-500" />
              <Input
                type="search"
                placeholder="Search resources..."
                className="pl-10"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>

            {/* Category Tabs */}
            <Tabs 
              defaultValue="all" 
              className="w-full"
              value={activeCategory}
              onValueChange={setActiveCategory}
            >
              <TabsList className="w-full overflow-auto">
                {categories.map(category => (
                  <TabsTrigger 
                    key={category.id} 
                    value={category.id}
                    className="whitespace-nowrap"
                  >
                    {category.name}
                  </TabsTrigger>
                ))}
              </TabsList>
            </Tabs>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredResources.map((resource) => (
              <Card 
                key={resource.id} 
                className="border rounded-lg overflow-hidden hover:shadow-md transition-shadow"
              >
                <div className="p-6 space-y-4">
                  <div className="flex items-start justify-between">
                    <div className="p-2 w-10 h-10 rounded-lg bg-skill-purple-light flex items-center justify-center">
                      {getIcon(resource.icon.name)}
                    </div>
                    <span className="text-sm text-gray-400">{resource.type}</span>
                  </div>
                  
                  <div className="space-y-2">
                    <h3 className="text-xl font-semibold">{resource.title}</h3>
                    <p className="text-gray-500">{resource.description}</p>
                  </div>
                  
                  <Button 
                    variant="ghost" 
                    className="text-skill-purple font-medium p-0 h-auto hover:bg-transparent hover:text-skill-purple/80"
                    onClick={() => toggleResource(resource.id)}
                  >
                    {expandedResource === resource.id ? "Hide Resources" : "Browse Resources"} →
                  </Button>
                  
                  {expandedResource === resource.id && (
                    <div className="mt-4 pt-4 border-t space-y-3">
                      {resource.items.map(item => (
                        <div key={item.id} className="flex items-center justify-between p-3 bg-gray-50 rounded-md">
                          <div>
                            <h4 className="font-medium">{item.title}</h4>
                            <p className="text-xs text-gray-500">{item.type} • {item.duration}</p>
                          </div>
                          <Button size="sm" variant="ghost" className="h-8">Access</Button>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </Card>
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
