import { describe, it, expect } from 'vitest'

import { mount } from '@vue/test-utils'
import TextBlock from "../TextBlock.vue";

describe('Paragraph/Text Block', () => {
    const wrapper = mount(TextBlock, {
        props: {
            background_img: "IMG_9413.webp",
        },
        slots: {
            default: `Lorem ipsum dolor sit amet`
        }
    })

    it('renders text block correctly', () => {
        expect(wrapper.text()).toBe(`Lorem ipsum dolor sit amet`)
    })
})
