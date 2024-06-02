"use client";

import { Button } from "@/components/ui/button";
import { languages } from "@/i18n";
import { cn } from "@/lib/utils";
import { usePathname, useRouter } from "@/navigation";
import { Check, ChevronDown } from "lucide-react";
import { useLocale } from "next-intl";
import { useState } from "react";
import { Command, CommandItem, CommandList } from "./ui/command";
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover";

export function LanguageToggle() {
  const router = useRouter();
  const pathname = usePathname();
  const locale = useLocale();

  const [open, setOpen] = useState(false);

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          size="sm"
          role="combobox"
          title="Change language"
          aria-expanded={open}
        >
          <span>{languages.find((l) => l.lang === locale)?.label}</span>
          <ChevronDown className="ml-2 w-4 h-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent align="start" className="p-0 w-32">
        <Command>
          <CommandList>
            {languages.map((language) => (
              <CommandItem
                key={language.lang}
                value={language.lang}
                onSelect={(currentValue) => {
                  if (currentValue !== locale) {
                    router.replace(pathname, { locale: currentValue });
                  }
                  setOpen(false);
                }}
              >
                <Check
                  className={cn(
                    "mr-2 h-4 w-4",
                    locale === language.lang ? "opacity-100" : "opacity-0"
                  )}
                />
                {language.label}
              </CommandItem>
            ))}
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  );
}
