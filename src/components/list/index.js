import React from 'react'
import PropTypes from 'prop-types'

import List from './list'
import ListItem from './list-item'


const LumenList = ({ menu, selected, ...props }) => {
  return (
    <List {...props}>
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
    </List>
  )
}

LumenList.propTypes = {
  menu: PropTypes.array.isRequired,
  selected: PropTypes.object,
}
LumenList.defaultProps = {
  selected: {},
}

export default LumenList
