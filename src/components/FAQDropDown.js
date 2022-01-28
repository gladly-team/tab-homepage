import React, { useRef, useState } from 'react'
import PropTypes from 'prop-types'
import makeStyles from '@mui/styles/makeStyles'
import ButtonBase from '@mui/material/ButtonBase'

const useStyles = makeStyles((theme) => ({
  buttonBase: {
    borderRadius: 2,
  },
  FAQDropDownText: {
    fontWeight: 'normal',
    transition: 'color 300ms ease-in',
    cursor: 'pointer',
  },
  dropdownText: {},
}))

function FAQDropDown({ dropdown, text }) {
  const classes = useStyles()
  const [isPopoverOpen, setIsPopoverOpen] = useState(false)
  const anchorEl = useRef()
  return (
    <>
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
    </>
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
