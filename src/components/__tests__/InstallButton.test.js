/* eslint-env jest */
/* globals setImmediate */

import React from 'react'
import { shallow } from 'enzyme'
import Button from '@material-ui/core/Button'

jest.mock('browser-detect')
jest.mock('src/utils/location')
jest.mock('src/utils/redirect')
jest.mock('src/utils/analytics/logEvent')
jest.mock('@material-ui/core/Button')

const createMockBrowserInfo = (browser = 'chrome', mobile = false) => {
  return {
    name: browser,
    version: '58.0.3029',
    versionNumber: 58.03029,
    mobile: mobile,
    os: 'Windows NT 10.0',
  }
}

// Helper to simulate a click on a button rendered with `mount`.
// Note: Enzyme 3.9.0 apparently doesn't support `mount` with
// hooks, and MUI v4 uses hooks. Instead of mounting, our tests
// currently just call the Button component's "onClick" prop.
// eslint-disable-next-line no-unused-vars
const clickButton = async wrapper => {
  wrapper
    .find('button')
    .first()
    .simulate('click')

  // Flush all promises
  await new Promise(resolve => setImmediate(resolve))
}

// Helper to simulate a click on a shallow-rendered button.
const clickButtonShallow = async wrapper => {
  wrapper.find(Button).prop('onClick')()

  // Flush all promises
  await new Promise(resolve => setImmediate(resolve))
}

afterEach(() => {
  jest.clearAllMocks()
})

