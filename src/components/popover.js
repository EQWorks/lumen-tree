import React, { Fragment } from 'react'
import PropTypes from 'prop-types'

import { Popover as HeadlessPopover, Transition } from '@headlessui/react'


const Popover = ({ children, button, open }) => {
  return (
    <HeadlessPopover>
      <HeadlessPopover.Button as='div'>{button}</HeadlessPopover.Button>

      {open && (<Transition
        as={Fragment}
        show={open}
        enter='transition ease-in duration-75'
        enterFrom='transform opacity-0 scale-100'
        enterTo='transform opacity-100 scale-100'
        leave='transition ease-out duration-100'
        leaveFrom='transform opacity-100 scale-100'
        leaveTo='transform opacity-0 scale-100'
      >
        <HeadlessPopover.Panel static>{children}</HeadlessPopover.Panel>
      </Transition>
      )}
    </HeadlessPopover>
  )
}

Popover.propTypes = {
  children: PropTypes.node.isRequired,
  button: PropTypes.oneOfType([
    PropTypes.string.isRequired,
    PropTypes.number.isRequired,
    PropTypes.node.isRequired,
  ]),
  open: PropTypes.bool.isRequired,
}


export default Popover
