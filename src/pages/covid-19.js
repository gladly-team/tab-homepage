import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import Divider from '@material-ui/core/Divider'
import { TwitterTweetEmbed } from 'react-twitter-embed'
import { lightestTextColor } from 'src/themes/theme'
import TextPageContent from 'src/components/TextPageContent'
import TextPageHeader from 'src/components/TextPageHeader'
import Layout from 'src/components/Layout'
import InstallButton from 'src/components/InstallButton'
import redirect from 'src/utils/redirect'
import { homeURL } from 'src/utils/navigation'
import WHOPhoto from 'src/img/covid-19/who-covid-19.png'
import foodBankNYCPhoto from 'src/img/covid-19/food-bank-for-nyc-covid-19.png'
import EvidenceActionPhoto from 'src/img/covid-19/chlorine-dispenser.jpg'
import NoKidHungryPhoto from 'src/img/covid-19/no-kid-hungry.png'
import DoctorsWithoutBordersImg from 'src/img/covid-19/msf.png'
import CoolEarthImg from 'src/img/covid-19/cool-earth.png'

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
  {
    question: "Why can't I donate my hearts to these causes?",
    answerElem: (
      <div>
        <p>
          For some of these campaigns, we're trying something a little
          different: we're automatically giving the money we’re raising to the
          featured non-profit—no hearts donation required. In this case, all you
          have to do is open tabs.
        </p>
        <p>
          This approach allows us to know more quickly how much money we're
          raising for the non-profit, so we can give the money urgently and
          better demonstrate the tangible impact our community is having.
        </p>
      </div>
    ),
  },
]

