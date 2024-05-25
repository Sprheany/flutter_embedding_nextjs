import { locales } from "@/i18n";
import { BASE_URL } from "@/lib/env";
import { type MetadataRoute } from "next";
import path from "path";

const pathnames = ["/", "/editor"];

export default function sitemap(): MetadataRoute.Sitemap {
  function getUrl(pathname: string, locale: string) {
    return path.join(BASE_URL, locale, pathname === "/" ? "" : pathname);
  }

  const sitemapData = pathnames.map((pathname) => ({
    url: getUrl(pathname, ""),
    lastModified: new Date(),
    alternates: {
      languages: Object.fromEntries(
        locales.map((locale) => [
          locale,
          getUrl(pathname, locale === "en" ? "" : locale),
        ])
      ),
    },
  }));
  return sitemapData;
}
