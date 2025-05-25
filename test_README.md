# 🧪 PressOne QA Engineer Assessment

This project contains my QA assessment submission for the QA Engineer role at PressOne. It demonstrates my ability to plan, write, and execute different types of tests for a Vue.js Todo app.

---

## 🔍 What I Tested

- **Todo Input Behavior**: Adding, deleting, and validating todos
- **Computed Logic**: Filtering todos by length
- **Edge Cases**: Preventing empty todos
- **E2E Flow**: Logging in, managing todos, and logging out
- **Bug Report**: Investigated and documented a user-reported issue (duplicate todos)

---

## 📁 Project Structure

```
qa-engineer-role/
├── e2e/
│   ├── todo-flow.spec.js       # E2E test using Playwright
│   └── README.md               # Flakiness handling and CI notes
├── tests/
│   └── unit/
│       └── Todo.spec.js        # Unit tests using Vitest
├── bug-report/
│   ├── duplicate-items.txt     # Provided user bug report
│   └── analysis.md             # My analysis and prevention strategy
├── test-plan.md                # High-level test strategy and 5 test cases
├── src/components/Todo.vue     # Main Vue component under test
├── playwright.config.js        # Config for Playwright
```

---

## 🧪 How to Run Tests

### 1. Start the App
```bash
npm install
npm run dev
```

### 2. Run Unit Tests (Vitest)
```bash
npx vitest run
```

### 3. Run E2E Tests (Playwright)
```bash
npx playwright test
```

---

## 📌 Highlights

- **Unit Testing**: Used `vitest` and `@vue/test-utils` to isolate logic and interactions.
- **E2E Testing**: Used `@playwright/test` to simulate real user flows.
- **Test Plan**: Provided a short, focused test strategy with 5 test cases.
- **Bug Analysis**: Identified root cause of duplicate todos and proposed fix.
- **CI Awareness**: Wrote how E2E tests can be integrated and made resilient in CI.

---

## ✅ Summary

This project showcases a complete QA workflow — from test planning to automated test execution. It reflects how I would contribute to delivering high-quality software at PressOne.

---

Thanks for reviewing!
