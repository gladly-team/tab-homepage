// This page will soon be removed.
/* eslint-disable */

import React, { useEffect, useState } from 'react'
import { styled } from '@mui/material/styles'
import PropTypes from 'prop-types'
import {
  ThemeProvider,
} from '@mui/material/styles'
import makeStyles from '@mui/styles/makeStyles'
import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import { AlertTitle, Alert } from '@mui/material'
import { lightestTextColor } from 'src/themes/theme'

import Section from 'src/components/Section'
import InstallButton from 'src/components/InstallButton'
import Link from 'src/components/Link'
import MoneyRaisedDisplay from 'src/components/MoneyRaisedDisplay'
import Helmet from 'react-helmet'
import ReviewCarousel from 'src/components/ReviewCarousel'
import Review from 'src/components/Review'
import InfoPopover from 'src/components/InfoPopover'
import UnsupportedBrowserDialog from 'src/components/UnsupportedBrowserDialog'
import AliceCarousel from 'react-alice-carousel'
import 'react-alice-carousel/lib/alice-carousel.css'
import 'src/pages/cats.css'
import HeadTags from 'src/components/HeadTags'

// Images
import landingImg from 'src/img/cats/mockPage1.png'
import landingImg2 from 'src/img/cats/mockPage2.png'
import landingImg3 from 'src/img/cats/mockPage3.png'
import landingImg4 from 'src/img/cats/mockPage4.png'
import landingImg5 from 'src/img/cats/mockPage5.png'
import landingImg6 from 'src/img/cats/mockPage6.png'

import {
  getAbsoluteURL,
  financialsURL,
  adblockerWhitelistingURL,
  externalHelpAllAppsURL,
  facebookPageURL,
  twitterPageURL,
  tiktokPageURL,
  instagramPageURL,
  homeURL,
  catsURL,
  externalHelpURL,
  privacyPolicyURL,
  termsURL,
} from 'src/utils/navigation'
import logoWhite from 'src/img/logo-white.svg'
import cat1 from 'src/img/cats/1.png'
import cat2 from 'src/img/cats/2.png'
import catsOGImg from 'src/img/cats/cats-og-img.png'

// Icons
import Star from '@mui/icons-material/Star'
import StarHalf from '@mui/icons-material/StarHalf'

// Reviewer images
import reviewImgAbbyH from 'src/img/reviews/abby_h.png'
import reviewImgAlfonzoG from 'src/img/reviews/alfonzo_g.png'
import reviewImgAnaL from 'src/img/reviews/ana_l.png'
import reviewImgBenjaminK from 'src/img/reviews/benjamin_k.png'
import reviewImgCameronB from 'src/img/reviews/cameron_b.png'
import reviewImgChaseR from 'src/img/reviews/chase_r.png'
import reviewImgJohnathanB from 'src/img/reviews/johnathan_b.png'
import reviewImgLucasN from 'src/img/reviews/lucas_n.png'
import reviewImgShayneW from 'src/img/reviews/shayne_w.png'
import reviewImgTobyS from 'src/img/reviews/toby_s.png'
import localStorageMgr from 'src/utils/local-storage'
import {
  STORAGE_REFERRAL_DATA_REFERRING_CHANNEL,
  STORAGE_REFERRAL_DATA_REFERRING_USER,
  STORAGE_NEW_USER_IS_TAB_V4_BETA,
  STORAGE_REFERRAL_DATA_MISSION_ID,
  STORAGE_CATS_CAUSE_ID,
  STORAGE_NEW_USER_CAUSE_ID,
} from 'src/utils/constants'
import { getUrlParameterValue } from 'src/utils/location'
import Divider from '@mui/material/Divider'

const PREFIX = 'Cats';

const classes = {
  whiteFont: `${PREFIX}-whiteFont`,
  alertIcon: `${PREFIX}-alertIcon`,
  alertRoot: `${PREFIX}-alertRoot`,
  image: `${PREFIX}-image`,
  MuiButtonContained: `${PREFIX}-MuiButtonContained`,
  mainInstallButton: `${PREFIX}-mainInstallButton`,
  backgroundImageEnter: `${PREFIX}-backgroundImageEnter`,
  backgroundImageEnterActive: `${PREFIX}-backgroundImageEnterActive`,
  backgroundImageAppear: `${PREFIX}-backgroundImageAppear`,
  backgroundImageAppearActive: `${PREFIX}-backgroundImageAppearActive`,
  backgroundImageExit: `${PREFIX}-backgroundImageExit`,
  backgroundImageExitActive: `${PREFIX}-backgroundImageExitActive`,
  SectionHeight: `${PREFIX}-SectionHeight`,
  sectionSplit: `${PREFIX}-sectionSplit`,
  halfPage: `${PREFIX}-halfPage`,
  logo: `${PREFIX}-logo`,
  logoContainer: `${PREFIX}-logoContainer`,
  title: `${PREFIX}-title`,
  address: `${PREFIX}-address`
};

