import React from 'react'
import Button from 'material-ui/Button'

import Section from 'components/Section'
import ReviewCarousel from 'components/ReviewCarousel'
import Review from 'components/Review'
import InstallButton from 'components/InstallButton'
import CharitableImpactText from 'components/CharitableImpactText'
import Link from 'components/Link'
import {
  financialsURL,
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
import Star from '@material-ui/icons/Star'
import StarHalf from '@material-ui/icons/StarHalf'
import { lightestTextColor } from 'themes/theme'
import placholderImgYellow from 'img/placeholder-yellow.png'
import placholderImgPink from 'img/placeholder-pink.png'

const IndexPage = () => (
  <div>
    <Section wrap={'reverse'}>
      <img
        src={placholderImgYellow}
        style={{
          width: '67%',
          maxWidth: 700,
          height: '67%',
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
          marginLeft: 60,
          marginRight: 40,
        }}
      >
        <h1>Raise money for charity every time you open a new browser tab</h1>
        <p>It doesn't cost you a thing.</p>
        <div style={{ marginTop: 20, marginBottom: 10 }}>
          <InstallButton />
        </div>
        <div style={{ marginTop: 6, marginBottom: 6 }}>
          <div>
            <Star style={{ color: '#ffc533', width: 18, height: 18 }} />
            <Star style={{ color: '#ffc533', width: 18, height: 18 }} />
            <Star style={{ color: '#ffc533', width: 18, height: 18 }} />
            <Star style={{ color: '#ffc533', width: 18, height: 18 }} />
            <StarHalf style={{ color: '#ffc533', width: 18, height: 18 }} />
          </div>
          <p style={{ fontSize: 12, color: lightestTextColor }}>
            170,000+ people are Tabbing on Chrome
          </p>
        </div>
      </div>
      <div
        style={{
          position: 'absolute',
          top: 0,
          right: 0,
          minHeight: 84, // height as header
          padding: '20px 40px', // same as header
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <p style={{ margin: 0 }}>$504,300.29</p>
        <p style={{ margin: 0, fontSize: 12, color: lightestTextColor }}>
          raised for charity
        </p>
      </div>
    </Section>
    <Section
      background={'dark'}
      fullWidth={true}
      style={{
        flexDirection: 'column',
        justifyContent: 'center',
        paddingTop: 80,
        paddingBottom: 40,
        paddingLeft: 60,
        paddingRight: 60,
      }}
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
      <img
        src={placholderImgPink}
        style={{
          width: '60%',
          maxWidth: 700,
          height: '60%',
          marginTop: 20,
          marginLeft: 20,
          marginBottom: 20,
        }}
      />
    </Section>
    <Section wrap={'reverse'}>
      <img
        src={placholderImgPink}
        style={{
          width: '60%',
          maxWidth: 700,
          height: '60%',
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
          Open tabs to <CharitableImpactText cycleSpeedMs={2000} />
        </p>
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
        paddingTop: 60,
        paddingBottom: 60,
      }}
    >
      <h1
        style={{
          textAlign: 'center',
          marginTop: 0,
          marginBottom: 40,
          marginLeft: 40,
          marginRight: 40,
        }}
      >
        Here's what people have to say:
      </h1>
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
      style={{ flexDirection: 'row', justifyContent: 'center', padding: 60 }}
    >
      <div style={{ textAlign: 'center', maxWidth: 760, padding: 10 }}>
        <h1>We show our work</h1>
        <div style={{ maxWidth: 560 }}>
          <p>
            We know that trust must be earned. That's why the code for our{' '}
            <Link to={githubTabRepoURL}>new tab page</Link>,{' '}
            <Link to={githubTabExtensionsRepoURL}>browser extensions</Link>
            , and even <Link to={githubTabHomepageRepoURL}>
              this webpage
            </Link>{' '}
            are open source.
          </p>
          <p>
            Even better, we publish quarterly financial reports, so you can see
            exactly how much we give to each charity and what our other costs
            are.
          </p>
          <Link to={financialsURL}>
            <Button variant="raised" color="primary">
              See our financials
            </Button>
          </Link>
        </div>
      </div>
    </Section>
  </div>
)

export default IndexPage
