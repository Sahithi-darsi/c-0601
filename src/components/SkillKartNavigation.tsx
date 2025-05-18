
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { 
  Search, 
  BookOpen, 
  Compass, 
  Users, 
  User, 
  Bell, 
  ChevronDown,
  BarChart2,
  Settings,
  MessageSquare
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger
} from "@/components/ui/navigation-menu";
import { 
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger
} from "@/components/ui/dropdown-menu";
import { cn } from "@/lib/utils";
import { useToast } from "@/components/ui/use-toast";

export function SkillKartNavigation() {
  const [isOpen, setIsOpen] = useState(false);
  const { toast } = useToast();
  const location = useLocation();

  const handleCommunityClick = (item: string) => {
    toast({
      title: "Coming Soon",
      description: `The ${item} feature will be available soon!`,
    });
  };

  return (
    <header className="sticky top-0 z-40 w-full border-b bg-background">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-6">
          <Link to="/" className="flex items-center space-x-2">
            <div className="h-8 w-8 rounded-full bg-skill-purple flex items-center justify-center">
              <span className="font-bold text-white">SK</span>
            </div>
            <span className="font-bold text-xl">SkillKart</span>
          </Link>

          <NavigationMenu className="hidden md:block">
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger>Roadmaps</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2">
                    <li className="row-span-3">
                      <Link to="/roadmaps">
                        <a
                          className="flex h-full w-full select-none flex-col justify-end rounded-md bg-skill-purple-light p-6 no-underline outline-none focus:shadow-md"
                        >
                          <div className="mb-2 mt-4 text-lg font-medium text-skill-purple">
                            Browse All Roadmaps
                          </div>
                          <p className="text-sm leading-tight text-muted-foreground">
                            Explore curated learning paths for various skills and career goals.
                          </p>
                        </a>
                      </Link>
                    </li>
                    <li>
                      <Link to="/roadmaps?category=web">
                        <a
                          className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                        >
                          <div className="text-sm font-medium leading-none">Web Development</div>
                          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                            Frontend, Backend, and Full Stack paths
                          </p>
                        </a>
                      </Link>
                    </li>
                    <li>
                      <Link to="/roadmaps?category=data">
                        <a
                          className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                        >
                          <div className="text-sm font-medium leading-none">Data Science</div>
                          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                            Analytics, Machine Learning, and AI
                          </p>
                        </a>
                      </Link>
                    </li>
                    <li>
                      <Link to="/roadmaps?category=design">
                        <a
                          className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                        >
                          <div className="text-sm font-medium leading-none">Design</div>
                          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                            UI/UX, Graphic Design, and Product Design
                          </p>
                        </a>
                      </Link>
                    </li>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuTrigger>Community</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid gap-3 p-4 md:w-[400px] md:grid-cols-2">
                    <li>
                      <button
                        className="block w-full text-left select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                        onClick={() => handleCommunityClick("Forums")}
                      >
                        <div className="text-sm font-medium leading-none">Forums</div>
                        <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                          Discuss topics with the SkillKart community
                        </p>
                      </button>
                    </li>
                    <li>
                      <button
                        className="block w-full text-left select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                        onClick={() => handleCommunityClick("Study Groups")}
                      >
                        <div className="text-sm font-medium leading-none">Study Groups</div>
                        <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                          Join or create learning groups
                        </p>
                      </button>
                    </li>
                    <li>
                      <button
                        className="block w-full text-left select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                        onClick={() => handleCommunityClick("Mentorship")}
                      >
                        <div className="text-sm font-medium leading-none">Mentorship</div>
                        <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                          Connect with mentors in your field
                        </p>
                      </button>
                    </li>
                    <li>
                      <button
                        className="block w-full text-left select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                        onClick={() => handleCommunityClick("Events")}
                      >
                        <div className="text-sm font-medium leading-none">Events</div>
                        <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                          Workshops, webinars, and meetups
                        </p>
                      </button>
                    </li>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link to="/resources">
                  <Button 
                    variant="ghost" 
                    className={cn("text-base group", location.pathname === "/resources" && "bg-accent")}
                  >
                    Resources
                  </Button>
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link to="/dashboard">
                  <Button 
                    variant="ghost" 
                    className={cn("text-base group", location.pathname === "/dashboard" && "bg-accent")}
                  >
                    Dashboard
                  </Button>
                </Link>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>

        <div className="flex items-center gap-4">
          <form className="hidden md:block relative w-64">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input
              type="search"
              placeholder="Search roadmaps, skills..."
              className="w-full bg-background pl-8 md:w-64"
            />
          </form>

          <div className="hidden md:flex items-center gap-4">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="icon" className="rounded-full">
                  <Bell className="h-5 w-5" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-[300px]">
                <div className="flex items-center justify-between p-2 border-b">
                  <p className="font-semibold">Notifications</p>
                  <Button variant="ghost" size="sm">Mark all as read</Button>
                </div>
                <div className="py-2 text-center text-sm text-gray-500">
                  No notifications yet
                </div>
              </DropdownMenuContent>
            </DropdownMenu>
            
            <Link to="/login">
              <Button variant="outline">Log in</Button>
            </Link>
            
            <Link to="/signup">
              <Button>Get Started</Button>
            </Link>
          </div>

          <Button 
            variant="ghost" 
            size="icon" 
            className="md:hidden" 
            onClick={() => setIsOpen(!isOpen)}
          >
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor" 
              className={cn("h-6 w-6 transition-transform", isOpen && "transform rotate-90")}
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} 
              />
            </svg>
          </Button>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden border-t py-4 px-6 bg-background">
          <nav className="flex flex-col gap-4">
            <Link to="/roadmaps" className="flex items-center gap-2 py-2 -ml-2 px-2 rounded-md hover:bg-accent">
              <Compass className="h-5 w-5" /> 
              <span>Explore Roadmaps</span>
            </Link>
            <button 
              className="flex items-center gap-2 py-2 -ml-2 px-2 rounded-md hover:bg-accent text-left"
              onClick={() => handleCommunityClick("Community")}
            >
              <Users className="h-5 w-5" /> 
              <span>Community</span>
            </button>
            <Link to="/resources" className="flex items-center gap-2 py-2 -ml-2 px-2 rounded-md hover:bg-accent">
              <BookOpen className="h-5 w-5" /> 
              <span>Resources</span>
            </Link>
            <Link to="/dashboard" className="flex items-center gap-2 py-2 -ml-2 px-2 rounded-md hover:bg-accent">
              <BarChart2 className="h-5 w-5" /> 
              <span>Dashboard</span>
            </Link>
            <div className="border-t my-2"></div>
            <Link to="/login" className="flex items-center gap-2 py-2 -ml-2 px-2 rounded-md hover:bg-accent">
              <User className="h-5 w-5" /> 
              <span>Log in</span>
            </Link>
            <Link to="/signup">
              <Button className="w-full">Get Started</Button>
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
