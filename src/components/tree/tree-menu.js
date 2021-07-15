import React from 'react'
import PropTypes from 'prop-types'

import { ChevronRight, CheckOutlined } from '../icons'
import List from '../list/list'
import ListItem from '../list/list-item'


const renderMenu = ({ parentLists = [], menuOptions, ...rest }) => {
  let _children = []
  let MenuIcon = ChevronRight
  const menuList = menuOptions.map((option) => {
    const { id, name, children } = option
    const isSelected = rest.selectedNodes.includes(id)

    if (!children.length) {
      if (isSelected) {
        MenuIcon = CheckOutlined
      } else {
        MenuIcon = null
      }
    }
    if (isSelected && children.length) {
      _children = children
    }

    return (
      <ListItem
        key={name}
        divider
        name={name}
        selected={isSelected}
        onClick={() => rest.onMenuChange({ ...option })}
        EndIcon={MenuIcon}
        itemBorder='border border-t-0 border-neutral-50'
        borderLastItem='border border-t-0 border-r-0 border-neutral-50'
      />
    )
  })

  if (_children.length) {
    return renderMenu({ parentLists: [...parentLists, menuList], menuOptions: _children, ...rest })
  }
  return [...parentLists, menuList]
}

const TreeMenu = ({ width, menuOptions, onMenuChange, selectedNodes }) => {
  const treeMenu = renderMenu({ onMenuChange, menuOptions, selectedNodes })
  return (
    <div className='flex justify-between'>
      {treeMenu.map((list, i) => {
        return (<List key={i} width={width} isLastItem={(i === treeMenu.length - 1)}>{list}</List>)
      })}
    </div>
  )
}

TreeMenu.propTypes = {
  menuOptions: PropTypes.array.isRequired,
  onMenuChange: PropTypes.func.isRequired,
  selectedNodes: PropTypes.array.isRequired,
  width: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]),
}
TreeMenu.defaultProps = { width: 'full' }

export default TreeMenu
