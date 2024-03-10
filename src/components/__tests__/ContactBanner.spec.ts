import { describe, it, expect } from 'vitest'

import { mount } from '@vue/test-utils'
import ContactBanner from '../ContactBanner.vue'

describe('Contact banner', () => {
    it('phone number renders properly', () => {
        const wrapper = mount(ContactBanner, {
            props: {
                phone: '0118 999 881 999 119 7253',
            }
        })
        expect(wrapper.text()).toContain('0118 999 881 999 119 7253')
    })
    it('email address renders properly', () => {
        const wrapper = mount(ContactBanner, {
            props: {
                email: 'customer-services@dubai-landscapes.com',
            }
        })
        expect(wrapper.text()).toContain('customer-services@dubai-landscapes.com')
    })
})
