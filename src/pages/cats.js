import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import { makeStyles } from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import defaultTheme from 'src/themes/theme'
import { ThemeProvider } from '@material-ui/core/styles'
import { responsiveFontSizes } from '@material-ui/core/styles'
import Section from 'src/components/Section'
import InstallButton from 'src/components/InstallButton'
import Link from 'src/components/Link'
import MoneyRaisedDisplay from 'src/components/MoneyRaisedDisplay'
import Helmet from 'react-helmet'
import ReviewCarousel from 'src/components/ReviewCarousel'
import Review from 'src/components/Review'
import FAQDropDown from 'src/components/FAQDropDown'
import InfoPopover from 'src/components/InfoPopover'
import AliceCarousel from 'react-alice-carousel'
import 'react-alice-carousel/lib/alice-carousel.css'
import 'src/pages/cats.css'
// Images
import landingImg from 'src/img/cats/mockPage1.png'
import landingImg2 from 'src/img/cats/mockPage2.png'
import landingImg3 from 'src/img/cats/mockPage3.png'
import landingImg4 from 'src/img/cats/mockPage4.png'
import landingImg5 from 'src/img/cats/mockPage5.png'
import landingImg6 from 'src/img/cats/mockPage6.png'
import { lightestTextColor } from 'src/themes/theme'
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
} from 'src/utils/navigation'
import logoWhite from 'src/img/logo-white.svg'
import cat1 from 'src/img/cats/1.png'
import cat2 from 'src/img/cats/2.png'

// Icons
import Star from '@material-ui/icons/Star'
import StarHalf from '@material-ui/icons/StarHalf'

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
} from 'src/utils/constants'
import { getUrlParameterValue } from 'src/utils/location'
import Divider from '@material-ui/core/Divider'
import redirect from 'src/utils/redirect'

