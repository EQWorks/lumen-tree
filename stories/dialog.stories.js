import React from 'react'

import { Dialog } from '../src/components'
import { useMenuIsOpen } from '../src/components/hooks'


export default {
  title: 'Dialog',
  component: Dialog,
}

export const Normal = () => {
  const { ref, menuIsOpen, setMenuIsOpen } = useMenuIsOpen()

  return (
    <div ref={ref}>
      <button
        onClick={() => setMenuIsOpen(!menuIsOpen)}
        className='font-bold p-sm border border-solid border-primary rounded-sm hover:bg-primary-20'
      >
        Open Dialog
      </button>
      <Dialog open={menuIsOpen}>
        I am just a simple dialog.
        More improvements needed to make my usage more flexible.
      </Dialog>
    </div>
  )
}
