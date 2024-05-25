import { localePrefix } from "@/navigation";
import createMiddleware from "next-intl/middleware";

export default createMiddleware({
  locales: ["en", "ru"],
  defaultLocale: "en",
  localePrefix,
});

export const config = {
  matcher: ["/((?!api|_next|.*\\..*).*)"],
};
