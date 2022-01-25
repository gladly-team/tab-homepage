/* eslint-env jest */

jest.mock('../facebook-analytics')

const logEventMock = jest.createMockFromModule('../logEvent')

// Default to automatically resolving async event log.
logEventMock.downloadButtonClick = jest.fn(() => Promise.resolve())

module.exports = logEventMock
