# E2E Test Summary

## How I handled flakiness
To prevent flaky test behavior caused by Vue's async updates and potential ID collisions, I introduced a delay after adding each todo item using `page.waitForTimeout(1100)`. This ensured that each todo received a unique `id`, as the component logic is based on `Date.now() / 1000`.

Additionally, I used `.allTextContents()` to reliably assert the presence or absence of todo items across multiple DOM nodes, avoiding strict mode violations in Playwright.

---

##  How I’d report test failures
I used `page.screenshot()` to capture app state both after todos are added and after deletion. This ensures any UI issue can be visualized in CI artifacts.

In a real-world CI setup, I would:
- Use Playwright's HTML report (`npx playwright show-report`)
- Forward failed test screenshots/logs to QA channels or issue trackers (e.g., Slack, Jira)
- Link failing tests to test case IDs if integrated with a test management system like TestRail

---

## How this fits into CI
This E2E test can be run via GitHub Actions or any CI pipeline that supports Node.js. I would:

- Add `npx playwright install` in the CI setup
- Use `npx playwright test` as a step in the test stage
- Optionally run it in headless mode on Chromium only to reduce CI time
- Save Playwright’s HTML report and screenshots as test artifacts

The E2E suite would run:
- On every pull request
- After deployment to staging environments
- On a nightly schedule, depending on test depth

