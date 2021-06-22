import React from 'react'

import { useComponentIsActive } from '../src/components/hooks'
import { Dialog, Textfield } from '../src/components'
import ListMenu from '../src/components/tree/list-menu'


const menu = [
  [{ id: 'item-1', name: 'Item One' }],
  [{ id: 'item-2', name: 'Item Two' }],
  [{ id: 'item-3', name: 'Item Three' }],
  [{ id: 'item-4', name: 'Item Four' }],
  [{ id: 'item-5', name: 'Item Fives' }],
]

export default {
  title: 'Textfield',
  component: Textfield,
  argTypes: {
    width: { control: 'width' },
  },
  args: {
    md: true,
  },
}

export const Normal = () => {
  return <Textfield width='md' placeholder='Type here...' />
}

export const Select = () => {
  const { ref, componentIsActive, setComponentIsActive } = useComponentIsActive()
  return (
    <div ref={ref} className='w-md'>
      <Textfield
        width='md'
        select
        focus={componentIsActive}
        setFocus={setComponentIsActive}
        onClick={() => setComponentIsActive(true)}
      />
      <Dialog disablePadding={true} open={componentIsActive}>
        <ListMenu width='md' options={menu} />
      </Dialog>
    </div>)
}
