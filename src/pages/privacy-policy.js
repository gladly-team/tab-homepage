import React from 'react'
import TextPageContent from 'components/TextPageContent'
import Divider from 'material-ui/Divider'
import { contactUsURL, termsURL } from 'utils/navigation'
import { lightestTextColor } from 'themes/theme'

const PrivacyPolicyPage = () => (
  <div>
    <TextPageContent>
      <h1>Privacy Policy</h1>
      <p>
        Your privacy is very important to us. At Tab for a Cause, we have a few
        fundamental principles:
      </p>
      <ul>
        <li>We don't ask you for personal information we don't need.</li>
        <li>
          We don't share your personal information with anyone except to provide
          our Services, comply with the law, or protect our rights.
        </li>
        <li>
          We don't store personal information unless required for the ongoing
          operation of one of our Services.
        </li>
      </ul>
      <p>
        Below is our privacy policy which incorporates these principles. This
        document applies to Tab for a Cause ("Tab for a Cause", "us", "our", or
        "we") and is part of Tab for a Cause's{' '}
        <a href={termsURL}>Terms of Service</a>. By using tab.gladly.io (the
        "Website"), you agree to the terms of this Privacy Policy and the Terms
        of Service. We collectively refer to the Website and its related
        services, apps, and websites as our "Services".
      </p>
      <p>
        If you have any questions, please <a href={contactUsURL}>contact us</a>.
      </p>

      <h2>Data Collected</h2>
      <p>We may collect and store different types of data:</p>
      <ul>
        <li>
          <b>Anonymous device and behavioral data: </b>
          We collect anonymous data from every visitor of the Website to monitor
          traffic and fix bugs. For example, we collect information like web
          requests, the data sent in response to such requests, the Internet
          Protocol address, the browser type, device information, and a
          timestamp for the request.
        </li>
        <li>
          <b>Information you provide to us: </b>
          We save information related to your behavior on Tab for a Cause, such
          as the the number tabs you open, which charity partners you support,
          the information you store in widgets on the new tab page, your account
          settings, and the users you refer to Tab for a Cause. In order to be
          able to save your profile and the settings associated with it, we ask
          you to log in and provide certain personal information, such as an
          email address.
        </li>
        <li>
          <b>Cookie and local browser storage: </b>
          To allow login features, we use cookies and local browser data storage
          to store session information. You can block or delete cookies and
          local browser data storage and still use Tab for a Cause, although you
          may then be asked for your username and password each time you open
          our page. Additionally, ads appearing on the Website may be delivered
          to users by advertising partners, who may set cookies and local
          browser data storage. This information allows advertising partners to,
          among other things, deliver targeted advertisements that they believe
          will be of most interest to you. You can opt out of interest-based
          targeted advertising for some advertising partners{' '}
          <a href="http://optout.networkadvertising.org/">here</a>. This Privacy
          Policy covers the use of cookies and local browser data storage by the
          Website and does not cover the use of cookies and local browser data
          storage by any advertising partners.
        </li>
        <li>
          <b>Data from contracted partners: </b>
          We work with partners who provide hardware and software services, such
          as as cloud storage and server services. We may store data collected
          by third party companies with whom we have contracted.
        </li>
      </ul>
      <p>
        You are able to request we delete your account and remove any personal
        information associated with your account. To do so, please{' '}
        <a href={contactUsURL}>contact us</a> and we will follow up as soon as
        possible.
      </p>

      <h2>Use of the Data</h2>
      <p>We use the data we collect to:</p>
      <ul>
        <li>provide you with the Services</li>
        <li>communicate with you about the Services</li>
        <li>improve, operate, and promote the Services</li>
      </ul>
      <p>
        Tab for a Cause is operated from the United States. If you are visiting
        the Website from outside the United States, you agree to any processing
        of any personal information you provide us according to this policy.
      </p>

      <h2>Sharing of Data</h2>
      <p>
        We do not share information you have provided to us without your
        consent, unless:
      </p>
      <ul>
        <li>doing so is appropriate to carry out your own request</li>
        <li>doing so helps us provide our Services</li>
        <li>
          we believe it's needed to enforce our Terms of Service, or that is
          legally required
        </li>
        <li>
          we believe it's needed to detect, prevent or address fraud, security
          or technical issues
        </li>
        <li>
          otherwise protect our property, legal rights, or that of others.
        </li>
      </ul>
      <p>
        To provide our Services, we may share data with third-party companies
        (for example, software providers and cloud storage services) with whom
        we've contracted. These companies are restricted from using the data in
        any other way than to provide services to us.
      </p>
      <p>
        We employ industry standard techniques to protect against unauthorized
        access of data that we store.
      </p>
      <p>
        We may choose to buy or sell assets. In these types of transactions,
        user information is typically one of the transferred business assets.
        Moreover, if we, or substantially all of our assets, were acquired, or
        if we go out of business or enter bankruptcy, user information would be
        one of the assets that is transferred or acquired by a third party. You
        acknowledge that such transfers may occur, and that any acquirer of us
        or our assets may continue to use your personal information as set forth
        in this policy.
      </p>

      <h2>Changes to the Privacy Policy</h2>
      <p>
        We may amend this Privacy Policy from time to time. Use of information
        we collect now is subject to the Privacy Policy in effect at the time
        such information is used. A user is bound by any changes to the Privacy
        Policy when he or she uses the Services after such changes have been
        first posted.
      </p>
      <p>
        If you have any questions or concerns, please{' '}
        <a href={contactUsURL}>contact us</a>.
      </p>
      <Divider style={{ marginBottom: 10 }} />
      <p style={{ fontSize: 12, color: lightestTextColor }}>
        This Privacy Policy is available under a Creative Commons Sharealike
        license.
      </p>
    </TextPageContent>
  </div>
)

export default PrivacyPolicyPage
