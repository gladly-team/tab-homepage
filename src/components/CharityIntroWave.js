import React from 'react'
import PropTypes from 'prop-types'
import Box from '@mui/material/Box'

const CharityIntroWave = ({ color }) => (
  <Box sx={{ width: '100%', overflow: 'hidden' }}>
    <Box
      sx={{
        // Fix bad layout on Safari.
        width: 'calc(100% + 20px)',
        height: 'inherit',
        marginTop: '-4px',
        marginLeft: '-10px',
        marginRight: '-10px',
      }}
    >
      <svg
        width="100%"
        height="100%"
        viewBox="0 0 1440 64"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M189.283 31.6806C86.3369 24.3319 0 31.6806 0 31.6806V0H1440V17.9359C1333.43 17.9359 981.062 70.5302 739.891 63.3213C536.719 57.2483 292.23 39.0292 189.283 31.6806Z"
          fill={color}
        />
      </svg>
    </Box>
  </Box>
)

CharityIntroWave.propTypes = {
  color: PropTypes.string.isRequired,
}

export default CharityIntroWave
