# Bug Analysis: Duplicate Todo Items

## Steps to Reproduce
1. Open the app at `/`
2. In the input field, type `Study`
3. Press `Enter`
4. Repeat steps 2–3 and enter `Study` again
5. Observe that the item appears twice in the list

## Root Cause Hypothesis
The `addTodo()` method does not check for duplicate values before adding a new item. It only checks for empty input. Here's the current logic:

```js
if (newTodo.value.length === 0) {
  error.value = 'Todo cannot be empty'
  return
}
todos.value.push({
  id: Math.floor(Date.now() / 1000),
  text: newTodo.value
})
