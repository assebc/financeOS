# FinanceOS — Visual Theme

Design reference for this project. Read this before building any screen, chart,
or component — it's the single source of truth for color/type tokens so the UI
reads as one system instead of per-page improvisation.

## Personality

Derived from the PRD's product principles (`personal-finance-dashboard-prd.md`
§3): **numbers first, calm, forward-looking, guideline-not-gospel**.

- **Calm over flashy.** No neon fintech gradients. Money is high-stakes; the UI
  should feel like a trustworthy instrument, not a trading app.
- **Neutral by default, color with intent.** Status colors (good/warning/serious/
  critical) are reserved and never doubled as decoration. A red number means
  "needs attention," not "this button is exciting."
- **Growth reads as motion forward, not alarm.** The FI journey is the hero
  narrative — the brand hue leans into "accumulating," not "danger" or "hype."
- **Guideline language stays visually soft.** 50/30/20 bands, FI progress —
  these are targets, not pass/fail. Avoid harsh red/green pass-fail styling on
  benchmarks; reserve strong status color for genuinely actionable states
  (overdrawn cash flow, no emergency fund, high-interest debt).

## Base palette

Sourced from the dataviz skill's validated reference palette
(`dataviz/references/palette.md`) — chosen, not invented, so the categorical
and status sets are already CVD-checked. Brand accent is **aqua/teal**, pulled
from categorical slot 3: it reads as "growth / money accumulating" and is
visually distinct from the reserved status-good green (`#0ca30c` vs `#1baf7a`
— different hue families, won't be misread as a status signal).

| Role | Light | Dark |
|---|---|---|
| Page plane | `#f9f9f7` | `#0d0d0d` |
| Surface (cards) | `#fcfcfb` | `#1a1a19` |
| Primary ink | `#0b0b0b` | `#ffffff` |
| Secondary ink | `#52514e` | `#c3c2b7` |
| Muted (axis/labels) | `#898781` | `#898781` |
| Hairline / border | `#e1e0d9` | `#2c2c2a` |
| Baseline / axis | `#c3c2b7` | `#383835` |
| **Brand / accent** | `#1baf7a` | `#199e70` |

## Status (fixed — never reused as a series color)

| Role | Hex | Used for |
|---|---|---|
| good | `#0ca30c` | Strong / On Track / Good |
| warning | `#fab219` | Below guideline, worth a look |
| serious | `#ec835a` | Needs Attention |
| critical | `#d03b3b` | Overdrawn, no emergency fund, high-interest debt |

Always paired with an icon + label — never color-alone (light-mode warning/
serious sit below 3:1 contrast by design).

## Categorical (charts with 2+ series)

Fixed order, never cycled or reordered per-chart:

| Slot | Hue | Hex (light) | Hex (dark) | Assigned to |
|---|---|---|---|---|
| 1 | blue | `#2a78d6` | `#3987e5` | Needs · Contributed (baseline) |
| 2 | orange | `#eb6834` | `#d95926` | Wants |
| 3 | aqua (brand) | `#1baf7a` | `#199e70` | Savings · Investment growth |
| 4 | yellow | `#eda100` | `#c98500` | (reserve — 4th series max before faceting) |

- **50/30/20 breakdown:** Needs = slot 1, Wants = slot 2, Savings = slot 3
  (brand color doing double duty is intentional — savings *is* the growth lever).
- **Compound growth chart:** Contributed = slot 1 (steady, neutral), Investment
  growth = slot 3 (brand aqua — this is the "why compounding matters" band and
  should visually pop).
- Aqua, yellow, and magenta sit under 3:1 contrast on the light surface — ship
  direct labels or a table view for any chart using them (see PASS/WARN run
  below).

## Sequential / diverging

- Sequential (single magnitude, e.g. a net-worth heatmap): blue ramp, steps
  100→700 in `dataviz/references/palette.md`.
- Diverging (e.g. cash-flow delta above/below zero): blue ↔ red, gray midpoint.

## Typography

System sans stack (already wired via `next/font` Geist in `layout.tsx`) —
no serif/display face. Large standalone figures (dashboard hero numbers, stat
tiles) use proportional figures; `tabular-nums` is reserved for anything that
must align in a column — projection tables, the scenario comparison table.

## Where this lives in code

Tokens are implemented as CSS custom properties in `app/globals.css` and
exposed to Tailwind via `@theme inline` (v4 syntax) — use the Tailwind
utilities (`bg-surface`, `text-primary`, `text-brand`, `bg-status-good`, etc.),
not raw hex, in components.

## Validation

Palette checked with the dataviz skill's validator before adoption:

```
node scripts/validate_palette.js \
  "#2a78d6,#eb6834,#1baf7a,#eda100,#e87ba4,#008300,#4a3aa7,#e34948" --mode light
```

Result: all hard gates pass; aqua/yellow/magenta flagged for the mandatory
label-or-table relief rule (see above). Re-run before adding any new series
color.
