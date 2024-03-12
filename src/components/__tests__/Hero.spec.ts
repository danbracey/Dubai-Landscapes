import { describe, it, expect } from 'vitest'

import { mount } from '@vue/test-utils'
import Hero from "../HeroBanner.vue";

describe('Hero section', () => {
    const wrapper = mount(Hero, {
        props: {
            h1: 'Landscaping Services',
            subtitle: 'For your personal oasis in the UAE'
        }
    })

    it('h1 renders properly', () => {
        expect(wrapper.props("h1")).toBe('Landscaping Services')
    })
    it('subtitle renders properly', () => {
        expect(wrapper.props("subtitle")).toBe('For your personal oasis in the UAE')
    })
})
