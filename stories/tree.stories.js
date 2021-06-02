import React, { useState } from 'react'

import { Tree } from '../src'
import { findNodes } from '../src/components/helpers'
import { _menuOptions } from './data/tree-menu'


export default {
  title: 'Tree',
  component: Tree,
}

export const Default = () => {
  const [selectedNodes, setSelectedNodes] = useState([])
  const handleCategoryClick = (value) => {
    if (!value.children.length) {
      setSelectedNodes(findNodes(_menuOptions, value.id))
    }
  }
  return (
    <Tree
      label='Categories:'
      menuOptions={_menuOptions}
      value={selectedNodes.map(({ name }) => name)}
      defaultValue={selectedNodes.map(({ id }) => id)}
      placeholder='Select...'
      onMenuChange={handleCategoryClick}
      width='md'
    />
  )
}
