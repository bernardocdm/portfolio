import { Section } from "lucide-react";
import { AnimatedBorderButton } from "../components/animatedBorderButton";
import { ArrowUpRight } from "lucide-react";
import { FaGithub } from "react-icons/fa";

const projects = [
  {
    title:"Barber Flow",
    description:"O Barber Flow é uma solução completa para o controle financeiro e operacional do seu estabelecimento. Com ele, você acompanha de forma detalhada o faturamento diário, semanal e mensal, além de visualizar os ganhos individuais de cada barbeiro. O software permite diferenciar cortes pagos avulsamente daqueles realizados por clientes que aderiram ao plano de mensalidade, garantindo uma visão clara sobre a lucratividade de cada modalidade.",
    // image:"",
    tags:["PHP","Laravel", "Blade", "Tailwind", "Livewire"],
    link:"#",
    github:"#",
  },
  {
    title:"Spotify Clone",
    description:"First project using react. A frontend project focusing on remaking the layout of the Spotify site, saving all information on localStorage.",
    // image:"",
    tags:["React", "Typescript", "CSS"],
    link:"#",
    github:"#",
  },
  {
    title:"Taskify Node",
    description:"API de gerenciamento de tarefas desenvolvida em Node.js, aplicando conceitos fundamentais como criação de servidor HTTP, manipulação de rotas, leitura e escrita de arquivos, e tratamento de requisições e respostas.",
    // image:"",
    tags:["Node.js", "Express"],
    link:"#",
    github:"#",
  },
  {
    title:"Workout Tracker",
    description:"CRUD for workout sessions, date-time manipulation. This fullstack project is not just about taking in user-generated notes, but rather, about letting users create their own workout schedules with their own exercises and then go through them, checking the ones they’ve done, and the ones they haven't. Making sure you also give them the space to add custom notes, with remarks about how the exercise in question felt and if they want to tweak it in the future.",
    // image:"",
    tags:["NodeJS", "ReactJS", "Express", "Tailwind"],
    link:"#",
    github:"#",
  },
];

export default function Project() {
  return (
    <section id="projects" className="py-32 relative overflow-hidden">
      {/* Bg glows */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 left-0 w-64 h-64 bg-highlight/5 rounded-full blur-3xl" />
      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mx-auto max-w-3xl mb-16">
          <span className="text-white text-sm font-medium tracking-wider uppercase animate-fade-in">
            My Projects
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 animate-fade-in animation-delay-100 text-secondary-foreground">
            Be 
            <span className="font-serif italic font-normal text-white"> different</span>
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
                <p className="font-bold lowercase">In progress</p>
                <a> <ArrowUpRight /></a>
                <a> <FaGithub /> </a>
              </div>
            </div>
          </div>
          ))}
        </div>

      </div>
    </section>
  );
}
