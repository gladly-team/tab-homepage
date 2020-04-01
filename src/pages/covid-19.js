import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
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
    question: 'How do I plant a tree?',
    answerElem: (
      <div>
        <p style={{ marginBottom: 0 }}>
          We'll plant a tree for every person who joins Tab for a Cause—so join
          on in!
        </p>
        {installButtonBlock}
        <p>
          If you're already using Tab for a Cause, refer a friend using your
          referral URL, and we'll plant another tree.
        </p>
      </div>
    ),
  },
  {
    question: "Wait, it's free?",
    answerElem: (
      <p>
        Yes! Tab for a Cause is a free way for you to do good every single day.
        You just have to open tabs in your browser—and, let's face it, we all
        have a few too many tabs open.
      </p>
    ),
  },
  {
    question: 'How are the trees actually planted?',
    answerElem: (
      <p>
        We are working with the{' '}
        <a href={'https://edenprojects.org/'}>Eden Reforestation Project</a> to
        plant trees around the world. They work with local communities in
        Madagascar, Haiti, Nepal, Mozambique, and Indonesia to plant, protect,
        and care for native tree species.
      </p>
    ),
  },
  {
    question: 'Why trees?',
    answerElem: (
      <p>
        Trees are an incredibly effective way to address habit loss, erosion,
        and CO2.{' '}
        <a href={'https://edenprojects.org/the-problem-and-the-solution/'}>
          Read what Eden Reforestation Project says about their work.
        </a>
      </p>
    ),
  },
  {
    question: 'Why now?',
    answerElem: (
      <p>
        Historically, Tab for a Cause has grown through a combination of
        word-of-mouth and paid marketing. However, during November and December
        each year, the cost of paid marketing increases significantly. Instead
        of paying for expensive ads, with your help we can turn our marketing
        budget into thousands of trees. Thanks for spreading the word!
      </p>
    ),
  },
  {
    question: 'Why should I spread the word about Tab for a Cause?',
    answerElem: (
      <div>
        <p>
          Of course, there are lots of reasons to tell your friends about Tab
          for a Cause, but here are some you might not know:
        </p>
        <ol>
          <li>
            As we increase the amount of money we are donating to charities, we
            are able to support more unique projects like launching this
            partnership with Eden Project or{' '}
            <a
              href={
                'https://www.roomtoread.org/the-latest/guest-blogger-how-opening-tabs-for-a-cause-launched-a-library-in-vietnam/'
              }
            >
              building a school library through Room to Read
            </a>
            .
          </li>
          <li>
            Advertisers care about the size of the audience they can reach. With
            more Tabbers, we earn more money on each individual ad, meaning the
            value of each individual tab grows as we grow!
          </li>
          <li>Why not? :)</li>
          <li>
            People are much more likely to use something that they heard about
            from someone they know.
          </li>
        </ol>
      </div>
    ),
  },
  {
    question: 'Can I just create a bunch of new accounts to plant trees?',
    answerElem: (
      <p>
        No, we will only be planting trees for legitimate accounts that are
        being actively used. The spirit of this project is to help spread the
        word so we can raise more money for nonprofits, and having multiple
        accounts doesn't help with that goal.
      </p>
    ),
  },
  {
    question: 'Do bananas grow on trees?',
    answerElem: (
      <p>
        Great question! In fact,{' '}
        <a href={'https://en.wikipedia.org/wiki/Banana#Description'}>
          banana plants are <span style={{ fontWeight: 'bold' }}>not</span>{' '}
          trees.
        </a>{' '}
        And—wait for it—bananas are botanically considered a berry :o
      </p>
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
    padding: '6px 12px',
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
        <div style={{ padding: '12px 0px' }}>
          <p>
            The spread of COVID-19 has been swift and destructive. We need a
            global response to support the health systems working to keep us all
            safe.
          </p>
          <p
            style={{
              marginBottom: 0,
            }}
          >
            Tab for a Cause is a free, simple, and at-home way to raise money
            for important causes, and we are running special campaigns during
            the crisis to raise funds for response efforts.
          </p>
          {installButtonBlock}
          <p>
            Join Tab for a Cause now to support the fight against COVID-19.
            Thank you, and stay safe.
          </p>
          <div
            style={{
              marginTop: 40,
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
              The Tab for a Cause community raised thousands of dollars for the
              World Health Organization's{' '}
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
          </div>
          <div
            style={{
              marginTop: 40,
              marginBottom: 40,
              // Full page width CSS
              display: 'block',
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
              style={{ width: '100%' }}
            />
          </div>
        </div>
        <div style={{ padding: '12px 0px' }}>
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
