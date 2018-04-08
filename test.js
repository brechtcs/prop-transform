var test = require('tape')
var transform = require('./')

test('Map array of objects', function (t) {
  var arr = [{
    name: 'First',
    data: {
      some: 'stuff'
    }
  }, {
    name: 'Second',
    data: {
      some: 'other stuff'
    }
  }]

  arr.map(transform('name', (name, i) => (i + 1) + '. ' + name))
  arr.map(transform('data.some', str => str.toUpperCase()))

  t.equals(arr[0].name, '1. First', 'first name transform')
  t.equals(arr[0].data.some, 'STUFF', 'first nested data transform')
  t.equals(arr[1].name, '2. Second', 'second name transform')
  t.equals(arr[1].data.some, 'OTHER STUFF', 'second nested data transform')
  t.end()
})
