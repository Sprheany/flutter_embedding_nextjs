import Header from "@/components/header";
import FlutterScript from "@/components/scripts/flutter-script";
import GoogleScript from "@/components/scripts/google-script";
import MicrosoftScript from "@/components/scripts/microsoft-script";
import { BASE_URL } from "@/lib/env";
import { Analytics } from "@vercel/analytics/react";
import { Metadata } from "next";
import { NextIntlClientProvider } from "next-intl";
import { getMessages, getTranslations } from "next-intl/server";
import { ThemeProvider } from "next-themes";
import { Inter, Roboto_Mono } from "next/font/google";
import "../globals.css";

export const inter = Inter({ subsets: ["latin"] });

export const roboto_mono = Roboto_Mono({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-roboto-mono",
});

export async function generateMetadata({
  params: { locale },
}: {
  params: { locale: string };
}): Promise<Metadata> {
  const t = await getTranslations({ locale, namespace: "Metadata.home" });
  return {
    metadataBase: new URL(BASE_URL),
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
    openGraph: {
      url: "./",
      type: "website",
      title: t("title"),
      description: t("description"),
      images: "/images/hero.webp",
    },
    twitter: {
      card: "summary_large_image",
      title: t("title"),
      description: t("description"),
      images: "/images/hero.webp",
    },
  };
}

export default async function RootLayout({
  children,
  params: { locale },
}: Readonly<{
  children: React.ReactNode;
  params: { locale: string };
}>) {
  const messages = await getMessages();
  return (
    <html lang={locale} suppressHydrationWarning>
      <body className={`${inter.className} ${roboto_mono.variable}`}>
        <NextIntlClientProvider messages={messages}>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <div className="flex flex-col min-h-screen antialiased">
              <Header />
              {children}
            </div>
          </ThemeProvider>
        </NextIntlClientProvider>
        <FlutterScript />
        <Analytics />
        <GoogleScript />
        <MicrosoftScript />
      </body>
    </html>
  );
}
