import MessageContainer from '@/components/MessageContainer.vue'
import { mount } from '@vue/test-utils'

describe('MessageContainer', () => {
    it('Wraps MessageDisplay component', () => {
        const wrapper = mount(MessageContainer, {
            global: {
                stubs: {
                    MessageDisplay: {
                        template: '<p v-else data-testid="message">Hello from db!</p>'
                    }
                }
            }
        })
        const message = wrapper.find('[data-testid="message"]').text()
        expect(message).toEqual('Hello from db!')
    })
})