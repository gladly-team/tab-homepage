/* eslint-env jest */

import React from 'react'
import { shallow, mount } from 'enzyme'
import GoogleChrome from 'mdi-material-ui/GoogleChrome'
import MicrosoftEdge from 'mdi-material-ui/MicrosoftEdge'
import AppleSafari from 'mdi-material-ui/AppleSafari'

const mockProps = { onBeforeInstall: () => {} }
describe('FooterV2', () => {
  it('renders without error', () => {
    const FooterV2 = require('../FooterV2').default
    shallow(<FooterV2 {...mockProps} />)
  })

  it('clicking on the chrome icon sets local storage info', () => {
    const FooterV2 = require('../FooterV2').default
    const onBeforeInstallSpy = jest.fn()
    const wrapper = mount(<FooterV2 onBeforeInstall={onBeforeInstallSpy} />)
    expect(onBeforeInstallSpy).not.toHaveBeenCalled()
    wrapper.find(GoogleChrome).simulate('click')
    wrapper.update()
    expect(onBeforeInstallSpy).toHaveBeenCalled()
  })

  it('clicking on the edge icon sets local storage info', () => {
    const FooterV2 = require('../FooterV2').default
    const onBeforeInstallSpy = jest.fn()
    const wrapper = mount(<FooterV2 onBeforeInstall={onBeforeInstallSpy} />)
    expect(onBeforeInstallSpy).not.toHaveBeenCalled()
    wrapper.find(MicrosoftEdge).simulate('click')
    wrapper.update()
    expect(onBeforeInstallSpy).toHaveBeenCalled()
  })

  it('clicking on the Safari icon sets local storage info', () => {
    const FooterV2 = require('../FooterV2').default
    const onBeforeInstallSpy = jest.fn()
    const wrapper = mount(<FooterV2 onBeforeInstall={onBeforeInstallSpy} />)
    expect(onBeforeInstallSpy).not.toHaveBeenCalled()
    wrapper.find(AppleSafari).simulate('click')
    wrapper.update()
    expect(onBeforeInstallSpy).toHaveBeenCalled()
  })
})