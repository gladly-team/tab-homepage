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
              We are a small team that prioritizes collaboration, positivity,
              work-life balance, and social impact (we've given over $1M to
              charity!).
            </p>
          </div>

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

          {/*           <Paper style={jobPaperStyle}> */}
          {/*             <h2>Senior Full Stack Web Developer</h2> */}
          {/*             <p>Remote – Full time or part time</p> */}
          {/*             <p> */}
          {/*               We're looking to hire a driven, experienced, and thoughtful full */}
          {/*               stack engineer. The person in this position will help take Tab for */}
          {/*               a Cause from $1M raised for charity to $10M and beyond! */}
          {/*             </p> */}
          {/*             <p> */}
          {/*               We're a small team that values collaboration, positivity, social */}
          {/*               impact, and work-life balance. If that's your kind of team—and you */}
          {/*               love having agency over your work and diving in to build web apps */}
          {/*               for real users—you'll thrive here. */}
          {/*             </p> */}
          {/*             <p style={{ fontStyle: 'italic' }}> */}
          {/*               Please note: while this role is remote, it does require U.S. work */}
          {/*               authorization, and we unfortunately cannot sponsor visas */}
          {/*             </p> */}
          {/*  */}
          {/*             <p style={{ marginBottom: 16, fontWeight: 500 }}>You:</p> */}
          {/*             <ul> */}
          {/*               <li>Are ready on day 1</li> */}
          {/*               <ul> */}
          {/*                 <li> */}
          {/*                   Are proficient with JavaScript and React.js (bonus: experience */}
          {/*                   with GraphQL, DynamoDB, Firebase, Next.js, serverless */}
          {/*                   infrastructure) */}
          {/*                 </li> */}
          {/*                 <li> */}
          {/*                   Have previously owned substantial projects and features of a */}
          {/*                   production web app, working across all aspects of the stack */}
          {/*                 </li> */}
          {/*                 <li>Are competent at data modeling and component design</li> */}
          {/*                 <li>Are excellent at writing tests and value clean code</li> */}
          {/*                 <li> */}
          {/*                   Are incredibly resourceful: you rely on Google and reasonable */}
          {/*                   workarounds to remove barriers */}
          {/*                 </li> */}
          {/*                 <li> */}
          {/*                   Thrive on individual accountability yet prioritize overarching */}
          {/*                   team goals */}
          {/*                 </li> */}
          {/*               </ul> */}
          {/*  */}
          {/*               <li>Think on a high level</li> */}
          {/*               <ul> */}
          {/*                 <li>Understand how your work fits into company goals</li> */}
          {/*                 <li>Are comfortable speccing features</li> */}
          {/*                 <li> */}
          {/*                   Don't get bogged down in unimportant problems or perfectionism */}
          {/*                 </li> */}
          {/*                 <li> */}
          {/*                   Maintain a balance between rapid, minimum-viable feature */}
          {/*                   development and avoiding technical debt and app instability */}
          {/*                 </li> */}
          {/*                 <li>Communicate well with non-engineers</li> */}
          {/*               </ul> */}
          {/*  */}
          {/*               <li>Love the work</li> */}
          {/*               <ul> */}
          {/*                 <li> */}
          {/*                   Enjoy working across the stack, from designing database schema */}
          {/*                   to tweaking component styling to launching new web services */}
          {/*                 </li> */}
          {/*                 <li> */}
          {/*                   Don't shy away from tedious or hard tasks when those are the */}
          {/*                   most important */}
          {/*                 </li> */}
          {/*                 <li> */}
          {/*                   Understand a small team environment comes with both good */}
          {/*                   things (nimbleness, agency, flexibility) and challenges */}
          {/*                   (wearing many hats, limited resources), and you're okay with */}
          {/*                   that */}
          {/*                 </li> */}
          {/*                 <li>Believe in Tab for a Cause's potential</li> */}
          {/*               </ul> */}
          {/*               <li>Align with our values</li> */}
          {/*             </ul> */}
          {/*  */}
          {/*             <p style={{ marginBottom: 16, fontWeight: 500 }}>What you'd do:</p> */}
          {/*             <ul> */}
          {/*               <li> */}
          {/*                 Design and build features that increase our users' happiness, */}
          {/*                 help new people discover Tab for a Cause, and raise more money */}
          {/*                 for charity */}
          {/*               </li> */}
          {/*               <li> */}
          {/*                 Work with marketing and business teams to iterate on growth */}
          {/*                 strategies */}
          {/*               </li> */}
          {/*               <li> */}
          {/*                 As needed, launch exploratory products that carry Tab for a */}
          {/*                 Cause's vision beyond the new tab page and into mobile or the */}
          {/*                 broader web */}
          {/*               </li> */}
          {/*               <li> */}
          {/*                 Bring creative energy to help guide product and company */}
          {/*                 direction */}
          {/*               </li> */}
          {/*             </ul> */}
          {/*  */}
          {/*             <p style={{ marginBottom: 16, fontWeight: 500 }}> */}
          {/*               Why you'll love your job: */}
          {/*             </p> */}
          {/*             <ul> */}
          {/*               <li> */}
          {/*                 <b>Autonomy:</b> You'll own projects from birth to deployment */}
          {/*                 and have a ton of latitude to determine how they get done. */}
          {/*               </li> */}
          {/*               <li> */}
          {/*                 <b>Impact:</b> As a critical part of our small team, you'll be a */}
          {/*                 major voice in the direction of Tab for a Cause. Zooming out, */}
          {/*                 your work will ultimately support critical, on-the-ground */}
          {/*                 nonprofit work. */}
          {/*               </li> */}
          {/*               <li> */}
          {/*                 <b>Values:</b> We don't lose sight of what matters: treating */}
          {/*                 each other well, enjoying our work, and doing good. We support */}
          {/*                 each other, help each other learn, and take pride in what we do. */}
          {/*               </li> */}
          {/*             </ul> */}
          {/*  */}
          {/*             <p style={{ marginBottom: 16, fontWeight: 500 }}>Nuts and bolts:</p> */}
          {/*             <ul> */}
          {/*               <li> */}
          {/*                 If full time: $100k-120k salary + 1-2% equity + 401(k) matching */}
          {/*                 up to 4% + health benefits */}
          {/*               </li> */}
          {/*               <li>If part time: $65/hour</li> */}
          {/*               <li>Remote, collaboration on Slack + Github + video</li> */}
          {/*               <li> */}
          {/*                 Flexible schedule: besides a good cadence of collaboration (we */}
          {/*                 aim to have working hour overlaps from about 10am – 2pm PT), */}
          {/*                 work when you’d like! */}
          {/*               </li> */}
          {/*             </ul> */}
          {/*  */}
          {/*             <p style={{ marginBottom: 16, fontWeight: 500 }}> */}
          {/*               Sound great? Get in touch! */}
          {/*             </p> */}
          {/*             <p> */}
          {/*               Please email <b>job.2ooa6@funded.recruitee.com</b> with 1) a */}
          {/*               resume, and 2) a quick description of some full stack work you're */}
          {/*               proud of. We look forward to meeting you! */}
          {/*             </p> */}
          {/*  */}
          {/*             <ApplyButton email="job.2ooa6@funded.recruitee.com"> */}
          {/*               Apply */}
          {/*             </ApplyButton> */}
          {/*           </Paper> */}

          <Paper style={jobPaperStyle}>
            {/* <h2>Something else?</h2> */}
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
