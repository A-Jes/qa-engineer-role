
# 🧪 QA Test Plan for Todo.vue Component

## 🧠 Test Strategy Overview

This test plan covers the core functionality of the `Todo.vue` component, including input validation, item creation/deletion, filtering logic, and UI state rendering. Testing will be layered across:

### 1. Unit Tests
- Validate computed property `filteredTodos`
- Input validation logic (`newTodo.length`)
- Test `addTodo` and `deleteTodo` methods directly

### 2. Integration Tests
- Test UI + logic flow: input → add → list updates → delete
- Check validation message visibility and clearing
- Interaction between filter state and displayed list

### 3. End-to-End (E2E) Tests
- Simulate a user logging in, adding multiple todos, deleting one, filtering list
- Validate expected behavior through UI with Playwright

### 🔢 Prioritization

| Priority | Area                      | Reason                                           |
|----------|---------------------------|--------------------------------------------------|
| High     | Input validation          | Prevents invalid todos; core user flow          |
| High     | Add/Delete functionality  | Critical to main purpose of the app             |
| Medium   | Filter behavior           | Enhances usability; not critical to core logic  |
| Low      | UI error messages         | Non-blocking but improves UX                    |

---

## 🧪 Test Cases

### ✅ Test Case 1: Add a Valid Todo

- **Description:** Ensure a new todo is added when valid text is entered and Enter key is pressed.
- **Preconditions:** Page is loaded; input is empty.
- **Steps:**
  1. Type `"Buy milk"` into the input field.
  2. Press `Enter`.
- **Expected Result:** Todo list updates to show `"Buy milk"`.

---

### ⚠️ Test Case 2: Add Empty Todo (Validation)

- **Description:** Ensure validation error shows when trying to add an empty todo.
- **Preconditions:** Page is loaded; input is empty.
- **Steps:**
  1. Focus the input field.
  2. Press `Enter` without typing anything.
- **Expected Result:** Error message `"Todo cannot be empty"` is shown.

---

### 🗑️ Test Case 3: Delete a Todo

- **Description:** Ensure clicking delete removes the corresponding todo from the list.
- **Preconditions:** At least one todo exists.
- **Steps:**
  1. Add a todo `"Walk dog"`.
  2. Click the "Delete" button next to `"Walk dog"`.
- **Expected Result:** `"Walk dog"` is no longer visible in the list.

---

### 🔍 Test Case 4: Filter Short Todos

- **Description:** Verify that filtering for short todos works correctly.
- **Preconditions:** Add todos: `"Read"`, `"Workout"`, `"International travel"`.
- **Steps:**
  1. Select the "Short (≤ 10 chars)" option from the filter dropdown.
- **Expected Result:** Only `"Read"` and `"Workout"` are shown; `"International travel"` is hidden.

---

### 🔁 Test Case 5: Reset After Adding

- **Description:** Ensure input field is cleared after successfully adding a todo.
- **Preconditions:** Page is loaded.
- **Steps:**
  1. Type `"Learn QA"` into the input.
  2. Press `Enter`.
- **Expected Result:** `"Learn QA"` appears in the list, and the input field is empty.

---

✅ End of test-plan.md
