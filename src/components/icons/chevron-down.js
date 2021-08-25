import React from 'react'
import PropTypes from 'prop-types'


const iconSize = Object.freeze({
  lg: 'w-3.5 h-3.5',
  md: 'w-3 h-3',
  sm: 'w-2.5, h-2.5',
})
const ChevronDown = ({ className, size, ...props }) => {
  return (
    <svg
      className={`${iconSize[size]} ${className}`}
      viewBox="0 0 14 9"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M13.5625 1.26477L7.30917 7.51752C7.26859 7.55816 7.22039 7.5904 7.16734 7.61239C7.11429 7.63439 7.05743 7.64571 7 7.64571C6.94257 7.64571 6.8857 7.63439 6.83266 7.61239C6.77961 7.5904 6.73141 7.55816 6.69083 7.51752L0.4375 1.26477"
        stroke="#808080"
        strokeWidth="0.75"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

ChevronDown.propTypes = { className: PropTypes.string, size: PropTypes.string }
ChevronDown.defaultProps = { className: '', size: 'lg' }

export default ChevronDown
