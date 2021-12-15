/* eslint-env jest */

import React from 'react'
import { shallow, mount } from 'enzyme'
import { act } from 'react-dom/test-utils'
import data from 'src/data/causes/cats.json'
import localStorageMgr from 'src/utils/local-storage'
import InstallButton from 'src/components/InstallButton'
import UnsupportedBrowserDialog from 'src/components/UnsupportedBrowserDialog'
import { Typography } from '@material-ui/core'

const flushAllPromises = async () => {
  // eslint-disable-next-line no-undef
  await new Promise((resolve) => setImmediate(resolve))
}
jest.mock('src/utils/local-storage')
const getMockProps = () => {
  return {
    endorsementsData: data.data.sections.Endorsements,
    causeId: 'SGa6zohkY',
  }
}

describe('Endorsements Section', () => {
  it('renders without error', () => {
    expect.assertions(1)
    const Endorsements = require('../Endorsements').default
    expect(() => shallow(<Endorsements {...getMockProps()} />)).not.toThrow()
  })

  it('sets the title correctly', () => {
    expect.assertions(1)
    const Endorsements = require('../Endorsements').default
    const wrapper = shallow(<Endorsements {...getMockProps()} />)
    const title = wrapper.find(Typography).first()
    expect(title.prop('children')).toBe(getMockProps().endorsementsData.title)
  })

  it('sets the header quote correctly', () => {
    expect.assertions(1)
    const Endorsements = require('../Endorsements').default
    const wrapper = shallow(<Endorsements {...getMockProps()} />)
    const title = wrapper.find(Typography).at(2)
    expect(title.prop('children')).toBe(
      getMockProps().endorsementsData.headerQuote
    )
  })

  it('the InstallButton onBeforeInstall sets the "Tab V4 enabled" flag in local storage and the cause id', () => {
    const Endorsements = require('../Endorsements').default

    const wrapper = mount(<Endorsements {...getMockProps()} />)
    const callback = wrapper.find(InstallButton).first().prop('onBeforeInstall')
    callback()
    expect(localStorageMgr.setItem).toHaveBeenCalledWith(
      'tab.newUser.isTabV4Enabled',
      'true'
    )
    expect(localStorageMgr.setItem).toHaveBeenCalledWith(
      'tab.newUser.causeId',
      'SGa6zohkY'
    )
  })

  it('the InstallButton onUnsupportedBrowserInstallClick shows unsupported browser model', async () => {
    const Endorsements = require('../Endorsements').default
    const wrapper = mount(<Endorsements {...getMockProps()} />)
    await act(async () => {
      wrapper
        .find(InstallButton)
        .first()
        .prop('onUnsupportedBrowserInstallClick')()
      await flushAllPromises()
      wrapper.update()
    })
    const dialog = wrapper.find(UnsupportedBrowserDialog)
    expect(dialog.prop('open')).toBe(true)
  })
})
