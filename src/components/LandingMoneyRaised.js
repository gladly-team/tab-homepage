import React from 'react'
import PropTypes from 'prop-types'
import { styled } from '@mui/material/styles'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import Box from '@mui/material/Box'
import MoneyRaisedDisplay from 'src/components/MoneyRaisedDisplay'
import PageContentBox from 'src/components/PageContentBox'
import { formatImg } from 'src/utils/formatting'

const GatsbyImageTitleImage = styled(GatsbyImage)(({ theme }) => ({
  minWidth: '40%',
  maxWidth: '40%',
  marginRight: theme.spacing(4),

  [theme.breakpoints.down('md')]: {
    minWidth: 'unset',
    maxWidth: 'unset',
    marginRight: 'unset',
    marginBottom: theme.spacing(3),
  },
}))

const LandingMoneyRaised = ({ moneyRaisedData, moneyRaised }) => {
  const { moneyImg } = moneyRaisedData
  const moneyImage = getImage(formatImg(moneyImg))
  return (
    <Box
      sx={{
        width: '100%',
        backgroundColor: 'primary.main',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
      }}
    >
      <PageContentBox>
        <Box
          sx={{
            width: '100%',
            display: 'flex',
            flexDirection: {
              md: 'row',
              xs: 'column',
            },
            alignItems: 'center',
            backgroundColor: 'transparent',
            pt: {
              md: 4,
              xs: 0,
            },
            pb: {
              md: 4,
              xs: 6,
            },
            pl: {
              md: 20,
              xs: 2,
            },
            pr: {
              md: 20,
              xs: 2,
            },
            mt: {
              md: 0,
              xs: -16,
            },
          }}
        >
          <GatsbyImageTitleImage alt="" image={moneyImage} />
          <Box sx={{ maxWidth: '100%' }}>
            {/*
             * TODO: refactor/eliminate MoneyRaisedDisplay to make it
             *  easier to make responsive.
             */}
            <MoneyRaisedDisplay
              color="textSecondary"
              textVariant="h1"
              longCopy
              moneyRaised={moneyRaised}
            />
          </Box>
        </Box>
      </PageContentBox>
    </Box>
  )
}
LandingMoneyRaised.propTypes = {
  moneyRaisedData: PropTypes.shape({
    moneyImg: PropTypes.any,
  }),
  moneyRaised: PropTypes.number,
}
export default LandingMoneyRaised
