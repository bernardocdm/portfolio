import { useTranslation } from "react-i18next";

export default function Experience() {

  const experiences = [
    {
      company:"Controladoria Geral do Estado de Minas Gerais",
      position:"experience.items.itSupport.position",
      date:"experience.items.itSupport.date",
      description:"experience.items.itSupport.description",
    },
    {
      company:"Controladoria Geral do Estado de Minas Gerais",
      position:"experience.items.softwareDev.position",
      date:"experience.items.softwareDev.date",
      description:"experience.items.softwareDev.description",
    }
  ];

  const { t } = useTranslation();

  return (
    <section id="experience" className="py-32">
      <div className="container mx-auto px-6">

        <div className="flex flex-col items-center mb-16">
          <span className="text-sm uppercase tracking-wider text-muted-foreground animate-fade-in">
            {t("experience.label")}
          </span>
          <h2 className="text-4xl md:text-5xl text-center text-primary font-bold mt-4 animate-fade-in animation-delay-100">
            {t("experience.title")}
            <span className="italic font-serif text-white font-normal"> {t("experience.titleAccent")}</span>
          </h2>
        </div>

        <div className="max-w-3xl mx-auto">
          {experiences.map((item, i) => (
            <div
              key={i}
              className="flex animate-fade-in"
              style={{ animationDelay: `${(i + 1) * 200}ms` }}
            >
              {/* Timeline column */}
              <div className="flex flex-col items-center w-12 flex-shrink-0">
                <div className="relative mt-6">
                  <div className="w-4 h-4 rounded-full bg-primary ring-4 ring-background z-10 relative" />
                  <div className="absolute inset-0 rounded-full bg-primary/50 blur-sm" />
                </div>
                {i < experiences.length - 1 && (
                  <div className="flex-1 w-0.5 bg-gradient-to-b from-primary/50 to-transparent mt-2 min-h-8" />
                )}
              </div>

              {/* Card */}
              <div className={`flex-1 ${i < experiences.length - 1 ? "pb-10" : ""}`}>
                <div className="glass rounded-2xl p-6 border border-border hover:border-primary/30 transition-all duration-300 group">
                  <div className="flex flex-wrap items-start justify-between gap-3 mb-4">
                    <div>
                      <h3 className="text-lg font-bold text-foreground group-hover:text-primary transition-colors duration-200">
                        {t(item.position)}
                      </h3>
                      <p className="text-sm text-primary/70 mt-1 font-medium">{item.company}</p>
                    </div>
                    <span className="text-xs font-semibold uppercase tracking-widest px-3 py-1.5 rounded-full bg-primary/10 text-primary border border-primary/20 whitespace-nowrap">
                      {t(item.date)}
                    </span>
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {t(item.description)}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
