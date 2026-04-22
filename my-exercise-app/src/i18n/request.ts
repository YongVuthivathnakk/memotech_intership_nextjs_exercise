import { getRequestConfig,  } from "next-intl/server";
import { hasLocale } from "next-intl";
import { routing } from "./routing";



export default getRequestConfig(async ({ requestLocale}) => {
    // check if the request does not match with routing.locales, use the default locale
    const requested = await requestLocale;
    
  const locale = hasLocale(routing.locales, requested)
    ? requested
    : routing.defaultLocale;

// locale = "km"

  return {
    locale,
    messages: (await import(`../../messages/${locale}.json`)).default,
  };
});
