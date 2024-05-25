import Header from "@/components/header";
import FlutterScript from "@/components/scripts/flutter-script";
import GoogleScript from "@/components/scripts/google-script";
import MicrosoftScript from "@/components/scripts/microsoft-script";
import { Analytics } from "@vercel/analytics/react";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import { ThemeProvider } from "next-themes";
import { Inter, Roboto_Mono } from "next/font/google";
import "../globals.css";

export const inter = Inter({ subsets: ["latin"] });

export const roboto_mono = Roboto_Mono({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-roboto-mono",
});

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
