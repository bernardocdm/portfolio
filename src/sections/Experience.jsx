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
    <section id="experience">
      <div className="flex flex-col items-center">
        <span className=" text-sm uppercase"> {t("experience.label")}</span>
        <div className="p-4 w-full max-w-4xl">
          <h2 className="p-8 text-5xl text-center text-primary font-bold"> {t("experience.title")} <span className="italic font-serif text-white font-normal"> {t("experience.titleAccent")}</span></h2>
          <div className="glass rounded-2xl animate-fade-in animation-delay-400 p-6">
            <div className="space-y-8">
              {experiences.map((item, i) => (
                <div key={i} className="border-b border-primary/30 hover:bg-surface hover:rounded-2xl p-2">
                  <div className="p-4 flex justify-between mb-2"> 
                    <div className="text-lg font-bold tracking-tight text-foreground">{t(item.company)}</div>           
                    <div className="text-xs font-medium uppercase tracking-[0.18em] ">{t(item.date)}</div>
                  </div>  
                  <div/> 
                  <div className="space-y-2 ">
                    <div className="text-base font-bold">{t(item.position)}</div>
                    <div className="italic  leading-6 font-normal">{t(item.description)}</div> 
                  </div>
                </div>
              ))}
            </div> 

          </div>
        </div>
      </div>
    </section>
  );
}
