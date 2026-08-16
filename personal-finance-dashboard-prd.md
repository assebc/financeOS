# Product Requirements Document

## 1. Product Overview

**Working Name:** FinanceOS  
**Product Type:** Personal Finance Planning & Simulation Platform  
**Platforms:** Web first, mobile later  
**Target Users:** Individuals who want to understand, track, and improve their personal finances without needing deep financial knowledge.

### Product Vision

Build a personal finance platform that transforms a user's income, expenses, savings, investments, and debts into simple, actionable financial metrics.

Rather than being another expense tracker, the product should answer questions such as:

- Am I saving enough?
- How healthy are my finances?
- Am I following the 50/30/20 rule?
- What is my financial independence number?
- When could I become financially independent?
- How much will my investments become in 10, 20, or 30 years?
- What happens if I invest €200 more per month?
- How large should my emergency fund be?
- How close am I to my financial goals?

The product combines **financial tracking, financial rules, education, goal tracking, and long-term simulations** in one dashboard.

---

# 2. Problem

Personal finance information is fragmented.

Users frequently need separate tools for:

- budgeting;
- compound-interest calculations;
- FIRE calculations;
- net-worth tracking;
- emergency-fund calculations;
- debt ratios;
- investment projections;
- savings goals.

Many existing financial apps also focus heavily on **what happened in the past**:

> "You spent €430 on restaurants last month."

While useful, this does not necessarily help users understand:

> "What does my current financial behavior mean for my future?"

FinanceOS should bridge that gap.

The product should convert financial data into understandable answers about both the user's **current financial position** and their **future trajectory**.

---

# 3. Product Principles

### 3.1 Numbers First

Financial calculations must be deterministic and reproducible.

AI must never be responsible for calculating core financial metrics.

### 3.2 Explain Everything

Every metric should answer three questions:

**What is it?**

**What is my number?**

**Why does it matter?**

### 3.3 Future-Oriented

The application should not simply track historical spending.

It should help users understand:

> "If I continue doing this, where will I be?"

### 3.4 Simple Before Powerful

Financial concepts can become complicated quickly.

The default experience should remain understandable to someone without financial expertise.

Advanced assumptions can be available without overwhelming new users.

### 3.5 Guidelines, Not Financial Advice

Financial rules such as 50/30/20, 25× expenses, and the 4% rule are guidelines and assumptions rather than guarantees.

The UI must communicate this clearly.

---

# 4. Target Users

## Primary Persona — Financial Improver

Someone earning regular income who wants better visibility into their finances.

Typical characteristics:

- earns monthly income;
- has savings or investments;
- wants to save more;
- understands basic personal finance;
- may use spreadsheets currently;
- wants to understand financial progress.

Typical questions:

> "Am I saving enough?"

> "How much should I have invested?"

> "When could I retire?"

---

## Secondary Persona — FIRE / Investing User

A financially engaged user interested in:

- FIRE;
- investing;
- savings rates;
- compound growth;
- portfolio projections;
- financial independence.

This user is more likely to experiment with assumptions and scenarios.

---

## Secondary Persona — Beginner

Someone starting to take control of their finances.

The product should teach concepts without requiring the user to understand financial terminology beforehand.

---

# 5. Core User Journey

The primary journey should be:

**Input → Understand → Simulate → Improve → Track**

### Input

The user provides:

- income;
- expenses;
- assets;
- debts;
- investments;
- monthly contributions.

### Understand

FinanceOS calculates their current financial position.

### Simulate

The user sees how their finances may evolve over time.

### Improve

The product shows which variables have the largest impact.

### Track

The user monitors progress toward financial goals.

---

# 6. MVP Scope

The MVP should contain six primary modules.

1. Financial Dashboard
2. Financial Rules
3. Compound Growth Simulator
4. Financial Independence Calculator
5. Goals
6. Scenario Comparison

Bank integrations and automatic transaction imports are explicitly excluded from the initial MVP.

---

# 7. Onboarding

## Objective

Collect enough information to immediately generate useful financial insights.

## Required Inputs

### Income

- Monthly net income
- Optional additional income

### Expenses

Users should be able to enter either total expenses or categories.

Core categories:

- housing;
- food;
- transport;
- utilities;
- insurance;
- debt payments;
- entertainment;
- subscriptions;
- other.

Expenses should additionally be classifiable as:

- Needs
- Wants
- Savings / Investments

This enables the 50/30/20 calculation.

### Assets

Examples:

- cash;
- savings accounts;
- investments;
- retirement accounts;
- property;
- other assets.

### Liabilities

Examples:

- mortgage;
- student loans;
- credit cards;
- personal loans;
- car loans;
- other debt.

### Investments

Capture:

