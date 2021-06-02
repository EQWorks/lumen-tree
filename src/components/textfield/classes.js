export const classes = {
  root: ({ width }) => Object.values({
    border: 'border border-solid border-grey rounded-sm',
    flex: 'flex justify-start',
    padding: 'p-sm',
    width: `w-${width}`,
  }).join(' '),

  focus: ({ width }) => Object.values({
    border: 'border border-solid border-primary rounded-sm shadow-focus',
    flex: 'flex justify-start',
    padding: 'p-sm',
    width: `w-${width}`,
  }).join(' '),

  input: Object.values({
    border: 'focus:outline-none',
    width: 'w-full',
    text: 'text-primary',
  }).join(' '),

  icon: Object.values({
    margin: 'mt-0.5 mx-1',
  }).join(' '),
}
