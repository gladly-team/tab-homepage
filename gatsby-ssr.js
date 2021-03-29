/* globals process */
/**
 * Implement Gatsby's SSR (Server Side Rendering) APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/ssr-apis/
 */

import React from 'react'
import { oneLine } from 'common-tags'

// Google GST (gtag.js):
// https://github.com/gatsbyjs/gatsby/issues/8341
export const onRenderBody = ({ setHeadComponents }) => {
  const GST_ID = 'AW-1013744060'
  if (process.env.NODE_ENV === `production`) {
    setHeadComponents([
      <script
        key="gtag"
        async
        src="https://www.googletagmanager.com/gtag/js?id=G-LDFLQCKVHG"
      ></script>,
      <script
        key="gtag-global"
        dangerouslySetInnerHTML={{
          __html: oneLine`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-LDFLQCKVHG');
            gtag('config', 'G-LDFLQCKVHG',{'debug_mode':true});
            gtag('config', 'G-LDFLQCKVHG',{'tfac_app_version':'homepage'});`,
        }}
      ></script>,
    ])
  }
}
