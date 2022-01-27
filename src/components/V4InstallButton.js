import React, { useState } from 'react'
import { styled } from '@mui/material/styles';
import PropTypes from 'prop-types'
import InstallButton from 'src/components/InstallButton'
import localStorageMgr from 'src/utils/local-storage'
import UnsupportedBrowserDialog from 'src/components/UnsupportedBrowserDialog'
import clsx from 'clsx'
import {
  STORAGE_NEW_USER_IS_TAB_V4_BETA,
  STORAGE_NEW_USER_CAUSE_ID,
} from 'src/utils/constants'

const PREFIX = 'V4InstallButton';

const classes = {
  buttonStyles: `${PREFIX}-buttonStyles`,
  buttonStylesFullWidth: `${PREFIX}-buttonStylesFullWidth`
};

// TODO jss-to-styled codemod: The Fragment root was replaced by div. Change the tag if needed.
const Root = styled('div')((
  {
    theme
  }
) => ({
  [`& .${classes.buttonStyles}`]: {
    maxWidth: theme.spacing(30),
    marginTop: theme.spacing(4),
    [theme.breakpoints.down('md')]: {
      maxWidth: 'unset',
      width: '85%',
    },
  },

  [`& .${classes.buttonStylesFullWidth}`]: {
    maxWidth: theme.spacing(30),
    marginTop: theme.spacing(4),
    [theme.breakpoints.down('md')]: {
      maxWidth: 'unset',
      width: '100%',
    },
  }
}));

function V4InstallButton({ causeId, fullWidth, buttonClassName }) {
  const [showUnsupportedBrowserMessage, setShowUnsupportedBrowserMessage] =
    useState(false)

  return (
    (<Root>
      <UnsupportedBrowserDialog
        open={showUnsupportedBrowserMessage}
        onClose={() => {
          setShowUnsupportedBrowserMessage(false)
        }}
      />
      <InstallButton
        className={clsx(
          fullWidth ? cx.buttonStylesFullWidth : cx.buttonStyles,
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
      />
    </Root>)
  );
}

V4InstallButton.propTypes = {
  causeId: PropTypes.string,
  buttonClassName: PropTypes.string,
  fullWidth: PropTypes.bool,
}
V4InstallButton.defaultProps = {
  fullWidth: false,
}
export default V4InstallButton
