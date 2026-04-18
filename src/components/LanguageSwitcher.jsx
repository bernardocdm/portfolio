import { useTranslation } from "react-i18next";

export default function LanguageSwitcher () {
    const { i18n } = useTranslation();
    const changeLanguage = (Lng) => i18n.changeLanguage(Lng);

    return(
        <div className="glass border border-primary rounded-sm">
            <div className="flex divide-x divide-primary">
                <button onClick={() => changeLanguage("en")} className="w-full px-3 py-2 transition-all duration-300 hover:bg-primary/30">EN</button>
                <button onClick={() => changeLanguage("pt")} className="w-full px-3 py-2 transition-all duration-300 hover:bg-primary/30">PT</button>
                <button onClick={() => changeLanguage("es")} className="w-full px-3 py-2 transition-all duration-300 hover:bg-primary/30">ES</button>
            </div>
        </div>
    );
};