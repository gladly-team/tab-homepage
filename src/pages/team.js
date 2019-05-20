import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import TextPageContent from 'components/TextPageContent'
import TextPageHeader from 'components/TextPageHeader'
import Link from 'components/Link'
import { jobsURL } from 'utils/navigation'
import { secondaryMainColor } from 'themes/theme'
import imgAlex from 'img/team/alex.jpg'
import imgKevin from 'img/team/kevin.jpg'
import Layout from 'components/Layout'

const TeamPage = ({ location }) => {
  const team = [
    {
      name: 'Alex Groth',
      img: imgAlex,
      title: 'Co-Founder & CEO',
    },
    {
      name: 'Kevin Jennison',
      img: imgKevin,
      title: 'Co-Founder & CTO',
    },
  ]
  const openGraphTitle = 'Our Team - Tab for a Cause'
  const openGraphDescription = 'Meet the team behind Tab for a Cause.'
  return (
    <Layout location={location}>
      <div>
        <Helmet title={'Team'}>
          <meta property="og:title" content={openGraphTitle} />
          <meta property="og:description" content={openGraphDescription} />
          <meta name="twitter:title" content={openGraphTitle} />
          <meta name="twitter:description" content={openGraphDescription} />
        </Helmet>
        <TextPageContent>
          <TextPageHeader>Team</TextPageHeader>
          <p>
            Hi there! We're a small team working in sunny Palo Alto, California.
            We're humbled by the Tab for a Cause community and are thrilled that
            we get to spend our time helping it grow.
          </p>
          <p>
            Want to join in? Check out our <Link to={jobsURL}>open jobs</Link>.
          </p>
          <span
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              justifyContent: 'space-around',
            }}
          >
            {team.map(member => (
              <span
                key={member.img}
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  margin: 8,
                }}
              >
                <img
                  src={member.img}
                  style={{
                    width: 150,
                    height: 150,
                    borderRadius: '50%',
                    border: `6px solid ${secondaryMainColor}`,
                    margin: 8,
                  }}
                />
                <span style={{ fontWeight: 'bold' }}>{member.name}</span>
                <span>{member.title}</span>
              </span>
            ))}
          </span>
        </TextPageContent>
      </div>
    </Layout>
  )
}

TeamPage.propTypes = {
  location: PropTypes.shape({
    pathname: PropTypes.string.isRequired,
  }).isRequired,
}

TeamPage.displayName = 'TeamPage'

export default TeamPage
