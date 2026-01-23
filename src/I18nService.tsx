const supportedLangs = ["nl", "en"];
type Lang = (typeof supportedLangs)[number & keyof typeof supportedLangs];

export class I18nService {
  private lang: Lang = "nl";

  constructor() {
    const urlParams = new URLSearchParams(window.location.search);
    const urlLang = urlParams.get("lang") as string;
    if (supportedLangs.includes(urlLang)) {
      this.lang = urlLang as Lang;
      urlParams.delete("lang");
      const cleanSearch = urlParams.toString();
      const cleanUrl = `${window.location.pathname}${cleanSearch ? `?${cleanSearch}` : ""}${window.location.hash}`;
      window.history.replaceState({}, "", cleanUrl);
    }
  }

  setLang(lang: Lang) {
    this.lang = lang;
  }

  getLang(): Lang {
    return this.lang;
  }

  getSupportedLangs(): Lang[] {
    return supportedLangs;
  }

  getString(options?: Record<Lang | "glob", string>): string | undefined {
    if (!options) return undefined;
    return options["glob"] ?? options[this.lang];
  }
}

export const i18n = new I18nService();
