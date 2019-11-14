import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import TextPageContent from 'src/components/TextPageContent'
import TextPageHeader from 'src/components/TextPageHeader'
import Layout from 'src/components/Layout'
import InstallButton from 'src/components/InstallButton'
import redirect from 'src/utils/redirect'
import { homeURL } from 'src/utils/navigation'
import edenPhotoBeforeAfter from 'src/img/eden-project/before-after.jpg'
import edenPhotoTwoPeoplePlanting from 'src/img/eden-project/two-people-planting.jpg'
import edenPhotoPersonHoldingSeedlings from 'src/img/eden-project/person-holding-seedlings.jpg'
import edenPhotoEmployees from 'src/img/eden-project/eden-employees.jpg'
import edenPhotoCritter from 'src/img/eden-project/critter.jpg'
import edenPhotoIndonesiaGiantMangrove from 'src/img/eden-project/indonesia-giant-mangrove.jpg'
import edenPhotoPersonPlanting from 'src/img/eden-project/person-planting.jpg'
import edenPhotoNepalNurseryDirector from 'src/img/eden-project/nepal-nursery-director.jpg'

import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

const installButtonBlock = (
  <div
    style={{
      display: 'flex',
      padding: '30px 0px',
      justifyContent: 'center',
    }}
  >
    <InstallButton
      size={'medium'}
      onUnsupportedBrowserInstallClick={() => {
        redirect(homeURL)
      }}
    />
  </div>
)

const faqs = [
  {
    question: 'How do I plant a tree?',
    answerElem: (
      <div>
        <p style={{ marginBottom: 0 }}>
          We'll plant a tree for every person who joins Tab for a Cause—so join
          on in!
        </p>
        {installButtonBlock}
        <p>
          If you're already using Tab for a Cause, refer a friend using your
          referral URL, and we'll plant another tree.
        </p>
      </div>
    ),
  },
  {
    question: "Wait, it's free?",
    answerElem: (
      <p>
        Yes! Tab for a Cause is a free way for you to do good every single day.
        You just have to open tabs in your browser—and, let's face it, we all
        have a few too many tabs open.
      </p>
    ),
  },
  {
    question: 'How are the trees actually planted?',
    answerElem: (
      <p>
        We are working with the{' '}
        <a href={'https://edenprojects.org/'}>Eden Reforestation Project</a> to
        plant trees around the world. They work with local communities in
        Madagascar, Haiti, Nepal, Mozambique, and Indonesia to plant, protect,
        and care for native tree species.
      </p>
    ),
  },
  {
    question: 'Why trees?',
    answerElem: (
      <p>
        Trees are an incredibly effective way to address habit loss, erosion,
        and CO2.{' '}
        <a href={'https://edenprojects.org/the-problem-and-the-solution/'}>
          Read what Eden Reforestation Project says about their work.
        </a>
      </p>
    ),
  },
  {
    question: 'Why now?',
    answerElem: (
      <p>
        Historically, Tab for a Cause has grown through a combination of
        word-of-mouth and paid marketing. However, during November and December
        each year, the cost of paid marketing increases significantly. Instead
        of paying for expensive ads, with your help we can turn our marketing
        budget into thousands of trees. Thanks for spreading the word!
      </p>
    ),
  },
  {
    question: 'Why should I spread the word about Tab for a Cause?',
    answerElem: (
      <div>
        <p>
          Of course, there are lots of reasons to tell your friends about Tab
          for a Cause, but here are some you might not know:
        </p>
        <ol>
          <li>
            As we increase the amount of money we are donating to charities, we
            are able to support more unique projects like launching this
            partnership with Eden Project or{' '}
            <a
              href={
                'https://www.roomtoread.org/the-latest/guest-blogger-how-opening-tabs-for-a-cause-launched-a-library-in-vietnam/'
              }
            >
              building a school library through Room to Read
            </a>
            .
          </li>
          <li>
            Advertisers care about the size of the audience they can reach. With
            more Tabbers, we earn more money on each individual ad, meaning the
            value of each individual tab grows as we grow!
          </li>
          <li>Why not? :)</li>
          <li>
            People are much more likely to use something that they heard about
            from someone they know.
          </li>
        </ol>
      </div>
    ),
  },
  {
    question: 'Can I just create a bunch of new accounts to plant trees?',
    answerElem: (
      <p>
        No, we will only be planting trees for legitimate accounts that are
        being actively used. The spirit of this project is to help spread the
        word so we can raise more money for nonprofits, and having multiple
        accounts doesn't help with that goal.
      </p>
    ),
  },
  {
    question: 'Do bananas grow on trees?',
    answerElem: (
      <p>
        Great question! In fact,{' '}
        <a href={'https://en.wikipedia.org/wiki/Banana#Description'}>
          banana plants are <span style={{ fontWeight: 'bold' }}>not</span>{' '}
          trees.
        </a>{' '}
        And—wait for it—bananas are botanically considered a berry :o
      </p>
    ),
  },
]

