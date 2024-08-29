import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import TextPageContent from 'src/components/TextPageContent'
import TextPageHeader from 'src/components/TextPageHeader'
import Link from 'src/components/Link'
import { contactUsURL } from 'src/utils/navigation'
import Layout from 'src/components/Layout'

const indentationPx = 24
const openGraphTitle = 'Terms of Service - Tab for a Cause'
const openGraphDescription =
  'Read our Terms of Service. Tab for a Cause raises money for charity with every browser tab you open.'

const TermsPage = ({ location }) => (
  <Layout brand="all" location={location}>
    <div>
      <Helmet title="Terms">
        <meta property="og:title" content={openGraphTitle} />
        <meta property="og:description" content={openGraphDescription} />
        <meta name="twitter:title" content={openGraphTitle} />
        <meta name="twitter:description" content={openGraphDescription} />
      </Helmet>
      <TextPageContent>
        <TextPageHeader>Terms of Service</TextPageHeader>
        <h2>
          We strive to maintain a website that is clear, honest, and easy to
          use.
        </h2>
        <p>
          Gladly is the creator and owner of Tab for a Cause, Search for a
          Cause, and Shop for a Cause (collectively, "Gladly").
        </p>
        <p>
          Below are our Terms and Conditions of Use ("Terms") that govern
          Gladly's relationship with its users and others who interact with
          gladly.io, tab.gladly.io, search.gladly.io, shop.gladly.io, or other
          *.gladly.io subdomains (collectively, the "Website") and any
          information, text, graphics, photos or other materials uploaded,
          downloaded or appearing on the Website (collectively referred to as
          "Content"). This document applies to Gladly ("Gladly", Tab for a
          Cause", "Search for a Cause", “Shop for a Cause”, "us", "our", or
          "we"), and by using the Website in any way, you agree to these Terms
          in their entirety. If you have any questions, please{' '}
          <Link to={contactUsURL}>contact the Gladly Team</Link>.
        </p>

        <h2>1. Payments to Causes</h2>
        <p>
          Gladly's mission is the payment of advertising revenue generated to
          nonprofit charity organizations ("Cause" or "Causes") that users care
          about. The following terms govern Gladly's payments to Causes:
        </p>
        <p>
          Any "Raised", "Given", and "Earned" dollar amounts are our team's
          good-faith projections of how much advertising revenue users have
          earned based on their usage of the Gladly website. Please note that in
          the case that Gladly does not receive payment from its partners for
          any reason, including but not limited to advertisement click-fraud,
          Gladly is not responsible for making any payments to Causes and
          reserves the right to modify the displayed dollar amounts accordingly.
        </p>
        <p>
          Gladly's payments to Causes are made within 120 days of the end of
          every fiscal quarter. Any displayed dollar amount "Raised", "Given",
          or "Earned" simply indicates that Gladly has designated funds for
          payment to a particular cause, and in no way reflects when the cause
          actually receives these funds.
        </p>
        <p>
          All dollar amounts listed on the Website represent United States
          Dollars.
        </p>
        <p>
          Although Gladly makes payments of user-generated funds to the causes
          users designate, all user-generated funds are considered the
          wholly-owned revenue of Gladly and all payments to Causes are
          considered payments directly from Gladly to the designated Causes.
          Users have no legal claim to redeem these funds from Gladly, nor any
          legal claim to exert control over these funds in any way. Users must
          be aware that they may not legally attempt to deduct from their taxes
          any amounts "raised" on Gladly and that to do so may be illegal in the
          user's tax jurisdiction.
        </p>

        <h2>2. Selection and Continuance of Causes</h2>
        <p>
          Causes that operate on the Website are selected based on whether they:
        </p>
        <ul>
          <li>
            are geographically broad in scope (for example, national or
            international in scope)
          </li>
          <li>
            are 501(c)(3) organizations maintain accessible and transparent
            financial statements
          </li>
          <li>
            are top-rated for efficiency by a third-party Cause evaluator (for
            example, rated 3 or 4 stars on CauseNavigator.org). We may relax
            this criterion in some situations, such as when the Cause has not
            yet been evaluated by third-party evaluators.
          </li>
        </ul>
        <p>
          Gladly reserves all rights to choose the Causes that are to operate on
          the Website.
        </p>
        <p>
          Gladly reserves the right to remove a Cause from its website or
          discontinue all payments to a Cause at any time and without reason. In
          such a case, Gladly will evenly distribute that Cause's unpaid
          earnings to all other Causes on the website.
        </p>
        <p>
          If at any time the administration of a Cause for which Gladly raises
          revenue requests that Gladly remove the Cause from the Website or
          discontinue all payments to said Cause, Gladly will comply within
          fourteen (14) days from the date of receiving a written request from a
          verifiable member of the Cause's administration. In such a case,
          Gladly will evenly distribute that Cause's unpaid earnings to all
          other Causes on the website.
        </p>
        <p>
          By listing a Cause on its website or raising revenue for a Cause,
          Gladly does not necessarily imply any formal relationship with that
          Cause. Gladly is not operated by any members of administration from
          the Causes listed on the Website.
        </p>

        <h2>3. Reproduction and Display of Content</h2>
        <p>
          Gladly, to the best of its knowledge, does not reproduce or display
          any content to which Gladly does not have the right to reproduce or
          display.
        </p>
        <p>
          Any photos or written content reproduced from other sources are photos
          or written content that were explicity licensed with a Creative
          Commons license for commercial use at the time of their obtainment.
        </p>
        <p>
          All users must agree to owning all rights to their submitted content
          and give Gladly the right to reproduce and display that content on the
          website and in all marketing material. User-submitted content is
          reproduced and displayed on good faith that the user who submitted the
          content owned all rights to the content.
        </p>
        <p>
          If at any time a the owner of any content reproduced or displayed on
          the Website requests that the owner's content be removed from the
          Website, Gladly will comply with that request within fourteen (14)
          days of receiving the request. Gladly may require evidence of the
          user's ownership of the material prior to complying with the request.
        </p>

        <h2>4. Referral Program</h2>
        <p>
          For the Referral Program, Gladly will distribute "Referral Links" to
          the Gladly community. A "Referral Link" is a unique URL for you to
          distribute to eligible friends, family and other third parties (each,
          a "Referred User"). If a Referred User uses your Referral Link to sign
          up and become a user of Gladly, then the Referred User shall be
          considered a "Qualifying User" and you will be eligible for the
          referral reward. Gladly will at its sole discretion determine which
          Referred Users are approved as Qualifying Users on Gladly.
        </p>

        <div style={{ marginLeft: indentationPx }}>
          <h2>A. Sharing Referral Links</h2>
          <p>
            Referrals Links should only be used for personal and non-commercial
            purposes, and only shared with personal connections that will
            appreciate receiving these invitations.
          </p>
        </div>

        <h2>5. Disclaimers and Limitations of Liability</h2>
        <p>
          Please read this section carefully because it limits the liability of
          Gladly and its parents, subsidiaries, affiliates, related companies,
          officers, directors, employees, agents, representatives, partners, and
          licensors (collectively, the "Gladly Entities"). Each of the
          subsections below only applies up to the maximum extent permitted
          under applicable law. Some jurisdictions do not allow the disclaimer
          of implied warranties or the limitation of liability in contracts, and
          as a result the contents of this section may not apply to you. Nothing
          in this section is intended to limit any rights you may have which may
          not be lawfully limited.
        </p>

        <div style={{ marginLeft: indentationPx }}>
          <h2>A. The Website is Available "AS-IS"</h2>
          <p>
            Your access to and use of the Website or any Content are at your own
            risk. You understand and agree that the Website is provided to you
            on an "AS IS" and "AS AVAILABLE" basis. Without limiting the
            foregoing, to the maximum extent permitted under applicable law, THE
            GLADLY ENTITIES DISCLAIM ALL WARRANTIES AND CONDITIONS, WHETHER
            EXPRESS OR IMPLIED, OF MERCHANTABILITY, FITNESS FOR A PARTICULAR
            PURPOSE, OR NON-INFRINGEMENT.
          </p>
          <p>
            The Gladly Entities make no warranty and disclaim all responsibility
            and liability for: (i) the completeness, accuracy, availability,
            timeliness, security or reliability of the Website or any Content;
            (ii) any harm to your computer system, loss of data, or other harm
            that results from your access to or use of the Website or any
            Content; (iii) the deletion of, or the failure to store or to
            transmit, any Content and other communications maintained by the
            Website; and (iv) whether the Website will meet your requirements or
            be available on an uninterrupted, secure, or error-free basis. No
            advice or information, whether oral or written, obtained from the
            Gladly Entities or through the Website, will create any warranty not
            expressly made herein.
          </p>

          <h2>B. Links</h2>
          <p>
            The Website may contain links to third-party websites or resources.
            You acknowledge and agree that the Gladly Entities are not
            responsible or liable for: (i) the availability or accuracy of such
            websites or resources; or (ii) the content, products, or services on
            or available from such websites or resources. Links to such websites
            or resources do not imply any endorsement by the Gladly Entities of
            such websites or resources or the content, products, or services
            available from such websites or resources. You acknowledge sole
            responsibility for and assume all risk arising from your use of any
            such websites or resources.
          </p>

          <p>
            <i>Shop for a Cause Only</i> <br />
            Note, Gladly may get paid commissions on products purchased through
            the links to retailer sites using this browser extension. Those
            commissions are used to support our non-profit partners.
          </p>

          <h2>C. Limitation of Liability</h2>
          <p>
            TO THE MAXIMUM EXTENT PERMITTED BY APPLICABLE LAW, THE GLADLY
            ENTITIES SHALL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL,
            CONSEQUENTIAL OR PUNITIVE DAMAGES, OR ANY LOSS OF PROFITS OR
            REVENUES, WHETHER INCURRED DIRECTLY OR INDIRECTLY, OR ANY LOSS OF
            DATA, USE, GOOD-WILL, OR OTHER INTANGIBLE LOSSES, RESULTING FROM (i)
            YOUR ACCESS TO OR USE OF OR INABILITY TO ACCESS OR USE THE WEBSITE;
            (ii) ANY CONDUCT OR CONTENT OF ANY THIRD PARTY ON THE WEBSITE,
            INCLUDING WITHOUT LIMITATION, ANY DEFAMATORY, OFFENSIVE OR ILLEGAL
            CONDUCT OF OTHER USERS OR THIRD PARTIES; (iii) ANY CONTENT OBTAINED
            FROM THE WEBSITE; OR (iv) UNAUTHORIZED ACCESS, USE OR ALTERATION OF
            YOUR TRANSMISSIONS OR CONTENT.
          </p>
          <p>
            IN NO EVENT SHALL THE AGGREGATE LIABILITY OF THE GLADLY ENTITIES
            EXCEED THE GREATER OF ONE HUNDRED U.S. DOLLARS (U.S. $100.00) OR THE
            AMOUNT YOU PAID GLADLY, IF ANY, IN THE PAST SIX MONTHS FOR THE
            WEBSITE GIVING RISE TO THE CLAIM.
          </p>
          <p>
            THE LIMITATIONS OF THIS SUBSECTION SHALL APPLY TO ANY THEORY OF
            LIABILITY, WHETHER BASED ON WARRANTY, CONTRACT, STATUTE, TORT
            (INCLUDING NEGLIGENCE) OR OTHERWISE, AND WHETHER OR NOT THE GLADLY
            ENTITIES HAVE BEEN INFORMED OF THE POSSIBILITY OF ANY SUCH DAMAGE,
            AND EVEN IF A REMEDY SET FORTH HEREIN IS FOUND TO HAVE FAILED OF ITS
            ESSENTIAL PURPOSE.
          </p>
        </div>

        <h2>Changes to Terms</h2>
        <p>
          Gladly may change its Terms from time to time, and in Gladly's sole
          discretion. Gladly encourages visitors to frequently check this page
          for any changes to its Terms. Your continued use of this site after
          any change in these Terms will constitute your acceptance of such
          change.
        </p>
      </TextPageContent>
    </div>
  </Layout>
)

TermsPage.propTypes = {
  location: PropTypes.shape({
    pathname: PropTypes.string.isRequired,
  }).isRequired,
}

TermsPage.displayName = 'TermsPage'

export default TermsPage
