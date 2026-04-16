export default function LanguageSwitcher () {
    return(
        <div className="glass border border-primary/30 rounded-sm">
            <div className="flex divide-x divide-primary/30">
                <button className="w-full px-3 py-2 transition-all duration-300 hover:bg-primary/30">PT</button>
                <button className="w-full px-3 py-2 transition-all duration-300 hover:bg-primary/30">EN</button>
                <button className="w-full px-3 py-2 transition-all duration-300 hover:bg-primary/30">ES</button>
            </div>
        </div>
    );
};