import React from 'react'
import Textfield from '../src/components/textfield'


export default {
  title: 'Textfield',
  component: Textfield,
}

export const Normal = () => {
  return <Textfield placeholder='Type here...' />
}

export const Select = () => {
  return <Textfield select />
}
