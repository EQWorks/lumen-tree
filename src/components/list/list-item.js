import React from 'react'
import PropTypes from 'prop-types'

import clsx from 'clsx'


const ListItem = ({
  classes,
  name,
  divider,
  selected,
  value,
  onClick,
  EndIcon,
  StartIcon,
  width,
}) => {
  return (
    <div
      className={clsx(`flex justify-between hover:bg-neutral-100 cursor-pointer p-sm ${width} tracking-sm text-sm`, {
        'border-0': !divider,
        'bg-interactive-100 font-semibold text-secondary-900': selected,
        'font-normal text-secondary-800': !selected,
      })}
      onClick={() => onClick(value)}
    >
      <div className='flex justify-between'>
        <span>{StartIcon && <StartIcon />}</span>
        <li className='mx-2'>{name}</li>
      </div>
      <span className={classes.endIcon}>{EndIcon && <EndIcon />}</span>
    </div>
  )
}

ListItem.propTypes = {
  classes: PropTypes.object,
  isLastItem: PropTypes.bool,
  name: PropTypes.string,
  divider: PropTypes.bool,
  selected: PropTypes.bool,
  value: PropTypes.object,
  onClick: PropTypes.func,
  EndIcon: PropTypes.any,
  StartIcon: PropTypes.any,
  width: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string,
  ]),
}
ListItem.defaultProps = {
  classes: { endIcon: '' },
  isLastItem: false,
  name: '',
  divider: false,
  selected: false,
  value: {},
  onClick: () => {},
  EndIcon: null,
  StartIcon: null,
  width: 'full',
}

export default ListItem
