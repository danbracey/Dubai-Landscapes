import { describe, it, expect } from 'vitest'

import { mount, RouterLinkStub } from '@vue/test-utils'
import TextBlock from "../TextBlock.vue";

describe('Paragraph/Text Block', () => {
    const wrapper = mount(TextBlock, {
        props: {
            background_img: "IMG_9413.webp",
            text_block: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
            Mauris ipsum lectus, mattis non augue at, pellentesque fermentum diam. 
            Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nam odio lacus, 
            consectetur nec justo ut, tincidunt dapibus eros. Donec in ex turpis. 
            Etiam non mi vitae nulla iaculis cursus. Curabitur vulputate commodo eros, eu pharetra lectus ullamcorper a.
            Curabitur at egestas purus. Etiam facilisis, magna tincidunt pulvinar pharetra, 
            erat arcu pellentesque elit, a convallis velit risus eu mauris. 
            Sed imperdiet est et felis vulputate accumsan. Maecenas dignissim diam ut tempus commodo. 
            Etiam cursus mattis lectus a tempor.`
        }
    })

    it('renders text block correctly', () => {
        expect(wrapper.props('banner_text')).toBe('UAE\'s leading landscapes')
    })
    it('background image is set correctly', () => {
        expect(wrapper.style.backgroundImage.url).toBe('/src/assets/IMG_9413.webp')
    })
})
