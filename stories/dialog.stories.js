import React from 'react'

import { Dialog } from '../src/components'
import { useComponentIsActive } from '../src/components/hooks'


export default {
  title: 'Dialog',
  component: Dialog,
}

export const Normal = () => {
  const { ref, componentIsActive, setComponentIsActive } = useComponentIsActive()

  return (
    <div ref={ref} className='flex flex-col'>
      <button
        onClick={() => setComponentIsActive(!componentIsActive)}
        className='font-bold p-sm border border-solid border-primary rounded-sm hover:bg-primary-20 w-sm'
      >
        Open Dialog
      </button>
      <Dialog open={componentIsActive}>
        I am just a simple dialog.
        More improvements needed to make my usage more flexible.
      </Dialog>
    </div>
  )
}
