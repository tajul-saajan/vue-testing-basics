import { mount, shallowMount } from '@vue/test-utils'
import Home from '@/views/Home'
import About from '@/views/About'
import ChildComponent from '@/components/ChildComponent'

describe('Home.vue', () => {
  it('verifies static message on a page', () => {
    const msg = 'This is an Home page'
    const wrapper = shallowMount(Home)
    expect(wrapper.text()).toMatch(msg)
  })
})

describe('About.vue', () => {
  it('increments a counter', async () => {
    const wrapper = shallowMount(About)
    const button = wrapper.find('button')
    const counter = wrapper.find('#counter')
    const value = wrapper.find('#counter').text()
    await button.trigger('click')
    expect(counter.text()).toMatch(String(+value + 1))
  })
})

describe('Home.vue and its component ChildComponent.vue', () => {
  it('should emit and change value of val', async () => {
    const wrapper = mount(Home)
    expect(wrapper.vm.val).toBe(0)
    await wrapper.findComponent(ChildComponent).vm.$emit('emitted', 1)
    expect(wrapper.text()).toMatch('True')
  })
})
