import React from 'react'
import PropTypes from 'prop-types'

import ListItem from './list-item'
import { classes } from './classes'


const List = ({ menu, border, width, maxWidth, selected, ...props }) => {
  return (
    <ul className={border ? classes.listRoot({ border, width, maxWidth }) : null}>
      {menu.map(({ id, name, ...rest }, i) => {
        return (<ListItem
          key={id}
          name={name}
          value={{ id, name, ...rest }}
          selected={selected.id === id}
          isLastItem={Boolean(menu.length - 1 === i)}
          { ...props }
        />)
      })}
    </ul>
  )
}

List.propTypes = {
  menu: PropTypes.array.isRequired,
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
  selected: PropTypes.object,
}
List.defaultProps = {
  border: false,
  width: 'full',
  maxWidth: 'full',
  selected: {},
}

export default List
