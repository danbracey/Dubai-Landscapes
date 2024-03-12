import { describe, it, expect } from 'vitest'

import {mount, shallowMount} from '@vue/test-utils'
import ContactForm from "../ContactForm.vue";

describe('Contact Us form', () => {
    it('Submit button is found and can be clicked', async () => {
        const wrapper = shallowMount(ContactForm);
        const submitButton = wrapper.find('#submit');

        await submitButton.trigger('click')
        expect(submitButton).toBeCalled();
    })
})
