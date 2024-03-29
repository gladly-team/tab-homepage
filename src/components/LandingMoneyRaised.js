import React from 'react'
import PropTypes from 'prop-types'
import { styled } from '@mui/material/styles'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import MoneyRaisedDisplay from 'src/components/MoneyRaisedDisplay'
import PageContentBox from 'src/components/PageContentBox'
import {
  formatImg,
  commaFormatted,
  currencyFormatted,
} from 'src/utils/formatting'

const GatsbyImageTitleImage = styled(GatsbyImage)(({ theme }) => ({
  maxWidth: 360,
  marginRight: theme.spacing(4),
  marginLeft: theme.spacing(4),

  [theme.breakpoints.down('md')]: {
    maxWidth: 340,
    marginRight: theme.spacing(4),
    marginLeft: theme.spacing(1),
    marginBottom: theme.spacing(2),
  },
}))

const LandingMoneyRaised = ({ moneyRaisedData, moneyRaised }) => {
  const { moneyImg } = moneyRaisedData
  const moneyImage = getImage(formatImg(moneyImg))
  const moneyRaisedFormatted = `$${commaFormatted(
    currencyFormatted(moneyRaised)
  )}`
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
            alignItems: {
              md: 'center',
              xs: 'flex-start',
            },
            backgroundColor: 'transparent',
            pt: {
              md: 0,
              xs: 0,
            },
            pb: {
              md: 0,
              xs: 4,
            },
            pl: {
              md: 12,
              sm: 4,
              xs: 0,
            },
            pr: {
              md: 12,
              xs: 0,
            },
            mt: {
              md: 0,
              xs: -16,
            },
          }}
        >
          <GatsbyImageTitleImage alt="" image={moneyImage} />
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              minWidth: {
                // Avoid shifting text when the counter width changes.
                xl: '40%',
                lg: '54%',
                md: '54%',
                sm: '70%',
                xs: '90%',
              },
              pl: {
                sm: 4,
                xs: 4,
              },
            }}
          >
            <Typography
              variant="h1"
              sx={{
                color: 'text.secondary',
                fontSize: {
                  // KJ: we should be able to use the MUI theme here, but I
                  // couldn't get it work as expected. Unclear if an MUI
                  // bug or if I don't understand the precedence rules.
                  xl: '5rem',
                  lg: '4.6rem',
                  md: '3rem',
                  sm: '3.5rem',
                  xs: '2.4rem',
                },
              }}
            >
              {moneyRaisedFormatted}
            </Typography>
            <Typography variant="caption" color="textSecondary">
              raised for charity
            </Typography>
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
