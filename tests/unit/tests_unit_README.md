# 🧪 Unit Test Notes – Todo.vue

This short note explains the unit tests written for `Todo.vue` as part of the QA Engineer assessment.

---

## ✅ What Was Tested

1. **Computed Property** – `filteredTodos`
   - Confirmed that todos are correctly filtered by the selected filter value.

2. **User Interaction**
   - Simulated typing into the input field and pressing Enter.
   - Verified that a valid todo is added to the list.

3. **Edge Case**
   - Tried submitting an empty input.
   - Verified that an error message appears.

---

## 🧪 Mocking Used

No external modules or APIs needed mocking in this case.  
All logic is internal and handled via reactive state in Vue's composition API.  
We used `mount()` from `@vue/test-utils` to render the component in a test environment.

---

## ❌ Failing Test Example

Initially, we missed setting the input value before pressing Enter.

```js
await wrapper.find('input').trigger('keydown.enter')
```

This caused the `addTodo()` function to show an error ("Todo cannot be empty").

✅ After fixing:
```js
await wrapper.find('input').setValue('Buy milk')
await wrapper.find('input').trigger('keydown.enter')
```

This added the todo successfully and the test passed.

---

## ✅ Summary

The unit tests confirmed core functionality of the todo input logic, validation, and computed filtering logic using Vitest and `@vue/test-utils`.
