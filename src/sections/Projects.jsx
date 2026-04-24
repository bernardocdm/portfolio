import { Section } from "lucide-react";
import { AnimatedBorderButton } from "../components/animatedBorderButton";
import { ArrowUpRight } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import { useTranslation } from "react-i18next";

const projects = [
  {
    title:"Barber Flow",
    description:"projects.items.barberFlow.description",
    image:"/projects/barberflow.png",
    tags:["PHP","Laravel", "Blade", "Tailwind", "Livewire"],
    link:"#",
    github:"#",
  },
  {
    title:"Drive Hub",
    description:"projects.items..description",
    image:"/projects/drivehub.jpeg",
    tags:["React", "Typescript", "CSS"],
    link:"#",
    github:"#",
  },
  {
    title:"Spotify Clone",
    description:"projects.items.spotifyClone.description",
    // image:"",
    tags:["Node.js", "Express"],
    link:"#",
    github:"#",
  },
  {
    title:"Workout Tracker",
    description:"projects.items.workoutTracker.description",
    // image:"",
    tags:["NodeJS", "ReactJS", "Express", "Tailwind"],
    link:"#",
    github:"#",
  },
];

export default function Project() {
  const{ t } = useTranslation();

  return (
    <section id="projects" className="py-32 relative overflow-hidden">
      {/* Bg glows */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 left-0 w-64 h-64 bg-highlight/5 rounded-full blur-3xl" />
      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mx-auto max-w-3xl mb-16">
          <span className="text-white text-sm font-medium tracking-wider uppercase animate-fade-in">
             {t("projects.label")}
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 animate-fade-in animation-delay-100 text-secondary-foreground">
             {t("projects.title")} 
            <span className="font-serif italic font-normal text-white">  {t("projects.titleAccent")}</span>
          </h2>

        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-2 gap-8">
          {projects.map((project, idx) => (
            <div
              key={idx} 
              className="group glass rounded-2xl overflow-hidden animate-fade-in md:row-span-1" 
              style={{ animationDelay: `${(idx + 1)* 100}ms` }}
              >
            {/* image  */}
            <div className="relative overflow-hidden aspect-video">
              <img 
                src={project.image}     
                alt={project.title} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />

              <div className="absolute inset-0 bg-linear-to-t from-card via-card/50 to-transparent opacity-60"/>
              {/* overlay */}
              <div className="absolute inset-0 flex items-center justify-center gap-4">               
                <p className="font-bold lowercase">{t(projects.description)}</p>
                <a> <FaGithub className="" /> </a>
              </div>
            </div>
          </div>
          ))}
        </div>

      </div>
    </section>
  );
}
