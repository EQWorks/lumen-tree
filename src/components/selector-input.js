import React, { useState } from 'react'
import PropTypes from 'prop-types'

import clsx from 'clsx'

import { ChevronDown, ChevronUp } from './icons'


const SelectorInput = ({
  focus,
  setFocus,
  value,
  defaultValue,
  onClick,
  onChange,
  customClasses,
  ...rest
}) => {
  const [val, setVal] = useState(defaultValue)

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
      className={clsx(`${customClasses} border border-secondary-400 rounded-sm flex justify-start p-sm h-9 ${rest.width}`, {
        'border-interactive-500 shadow-focused-primary': focus,
        'border': !focus,
      })}
      onFocus={() => setFocus(true)}
    >
      <input
        className={`${customClasses} focus:outline-none w-full truncate font-normal tracking-sm text-sm text-secondary-800`}
        value={value || val}
        onClick={onClick}
        onChange={inputOnChange}
        {...rest}
      />
      <div className='mt-0.5 mx-0.5'>
        {focus ? <ChevronUp /> : <ChevronDown />}
      </div>
    </div>
  )
}

SelectorInput.propTypes = {
  value: PropTypes.string,
  defaultValue: PropTypes.string,
  onClick: PropTypes.func,
  onChange: PropTypes.func,
  ref: PropTypes.node,
  focus: PropTypes.bool,
  setFocus: PropTypes.func,
  customClasses: PropTypes.string,
}
SelectorInput.defaultProps = {
  value: null,
  defaultValue: '',
  onClick: () => {},
  onChange: () => {},
  ref: null,
  focus: false,
  setFocus: () => {},
  customClasses: '',
}

export default SelectorInput
