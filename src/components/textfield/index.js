import React, { useState } from 'react'
import PropTypes from 'prop-types'

import { classes } from './classes'
import { useMenuIsOpen } from '../hooks'
import { ChevronDown, ChevronUp } from '../icons'


const Textfield = ({ select, value, defaultValue, onChange, ...rest }) => {
  const [val, setVal] = useState(defaultValue)
  const { ref, menuIsOpen: focus, setMenuIsOpen: setFocus } = useMenuIsOpen()

  const inputOnClick = () => {
    setFocus(true)
  }

  const inputOnChange = (e) => {
    setVal(e.target.value)
    onChange(e.target.value)
  }

  return (
    <div ref={ref} className={focus ? classes.focus : classes.root}>
      <input
        className={classes.input}
        value={value || val}
        onClick={inputOnClick}
        onChange={inputOnChange}
        {...rest}
      />
      {select && <div className={classes.icon}>
        {focus ? <ChevronUp /> : <ChevronDown />}
      </div>}
    </div>
  )
}

Textfield.propTypes = {
  select: PropTypes.bool,
  value: PropTypes.string,
  defaultValue: PropTypes.string,
  onChange: PropTypes.func,
}
Textfield.defaultProps = {
  select: false,
  value: '',
  defaultValue: '',
  onChange: () => {},
}

export default Textfield
