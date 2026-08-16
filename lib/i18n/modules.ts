import type { Dictionary } from "./dictionary";

/**
 * The six MVP modules — single source for the landing page sections and the
 * app nav, so a name/description only needs to change in the dictionary.
 */
export function getModules(dict: Dictionary) {
  return [
    {
      href: "/dashboard",
      name: dict.MODULE_DASHBOARD_NAME,
      description: dict.MODULE_DASHBOARD_DESCRIPTION,
    },
    {
      href: "/rules",
      name: dict.MODULE_RULES_NAME,
      description: dict.MODULE_RULES_DESCRIPTION,
    },
    {
      href: "/compound-growth",
      name: dict.MODULE_COMPOUND_GROWTH_NAME,
      description: dict.MODULE_COMPOUND_GROWTH_DESCRIPTION,
    },
    {
      href: "/financial-independence",
      name: dict.MODULE_FINANCIAL_INDEPENDENCE_NAME,
      description: dict.MODULE_FINANCIAL_INDEPENDENCE_DESCRIPTION,
    },
    {
      href: "/goals",
      name: dict.MODULE_GOALS_NAME,
      description: dict.MODULE_GOALS_DESCRIPTION,
    },
    {
      href: "/scenarios",
      name: dict.MODULE_SCENARIOS_NAME,
      description: dict.MODULE_SCENARIOS_DESCRIPTION,
    },
  ] as const;
}