- current portfolio value;
- monthly contribution;
- expected annual return.

---

# 8. Dashboard

The dashboard is the main product surface.

It should answer:

> "How am I doing financially?"

## Primary Metrics

### Net Worth

Formula:

`Total Assets - Total Liabilities`

Example:

**Net Worth**

€82,450

+€3,240 this year

---

### Monthly Cash Flow

Formula:

`Income - Expenses`

Example:

Income: €3,500  
Expenses: €2,400  
Remaining: **€1,100**

---

### Savings Rate

Formula:

`Savings / Net Income × 100`

Example:

**Savings Rate**

31.4%

---

### Emergency Fund

Formula:

`Liquid Emergency Savings / Essential Monthly Expenses`

Example:

**Emergency Fund**

5.2 months

Recommended guideline: 3–6 months

---

### Financial Independence Progress

Example:

**FI Progress**

€125,000 / €625,000

20%

---

### Debt-to-Income Ratio

Display the user's monthly debt obligations relative to income.

---

# 9. Financial Rules Engine

Users should have a dedicated **Rules** section.

Each rule must contain:

1. Rule name
2. Short explanation
3. Formula
4. User's result
5. Interpretation
6. Assumptions / limitations

---

## 9.1 50/30/20 Rule

Compare monthly income allocation against:

- 50% Needs
- 30% Wants
- 20% Savings

Example:

| Category | Target | User |
|---|---:|---:|
| Needs | 50% | 47% |
| Wants | 30% | 21% |
| Savings | 20% | 32% |

The product should avoid treating deviations as inherently "bad."

The rule is a guideline.

---

# 10. Financial Independence

## 10.1 25× Rule

Formula:

`Annual Expenses × 25`

Example:

Annual expenses:

€25,000

Estimated FI target:

**€625,000**

---

## 10.2 4% Rule

Formula:

`Portfolio × 4%`

Example:

Portfolio:

€500,000

Estimated initial annual withdrawal:

**€20,000**

The product must explain that this is based on historical assumptions and is not a guaranteed safe withdrawal rate.

---

## 10.3 FI Progress

Formula:

`Current Investable Assets / FI Target`

Example:

Current investments:

€125,000

FI target:

€625,000

Progress:

**20%**

---

# 11. Compound Growth Simulator

This should be one of the application's primary interactive tools.

## Inputs

- Initial investment
- Monthly contribution
- Expected annual return
- Investment duration
- Optional inflation rate

## Outputs

- Future portfolio value
- Total contributions
- Investment growth
- Inflation-adjusted value

Example:

Starting investment:

€25,000

Monthly contribution:

€600

Return:

7%

Duration:

20 years

Result:

**Projected portfolio: €430,000**

The visualization should distinguish between:

**Money contributed**

and

**Investment growth**

---

# 12. Rule of 72

Provide an estimated time for an investment to double.

Formula:

`72 / Annual Return`

Example:

7% return:

`72 / 7 = ~10.3 years`

The application should clearly label this as an approximation.

---

# 13. Emergency Fund

Calculate the recommended emergency reserve.

## Inputs

- Essential monthly expenses
- Current liquid savings

## Outputs

Display:

- current emergency savings;
- months covered;
- 3-month target;
- 6-month target;
- progress.

Example:

Essential expenses:

€1,500/month

Savings:

€6,000

Coverage:

**4 months**

---

# 14. Goal Tracking

Users should be able to create financial goals.

Examples:

- Emergency fund
- €100k invested
- House deposit
- Pay off debt
- Financial independence
- Retirement
- Custom savings target

## Goal Model

Each goal should contain:

- Name
- Target amount
- Current amount
- Monthly contribution
- Target date
- Estimated completion date

Example:

### Financial Independence

€125,000 / €625,000

**20% complete**

Estimated completion:

**September 2041**

---

# 15. Scenario Simulator

Users should be able to answer:

> "What happens if I change something?"

Users can duplicate their current financial plan and modify variables.

Example:

| Scenario | Monthly Investment | FI Age |
|---|---:|---:|
| Current | €500 | 52 |
| Invest More | €750 | 47 |
| Aggressive | €1,000 | 44 |

Potential variables:

- income;
- expenses;
- monthly contributions;
- expected investment return;
- inflation;
- FI target;
- withdrawal rate.

Users should be able to save scenarios.

---

# 16. Projection Timeline

Provide a timeline showing projected milestones.

Example:

**2026**

€25k invested

↓

**2030**

€75k invested

↓

**2033**

€100k milestone

↓

**2040**

€350k invested

↓

**2045**

Financial independence

This should update dynamically when assumptions change.

---

# 17. Financial Health Overview

The platform may provide a high-level health overview.

Possible dimensions:

