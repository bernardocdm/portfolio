import { Button } from "../components/Button";
import { AnimatedBorderButton } from "../components/animatedBorderButton";
import {
  ArrowRight,
  ChevronDown,
  Download,
} from "lucide-react";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import DownloadCV from "../components/DownloadCV";

/* eslint-disable react-hooks/purity */
export default function Hero() {
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

      {/* GREEN DOTS  */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(30)].map((_, i) => (
            <div
              key={i}
              className="absolute w-3 h-3 rounded-sm  opacity-60"
              style={{
                backgroundColor: "#20B2A6",
                left: `${Math.random() * 100}%`,
                top:`${Math.random() * 100}%`,
                animation: `slow-drift ${
                  15 + Math.random() * 20
                }s ease-in-out infinite`,
                animationDelay: `${Math.random() * 5}s`,
              }}
            />
          ))}
      </div>


      {/* CONTENT */}
      <div className="container mx-auto px-6 pt-32 pb-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* LEFT COLUMN - TEXT CONTENT  */}
          <div className="space-y-8">
            <div className="animate-fade-in">
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-sm">
                <span className="w-2 h-2 bg-primary rounded-full animate-pulse animation-delay-200" />
                SOFTWARE ENGINEER - FULLSTACK DEVELOPER CURRENTLY LEARNING REACT + NODE JS 
              </span>
            </div>
            {/* HEADLINE  */}
            <div className="space-y-4">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight animate-fade-in animation-delay-200">
                Software <span className="text-primary glow-text">developer</span>
                <br />
                learning with
                <br />
                <span className="font-serif italic font-normal text-white">
                  precision
                </span>
              </h1>
              <p className="text-lg text-muted-foreground max-w-lg animate-fade-in animation-delay-400">
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.
              </p>
            </div>

            {/* BUTTONS REACH ME  */}
            <div className="flex flex-wrap gap-4 animate-fade-in animation-delay-300">
              <Button size="lg">
                Contact me
              </Button>

              <DownloadCV />
            </div>

            {/* SOCIAL LINKS */}
            <div className="flex items-center gap-4 animate-fade-in animation-delay-400">
              <span className="text-sm text-muted-foreground">How to reach me: </span>
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
                  {<social.icon className="w-5 h-5" />}
                </a>
              ))}
            </div>
          </div>
          {/* RIGHT COLUMN - PROFILE IMAGE  */}
        </div>
      </div>
    </section>
  );
}
