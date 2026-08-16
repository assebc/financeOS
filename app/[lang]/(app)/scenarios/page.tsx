import { getDictionary } from "@/lib/i18n/dictionary";

export default async function ScenariosPage() {
  const dict = await getDictionary();
  return (
    <div className="flex flex-col gap-2">
      <h1 className="text-2xl font-semibold text-foreground">
        {dict.MODULE_SCENARIOS_NAME}
      </h1>
      <p className="text-foreground-secondary">
        {dict.MODULE_SCENARIOS_DESCRIPTION}
      </p>
    </div>
  );
}