const Root = styled('div')((
  {
    theme
  }
) => ({
  [`& .${classes.whiteFont}`]: {
    color: '#fff',
  },

  [`& .${classes.alertIcon}`]: { flexDirection: 'column', justifyContent: 'center' },

  [`& .${classes.alertRoot}`]: {
    margin: '0px 40px',
    position: 'absolute',
    top: '80px',
    left: 0,
    right: 0,
    [theme.breakpoints.down('md')]: {
      position: 'relative',
      top: '10px',
      margin: '0px 10px',
    },
  },

  [`& .${classes.image}`]: {
    maxWidth: '600px',
    [theme.breakpoints.down('lg')]: {
      width: '100%',
      maxWidth: '100%',
    },
  },

  [`& .${classes.MuiButtonContained}`]: {
    boxShadow: 'none',
  },

  [`& .${classes.mainInstallButton}`]: {
    borderRadius: '20px',
  },

  [`& .${classes.backgroundImageEnter}`]: {
    opacity: 0,
  },

  [`& .${classes.backgroundImageEnterActive}`]: {
    opacity: 1,
    transition: 'opacity 2000ms',
  },

  [`& .${classes.backgroundImageAppear}`]: {
    opacity: 0,
  },

  [`& .${classes.backgroundImageAppearActive}`]: {
    opacity: 1,
    transition: 'opacity 2000ms',
  },

  [`& .${classes.backgroundImageExit}`]: {
    opacity: 1,
  },

  [`& .${classes.backgroundImageExitActive}`]: {
    opacity: 0,
    transition: 'opacity 2000ms',
  },

  [`& .${classes.SectionHeight}`]: {
    height: 'calc(100vh - 64px)',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    [theme.breakpoints.down('md')]: {
      height: '100%',
    },
  },

  [`& .${classes.sectionSplit}`]: {
    display: 'flex',
    minHeight: '540px',
    alignItems: 'center',
    [theme.breakpoints.down('md')]: {
      flexWrap: 'wrap',
    },
  },

  [`& .${classes.halfPage}`]: {
    width: '50%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    [theme.breakpoints.down('md')]: {
      width: '100%',
    },
  },

  [`& .${classes.logo}`]: {
    width: 40,
    height: 40,
  },

  [`& .${classes.logoContainer}`]: { flex: 1, display: 'flex', flexDirection: 'row' },

  [`& .${classes.title}`]: {
    fontSize: '65px',
    color: 'black',
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: '30px',
  },

  [`& .${classes.address}`]: {
    margin: 0,
    fontStyle: 'italic',
    fontSize: 12,
  }
}));

