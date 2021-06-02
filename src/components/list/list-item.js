import React from 'react'
import PropTypes from 'prop-types'

import { classes } from './classes'


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
  const listClass = divider 
    ? (isLastItem ? classes.listLastItem({ borderLastItem }) : classes.listItemRoot({ itemBorder }))
    : classes.listNoBorder
  const listSelected = selected ? classes.listItemSelected : ''

  return (
    <div className={`${listClass} ${listSelected} w-${width}`} onClick={() => onClick(value)}>
      <div className={classes.startIconGroup}>
        {StartIcon && <StartIcon />}
        <li className={classes.listItem}>{name}</li>
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
