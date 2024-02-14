const {
  removeItemFromArray,
  addItemToArray,
  arrayIncludesItem
} = require('../arrayOperations')

test('removes item from array', () => {
  const array = [1, 2, 3, 4, 5]
  const itemToRemove = 3
  expect(removeItemFromArray(array, itemToRemove)).toEqual([1, 2, 4, 5])
})

test('adds item to array', () => {
  const array = [1, 2, 3, 4, 5]
  const itemToAdd = 6
  expect(addItemToArray(array, itemToAdd)).toEqual([1, 2, 3, 4, 5, 6])
})

test('checks if array includes item', () => {
  const array = [1, 2, 3, 4, 5]
  const item = 3
  expect(arrayIncludesItem(array, item)).toBe(true)
})