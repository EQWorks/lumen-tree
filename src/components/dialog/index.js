import React from 'react'
import PropTypes from 'prop-types'

import clsx from 'clsx'


const Dialog = ({ open, children, disablePadding }) => {
  if (open) {
    return (
      <div className={clsx('fixed inline-flex z-50 shadow-40 mt-1', { 'p-sm': !disablePadding })}>{children}</div>
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
