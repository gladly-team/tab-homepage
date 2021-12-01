// import { IGatsbyImageData, Layout } from 'gatsby-plugin-image'
import { useEffect, useState } from 'react'

/**
 * For use with Storybook: spoofs a gatsby IGatsbyImageData blob by loading image to get w/h.
 *
 * @param filename Assumes src/images as base directory (set in package.json storybook script)
 * @param layout optional override for gatsby layout parameter
 * @returns
 */
export const useImageData = (filename, layout = 'constrained') => {
  // a default is provided so component types can treat it as defined
  const [imageData, setImageData] = useState({
    childImageSharp: {
      gatsbyImageData: {
        layout: 'constrained',
        images: { fallback: { src: '' } },
        width: 0,
        height: 0,
      },
    },
  })

  useEffect(() => {
    // eslint-disable-next-line no-undef
    const img = new Image()
    img.onload = () => {
      setImageData({
        childImageSharp: {
          gatsbyImageData: {
            layout,
            images: { fallback: { src: filename } },
            width: img.width,
            height: img.height,
          },
        },
      })
    }
    img.src = filename

    return () => {
      img.onload = null
    }
  }, [filename, layout])

  return imageData
}
