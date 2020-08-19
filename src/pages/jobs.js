import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import TextPageContent from 'src/components/TextPageContent'
import TextPageHeader from 'src/components/TextPageHeader'
import Paper from '@material-ui/core/Paper'
import {
  lighterTextColor,
  secondaryMainColor,
  secondaryContrastTextColor,
} from 'src/themes/theme'
import Explore from '@material-ui/icons/Explore'
import Favorite from '@material-ui/icons/Favorite'
import Lock from '@material-ui/icons/Lock'
import Restaurant from '@material-ui/icons/Restaurant'
import SentimentVerySatisfied from '@material-ui/icons/SentimentVerySatisfied'
import ShowChart from '@material-ui/icons/ShowChart'
import Layout from 'src/components/Layout'
import Divider from '@material-ui/core/Divider'
import { lightestTextColor } from 'src/themes/theme'
import Button from '@material-ui/core/Button'

const teamValues = [
  {
    name: 'Trust',
    description:
      'Trust is the cornerstone of a healthy team. It allows us to focus on our work, secure in the knowledge that others are building toward our shared goals; it allows us to take responsible risks without fear of criticism; and it allows us to communicate fully and openly.',
    iconComponent: Lock,
  },
  {
    name: 'Learning',
    description:
      'Learning is fundamental to our growth as individuals and as a team. Every one of us has things to teach and things to learn, and being open to learning allows us to foster our curiosity, hone our skills, and remain humble.',
    iconComponent: ShowChart,
  },
  {
    name: 'Camaraderie',
    description:
      'Camaraderie creates a trusting and cohesive team environment that empowers us to be better than we are individually. It also invigorates our interactions with our teammates.',
    iconComponent: Restaurant,
  },
  {
    name: 'Pride',
    description:
      'Taking part in something we are proud of is exhilarating and rewarding. It’s energizing to work alongside people who love what they do.',
    iconComponent: SentimentVerySatisfied,
  },
  {
    name: 'Awareness',
    description:
      'Awareness gives us meaning. It creates the environment necessary for all of these values and it informs and drives our actions both individually and as a company.',
    iconComponent: Explore,
  },
  {
    name: 'Purpose',
    description:
      'We believe every person can and should have a positive impact on the world.',
    iconComponent: Favorite,
  },
]

const ApplyButton = props => {
  const { children, ...otherProps } = props
  return (
    <a href="mailto:jobs@tabforacause.org">
      <Button variant="contained" color="primary" size="medium" {...otherProps}>
        {children}
      </Button>
    </a>
  )
}

ApplyButton.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
}

