import { AnimatedBorderButton } from "./AnimatedBorderButton";
import { Download } from "lucide-react";
import { useTranslation } from "react-i18next";

const cvByLang = {
  pt: "/CV-pt.pdf",
  en: "/CV-en.pdf",
  es: "/CV-es.pdf",
};

export default function DownloadCV() {
  const { t, i18n } = useTranslation();
  const lang = i18n.language?.split("-")[0];
  const cvHref = cvByLang[lang] ?? "/CV-en.pdf";

  return (
    <a href={cvHref} download>
      <AnimatedBorderButton>
        <Download className="w-5 h-5" />
        {t("hero.downloadCV")}
      </AnimatedBorderButton>
    </a>
  );
}
