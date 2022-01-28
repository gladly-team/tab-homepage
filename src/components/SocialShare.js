import React from 'react'
import { styled } from '@mui/material/styles';
import PropTypes from 'prop-types'
import {
  EmailIcon,
  EmailShareButton,
  FacebookIcon,
  FacebookShareButton,
  RedditIcon,
  RedditShareButton,
  TumblrIcon,
  TumblrShareButton,
  TwitterIcon,
  TwitterShareButton,
} from 'react-share'

const PREFIX = 'SocialShare';

const classes = {
  root: `${PREFIX}-root`,
  button: `${PREFIX}-button`
};

const Root = styled('div')(() => ({
  [`&.${classes.root}`]: {
    display: 'flex',
    justifyContent: 'center',
    padding: 0,
  },

  [`& .${classes.button}`]: {
    padding: 4,
  }
}));

function SocialShare(props) {
  const {
    EmailShareButtonProps,
    FacebookShareButtonProps,
    RedditShareButtonProps,
    TumblrShareButtonProps,
    TwitterShareButtonProps,
    url,
  } = props
  const iconSize = 32



  // Note: hashtags for Facebook and Twitter are hardcoded.
  // We may want to move them server-side if we use them often.
  return (
    <Root className={classes.root}>
      {FacebookShareButtonProps ? (
        <div className={classes.button}>
          <FacebookShareButton
            {...FacebookShareButtonProps}
            url={url}

            // hashtag={'tabsTransformed'}
          >
            <FacebookIcon size={iconSize} round />
          </FacebookShareButton>
        </div>
      ) : null}
      {TwitterShareButtonProps ? (
        <div className={classes.button}>
          <TwitterShareButton
            {...TwitterShareButtonProps}
            url={url}

            // hashtags={['tabsTransformed']}
          >
            <TwitterIcon size={iconSize} round />
          </TwitterShareButton>
        </div>
      ) : null}
      {RedditShareButtonProps ? (
        <div className={classes.button}>
          <RedditShareButton {...RedditShareButtonProps} url={url}>
            <RedditIcon size={iconSize} round />
          </RedditShareButton>
        </div>
      ) : null}
      {TumblrShareButtonProps ? (
        <div className={classes.button}>
          <TumblrShareButton {...TumblrShareButtonProps} url={url}>
            <TumblrIcon size={iconSize} round />
          </TumblrShareButton>
        </div>
      ) : null}
      {EmailShareButtonProps ? (
        <div className={classes.button}>
          <EmailShareButton {...EmailShareButtonProps} url={url}>
            <EmailIcon size={iconSize} round />
          </EmailShareButton>
        </div>
      ) : null}
    </Root>
  );
}

SocialShare.propTypes = {
  // https://github.com/nygardk/react-share#api
  EmailShareButtonProps: PropTypes.shape({
    subject: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired,
    separator: PropTypes.string,
  }),
  FacebookShareButtonProps: PropTypes.shape({
    quote: PropTypes.string,
    hashtag: PropTypes.string,
  }),
  RedditShareButtonProps: PropTypes.shape({
    title: PropTypes.string.isRequired,
  }),
  TumblrShareButtonProps: PropTypes.shape({
    title: PropTypes.string.isRequired,
    caption: PropTypes.string.isRequired,
  }),
  TwitterShareButtonProps: PropTypes.shape({
    title: PropTypes.string.isRequired,
    via: PropTypes.string,
    hashtags: PropTypes.arrayOf(PropTypes.string),
    related: PropTypes.arrayOf(PropTypes.string),
  }),
  url: PropTypes.string.isRequired,
}

SocialShare.defaultProps = {}

export default SocialShare
