const supportedLangs = ["nl", "en"];
type Lang = (typeof supportedLangs)[number & keyof typeof supportedLangs];

export class I18nService {
  private lang: Lang = "nl";

  constructor() {
    const urlParams = new URLSearchParams(window.location.search);
    const urlLang = urlParams.get("lang") as string;
    if (supportedLangs.includes(urlLang)) {
      this.lang = urlLang as Lang;
    }
  }

  setLang(lang: Lang) {
    this.lang = lang;
  }

  getString(options?: Record<Lang | "glob", string>): string | undefined {
    if (!options) return undefined;
    return options["glob"] ?? options[this.lang];
  }
}

export const i18n = new I18nService();
