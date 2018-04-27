import React from 'react'

import Section from 'components/Section'
import ReviewCarousel from 'components/ReviewCarousel'
import Review from 'components/Review'
import InstallButton from 'components/InstallButton'
import CharitableImpactText from 'components/CharitableImpactText'
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
import imgKevin from 'img/team/kevin.jpg'

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
        <h1>Raise money for charity every time you open a new browser tab</h1>
        <p>It doesn't cost you a thing.</p>
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
          Ads on the new tab page raise money, and you tell us where the money
          goes.
        </p>
        <p>
          Open tabs to <CharitableImpactText cycleSpeedMs={3000} />
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
          padding: 30,
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
      background={'dark'}
      fullWidth={true}
      style={{
        flexDirection: 'column',
        justifyContent: 'center',
        overflow: 'hidden',
        position: 'relative',
      }}
    >
      <ReviewCarousel>
        <Review name="Lucas Norr" imgUrl={imgKevin} starCount={5}>
          Awesome way to give back while browsing, with absolutely no effort on
          your end!
        </Review>
        <Review name="Shayne Walton" imgUrl={imgKevin} starCount={5}>
          FANTASTIC app that lets you do a lot of good things while doing your
          day to day work, studying for finals, or just surfing the web!
        </Review>
        <Review name="Benjamin King" imgUrl={imgKevin} starCount={5}>
          Raise money for charity by browsing the internet. Perfectly executed!
        </Review>
        <Review name="Jonathon Buchanan" imgUrl={imgKevin} starCount={5}>
          Love that this gives me, a fool with no money, a way to donate to
          charity. :)
        </Review>
        <Review name="Abby Hill" imgUrl={imgKevin} starCount={5}>
          Wonderful and thoughtful idea for an extension! Helping save the world
          one tab at a time.
        </Review>
        <Review name="Chase Rosen" imgUrl={imgKevin} starCount={5}>
          It's wonderful. Unobtrusive, useful, well designed, easy to navigate,
          and actually pretty fun! There is no reason to not have this
          extension. It has not affected performance and is never an
          inconvenience.
        </Review>
      </ReviewCarousel>
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
