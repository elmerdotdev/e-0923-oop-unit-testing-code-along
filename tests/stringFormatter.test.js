const StringFormatter = require('../stringFormatter')

describe('String Formatter', () => {
  let formatter;

  beforeEach(() => {
    formatter = new StringFormatter()
  })

  test('capitalizes first letter of string', () => {
    expect(formatter.capitalizeFirstLetter('hello')).toBe('Hello')
  })

  test('converts string to snake case', () => {
    expect(formatter.toSnakeCase('hello world')).toBe('hello_world')
  })

  test('reverses string', () => {
    expect(formatter.reverseString('hello')).toBe('olleh')
  })
})