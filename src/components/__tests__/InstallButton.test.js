/* eslint-env jest */

import React from 'react'
import { shallow } from 'enzyme'
import Button from '@mui/material/Button'
import getBrowserInfo from 'src/utils/browserDetection'
import { flushAllPromises } from 'src/utils/test-utils'
import { safariEnabled } from 'src/utils/featureFlags'
import { safariExtensionURL } from '../../utils/navigation'

jest.mock('src/utils/browserDetection')
jest.mock('src/utils/location')
jest.mock('src/utils/redirect')
jest.mock('src/utils/analytics/logEvent')
jest.mock('@mui/material/Button')
jest.mock('src/utils/featureFlags')

afterEach(() => {
  jest.clearAllMocks()
})

const createMockBrowserInfo = (browser = 'chrome', mobile = false) => {
  return {
    isChrome: () => browser === 'chrome',
    isEdge: () => browser === 'edge',
    isFirefox: () => browser === 'firefox',
    isSafari: () => browser === 'safari',
    isMobile: () => mobile,
  }
}

// Helper to simulate a click on a button rendered with `mount`.
// Note: Enzyme 3.9.0 apparently doesn't support `mount` with
// hooks, and MUI v4 uses hooks. Instead of mounting, our tests
// currently just call the Button component's "onClick" prop.
// eslint-disable-next-line no-unused-vars
const clickButton = async (wrapper) => {
  wrapper.find('button').first().simulate('click')

  // Flush all promises
  await flushAllPromises()
}

// Helper to simulate a click on a shallow-rendered button.
const clickButtonShallow = async (wrapper) => {
  wrapper.find(Button).prop('onClick')()

  // Flush all promises
  await flushAllPromises()
}

beforeEach(() => {
  getBrowserInfo.mockReturnValue(createMockBrowserInfo())
})

afterEach(() => {
  jest.clearAllMocks()
})

