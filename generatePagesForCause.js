import path from 'path'

const generatePagesForCause = (
  createPage,
  pagePath,
  data,
  allReferrerEdges
) => {
  const HomePageWrapper = path.resolve('src/components/V4HomePage.js')
  const NotFoundPage = path.resolve('src/pages/404.js')
  const ComingSoon = path.resolve('src/components/ComingSoon.js')

  const causeLaunchData = data.causeLaunch
  createPage({
    path: `${pagePath}/`,
    component: causeLaunchData.enabled ? HomePageWrapper : ComingSoon,
    context: {
      data,
    },
  })
  allReferrerEdges.forEach(({ node }) => {
    // Not all referrers will have a vanity URL.
    if (!node.path || !node.referrerId) {
      return
    }
    createPage({
      path: `${pagePath}/${node.path}/`,
      component: causeLaunchData.enabled ? HomePageWrapper : ComingSoon,
      context: {
        data,
        referrer: {
          id: node.referrerId,
        },
      },
    })
  })
  createPage({
    path: `${pagePath}/preview/`,
    component: causeLaunchData.preview ? HomePageWrapper : NotFoundPage,
    context: {
      data,
      previewPage: {
        path: `../../${pagePath}/`,
      },
    },
  })
}

export default generatePagesForCause
