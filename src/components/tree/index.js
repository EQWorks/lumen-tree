import React from 'react'
import PropTypes from 'prop-types'

import { useMenuIsOpen, useMenuChange } from '../hooks'
import Dialog from '../dialog'
import Textfield from '../textfield'
import ListMenu from './list-menu'


const Tree = (props) => {
  const { label, menuOptions } = props
  const { ref, menuIsOpen, setMenuIsOpen } = useMenuIsOpen()
  const {
    state: { search, value, placeholder, listMenuOptions, selectedNodes },
    handlers: { setSearch, handleInputClick, onMenuChange, handleSearchClick },
  } = useMenuChange({ ...props, menuIsOpen, setMenuIsOpen })



  return (
    <div ref={ref}>
      <Textfield
        select
        focus={menuIsOpen}
        value={search || value}
        placeholder={placeholder}
        onClick={handleInputClick}
        onChange={(val) => setSearch(val)}
      />
      <Dialog disablePadding={true} open={menuIsOpen}>
        {/* {menuIsOpen && !listMenuOptions.length && (
          <TreeMenu menuOptions={menuOptions} onMenuChange={onMenuChange} selectedNodes={selectedNodes} />
        )} */}
        {(menuIsOpen && listMenuOptions.length) ? (<ListMenu options={listMenuOptions} onClick={handleSearchClick} />) : null}
      </Dialog>
    </div>
  )
}

Tree.propTypes = { menuOptions: PropTypes.array.isRequired }
export default Tree
