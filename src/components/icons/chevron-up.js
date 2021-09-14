import React from 'react'
import PropTypes from 'prop-types'


const iconSize = Object.freeze({
  lg: 'w-3.5 h-3.5',
  md: 'w-3 h-3',
  sm: 'w-2.5, h-2.5',
})
const ChevronUp = ({ className, size, ...props }) => {
  return (
    <svg
      className={`${iconSize[size]} ${className}`}
      viewBox="0 0 14 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M13.5625 9.73523L7.30917 3.48248C7.26859 3.44184 7.22039 3.4096 7.16734 3.38761C7.11429 3.36561 7.05743 3.35429 7 3.35429C6.94257 3.35429 6.8857 3.36561 6.83266 3.38761C6.77961 3.4096 6.73141 3.44184 6.69083 3.48248L0.4375 9.73523"
        stroke="#808080"
        strokeWidth="0.75"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

ChevronUp.propTypes = { className: PropTypes.string, size: PropTypes.string }
ChevronUp.defaultProps = { className: '', size: 'lg' }

export default ChevronUp
