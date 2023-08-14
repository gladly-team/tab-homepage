import React from 'react'
import PropTypes from 'prop-types'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import image1 from 'src/img/promos/full-page-search/search-full-page-image02.png'

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
  <Box sx={{ width: 901, marginLeft: 'auto', marginRight: 'auto' }}>
    <Box sx={{ display: 'flex', justifyContent: 'center' }}>
      <a href="https://search.gladly.io" target="_blank" rel="noreferrer">
        <img src={image1} style={{ width: 400 }} alt="search for a cause" />
      </a>
    </Box>

    <Typography
      gutterBottom
      variant="h4"
      component="h4"
      align="center"
      sx={titleStyle}
    >
      Raise money for {cause} with every search
    </Typography>
    <Typography align="center" sx={bodyStyle}>
      Say goodbye to search engines that prioritize profit over purpose. Use{' '}
      <a href="https://search.gladly.io/" target="_blank" rel="noreferrer">
        Search for a Cause
      </a>
      , and your searches will fund charitable endeavors instead of further
      enriching Google. It is simple, free, and impactful ♥.
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
  <Box sx={{ width: 902, marginLeft: 'auto', marginRight: 'auto' }}>
    <Box sx={{ display: 'flex', justifyContent: 'center' }}>
      <a href="https://search.gladly.io/" target="_blank" rel="noreferrer">
        <img src={image1} style={{ width: 400 }} alt="search for a cause" />
      </a>
    </Box>

    <Typography
      gutterBottom
      variant="h4"
      component="h4"
      align="center"
      sx={titleStyle}
    >
      Raise money for {cause} with every search
    </Typography>
    <Typography align="center" sx={bodyStyle}>
      While we may not have all the bells and whistles of Google,{' '}
      <a href="https://search.gladly.io/" target="_blank" rel="noreferrer">
        Search for a Cause
      </a>{' '}
      offers something more valuable: a chance to give back. Your searches will
      support important causes, making a small difference with every click. Join
      us in our mission to make the world a better place, one search at a time
      ♥.
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

const FullPageSearch2023 = () => {
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
    const url = `https://search.gladly.io`

    window.open(url, '_blank')

    // eslint-disable-next-line no-undef
    gtag('event', 'search_full_page_2023_aug_get_started_click', {
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
    </Box>
  )
}

FullPageSearch2023.propTypes = {}
FullPageSearch2023.displayName = 'Search for a Cause Full Page Promo 2023'

export default FullPageSearch2023