- Savings
- Debt
- Emergency Fund
- Investments
- Cash Flow
- FI Progress

Avoid presenting an arbitrary score as objective financial truth.

A better approach is categorical status.

Example:

| Metric | Status |
|---|---|
| Cash Flow | Strong |
| Emergency Fund | Good |
| Savings Rate | Strong |
| Debt | Needs Attention |
| FI Progress | On Track |

Every status must explain the criteria used to generate it.

---

# 18. Educational Layer

Each financial metric should include lightweight educational content.

Example:

### Savings Rate

**Your savings rate: 28%**

Savings rate represents the percentage of your income that you keep rather than spend.

Higher savings rates generally allow financial goals to be reached faster.

Users should be able to select:

**Learn more**

for deeper explanations.

---

# 19. AI Assistant — Future Feature

AI should act as an **explanation interface**, not a calculation engine.

Good AI use cases:

> "Explain my FI number."

> "Why did my FI date move?"

> "What does a 30% savings rate mean?"

> "Explain compound interest simply."

> "Compare these two scenarios."

The AI should consume results produced by the finance engine.

Architecture:

`User Data → Finance Engine → Calculated Results → AI Explanation`

Not:

`User Data → AI → Financial Calculation`

---

# 20. Technical Architecture

Recommended stack:

### Frontend

- Next.js
- React
- TypeScript
- Tailwind CSS

### Backend

Initially:

- Next.js API / Server Actions

Potential later separation:

- Node.js service

### Database

PostgreSQL

### Authentication

Options include:

- Clerk
- Auth.js
- Supabase Auth

### Charts

Potential options:

- Recharts
- Tremor
- ECharts

---

# 21. Finance Engine

Financial calculations should live in an independent package.

Example monorepo:

```text
apps/
  web/
  mobile/

packages/
  finance-engine/
  finance-models/
  ui/
```

Finance engine:

```text
finance-engine/
  budgeting/
    fiftyThirtyTwenty.ts

  investing/
    compoundInterest.ts
    ruleOf72.ts

  fire/
    fireNumber.ts
    withdrawalRate.ts
    fireProjection.ts

  debt/
    debtToIncome.ts

  savings/
    savingsRate.ts
    emergencyFund.ts

  net-worth/
    netWorth.ts

  projections/
    portfolioProjection.ts
```

Functions should be pure whenever practical.

Example:

```ts
calculateFutureValue(input)
calculateFireNumber(input)
calculateFireProjection(input)
calculateSavingsRate(input)
calculateBudgetAllocation(input)
calculateEmergencyFund(input)
calculateDebtToIncome(input)
calculateNetWorth(input)
```

---

# 22. Example Domain Models

```ts
interface FinancialProfile {
  currency: string;

  monthlyIncome: number;
  monthlyExpenses: number;

  assets: Asset[];
  liabilities: Liability[];

  investments: InvestmentAccount[];
}
```

```ts
interface FinancialGoal {
  id: string;
  name: string;

  targetAmount: number;
  currentAmount: number;

  monthlyContribution: number;

  targetDate?: Date;
}
```

```ts
interface ProjectionAssumptions {
  annualReturn: number;
  inflationRate: number;
  monthlyContribution: number;
  years: number;
}
```

---

# 23. Data Model

Core database entities:

```text
User
FinancialProfile
Income
Expense
Asset
Liability
InvestmentAccount
Goal
Scenario
ScenarioAssumption
FinancialSnapshot
```

Financial snapshots should preserve historical state so that the user can eventually see:

**Net Worth Over Time**

and

**FI Progress Over Time**

without reconstructing historical values from current records.

---

# 24. Testing Requirements

Financial calculations require strong automated testing.

Each financial rule should include:

- unit tests;
- boundary tests;
- zero-value tests;
- negative-value validation;
- high-value tests;
- decimal/rounding tests.

Example:

```ts
describe("calculateFireNumber", () => {
  it("calculates the 25x rule", () => {
    expect(
      calculateFireNumber({
        annualExpenses: 25_000,
        multiplier: 25,
      })
    ).toBe(625_000);
  });
});
```

Financial calculations should never depend on formatted currency strings.

Internally:

```text
625000
```

UI:

```text
€625,000
```

---

# 25. Currency Support

Currency should be configurable per user.

Initial currencies could include:

- EUR
- USD
- GBP

All financial calculations should remain currency-independent.

Currency belongs primarily to presentation and user preferences.

---

# 26. Security & Privacy

Financial information is highly sensitive.

The product should:

- encrypt data in transit;
- use encryption at rest where appropriate;
- never log sensitive financial values unnecessarily;
- enforce user-level authorization;
- protect API routes;
- use secure authentication;
- avoid exposing financial information to analytics tools;
- allow account and financial-data deletion.

