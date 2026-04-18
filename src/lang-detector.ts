import LanguageDetector, {
    DetectorOptions,
} from "i18next-browser-languagedetector";

export const languageDetectorOptions = {
    // order and from where 
    order: [
        "querystring",
        "cookie",
        "localStorage",
        "sessionStorage",
        "navigator",
        "htmlTag",
        "path",
        "subdomain",
    ],

    // keys or params 
    lookupQueryString: "lng",
    lookupCookie: "i18next",
    lookupLocalStorage:"i18nextLng",
    lookupSessionStorage:"i18nextLng",
    lookupFromPathIndex: 0,
    lookupFromSubdomainIndex: 0,

    //cache user language on
    caches: ["localStorage", "cookie"],
    excludeCacheFor: ["cimode"],   //languages to not persist
};

export const languageDetector = new LanguageDetector();
languageDetector.addDetector({
    name: "fbLangDetector",

    lookup(options: DetectorOptions) {
        console.log("lookup" , options);
        return "pt";
    },

    cacheUserLanguage(lng, options) {
        // option -> are passed in options 
        // lng -> current languageDetector, will be called after in 
        // store it 
        console.log("cacheUserLanguage", lng, options);
    },
});