import React from 'react'
import PropTypes from 'prop-types'
import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import CardActions from '@mui/material/CardActions'
import CardMedia from '@mui/material/CardMedia'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'

import forever21Logo from 'src/img/promos/prime-day-day-2023/forever-21-logo.jpg'
import gamestopLogo from 'src/img/promos/prime-day-day-2023/gamestop-logo.jpg'
import overstockLogo from 'src/img/promos/prime-day-day-2023/overstock-logo.jpg'
import samsungLogo from 'src/img/promos/prime-day-day-2023/samsung-logo.jpg'
import ultaLogo from 'src/img/promos/prime-day-day-2023/ulta-logo.jpg'
import walmartLogo from 'src/img/promos/prime-day-day-2023/walmart-logo.jpg'

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

const baseUrl = 'https://wild.link/e?d=19676921'

const offers = [
  {
    title: 'Ulta',
    image: ultaLogo,
    merchantId: '5483579',
    link: 'https://www.ulta.com',
  },
  {
    title: 'Samsung',
    image: samsungLogo,
    merchantId: '5481855',
    link: 'https://www.samsung.com',
  },
  {
    title: 'Walmart',
    image: walmartLogo,
    merchantId: '5483936',
    link: 'https://www.walmart.com',
  },
  {
    title: 'GameStop',
    image: gamestopLogo,
    merchantId: '5478087',
    link: 'https://www.gamestop.com',
  },
  {
    title: 'Forever 21',
    image: forever21Logo,
    merchantId: '5477896',
    link: 'https://www.forever21.com',
  },
  {
    title: 'Overstock',
    image: overstockLogo,
    merchantId: '5517486',
    link: 'https://www.overstock.com',
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
      This is the first Prime Day without Amazon Smile
    </Typography>
    <Typography
      align="center"
      sx={{ width: 1100, marginLeft: 'auto', marginRight: 'auto' }}
    >
      Amazon chose to stop raising money for charity so they can boost their
      profit margins but you can still get great products while supporting your
      favorite organizations on{' '}
      <a href="https://shop.gladly.io" target="_blank" rel="noreferrer">
        Shop for a Cause
      </a>{' '}
      💜
    </Typography>
  </>
)

Header.propTypes = {
  cause: PropTypes.string,
}

const listItems = offers.map((offer) => {
  const onClick = () => {
    let p = {
      nolayout: 'false',
      cause_name: 'Charity',
      user_id: '0',
    }

    if (isBrowser) {
      p = new Proxy(new URLSearchParams(window.location.search), {
        get: (searchParams, prop) => searchParams.get(prop),
      })
    }

    const url = `${baseUrl}&c=${offer.merchantId}&UUID=${p.user_id}&url=${offer.link}`
    window.open(url, '_blank')
    // eslint-disable-next-line no-undef
    gtag('event', 'prime_day_2023_product_click', { offer: offer.title })
  }

  const getCauseName = () => {
    let p = {
      cause_name: 'Charity',
      user_id: '0',
    }

    if (isBrowser) {
      p = new Proxy(new URLSearchParams(window.location.search), {
        get: (searchParams, prop) => searchParams.get(prop),
      })
    }

    return p.cause_name
  }

  return (
    <Card
      key={offer.title}
      sx={{
        position: 'relative',
        width: '28%',
        height: '400px',
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
          <Button variant="contained" onClick={onClick} target="_blank">
            Shop and Raise Money for {getCauseName()}
          </Button>
        </CardActions>
      </Box>
    </Card>
  )
})

const PrimeDay2023 = ({ location }) => {
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
      <Header cause={params.cause_name} />
      <Box sx={boxStyle}>{listItems}</Box>
    </>
  )
}

PrimeDay2023.propTypes = {
  location: PropTypes.shape({
    pathname: PropTypes.string.isRequired,
  }).isRequired,
}

PrimeDay2023.displayName = 'Prime Day 2023 Page'

export default PrimeDay2023
