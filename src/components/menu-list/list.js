import React, { Children, cloneElement } from 'react'
import PropTypes from 'prop-types'

import clsx from 'clsx'

import { makeStyles } from '../helpers'


const styles = makeStyles({
  list: { minWidth: '180px' },
})

const List = ({ children, classes, border, width, isLastItem, ...props }) => {
  return (
    <ul className={clsx(`z-10 py-1 ${styles.list} ${classes.list}`, {
      'border-0': border && isLastItem,
      'border-r border-secondary-400': border && !isLastItem,
    })}>
      {Children.map(children, (child) => cloneElement(child, { width, ...props }))}
    </ul>
  )
}

List.propTypes = {
  children: PropTypes.node,
  classes: PropTypes.object,
  border: PropTypes.oneOfType([
    PropTypes.bool,
    PropTypes.string,
  ]),
  width: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string,
  ]),
  isLastItem: PropTypes.bool,
}
List.defaultProps = {
  classes: { list: '' },
  children: null,
  border: false,
  width: 'full',
  isLastItem: false,
}

export default List
