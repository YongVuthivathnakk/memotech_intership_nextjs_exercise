"use client";

import { CheckCircle2, Globe } from "lucide-react";
import { useLocale, useTranslations } from "next-intl";
import { usePathname, useRouter} from "next/navigation";
// import { useRouter } from "next/router";

export default function Header() {
  const t = useTranslations("Header");


  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();


  function handleLanguageToggle() {
    const next = locale === "en" ? "km" : "en";

    const newPath = pathname.replace(`/${locale}`, `/${next}`);
    router.push(newPath);
  }


  return (
    <header className="flex items-center justify-between bg-white shadow-xs px-6 py-6 sm:px-16 md:px-32 lg:px-64">
      <div className="flex gap-3 items-center">
        <CheckCircle2 className="text-blue-500 w-8 h-8 sm:w-10 sm:h-10" />
        <h1 className="text-2xl font-semibold sm:text-3xl ">{t("title")}</h1>
      </div>
      <button onClick={handleLanguageToggle} className="flex items-center gap-3 bg-blue-500 px-4 py-2 rounded-lg shadow-sm font-bold text-white hover:bg-blue-600 cursor-pointer active:bg-blue-700">
        <Globe />
              <span className="text-sm ">{t("buttonLabel")}</span>
      </button>
    </header>
  );
}