describe('InstallButton', () => {
  it('renders without error', () => {
    const detectBrowser = require('browser-detect').default
    detectBrowser.mockReturnValueOnce(createMockBrowserInfo())

    const InstallButton = require('../InstallButton').default
    shallow(<InstallButton />)
  })

  it('allows overriding Button props', () => {
    const detectBrowser = require('browser-detect').default
    const InstallButton = require('../InstallButton').default
    const wrapper = shallow(
      <InstallButton size={'small'} color={'secondary'} />
    )
    const elem = wrapper.find(Button).first()
    expect(elem.prop('size')).toEqual('small')
    expect(elem.prop('color')).toEqual('secondary')
  })

  it('does not allow overriding the onClick prop', () => {
    const detectBrowser = require('browser-detect').default

    const mockOnClick = jest.fn()
    const InstallButton = require('../InstallButton').default
    const wrapper = shallow(<InstallButton onClick={mockOnClick} />)
    const elem = wrapper.find(Button).first()
    expect(elem.prop('onClick')).not.toEqual(mockOnClick)
  })

  it('has correct text for desktop Chrome', () => {
    const detectBrowser = require('browser-detect').default
    detectBrowser.mockReturnValueOnce(createMockBrowserInfo('chrome', false))

    const InstallButton = require('../InstallButton').default
    const wrapper = shallow(<InstallButton />)
    expect(
      wrapper
        .find(Button)
        .first()
        .text()
    ).toEqual('Add to Chrome')
  })

  it('has correct text for desktop Firefox', () => {
    const detectBrowser = require('browser-detect').default
    detectBrowser.mockReturnValueOnce(createMockBrowserInfo('firefox', false))

    const InstallButton = require('../InstallButton').default
    const wrapper = shallow(<InstallButton />)
    expect(
      wrapper
        .find(Button)
        .first()
        .text()
    ).toEqual('Add to Firefox')
  })

  it('has correct text for desktop unsupported browser', () => {
    const detectBrowser = require('browser-detect').default
    detectBrowser.mockReturnValueOnce(createMockBrowserInfo('other', false))

    const InstallButton = require('../InstallButton').default
    const wrapper = shallow(<InstallButton />)
    expect(
      wrapper
        .find(Button)
        .first()
        .text()
    ).toEqual('Get it Now')
  })

  it('has correct text for mobile browser', () => {
    const detectBrowser = require('browser-detect').default
    detectBrowser.mockReturnValueOnce(createMockBrowserInfo('chrome', true))

    const InstallButton = require('../InstallButton').default
    const wrapper = shallow(<InstallButton />)
    expect(
      wrapper
        .find(Button)
        .first()
        .text()
    ).toEqual('Get it Now')
  })

  it('navigates to the Firefox Addons page on click (on Firefox desktop browser)', async () => {
    expect.assertions(2)

    const detectBrowser = require('browser-detect').default
    detectBrowser.mockReturnValueOnce(createMockBrowserInfo('firefox', false))
    const redirect = require('src/utils/redirect').default

    const InstallButton = require('../InstallButton').default
    const mockOnUnsupportedBrowserInstallClick = jest.fn()
    const wrapper = shallow(
      <InstallButton
        onUnsupportedBrowserInstallClick={mockOnUnsupportedBrowserInstallClick}
      />
    )
    await clickButtonShallow(wrapper)
    expect(redirect).toHaveBeenCalledWith(
      'https://addons.mozilla.org/en-US/firefox/addon/tab-for-a-cause/'
    )
    expect(mockOnUnsupportedBrowserInstallClick).not.toHaveBeenCalled()
  })

  it('navigates to the Chrome Web Store page on click (on Chrome desktop browser)', async () => {
    expect.assertions(2)

    const detectBrowser = require('browser-detect').default
    detectBrowser.mockReturnValueOnce(createMockBrowserInfo('chrome', false))
    const redirect = require('src/utils/redirect').default

    const InstallButton = require('../InstallButton').default
    const mockOnUnsupportedBrowserInstallClick = jest.fn()
    const wrapper = shallow(
      <InstallButton
        onUnsupportedBrowserInstallClick={mockOnUnsupportedBrowserInstallClick}
      />
    )
    await clickButtonShallow(wrapper)
    expect(redirect).toHaveBeenCalledWith(
      'https://chrome.google.com/webstore/detail/tab-for-a-cause/gibkoahgjfhphbmeiphbcnhehbfdlcgo'
    )
    expect(mockOnUnsupportedBrowserInstallClick).not.toHaveBeenCalled()
  })

  it('calls the onUnsupportedBrowserInstallClick prop when the user tries to install with the Safari desktop browser', async () => {
    expect.assertions(1)

    const detectBrowser = require('browser-detect').default
    detectBrowser.mockReturnValueOnce(createMockBrowserInfo('safari', false))

    // Silence expected console.info log
    jest.spyOn(console, 'info').mockImplementationOnce(() => {})

    const mockOnUnsupportedBrowserInstallClick = jest.fn()
    const InstallButton = require('../InstallButton').default
    const wrapper = shallow(
      <InstallButton
        onUnsupportedBrowserInstallClick={mockOnUnsupportedBrowserInstallClick}
      />
    )
    await clickButtonShallow(wrapper)
    expect(mockOnUnsupportedBrowserInstallClick).toHaveBeenCalled()
  })

  it('calls the onUnsupportedBrowserInstallClick prop when the user tries to install with the Opera desktop browser', async () => {
    expect.assertions(1)

    const detectBrowser = require('browser-detect').default
    detectBrowser.mockReturnValueOnce(createMockBrowserInfo('opera', false))

    // Silence expected console.info log
    jest.spyOn(console, 'info').mockImplementationOnce(() => {})

    const mockOnUnsupportedBrowserInstallClick = jest.fn()
    const InstallButton = require('../InstallButton').default
    const wrapper = shallow(
      <InstallButton
        onUnsupportedBrowserInstallClick={mockOnUnsupportedBrowserInstallClick}
      />
    )
    await clickButtonShallow(wrapper)
    expect(mockOnUnsupportedBrowserInstallClick).toHaveBeenCalled()
  })

  it('calls the onUnsupportedBrowserInstallClick prop when the user tries to install with the Edge desktop browser', async () => {
    expect.assertions(1)

    const detectBrowser = require('browser-detect').default
    detectBrowser.mockReturnValueOnce(createMockBrowserInfo('edge', false))

    // Silence expected console.info log
    jest.spyOn(console, 'info').mockImplementationOnce(() => {})

    const mockOnUnsupportedBrowserInstallClick = jest.fn()
    const InstallButton = require('../InstallButton').default
    const wrapper = shallow(
      <InstallButton
        onUnsupportedBrowserInstallClick={mockOnUnsupportedBrowserInstallClick}
      />
    )
    await clickButtonShallow(wrapper)
    expect(mockOnUnsupportedBrowserInstallClick).toHaveBeenCalled()
  })

  it('navigates to the Firefox Addons page on click (on Firefox mobile browser)', async () => {
    expect.assertions(2)

    const detectBrowser = require('browser-detect').default
    detectBrowser.mockReturnValueOnce(createMockBrowserInfo('firefox', true))
    const redirect = require('src/utils/redirect').default

    const InstallButton = require('../InstallButton').default
    const mockOnUnsupportedBrowserInstallClick = jest.fn()
    const wrapper = shallow(
      <InstallButton
        onUnsupportedBrowserInstallClick={mockOnUnsupportedBrowserInstallClick}
      />
    )
    await clickButtonShallow(wrapper)
    expect(redirect).toHaveBeenCalledWith(
      'https://addons.mozilla.org/en-US/firefox/addon/tab-for-a-cause/'
    )
    expect(mockOnUnsupportedBrowserInstallClick).not.toHaveBeenCalled()
  })

  it('navigates to the Chrome Web Store page on click (on Chrome mobile browser)', async () => {
    expect.assertions(2)

    const detectBrowser = require('browser-detect').default
    detectBrowser.mockReturnValueOnce(createMockBrowserInfo('chrome', true))
    const redirect = require('src/utils/redirect').default

    const InstallButton = require('../InstallButton').default
    const mockOnUnsupportedBrowserInstallClick = jest.fn()
    const wrapper = shallow(
      <InstallButton
        onUnsupportedBrowserInstallClick={mockOnUnsupportedBrowserInstallClick}
      />
    )
    await clickButtonShallow(wrapper)
    expect(redirect).toHaveBeenCalledWith(
      'https://chrome.google.com/webstore/detail/tab-for-a-cause/gibkoahgjfhphbmeiphbcnhehbfdlcgo'
    )
    expect(mockOnUnsupportedBrowserInstallClick).not.toHaveBeenCalled()
  })

  it('navigates to the Chrome Web Store page on click (on Chrome iOS browser)', async () => {
    expect.assertions(2)

    const detectBrowser = require('browser-detect').default
    detectBrowser.mockReturnValueOnce(createMockBrowserInfo('crios', true))
    const redirect = require('src/utils/redirect').default

    const InstallButton = require('../InstallButton').default
    const mockOnUnsupportedBrowserInstallClick = jest.fn()
    const wrapper = shallow(
      <InstallButton
        onUnsupportedBrowserInstallClick={mockOnUnsupportedBrowserInstallClick}
      />
    )
    await clickButtonShallow(wrapper)
    expect(redirect).toHaveBeenCalledWith(
      'https://chrome.google.com/webstore/detail/tab-for-a-cause/gibkoahgjfhphbmeiphbcnhehbfdlcgo'
    )
    expect(mockOnUnsupportedBrowserInstallClick).not.toHaveBeenCalled()
  })

  it('calls the onUnsupportedBrowserInstallClick prop when the user tries to install with the Safari mobile browser', async () => {
    expect.assertions(1)

    const detectBrowser = require('browser-detect').default
    detectBrowser.mockReturnValueOnce(createMockBrowserInfo('safari', true))

    // Silence expected console.info log
    jest.spyOn(console, 'info').mockImplementationOnce(() => {})

    const mockOnUnsupportedBrowserInstallClick = jest.fn()
    const InstallButton = require('../InstallButton').default
    const wrapper = shallow(
      <InstallButton
        onUnsupportedBrowserInstallClick={mockOnUnsupportedBrowserInstallClick}
      />
    )
    await clickButtonShallow(wrapper)
    expect(mockOnUnsupportedBrowserInstallClick).toHaveBeenCalled()
  })

  it('calls the onUnsupportedBrowserInstallClick prop when the user tries to install with the Opera mobile browser', async () => {
    expect.assertions(1)

    const detectBrowser = require('browser-detect').default
    detectBrowser.mockReturnValueOnce(createMockBrowserInfo('opera', true))

    // Silence expected console.info log
    jest.spyOn(console, 'info').mockImplementationOnce(() => {})

    const mockOnUnsupportedBrowserInstallClick = jest.fn()
    const InstallButton = require('../InstallButton').default
    const wrapper = shallow(
      <InstallButton
        onUnsupportedBrowserInstallClick={mockOnUnsupportedBrowserInstallClick}
      />
    )
    await clickButtonShallow(wrapper)
    expect(mockOnUnsupportedBrowserInstallClick).toHaveBeenCalled()
  })

  it('calls the onUnsupportedBrowserInstallClick prop when the user tries to install with the Edge mobile browser', async () => {
    expect.assertions(1)

    const detectBrowser = require('browser-detect').default
    detectBrowser.mockReturnValueOnce(createMockBrowserInfo('edge', true))

    // Silence expected console.info log
    jest.spyOn(console, 'info').mockImplementationOnce(() => {})

    const mockOnUnsupportedBrowserInstallClick = jest.fn()
    const InstallButton = require('../InstallButton').default
    const wrapper = shallow(
      <InstallButton
        onUnsupportedBrowserInstallClick={mockOnUnsupportedBrowserInstallClick}
      />
    )
    await clickButtonShallow(wrapper)
    expect(mockOnUnsupportedBrowserInstallClick).toHaveBeenCalled()
  })

  it('calls downloadButtonClick analytics event on click', async () => {
    expect.assertions(1)

    const downloadButtonClick = require('src/utils/analytics/logEvent')
      .downloadButtonClick
    const InstallButton = require('../InstallButton').default
    const wrapper = shallow(<InstallButton />)
    await clickButtonShallow(wrapper)
    expect(downloadButtonClick).toHaveBeenCalled()
  })
})
