import React, { useState } from 'react'

import { ChevronRight, ChevronDownOutlined } from '../src/components/icons'
import List from '../src/components/list'


const menu = [
  { id: 'item-1', name: 'Item One' },
  { id: 'item-2', name: 'Item Two' },
  { id: 'item-3', name: 'Item Three' },
  { id: 'item-4', name: 'Item Four' },
  { id: 'item-5', name: 'Item Fives' },
]

export default {
  title: 'List',
  component: List,
}

export const Normal = () => {
  return <List menu={menu} />
}

export const BorderDefault = () => {
  return <List menu={menu} border />
}

export const BorderCustomColor = () => {
  return <List menu={menu} border='primary' />
}

export const BorderCustomWidth = () => {
  return <List menu={menu} border='primary' width='sm' />
}

export const Divider = () => {
  const [val, setVal] = useState({})
  const handleClick = (value) => setVal(value)
  return <List divider menu={menu} onClick={handleClick} selected={val} />
}

export const Icons = () => {
  return (
    <>
      <div>
        <p>Start Icon:</p>
        <List divider menu={[{ ...menu[0] }]} StartIcon={() => <ChevronDownOutlined />} selected={menu[0]} />
      </div>
      <div style={{ marginTop: 30 }}>
        <p>End Icon:</p>
        <List divider menu={[{ ...menu[0] }]} EndIcon={() => <ChevronRight />} selected={menu[0]} />
      </div>
    </>
  )
}
