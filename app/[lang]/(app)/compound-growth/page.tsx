import { getDictionary } from "@/lib/i18n/dictionary";

export default async function CompoundGrowthPage() {
  const dict = await getDictionary();
  return (
    <div className="flex flex-col gap-2">
      <h1 className="text-2xl font-semibold text-foreground">
        {dict.MODULE_COMPOUND_GROWTH_NAME}
      </h1>
      <p className="text-foreground-secondary">
        {dict.MODULE_COMPOUND_GROWTH_DESCRIPTION}
      </p>
    </div>
  );
}
