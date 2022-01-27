import React from 'react'
import { styled } from '@mui/material/styles'
import PropTypes from 'prop-types'
import Typography from '@mui/material/Typography'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import { formatImg } from 'src/utils/formatting'
import { githubOrganizationURL } from 'src/utils/navigation.js'

const PREFIX = 'SecuritySection'

const classes = {
  parent: `${PREFIX}-parent`,
  link: `${PREFIX}-link`,
  column: `${PREFIX}-column`,
  linkText: `${PREFIX}-linkText`,
  title: `${PREFIX}-title`,
  subtitle: `${PREFIX}-subtitle`,
  subtitleTwo: `${PREFIX}-subtitleTwo`,
  titleImg: `${PREFIX}-titleImg`,
}

const Root = styled('div')(({ theme }) => ({
  [`& .${classes.parent}`]: {
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    width: '100%',
    backgroundColor: '#fafafa',
    justifyContent: 'center',
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
    [theme.breakpoints.down('md')]: {
      paddingTop: theme.spacing(6),
      paddingBottom: theme.spacing(6),
    },
  },

  [`& .${classes.link}`]: {
    color: theme.palette.secondary.main,
    textDecoration: 'none',
  },

  [`& .${classes.column}`]: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    width: '80%',
    [theme.breakpoints.down('md')]: {
      width: '90%',
    },
  },

  [`& .${classes.linkText}`]: {
    marginTop: theme.spacing(1),
  },

  [`& .${classes.title}`]: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
    textAlign: 'center',
  },

  [`& .${classes.subtitle}`]: {
    textAlign: 'center',
    width: '80%',
  },

  [`& .${classes.subtitleTwo}`]: {
    margin: '0 auto',
    textAlign: 'center',
    width: '80%',
  },

  [`& .${classes.titleImg}`]: {
    maxHeight: '300px',
  },
}))

function SecuritySection({ securityData }) {
  const { titleImg } = securityData
  const image = getImage(formatImg(titleImg))
  return (
    <Root className={classes.parent}>
      <div className={classes.column}>
        <GatsbyImage
          imgStyle={{
            objectFit: 'scale-down',
            maxHeight: '320px',
          }}
          className={classes.titleImg}
          image={image}
          alt=""
          placeholder="none"
        />
        <Typography className={classes.title} color="primary" variant="h1">
          Secure, private, and open source
        </Typography>
        <Typography className={classes.subtitle} paragraph>
          We are serious about privacy. That’s why our browser extension will
          not (and cannot) access any private data beyond our new tab page.
        </Typography>
        <Typography className={classes.subtitleTwo} paragraph>
          Don’t just take our word for it—our code is{' '}
          <a className={classes.link} href={githubOrganizationURL}>
            open source!
          </a>
        </Typography>
      </div>
    </Root>
  )
}
SecuritySection.propTypes = {
  securityData: PropTypes.shape({
    titleImg: PropTypes.any,
  }),
}
export default SecuritySection
