
import { SkillKartNavigation } from "@/components/SkillKartNavigation";
import Footer from "@/components/landing/Footer";

export default function Resources() {
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
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ResourceCard 
              title="Web Development Fundamentals" 
              description="Essential resources for learning HTML, CSS, and JavaScript"
              type="Articles & Tutorials"
              icon="BookOpen"
            />
            <ResourceCard 
              title="Data Science Basics" 
              description="Introduction to data analysis, Python, and statistics"
              type="Video Courses"
              icon="BarChart2"
            />
            <ResourceCard 
              title="UX/UI Design Principles" 
              description="Learn user-centered design and prototyping"
              type="Interactive Lessons"
              icon="Layers"
            />
            <ResourceCard 
              title="Mobile Development" 
              description="Build iOS and Android applications"
              type="Project-Based Learning"
              icon="Smartphone"
            />
            <ResourceCard 
              title="DevOps & Cloud Computing" 
              description="Infrastructure, deployment, and scalability"
              type="Hands-on Labs"
              icon="Cloud"
            />
            <ResourceCard 
              title="Machine Learning" 
              description="AI algorithms, neural networks, and practical applications"
              type="Guided Projects"
              icon="Brain"
            />
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}

function ResourceCard({ title, description, type, icon }: { title: string, description: string, type: string, icon: string }) {
  return (
    <div className="border rounded-lg p-6 space-y-4 hover:shadow-md transition-shadow">
      <div className="p-2 w-10 h-10 rounded-lg bg-skill-purple-light flex items-center justify-center">
        <div className="h-5 w-5 text-skill-purple" />
      </div>
      <h3 className="text-xl font-semibold">{title}</h3>
      <p className="text-gray-500">{description}</p>
      <div className="flex items-center text-sm text-gray-400">
        <span>{type}</span>
      </div>
      <button className="text-skill-purple font-medium hover:underline">Browse Resources →</button>
    </div>
  );
}
