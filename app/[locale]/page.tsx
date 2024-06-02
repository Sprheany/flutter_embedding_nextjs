import ImageWrapper from "@/components/image-wrapper";
import { Button } from "@/components/ui/button";
import { languages } from "@/i18n";
import { BASE_URL } from "@/lib/env";
import { range } from "@/lib/utils";
import { Link } from "@/navigation";
import { Metadata } from "next";
import { useTranslations } from "next-intl";
import { getTranslations } from "next-intl/server";

export async function generateMetadata({
  params: { locale },
}: {
  params: { locale: string };
}): Promise<Metadata> {
  const t = await getTranslations({ locale, namespace: "Metadata.home" });
  return {
    metadataBase: new URL(BASE_URL),
    title: t("title"),
    description: t("description"),
    keywords: t("keywords"),
  };
}

export default function Home() {
  const t = useTranslations("Home");
  return (
    <main className="px-4 md:px-6 max-w-7xl w-auto mx-auto">
      <div className="mx-auto max-w-5xl pt-20">
        <h1 className="text-slate-900 font-extrabold text-4xl sm:text-5xl lg:text-6xl !leading-tight tracking-tight text-center dark:text-white">
          {t("title")}
        </h1>
        <p className="mt-8 text-lg text-slate-600 text-center max-w-3xl mx-auto dark:text-slate-400">
          {t("description")}
        </p>
        <div className="mt-10 flex justify-center">
          <Button size="lg" asChild>
            <Link className="font-bold text-xl" href="/editor">
              {t("try")}
            </Link>
          </Button>
        </div>
      </div>

      <div className="flex flex-wrap pt-20">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
          <div className="flex flex-col gap-4">
            <h2 className="text-slate-900 font-bold text-2xl dark:text-white">
              {t("use.title")}
            </h2>
            <p>{t("use.description")}</p>
            <ol className="pl-8 flex flex-col space-y-2 list-decimal list-outside">
              {range(1, 4).map((index) => (
                <li key={index}>
                  {t.rich(`use.${index}.title`, {
                    strong: (chunks) => (
                      <span className="font-semibold">{chunks}</span>
                    ),
                    code: (chunks) => (
                      <span className="font-mono font-semibold" dir="ltr">
                        {chunks}
                      </span>
                    ),
                  })}
                  {t(`use.${index}.description`) && (
                    <p className="py-2">{t(`use.${index}.description`)}</p>
                  )}
                </li>
              ))}
            </ol>
          </div>
          <div className="flex flex-col items-center">
            <ImageWrapper
              className="mt-6 lg:mt-10"
              src="/images/fig1-light.webp"
              darkSrc="/images/fig1-dark.webp"
              alt="Figure 1"
              width={768}
              height={1024}
            />
            <p className="text-center">
              {t.rich(`use.image`, {
                strong: (chunks) => (
                  <span className="font-semibold">{chunks}</span>
                ),
              })}
            </p>
          </div>
        </div>
        <p className="pt-8">{t("use.content")}</p>
        <p className="pt-4">
          {t.rich(`use.note`, {
            strong: (chunks) => <span className="font-semibold">{chunks}</span>,
            code: (chunks) => (
              <span className="font-mono font-semibold" dir="ltr">
                {chunks}
              </span>
            ),
          })}
        </p>

        <div className="flex flex-wrap pt-8">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
            <div className="flex flex-col">
              <h2 className="text-slate-900 font-bold text-2xl dark:text-white">
                {t("options.title")}
              </h2>
              <ul className="pt-4 pl-8 space-y-2 list-disc">
                {range(1, 6).map((index) => (
                  <li key={index}>
                    {t.rich(`options.${index}`, {
                      strong: (chunks) => (
                        <span className="font-semibold">{chunks}</span>
                      ),
                    })}
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex flex-col">
              <ImageWrapper
                className="mt-6 lg:mt-10"
                src="/images/fig2-light.webp"
                darkSrc="/images/fig2-dark.webp"
                alt="Figure 2"
                width={768}
                height={1024}
              />
              <p className="text-center">
                {t.rich(`options.image`, {
                  strong: (chunks) => (
                    <span className="font-semibold">{chunks}</span>
                  ),
                })}
              </p>
            </div>
          </div>
        </div>
      </div>
      <footer className="flex flex-col items-center mt-24 mb-4 md:mb-6 space-y-2">
        <div className="flex space-x-2">
          <span>{t("links")}</span>
          <Link
            className="underline hover:text-sky-700"
            href="https://developer.android.com/guide/topics/graphics/2d-graphics#nine-patch"
            target="_blank"
          >
            NinePatch
          </Link>
          <Link
            className="underline hover:text-sky-700"
            href="https://developer.android.com/studio/write/draw9patch"
            target="_blank"
          >
            Draw9Patch
          </Link>
        </div>
        <div className="flex space-x-2">
          <span>© 2023-{new Date().getFullYear().toString()}</span>
          <Link className="underline hover:text-sky-700" href="/">
            9PATCH.ONLINE
          </Link>
          <span>{t("reserved")}</span>
        </div>
        <div className="space-x-3">
          {languages.map((language) => (
            <Link
              key={language.lang}
              className="text-sky-700 dark:text-sky-500 hover:opacity-90"
              href="/"
              locale={language.lang}
            >
              {language.label}
            </Link>
          ))}
        </div>
      </footer>
    </main>
  );
}
