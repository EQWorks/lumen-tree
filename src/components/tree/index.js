import React from 'react'
import PropTypes from 'prop-types'

import { useMenuIsOpen, useMenuChange } from '../hooks'
import Dialog from '../dialog'
import Textfield from '../textfield'
import TreeMenu from './tree-menu'
import ListMenu from './list-menu'


const Tree = (props) => {
  const { width, label, menuOptions } = props
  const { ref, menuIsOpen, setMenuIsOpen } = useMenuIsOpen()
  const {
    state: { search, value, placeholder, listMenuOptions, selectedNodes },
    handlers: { setSearch, handleInputClick, onMenuChange, handleSearchClick },
  } = useMenuChange({ ...props, menuIsOpen, setMenuIsOpen })

  return (
    <div ref={ref}>
      {label && <p className='text-xs text-left text-primary font-sans tracking-tighter mb-px'>{label}</p>}
      <Textfield
        select
        focus={menuIsOpen}
        value={search || value}
        placeholder={placeholder}
        onClick={handleInputClick}
        onChange={(val) => setSearch(val)}
        width={width}
        customClasses={value ? 'border-primary bg-primary-10' : ''}
      />
      <Dialog disablePadding={true} open={menuIsOpen}>
        {menuIsOpen && !listMenuOptions.length && (
          <TreeMenu menuOptions={menuOptions} onMenuChange={onMenuChange} selectedNodes={selectedNodes} />
        )}
        {(menuIsOpen && listMenuOptions.length) ? (<ListMenu width={width} options={listMenuOptions} onClick={handleSearchClick} />) : null}
      </Dialog>
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
