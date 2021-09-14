import React from 'react'
import PropTypes from 'prop-types'

import { List, ListItem } from '../menu-list'


const ListMenu = ({ options, onClick, width }) => {
  return (
    <List width={width} classes={{ list: 'mt-1 border border-secondary-400 rounded-sm shadow-light-30' }}>
      {options.map((option, i) => {
        return (<ListItem
          key={i}
          name={`${(option.map(({ name }) => name)).join(' › ')}`}
          onClick={() => onClick(option)}
        />)
      })}
    </List>
  )
}

ListMenu.propTypes = {
  options: PropTypes.array.isRequired,
  onClick: PropTypes.func,
  width: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]),
}
ListMenu.defaultProps = { onClick: () => {}, width: 'full' }
export default ListMenu
