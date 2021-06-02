import React from 'react'
import PropTypes from 'prop-types'

import List from '../list/list'
import ListItem from '../list/list-item'


const ListMenu = ({ options, onClick }) => {
  console.log('options: ', options)
  return (
    <List>
      {options.map((option, i) => {
        return (<ListItem
          key={i}
          name={`${(option.map(({ name }) => name)).join(' › ')}`}
          onClick={() => onClick(option)}
          isLastItem={Boolean(options.length === i)}
        />)
      })}
    </List>
  )
}

ListMenu.propTypes = {
  options: PropTypes.array.isRequired,
  onClick: PropTypes.func,
}
ListMenu.defaultProps = { onClick: () => {} }
export default ListMenu
