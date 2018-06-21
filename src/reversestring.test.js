const reverseString = require('./reverseString')

test('reverseString funciton exists', () => {
  expect(reverseString).toBeDefined()
})

test('reverseString reverses', () => {
  expect(reverseString('hello')).toEqual('olleh')
})
