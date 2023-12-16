/* eslint-disable jsx-a11y/html-has-lang, react/no-danger, react/function-component-definition */
import React from 'react'
import PropTypes from 'prop-types'

// Gladly team modified to:
// * add Quantcast Measure tag
export default function HTML(props) {
  return (
    <html {...props.htmlAttributes}>
      <head>
        {/* Google tag (gtag.js) */}
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-LDFLQCKVHG"
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-LDFLQCKVHG');`,
          }}
        />

        <script
          async
          src="https://securepubads.g.doubleclick.net/tag/js/gpt.js"
        />

        <script
          dangerouslySetInnerHTML={{
            __html: `
        window.googletag = window.googletag || {cmd: []};
        googletag.cmd.push(function() {
          googletag.defineSlot(
            '/18190176,43865596/MCM_Validation',
            [1, 1],
            'div-gpt-ad-1614955491295-0'
          ).addService(googletag.pubads());
          googletag.pubads().enableSingleRequest();
          googletag.enableServices();
        });`,
          }}
        />

        <meta charSet="utf-8" />
        <meta httpEquiv="x-ua-compatible" content="ie=edge" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
        {props.headComponents}
      </head>
      <body {...props.bodyAttributes}>
        {props.preBodyComponents}
        <div
          key="body"
          id="___gatsby"
          dangerouslySetInnerHTML={{ __html: props.body }}
        />
        {props.postBodyComponents}

        {/* Begin: Quantcast Measure */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window._qevents = window._qevents || [];
              (function() {
              var elem = document.createElement('script');
              elem.src = (document.location.protocol == "https:" ? "https://secure" : "http://edge") + ".quantserve.com/quant.js";
              elem.async = true;
              elem.type = "text/javascript";
              var scpt = document.getElementsByTagName('script')[0];
              scpt.parentNode.insertBefore(elem, scpt);
              })();
              window._qevents.push({
              qacct:"p-FPBLJYpJgR9Zu",
              uid:"__INSERT_EMAIL_HERE__"
              });
            `,
          }}
        />
        <noscript>
          <div style={{ display: 'none' }}>
            <img
              src="//pixel.quantserve.com/pixel/p-FPBLJYpJgR9Zu.gif"
              border="0"
              height="1"
              width="1"
              alt=""
            />
          </div>
        </noscript>
        {/* End: Quantcast Measure */}

        <div id="div-gpt-ad-1614955491295-0">
          <script
            dangerouslySetInnerHTML={{
              __html: `googletag.cmd.push(function() {
            if (googletag.pubads().isInitialLoadDisabled()) {
              googletag.display('div-gpt-ad-1614955491295-0');
              googletag.refresh('div-gpt-ad-1614955491295-0');
            } else {
              googletag.display('div-gpt-ad-1614955491295-0');
            }
          });`,
            }}
          />
        </div>
      </body>
    </html>
  )
}

HTML.propTypes = {
  htmlAttributes: PropTypes.object,
  headComponents: PropTypes.array,
  bodyAttributes: PropTypes.object,
  preBodyComponents: PropTypes.array,
  body: PropTypes.string,
  postBodyComponents: PropTypes.array,
}
