# Spendlane site

Spendlane automates expense reports for small and mid-sized companies. This repository holds its marketing site (a savings calculator and a demo form) and, under `server/`, a small expense repository with its tests.

## Run it

You need Node 20 or later.

```bash
npm ci
npm run dev
```

| Command | What it does |
| --- | --- |
| `npm run dev` | Starts the site on a local address |
| `npm run lint` | Checks the code with ESLint |
| `npm run typecheck` | Checks the types of the site and of `server/` |
| `npm test` | Runs the unit tests of the site |
| `npm run test:server` | Runs the expense repository tests against `DATABASE_URL` |
| `npm run build` | Builds the site into `dist` |

## Environment variables

| Name | Production | Preview | Development |
| --- | --- | --- | --- |
| `VITE_APP_ENV` | `production` | `preview` | `development` |
| `VITE_SALES_CALENDAR_URL` | The real sales calendar | A test calendar | Empty |
| `DATABASE_URL` | Not used by the site | Not used by the site | A local Postgres, for `npm run test:server` |

## User stories

- **Savings calculator.** With 1 to 5,000 employees and 1 to 30 reports per employee per month, the calculator shows the hours saved per month: 10 minutes per report, rounded to one decimal. 50 employees with 4 reports each save 33.3 hours. Outside those ranges it asks for valid numbers.
- **Demo form.** Full name (2 characters or more), work email (`name@domain.tld`) and company size are required; each error shows next to its field. On success, the page thanks the visitor and, when `VITE_SALES_CALENDAR_URL` is set, links to the sales calendar.
