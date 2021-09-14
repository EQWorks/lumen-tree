import React from 'react'
import PropTypes from 'prop-types'


const iconSize = Object.freeze({
  lg: 'w-3.5 h-3.5',
  md: 'w-3 h-3',
  sm: 'w-2.5, h-2.5',
})
const Check = ({ className, size, ...props }) => {
  return (
    <svg
      className={`${iconSize[size]} ${className}`}
      viewBox="0 0 14 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      { ...props }
    >
      <path
        d="M13.5625 0.43692L4.75883 13.013C4.64268 13.1799 4.48852 13.3168 4.30907 13.4125C4.12962 13.5081 3.93 13.5597 3.72668 13.5631C3.52336 13.5665 3.32215 13.5215 3.13964 13.4318C2.95712 13.3421 2.79853 13.2104 2.67692 13.0474L0.4375 10.0619"
        stroke="#2A2A2A"
        strokeWidth="0.875"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

Check.propTypes = { className: PropTypes.string, size: PropTypes.string }
Check.defaultProps = { className: '', size: 'lg' }

export default Check
