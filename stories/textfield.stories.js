import React from 'react'

import { useMenuIsOpen } from '../src/components/hooks'
import { Dialog, Textfield } from '../src/components'
import ListMenu from '../src/components/tree/list-menu'


const menu = [
  { id: 'item-1', name: 'Item One' },
  { id: 'item-2', name: 'Item Two' },
  { id: 'item-3', name: 'Item Three' },
  { id: 'item-4', name: 'Item Four' },
  { id: 'item-5', name: 'Item Fives' },
]

export default {
  title: 'Textfield',
  component: Textfield,
}

export const Normal = () => {
  return <Textfield placeholder='Type here...' />
}

export const Select = () => {
  const { ref, menuIsOpen, setMenuIsOpen } = useMenuIsOpen()
  return (
    <div ref={ref}>
      <Textfield select focus={menuIsOpen} onClick={() => setMenuIsOpen(true)} />
      <Dialog disablePadding={true} open={menuIsOpen}>
        <ListMenu options={menu} />
      </Dialog>
    </div>)
}
