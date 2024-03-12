import { describe, it, expect } from 'vitest'

import { mount } from '@vue/test-utils'
import Carousel from "../CarouselBanner.vue";

describe('Carousel', () => {
    const wrapper = mount(Carousel, {
        props: {
            banner_text: "UAE's leading landscapes",
            button_text: 'View our Gallery',
            route_name: 'gallery'
        }
    })

    it('renders banner text correctly', () => {
        expect(wrapper.props('banner_text')).toBe('UAE\'s leading landscapes')
    })
    it('renders button text correctly', () => {
        expect(wrapper.props('button_text')).toBe('View our Gallery')
    })
    it('renders route correctly', () => {
        expect(wrapper.props('route_name')).toBe('gallery')
    })

})
