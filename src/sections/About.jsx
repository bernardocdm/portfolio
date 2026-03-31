import {
  MonitorSmartphone,
  Boxes,
  Code2,
  Server,
  Gauge,
  FileCode2,
} from "lucide-react";

const capabilities = [
  {
    icon: Code2,
    title: "Fullstack Development",
    description: "Creating modern, interactive web applications with clean and maintainable code. And designing robust server-side solutions and APIs that support scalable applications.",
  },
  {
    icon: FileCode2,
    title: "Clean Code",
    description: "Writing readable, consistent, and maintainable code that is easy to extend.",
  },
  {
    icon: MonitorSmartphone,
    title: "Responsive Design",
    description: "Building interfaces that look and feel great across mobile, tablet, and desktop.",
  },
    {
    icon: Boxes,
    title: "Component Architecture",
    description: "Structuring reusable components that keep projects scalable and organized.",
  },
];

export const About = () => {
  return (
    <section id="about" className="py-32 relative overflow-hidden">
      <div className="container mx-auto px-6 relativo z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* LEFT  */}
          <div className="space-y-8">
            <div className="animate-fade-in">
              <span className=" font-medium tracking-wider uppercase">About me</span>
            </div>

            <h2 className="text-4xl text-primary md:text-5xl font-bold leading-tight animate-fade-in animation-delay-200">
              Building 
              <span className="font-serif italic font-normal text-white"> the Future</span>
            </h2>

            <div className="space-y-4 text-muted-foreground animate-fade-in">
              <p> I'm a passionate software engineer with over 5 years of
                experience crafting digital products that make a difference. My
                journey started with a curiosity for how things work on the web,
                and it has evolved into a deep expertise in modern frontend
                technologies.</p>
              <p> When I'm not coding, you'll find me exploring new technologies,
                contributing to open-source projects, or sharing knowledge with
                the developer community.</p>
            </div>
          </div>

          {/* RIGHT  */}
          <div className="grid sm:grid-cols-2 gap-6">
            {capabilities.map((item, idx) => (
              <div
                key={idx}
                className="glass p-6 rounded-2xl animate-fade-in"
                style={{ animationDelay: `${(idx + 1) * 100}ms` }}
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 hover:bg-primary/20">
                  <item.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  ); 
};

