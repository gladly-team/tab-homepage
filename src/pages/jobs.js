import React from 'react'
import Helmet from 'react-helmet'
import TextPageContent from 'components/TextPageContent'
import TextPageHeader from 'components/TextPageHeader'
import Paper from '@material-ui/core/Paper'
import {
  lighterTextColor,
  secondaryMainColor,
  secondaryContrastTextColor,
} from 'themes/theme'
import Explore from '@material-ui/icons/Explore'
import Favorite from '@material-ui/icons/Favorite'
import Lock from '@material-ui/icons/Lock'
import Restaurant from '@material-ui/icons/Restaurant'
import SentimentVerySatisfied from '@material-ui/icons/SentimentVerySatisfied'
import ShowChart from '@material-ui/icons/ShowChart'

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

class JobsPage extends React.Component {
  render() {
    const openGraphTitle = 'Jobs at Tab for a Cause'
    const openGraphDescription =
      'Check out open jobs at a purpose-driven, challenging, and fun startup!'
    return (
      <TextPageContent>
        <Helmet title={'Jobs'}>
          <meta property="og:title" content={openGraphTitle} />
          <meta property="og:description" content={openGraphDescription} />
          <meta name="twitter:title" content={openGraphTitle} />
          <meta name="twitter:description" content={openGraphDescription} />
        </Helmet>
        <TextPageHeader>Jobs</TextPageHeader>
        <div style={{ marginBottom: 30 }}>
          <p>
            We are a small team that prioritizes collaboration, positivity,
            work-life balance, and social impact (we've given over $500,000 to
            charity!). We're striving to make both ourselves and the world a
            little better.
          </p>
        </div>
        <h2>Our Values</h2>
        <p>Our team's values drive how we work and what we work on.</p>
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            marginBottom: 20,
          }}
        >
          {teamValues.map(teamValue => {
            return (
              <Paper
                key={teamValue.name}
                elevation={1}
                style={{
                  maxWidth: 300,
                  // display: 'flex',
                  // flexDirection: 'column',
                  // justifyContent: 'center',
                  // alignItems: 'center',
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
        <h2>Positions</h2>
        <div style={{ marginBottom: 30 }}>
          <p>
            We don't have any open jobs at this time. Interested in
            volunteering, or think you'd be a fit for a job we haven't listed?
            Email us at: jobs@gladly.io
          </p>
        </div>
      </TextPageContent>
    )
  }
}

export default JobsPage
