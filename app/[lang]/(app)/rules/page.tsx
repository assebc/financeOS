import { getDictionary } from "@/lib/i18n/dictionary";

export default async function RulesPage() {
  const dict = await getDictionary();
  return (
    <div className="flex flex-col gap-2">
      <h1 className="text-2xl font-semibold text-foreground">
        {dict.MODULE_RULES_NAME}
      </h1>
      <p className="text-foreground-secondary">
        {dict.MODULE_RULES_DESCRIPTION}
      </p>
    </div>
  );
}
