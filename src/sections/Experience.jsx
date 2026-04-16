export default function Experience() {
  
  const experiences = [
    {
      company:"Controladoria Geral do Estado de Minas Gerais",
      position:"IT Support Intern",
      date:"10/04/2025 - 10/04/2026",
      description:"Atuação no suporte técnico a usuários internos, auxiliando na resolução de problemas relacionados a sistemas, equipamentos e infraestrutura de TI. Apoio na manutenção de sistemas e acompanhamento de demandas técnicas do setor.",
    },
    {
      company:"Controlado Geral do Estado de Minas Gerais",
      position:"Software Developer Intern",
      date:"10/04/2026 - Momento ",
      description:"Participação no desenvolvimento e manutenção de sistemas internos, colaborando com a equipe na implementação de funcionalidades, correção de bugs e melhoria de aplicações utilizadas pela instituição.",
    }
  ];
  
  return (
    <section id="experience">
      <div className="flex flex-col items-center">
        <span className=" text-sm uppercase"> My experience</span>
        <div className="p-4 w-full max-w-4xl">
          <h2 className="p-8 text-5xl text-center text-primary font-bold">Where <span className="italic font-serif text-white font-normal">I've passed</span></h2>
          <div className="glass rounded-2xl animate-fade-in animation-delay-400 p-6">
            <div className="space-y-8">
              {experiences.map((item, i) => (
                <div key={i} className="border-b border-primary/30 hover:bg-surface hover:rounded-2xl p-2">
                  <div className="p-4 flex justify-between mb-2"> 
                    <div className="text-lg font-bold tracking-tight text-foreground">{item.company}</div>           
                    <div className="text-xs font-medium uppercase tracking-[0.18em] ">{item.date}</div>
                  </div>  
                  <div/> 
                  <div className="space-y-2 ">
                    <div className="text-base font-bold">{item.position}</div>
                    <div className="italic  leading-6 font-normal">{item.description}</div> 
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
