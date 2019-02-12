export const filterColors = (value, color) => ({
  type: 'FILTER_COLOR',
  payload: { value, color },
});

export const selectedTexts = (value) => ({
  type: 'SELECTED_TEXTS',
  payload : [value]
});


  