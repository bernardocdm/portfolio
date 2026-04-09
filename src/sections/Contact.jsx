import { Mail, Phone, MapPin, Send, CheckCircle, AlertCircle } from "lucide-react";
import { Button } from "../components/Button";
import { useState } from "react";
import emailjs from "@emailjs/browser";

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

// where the fuck I find isLoading 

export default function Contact() {
  const [ formData, setFormData ] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [ isLoading, setIsloading ] = useState(false);
  const [ submitStatus, setSubmitStatus ] = useState({
    type: null,
    message: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    setIsloading(true);
    setSubmitStatus({ type:null, message: "" });

    try {
      //importing some enviromment variables
      const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
      const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
      const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;


      if(!serviceId || !templateId || !publicKey) {
        throw new Error("Emailjs configuration missing");
      }

      await emailjs.send(
        serviceId,
        templateId,
        {
          name: formData.name,
          email: formData.email,
          message: formData.message,
        },
        publicKey
      );

        setSubmitStatus({
          type: "sucess",
          message: "Message sent succesfuly, on my way!",
        });
        setFormData({ name: "", email: "", message: "" });

    } catch(err) {
        console.error("Emailjs error" , err);
        setSubmitStatus({
          type: "error",
          message:
            err.text || "Failed to send message",
        });

    } finally {
        setIsloading(true);
    }
  };

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
            <form onSubmit={handleSubmit} action="space-y- "> 
              <div>
                <label 
                  htmlFor="name"
                  className="mb-2 block text-sm font-medium"
                >
                  Name
                </label>
                <input 
                  id="name"
                  type="text"
                  placeholder="Name..."
                  required
                  value={formData.name}
                  onChange={(e) => 
                    setFormData({...formData, name: e.target.value })
                  }
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
                  required
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
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
                  rows={5}
                  type="text"
                  placeholder="Your message..."
                  required
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  className="w-full mb-2 px-4 py-3 bg-surface rounded-xl border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all resize-none"
                />
              </div>

              <Button 
                className="w-full" 
                size="lg"
                type="submit"
                disbled={isLoading}
              >
                {isLoading ? (
                  <>Sending...</>
                ) : (
                  <>
                    Send Message 
                    <Send className="w-5 h-5"/>
                  </>
                )}
              </Button>

              {submitStatus.type && (
                <div className={`flex items-center gap-3 p-4 rounded-full ${
                  submitStatus.type === "sucess"
                    ? "bg-green-500/10 border border-green-500/20 text-gray-400"
                    : "bg-red-500/10 border border-red-500/20 text-red-400"
                } `}
                >
                  {submitStatus.type === "sucess" ? (
                    <CheckCircle className="w-5 h-5 shrink-0" />
                  ) : (
                    <AlertCircle className="w-5 h-5 shrink-0"/>
                  )} 
                  <p className="text-sm">{submitStatus.message}</p>
                  
                </div>
              )}
            </form>

            
          </div>
        </div>

      </div>

      {/* Contact Info */}
          <div className="space-y-6 animate-fade-in animation-delay-400">
            <div className="glass rounded-3xl p-8">
              <h3 className="text-xl font-semibold mb-6">
                Contact Information
              </h3>
              <div className="space-y-4">
                {contactInfo.map((item, i) => (
                  <a
                    key={i}
                    href={item.href}
                    className="flex items-center gap-4 p-4 rounded-xl hover:bg-surface transition-colors group"
                  >
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                      <item.icon className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <div className="text-sm text-muted-foreground">
                        {item.label}
                      </div>
                      <div className="font-medium">{item.value}</div>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </div>
    </section>
  );
}
