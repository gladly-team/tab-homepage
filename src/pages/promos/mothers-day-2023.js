import React from 'react'
import PropTypes from 'prop-types'
import Layout from 'src/components/Layout'
import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'

const openGraphTitle = "Mother's Day 2023 | Tab for a Cause"
const openGraphDescription = ''

const offers = [
  {
    title: 'Smiles and Sunshine Bouquet from FTD',
    tag: 'Flowers',
    image:
      'https://cdn.shopify.com/s/files/1/0507/3754/5401/t/1/assets/FB337_LOL_preset_ftd-mx-hero-lv-new.jpeg',
    link: 'https://www.ftd.com/product/smiles-sunshine-prd-smsn?cid=ftdseo&prid=ftdseo&variation=FB337',
    description:
      'Bring a rainbow of color to any home with this bouquet. Blooming with an assortment of alstroemeria and roses, this vibrant beauty makes the perfect expression for all your special occasions this season.',
  },
  {
    title: '12 Chocolate Covered Strawberries from ProFlowers',
    tag: 'Strawberries',
    image:
      'https://cdn.shopify.com/s/files/1/0507/3754/5401/t/1/assets/GE032_LOL_preset_proflowers-mx-hero-lv-new.jpeg',
    link: 'https://www.proflowers.com/product/mom-mother-day-berry-gram-belgian-chocolate-covered-strawberries-12pc-prd-ge032?cid=pfdts&prid=pfdtsssv&ref=SRCHsmftbrand_361521917&utm_campaign=CP%20%7C%20LF%20%7C%20BNG%20%7C%20TXT%20%7C%20_Brand_%20Core&utm_content=Proflowers%20-%20Exact&utm_medium=cpc&utm_source=bing&utm_term=proflowers&variation=GE032',
    description:
      'A delightful treat that is sure to impress, our twelve-piece chocolate covered strawberries are hand dipped (and drizzled!) in the finest Belgian chocolate and delivered straight to whomever you want to celebrate this Mother’s Day.',
  },
  {
    title: 'Custom Photobook from Shutterfly',
    tag: 'Photobooks',
    image:
      'https://c4.staticsfly.com/asset/fetch/rec_sfly_simply-gallery_store-cover-preview_hard-01/store.sample.preview/v1',
    link: 'https://www.shutterfly.com/photo-books/styles/simply-gallery-photo-book/?categoryCode=1503351&productCode=1632912&skuCode=1641906',
    description:
      "You can't freeze time, but you can make the best photo books with Shutterfly. You can start from scratch or grab a professionally designed template that inspires you, then customize every last detail to tell your story, your way.",
  },
  {
    title: 'Chocolate gift basket from Ghirardelli',
    tag: 'Chocolate',
    image:
      'https://www.ghirardelli.com/media/catalog/product/1/0/10747599853590_pi_ecom1.jpg',
    link: 'https://www.ghirardelli.com/chocolate-caramel-trio-squares-gift-bag-85359',
    description:
      "Girardelli's signature chocolate SQUARES deliver the perfect balance of intense, slow-melting chocolate and rich ingredients in a variety of flavors. Take time to slow down and feel yourself melt with each bite.",
  },
  {
    title: 'Petit Meyer Lemon tree from FTD',
    tag: 'Lemon Trees',
    image:
      'https://cdn.shopify.com/s/files/1/0507/3754/5401/t/1/assets/P4083_LOL_preset_ftd-mx-hero-lv-new.jpeg',
    link: 'https://www.ftd.com/product/petite-meyer-lemon-tree-prd-p4083?utm_source=Skimlinks.com&utm_medium=affiliate&utm_content=1&utm_campaign=1323503&ranMID=49253&ranEAID=TnL5HPStwNw&ranSiteID=TnL5HPStwNw-HGx1eiRHADuwpYQVIH3lWw',
    description:
      'Grow citrus fruits right at home with our Petite Meyer Lemon Tree. Whether planted in the ground or left potted on the patio or in a sunny kitchen, our versatile and adaptable tree is one everyone will enjoy all year long. Arriving as a 1 year old, this tree will not yet have fruit, but will begin to produce within 1–2 seasons.',
  },
  {
    title: '“World’s Cheesiest Mom” cheese gift box',
    tag: 'Cheeses',
    image:
      'https://cdn.shopify.com/s/files/1/1312/3351/products/mothers-day-1_2000x.jpg',
    link: 'https://www.cheesebros.com/products/mothers-day-cheese',
    description:
      "The world's best mom deserves the world's best cheese! This lovingly curated gift collection combines our finest Wisconsin cheeses with award winning jam and artisan honey made by small local producers.",
  },
  {
    title: 'Meditation Candle Gift Set from Brooklyn Candles',
    tag: 'Candles',
    image:
      'https://cdn.shopify.com/s/files/1/0315/2749/products/meditation-candle-gift-set-84-value-brooklyn-candle-studio-932017_900x.jpg',
    link: 'https://brooklyncandlestudio.com/products/meditation-minimalist-candle-gift-set-84-value',
    description:
      'Find your inner peace with this set of calming candles. Light up Japanese Citrus to boost your mood and help you focus with energizing notes of yuzu.',
  },
  {
    title: 'Mother’s Day Cookie Tin from Mrs. Fields',
    tag: 'Cookies',
    image:
      'https://cdn.shopify.com/s/files/1/0507/3754/5401/t/1/assets/X1140_LOL_preset_ftd-mx-hero-lv-new.jpeg',
    link: 'https://www.ftd.com/product/mrs-fields-mother-day-floral-cookie-tin-prd-x1140?cid=ftdseo&prid=ftdseo&variation=X1140',
    description:
      "Mrs. Fields' beautifully designed tin makes it easy to eat now, later or on-the-go. This little box of love comes with an assortment of cookies inside, making it exciting to discover and enjoy each unique flavor.",
  },
]

