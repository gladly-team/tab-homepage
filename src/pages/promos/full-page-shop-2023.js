import React from 'react'
import PropTypes from 'prop-types'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import balloonHands from 'src/img/promos/prime-day-day-2023/full-page-shop/balloon-hands.png'
import piggyBankWithBackgroundBlob from 'src/img/promos/prime-day-day-2023/full-page-shop/piggy-bank-with-background-blob.png'

const isBrowser = typeof window !== 'undefined'

const getStartedBtn = { width: 150, height: 40 }

const bodyStyle = {
  width: 900,
  fontSize: '16px !important',
  marginLeft: 'auto',
  marginRight: 'auto',
}

const titleStyle = {
  paddingTop: 5,
  fontSize: '28px !important',
}

const params = {
  user_id: '0',
  version: 'Version1',
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
      <a
        href="https://shop.gladly.io?version=1"
        target="_blank"
        rel="noreferrer"
      >
        <img src={balloonHands} style={{ width: 400 }} alt="balloon hands" />
      </a>
    </Box>

    <Typography
      gutterBottom
      variant="h4"
      component="h4"
      align="center"
      sx={titleStyle}
    >
      Raise money for {cause} as you shop online
    </Typography>
    <Typography align="center" sx={bodyStyle}>
      When Amazon{' '}
      <a
        href="https://www.npr.org/2023/01/19/1149993013/amazon-amazonsmile-charity-donation-program"
        target="_blank"
        rel="noreferrer"
      >
        shut down their Smile program
      </a>{' '}
      to focus on more profit, it was a huge loss to charities. In response, we
      are proud to present{' '}
      <a
        href="https://shop.gladly.io?version=1"
        target="_blank"
        rel="noreferrer"
      >
        Shop for a Cause
      </a>
      , our newest extension that raises money for charity as you shop online at
      over 10,000 partner stores. It is simple, free, and impactful ♥.
    </Typography>
    <Box
      sx={{ display: 'flex', justifyContent: 'space-between', marginTop: 5 }}
    >
      <Button sx={{ fontSize: 16, marginTop: 3 }} onClick={onClose}>
        Not Right Now
      </Button>
      <Button
        variant="contained"
        onClick={onClick}
        target="_blank"
        sx={getStartedBtn}
      >
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
  <Box sx={{ width: 900, marginLeft: 'auto', marginRight: 'auto' }}>
    <Box sx={{ display: 'flex', justifyContent: 'center' }}>
      <a
        href="https://shop.gladly.io?version=2"
        target="_blank"
        rel="noreferrer"
      >
        <img
          src={piggyBankWithBackgroundBlob}
          style={{ width: 400 }}
          alt="piggy bank with background blob"
        />
      </a>
    </Box>

    <Typography
      gutterBottom
      variant="h4"
      component="h4"
      align="center"
      sx={titleStyle}
    >
      Raise money for {cause} as you shop online
    </Typography>
    <Typography align="center" sx={bodyStyle}>
      When Amazon{' '}
      <a
        href="https://www.npr.org/2023/01/19/1149993013/amazon-amazonsmile-charity-donation-program"
        target="_blank"
        rel="noreferrer"
      >
        shut down their Smile program
      </a>{' '}
      to focus on more profit, it was a huge loss to charities. In response, we
      are proud to present{' '}
      <a
        href="https://shop.gladly.io?version=2"
        target="_blank"
        rel="noreferrer"
      >
        Shop for a Cause
      </a>
      , our newest extension that raises money for charity as you shop online at
      over 10,000 partner stores. It is simple, free, and impactful ♥.
    </Typography>
    <Box
      sx={{ display: 'flex', justifyContent: 'space-between', marginTop: 5 }}
    >
      <Button sx={{ fontSize: 16, marginTop: 3 }} onClick={onClose}>
        Not Right Now
      </Button>
      <Button
        variant="contained"
        onClick={onClick}
        target="_blank"
        sx={getStartedBtn}
      >
        Get Started
      </Button>
    </Box>
  </Box>
)

Version2.propTypes = {
  cause: PropTypes.string,
  onClick: PropTypes.func,
  onClose: PropTypes.func,
}

// Version 3
const Version3 = ({ cause, onClick, onClose }) => (
  <Box sx={{ width: 900, marginLeft: 'auto', marginRight: 'auto' }}>
    <Box sx={{ display: 'flex', justifyContent: 'center' }}>
      <iframe
        width="784"
        height="441"
        src="https://www.youtube.com/embed/gYIfhCJus5A"
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      />
    </Box>

    <Typography
      gutterBottom
      variant="h4"
      component="h4"
      align="center"
      sx={titleStyle}
    >
      Raise money for {cause} as you shop online
    </Typography>
    <Typography align="center" sx={bodyStyle}>
      When Amazon{' '}
      <a
        href="https://www.npr.org/2023/01/19/1149993013/amazon-amazonsmile-charity-donation-program"
        target="_blank"
        rel="noreferrer"
      >
        shut down their Smile program
      </a>{' '}
      to focus on more profit, it was a huge loss to charities. In response, we
      are proud to present{' '}
      <a
        href="https://shop.gladly.io?version=3"
        target="_blank"
        rel="noreferrer"
      >
        Shop for a Cause
      </a>
      , our newest extension that raises money for charity as you shop online at
      over 10,000 partner stores. It is simple, free, and impactful ♥.
    </Typography>
    <Box
      sx={{ display: 'flex', justifyContent: 'space-between', marginTop: 5 }}
    >
      <Button sx={{ fontSize: 16, marginTop: 3 }} onClick={onClose}>
        Not Right Now
      </Button>
      <Button
        variant="contained"
        onClick={onClick}
        target="_blank"
        sx={getStartedBtn}
      >
        Get Started
      </Button>
    </Box>
  </Box>
)

Version3.propTypes = {
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
    gtag('event', 'shop_full_page_2023_aug_get_started_click', {
      version: params.version,
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
      {params.version === 'Version1' && (
        <Version1
          cause={params.cause_name}
          onClick={onClick}
          onClose={onClose}
        />
      )}

      {params.version === 'Version2' && (
        <Version2
          cause={params.cause_name}
          onClick={onClick}
          onClose={onClose}
        />
      )}

      {params.version === 'Version3' && (
        <Version3
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
