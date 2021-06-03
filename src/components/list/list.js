import React, { Children, cloneElement } from 'react'
import PropTypes from 'prop-types'

import clsx from 'clsx'


const List = ({ children, border, width, maxWidth, ...props }) => {
  return (
    <ul className={clsx(
      border && (`border-2 border-solid
      border-${border.length ? border : 'lightgrey'}
      w-${width} max-w-${maxWidth}`),
    )}>
      {Children.map(children, (child) => cloneElement(child, { width, ...props }))}
    </ul>
  )
}

List.propTypes = {
  children: PropTypes.node,
  border: PropTypes.oneOfType([
    PropTypes.bool,
    PropTypes.string,
  ]),
  width: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string,
  ]),
  maxWidth: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string,
  ]),
}
List.defaultProps = {
  children: null,
  border: false,
  width: 'full',
  maxWidth: 'full',
}

export default List
