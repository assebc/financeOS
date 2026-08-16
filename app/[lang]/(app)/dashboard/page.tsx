import { getDictionary } from "@/lib/i18n/dictionary";

export default async function DashboardPage() {
  const dict = await getDictionary();
  return (
    <div className="flex flex-col gap-2">
      <h1 className="text-2xl font-semibold text-foreground">
        {dict.MODULE_DASHBOARD_NAME}
      </h1>
      <p className="text-foreground-secondary">
        {dict.MODULE_DASHBOARD_DESCRIPTION}
      </p>
    </div>
  );
}
