import React from 'react'
import TextPageContent from 'components/TextPageContent'
import { secondaryMainColor } from 'themes/theme'
import imgAlex from 'img/team/alex.jpg'
import imgKevin from 'img/team/kevin.jpg'

const TeamPage = () => {
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
  return (
    <div>
      <TextPageContent>
        <h1>Team</h1>
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
  )
}

export default TeamPage
