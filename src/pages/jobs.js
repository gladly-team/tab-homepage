import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import TextPageContent from 'src/components/TextPageContent'
import TextPageHeader from 'src/components/TextPageHeader'
import Paper from '@mui/material/Paper'
import {
  lighterTextColor,
  secondaryMainColor,
  secondaryContrastTextColor,
  lightestTextColor,
} from 'src/themes/theme'
import Explore from '@mui/icons-material/Explore'
import Favorite from '@mui/icons-material/Favorite'
import Lock from '@mui/icons-material/Lock'
import Restaurant from '@mui/icons-material/Restaurant'
import SentimentVerySatisfied from '@mui/icons-material/SentimentVerySatisfied'
import ShowChart from '@mui/icons-material/ShowChart'
import Layout from 'src/components/Layout'
import Divider from '@mui/material/Divider'

import Button from '@mui/material/Button'
import Link from 'src/components/Link'

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

const ApplyButton = (props) => {
  const { email = 'jobs@tabforacause.org', children, ...otherProps } = props
  return (
    <a href={`mailto:${email}`}>
      <Button variant="contained" color="primary" size="medium" {...otherProps}>
        {children}
      </Button>
    </a>
  )
}

ApplyButton.propTypes = {
  email: PropTypes.string,
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
      <Layout brand="all" location={location}>
        <TextPageContent>
          <Helmet title="Jobs">
            <meta property="og:title" content={openGraphTitle} />
            <meta property="og:description" content={openGraphDescription} />
            <meta name="twitter:title" content={openGraphTitle} />
            <meta name="twitter:description" content={openGraphDescription} />
          </Helmet>
          <TextPageHeader>Jobs</TextPageHeader>
          <div>
            <p>
              Welcome! We're building a company that reflects the same values
              internally that we project externally. We prioritize open
              dialogue, trust, and learning. We strive to make working at Tab
              for a Cause rewarding, purposeful, and fun.
            </p>
          </div>

          {/* <Paper style={jobPaperStyle}>
            <h2>Founding Engineer</h2>
            <p>Remote – Full time</p>
            <p>
              As the founding engineer at Tab for a Cause, you’ll change the way
              GenZ does social impact. This is an incredible opportunity to be
              an early, foundational leader on a social-good consumer product
              with real revenue and substantial impact.
            </p>
            <Link to="https://angel.co/company/tabforacause/jobs/2457095-founding-engineer">
              <Button variant="contained" color="primary" size="medium">
                See Job
              </Button>
            </Link>
          </Paper> */}

          {/*           <Paper style={jobPaperStyle}> */}
          {/*             <h2>UI/UX Designer</h2> */}
          {/*             <p>Remote – Part time (contract)</p> */}
          {/*             <p> */}
          {/*               Tab for a Cause is the easiest way to do good every day. We */}
          {/*               believe everybody should make a difference in the world just by */}
          {/*               surfing the web: every browser tab you open gives money, for free. */}
          {/*               We’re taking our new tab page to the next level as we strive to */}
          {/*               make Tab for a Cause even more intuitive, fun, and impactful. */}
          {/*             </p> */}
          {/*             <p> */}
          {/*               As the UI/UX expert, you’ll lead the process of turning feature */}
          {/*               ideas into design mocks and prototypes. We’re a small team that */}
          {/*               iterates rapidly, so your work will quickly land in front of the */}
          {/*               Tabbing community and make a real difference for our nonprofit */}
          {/*               partners. */}
          {/*             </p> */}
          {/*  */}
          {/*             <p style={{ marginBottom: 16, fontWeight: 500 }}>You:</p> */}
          {/*             <ul> */}
          {/*               <li>Are ready on day 1</li> */}
          {/*               <ul> */}
          {/*                 <li>Are proficient with Figma</li> */}
          {/*                 <li>Have prior experience in web app UX design</li> */}
          {/*                 <li>Are grounded in design principles and conventions</li> */}
          {/*               </ul> */}
          {/*  */}
          {/*               <li>Bring vision, leadership, and crystal-clear communication</li> */}
          {/*               <ul> */}
          {/*                 <li> */}
          {/*                   Are comfortable ideating on product direction in real time and */}
          {/*                   turning a conversation into a prototype */}
          {/*                 </li> */}
          {/*                 <li> */}
          {/*                   Are capable at navigating competing/conflicting design visions */}
          {/*                   toward the best outcome */}
          {/*                 </li> */}
          {/*                 <li> */}
          {/*                   Are excellent at communicating rationale behind design */}
          {/*                   decisions */}
          {/*                 </li> */}
          {/*                 <li> */}
          {/*                   Are empathetic to users’ needs and motivations and how they */}
          {/*                   relate to business goals */}
          {/*                 </li> */}
          {/*                 <li> */}
          {/*                   Are able to see beyond what a product currently is to what it */}
          {/*                   could be */}
          {/*                 </li> */}
          {/*               </ul> */}
          {/*  */}
          {/*               <li>Are excited about working with a small startup</li> */}
          {/*               <ul> */}
          {/*                 <li> */}
          {/*                   Are interested in leading design on a rapidly-evolving product */}
          {/*                 </li> */}
          {/*                 <li> */}
          {/*                   Are comfortable with uncertainty and shifting priorities */}
          {/*                 </li> */}
          {/*                 <li> */}
          {/*                   Believe Tab for a Cause can grow into something greater than */}
          {/*                   it is */}
          {/*                 </li> */}
          {/*               </ul> */}
          {/*               <li> */}
          {/*                 Align with our team’s values and want to work alongside kind, */}
          {/*                 ambitious, purpose-driven people */}
          {/*               </li> */}
          {/*             </ul> */}
          {/*  */}
          {/*             <p style={{ marginBottom: 16, fontWeight: 500 }}> */}
          {/*               Compensation & Other Details: */}
          {/*             </p> */}
          {/*             <ul> */}
          {/*               <li>Contract, part time: 10 hours/week, $55/hour</li> */}
          {/*               <li>Remote work, must be a U.S. resident</li> */}
          {/*               <li> */}
          {/*                 Available a few hours each week between 10am and 2pm PT for */}
          {/*                 meetings (exact times will be flexible) */}
          {/*               </li> */}
          {/*               <li> */}
          {/*                 As we grow, potential to move to a full-time role (+ equity and */}
          {/*                 benefits), if interested */}
          {/*               </li> */}
          {/*             </ul> */}
          {/*  */}
          {/*             <p style={{ marginBottom: 16, fontWeight: 500 }}>To Apply:</p> */}
          {/*             <p> */}
          {/*               Please send a resume, portfolio, and short message about why you’d */}
          {/*               be a great fit to <b>jobs@tabforacause.org</b>. We look forward to */}
          {/*               hearing from you! */}
          {/*             </p> */}
          {/*  */}
          {/*             <ApplyButton email="jobs@tabforacause.org">Apply</ApplyButton> */}
          {/*           </Paper> */}

          <Paper style={jobPaperStyle}>
            <h2>No Open Positions at the Moment</h2>
            <p>
              Think you'd be a fit for a job we haven't listed? Email us at:
              jobs@tabforacause.org
            </p>
            <ApplyButton>Get in Touch</ApplyButton>
          </Paper>

          <h1 style={{ marginTop: 48, marginBottom: 10 }}>Our Values</h1>
          <Divider
            style={{
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
            {teamValues.map((teamValue) => (
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
            ))}
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
