/* eslint-env jest */

import { mockDate } from 'src/utils/test-utils'

var origDate = Date

afterEach(() => {
  mockDate.off()
})

describe('test-utils tests', () => {
  it('on mock date sets current time as expected', () => {
    mockDate.on()
    expect(origDate).not.toEqual(Date)
    expect(new Date()).toEqual(new origDate(mockDate.defaultDateISO))
    expect(Date.now()).toEqual(new origDate(mockDate.defaultDateISO).getTime())
    expect(new Date('2012-05-19T13:59:46.000Z')).toEqual(
      new origDate(mockDate.defaultDateISO)
    )
  })

  it('on mock date uses input dateStr', () => {
    var otherTime = '2012-05-21T13:59:46.000Z'
    mockDate.on(otherTime)
    expect(new Date()).toEqual(new origDate(otherTime))
    expect(Date.now()).toEqual(new origDate(otherTime).getTime())
  })

  it('mockCurrentTimeOnly correctly overrides constructors', () => {
    mockDate.on(mockDate.defaultDateISO, { mockCurrentTimeOnly: true })
    expect(new Date()).toEqual(new origDate(mockDate.defaultDateISO))
    expect(Date.now()).toEqual(new origDate(mockDate.defaultDateISO).getTime())
    expect(new Date('2012-05-19T13:59:46.000Z')).toEqual(
      new Date('2012-05-19T13:59:46.000Z')
    )
  })

  it('mockCurrentTimeOnly correctly overrides constructors', () => {
    mockDate.on()
    expect(origDate).not.toEqual(Date)
    mockDate.off()
    expect(origDate).toEqual(Date)
  })
})
