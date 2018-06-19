/* eslint-env jest */

jest.mock('../facebook-analytics')
jest.mock('../google-analytics')

const logEventMock = jest.genMockFromModule('../logEvent')

// Default to automatically resolving async event log.
logEventMock.downloadButtonClick = jest.fn(() => Promise.resolve())

module.exports = logEventMock
