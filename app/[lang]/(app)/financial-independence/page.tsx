import { getDictionary } from "@/lib/i18n/dictionary";

export default async function FinancialIndependencePage() {
  const dict = await getDictionary();
  return (
    <div className="flex flex-col gap-2">
      <h1 className="text-2xl font-semibold text-foreground">
        {dict.MODULE_FINANCIAL_INDEPENDENCE_NAME}
      </h1>
      <p className="text-foreground-secondary">
        {dict.MODULE_FINANCIAL_INDEPENDENCE_DESCRIPTION}
      </p>
    </div>
  );
}
