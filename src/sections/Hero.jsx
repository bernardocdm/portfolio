import { Button } from "../components/Button";
import {
  ArrowRight,
  ChevronDown,
  Download,
} from "lucide-react";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import DownloadCV from "../components/DownloadCV";
import { FaHtml5,
  FaCss3Alt,
  FaReact,
  FaNodeJs,
  FaGitAlt,
  FaJava,
  FaLaravel,
} from "react-icons/fa";

import {
  SiPostgresql,
  SiVercel,
  SiTailwindcss,
} from "react-icons/si";
import { useTranslation } from "react-i18next";

const skills = [
  { name: "HTML", icon: FaHtml5 },
  { name: "CSS", icon: FaCss3Alt },
  { name: "React", icon: FaReact },
  { name: "Node.js", icon: FaNodeJs },
  { name: "PostgreSQL", icon: SiPostgresql },
  { name: "Vercel", icon: SiVercel },
  { name: "Tailwind CSS", icon: SiTailwindcss },
  { name: "Git", icon: FaGitAlt },
  { name: "Java", icon: FaJava },
  { name: "Laravel", icon: FaLaravel },
]

export default function Hero() {
  const { t } = useTranslation(); 

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      <div className="absolute inset-0">
        <img 
          src={null} 
          alt="Hero image" 
          className="w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-linear-to-b from-background/20 via-background/80 to-background"></div>
      </div>



      {/* CONTENT */}
      <div className="container mx-auto px-6 pt-32 pb-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* LEFT COLUMN - TEXT CONTENT  */}
          <div className="space-y-8">
            <div className="animate-fade-in">
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-sm">
                <span className="w-2 h-2 bg-primary rounded-full animate-pulse animation-delay-200" />
                {t("hero.first")}
              </span>
            </div>
            {/* HEADLINE  */}
            <div className="space-y-4">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight animate-fade-in animation-delay-200">
                {t("hero.titleStart")} <span className="text-primary glow-text">{t("hero.developer")}</span>
              </h1>
              <p className="text-lg text-muted-foreground max-w-lg animate-fade-in animation-delay-400">
                {t("hero.introduce")}
              </p>
            </div>

            {/* BUTTONS REACH ME  */}
            <div className="flex flex-wrap gap-4 animate-fade-in animation-delay-300">
              <Button size="lg">
                {t("hero.contact")}
              </Button>

              <DownloadCV />
            </div>

            {/* SOCIAL LINKS */}
            <div className="flex items-center gap-4 animate-fade-in animation-delay-400">
              <span className="text-xl text-muted-foreground">{t("hero.reach")}</span>
              {[
                { icon: FaGithub, href: "https://github.com/bernardocdm" },
                { icon: FaLinkedin, href: "https://www.linkedin.com/in/bernardocdm/" },
                { icon: FaInstagram, href: "https://www.instagram.com/bernardo_cdm/" },
              ].map((social, idx) => (
                <a
                  key={idx}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-full glass hover:bg-primary/10 hover:text-primary transition-all duration-300"
                >
                  {<social.icon className="w-6 h-6" />}
                </a>
              ))}
            </div>
          </div>
          {/* RIGHT COLUMN - PROFILE IMAGE  */}
          <div className="relative animation-delay-300">
          {/* PROFILE IMAGE  */}
            <div className="relative mx-auto">
              <div
                className="absolute inset-0 
              rounded-full bg-linear-to-br 
              from-primary/30 via-transparent 
              to-primary/10 blur-2xl animate-pulse"
              />
              <div className="relative glass rounded-full p-2 glow-border">
                <img 
                  src="/profile-photo.jpg" 
                  alt="Bernardo Carvalho" 
                  className="w-full max-w-140px sm:max-w-160px md:max-w-200px aspect-square h-200 object-cover rounded-full border-2 border-border hover:border-primary/50 transition-all duration-1000 animate-float"
                  />

                {/* FLOATING BADGE  */}
                <div className="absolute bottom-[10%] right-0 glass rounded-xl px-4 py-2">
                  <div className="flex items-center gap-3">
                    < div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"/> 
                    <span className="text-sm font-medium">{t("hero.work")}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* SKILLS SECTION  */}
        <div className="mt-20 animate-fade-in animation-delay-600">
          <div className="flex flex-col items-center">
            <span className="text-sm text-center text-white font-medium tracking-wider uppercase animate-fade-in mb-4"> {t("hero.stack")}</span>
            <h2 className="text-5xl text-secondary-foreground font-bold mb-6 text-center">{t("hero.technologies")} 
              <span className="text-white font-serif italic font-normal"> {t("hero.stacksec")}</span>
            </h2>
          </div>
          <div className="relative overflow-hidden">
            <div className="flex animate-marquee">
              {[...skills, ...skills].map((skill, idx) => {
                const Icon = skill.icon;
                return (
                  <div 
                    key={idx} 
                    className="shrink-0 px-12 py-12 hover:text-primary inline-flex flex-col items-center gap-2 transition-all duration-300 ease-in-out hover:scale-110">
                    <Icon className="text-5xl" />
                    <span className="text-sm ">{skill.name}</span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
