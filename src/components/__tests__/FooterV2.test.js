/* eslint-env jest */

import React from 'react'
import { mount } from 'src/utils/testHelpers/componentTesting'
import GoogleChrome from 'mdi-material-ui/GoogleChrome'
import MicrosoftEdge from 'mdi-material-ui/MicrosoftEdge'
import AppleSafari from 'mdi-material-ui/AppleSafari'
import FooterBlobLeft from '../FooterBlobLeft'
import FooterBlobRight from '../FooterBlobRight'

jest.mock('../FooterBlobLeft', () => () => <span />)
jest.mock('../FooterBlobRight', () => () => <span />)
jest.mock('mdi-material-ui/GoogleChrome', () => () => <span />)
jest.mock('mdi-material-ui/MicrosoftEdge', () => () => <span />)
jest.mock('mdi-material-ui/AppleSafari', () => () => <span />)

const mockProps = {
  onBeforeInstall: () => {},
  footerData: { img: {}, bubbleColor: '#ABABAB' },
}
describe('FooterV2', () => {
  it('renders without error', () => {
    const FooterV2 = require('../FooterV2').default
    mount(<FooterV2 {...mockProps} />)
  })

  it('clicking on the chrome icon sets local storage info', () => {
    const FooterV2 = require('../FooterV2').default
    const onBeforeInstallSpy = jest.fn()
    const wrapper = mount(
      <FooterV2
        onBeforeInstall={onBeforeInstallSpy}
        footerData={mockProps.footerData}
      />
    )
    expect(onBeforeInstallSpy).not.toHaveBeenCalled()
    wrapper.find(GoogleChrome).simulate('click')
    wrapper.update()
    expect(onBeforeInstallSpy).toHaveBeenCalled()
  })

  it('clicking on the edge icon sets local storage info', () => {
    const FooterV2 = require('../FooterV2').default
    const onBeforeInstallSpy = jest.fn()
    const wrapper = mount(
      <FooterV2
        onBeforeInstall={onBeforeInstallSpy}
        footerData={mockProps.footerData}
      />
    )
    expect(onBeforeInstallSpy).not.toHaveBeenCalled()
    wrapper.find(MicrosoftEdge).simulate('click')
    wrapper.update()
    expect(onBeforeInstallSpy).toHaveBeenCalled()
  })

  it('clicking on the Safari icon sets local storage info', () => {
    const FooterV2 = require('../FooterV2').default
    const onBeforeInstallSpy = jest.fn()
    const wrapper = mount(
      <FooterV2
        onBeforeInstall={onBeforeInstallSpy}
        footerData={mockProps.footerData}
      />
    )
    expect(onBeforeInstallSpy).not.toHaveBeenCalled()
    wrapper.find(AppleSafari).simulate('click')
    wrapper.update()
    expect(onBeforeInstallSpy).toHaveBeenCalled()
  })

  it('sets both FooterLeftBlob and FooterRightBlob to correct colors', () => {
    const FooterV2 = require('../FooterV2').default
    const wrapper = mount(<FooterV2 {...mockProps} />)

    expect(wrapper.find(FooterBlobLeft).first().prop('color')).toEqual(
      mockProps.footerData.bubbleColor
    )
    expect(wrapper.find(FooterBlobRight).first().prop('color')).toEqual(
      mockProps.footerData.bubbleColor
    )
  })
})
