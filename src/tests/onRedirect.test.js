import { mount } from '@vue/test-utils'
import { BaseContent } from '@/components'

describe('BaseContent', () => {
  it('Редирект при нажатии на кноаку', async () => {
    const wrapper = mount(BaseContent)

    delete window.location
    window.location = { href: '' }

    await wrapper.find('button').trigger('click')

    expect(window.location.href).toBe('/some-action')
  })
})
