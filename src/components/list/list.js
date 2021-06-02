import React, { Children, cloneElement } from 'react'
import PropTypes from 'prop-types'

import { classes } from './classes'


const List = ({ children, border, width, maxWidth, ...props }) => {
  return (
    <ul className={border ? classes.listRoot({ border, width, maxWidth }) : null}>
      {Children.map(children, (child) => cloneElement(child, { ...props }))}
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
