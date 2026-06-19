import { ArrowUpRight, ExternalLink } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import { useTranslation } from "react-i18next";

const projects = [
  {
    title:"Lumap",
    description:"projects.items.spotifyClone.description",
    // image:"",
    tags:["React", "Typescript","Tailwind","Node.js", "Nest.js","Postgres", "Docker"],
    github:"#",
  },
  {
    title:"Barber Flow",
    description:"projects.items.barberFlow.description",
    image:"/projects/barberflow.png",
    tags:["PHP","Laravel", "Blade", "Tailwind", "Livewire"],
    github:"https://github.com/bernardocdm/BarberFlow",
    demo: "http://barberflowtecnol1.hospedagemdesites.ws/login",
  },
  {
    title:"Drive Hub",
    description:"projects.items.driveHub.description",
    image:"/projects/drivehub.jpeg",
    tags:["React", "Tailwind", "Springboot"],
    github:"https://github.com/bernardocdm/sistema-aluguel-de-carros",
  },
  {
    title:"Sist Moeda Estudantil",
    description:"projects.items.workoutTracker.description",
    // image:"",
    tags:["React", "Springboot", "Tailwind","Postgres" ,"Docker"],
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
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, idx) => (
            <div
              key={idx}
              className="group glass rounded-2xl overflow-hidden border border-border hover:border-primary/40 transition-colors duration-300 animate-fade-in"
              style={{ animationDelay: `${(idx + 1) * 100}ms` }}
            >
              {/* Image + hover overlay */}
              <div className="relative overflow-hidden aspect-video bg-surface">
                {project.image && (
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                )}

                {/* Hover overlay */}
                <div className="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center gap-5 p-6">
                  <p className="text-sm text-center text-white/85 leading-relaxed line-clamp-4">
                    {t(project.description)}
                  </p>
                  <div className="flex items-center gap-3">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/10 hover:bg-primary/20 border border-white/20 hover:border-primary text-sm font-medium text-white hover:text-primary transition-all duration-200"
                    >
                      <FaGithub size={16} />
                      GitHub
                    </a>
                    {project.demo && (
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-primary/20 hover:bg-primary/40 border border-primary/50 hover:border-primary text-sm font-medium text-primary transition-all duration-200"
                      >
                        <ExternalLink size={16} />
                        Live Demo
                      </a>
                    )}
                  </div>
                </div>
              </div>

              {/* Card footer */}
              <div className="p-5 flex flex-col gap-3">
                <div className="flex items-center justify-between">
                  <h3 className="font-semibold text-foreground">{project.title}</h3>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${project.title} GitHub`}
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    <ArrowUpRight size={18} />
                  </a>
                </div>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs px-2.5 py-1 bg-primary/10 text-primary rounded-full border border-primary/20"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
