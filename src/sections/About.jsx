import {
  MonitorSmartphone,
  Boxes,
  Code2,
  Server,
  Gauge,
  FileCode2,
} from "lucide-react";
import { useTranslation } from "react-i18next";

const capabilities = [
  {
    icon: Code2,
    title: "Fullstack Development",
    description: "about.capabilities.fullstack.description",
  },
  {
    icon: FileCode2,
    title: "Clean Code",
    description: "about.capabilities.cleanCode.description",
  },
  {
    icon: MonitorSmartphone,
    title: "Responsive Design",
    description: "about.capabilities.responsive.description",
  },
    {
    icon: Boxes,
    title: "Component Architecture",
    description: "about.capabilities.architecture.description",
  },
];

export const About = () => {
  const { t } = useTranslation();
  return (
    <section id="about" className="py-32 relative overflow-hidden">
      <div className="container mx-auto px-6 relativo z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* LEFT  */}
          <div className="space-y-8">
            <div className="animate-fade-in">
              <span className=" font-medium tracking-wider uppercase">{t("about.label")}</span>
            </div>

            <h2 className="text-4xl text-primary md:text-5xl font-bold leading-tight animate-fade-in animation-delay-200">
              {t("about.title")} 
              <span className="font-serif italic font-normal text-white">{" " }
              {t("about.titleAccent")}</span>
            </h2>

            <div className="space-y-4 text-muted-foreground animate-fade-in">
              <p>{t("about.paragraph1")}</p>
              <p>{t("about.paragraph2")}</p>
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
                <h3 className="text-lg font-semibold mb-2">{t(item.title)}</h3>
                <p className="text-sm text-muted-foreground">
                  {t(item.description)}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  ); 
};

