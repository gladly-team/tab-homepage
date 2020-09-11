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
      padding: 24,
      marginTop: 32,
      marginBottom: 32,
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
            <h2>Senior Full Stack Web Developer</h2>
            <p>Remote – Full time or part time</p>
            <p>
              We're looking to hire a driven, experienced, and thoughtful full
              stack engineer. The person in this position will help take Tab for
              a Cause from $1M raised for charity to $10M and beyond!
            </p>
            <p>
              We're a small team that values collaboration, positivity, social
              impact, and work-life balance. If that's your kind of team—and you
              love having agency over your work and diving in to build web apps
              for real users—you'll thrive here.
            </p>

            <p style={{ marginBottom: 16, fontWeight: 500 }}>You:</p>
            <ul>
              <li>Are ready on day 1</li>
              <ul>
                <li>
                  Are proficient with JavaScript and React.js (bonus: experience
                  with GraphQL, DynamoDB, Firebase, Next.js, serverless
                  infrastructure)
                </li>
                <li>
                  Have previously owned substantial projects and features of a
                  production web app, working across all aspects of the stack
                </li>
                <li>Are competent at data modeling and component design</li>
                <li>Are excellent at writing tests and value clean code</li>
                <li>
                  Are incredibly resourceful: you rely on Google and reasonable
                  workarounds to remove barriers
                </li>
                <li>
                  Thrive on individual accountability yet prioritize overarching
                  team goals
                </li>
              </ul>

              <li>Think on a high level</li>
              <ul>
                <li>Understand how your work fits into company goals</li>
                <li>Are comfortable speccing features</li>
                <li>
                  Don't get bogged down in unimportant problems or perfectionism
                </li>
                <li>
                  Maintain a balance between rapid, minimum-viable feature
                  development and avoiding technical debt and app instability
                </li>
                <li>Communicate well with non-engineers</li>
              </ul>

              <li>Love the work</li>
              <ul>
                <li>
                  Enjoy working across the stack, from designing database schema
                  to tweaking component styling to launching new web services
                </li>
                <li>
                  Don't shy away from tedious or hard tasks when those are the
                  most important
                </li>
                <li>
                  Understand a small team environment comes with both good
                  things (nimbleness, agency, flexibility) and challenges
                  (wearing many hats, limited resources), and you're okay with
                  that
                </li>
                <li>Believe in Tab for a Cause's potential</li>
              </ul>
              <li>Align with our values</li>
            </ul>

            <p style={{ marginBottom: 16, fontWeight: 500 }}>What you'd do:</p>
            <ul>
              <li>
                Design and build features that increase our users' happiness,
                help new people discover Tab for a Cause, and raise more money
                for charity
              </li>
              <li>
                Work with marketing and business teams to iterate on growth
                strategies
              </li>
              <li>
                As needed, launch exploratory products that carry Tab for a
                Cause's vision beyond the new tab page and into mobile or the
                broader web
              </li>
              <li>
                Bring creative energy to help guide product and company
                direction
              </li>
            </ul>

            <p style={{ marginBottom: 16, fontWeight: 500 }}>
              Why you'll love your job:
            </p>
            <ul>
              <li>
                <b>Autonomy:</b> You'll own projects from birth to deployment
                and have a ton of latitude to determine how they get done.
              </li>
              <li>
                <b>Impact:</b> As a critical part of our small team, you'll be a
                major voice in the direction of Tab for a Cause. Zooming out,
                your work will ultimately support critical, on-the-ground
                nonprofit work.
              </li>
              <li>
                <b>Balance:</b> We prioritize maintaining a healthy and happy
                life. We're ambitious and hard-working, and sometimes we'll be
                stressed and sometimes we'll work late, but we don't believe
                overworking should be the norm.
              </li>
            </ul>

            <p style={{ marginBottom: 16, fontWeight: 500 }}>Nuts and bolts:</p>
            <ul>
              <li>
                If full time: $100k-120k salary + 1-2% equity + 401(k) matching
                up to 4% + health benefits
              </li>
              <li>If part time: $65/hour</li>
              <li>Remote, collaboration on Slack + Github + video</li>
              <li>
                Flexible schedule: besides team meetings and a reasonable
                cadence of collaboration, work when you'd like
              </li>
            </ul>

            <p style={{ marginBottom: 16, fontWeight: 500 }}>
              Sound great? Get in touch!
            </p>
            <p>
              Please email jobs@tabforacause.org with 1) a resume, and 2) a
              quick description of some full stack work you're proud of. We look
              forward to meeting you!
            </p>

            <ApplyButton>Apply</ApplyButton>
          </Paper>
          <Paper style={jobPaperStyle}>
            <h2>Something else?</h2>
            <p>
              Think you'd be a fit for a job we haven't listed? Email us at:
              jobs@tabforacause.org
            </p>
            <ApplyButton>Get in Touch</ApplyButton>
          </Paper>
          <h1 style={{ marginTop: 48, marginBottom: 10 }}>Our Values</h1>
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
                            width: 32,
                            height: 32,
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
                        fontSize: 16,
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
