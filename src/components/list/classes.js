export const classes = {
  listRoot: ({ border, width, maxWidth }) => Object.values({
    border: `border-2 border-solid border-${border.length ? border : 'lightgrey'}`,
    width: `w-${width} max-w-${maxWidth}`,
  }).join(' '),

  listItemRoot: Object.values({
    border: 'border-2 border-solid border-b-0 border-lightgrey',
    hover: 'hover:bg-primary-10 cursor-pointer',
    padding: 'p-sm',
    flex: 'flex justify-between',
  }).join(' '),

  listLastItem: Object.values({
    border: 'border-2 border-solid border-lightgrey',
    hover: 'hover:bg-primary-10 cursor-pointer',
    padding: 'p-sm',
    flex: 'flex justify-between',
  }).join(' '),

  listNoBorder: Object.values({
    border: 'border-0',
    hover: 'hover:bg-primary-10 cursor-pointer',
    padding: 'p-sm',
    flex: 'flex justify-between',
  }).join(' '),

  listItemSelected: Object.values({
    background: 'bg-primary-20',
  }).join(' '),

  listItem: Object.values({
    margin: 'mx-2',
  }).join(' '),

  startIconGroup: Object.values({
    flex: 'flex justify-between',
  }).join(' '),
}
