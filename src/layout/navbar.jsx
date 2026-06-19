import { useState } from "react";
import { Menu, X } from "lucide-react";
import LanguageSwitcher from "../components/LanguageSwitcher";
import { FaWhatsapp } from "react-icons/fa";
import { useTranslation } from "react-i18next";

const navLinks = [
    { href: "#about", labelKey: "navbar.about" },
    { href: "#experience", labelKey: "navbar.experience" },
    { href: "#projects", labelKey: "navbar.projects" },
    { href: "#contact", labelKey: "navbar.contact" },
];

export const Navbar = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const { t } = useTranslation();

    return (
        <header
            className="absolute top-0 left-0 right-0 transition-all duration-500 glass bg-transparent py-3 z-50">
            <nav className="container mx-auto px-6 flex items-center justify-between">
                <a href="#hero" className=" font-bold tracking-tight">
                    Bernardo Carvalho<span className="text-primary"></span>
                </a>

                <div className="hidden md:flex items-center gap-1">
                    <div className="glass rounded-full px-2 py-1 flex items-center gap-5">
                        {navLinks.map((link, index) => (
                            <a
                                href={link.href}
                                key={index}
                                className="px-4 py-2 text-sm text-muted-foreground hover:text-foreground rounded-full hover:bg-surface"
                                >
                                    {t(link.labelKey)}</a>
                        ))}
                    </div>
                </div>

                <div className="flex items-center gap-4">
                    <div className="">
                        <LanguageSwitcher />
                    </div>

                    <div className="hidden md:block">
                        <a
                            href="#contact"
                            className="relative overflow-hidden rounded-full font-medium px-4 py-2 text-sm bg-primary text-primary-foreground hover:bg-primary/90 shadow-lg shadow-primary/25 flex items-center gap-2"
                        >
                            {t("navbar.cta")}
                            <FaWhatsapp />
                        </a>
                    </div>
                </div>


                {/* MOBILE MENU BUTTON  */}
                <button className="md:hidden p-2 text-foreground" 
                        onClick={() => setIsMobileMenuOpen((prev) => !prev )}
                    >
                        {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </nav>

                {/* MOBILE MENU  */}
                {isMobileMenuOpen && (

                <div className="md:hidden glass">
                    <div className="container mx-auto px-6 py-6 flex flex-col gap-4">
                            {navLinks.map((link, index) => (
                                <a
                                href={link.href}
                                key={index}
                                onClick={() => setIsMobileMenuOpen(false)}
                                className="text-lg text-muted-foreground hover:text-foreground"
                                >
                                {t(link.labelKey)}</a>
                        ))}

                        <div className="pt-2 border-t border-border flex items-center justify-between">
                            <LanguageSwitcher />
                            <a
                                href="#contact"
                                onClick={() => setIsMobileMenuOpen(false)}
                                className="relative overflow-hidden rounded-full font-medium px-6 py-3 text-base bg-primary text-primary-foreground hover:bg-primary/90 shadow-lg shadow-primary/25 flex items-center gap-2"
                            >
                                {t("navbar.cta")}
                            </a>
                        </div>
                    </div>
                </div>
                )}
        </header>
    );
};
