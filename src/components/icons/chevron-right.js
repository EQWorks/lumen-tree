import React from 'react'
import PropTypes from 'prop-types'


const iconSize = Object.freeze({
  lg: 'w-3.5 h-3.5',
  md: 'w-3 h-3',
  sm: 'w-2.5, h-2.5',
})
const ChevronRight = ({ className, size, ...props }) => {
  return (
    <svg
      className={`${iconSize[size]} ${className}`}
      viewBox="0 0 9 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      { ...props }
    >
      <path
        d="M1.2085 0.4375L7.46183 6.69083C7.50247 6.73141 7.53471 6.77961 7.5567 6.83266C7.5787 6.8857 7.59002 6.94257 7.59002 7C7.59002 7.05743 7.5787 7.11429 7.5567 7.16734C7.53471 7.22039 7.50247 7.26859 7.46183 7.30917L1.2085 13.5625"
        stroke="#808080"
        strokeWidth="0.875"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

ChevronRight.propTypes = { className: PropTypes.string, size: PropTypes.string }
ChevronRight.defaultProps = { className: '', size: 'lg' }

export default ChevronRight
