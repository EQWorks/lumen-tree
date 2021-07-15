import React, { Children, cloneElement } from 'react'
import PropTypes from 'prop-types'

import clsx from 'clsx'


const List = ({ children, border, width, maxWidth, ...props }) => {
  const _border = ['border', (border.length ? border : 'neutral-50')].join('-')
  const _width = ['w', width].join('-')
  const _maxWidth = ['max-w', maxWidth].join('-')
  return (
    <ul className={clsx('z-10', {
      [`border-2 ${_border} ${_width} ${_maxWidth}`]: border,
    })}>
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
