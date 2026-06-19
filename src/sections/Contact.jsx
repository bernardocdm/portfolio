import { Send, CheckCircle, AlertCircle } from "lucide-react";
import { Button } from "../components/Button";
import { useState } from "react";
import emailjs from "@emailjs/browser";
import { useTranslation } from "react-i18next";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [isLoading, setIsloading] = useState(false);
  const [submitStatus, setSubmitStatus] = useState({
    type: null,
    message: "",
  });

  const { t } = useTranslation();

  const handleSubmit = async (e) => {
    e.preventDefault();

    setIsloading(true);
    setSubmitStatus({ type: null, message: "" });

    try {
      const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
      const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
      const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

      if (!serviceId || !templateId || !publicKey) {
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
        type: "success",
        message: t("contact.status.success"),
      });
      setFormData({ name: "", email: "", message: "" });

    } catch (err) {
      console.error("Emailjs error", err);
      setSubmitStatus({
        type: "error",
        message: err.text || t("contact.status.error"),
      });
    } finally {
      setIsloading(false);
    }
  };

  return (
    <section id="contact" className="py-32">
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-white text-sm font-medium tracking-wider uppercase animate-fade-in">
            {t("contact.label")}
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 animate-fade-in animation-delay-100 text-secondary-foreground">
            {t("contact.title")}
            <span className="font-serif italic font-normal text-white">{t("contact.titleAccent")}</span>
          </h2>
          <p className="text-muted-foreground">{t("contact.p")}</p>
        </div>

        <div className="max-w-2xl mx-auto animate-fade-in animation-delay-200">
          <div className="glass p-8 rounded-3xl border border-primary/30">
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="mb-2 block text-sm font-medium">
                  {t("contact.form.name")}
                </label>
                <input
                  id="name"
                  type="text"
                  placeholder={t("contact.form.namePlaceholder")}
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full mb-2 px-4 py-3 bg-surface rounded-xl border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all"
                />
              </div>
              <div>
                <label htmlFor="email" className="mb-2 block text-sm font-medium">
                  {t("contact.form.email")}
                </label>
                <input
                  id="email"
                  type="email"
                  placeholder={t("contact.form.emailPlaceholder")}
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full mb-2 px-4 py-3 bg-surface rounded-xl border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all"
                />
              </div>
              <div>
                <label htmlFor="message" className="mb-2 block text-sm font-medium">
                  {t("contact.form.message")}
                </label>
                <textarea
                  id="message"
                  rows={5}
                  placeholder={t("contact.form.messagePlaceholder")}
                  required
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full mb-2 px-4 py-3 bg-surface rounded-xl border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all"
                />
              </div>

              <Button className="w-full" size="lg" type="submit" disabled={isLoading}>
                {isLoading ? (
                  <>{t("contact.button.sending")}</>
                ) : (
                  <>
                    {t("contact.button.send")}
                    <Send className="w-5 h-5" />
                  </>
                )}
              </Button>

              {submitStatus.type && (
                <div className={`flex items-center gap-3 p-4 mt-4 rounded-full ${
                  submitStatus.type === "success"
                    ? "bg-green-500/10 border border-green-500/20 text-green-400"
                    : "bg-red-500/10 border border-red-500/20 text-red-400"
                }`}>
                  {submitStatus.type === "success" ? (
                    <CheckCircle className="w-5 h-5 shrink-0" />
                  ) : (
                    <AlertCircle className="w-5 h-5 shrink-0" />
                  )}
                  <p className="text-sm">{submitStatus.message}</p>
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
