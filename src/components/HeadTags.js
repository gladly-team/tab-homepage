import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import favicon from 'src/img/logo32x32.png'
import openGraphImg from 'src/img/opengraph-img.png'
import { domain, getAbsoluteURL } from 'src/utils/navigation'

const openGraphImgAbsolutePath = getAbsoluteURL(openGraphImg)

const HeadTags = ({
  favicon,
  title,
  ogTitle,
  ogDescription,
  ogImage,
  keywords,
  twitterHandle,
  pageURL,
}) => {
  const absolutePageURL = getAbsoluteURL(pageURL)
  return (
    <Helmet titleTemplate={`%s - ${title}`} defaultTitle={title}>
      <meta name="description" content={ogDescription} />
      <meta name="keywords" content={keywords} />
      <link rel="canonical" href={absolutePageURL} />
      <link rel="icon" href={favicon} />
      <meta property="og:type" content="website" />
      <meta property="fb:app_id" content="774381839264847" />
      <meta property="og:url" content={absolutePageURL} />
      <meta property="og:title" content={ogTitle} />
      <meta property="og:description" content={ogDescription} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="628" />
      <meta name="twitter:title" content={ogTitle} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:description" content={ogDescription} />
      <meta name="twitter:site" content={twitterHandle} />
      <meta name="twitter:creator" content={twitterHandle} />
      <meta name="twitter:image" content={ogImage} />
      <meta name="twitter:domain" content={domain} />
    </Helmet>
  )
}

HeadTags.propTypes = {
  favicon: PropTypes.string,
  title: PropTypes.string,
  ogTitle: PropTypes.string,
  ogDescription: PropTypes.string,
  ogImage: PropTypes.string,
  keywords: PropTypes.string,
  twitterHandle: PropTypes.string,
  pageURL: PropTypes.string.isRequired,
}

HeadTags.defaultProps = {
  favicon: favicon,
  title: 'Tab for a Cause',
  ogTitle: 'Join me on Tab for a Cause!',
  ogDescription:
    'Raise money for charity with every browser tab you open, for free.',
  ogImage: openGraphImgAbsolutePath,
  keywords:
    'tab for a cause, charity, tab, cause, giving, extension, browser, advertising',
  twitterHandle: '@TabForACause',
}

export default HeadTags
