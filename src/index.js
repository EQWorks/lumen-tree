import React, { useState } from 'react'

import { Dialog, Textfield } from './components'
import { useMenuIsOpen } from './components/hooks'


const Tree = () => {
  const { ref, menuIsOpen, setMenuIsOpen } = useMenuIsOpen()

  return (
    <div ref={ref}>
      <Dialog open={menuIsOpen}>
        Just saying hi
      </Dialog>
      <button onClick={() => {
        console.log('clicked')
        setMenuIsOpen(!menuIsOpen)
      }} className='text-4xl font-bold'>Hello</button>
      <Textfield select />
    </div>
  )
}

export default Tree
