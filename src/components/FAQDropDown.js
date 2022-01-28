import React, { useRef, useState } from 'react'
import { styled } from '@mui/material/styles'
import PropTypes from 'prop-types'
import ButtonBase from '@mui/material/ButtonBase'

const PREFIX = 'FAQDropDown'

const classes = {
  buttonBase: `${PREFIX}-buttonBase`,
  FAQDropDownText: `${PREFIX}-FAQDropDownText`,
  dropdownText: `${PREFIX}-dropdownText`,
}

// TODO jss-to-styled codemod: The Fragment root was replaced by div. Change the tag if needed.
const Root = styled('div')(({ theme }) => ({
  [`& .${classes.buttonBase}`]: {
    borderRadius: 2,
  },

  [`& .${classes.FAQDropDownText}`]: {
    fontWeight: 'normal',
    transition: 'color 300ms ease-in',
    cursor: 'pointer',
  },

  [`& .${classes.dropdownText}`]: {},
}))

function FAQDropDown({ dropdown, text }) {
  const [isPopoverOpen, setIsPopoverOpen] = useState(false)
  const anchorEl = useRef()
  return (
    <Root>
      <ButtonBase className={classes.buttonBase}>
        <div
          ref={anchorEl}
          onClick={() => {
            setIsPopoverOpen((curState) => !curstate)
          }}
          style={{
            cursor: 'pointer',
          }}
        >
          {text}
        </div>
      </ButtonBase>
      {dropdown({
        open: isPopoverOpen,
        onClose: () => {
          setIsPopoverOpen(false)
        },
        anchorElement: anchorEl,
      })}
    </Root>
  )
}

FAQDropDown.propTypes = {
  dropdown: PropTypes.func.isRequired,
  theme: PropTypes.object.isRequired,
  text: PropTypes.node.isRequired,
  classes: PropTypes.object.isRequired,
}

FAQDropDown.defaultProps = {}

export default FAQDropDown
