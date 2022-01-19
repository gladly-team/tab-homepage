import React from 'react'
import PropTypes from 'prop-types'
import { makeStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import { formatImg } from 'src/utils/formatting'
import { githubOrganizationURL } from 'src/utils/navigation.js'
const useStyles = makeStyles((theme) => ({
  parent: {
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    width: '100%',
    backgroundColor: '#fafafa',
    justifyContent: 'center',
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
    [theme.breakpoints.down('sm')]: {
      paddingTop: theme.spacing(6),
      paddingBottom: theme.spacing(6),
    },
  },
  link: {
    color: theme.palette.secondary.main,
    textDecoration: 'none',
  },
  column: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    width: '80%',
    [theme.breakpoints.down('sm')]: {
      width: '90%',
    },
  },
  linkText: {
    marginTop: theme.spacing(1),
  },
  title: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
    textAlign: 'center',
  },
  subtitle: {
    textAlign: 'center',
    width: '80%',
  },
  subtitleTwo: {
    margin: '0 auto',
    textAlign: 'center',
    width: '80%',
  },
  titleImg: {
    maxHeight: '300px',
  },
}))

const SecuritySection = ({ securityData }) => {
  const cx = useStyles()
  const { titleImg } = securityData
  const image = getImage(formatImg(titleImg))
  return (
    <div className={cx.parent}>
      <div className={cx.column}>
        <GatsbyImage
          imgStyle={{
            objectFit: 'scale-down',
            maxHeight: '320px',
          }}
          className={cx.titleImg}
          image={image}
          alt=""
          placeholder="none"
        />
        <Typography className={cx.title} color="primary" variant="h1">
          Secure, private, and open source
        </Typography>
        <Typography className={cx.subtitle} paragraph>
          We are serious about privacy. That’s why our browser extension will
          not (and literally cannot) access any private data beyond our new tab
          page.
        </Typography>
        <Typography className={cx.subtitleTwo} paragraph>
          Don’t just take our word for it—our code is{' '}
          <a className={cx.link} href={githubOrganizationURL}>
            open source!
          </a>
        </Typography>
      </div>
    </div>
  )
}
SecuritySection.propTypes = {
  securityData: PropTypes.shape({
    titleImg: PropTypes.any,
  }),
}
export default SecuritySection