Financial data should never be used for advertising without explicit user consent.

---

# 27. Non-Goals for MVP

The first version should **not** attempt to become a bank.

Exclude:

- Open Banking
- Automatic bank synchronization
- Brokerage integration
- Automatic transaction categorization
- Stock trading
- Crypto trading
- Tax preparation
- Credit scoring
- Financial-adviser marketplace
- Real-time stock prices
- AI investment recommendations

These introduce significant engineering, regulatory, privacy, and operational complexity before the core product has been validated.

---

# 28. MVP Navigation

Recommended structure:

```text
Dashboard

Plan
  Goals
  Scenarios

Explore
  Compound Growth
  Financial Independence
  Financial Rules

Finances
  Income
  Expenses
  Assets
  Debts
  Investments

Settings
```

---

# 29. MVP Dashboard Concept

```text
Good evening

Your financial position
────────────────────────────────

Net Worth                 €82,450
Monthly Cash Flow          €1,100
Savings Rate                  31%
Emergency Fund          5.2 months

────────────────────────────────

Financial Independence

€125,000                    €625,000
████████░░░░░░░░░░░░░░░░░░░
20%

Estimated FI date
September 2041

────────────────────────────────

Your Money

Needs       47%
Wants       21%
Savings     32%

50/30/20 guideline
✓ Savings above guideline

────────────────────────────────

Portfolio Projection

Today                      €125k
10 years                   €286k
20 years                   €612k
30 years                  €1.21m

────────────────────────────────

Goals

Emergency Fund       ████████░░ 80%
€100k Invested       ██████░░░░ 61%
House Deposit        ███░░░░░░░ 32%
```

---

# 30. MVP User Stories

### Financial Profile

As a user, I want to enter my income, expenses, assets, debts, and investments so that the platform understands my financial situation.

### Dashboard

As a user, I want to see my most important financial metrics in one place.

### Financial Rules

As a user, I want my finances evaluated against common financial guidelines so that I can understand where I stand.

### Compound Growth

As a user, I want to simulate investment growth so that I can understand the impact of time and contributions.

### Financial Independence

As a user, I want to calculate my FI target and estimated FI date.

### Goals

As a user, I want to create financial goals and track progress toward them.

### Scenarios

As a user, I want to change assumptions and compare outcomes before making financial decisions.

---

# 31. Success Metrics

Initial product metrics should focus on whether users receive recurring value.

### Activation

Percentage of users who:

- complete their financial profile;
- receive their first dashboard;
- calculate an FI target;
- create at least one goal.

### Engagement

Track:

- weekly active users;
- simulations per user;
- goals created;
- scenarios created;
- dashboard return frequency.

### Retention

Most important question:

> Do users return to update their finances and check their progress?

Potential metric:

**30-day returning financial trackers**

---

# 32. Development Phases

## Phase 1 — Finance Engine

Build and test:

- net worth;
- savings rate;
- 50/30/20;
- compound growth;
- emergency fund;
- 25× rule;
- 4% rule;
- Rule of 72;
- FI projections.

---

## Phase 2 — Core Web Application

Build:

- authentication;
- onboarding;
- financial profile;
- dashboard;
- manual data entry;
- persistent storage.

---

## Phase 3 — Planning

Build:

- goals;
- scenarios;
- projections;
- milestone timeline.

---

## Phase 4 — Product Intelligence

Add:

- financial insights;
- explanations;
- trend detection;
- AI explanations.

---

## Phase 5 — Automation

After product validation, investigate:

- Open Banking;
- transaction imports;
- account synchronization;
- automatic categorization;
- investment synchronization.

---

# 33. Key Differentiator

The product should not compete primarily on:

> **"Where did my money go?"**

Its core value proposition should be:

> **"Where are my finances taking me?"**

Traditional budgeting products are primarily retrospective.

FinanceOS should be **forward-looking**.

It combines:

**Current financial position**

+

**Financial rules**

+

**Compound growth**

+

**Goals**

+

**Financial independence**

+

**What-if scenarios**

into a single financial planning experience.

---

# 34. MVP Definition of Done

The MVP is successful from a product-development perspective when a new user can:

1. Create an account.
2. Enter their basic financial information.
3. Immediately see their net worth and cash flow.
4. See their savings rate.
5. Compare spending against 50/30/20.
6. Calculate their emergency-fund coverage.
7. Calculate their FI number using the 25× guideline.
8. Understand the 4% guideline.
9. Simulate compound investment growth.
10. See an estimated FI timeline.
11. Create financial goals.
12. Compare at least two financial scenarios.
13. Return later and update their financial position.

At that point, the product provides a complete **personal finance planning loop** without requiring bank integrations or AI.