const Header = ({ cause }) => (
  <>
    <Typography
      gutterBottom
      variant="h4"
      component="h4"
      align="center"
      sx={{ paddingTop: 5 }}
    >
      Mother's Day Gift Ideas
    </Typography>
    <Typography align="center">
      Buy an amazing mother a special gift and proceeds of the purchased will
      raise money for {cause}.
    </Typography>
  </>
)

Header.propTypes = {
  cause: PropTypes.string,
}

const listItems = offers.map((offer) => (
  <Card
    key={offer.title}
    sx={{
      position: 'relative',
      width: '28%',
      height: '645px',
      padding: '2px',
      marginLeft: '25px',
      marginRight: '25px',
      marginBottom: '25px',
    }}
  >
    <CardMedia
      component="img"
      alt={offer.title}
      image={offer.image}
      sx={{ height: '300px' }}
    />

    <CardContent>
      <Typography gutterBottom variant="h5" component="div">
        {offer.title}
      </Typography>
      <Typography variant="body2">{offer.description}</Typography>
    </CardContent>

    <Box
      sx={{
        position: 'absolute',
        bottom: '15px',
        left: '0',
        right: '0',
      }}
    >
      <CardActions
        sx={{
          display: 'flex',
          justifyContent: 'center',
        }}
      >
        <Button variant="contained" href={offer.link} target="_blank">
          Shop {offer.tag} for Mom
        </Button>
      </CardActions>
    </Box>
  </Card>
))

const MothersDay2023 = ({ location }) => {
  const isBrowser = typeof window !== 'undefined'

  let params = {
    nolayout: 'false',
    cause_name: 'Charity',
    user_id: '0',
  }

  if (isBrowser) {
    params = new Proxy(new URLSearchParams(window.location.search), {
      get: (searchParams, prop) => searchParams.get(prop),
    })
  }

  const boxStyle = {
    marginLeft: 'auto',
    marginRight: 'auto',
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    padding: '20px 20px',
  }

  return (
    <>
      {params.nolayout === 'true' ? (
        <>
          <Header cause={params.cause_name} />
          <Box sx={boxStyle}>{listItems}</Box>
        </>
      ) : (
        <Layout brand="all" location={location}>
          <Header cause={params.cause_name} />
          <Box sx={boxStyle}>{listItems}</Box>
        </Layout>
      )}
    </>
  )
}

MothersDay2023.propTypes = {
  location: PropTypes.shape({
    pathname: PropTypes.string.isRequired,
  }).isRequired,
}

MothersDay2023.displayName = "Mother's Day 2023 Page"

export default MothersDay2023
