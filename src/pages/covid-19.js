import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import Divider from '@material-ui/core/Divider'
import { lightestTextColor } from 'src/themes/theme'
import TextPageContent from 'src/components/TextPageContent'
import TextPageHeader from 'src/components/TextPageHeader'
import Layout from 'src/components/Layout'
import InstallButton from 'src/components/InstallButton'
import redirect from 'src/utils/redirect'
import { homeURL } from 'src/utils/navigation'
import WHOPhoto from 'src/img/covid-19/who-covid-19.png'
import foodBankNYCPhoto from 'src/img/covid-19/food-bank-for-nyc-covid-19.png'

const installButtonBlock = (
  <div
    style={{
      display: 'flex',
      padding: '30px 0px',
      justifyContent: 'center',
    }}
  >
    <InstallButton
      size={'medium'}
      onUnsupportedBrowserInstallClick={() => {
        redirect(homeURL)
      }}
    />
  </div>
)

const faqs = [
  {
    question: 'How can I help the COVID-19 response efforts?',
    answerElem: (
      <div>
        <p style={{ marginBottom: 0 }}>
          Join Tab for a Cause! After it's added, every tab you open during
          these campaigns will support COVID-19 relief efforts.
        </p>
        {installButtonBlock}
        <p>
          If you're already using Tab for a Cause, get your friends on board to
          increase our community's impact.
        </p>
      </div>
    ),
  },
  {
    question: "Wait, it's free?",
    answerElem: (
      <p>
        Yes! Tab for a Cause is a free way for you to do good every single day.
        You just have to open tabs in your browser, and we send money raised
        from ads to some spectacular nonprofits.
      </p>
    ),
  },
  {
    question: 'Why now?',
    answerElem: (
      <div>
        <p>
          The world is facing an unprecedented challenge in the spread of
          coronavirus, and it needs an unprecedented response.
        </p>
        <p>
          As a way to raise money for free from the safety of our homes, Tab for
          a Cause is a great way to support communities in need as we confront
          this pandemic.
        </p>
      </div>
    ),
  },
]

const Covid19 = props => {
  const { location } = props
  const openGraphTitle = 'Support COVID-19 Relief for Free'
  const openGraphDescription =
    'To support COVID-19 relief, we are raising money for organizations who can help those affected.'

  const campaignLabelStyle = {
    color: 'white',
    background: '#d82138',
    padding: '6px 14px',
    borderRadius: 3,
    display: 'inline-block',
    marginTop: 10,
    marginBottom: 10,
  }
  return (
    <Layout brand={'tab'} location={location}>
      <TextPageContent>
        <Helmet title={openGraphTitle}>
          <meta property="og:title" content={openGraphTitle} />
          <meta property="og:description" content={openGraphDescription} />
          <meta name="twitter:title" content={openGraphTitle} />
          <meta name="twitter:description" content={openGraphDescription} />
        </Helmet>
        <TextPageHeader>Support COVID-19 Relief for Free</TextPageHeader>
        <div style={{ paddingTop: 8 }}>
          <div
            style={{
              marginBottom: 40,
            }}
          >
            <p>
              The spread of COVID-19 has been swift and destructive. We need a
              global response to support the health systems and community
              organizations working to keep us all safe.
            </p>
            <p
              style={{
                marginBottom: 0,
              }}
            >
              Tab for a Cause is a free, simple, and at-home way to raise money
              for important causes, and we are raising funds for critical relief
              efforts.
            </p>
            {installButtonBlock}
            <p>
              Join Tab for a Cause now to support the fight against COVID-19.
              Thank you, and stay safe.
            </p>
            <Divider
              style={{ backgroundColor: lightestTextColor, marginTop: 30 }}
            />
          </div>
          <div
            style={{
              marginTop: 60,
              marginBottom: 40,
            }}
          >
            <h5 style={campaignLabelStyle}>Campaign #1: March 17 – April 1</h5>

            <h2 style={{ fontSize: '1.8rem' }}>
              Supporting the{' '}
              <a
                href={
                  'https://www.who.int/emergencies/diseases/novel-coronavirus-2019/donate'
                }
              >
                WHO COVID-19 Solidarity Fund
              </a>
            </h2>
            <p>
              Our community raised thousands of dollars for the World Health
              Organization's{' '}
              <a
                href={
                  'https://www.who.int/emergencies/diseases/novel-coronavirus-2019/donate'
                }
              >
                COVID-19 Solidarity Fund
              </a>{' '}
              and their partners in a massive effort to help countries prevent,
              detect, and manage the novel coronavirus—particularly those where
              the needs are the greatest.
            </p>
            {installButtonBlock}
          </div>
          <div
            style={{
              marginTop: 40,
              marginBottom: 40,
              // Full page width CSS
              display: 'flex',
              justifyContent: 'center',
              width: '100vw',
              position: 'relative',
              left: '50%',
              right: '50%',
              marginLeft: '-50vw',
              marginRight: '-50vw',
              // End full page width CSS
            }}
          >
            <img
              alt={"Information on the World Health Organization's impact"}
              src={WHOPhoto}
              style={{ width: '100%', maxWidth: 1000 }}
            />
          </div>
          <Divider
            style={{ backgroundColor: lightestTextColor, marginTop: 30 }}
          />
        </div>

        <div>
          <div
            style={{
              marginTop: 60,
              marginBottom: 40,
            }}
          >
            <h5 style={campaignLabelStyle}>Campaign #2: April 1 – ongoing</h5>

            <h2 style={{ fontSize: '1.8rem' }}>
              Helping to Feed Families in Need
            </h2>
            <p>
              COVID-19 has strained the ability of food banks to take care of
              people in need. This phase of our support helps the{' '}
              <a href={'https://www.foodbanknyc.org/covid-19/'}>
                Food Bank for New York City
              </a>{' '}
              keep families fed during this crisis.
            </p>
            <p>
              Right now, tabs you open are providing meals for our fellow humans
              in NYC. Our goal is to provide over 10,000 meals in the next few
              days.
            </p>
            <p>
              Together, we can feed thousands of people in need—so please open a
              few tabs to help out.
            </p>
            {installButtonBlock}
          </div>
          <div
            style={{
              marginTop: 40,
              marginBottom: 40,
              // Full page width CSS
              display: 'flex',
              justifyContent: 'center',
              width: '100vw',
              position: 'relative',
              left: '50%',
              right: '50%',
              marginLeft: '-50vw',
              marginRight: '-50vw',
              // End full page width CSS
            }}
          >
            <img
              alt={"Information on the World Health Organization's impact"}
              src={foodBankNYCPhoto}
              style={{ width: '100%', maxWidth: 1000 }}
            />
          </div>
          <Divider
            style={{ backgroundColor: lightestTextColor, marginTop: 30 }}
          />
        </div>

        <div style={{ marginTop: 60 }}>
          <h2>FAQ</h2>
          {faqs.map(faq => {
            return (
              <div key={faq.question} style={{ padding: '10px 0px' }}>
                <p style={{ fontWeight: 'bold' }}>{faq.question}</p>
                {faq.answerElem}
              </div>
            )
          })}
        </div>
      </TextPageContent>
    </Layout>
  )
}

Covid19.propTypes = {
  location: PropTypes.shape({
    pathname: PropTypes.string.isRequired,
  }).isRequired,
}

Covid19.displayName = 'Covid19'

export default Covid19
