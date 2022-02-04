import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import TextPageContent from 'src/components/TextPageContent'
import TextPageHeader from 'src/components/TextPageHeader'
import Link from 'src/components/Link'
import { jobsURL } from 'src/utils/navigation'
import { secondaryMainColor } from 'src/themes/theme'
import imgAlex from 'src/img/team/alex.jpg'
import imgKevin from 'src/img/team/kevin.jpg'
import imgMiranda from 'src/img/team/miranda.jpg'
import imgIlana from 'src/img/team/Ilana.jpg'
import Layout from 'src/components/Layout'

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
    {
      name: 'Miranda Escobar',
      img: imgMiranda,
      title: 'Marketing Manager',
    },
    {
      name: 'Ilana Degann',
      img: imgIlana,
      title: 'Social Media Intern',
    },
  ]
  const openGraphTitle = 'Our Team - Tab for a Cause'
  const openGraphDescription = 'Meet the team behind Tab for a Cause.'
  return (
    <Layout brand="all" location={location}>
      <div>
        <Helmet title="Team">
          <meta property="og:title" content={openGraphTitle} />
          <meta property="og:description" content={openGraphDescription} />
          <meta name="twitter:title" content={openGraphTitle} />
          <meta name="twitter:description" content={openGraphDescription} />
        </Helmet>
        <TextPageContent>
          <TextPageHeader>Team</TextPageHeader>
          <p>
            Hi there! We're a small team working in the sunny San Francisco Bay
            Area, California. We're humbled by the Tab for a Cause and Search
            for a Cause communities and are thrilled that we get to spend our
            time helping them grow.
          </p>
          <p>
            Want to join in? Check out our <Link to={jobsURL}>open jobs</Link>.
          </p>
          <span
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              justifyContent: 'space-around',
              boxSizing: 'border-box',
            }}
          >
            {team.map((member) => (
              <span
                key={member.img}
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  padding: 12,
                  width: '50%',
                  boxSizing: 'border-box',
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
