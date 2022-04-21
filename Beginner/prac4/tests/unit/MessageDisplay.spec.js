import MessageDisplay from '@/components/MessageDisplay.vue'
import { flushPromises, mount } from '@vue/test-utils'
import { getMessage } from '@/services/axios.js'


jest.mock('@/services/axios.js')
beforeEach( () => {
    jest.clearAllMocks()
})

describe('MessageDisplay', () => {
    it('Calls getMessage and message shows', async () => {
        const mockMessage = 'Hello from the db!'
        getMessage.mockResolvedValueOnce({ "text": mockMessage })
        const wrapper = mount(MessageDisplay)

        await flushPromises()
        expect(getMessage).toHaveBeenCalledTimes(1)
        const message = wrapper.find('[data-testid="message"]').text()
        expect(message).toEqual(mockMessage)

    })

    it('Calls getMessage and message doesnt show', async () => {
        const mockError = 'Oops! Something went wrong.'
        getMessage.mockRejectedValueOnce(mockError)
        const wrapper = mount(MessageDisplay)

        await flushPromises()
        expect(getMessage).toHaveBeenCalledTimes(1)
        const err = wrapper.find('[data-testid="message-error"]').text()
        expect(err).toEqual(mockError )
        
    })
})