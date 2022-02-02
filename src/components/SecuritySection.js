import React from 'react'
import PropTypes from 'prop-types'
import { styled } from '@mui/material/styles'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import PageContentBox from 'src/components/PageContentBox'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import { formatImg } from 'src/utils/formatting'
import { githubOrganizationURL } from 'src/utils/navigation.js'

const DivParent = styled('div')(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  width: '100%',
  backgroundColor: '#fafafa',
  justifyContent: 'center',
  paddingTop: theme.spacing(12),
  paddingBottom: theme.spacing(12),
  [theme.breakpoints.down('md')]: {
    paddingTop: theme.spacing(10),
    paddingBottom: theme.spacing(10),
  },
  [theme.breakpoints.down('sm')]: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },
}))

const AnchorLink = styled('a')(({ theme }) => ({
  color: theme.palette.secondary.main,
  textDecoration: 'none',
}))

const TypographySubtitle = styled(Typography)(({ theme }) => ({
  textAlign: 'center',
}))

const TypographySubtitleTwo = styled(Typography)(({ theme }) => ({
  margin: '0 auto',
  textAlign: 'center',
}))

const GatsbyImageTitleImg = styled(GatsbyImage)(({ theme }) => ({
  maxWidth: '550px',
}))

const SecuritySection = ({ securityData }) => {
  const { titleImg } = securityData
  const image = getImage(formatImg(titleImg))
  return (
    <DivParent>
      <PageContentBox
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          paddingLeft: {
            lg: 12, // matches other sections
            md: 8, // matches other sections
            sm: 6, // matches other sections
            xs: 3, // matches other sections
          },
          paddingRight: {
            md: 12,
            lg: 8, // matches other sections
            sm: 6, // matches other sections
            xs: 3,
          },
          paddingTop: {
            lg: 10,
            md: 6,
            xs: 0,
          },
          paddingBottom: {
            lg: 10,
            md: 6,
            xs: 0,
          },
        }}
      >
        <GatsbyImageTitleImg
          imgStyle={{
            objectFit: 'scale-down',
            maxHeight: '320px',
          }}
          image={image}
          alt=""
          placeholder="none"
        />
        <Box
          sx={{
            // TODO: reusable
            pl: {
              md: 2,
              xs: 0,
            },
            pr: {
              md: 2,
              xs: 0,
            },
            pt: 4,
            pb: 4,
            maxWidth: {
              md: '90%',
              sm: '100%',
            },
          }}
        >
          <Typography color="primary" variant="h1" align="center">
            Secure, private, and open source
          </Typography>
        </Box>
        <Box
          sx={{
            // TODO: reusable
            // Matches landing page, divided by two
            pr: { lg: 8, md: 2, xs: 1 },
            pl: { lg: 8, md: 2, xs: 1 },
            maxWidth: {
              md: '70%',
              sm: '100%',
            },
          }}
        >
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
              open source
            </AnchorLink>
            !
          </TypographySubtitleTwo>
        </Box>
      </PageContentBox>
    </DivParent>
  )
}
SecuritySection.propTypes = {
  securityData: PropTypes.shape({
    titleImg: PropTypes.any,
  }),
}
export default SecuritySection
