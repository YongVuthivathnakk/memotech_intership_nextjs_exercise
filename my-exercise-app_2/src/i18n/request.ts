import { hasLocale } from "next-intl";
import { getRequestConfig } from "next-intl/server";
import { routing } from "./routing";

export default getRequestConfig(async ({ requestLocale }) => {
    const requesed = await requestLocale;
    const locale = hasLocale(routing.locales, requesed) ? requesed : routing.defaultLocale;
    return {
        locale,
        messages: (await import(`../../messages/${locale}.json`)).default
    }
})