const photos = [
  {
    src: edenPhotoTwoPeoplePlanting,
  },
  {
    src: edenPhotoPersonHoldingSeedlings,
  },
  { src: edenPhotoEmployees },
  { src: edenPhotoCritter },
  {
    src: edenPhotoIndonesiaGiantMangrove,
  },
  { src: edenPhotoPersonPlanting },
  { src: edenPhotoNepalNurseryDirector },
]

const PlantTreesPage = props => {
  const { location } = props
  const openGraphTitle = 'Plant Trees for Free'
  const openGraphDescription =
    'We are planting a tree for every person who joins Tab for a Cause from now until January 10, 2020.'
  return (
    <Layout brand={'tab'} location={location}>
      <TextPageContent>
        <Helmet title={openGraphTitle}>
          <meta property="og:title" content={openGraphTitle} />
          <meta property="og:description" content={openGraphDescription} />
          <meta name="twitter:title" content={openGraphTitle} />
          <meta name="twitter:description" content={openGraphDescription} />
        </Helmet>
        <TextPageHeader>Plant Trees for Free!</TextPageHeader>
        <div style={{ padding: '12px 0px' }}>
          <p>
            Tab for a Cause is already one of the easiest ways to do good every
            day, for free. Now, your new tab page is getting a little greener!
          </p>
          <p style={{ fontWeight: 'bold', marginBottom: 0 }}>
            Tab for a Cause has partnered with Eden Reforestation Projects to
            plant a tree for every person that signs up for Tab for a Cause this
            holiday season!
          </p>
          {installButtonBlock}
          <img
            alt={'An area before and after planting trees.'}
            src={edenPhotoBeforeAfter}
            style={{
              marginBottom: 20,
            }}
          />
          <p>
            Trees are amazing plants that fight climate change through carbon
            sequestration, guard land against erosion, provide habitat for
            countless organisms, and provide economic resources for surrounding
            communities. Unfortunately, deforestation has wiped out tree
            populations across the globe, so we need to reinvest in one of
            nature's amazing organisms and replant our forests.
          </p>
          <p>
            To do our part,{' '}
            <span style={{ fontWeight: 'bold' }}>
              Tab for a Cause will plant a tree for each new Tabber from
              November 14, 2019 to January 10, 2020
            </span>
            . If you are a current Tabber, you can plant a tree right now by
            getting one friend or family member to start Tabbing.
          </p>
          <p>
            It's incredibly simple to turn your tabs into support for some
            amazing nonprofits. Now is the perfect time to get your friends to
            join you in turning internet browsing into a charitable act.
          </p>
        </div>
        <div
          style={{
            marginTop: 30,
            marginBottom: 40,
            // Full page width CSS
            display: 'block',
            width: '100vw',
            position: 'relative',
            left: '50%',
            right: '50%',
            marginLeft: '-50vw',
            marginRight: '-50vw',
            // End full page width CSS
          }}
        >
          <div style={{ display: 'block' }}>
            <Slider
              dots
              focusOnSelect
              slidesToShow={3}
              responsive={[
                {
                  breakpoint: 1040,
                  settings: {
                    slidesToShow: 1,
                  },
                },
              ]}
            >
              {photos.map(photo => (
                <div
                  key={photo.src}
                  // TODO
                  // style={{ background: 'black', height: '100%' }}
                >
                  <img
                    // TODO
                    // alt={'An area before and after planting trees.'}
                    src={photo.src}
                  />
                </div>
              ))}
            </Slider>
          </div>
        </div>
        <div style={{ padding: '12px 0px' }}>
          <h2>FAQ</h2>
          {faqs.map(faq => {
            return (
              <div key={faq.question} style={{ padding: '10px 0px' }}>
                <p style={{ fontWeight: 'bold' }}>{faq.question}</p>
                {faq.answerElem}
              </div>
            )
          })}
        </div>
      </TextPageContent>
    </Layout>
  )
}

PlantTreesPage.propTypes = {
  location: PropTypes.shape({
    pathname: PropTypes.string.isRequired,
  }).isRequired,
}

PlantTreesPage.displayName = 'PlantTreesPage'

export default PlantTreesPage
