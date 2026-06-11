import { useTranslation } from "react-i18next";
import { ChevronDown } from "lucide-react";
import { useState, useRef, useEffect } from "react";

const languages = [
  { code: "en", label: "English", short: "EN" },
  { code: "pt", label: "Português", short: "PT" },
  { code: "es", label: "Español",  short: "ES" },
];

export default function LanguageSwitcher() {
  const { i18n } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const ref = useRef(null);

  const current = languages.find((l) => l.code === i18n.language) ?? languages[0];

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (ref.current && !ref.current.contains(e.target)) setIsOpen(false);
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const select = (code) => {
    i18n.changeLanguage(code);
    setIsOpen(false);
  };

  return (
    <div ref={ref} className="relative">
      <button
        onClick={() => setIsOpen((prev) => !prev)}
        className="flex items-center gap-1.5 px-3 py-1.5 rounded-full glass border border-border hover:border-primary text-sm font-medium text-muted-foreground hover:text-primary transition-all duration-200"
      >
        {current.short}
        <ChevronDown
          size={13}
          className={`transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`}
        />
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-36 glass border border-border rounded-xl overflow-hidden shadow-lg z-50">
          {languages.map((lang) => {
            const isActive = lang.code === i18n.language;
            return (
              <button
                key={lang.code}
                onClick={() => select(lang.code)}
                className={`w-full flex items-center justify-between px-4 py-2.5 text-sm transition-colors duration-150
                  ${isActive
                    ? "text-primary bg-primary/10"
                    : "text-muted-foreground hover:text-foreground hover:bg-surface"
                  }`}
              >
                <span>{lang.label}</span>
                <span className="text-xs font-mono opacity-60">{lang.short}</span>
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
}