describe('InstallButton', () => {
  it('renders without error', () => {
    const InstallButton = require('../InstallButton').default
    shallow(<InstallButton />)
  })

  it('allows overriding Button props', () => {
    const InstallButton = require('../InstallButton').default
    const wrapper = shallow(
      <InstallButton size={'small'} color={'secondary'} />
    )
    const elem = wrapper.find(Button).first()
    expect(elem.prop('size')).toEqual('small')
    expect(elem.prop('color')).toEqual('secondary')
  })

  it('does not allow overriding the onClick prop', () => {
    const mockOnClick = jest.fn()
    const InstallButton = require('../InstallButton').default
    const wrapper = shallow(<InstallButton onClick={mockOnClick} />)
    const elem = wrapper.find(Button).first()
    expect(elem.prop('onClick')).not.toEqual(mockOnClick)
  })

  it('has correct text for desktop Chrome', () => {
    getBrowserInfo.mockReturnValue(createMockBrowserInfo('chrome', false))
    const InstallButton = require('../InstallButton').default
    const wrapper = shallow(<InstallButton />)
    expect(wrapper.find(Button).first().text()).toEqual('Add to Chrome')
  })

  it('has correct text for desktop Firefox', () => {
    getBrowserInfo.mockReturnValue(createMockBrowserInfo('firefox', false))
    const InstallButton = require('../InstallButton').default
    const wrapper = shallow(<InstallButton />)
    expect(wrapper.find(Button).first().text()).toEqual('Get it Now')
  })

  it('has correct text for desktop Edge', () => {
    getBrowserInfo.mockReturnValue(createMockBrowserInfo('edge', false))
    const InstallButton = require('../InstallButton').default
    const wrapper = shallow(<InstallButton />)
    expect(wrapper.find(Button).first().text()).toEqual('Add to Edge')
  })

  it('has correct text for desktop Safari with safariEnabled true', () => {
    safariEnabled.mockReturnValue(true)
    getBrowserInfo.mockReturnValue(createMockBrowserInfo('safari', false))
    const InstallButton = require('../InstallButton').default
    const wrapper = shallow(<InstallButton />)
    expect(wrapper.find(Button).first().text()).toEqual('Add to Safari')
  })

  it('has correct text for desktop Safari with safariEnabled false', () => {
    safariEnabled.mockReturnValue(false)
    getBrowserInfo.mockReturnValue(createMockBrowserInfo('safari', false))
    const InstallButton = require('../InstallButton').default
    const wrapper = shallow(<InstallButton />)
    expect(wrapper.find(Button).first().text()).toEqual('Get it Now')
  })

  it('has correct text for desktop unsupported browser', () => {
    getBrowserInfo.mockReturnValue(createMockBrowserInfo('other', false))
    const InstallButton = require('../InstallButton').default
    const wrapper = shallow(<InstallButton />)
    expect(wrapper.find(Button).first().text()).toEqual('Get it Now')
  })

  it('has correct text for mobile browser', () => {
    getBrowserInfo.mockReturnValue(createMockBrowserInfo('chrome', true))
    const InstallButton = require('../InstallButton').default
    const wrapper = shallow(<InstallButton />)
    expect(wrapper.find(Button).first().text()).toEqual('Get it Now')
  })

  // FIREFOX IS CURRENTLY NOT SUPPORTED
  it('calls the onUnsupportedBrowserInstallClick prop when the user tries to install with the Firefox desktop', async () => {
    expect.assertions(1)
    getBrowserInfo.mockReturnValue(createMockBrowserInfo('firefox', false))
    // Silence expected console.info log
    jest.spyOn(console, 'info').mockImplementationOnce(() => {})
    const InstallButton = require('../InstallButton').default
    const mockOnUnsupportedBrowserInstallClick = jest.fn()
    const wrapper = shallow(
      <InstallButton
        onUnsupportedBrowserInstallClick={mockOnUnsupportedBrowserInstallClick}
      />
    )
    await clickButtonShallow(wrapper)
    expect(mockOnUnsupportedBrowserInstallClick).toHaveBeenCalled()
  })

  it('navigates to the Chrome Web Store page on click (on Chrome desktop browser)', async () => {
    expect.assertions(2)
    getBrowserInfo.mockReturnValue(createMockBrowserInfo('chrome', false))
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

  it('navigates to the Edge Addons page on click (on Edge desktop browser)', async () => {
    expect.assertions(2)
    getBrowserInfo.mockReturnValue(createMockBrowserInfo('edge', false))
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
      'https://microsoftedge.microsoft.com/addons/detail/hmiiajmhelfgiaoboffbjpjdckbmnddg'
    )
    expect(mockOnUnsupportedBrowserInstallClick).not.toHaveBeenCalled()
  })

  it('calls the onUnsupportedBrowserInstallClick prop when the user tries to install with the Safari desktop browser', async () => {
    expect.assertions(1)
    getBrowserInfo.mockReturnValue(createMockBrowserInfo('safari', false))

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
    getBrowserInfo.mockReturnValue(createMockBrowserInfo('opera', false))

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
  // FIREFOX IS CURRENTLY NOT SUPPORTED
  it('calls the onUnsupportedBrowserInstallClick prop when the user tries to install with the Firefox mobile', async () => {
    expect.assertions(1)
    getBrowserInfo.mockReturnValue(createMockBrowserInfo('firefox', true))

    // Silence expected console.info log
    jest.spyOn(console, 'info').mockImplementationOnce(() => {})
    const InstallButton = require('../InstallButton').default
    const mockOnUnsupportedBrowserInstallClick = jest.fn()
    const wrapper = shallow(
      <InstallButton
        onUnsupportedBrowserInstallClick={mockOnUnsupportedBrowserInstallClick}
      />
    )
    await clickButtonShallow(wrapper)
    expect(mockOnUnsupportedBrowserInstallClick).toHaveBeenCalled()
  })

  it('navigates to the Chrome Web Store page on click (on Chrome mobile browser)', async () => {
    expect.assertions(2)
    getBrowserInfo.mockReturnValue(createMockBrowserInfo('chrome', true))
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

  it('navigates to the Edge Addons page on click (on Edge mobile browser)', async () => {
    expect.assertions(2)
    getBrowserInfo.mockReturnValue(createMockBrowserInfo('edge', true))
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
      'https://microsoftedge.microsoft.com/addons/detail/hmiiajmhelfgiaoboffbjpjdckbmnddg'
    )
    expect(mockOnUnsupportedBrowserInstallClick).not.toHaveBeenCalled()
  })

  it('navigates to the Safari Web Store page on click (on Safari desktop browser) when safariEnabled', async () => {
    expect.assertions(2)
    safariEnabled.mockReturnValue(true)
    getBrowserInfo.mockReturnValue(createMockBrowserInfo('safari', false))
    const redirect = require('src/utils/redirect').default
    const InstallButton = require('../InstallButton').default
    const mockOnUnsupportedBrowserInstallClick = jest.fn()
    const wrapper = shallow(
      <InstallButton
        onUnsupportedBrowserInstallClick={mockOnUnsupportedBrowserInstallClick}
      />
    )
    await clickButtonShallow(wrapper)
    expect(redirect).toHaveBeenCalledWith(safariExtensionURL)
    expect(mockOnUnsupportedBrowserInstallClick).not.toHaveBeenCalled()
  })

  it('calls the onUnsupportedBrowserInstallClick prop when the user tries to install with the Safari desktop browser when not safariEnabled', async () => {
    expect.assertions(1)
    safariEnabled.mockReturnValue(false)
    getBrowserInfo.mockReturnValue(createMockBrowserInfo('safari', false))

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

  it('calls the onUnsupportedBrowserInstallClick prop when the user tries to install with the Safari mobile browser when safariEnabled', async () => {
    expect.assertions(1)
    safariEnabled.mockReturnValue(true)
    getBrowserInfo.mockReturnValue(createMockBrowserInfo('safari', true))

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

  it('calls the onUnsupportedBrowserInstallClick prop when the user tries to install with the Safari mobile browser when not safariEnabled', async () => {
    expect.assertions(1)
    safariEnabled.mockReturnValue(false)
    getBrowserInfo.mockReturnValue(createMockBrowserInfo('safari', true))

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
    getBrowserInfo.mockReturnValue(createMockBrowserInfo('opera', true))

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

  it('calls the onBeforeInstall prop on click and works if it is synchronous', async () => {
    expect.assertions(2)
    const mockOnBeforeInstall = jest.fn()
    const InstallButton = require('../InstallButton').default
    const wrapper = shallow(
      <InstallButton onBeforeInstall={mockOnBeforeInstall} />
    )
    expect(mockOnBeforeInstall).not.toHaveBeenCalled()
    await clickButtonShallow(wrapper)
    expect(mockOnBeforeInstall).toHaveBeenCalled()
  })

  it('calls the onBeforeInstall prop on click and works if it is async', async () => {
    expect.assertions(2)
    const mockOnBeforeInstall = jest.fn(() => Promise.resolve())
    const InstallButton = require('../InstallButton').default
    const wrapper = shallow(
      <InstallButton onBeforeInstall={mockOnBeforeInstall} />
    )
    expect(mockOnBeforeInstall).not.toHaveBeenCalled()
    await clickButtonShallow(wrapper)
    expect(mockOnBeforeInstall).toHaveBeenCalled()
  })

  it('calls downloadButtonClick analytics event on click', async () => {
    expect.assertions(1)

    const downloadButtonClick =
      require('src/utils/analytics/logEvent').downloadButtonClick
    const InstallButton = require('../InstallButton').default
    const wrapper = shallow(<InstallButton />)
    await clickButtonShallow(wrapper)
    expect(downloadButtonClick).toHaveBeenCalled()
  })
})