class JobsPage extends React.Component {
  render() {
    const { location } = this.props
    const openGraphTitle = 'Jobs at Tab for a Cause'
    const openGraphDescription =
      'Check out open jobs at a purpose-driven, challenging, and fun startup!'
    const jobPaperStyle = {
      padding: 14,
      marginTop: 28,
      marginBottom: 28,
    }
    return (
      <Layout brand={'all'} location={location}>
        <TextPageContent>
          <Helmet title={'Jobs'}>
            <meta property="og:title" content={openGraphTitle} />
            <meta property="og:description" content={openGraphDescription} />
            <meta name="twitter:title" content={openGraphTitle} />
            <meta name="twitter:description" content={openGraphDescription} />
          </Helmet>
          <TextPageHeader>Jobs</TextPageHeader>
          <div>
            <p>
              We are a small team that prioritizes collaboration, positivity,
              work-life balance, and social impact (we've given nearly $1M to
              charity!). We're striving to make both ourselves and the world a
              little better.
            </p>
          </div>
          <Paper style={jobPaperStyle}>
            <h2>Marketing and Customer Support Associate</h2>
            <p>
              Tab for a Cause is seeking a creative, self-motivated person to
              join our team. As we continue to grow, you’ll be helping Tab for a
              Cause become a household name in turning everyday actions into
              charitable donations.
            </p>

            <p style={{ marginBottom: 14, fontWeight: 500 }}>You:</p>
            <ul>
              <li>Are excited to jump into new projects and learn by doing</li>
              <li>Are fueled by responsibility and autonomy</li>
              <li>Love working in a small team environment</li>
              <li>
                Can efficiently juggle and prioritize a wide variety of tasks
              </li>
              <li>Are kind, positive, and collaborative</li>
            </ul>

            <p style={{ marginBottom: 14, fontWeight: 500 }}>What you'd do:</p>
            <ul>
              <li>
                Help develop the Gladly brand through social media, content
                writing, and PR
              </li>
              <li>
                Communicate with our users, providing user support and
                distilling feedback into actionable takeaways
              </li>
              <li>
                Create, analyze, and pursue your own ideas on how to spread the
                word about Tab for a Cause
              </li>
              <li>
                Generate and analyze data to inform our product development and
                marketing decisions
              </li>
            </ul>

            <p style={{ marginBottom: 14, fontWeight: 500 }}>
              Why you’ll love your job
            </p>
            <ul>
              <li>
                Autonomy: Plan, execute, and analyze your strategies in
                real-time as you continue to reach for higher levels of
                productivity. We will be here to help you whenever you need it,
                but never to discourage an idea you think will be effective.
              </li>
              <li>
                Company Impact: As part of a small and growing team, your voice
                will be heard from day one. You will quickly gain experience in
                nearly every area of startup marketing-- from social media to
                growth hacking to PR
              </li>
              <li>
                Social Impact: Our goal is to help people raise money for the
                causes they care about. To date, our users have raised nearly
                $1M for amazing non-profits like Conservation International,
                Water.org, GiveDirectly, and Save the Children. Your success at
                Tab for a Cause will mean even more money will be raised for
                important causes
              </li>
            </ul>

            <p style={{ marginBottom: 14, fontWeight: 500 }}>Nuts and bolts:</p>
            <ul>
              <li>Part-time position: 10-15hr/week at $20/hr</li>
              <li>
                Scheduling flexibility: Ideally at least a few hours of your
                weekly schedule will overlap with the rest of the team, but when
                exactly the bulk of your hours are worked are up to you.
              </li>
              <li>
                We are currently a fully remote team and this position is
                remote. The current team lives and works in San Mateo, CA.
              </li>
            </ul>

            <p style={{ marginBottom: 14, fontWeight: 500 }}>To apply:</p>
            <p>
              Please send your resume attached to a short (2-3 paragraphs) email
              describing why you’d be a great fit for this role and Tab for a
              Cause to jobs@tabforacause.org with the subject: “YOUR NAME -
              Marketing and Customer Support Associate”.
            </p>

            <ApplyButton>Apply</ApplyButton>
          </Paper>
          <Paper style={jobPaperStyle}>
            <h2>Something else?</h2>
            <p>
              Interested in volunteering, or think you'd be a fit for a job we
              haven't listed? Email us at: jobs@tabforacause.org
            </p>
            <ApplyButton>Get in Touch</ApplyButton>
          </Paper>
          <h1 style={{ marginTop: 42, marginBottom: 10 }}>Our Values</h1>
          <Divider
            style={{
              backgroundColor: lightestTextColor,
              marginBottom: 20,
            }}
          />
          <p>Our team's values drive how we work and what we work on.</p>
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              marginBottom: 40,
            }}
          >
            {teamValues.map(teamValue => {
              return (
                <Paper
                  key={teamValue.name}
                  elevation={1}
                  style={{
                    maxWidth: 300,
                    textAlign: 'center',
                    margin: 20,
                  }}
                >
                  <span>
                    <span
                      style={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        marginBottom: 10,
                        background: secondaryMainColor,
                        padding: 10,
                      }}
                    >
                      {teamValue.iconComponent ? (
                        <teamValue.iconComponent
                          style={{
                            color: secondaryContrastTextColor,
                            width: 28,
                            height: 28,
                          }}
                        />
                      ) : null}
                      <h3
                        style={{
                          color: secondaryContrastTextColor,
                          marginBottom: 0,
                          marginLeft: 10,
                        }}
                      >
                        {teamValue.name}
                      </h3>
                    </span>
                    <p
                      style={{
                        fontSize: 14,
                        color: lighterTextColor,
                        margin: 20,
                      }}
                    >
                      {teamValue.description}
                    </p>
                  </span>
                </Paper>
              )
            })}
          </div>
        </TextPageContent>
      </Layout>
    )
  }
}

JobsPage.propTypes = {
  location: PropTypes.shape({
    pathname: PropTypes.string.isRequired,
  }).isRequired,
}

JobsPage.displayName = 'JobsPage'

export default JobsPage
