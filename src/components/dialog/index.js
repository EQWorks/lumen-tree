import React from 'react'
import PropTypes from 'prop-types'


const Dialog = ({ open, children, disablePadding }) => {
  const padding = disablePadding ? '': 'p-sm'
  if (open) {
    return (
      <div className={`inline-flex z-10 shadow-md mt-1 ${padding}`}>{children}</div>
    )
  }
  return null
}

Dialog.propTypes = {
  open: PropTypes.bool.isRequired,
  children: PropTypes.node.isRequired,
  disablePadding: PropTypes.bool,
}
Dialog.defaultProps = {
  disablePadding: false,
}
export default Dialog
