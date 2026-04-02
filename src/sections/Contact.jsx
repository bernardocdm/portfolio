import { Mail, Phone, MapPin } from "lucide-react";

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "bcarvalhomercado@gmail.com",
    href: "mailto:bcarvalhomercado@gmail.com",
  },
  {
    icon: Phone,
    label:"Phone",

  },
  {
    icon: MapPin,
    label: "Location",
    value: "Belo Horizonte, MG",
  }
]

export default function Contact() {
  return (
    <section id="contact">
      <div className="container mx-auto px-6 relativo z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-white text-sm font-medium tracking-wider uppercase animate-fade-in">Reach me out</span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 animate-fade-in animation-delay-100 text-secondary-foreground">Way to get <span className="font-serif italic font-normal text-white">in touch with me </span></h2>
          <p>Something to discuss with me? A project, an idea, or a new opportunity? Feel free to contact me</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
          <div className="glass p-8 rounded-3xl border border-primary/30 animate-fade-in animation-dalay-300">
            <form action="space-y-6 ">
              <div>
                <label 
                  htmlFor="name"
                  className="mb-2 block text-sm font-medium"
                >
                  Name
                </label>
                <input 
                  type="text"
                  placeholder="Name..."
                  className="w-full mb-2 px-4 py-3 bg-surface rounded-xl border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all"
                />
              </div>
              <div className="">
                <label 
                  htmlFor="email"
                  className="mb-2 block text-sm font-medium"
                >
                    Email
                </label>
                <input 
                  type="text"
                  placeholder="Email..."
                  className="w-full mb-2 px-4 py-3 bg-surface rounded-xl border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all" 
                />
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="mb-2 block text-sm font-medium"
                >
                  Message
                </label>
                <textarea
                  rows={10}
                  type="text"
                  placeholder="Your message..."
                  className="w-full mb-2 px-4 py-3 bg-surface rounded-xl border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all resize-none"
                />
              </div>
                
            </form>
          </div>
        </div>

      </div>
    </section>
  );
}
