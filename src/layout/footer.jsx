import { FaGithub, FaLinkedin } from "react-icons/fa";
import { ArrowUp } from "lucide-react";
import { useTranslation } from "react-i18next";

const navLinks = [
  { href: "#about", labelKey: "about.label" },
  { href: "#experience", labelKey: "experience.label" },
  { href: "#projects", labelKey: "projects.label" },
  { href: "#contact", labelKey: "contact.label" },
];

const socialLinks = [
  { icon: FaGithub, href: "https://github.com/bernardocdm", label: "GitHub" },
  { icon: FaLinkedin, href: "https://linkedin.com/in/bernardocdm", label: "LinkedIn" },
];

export const Footer = () => {
  const currentYear = new Date().getFullYear();
  const { t } = useTranslation();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="border-t border-border mt-16">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">

          {/* Brand + socials */}
          <div className="flex flex-col gap-4">
            <a
              href="#hero"
              className="font-bold text-lg tracking-tight text-foreground hover:text-primary transition-colors"
            >
              Bernardo Carvalho
            </a>
            <p className="text-sm text-muted-foreground leading-relaxed max-w-xs">
              {t("footer.tagline")}
            </p>
            <div className="flex items-center gap-3 mt-1">
              {socialLinks.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="w-9 h-9 rounded-xl bg-surface border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary transition-all"
                >
                  <Icon size={17} />
                </a>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div className="flex flex-col gap-4">
            <span className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
              {t("footer.nav")}
            </span>
            <ul className="flex flex-col gap-2">
              {navLinks.map(({ href, labelKey }) => (
                <li key={href}>
                  <a
                    href={href}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {t(labelKey)}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect */}
          <div className="flex flex-col gap-4">
            <span className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
              {t("footer.connect")}
            </span>
            <p className="text-sm text-muted-foreground leading-relaxed">
              {t("footer.connectText")}
            </p>
            <a
              href="#contact"
              className="inline-flex items-center gap-1 text-sm font-medium text-primary hover:underline"
            >
              {t("footer.cta")} →
            </a>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-6 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-muted-foreground">
            © {currentYear} Bernardo Carvalho. {t("footer.rights")}
          </p>
          <button
            onClick={scrollToTop}
            aria-label={t("footer.backToTop")}
            className="flex items-center gap-2 text-xs text-muted-foreground hover:text-primary transition-colors group"
          >
            {t("footer.backToTop")}
            <span className="w-7 h-7 rounded-full border border-border flex items-center justify-center group-hover:border-primary group-hover:bg-primary/10 transition-all">
              <ArrowUp size={13} />
            </span>
          </button>
        </div>
      </div>
    </footer>
  );
};
