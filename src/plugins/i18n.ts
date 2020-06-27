import Vue from "vue";
import VueI18n, { LocaleMessages } from "vue-i18n";

Vue.use(VueI18n);

function loadLocaleMessages(): LocaleMessages {
  const locales = require.context("@/lang", true, /[A-Za-z0-9-_,\s]+\.ts$/i);
  const messages: LocaleMessages = {};
  locales.keys().forEach(localePath => {
    const matched = localePath.match(/([A-Za-z0-9-_]+)\./i);
    if (matched && matched.length > 1) {
      const locale = matched[1];
      messages[locale] = locales(localePath).default;
    }
  });
  return messages;
}

const createI18n = () => {
  return new VueI18n({
    locale: process.env.I18N_LOCALE || "zh-CN",
    fallbackLocale: process.env.I18N_FALLBACK_LOCALE || "en",
    messages: loadLocaleMessages()
  });
};

export default createI18n();
