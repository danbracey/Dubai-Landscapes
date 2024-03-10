import { describe, it, expect } from 'vitest'

import { mount } from '@vue/test-utils'
import NavigationBar from '../NavigationBar.vue'
describe('Navigation Bar', () => {
    it('home link renders properly', () => {
        const wrapper = mount(NavigationBar)
        expect(wrapper.text()).toContain('Home')
    })
    it('landscaping services link renders properly', () => {
        const wrapper = mount(NavigationBar)
        expect(wrapper.text()).toContain('Landscaping Services')
    })
    it('gallery link renders properly', () => {
        const wrapper = mount(NavigationBar)
        expect(wrapper.text()).toContain('Gallery')
    })
    it('frequently asked questions link renders properly', () => {
        const wrapper = mount(NavigationBar)
        expect(wrapper.text()).toContain('FAQ')
    })
    it('contact us link renders properly', () => {
        const wrapper = mount(NavigationBar)
        expect(wrapper.text()).toContain('Contact Us')
    })
})
