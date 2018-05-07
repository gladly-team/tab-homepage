/* eslint-env jest */

import React from 'react'
import { shallow } from 'enzyme'
import { getTestIdSelector } from 'utils/test-utils'
import Header from 'components/Header'

describe('ChromeInstallReconsiderScreen', () => {
  it('renders without error', () => {
    const ChromeInstallReconsiderScreen = require('../ChromeInstallReconsiderScreen')
      .default
    const onClose = jest.fn()
    const installButton = <span>Add to Browser!</span>
    shallow(
      <ChromeInstallReconsiderScreen
        installButton={installButton}
        onCloseClick={onClose}
      />
    )
  })

  it('renders the passed install button component', () => {
    const ChromeInstallReconsiderScreen = require('../ChromeInstallReconsiderScreen')
      .default
    const onClose = jest.fn()
    const installButton = (
      <span data-test-id={'my-install-button'}>Add to Browser!</span>
    )
    const wrapper = shallow(
      <ChromeInstallReconsiderScreen
        installButton={installButton}
        onCloseClick={onClose}
      />
    )
    expect(wrapper.find(getTestIdSelector('my-install-button')).length).toEqual(
      1
    )
  })

  it('passes onCloseClick to the header logo', () => {
    const ChromeInstallReconsiderScreen = require('../ChromeInstallReconsiderScreen')
      .default
    const onClose = jest.fn()
    const installButton = <span>Add to Browser!</span>
    const wrapper = shallow(
      <ChromeInstallReconsiderScreen
        installButton={installButton}
        onCloseClick={onClose}
      />
    )
    expect(wrapper.find(Header).prop('onHeaderLogoClick')).toEqual(onClose)
  })
})
