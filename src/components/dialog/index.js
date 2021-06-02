import React from 'react'
import PropTypes from 'prop-types'


const Dialog = ({ open, children }) => {
  if (open) {
    return (
      <div className='p-sm z-10 shadow-md'>{children}</div>
    )
  }
  return null
}

Dialog.propTypes = {
  open: PropTypes.bool.isRequired,
  children: PropTypes.node.isRequired,
}
export default Dialog
