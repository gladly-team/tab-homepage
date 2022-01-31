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
  maxWidth: 500,
  marginRight: theme.spacing(4),

  [theme.breakpoints.down('md')]: {
    minWidth: 'unset',
    marginRight: 'unset',
    marginBottom: theme.spacing(3),
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
              md: 12,
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
              pl: {
                md: 2,
                sm: 0,
              },
            }}
          >
            <Typography
              variant="h1"
              sx={{
                typography: (theme) => ({
                  xl: 'theme.typography.h1',
                  lg: 'theme.typography.h2',
                  md: 'theme.typography.h3',
                  sm: 'theme.typography.h2',
                  xs: 'theme.typography.h3',
                }),
                color: 'text.secondary',
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
