import { mount } from '@vue/test-utils'
import { describe, it, expect } from 'vitest'
import Todo from '../../src/components/Todo.vue'


describe('Todo.vue', () => {
  it('filters todos correctly based on selected filter', async () => {
    const wrapper = mount(Todo)

    
    await wrapper.vm.todos.push(
      { id: 1, text: 'Short' },        
      { id: 2, text: 'This is long' }  
    )

    
    wrapper.vm.filter = 'short'
    await wrapper.vm.$nextTick()

    expect(wrapper.vm.filteredTodos.length).toBe(1)
    expect(wrapper.vm.filteredTodos[0].text).toBe('Short')

    
    wrapper.vm.filter = 'long'
    await wrapper.vm.$nextTick()

    expect(wrapper.vm.filteredTodos.length).toBe(1)
    expect(wrapper.vm.filteredTodos[0].text).toBe('This is long')

    
    wrapper.vm.filter = 'all'
    await wrapper.vm.$nextTick()

    expect(wrapper.vm.filteredTodos.length).toBe(2)
  })

  it('adds a new todo when input is valid and Enter is pressed', async () => {
  const wrapper = mount(Todo)
  const input = wrapper.find('input')

  
  await input.setValue('Write test')
  await input.trigger('keydown.enter')

  
  const listItems = wrapper.findAll('li')
  expect(listItems.length).toBe(1)
  expect(listItems[0].text()).toContain('Write test')
})

it('shows an error when trying to submit an empty todo', async () => {
  const wrapper = mount(Todo)

  const input = wrapper.find('input')
  await input.setValue('')
  await input.trigger('keydown.enter')

  const errorMessage = wrapper.find('.error')
  expect(errorMessage.exists()).toBe(true)
  expect(errorMessage.text()).toBe('Todo cannot be empty')
})


})
