export const classes = {
  root: Object.values({
    border: 'border border-solid border-grey rounded-sm',
    flex: 'flex justify-start',
    padding: 'p-sm',
  }).join(' '),

  focus: Object.values({
    border: 'border border-solid border-primary rounded-sm shadow-focus',
    flex: 'flex justify-start',
    padding: 'p-sm',
  }).join(' '),

  input: Object.values({
    border: 'focus:outline-none',
    width: 'w-full',
  }).join(' '),

  icon: Object.values({
    margin: 'mt-0.5 mx-1',
  }).join(' '),
}
