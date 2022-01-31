import React from 'react'
import PropTypes from 'prop-types'
import { styled } from '@mui/material/styles'
import Typography from '@mui/material/Typography'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import { formatImg } from 'src/utils/formatting'
import { githubOrganizationURL } from 'src/utils/navigation.js'

const DivParent = styled('div')(({ theme }) => ({
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
}))

const AnchorLink = styled('a')(({ theme }) => ({
  color: theme.palette.secondary.main,
  textDecoration: 'none',
}))

const DivColumn = styled('div')(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  width: '80%',

  [theme.breakpoints.down('md')]: {
    width: '90%',
  },
}))

const TypographyTitle = styled(Typography)(({ theme }) => ({
  paddingTop: theme.spacing(4),
  paddingBottom: theme.spacing(4),
  textAlign: 'center',
}))

const TypographySubtitle = styled(Typography)(({ theme }) => ({
  textAlign: 'center',
  width: '80%',
}))

const TypographySubtitleTwo = styled(Typography)(({ theme }) => ({
  margin: '0 auto',
  textAlign: 'center',
  width: '80%',
}))

const GatsbyImageTitleImg = styled(GatsbyImage)(({ theme }) => ({
  maxHeight: '300px',
}))

const SecuritySection = ({ securityData }) => {
  const { titleImg } = securityData
  const image = getImage(formatImg(titleImg))
  return (
    <DivParent>
      <DivColumn>
        <GatsbyImageTitleImg
          imgStyle={{
            objectFit: 'scale-down',
            maxHeight: '320px',
          }}
          image={image}
          alt=""
          placeholder="none"
        />
        <TypographyTitle color="primary" variant="h1">
          Secure, private, and open source
        </TypographyTitle>
        <TypographySubtitle paragraph>
          We are serious about privacy. That’s why our browser extension will
          not (and cannot) access any private data beyond our new tab page.
        </TypographySubtitle>
        <TypographySubtitleTwo paragraph>
          Don’t just take our word for it—our code is{' '}
          <AnchorLink
            href={githubOrganizationURL}
            target="_blank"
            rel="noopener noreferrer"
          >
            open source!
          </AnchorLink>
        </TypographySubtitleTwo>
      </DivColumn>
    </DivParent>
  )
}
SecuritySection.propTypes = {
  securityData: PropTypes.shape({
    titleImg: PropTypes.any,
  }),
}
export default SecuritySection
