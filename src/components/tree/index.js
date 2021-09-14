import React from 'react'
import PropTypes from 'prop-types'


import { useComponentIsActive, useMenuChange } from '../hooks'
import TreeMenu from './tree-menu'
import ListMenu from './list-menu'
import Popover from '../popover'
import SelectorInput from '../selector-input'


const Tree = (props) => {
  const { width, label, menuOptions } = props
  const { ref, componentIsActive, setComponentIsActive } = useComponentIsActive()
  const {
    state: { search, value, placeholder, listMenuOptions, selectedNodes },
    handlers: { setSearch, handleInputClick, onMenuChange, handleSearchClick },
  } = useMenuChange({ ...props, componentIsActive, setComponentIsActive })

  const button = (
    <>
      {label && <p className='font-normal tracking-sm text-sm text-left text-secondary-600 mb-1 ml-0.5'>{label}</p>}
      <SelectorInput
        focus={componentIsActive}
        setFocus={setComponentIsActive}
        value={search || value}
        placeholder={placeholder}
        onClick={handleInputClick}
        onChange={(val) => setSearch(val)}
        width={width}
      />
    </>
  )
  return (
    <div ref={ref} className='inline-block'>
      <Popover open={componentIsActive} button={button}>
        {componentIsActive && !listMenuOptions.length && (
          <TreeMenu menuOptions={menuOptions} onMenuChange={onMenuChange} selectedNodes={selectedNodes} />
        )}
        {(componentIsActive && listMenuOptions.length) ? (<ListMenu width={width} options={listMenuOptions} onClick={handleSearchClick} />) : null}
      </Popover>
    </div>
  )
}

Tree.propTypes = {
  menuOptions: PropTypes.array.isRequired,
  width: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string,
  ]),
  label: PropTypes.string,
}
Tree.defaultProps = {
  width: 'full',
  label: '',
}
export default Tree
