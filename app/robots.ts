import { BASE_URL } from "@/lib/env";
import { MetadataRoute } from "next";
import path from "path";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: path.join(BASE_URL, "sitemap.xml"),
  };
}