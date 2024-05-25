import { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import FlutterView from "./flutter-view";

export async function generateMetadata({
  params: { locale },
}: {
  params: { locale: string };
}): Promise<Metadata> {
  const t = await getTranslations({ locale, namespace: "Metadata.editor" });
  return {
    title: t("title"),
    description: t("description"),
    alternates: {
      canonical: "./",
    },
    appleWebApp: {
      title: t("title"),
      capable: true,
      statusBarStyle: "black",
    },
    icons: {
      apple: "/flutter/icons/icon-192.png",
    },
  };
}

export default function Editor() {
  return (
    <>
      <FlutterView flutterDir={"/flutter/"} />
    </>
  );
}
