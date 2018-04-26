import React from 'react'

import Section from 'components/Section'
import InstallButton from 'components/InstallButton'
import Link from 'components/Link'
import {
  githubTabRepoURL,
  githubTabExtensionsRepoURL,
  githubTabHomepageRepoURL,
  pressHuffingtonPostURL,
  pressLATimesURL,
  pressMashableURL,
  pressUSATodayURL,
} from 'utils/navigation'
import logoHuffingtonPost from 'img/press/huffington-post-grey.svg'
import logoUSAToday from 'img/press/usa-today-grey.svg'
import logoLATimes from 'img/press/los-angeles-times-grey.svg'
import logoMashable from 'img/press/mashable-grey.svg'

const IndexPage = () => (
  <div>
    <Section wrap={'reverse'}>
      <div
        style={{
          // Placeholder for image
          background: '#ffeebf',
          width: '67%',
          maxWidth: 700,
          height: '67%',
          minHeight: 500, // probably remove after adding content
          marginTop: 20,
          marginRight: 20,
          marginBottom: 20,
        }}
      />
      <div
        style={{
          flex: 1,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          minWidth: 220,
          marginTop: 20,
          marginBottom: 80,
          marginLeft: 80,
          marginRight: 60,
        }}
      >
        <h1>Surf the web, save the world</h1>
        <p>
          Raise money for charity every time you open a new browser tab. It
          doesn't cost you a thing.
        </p>
        <div>
          <InstallButton />
        </div>
      </div>
    </Section>
    <Section
      background={'dark'}
      fullWidth={true}
      style={{ flexDirection: 'row', justifyContent: 'center', padding: 80 }}
    >
      <div style={{ textAlign: 'center' }}>
        <h1>$504,300.29</h1>
        <p>raised for charity</p>
      </div>
    </Section>
    <Section>
      <div
        style={{
          flex: 1,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          minWidth: 220,
          marginTop: 40,
          marginBottom: 40,
          marginLeft: 80,
          marginRight: 60,
        }}
      >
        <h1>A new tab you'll fall in love with</h1>
        <p>
          Browse better with gorgeous photos, notes, to-do lists, and more, all
          just a new tab away.
        </p>
      </div>
      <div
        style={{
          // Placeholder for image
          background: '#ffbfd1',
          width: '60%',
          maxWidth: 700,
          height: '60%',
          minHeight: 450, // probably remove after adding content
          marginTop: 20,
          marginLeft: 20,
          marginBottom: 20,
        }}
      />
    </Section>
    <Section wrap={'reverse'}>
      <div
        style={{
          // Placeholder for image
          background: '#ffbfd1',
          width: '60%',
          maxWidth: 700,
          height: '60%',
          minHeight: 450, // probably remove after adding content
          marginTop: 20,
          marginRight: 20,
          marginBottom: 20,
        }}
      />
      <div
        style={{
          flex: 1,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          minWidth: 220,
          marginTop: 40,
          marginBottom: 40,
          marginLeft: 80,
          marginRight: 60,
        }}
      >
        <h1>Support your favorite cause, effortlessly</h1>
        <p>
          Every tab you open raises money to do good, whether it's plant trees,
          feed children, build libraries, provide emergency aid, educate youth,
          preserve oceans, prevent disease, build wells, protect human rights...
          You choose what you support.
        </p>
      </div>
    </Section>
    <Section
      background={'dark'}
      fullWidth={true}
      style={{ flexDirection: 'column', justifyContent: 'center', padding: 80 }}
    >
      <div style={{ textAlign: 'center', flex: 1 }}>
        {/* Or: "Your browser tabs will help empower commmunities" -The Huffington Post  */}
        <h1>"One of the simplest ways to raise money"</h1>
        <p>- USA Today</p>
      </div>
      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
          flexWrap: 'wrap',
          justifyContent: 'space-evenly',
          alignItems: 'center',
          padding: 40,
        }}
      >
        <Link to={pressHuffingtonPostURL}>
          <img
            src={logoHuffingtonPost}
            style={{
              width: 144,
              margin: 20,
            }}
          />
        </Link>
        <Link to={pressUSATodayURL}>
          <img
            src={logoUSAToday}
            style={{
              height: 60,
              margin: 20,
            }}
          />
        </Link>
        <Link to={pressLATimesURL}>
          <img
            src={logoLATimes}
            style={{
              height: 64,
              margin: 20,
            }}
          />
        </Link>
        <Link to={pressMashableURL}>
          <img
            src={logoMashable}
            style={{
              width: 134,
              margin: 20,
            }}
          />
        </Link>
      </div>
    </Section>
    <Section
      style={{ flexDirection: 'row', justifyContent: 'center', padding: 80 }}
    >
      <div style={{ textAlign: 'center', maxWidth: 760, padding: 10 }}>
        <h1>Psst, we're open source!</h1>
        <p style={{ maxWidth: 680 }}>
          The code for our <Link to={githubTabRepoURL}>new tab page</Link>,{' '}
          <Link to={githubTabExtensionsRepoURL}>browser extensions</Link>
          , and even <Link to={githubTabHomepageRepoURL}>this webpage</Link> are
          open source, so you can rest easy knowing that we have our community's
          best interests at heart.
        </p>
      </div>
    </Section>
  </div>
)

export default IndexPage
