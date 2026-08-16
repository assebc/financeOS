import { Home } from "@/components/home";
import { getDictionary, getLocale } from "@/lib/i18n/dictionary";
import { getModules } from "@/lib/i18n/modules";

export default async function Page() {
  const locale = await getLocale();
  const dict = await getDictionary();
  const modules = getModules(dict);

  return <Home locale={locale} dict={dict} modules={modules} />;
}
