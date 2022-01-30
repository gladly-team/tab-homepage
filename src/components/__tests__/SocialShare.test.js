/* eslint-env jest */

import React from 'react'
import { shallow } from 'src/utils/testHelpers/componentTesting'
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

const getMockProps = () => ({
  url: 'https://example.com/share-me/',
  EmailShareButtonProps: {
    subject: 'Hi there',
    body: 'This is where we say stuff!',
  },
  FacebookShareButtonProps: {
    quote: 'This is where we say stuff!',
  },
  RedditShareButtonProps: {
    title: 'This is the title of the Reddit post.',
  },
  TumblrShareButtonProps: {
    title: 'My Tumblr post title',
    caption: 'This is where we say stuff!',
  },
  TwitterShareButtonProps: {
    title: 'This is my Twitter post title',
    related: ['@TabForACause'],
  },
})

afterEach(() => {
  jest.clearAllMocks()
})

describe('SocialShare component', () => {
  it('renders without error', () => {
    const SocialShare = require('src/components/SocialShare').default
    const mockProps = getMockProps()
    shallow(<SocialShare {...mockProps} />)
  })

  it('renders an EmailShareButton and EmailIcon when EmailShareButtonProps is provided', () => {
    const SocialShare = require('src/components/SocialShare').default
    const mockProps = {
      ...getMockProps(),
      EmailShareButtonProps: {
        subject: 'Hi there',
        body: 'This is where we say stuff!',
      },
    }
    const wrapper = shallow(<SocialShare {...mockProps} />)
    expect(wrapper.find(EmailIcon).exists()).toBe(true)
    expect(wrapper.find(EmailShareButton).exists()).toBe(true)
    expect(wrapper.find(EmailShareButton).props()).toEqual({
      ...mockProps.EmailShareButtonProps,
      children: expect.any(Object),
      url: mockProps.url,
    })
  })

  it('does not render an EmailShareButton or EmailIcon when EmailShareButtonProps is not provided', () => {
    const SocialShare = require('src/components/SocialShare').default
    const mockProps = {
      ...getMockProps(),
      EmailShareButtonProps: undefined,
    }
    const wrapper = shallow(<SocialShare {...mockProps} />)
    expect(wrapper.find(EmailIcon).exists()).toBe(false)
    expect(wrapper.find(EmailShareButton).exists()).toBe(false)
  })

  it('renders a FacebookShareButton and FacebookIcon when FacebookShareButtonProps is provided', () => {
    const SocialShare = require('src/components/SocialShare').default
    const mockProps = {
      ...getMockProps(),
      FacebookShareButtonProps: {
        quote: 'This is where we say stuff!',
      },
    }
    const wrapper = shallow(<SocialShare {...mockProps} />)
    expect(wrapper.find(FacebookIcon).exists()).toBe(true)
    expect(wrapper.find(FacebookShareButton).exists()).toBe(true)
    expect(wrapper.find(FacebookShareButton).props()).toEqual({
      ...mockProps.FacebookShareButtonProps,
      children: expect.any(Object),
      url: mockProps.url,

      // hashtag: 'tabsTransformed',
    })
  })

  it('does not render a FacebookShareButton or FacebookIcon when FacebookShareButtonProps is not provided', () => {
    const SocialShare = require('src/components/SocialShare').default
    const mockProps = {
      ...getMockProps(),
      FacebookShareButtonProps: undefined,
    }
    const wrapper = shallow(<SocialShare {...mockProps} />)
    expect(wrapper.find(FacebookIcon).exists()).toBe(false)
    expect(wrapper.find(FacebookShareButton).exists()).toBe(false)
  })

  it('renders a RedditShareButton and RedditIcon when RedditShareButtonProps is provided', () => {
    const SocialShare = require('src/components/SocialShare').default
    const mockProps = {
      ...getMockProps(),
      RedditShareButtonProps: {
        title: 'This is the title of the Reddit post.',
      },
    }
    const wrapper = shallow(<SocialShare {...mockProps} />)
    expect(wrapper.find(RedditIcon).exists()).toBe(true)
    expect(wrapper.find(RedditShareButton).exists()).toBe(true)
    expect(wrapper.find(RedditShareButton).props()).toEqual({
      ...mockProps.RedditShareButtonProps,
      children: expect.any(Object),
      url: mockProps.url,
    })
  })

  it('does not render a RedditShareButton or RedditIcon when RedditShareButtonProps is not provided', () => {
    const SocialShare = require('src/components/SocialShare').default
    const mockProps = {
      ...getMockProps(),
      RedditShareButtonProps: undefined,
    }
    const wrapper = shallow(<SocialShare {...mockProps} />)
    expect(wrapper.find(RedditIcon).exists()).toBe(false)
    expect(wrapper.find(RedditShareButton).exists()).toBe(false)
  })

  it('renders a TumblrShareButton and TumblrIcon when TumblrShareButtonProps is provided', () => {
    const SocialShare = require('src/components/SocialShare').default
    const mockProps = {
      ...getMockProps(),
      TumblrShareButtonProps: {
        title: 'My Tumblr post title',
        caption: 'This is where we say stuff!',
      },
    }
    const wrapper = shallow(<SocialShare {...mockProps} />)
    expect(wrapper.find(TumblrIcon).exists()).toBe(true)
    expect(wrapper.find(TumblrShareButton).exists()).toBe(true)
    expect(wrapper.find(TumblrShareButton).props()).toEqual({
      ...mockProps.TumblrShareButtonProps,
      children: expect.any(Object),
      url: mockProps.url,
    })
  })

  it('does not render a TumblrShareButton or TumblrIcon when TumblrShareButtonProps is not provided', () => {
    const SocialShare = require('src/components/SocialShare').default
    const mockProps = {
      ...getMockProps(),
      TumblrShareButtonProps: undefined,
    }
    const wrapper = shallow(<SocialShare {...mockProps} />)
    expect(wrapper.find(TumblrIcon).exists()).toBe(false)
    expect(wrapper.find(TumblrShareButton).exists()).toBe(false)
  })

  it('renders a TwitterShareButton and TwitterIcon when TwitterShareButtonProps is provided', () => {
    const SocialShare = require('src/components/SocialShare').default
    const mockProps = {
      ...getMockProps(),
      TwitterShareButtonProps: {
        title: 'This is my Twitter post title',
        related: ['@TabForACause'],
      },
    }
    const wrapper = shallow(<SocialShare {...mockProps} />)
    expect(wrapper.find(TwitterIcon).exists()).toBe(true)
    expect(wrapper.find(TwitterShareButton).exists()).toBe(true)
    expect(wrapper.find(TwitterShareButton).props()).toEqual({
      ...mockProps.TwitterShareButtonProps,
      children: expect.any(Object),
      url: mockProps.url,

      // hashtags: ['tabsTransformed'],
    })
  })

  it('does not render a TwitterShareButton or TwitterIcon when TwitterShareButtonProps is not provided', () => {
    const SocialShare = require('src/components/SocialShare').default
    const mockProps = {
      ...getMockProps(),
      TwitterShareButtonProps: undefined,
    }
    const wrapper = shallow(<SocialShare {...mockProps} />)
    expect(wrapper.find(TwitterIcon).exists()).toBe(false)
    expect(wrapper.find(TwitterShareButton).exists()).toBe(false)
  })
})
