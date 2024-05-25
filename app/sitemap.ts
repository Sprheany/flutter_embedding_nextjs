import { locales } from "@/i18n";
import { BASE_URL } from "@/lib/env";
import { type MetadataRoute } from "next";

const pathnames = ["", "editor"];
const defaultLocale = "en";

export default function sitemap(): MetadataRoute.Sitemap {
  function getUrl(pathname: string, locale: string) {
    const localeStr = locale === "en" ? "" : `${locale}/`;
    return `${BASE_URL}/${localeStr}${pathname}`;
  }

  const sitemapData = pathnames.map((pathname) => ({
    url: getUrl(pathname, defaultLocale),
    lastModified: new Date(),
    alternates: {
      languages: Object.fromEntries(
        locales.map((locale) => [locale, getUrl(pathname, locale)])
      ),
    },
  }));
  return sitemapData;
}