const Covid19 = (props) => {
  const { location } = props
  const openGraphTitle = 'Support COVID-19 Relief for Free'
  const openGraphDescription =
    'To support COVID-19 relief, we are raising money for organizations that help those affected.'

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
              efforts. Join in to support the fight against COVID-19:
            </p>
            {installButtonBlock}
            <p>
              So far, we've raised thousands of dollars to Doctors Without
              Borders, given meals to hungry kids, provided 2,000 people with
              access to clean water, given 10,000 meals to families in New York
              City, raised thousands of dollars for the World Health
              Organization, and provided supplies to 100 indigenous families.
            </p>
            <p>Will you join in?</p>
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
              <h5 style={campaignLabelStyle}>Campaign #6: July 17 – 24</h5>

              <h2 style={{ fontSize: '1.8rem' }}>
                Supplying 100 families in rainforest communities
              </h2>
              <p>
                The COVID-19 pandemic has created new stresses on households and
                habitats in the rainforest.
              </p>
              <p>
                As a long-term partner with many rainforest communities,{' '}
                <a
                  href={'https://www.coolearth.org/rainforest-resilience-fund/'}
                >
                  Cool Earth
                </a>{' '}
                is working to provide food and hygiene equipment to keep people
                safe and healthy, along with resources like seeds and tools to
                prepare for the coming months.
              </p>
              <p>
                We raised enough money to provide 100 families of 6 with the
                supplies they need to weather this pandemic.
              </p>
            </div>
            <div
              style={{
                marginTop: 30,
                marginBottom: 6,
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
                alt={'Cool Earth Rainforest Resilience Fund'}
                src={CoolEarthImg}
                style={{ width: '100%', maxWidth: 1000 }}
              />
            </div>
            <p style={{ marginBottom: 60 }}>
              Photo Credit: <a href={'https://www.coolearth.org'}>Cool Earth</a>
            </p>
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
              <h5 style={campaignLabelStyle}>Campaign #5: April 27 – June 2</h5>

              <h2 style={{ fontSize: '1.8rem' }}>
                Supporting Global Healthcare Systems
              </h2>
              <p>
                As COVID-19 continues to spread, it will stress health systems
                around the globe. We supported{' '}
                <a href={'https://www.doctorswithoutborders.org/covid19'}>
                  Doctors Without Borders
                </a>{' '}
                and their efforts to ensure access to quality healthcare around
                the world.
              </p>
              <p>
                In response to COVID-19, Doctors Without Borders is fighting on
                multiple fronts—caring for patients, offering health education
                and mental health support, and providing training for vital
                infection control measures in health facilities around the
                world.
              </p>
            </div>
            <div
              style={{
                marginTop: 30,
                marginBottom: 6,
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
                alt={'Doctors Without Borders in action'}
                src={DoctorsWithoutBordersImg}
                style={{ width: '100%', maxWidth: 1000 }}
              />
            </div>
            <p style={{ marginBottom: 60 }}>
              Photo Credit:{' '}
              <a href={'https://www.doctorswithoutborders.org'}>
                Doctors Without Borders
              </a>
            </p>
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
              <h5 style={campaignLabelStyle}>
                Campaign #4: April 17 – April 27
              </h5>

              <h2 style={{ fontSize: '1.8rem' }}>
                Providing Meals to Hungry Children
              </h2>
              <p>
                Nearly 22 million low-income kids in the United States rely on
                the free and reduced-price meals they receive at school. With
                schools closed in districts nationwide, children may be left
                without that critical lifeline to healthy meals.
              </p>
              <p>
                To help combat this, we supported{' '}
                <a href={'https://www.nokidhungry.org/coronavirus'}>
                  No Kid Hungry
                </a>{' '}
                in their efforts to make sure all children have access to
                nutritious meals throughout the crisis.
              </p>
              <p>
                Together, we helped{' '}
                <span style={{ fontWeight: 'bold' }}>
                  provide meals to kids in need
                </span>
                . Thank you!
              </p>
            </div>
            <div
              style={{
                marginTop: 30,
                marginBottom: 6,
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
                alt={'A food bank'}
                src={NoKidHungryPhoto}
                style={{ width: '100%', maxWidth: 1000 }}
              />
            </div>
            <p style={{ marginBottom: 60 }}>
              Photo Credit:{' '}
              <a href={'https://www.nokidhungry.org/coronavirus'}>
                No Kid Hungry
              </a>
            </p>
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
              <h5 style={campaignLabelStyle}>
                Campaign #3: April 8 – April 17
              </h5>

              <h2 style={{ fontSize: '1.8rem' }}>
                Giving 2,000 People Access to Clean Water
              </h2>
              <p>
                The pandemic's impact on low-income countries will likely be
                devastating, especially where people do not have access to clean
                water, soap, or an adequate health system.
              </p>
              <p>
                Our community raised money for{' '}
                <a
                  href={
                    'https://www.evidenceaction.org/responding-to-covid-19/'
                  }
                >
                  Evidence Action
                </a>{' '}
                as they rapidly provide access to clean water and sanitation to
                people who need it most.
              </p>
              <p>
                Together, we gave{' '}
                <span style={{ fontWeight: 'bold' }}>
                  2,000 people access to clean water
                </span>{' '}
                for one year, helping vulnerable communities to bolster their
                efforts against COVID-19.
              </p>
            </div>
            <div
              style={{
                marginTop: 30,
                marginBottom: 6,
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
                alt={"Evidence Action's work in the field"}
                src={EvidenceActionPhoto}
                style={{ width: '100%', maxWidth: 1000 }}
              />
            </div>
            <p style={{ marginBottom: 60 }}>
              Photo Credit:{' '}
              <a
                href={'https://www.evidenceaction.org/responding-to-covid-19/'}
              >
                Evidence Action
              </a>
            </p>
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
              <h5 style={campaignLabelStyle}>Campaign #2: April 1 – April 8</h5>

              <h2 style={{ fontSize: '1.8rem' }}>
                Giving 10,000 Meals to Families in Need
              </h2>
              <p>
                COVID-19 has strained the ability of food banks to take care of
                people in need. We supported the work of the{' '}
                <a href={'https://www.foodbanknyc.org/covid-19/'}>
                  Food Bank for New York City
                </a>
                , which is keeping families fed during this crisis.
              </p>
              <p>
                Our community{' '}
                <span style={{ fontWeight: 'bold' }}>gave 10,000 meals</span> to
                people in NYC who need it most—just by opening tabs.
              </p>
              <div
                style={{
                  display: 'block',
                }}
              >
                <TwitterTweetEmbed tweetId={'1245467268345200641'} />
              </div>
            </div>
            <div
              style={{
                marginTop: 40,
                marginBottom: 60,
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
                alt={'A food bank'}
                src={foodBankNYCPhoto}
                style={{ width: '100%', maxWidth: 1000 }}
              />
            </div>
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
              Supporting the WHO COVID-19 Solidarity Fund
            </h2>
            <p>
              Our community{' '}
              <span style={{ fontWeight: 'bold' }}>
                raised thousands of dollars
              </span>{' '}
              for the World Health Organization's{' '}
              <a
                href={
                  'https://www.who.int/emergencies/diseases/novel-coronavirus-2019/donate'
                }
              >
                COVID-19 Solidarity Fund
              </a>{' '}
              and their partners in a massive effort to help countries prevent,
              detect, and manage the novel coronavirus, particularly where the
              needs are the greatest.
            </p>
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

        <div style={{ marginTop: 60 }}>
          <h2>FAQ</h2>
          {faqs.map((faq) => {
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
