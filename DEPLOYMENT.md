# Deploying Spendlane

## Environments

| Environment | Address | Deployed from |
| --- | --- | --- |
| Production | `spendlane-web.vercel.app` | `main` |
| Preview | One address per branch and per pull request, behind Vercel Authentication | Any other branch |
| Development | `npm run dev` on a laptop | The working copy |

## Variables

Set in Vercel, Settings, Environment Variables. A change applies to new deployments only: redeploy after changing a value.

| Name | Production | Preview | Development |
| --- | --- | --- | --- |
| `VITE_APP_ENV` | `production` | `preview` | `development`, in `.env.local` |
| `VITE_SALES_CALENDAR_URL` | The sales calendar | The test calendar | Empty |

## From a branch to production

1. Work on a branch, one story per branch.
2. Open a pull request: the CI workflow runs lint, type check, unit tests and build, and Vercel deploys a preview.
3. A teammate reads the diff and reruns the test cases of the story on the preview.
4. When the workflow is green and the review is done, merge into `main`: Vercel deploys production.
5. Rerun the test cases of the story on production.

## Rolling back

1. Whoever spots the problem tells the team in the product channel and opens an issue.
2. In Vercel, Overview, choose Instant Rollback. On the free plan, only the immediately previous production deployment is available.
3. Open a pull request that reverts the faulty change, with the Revert button of the merged pull request or `git revert`.
4. After the merge, undo the rollback in Vercel, Manage, so that production follows `main` again.
5. Write the incident note: timeline, impact, cause, fix, prevention.

## Dependency watch

- Dependabot alerts are on for the repository.
- Every Monday, `npm audit` runs locally; any high or critical vulnerability becomes an issue.
