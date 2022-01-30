/* eslint-env jest */

import generatePagesForCause from '../generatePagesForCause'
import path from 'path'

const HomePageWrapper = path.resolve('src/components/V4HomePage.js')
const NotFoundPage = path.resolve('src/pages/404.js')
const ComingSoon = path.resolve('src/components/ComingSoon.js')
const getMockData = () => ({
  mockPagePath: 'test-path',
  data: {
    causeLaunch: {
      enabled: true,
      preview: true,
    },
  },
  allReferrerEdges: [
    {
      node: {
        path: 'test-referrer-path',
        referrerId: 1,
      },
    },
    {
      node: {
        path: 'test-referrer-path-2',
        referrerId: 2,
      },
    },
  ],
})

describe('Test generatePagesForCause', () => {
  it('creates V4HomePage main and referrer pages if cause enabled', () => {
    const createPage = jest.fn()
    const data = getMockData()

    generatePagesForCause(
      createPage,
      data.mockPagePath,
      data.data,
      data.allReferrerEdges
    )

    // Main Cause Page
    expect(createPage).toHaveBeenCalledWith({
      path: `${data.mockPagePath}/`,
      component: HomePageWrapper,
      context: {
        data: data.data,
      },
    })

    data.allReferrerEdges.forEach(({ node }) => {
      // Referrer Pages
      expect(createPage).toHaveBeenCalledWith({
        path: `${data.mockPagePath}/${node.path}/`,
        component: HomePageWrapper,
        context: {
          data: data.data,
          referrer: {
            id: node.referrerId,
          },
        },
      })
    })
  })

  it('creates ComingSoon main and referrer pages if cause not enabled', () => {
    const createPage = jest.fn()
    const data = getMockData()
    data.data.causeLaunch.enabled = false

    generatePagesForCause(
      createPage,
      data.mockPagePath,
      data.data,
      data.allReferrerEdges
    )

    // Main Cause Page
    expect(createPage).toHaveBeenCalledWith({
      path: `${data.mockPagePath}/`,
      component: ComingSoon,
      context: {
        data: data.data,
      },
    })

    data.allReferrerEdges.forEach(({ node }) => {
      // Referrer Pages
      expect(createPage).toHaveBeenCalledWith({
        path: `${data.mockPagePath}/${node.path}/`,
        component: ComingSoon,
        context: {
          data: data.data,
          referrer: {
            id: node.referrerId,
          },
        },
      })
    })
  })

  it('creates V4HomePage preview page if preview enabled', () => {
    const createPage = jest.fn()
    const data = getMockData()

    generatePagesForCause(
      createPage,
      data.mockPagePath,
      data.data,
      data.allReferrerEdges
    )

    // Main Cause Page
    expect(createPage).toHaveBeenCalledWith({
      path: `${data.mockPagePath}/preview/`,
      component: HomePageWrapper,
      context: {
        data: data.data,
        previewPage: {
          path: `../../${data.mockPagePath}/`,
        },
      },
    })
  })

  it('creates 404 instead preview page if preview disabled', () => {
    const createPage = jest.fn()
    const data = getMockData()
    data.data.causeLaunch.preview = false

    generatePagesForCause(
      createPage,
      data.mockPagePath,
      data.data,
      data.allReferrerEdges
    )

    // Main Cause Page
    expect(createPage).toHaveBeenCalledWith({
      path: `${data.mockPagePath}/preview/`,
      component: NotFoundPage,
      context: {
        data: data.data,
        previewPage: {
          path: `../../${data.mockPagePath}/`,
        },
      },
    })
  })
})
