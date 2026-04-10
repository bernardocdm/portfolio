export default function Experience() {
  
  const experiences = [
    {
      local:"Controladoria Geral do Estado",
      date:"10/04/2025 - 10/04/2026",
      description:"Ipsum dolor kldfldskfnldsnf lkdfnslkfnlksnflk lkdfnlksnflksnflsknf klsndflkksndflsnflk dlkfnlsnflksnfkl dlknflsdkn",
    },
    {
      local:"Controlado Geral do Estado",
      date:"10/04/2026 - Momento ",
      description:"Ipsum dolor llnflksdnflndlsfns fnflsdnflsdnflksd fdnflsdknflksnf fklnflsdknflksdnf fklnslkfnslnflsdnf fsdklnflsknd",
    }
  ];
  
  return (
    <section id="experience">
      <div className="flex flex-col items-center">
        <span className=" text-sm uppercase"> My experiences</span>
        <div className="p-4 w-full max-w-4xl">
          <h2 className="p-8 text-5xl text-center text-primary font-bold">Where <span className="italic font-serif text-white font-normal">I've passed</span></h2>
          <div className="glass rounded-2xl animate-fade-in animation-delay-400 p-6">
            <div className="space-y-14">
              {experiences.map((item, i) => (
                <a 
                  key={i}
                  href={item.href}
                  className="block w-full rounded-xl hover:bg-surface transition-colors group"
                >
                  <div className="grid  w-full lg:grid-cols-[140px_160px_1fr] gap-4 h-12 rounded-xl p-4">
                    <div className="font-medium">{item.date}</div> 
                    <div className="font-medium ">{item.local}</div> 
                    <div className="font-medium ">{item.description}</div> 
                  </div>
                </a>
              ))}
            </div> 

          </div>
        </div>
      </div>
    </section>
  );
}
