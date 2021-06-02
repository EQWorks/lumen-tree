import React from 'react'
import PropTypes from 'prop-types'

import { classes } from './classes'


const ListItem = ({
  name,
  isLastItem,
  divider,
  selected,
  value,
  onClick,
  EndIcon,
  StartIcon,
}) => {
  const listClass = divider 
    ? (isLastItem ? classes.listLastItem : classes.listItemRoot)
    : classes.listNoBorder
  const listSelected = selected ? classes.listItemSelected : ''

  return (
    <div className={`${listClass} ${listSelected}`} onClick={() => onClick(value)}>
      <div className={classes.startIconGroup}>
        {StartIcon && <StartIcon />}
        <li className={classes.listItem}>{name}</li>
      </div>
      {EndIcon && <EndIcon />}
    </div>
  )
}

ListItem.propTypes = {
  isLastItem: PropTypes.bool.isRequired,
  name: PropTypes.string,
  divider: PropTypes.bool,
  selected: PropTypes.bool,
  value: PropTypes.object,
  onClick: PropTypes.func,
  EndIcon: PropTypes.any,
  StartIcon: PropTypes.any,
}
ListItem.defaultProps = {
  name: '',
  divider: false,
  selected: false,
  value: {},
  onClick: () => {},
  EndIcon: null,
  StartIcon: null,
}

export default ListItem
