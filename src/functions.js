const axios = require('axios')

const functions = {
  add: (num1, num2) => num1 + num2,
  isNull: (val) => null,
  checkValue: (val) => val,
  createUser: () => {
    const user = {firstName: 'Bryan'}
    user.lastName = 'Kai'
    return user
  },
  fetchUser: () =>
  axios
    .get('http://jsonplaceholder.typicode.com/users/1')
    .then(res => res.data)
    .catch(err => 'error')
}

module.exports = functions
