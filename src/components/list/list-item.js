import React from 'react'
import PropTypes from 'prop-types'

import clsx from 'clsx'


const defaultBorder = 'border-2 border-solid border-t-0 border-r-0 border-l-0 border-lightgrey'
const ListItem = ({
  name,
  isLastItem,
  divider,
  selected,
  value,
  onClick,
  EndIcon,
  StartIcon,
  width,
  itemBorder,
  borderLastItem,
}) => {
  return (
    <div
      className={clsx(`hover:bg-primary-20 cursor-pointer p-sm flex justify-between w-${width}`, {
        [`${borderLastItem}`]: divider && isLastItem,
        [`${itemBorder}`]: divider && !isLastItem,
        'border-0': !divider,
        'bg-primary-10 text-primary': selected,
      })}
      onClick={() => onClick(value)}
    >
      <div className='flex justify-between'>
        {StartIcon && <StartIcon />}
        <li className='mx-2 font-sans'>{name}</li>
      </div>
      {EndIcon && <EndIcon />}
    </div>
  )
}

ListItem.propTypes = {
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
  itemBorder: PropTypes.string,
  borderLastItem: PropTypes.string,
}
ListItem.defaultProps = {
  isLastItem: false,
  name: '',
  divider: false,
  selected: false,
  value: {},
  onClick: () => {},
  EndIcon: null,
  StartIcon: null,
  width: 'full',
  itemBorder: defaultBorder,
  borderLastItem: 'border-0',
}

export default ListItem