const ogImgURLAbsolute = getAbsoluteURL(catsOGImg)
const canonicalURL = getAbsoluteURL(catsURL)
function Cats({ pageContext, location }) {

  const [showUnsupportedBrowserMessage, setShowUnsupportedBrowserMessage] =
    useState(false)
  const [isReferral, setIsReferral] = useState(false)
  const [isMission, setIsMission] = useState(false)

  // store referrer id
  useEffect(() => {
    let referrerId = null

    // Check for a referrer's vanity URL.
    if (pageContext && pageContext.referrer) {
      referrerId = pageContext.referrer.id
    } else {
      const paramRefId = parseInt(getUrlParameterValue('r'))
      if (!isNaN(paramRefId)) {
        referrerId = paramRefId
      }
    }
    referrerId &&
      localStorageMgr.setItem(
        STORAGE_REFERRAL_DATA_REFERRING_CHANNEL,
        referrerId
      )
  }, [])
  useEffect(() => {
    const userReferrerId = getUrlParameterValue('u')
    if (userReferrerId !== null && userReferrerId !== undefined) {
      localStorageMgr.setItem(
        STORAGE_REFERRAL_DATA_REFERRING_USER,
        userReferrerId
      )
      setIsReferral(true)
    }
  }, [])

  // squad id
  useEffect(() => {
    const missionId = getUrlParameterValue('m')
    if (missionId !== null && missionId !== undefined) {
      localStorageMgr.setItem(STORAGE_REFERRAL_DATA_MISSION_ID, missionId)
      setIsMission(true)
    }
  }, [])
  const installButton = (
    <InstallButton
      classes={{ contained: classes.mainInstallButton }}
      onBeforeInstall={() => {
        localStorageMgr.setItem(STORAGE_NEW_USER_IS_TAB_V4_BETA, 'true')
        localStorageMgr.setItem(
          STORAGE_NEW_USER_CAUSE_ID,
          STORAGE_CATS_CAUSE_ID
        )
      }}
      onUnsupportedBrowserInstallClick={() => {
        setShowUnsupportedBrowserMessage(true)
      }}
    />
  )
  const mockImagesArray = [
    <img key="6" className={classes.image} src={landingImg6} />,
    <img key="4" className={classes.image} src={landingImg4} />,
    <img key="2" className={classes.image} src={landingImg2} />,
    <img key="3" className={classes.image} src={landingImg3} />,
    <img key="5" className={classes.image} src={landingImg5} />,
    <img key="1" className={classes.image} src={landingImg} />,
  ]
  const absolutePageURL = getAbsoluteURL(location.pathname)
  return (
    <Root>
      <HeadTags
        title="Tab for Cats - Home"
        titleTemplate="%s | Tab for Cats"
        ogTitle="Help Shelter Cats for Free Online | Tab for Cats "
        ogDescription="Open new tabs, help shelter cats for free... it’s that easy!"
        ogImage={ogImgURLAbsolute}
        keywords="charity, cat, cats, extension, new tab, chrome, help, donation, raise money, money, adoption, shelter cat, easy, ways to donate, free, best, home, animals, safe, Jackson Galaxy, Greater Good, treats, volunteer, internet, tab for a cause, impact, stray, legitimate, rescue, food, facebook, twitter, reddit, instagram, tumblr"
        pageURL={absolutePageURL}
      />
      <AppBar color="primary" position="sticky">
        <Toolbar>
          <div className={classes.logoContainer}>
            <div
              data-test-id="logo-container"
              style={{
                display: 'flex',
                justifyContent: 'flex-start',
                alignItems: 'center',
              }}
            >
              <Link to={homeURL}>
                <img
                  data-test-id="tab-logo-with-text"
                  src={logoWhite}
                  style={{ height: 40 }}
                />
              </Link>
            </div>
            <InstallButton
              onBeforeInstall={() => {
                localStorageMgr.setItem(STORAGE_NEW_USER_IS_TAB_V4_BETA, 'true')
                localStorageMgr.setItem(
                  STORAGE_NEW_USER_CAUSE_ID,
                  STORAGE_CATS_CAUSE_ID
                )
              }}
              classes={{ contained: classes.MuiButtonContained }}
              onUnsupportedBrowserInstallClick={() => {
                setShowUnsupportedBrowserMessage(true)
              }}
            />
          </div>

          <MoneyRaisedDisplay whiteClassName={classes.whiteFont} />
        </Toolbar>
      </AppBar>

      <div>
        <Helmet>
          <link rel="canonical" href={canonicalURL} />
          {pageContext && 'referrer' in pageContext ? (
            <meta name="robots" content="noindex" />
          ) : null}
        </Helmet>
        <div className={classes.SectionHeight}>
          {isMission ? (
            <Alert
              severity="info"
              classes={{ icon: classes.alertIcon, root: classes.alertRoot }}
              data-test-id="mission-text"
            >
              <AlertTitle>
                Your friend has invited you to help join their rescue mission
              </AlertTitle>
              By signing up with this link you’ll join a group of friends to
              help get a rescue cat house trained and adopted
            </Alert>
          ) : isReferral ? (
            <Alert
              severity="info"
              classes={{ icon: classes.alertIcon, root: classes.alertRoot }}
              data-test-id="referral-text"
            >
              <AlertTitle>Your friend sent you a gift</AlertTitle>By signing up
              with this link, you'll help shelter cats get adopted more quickly
              by giving them 5 treats for positive-reinforcement training
            </Alert>
          ) : undefined}
          <Section wrap="reverse" fullWidth>
            <AliceCarousel
              autoPlay
              animationType="fadeout"
              autoPlayStrategy="none"
              items={mockImagesArray}
              animationDuration={1000}
              autoPlayInterval={2500}
              disableButtonsControls
              disableDotsControls
              disableSlideInfo
              infinite
            />
            <div
              style={{
                flex: 1,
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'flex-start',
                minWidth: 220,
                marginBottom: 40,
                alignItems: 'center',
              }}
            >
              <h1 className={classes.title}>Tab For Cats</h1>
              <p
                style={{ width: '80%', textAlign: 'center', fontSize: '25px' }}
              >
                Open browser tabs, help shelter cats get adopted!
              </p>
              <div style={{ marginTop: 20, marginBottom: 20 }}>
                {installButton}
              </div>
              <div style={{ margin: 0 }}>
                <div>
                  <Star style={{ color: '#ffc533', width: 18, height: 18 }} />
                  <Star style={{ color: '#ffc533', width: 18, height: 18 }} />
                  <Star style={{ color: '#ffc533', width: 18, height: 18 }} />
                  <Star style={{ color: '#ffc533', width: 18, height: 18 }} />
                  <StarHalf
                    style={{ color: '#ffc533', width: 18, height: 18 }}
                  />
                </div>
                <p
                  style={{
                    fontSize: 12,
                    color: lightestTextColor,
                    marginBottom: 0,
                  }}
                >
                  215,000+ people are Tabbing on Chrome
                </p>
                <div
                  style={{
                    display: 'flex',
                    flexDirection: 'row',
                    alignItems: 'center',
                  }}
                />
              </div>
            </div>
          </Section>
        </div>
        <Section background="dark" fullWidth>
          <div className={classes.sectionSplit}>
            <div className={classes.halfPage}>
              <h1 className={classes.title}>How Does it Work?</h1>
              <p style={{ width: '80%', textAlign: 'justify' }}>
                We have partnered with The{' '}
                <Link to="https://greatergood.org/jackson-galaxy">
                  Greater Good Charities' The Jackson Galaxy Project
                </Link>{' '}
                to provide treats to shelter cats for FREE! How can we do this?
                Through ad revenue!
              </p>
              <p style={{ width: '80%', textAlign: 'justify' }}>
                Every time you open a new tab, there will be two small ads in
                the right corner of your home screen. Companies pay for this
                space to advertise on our platform, and from there we can put
                that money to good use by giving it back to an organization
                doing great work for our furry friends. Tab for Cats is
                absolutely <span style={{ fontWeight: 'bold' }}>free</span> for
                our users, and a great way to make an impact without breaking
                the bank.
              </p>
            </div>
            <div className={classes.halfPage}>
              <img
                src={cat1}
                style={{
                  width: '240px',
                  maxWidth: 740,
                }}
              />
            </div>
          </div>
        </Section>
        <Section style={{ justifyContent: 'center' }} fullWidth>
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              flexDirection: 'column',
              alignItems: 'center',
              minHeight: '540px',
            }}
          >
            <h1 className={classes.title}>We Show Our Work.</h1>
            <p
              style={{
                width: '80%',
                textAlign: 'center',
                marginBottom: '40px',
              }}
            >
              We know that trust must be earned. That's why the code for our{' '}
              <Link to="https://github.com/gladly-team/tab-web">
                new tab page
              </Link>
              ,{' '}
              <Link to="https://github.com/gladly-team/tab-extensions">
                browser extensions
              </Link>
              , and even{' '}
              <Link to="https://github.com/gladly-team/tab-homepage">
                this webpage
              </Link>{' '}
              are open source.
            </p>
            <p
              style={{
                width: '80%',
                textAlign: 'center',
                marginBottom: '40px',
              }}
            >
              Even better, we publish quarterly{' '}
              <Link to={financialsURL}>financials</Link> reports, so you can see
              exactly how much we give to each charity and what our other costs
              are.
            </p>
          </div>
        </Section>
        <Section
          background="dark"
          fullWidth
          style={{
            display: 'block',
            flexDirection: 'unset',
            justifyContent: 'unset',
            alignContent: 'unset',
            flexWrap: 'unset',
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
            <Review
              name="Shayne Walton"
              imgUrl={reviewImgShayneW}
              starCount={5}
            >
              FANTASTIC app that lets you do a lot of good things while doing
              your day to day work, studying for finals, or just surfing the
              web!
            </Review>
            <Review
              name="Cameron Brohier-Wood"
              imgUrl={reviewImgCameronB}
              starCount={5}
            >
              As a person who frequently enters wikipedia holes opening 20 tabs
              at a time.. its great to know that my procrastination can be of
              some use! Great app, brilliant idea
            </Review>
            <Review name="Chase Rosen" imgUrl={reviewImgChaseR} starCount={5}>
              It's wonderful. Unobtrusive, useful, well designed, easy to
              navigate, and actually pretty fun! There is no reason to not have
              this extension. It has not affected performance and is never an
              inconvenience.
            </Review>
            <Review
              name="Jonathon Buchanan"
              imgUrl={reviewImgJohnathanB}
              starCount={5}
            >
              Love that this gives me, a fool with no money, a way to donate to
              charity. :)
            </Review>
            <Review name="Ana Logstic" imgUrl={reviewImgAnaL} starCount={5}>
              It's a great way to raise money for charity when you don't have a
              lot of money and don't have the time to go out and try to raise
              money on your own. Plus I can decide what charity to donate to,
              and do it on my own time. I love it!
            </Review>
            <Review
              name="Benjamin King"
              imgUrl={reviewImgBenjaminK}
              starCount={5}
            >
              Raise money for charity by browsing the internet. Perfectly
              executed!
            </Review>
            <Review
              name="Alfonzo Ginibi"
              imgUrl={reviewImgAlfonzoG}
              starCount={5}
            >
              Wonderful service that does great things for people in need, and
              all you have to do is click a button. So really it's a no brainer,
              AND as a plus their new UI is really attractive and useful as
              well. Way better than the default chrome new tab page. So what do
              you have to lose?
            </Review>
            <Review name="Lucas Norr" imgUrl={reviewImgLucasN} starCount={5}>
              Awesome way to give back while browsing, with absolutely no effort
              on your end!
            </Review>
            <Review name="Abby Hill" imgUrl={reviewImgAbbyH} starCount={5}>
              Wonderful and thoughtful idea for an extension! Helping save the
              world one tab at a time.
            </Review>
            <Review name="Toby Strange" imgUrl={reviewImgTobyS} starCount={5}>
              Amazing extension. Such an awesome idea to use ad revenue from
              people's new tab to donate to charity. I'd rate 6 stars if I
              could.
            </Review>
          </ReviewCarousel>
        </Section>
        <Section background="dark" style={{ justifyContent: 'center' }}>
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              minHeight: '540px',
            }}
          >
            <h1 className={classes.title}>Contact Us</h1>
            <div
              style={{
                width: '80%',
              }}
            >
              <h2>Need help?</h2>
              <p>
                Hello! If you have questions or need help, check out our{' '}
                <Link to={externalHelpAllAppsURL}>help center</Link>, where we
                tackle common questions and troubleshooting.
              </p>
              <p>
                You might be curious about our charitable impact—you can find
                our <Link to={financialsURL}>financials here</Link>. Or, you
                might be curious how to unblock your adblocker on the new tab
                page—check out{' '}
                <Link to={adblockerWhitelistingURL}>how to do that here</Link>.
              </p>
              <h2>Let's Socialize</h2>
              <p>
                Want to say hi on social media or stay up to date on the latest
                announcements? We're on{' '}
                <Link to={instagramPageURL}>Instagram</Link>
                {', '}
                <Link to={tiktokPageURL}>Tik Tok</Link>,{' '}
                <Link to={facebookPageURL}>Facebook</Link>, and{' '}
                <Link to={twitterPageURL}>Twitter</Link>!
              </p>
              <p>
                If you have questions, feedback, or tasty cookie recipe
                suggestions, feel free to email us at contact@gladly.io.
              </p>
              <Divider
                style={{ marginBottom: 20 }}
              />
              <div>
                <div>
                  <p
                    style={{
                      marginBottom: 10,
                    }}
                    className={classes.address}
                  >
                    Tab for a Cause is built with love at:
                  </p>
                  <p className={classes.address}>Gladly, Inc.</p>
                  <p className={classes.address}>204 E 2nd Ave</p>
                  <p className={classes.address}>San Mateo, CA 94401</p>
                </div>
                <div>
                  <br />
                  <p className={classes.address}>
                    <Link to={externalHelpURL}>Help</Link>
                    {' / '}
                    <Link to={financialsURL}>Financials</Link>
                    {' / '}
                    <Link to={privacyPolicyURL}>Privacy</Link>
                    {' / '}
                    <Link to={termsURL}>Terms</Link>
                  </p>
                </div>
              </div>
              <p />
            </div>
          </div>
        </Section>
      </div>
      <UnsupportedBrowserDialog
        open={showUnsupportedBrowserMessage}
        onClose={() => {
          setShowUnsupportedBrowserMessage(false)
        }}
      />
    </Root>
  );
}

Cats.propTypes = {
  location: PropTypes.shape({
    pathname: PropTypes.string.isRequired,
  }),
  pageContext: PropTypes.shape({
    referrer: PropTypes.shape({
      id: PropTypes.number,
    }),
  }),
}

export default Cats
