// util function to load an image as a promise and return img pixel dimensions
const getHeightAndWidthFromDataUrl = (dataURL) =>
  new Promise((resolve) => {
    const img = new Image()
    img.onload = () => {
      resolve({
        height: img.height,
        width: img.width,
      })
    }
    img.src = dataURL
  })

/**
 * For use with Storybook: spoofs a gatsby IGatsbyImageData blob by loading image to get w/h.
 *
 * @param filename Assumes src/data/images as base directory (set in gatsby file loadedr)
 * @param layout optional override for gatsby layout parameter
 * @returns
 */

export const useImageData = async (filename, layout = 'constrained') => {
  const parsedFilePath = filename.split('../../')[1]
  const src = `static/media/src/${parsedFilePath}`
  const resolution = await getHeightAndWidthFromDataUrl(src)

  // a default is provided so component types can treat it as defined
  const imageData = {
    childImageSharp: {
      gatsbyImageData: {
        layout: layout,
        backgroundColor: 'transparent',
        images: {
          fallback: {
            src: src,
            sizes: `(min-width: ${resolution.width}) ${resolution.width}, 100vw`,
          },
        },
        // we set width and height to the native resolution of the image so that Gatsby
        // image will properly resize the image in responsive layouts
        width: resolution.width,
        height: resolution.height,
      },
    },
  }
  return imageData
}
