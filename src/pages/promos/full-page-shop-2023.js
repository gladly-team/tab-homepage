import React from 'react'
import PropTypes from 'prop-types'
import Box from '@mui/material/Box'
import Link from '@mui/material/Link'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import shopDemo from 'src/img/shop-demo.png'

const isBrowser = typeof window !== 'undefined'

const params = {
  user_id: '0',
  version: 'Version2',
  cause_name: 'Charity',
}

if (isBrowser) {
  const p = new Proxy(new URLSearchParams(window.location.search), {
    get: (searchParams, prop) => searchParams.get(prop),
  })

  params.user_id = p.user_id || '0'
  params.version = p.version || 'Version1'
  params.cause_name = p.cause_name || 'Charity'
}

// Version 1
const Version1 = ({ cause, onClick, onClose }) => (
  <Box sx={{ width: 900, marginLeft: 'auto', marginRight: 'auto' }}>
    <Box sx={{ display: 'flex', justifyContent: 'center' }}>
      <Link href="https://shop.gladly.io" target="_blank" rel="noreferrer">
        <img src={shopDemo} style={{ width: 400 }} />
      </Link>
    </Box>

    <Typography
      gutterBottom
      variant="h4"
      component="h4"
      align="center"
      sx={{ paddingTop: 5 }}
    >
      Raise money for {cause} as you shop online (v1a)
    </Typography>
    <Typography
      align="center"
      sx={{ width: 900, marginLeft: 'auto', marginRight: 'auto' }}
    >
      We think you’ll love{' '}
      <Link href="https://shop.gladly.io" target="_blank" rel="noreferrer">
        Shop for a Cause
      </Link>
      , our newest app that automatically raises money for charity when you shop
      at one of our over 10,000 partner stores. Just like Tabbing, it’s free,
      easy, impactful ❤️
    </Typography>
    <Box
      sx={{ display: 'flex', justifyContent: 'space-between', marginTop: 5 }}
    >
      <Button sx={{ fontSize: 16, marginTop: 3 }} onClick={onClose}>
        Not Right Now
      </Button>
      <Button variant="contained" onClick={onClick} target="_blank">
        Get Started
      </Button>
    </Box>
  </Box>
)

Version1.propTypes = {
  cause: PropTypes.string,
  onClick: PropTypes.func,
  onClose: PropTypes.func,
}

// Version 2
const Version2 = ({ cause, onClick, onClose }) => (
  <Link
    href="https://www.npr.org/2023/01/19/1149993013/amazon-amazonsmile-charity-donation-program"
    target="_blank"
    rel="noreferrer"
  >
    shutdown their Smile program
  </Link>
)

Version2.propTypes = {
  cause: PropTypes.string,
  onClick: PropTypes.func,
  onClose: PropTypes.func,
}

const FullPageShop2023 = () => {
  const boxStyle = {
    marginLeft: 'auto',
    marginRight: 'auto',
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    padding: '20px 20px',
  }

  const onClose = () => {
    if (isBrowser) {
      window.parent.postMessage('close', '*')
    }
  }

  const onClick = () => {
    const url = `https://shop.gladly.io`

    window.open(url, '_blank')

    // eslint-disable-next-line no-undef
    gtag('event', 'full_page_shop_promo_2023_get_started_click', {
      variation: params.version,
    })
  }

  return (
    <Box
      sx={{
        position: 'absolute',
        top: 0,
        bottom: 0,
        right: 0,
        left: 0,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
      }}
    >
      {params.version === 'Version2' && (
        <Version1
          cause={params.cause_name}
          onClick={onClick}
          onClose={onClose}
        />
      )}

      {params.version === 'Version3' && (
        <Version2
          cause={params.cause_name}
          onClick={onClick}
          onClose={onClose}
        />
      )}
    </Box>
  )
}

FullPageShop2023.propTypes = {}
FullPageShop2023.displayName = 'Shop for a Cause Full Page Promo 2023'

export default FullPageShop2023
