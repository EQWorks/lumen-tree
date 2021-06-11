import React, { useState } from 'react'
import PropTypes from 'prop-types'

import clsx from 'clsx'

import { useComponentIsActive } from '../hooks'
import { ChevronDown, ChevronUp } from '../icons'


const Textfield = ({
  select,
  focus: _focus,
  setFocus: _setFocus,
  value,
  defaultValue,
  onClick,
  onChange,
  customClasses,
  ...rest
}) => {
  const [val, setVal] = useState(defaultValue)
  const { ref, componentIsActive, setComponentIsActive } = useComponentIsActive()
  let focus = componentIsActive
  let setFocus = setComponentIsActive

  if (select) {
    focus = _focus
    setFocus = _setFocus
  }

  const inputOnChange = (e) => {
    if (value === undefined || value === null) {
      setVal(e.target.value)
    } else {
      setVal('')
    }
    onChange(e.target.value)
  }
   
  return (
    <div
      ref={ref}
      className={clsx(`${customClasses} border border-solid rounded-sm flex justify-start p-sm w-${rest.width}`, {
        'border-primary shadow-focus': focus,
        'border-grey': !focus,
      })}
      onFocus={() => setFocus(true)}
    >
      <input
        className={`${customClasses} font-sans focus:outline-none w-full text-primary`}
        value={value || val}
        onClick={onClick}
        onChange={inputOnChange}
        {...rest}
      />
      {select && <div className='mt-0.5 mx-1'>
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
  setFocus: PropTypes.func,
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
  setFocus: () => {},
  customClasses: '',
}

export default Textfield
