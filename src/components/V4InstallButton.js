import React, { useState } from 'react'
import { styled } from '@mui/material/styles'
import PropTypes from 'prop-types'

import InstallButton from 'src/components/InstallButton'
import localStorageMgr from 'src/utils/local-storage'
import UnsupportedBrowserDialog from 'src/components/UnsupportedBrowserDialog'
import clsx from 'clsx'
import {
  STORAGE_NEW_USER_IS_TAB_V4_BETA,
  STORAGE_NEW_USER_CAUSE_ID,
} from 'src/utils/constants'

const PREFIX = 'V4InstallButton'

const classes = {
  buttonStyles: `${PREFIX}-buttonStyles`,
  buttonStylesFullWidth: `${PREFIX}-buttonStylesFullWidth`,
}

// TODO jss-to-styled codemod: The Fragment root was replaced by div. Change the tag if needed.
const Root = styled('div')(({ theme }) => ({
  [`& .${classes.buttonStyles}`]: {
    maxWidth: 240,
    marginTop: theme.spacing(4),
    [theme.breakpoints.down('md')]: {
      maxWidth: 'unset',
      width: '85%',
    },
  },

  [`& .${classes.buttonStylesFullWidth}`]: {
    maxWidth: 240,
    [theme.breakpoints.down('md')]: {
      maxWidth: 'unset',
      width: '100%',
    },
  },
}))

const V4InstallButton = ({
  causeId,
  fullWidth,
  buttonClassName,
  style,
  pageContext,
}) => {
  // Don't run if a cause ID is missing.
  if (!causeId) {
    throw new Error('A cause ID is missing in an install button.')
  }
  const [showUnsupportedBrowserMessage, setShowUnsupportedBrowserMessage] =
    useState(false)

  return (
    <Root>
      <UnsupportedBrowserDialog
        open={showUnsupportedBrowserMessage}
        onClose={() => {
          setShowUnsupportedBrowserMessage(false)
        }}
        pageContext={pageContext}
      />
      <InstallButton
        className={clsx(
          fullWidth ? classes.buttonStylesFullWidth : classes.buttonStyles,
          buttonClassName
        )}
        color="secondary"
        size="medium"
        onBeforeInstall={() => {
          localStorageMgr.setItem(STORAGE_NEW_USER_IS_TAB_V4_BETA, 'true')
          localStorageMgr.setItem(STORAGE_NEW_USER_CAUSE_ID, causeId)
        }}
        onUnsupportedBrowserInstallClick={() => {
          setShowUnsupportedBrowserMessage(true)
        }}
        style={style}
      />
    </Root>
  )
}

V4InstallButton.propTypes = {
  causeId: PropTypes.string.isRequired,
  buttonClassName: PropTypes.string,
  fullWidth: PropTypes.bool,
  style: PropTypes.object,
  pageContext: PropTypes.shape({
    referrer: PropTypes.shape({
      id: PropTypes.number,
    }),
  }),
}
V4InstallButton.defaultProps = {
  fullWidth: false,
  style: {},
}
export default V4InstallButton
