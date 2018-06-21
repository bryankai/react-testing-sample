const functions = require('./functions')
const axios = require('axios')

// beforeEach(() => initDatabase())
// afterEach(() => closeDatabase())
//
// beforeAll(() => initDatabase())
// afterAll(() => closeDatabase())
//
// const initDatabase = () => console.log('Database Initialized...')
// const closeDatabase = () => console.log('Database Closed...')

const nameCheck = () => console.log('Checking Name...')

describe('checking Names', () => {
  beforeEach(() => nameCheck())

  test('User is Jeff', () => {
    const user = 'Jeff'
    expect(user).toBe('Jeff')
  })
  test('User is Karen', () => {
    const user = 'Karen'
    expect(user).toBe('Karen')
  })

})


test('Adds 2 + 2 to equal 4', () => {
  expect(functions.add(2,2)).toBe(4);
})

test('Should be null', () => {
  expect(functions.isNull(4)).toBeNull();
})

test('Should be falsy', () => {
  expect(functions.checkValue(undefined)).toBeFalsy();
})

test('User should be Brad object', () => {
  expect(functions.createUser()).toEqual({
    firstName: 'Bryan',
    lastName: 'Kai'
  })
})

test('Should be under 1600', () => {
  const load1 = 2000
  const load2 = 1100
  expect(load1 + load2).toBeLessThan(1600)
  expect(load1 - load2).toBeLessThan(1000)
})

test('There is no I in team', () => {
  expect('team').not.toMatch(/I/)
})

//Working with async data
// Promise
// test('User fetch name should be Leanne Graham', () => {
//   expect.assertions(1)
//   functions.fetchUser()
//     .then(data => {
//       expect(data.name).toEqual('Leanne Graham')
//     })
// })

// Async await
test('User fetch name should be Leanne Graham as async await', async () => {
  expect.assertions(1)
  const data = await functions.fetchUser()
  expect(data.name).toEqual('Leanne Graham')
})
