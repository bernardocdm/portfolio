export default function LanguageSwitcher () {
    return(
        <div className="fixed glass rounded-2xl bottom-1/2 right-6 -translate-y-1/2 z-50">
            <div className=" px-2 py-3 flex flex-col gap-2">
                <button className="px-2 transition-all duration-300 hover:bg-white/10 hover:border-white/20 hover:rounded-lg">PT</button>
                <button className="px-2 transition-all duration-300 hover:bg-white/10 hover:border-white/20 hover:rounded-lg">EN</button>
                <button className="px-2 transition-all duration-300 hover:bg-white/10 hover:border-white/20 hover:rounded-lg">ES</button>
            </div>
        </div>
    );
};