import { Link } from "@/navigation";
import { useTranslations } from "next-intl";
import Image from "next/image";
import GithubIcon from "./github-icon";
import { LanguageToggle } from "./language-toggle";
import { ThemeModeToggle } from "./theme-mode-toggle";
import { Button } from "./ui/button";

const Header = () => {
  const t = useTranslations("Navigation");
  return (
    <header className="px-4 md:px-6 py-4 md:flex items-center justify-between">
      <Link href="/" className="flex w-auto items-center space-x-2">
        <Image
          src="/flutter/icons/icon-192.png"
          alt="Logo"
          width={24}
          height={24}
        />
        <span className="text-lg font-bold">9PATCH.ONLINE</span>
      </Link>

      <div className="flex justify-end gap-4">
        <nav className="flex items-center gap-4">
          <Button variant="link" asChild>
            <Link href="/">{t("home")}</Link>
          </Button>
          <Button variant="link" asChild>
            <Link href="/editor">{t("editor")}</Link>
          </Button>
          <LanguageToggle />
        </nav>
        <div className="flex items-center space-x-2">
          <ThemeModeToggle />
          <Button variant="ghost" size="icon" asChild>
            <Link
              href="https://github.com/Sprheany/flutter_embedding_nextjs"
              target="_blank"
            >
              <GithubIcon className="w-5 h-5" />
            </Link>
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
