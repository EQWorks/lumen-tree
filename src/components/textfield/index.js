import React, { useState } from 'react'
import PropTypes from 'prop-types'

import { classes } from './classes'
import { useMenuIsOpen } from '../hooks'
import { ChevronDown, ChevronUp } from '../icons'


const Textfield = ({ focus: _focus, select, value, defaultValue, onClick, onChange, customClasses, ...rest }) => {
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
    if (value === undefined || value === null) {
      setVal(e.target.value)
    } else {
      setVal('')
    }
    onChange(e.target.value)
  }
  
  const rootClasses = focus ? classes.focus({ width: rest.width }) : classes.root({ width: rest.width })
  return (
    <div ref={ref} className={`${rootClasses} ${customClasses}`}>
      <input
        className={`${classes.input} ${customClasses} font-sans`}
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
  customClasses: PropTypes.string,
}
Textfield.defaultProps = {
  select: false,
  value: null,
  defaultValue: '',
  onClick: () => {},
  onChange: () => {},
  ref: null,
  focus: false,
  customClasses: '',
}

export default Textfield
