import RandomNumber from '@/components/RandomNumber.vue'
import { mount } from '@vue/test-utils'

describe('RandomNumber', () => {
    test('By default should be 0', () => {
        const wrapper = mount(RandomNumber)
        expect(wrapper.html()).toContain('<span>0</span>')
    })

    test('if button clicked should be from 1 to 10', async () => {
        const wrapper = mount(RandomNumber)
        await wrapper.find('button').trigger('click')
        const randomNumber = parseInt(wrapper.find('span').text())
        expect(randomNumber).toBeGreaterThanOrEqual(1)
        expect(randomNumber).toBeLessThanOrEqual(10)

    })

    test('if button clicked should be from 200 to 300', async () => {
        const wrapper = mount(RandomNumber, {
            props: {
                min: 200,
                max: 300,
            }
        })
        await wrapper.find('button').trigger('click')
        const randomNumber = parseInt(wrapper.find('span').text())
        expect(randomNumber).toBeGreaterThanOrEqual(200)
        expect(randomNumber).toBeLessThanOrEqual(300)
    })
})