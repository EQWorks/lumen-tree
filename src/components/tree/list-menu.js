import React from 'react'
import PropTypes from 'prop-types'

import List from '../list/list'
import ListItem from '../list/list-item'


const ListMenu = ({ options, onClick, width }) => {
  return (
    <List width={width}>
      {options.map((option, i) => {
        return (<ListItem
          key={i}
          name={`${(option.map(({ name }) => name)).join(' › ')}`}
          onClick={() => onClick(option)}
          isLastItem={Boolean(options.length - 1 === i)}
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
