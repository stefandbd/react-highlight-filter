import { selectedTexts, filterColors } from '../actions'

test('Action: selectedTexts', () => {
  const slct = selectedTexts([{string: "following", color: "Main-green-5"}])
  expect(slct).toEqual({
    type: 'SELECTED_TEXTS',
    payload: [[{string: "following", color: "Main-green-5"}]]
  })
})

test('Action: filterColors', () => {
  const fltr = filterColors({"color": "Main-green-5", "string": "following"})
  expect(fltr).toEqual({
    type: 'FILTER_COLOR',
    payload: {"color": undefined, "value": {"color": "Main-green-5", "string": "following"}}
  })
}) 