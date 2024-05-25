import { getRequestConfig } from "next-intl/server";
import { notFound } from "next/navigation";

export const languages = [
  {
    lang: "en",
    label: "English",
  },
  {
    lang: "ru",
    label: "Русский",
  },
];

export const locales = languages.map((l) => l.lang);

export default getRequestConfig(async ({ locale }) => {
  if (!locales.includes(locale)) {
    notFound();
  }

  return {
    messages: (await import(`./messages/${locale}.json`)).default,
  };
});