const mockImagesArray = [
  <img
    key="6"
    style={{
      maxWidth: 600,
    }}
    src={landingImg6}
  />,
  <img
    key="4"
    style={{
      maxWidth: 600,
    }}
    src={landingImg4}
  />,
  <img
    key="2"
    style={{
      maxWidth: 600,
    }}
    src={landingImg2}
  />,
  <img
    key="3"
    style={{
      maxWidth: 600,
    }}
    src={landingImg3}
  />,
  <img
    key="5"
    style={{
      maxWidth: 600,
    }}
    src={landingImg5}
  />,
  <img
    key="1"
    style={{
      maxWidth: 600,
    }}
    src={landingImg}
  />,
]
const canonicalURL = getAbsoluteURL(homeURL)
const useStyles = makeStyles(() => ({
  whiteFont: {
    color: '#fff',
  },
  MuiButtonContained: {
    boxShadow: 'none',
  },
  mainInstallButton: {
    borderRadius: '20px',
  },
  backgroundImageEnter: {
    opacity: 0,
  },
  backgroundImageEnterActive: {
    opacity: 1,
    transition: 'opacity 2000ms',
  },
  backgroundImageAppear: {
    opacity: 0,
  },
  backgroundImageAppearActive: {
    opacity: 1,
    transition: 'opacity 2000ms',
  },
  backgroundImageExit: {
    opacity: 1,
  },
  backgroundImageExitActive: {
    opacity: 0,
    transition: 'opacity 2000ms',
  },
  SectionHeight: {
    height: 'calc(100vh - 64px)',
  },
  sectionSplit: {
    display: 'flex',
    minHeight: '540px',
    alignItems: 'center',
  },
  halfPage: {
    width: '50%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  logo: {
    width: 40,
    height: 40,
  },
  logoContainer: { flex: 1, display: 'flex', flexDirection: 'row' },
  title: {
    fontSize: '65px',
    color: 'black',
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: '30px',
  },
  address: {
    margin: 0,
    fontStyle: 'italic',
    fontSize: 12,
  },
}))
const Cats = ({ pageContext }) => {
  const cx = useStyles()
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
    }
  }, [])
  const installButton = (
    <InstallButton
      classes={{ contained: cx.mainInstallButton }}
      onBeforeInstall={() => {
        localStorageMgr.setItem(STORAGE_NEW_USER_IS_TAB_V4_BETA, 'true')
      }}
      onUnsupportedBrowserInstallClick={() => {
        redirect(homeURL)
      }}
    />
  )
  return (
    <div>
      <AppBar color="primary" position="sticky">
        <Toolbar>
          <div className={cx.logoContainer}>
            <div
              data-test-id={'logo-container'}
              style={{
                display: 'flex',
                justifyContent: 'flex-start',
                alignItems: 'center',
              }}
            >
              <Link to={homeURL}>
                <img
                  data-test-id={'tab-logo-with-text'}
                  src={logoWhite}
                  style={{ height: 40 }}
                />
              </Link>
            </div>
            <InstallButton
              onBeforeInstall={() => {
                localStorageMgr.setItem(STORAGE_NEW_USER_IS_TAB_V4_BETA, 'true')
              }}
              classes={{ contained: cx.MuiButtonContained }}
              onUnsupportedBrowserInstallClick={() => {
                redirect(homeURL)
              }}
            />
          </div>

          <MoneyRaisedDisplay whiteClassName={cx.whiteFont} />
        </Toolbar>
      </AppBar>

      <div>
        <Helmet>
          <link rel="canonical" href={canonicalURL} />
        </Helmet>
        <Section wrap={'reverse'} fullWidth className={cx.SectionHeight}>
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
              marginTop: 20,
              marginBottom: 40,
              marginLeft: 0,
              marginRight: 40,
              alignItems: 'center',
            }}
          >
            <h1 className={cx.title}>Tab For Cats</h1>
            <p style={{ width: '80%', textAlign: 'center', fontSize: '25px' }}>
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
                <StarHalf style={{ color: '#ffc533', width: 18, height: 18 }} />
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
              ></div>
            </div>
          </div>
        </Section>
        <Section background={'dark'} fullWidth>
          <div className={cx.sectionSplit}>
            <div className={cx.halfPage}>
              <h1 className={cx.title}>How Does it Work?</h1>
              <p style={{ width: '80%', textAlign: 'justify' }}>
                We have partnered with The{' '}
                <Link to="https://thejacksongalaxyproject.greatergood.org/about/cat-pawsitive/">
                  Jackson Galaxy Project
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
            <div className={cx.halfPage}>
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
            <h1 className={cx.title}>We Show Our Work.</h1>
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
            <p
              style={{
                width: '80%',
                textAlign: 'center',
                marginBottom: '40px',
              }}
            >
              As this is our first quarter since creating Tab for Cats, date
              before Q4 2020 will not show Tab for Cats' impact.
            </p>
          </div>
        </Section>
        <Section
          background={'dark'}
          fullWidth={true}
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
        <Section style={{ justifyContent: 'center', minHeight: '540px' }}>
          <h1 className={cx.title}>Frequently Asked Questions</h1>
          <div style={{ maxWidth: '986px', width: '100%', display: 'flex' }}>
            <div className={cx.halfPage}>
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'start',
                }}
              >
                <FAQDropDown
                  text={
                    <p
                      style={{
                        textAlign: 'justify',
                        hover: 'pointer',
                        textDecoration: 'underline',
                      }}
                    >
                      Do you endorse the companies in your ads?
                    </p>
                  }
                  dropdown={({ open, onClose, anchorElement }) => (
                    <InfoPopover
                      open={open}
                      anchorEl={anchorElement}
                      onClose={onClose}
                      style={{
                        marginTop: 6,
                      }}
                    >
                      <div>
                        <p variant={'body2'}>
                          No. Tab for a Cause does not endorse the companies
                          advertising on our page. We don't choose specific ads
                          ourselves (as awesome as that would be).
                        </p>
                        <p variant={'body2'} style={{ paddingTop: '10px' }}>
                          The funnel goes: Company --{'>'} Ad Network --{'>'}{' '}
                          Your Tabs. We work with the ad networks to put filters
                          in place to ensure ads are family-friendly, however,
                          ads sometimes get miscategorized and leak through our
                          filters. This may mean seeing an ad you disagree with,
                          but the money still goes to the charity of your
                          choice!
                        </p>{' '}
                        <p variant={'body2'} style={{ paddingTop: '10px' }}>
                          If you see anything that doesn’t feel family-friendly
                          please let us know by emailing
                          contact@tabforacause.org so we can fix this
                          immediately! If you are comfortable screenshotting the
                          ad you are concerned about, this will help us identify
                          where it came from a lot faster but you are never
                          required to do so.
                        </p>
                      </div>
                    </InfoPopover>
                  )}
                />
                <FAQDropDown
                  text={
                    <p
                      style={{
                        textAlign: 'justify',
                        hover: 'pointer',
                        textDecoration: 'underline',
                      }}
                    >
                      How did you pick The Jackson Galaxy Project to partner
                      with?
                    </p>
                  }
                  dropdown={({ open, onClose, anchorElement }) => (
                    <InfoPopover
                      open={open}
                      anchorEl={anchorElement}
                      onClose={onClose}
                      style={{
                        marginTop: 6,
                      }}
                    >
                      <div>
                        <p
                          variant={'body2'}
                          // className={classes.dropdownText}
                        >
                          Like with Tab for a Cause, our number one priority is
                          ensuring that organizations we are partnered with make
                          a positive impact! While researching, we came into
                          contact with the Jackson Galaxy Project and thought
                          they were the perfect fit! Every timeEverytime you
                          open a new tab you are one step closer to helping a
                          shelter cat get adopted! They do this by using treats
                          for positive reinforcement training to ensure these
                          cats are ready to be welcome into their fur-ever
                          homes!
                        </p>
                      </div>
                    </InfoPopover>
                  )}
                />
                <FAQDropDown
                  text={
                    <p
                      style={{
                        textAlign: 'justify',
                        hover: 'pointer',
                        textDecoration: 'underline',
                      }}
                    >
                      What is the impact of referring my friends to join?
                    </p>
                  }
                  dropdown={({ open, onClose, anchorElement }) => (
                    <InfoPopover
                      open={open}
                      anchorEl={anchorElement}
                      onClose={onClose}
                      style={{
                        marginTop: 6,
                      }}
                    >
                      <div>
                        <p>
                          Convincing your friends and family to join Tab for
                          Cats is the most impactful thing you can do! In
                          addition to each person raising more money for The
                          Jackson Galaxy Project, as we grow we can negotiate
                          better rates for our ads! This increases the value of
                          everyone's tabs meaning you can give a cat a treat
                          even faster.
                        </p>
                        <p style={{ paddingTop: '10px' }}>
                          We will also donate 10 extra treats on behalf of both
                          you and your friend when they sign up with your link!
                        </p>
                      </div>
                    </InfoPopover>
                  )}
                />
                <FAQDropDown
                  text={
                    <p
                      style={{
                        textAlign: 'justify',
                        hover: 'pointer',
                        textDecoration: 'underline',
                      }}
                    >
                      Are you going to add more charities?
                    </p>
                  }
                  dropdown={({ open, onClose, anchorElement }) => (
                    <InfoPopover
                      open={open}
                      anchorEl={anchorElement}
                      onClose={onClose}
                      style={{
                        marginTop: 6,
                      }}
                    >
                      <div>
                        <p>
                          It’s possible! Tab for Cats is the latest project
                          created by Tab for a Cause. Right now its main goal is
                          to help shelter cats in need by providing them with
                          treats for reinforcement training. There is a
                          possibility that we will be able to help cats in
                          different ways in the future but we don’t have a set
                          plan or timeline to do this yet. Additionally, Tab for
                          Cats is focused on cats only, but Tab for a Cause is
                          still available for those who want to raise money for
                          a variety of causes.
                        </p>
                        <p style={{ paddingTop: '10px' }}>
                          Have a cause close to your heart or an idea of how to
                          help shelter cats even more? Let us know by emailing
                          us at contact@tabforacause.org.
                        </p>
                      </div>
                    </InfoPopover>
                  )}
                />
                <FAQDropDown
                  text={
                    <p
                      style={{
                        textAlign: 'justify',
                        hover: 'pointer',
                        textDecoration: 'underline',
                      }}
                    >
                      Why cats?
                    </p>
                  }
                  dropdown={({ open, onClose, anchorElement }) => (
                    <InfoPopover
                      open={open}
                      anchorEl={anchorElement}
                      onClose={onClose}
                      style={{
                        marginTop: 6,
                      }}
                    >
                      <div>
                        <p>
                          Have you seen them?! How could we not create a way to
                          help these purr-fect furry friends? We are so happy to
                          be part of a community that loves them just as much as
                          we do!
                        </p>
                      </div>
                    </InfoPopover>
                  )}
                />
                <FAQDropDown
                  text={
                    <p
                      style={{
                        textAlign: 'justify',
                        hover: 'pointer',
                        textDecoration: 'underline',
                      }}
                    >
                      This sounds too good to be true, what is the catch?
                    </p>
                  }
                  dropdown={({ open, onClose, anchorElement }) => (
                    <InfoPopover
                      open={open}
                      anchorEl={anchorElement}
                      onClose={onClose}
                      style={{
                        marginTop: 6,
                      }}
                    >
                      <div>
                        <p>
                          Unless you count looking at ads as a catch, there are
                          none! Tab for a Cause was created by our founders,
                          Alex and Kevin, because at the time they were college
                          students that wanted to give back to charitable causes
                          but couldn’t afford it. Now, as a company, we want to
                          make sure everyone can do their part to give back
                          without breaking the bank.
                        </p>
                      </div>
                    </InfoPopover>
                  )}
                />
                <FAQDropDown
                  text={
                    <p
                      style={{
                        textAlign: 'justify',
                        hover: 'pointer',
                        textDecoration: 'underline',
                      }}
                    >
                      Can I see your financials?
                    </p>
                  }
                  dropdown={({ open, onClose, anchorElement }) => (
                    <InfoPopover
                      open={open}
                      anchorEl={anchorElement}
                      onClose={onClose}
                      style={{
                        marginTop: 6,
                      }}
                    >
                      <div>
                        <p>
                          Yes! Our financials are available{' '}
                          <Link to={financialsURL}>here</Link> and posted at the
                          end of every quarter.
                        </p>
                        <p style={{ paddingTop: '10px' }}>
                          No matter what our costs are, we give at least 30% of
                          our revenue to charity. At times, on Tab for a Cause,
                          we have given upwards of 90%. We use the rest of the
                          revenue for two purposes: (1) to cover costs, which
                          include hosting/server costs and internal company
                          expenses; and (2) to reinvest in getting more Tabbers
                          so that we can give more to charity in the long term.
                        </p>
                      </div>
                    </InfoPopover>
                  )}
                />
              </div>
            </div>
            <div className={cx.halfPage}>
              <img
                src={cat2}
                style={{
                  width: '240px',
                  maxWidth: 740,
                }}
              />
            </div>
          </div>
        </Section>
        <Section background={'dark'} style={{ justifyContent: 'center' }}>
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              minHeight: '540px',
            }}
          >
            <h1 className={cx.title}>Contact Us</h1>
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
                style={{ backgroundColor: lightestTextColor, marginBottom: 20 }}
              />
              <div>
                <div>
                  <p
                    style={{
                      marginBottom: 10,
                    }}
                    className={cx.address}
                  >
                    Tab for a Cause is built with love at:
                  </p>
                  <p className={cx.address}>Gladly, Inc.</p>
                  <p className={cx.address}>400 Concar Dr.</p>
                  <p className={cx.address}>San Mateo, CA 94402</p>
                </div>
              </div>
              <p />
            </div>
          </div>
        </Section>
      </div>
    </div>
  )
}
Cats.propTypes = {
  pageContext: PropTypes.shape({
    referrer: PropTypes.shape({
      id: PropTypes.number,
    }),
  }),
}
const CatsPageWithTheme = (props) => (
  <ThemeProvider theme={responsiveFontSizes(defaultTheme, { factor: 3.4 })}>
    <Cats {...props} />
  </ThemeProvider>
)
export default CatsPageWithTheme
