import React, { useState } from 'react'
import PropTypes from 'prop-types'

import { classes } from './classes'
import { useMenuIsOpen } from '../hooks'
import { ChevronDown, ChevronUp } from '../icons'


const Textfield = ({ focus: _focus, select, value, defaultValue, onClick, onChange, ...rest }) => {
  const [val, setVal] = useState(defaultValue)
  const { ref, menuIsOpen, setMenuIsOpen: _setFocus } = useMenuIsOpen()
  let focus = menuIsOpen

  if (select) {
    focus = _focus
  }

  const inputOnClick = () => {
    _setFocus(true)
    onClick()
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
  onClick: PropTypes.func,
  onChange: PropTypes.func,
  ref: PropTypes.node,
  focus: PropTypes.bool,
}
Textfield.defaultProps = {
  select: false,
  value: '',
  defaultValue: '',
  onClick: () => {},
  onChange: () => {},
  ref: null,
  focus: false,
}

export default Textfield
