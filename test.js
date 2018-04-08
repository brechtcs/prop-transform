var test = require('tape')
var transform = require('./')

test('Map array of objects', function (t) {
  var output
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

  output = arr
    .map(transform('name', (name, i) => (i + 1) + '. ' + name))
    .map(transform('data.some', str => str.toUpperCase()))

  t.equals(output[0].name, '1. First', 'first name transform')
  t.equals(output[0].data.some, 'STUFF', 'first nested data transform')
  t.equals(output[1].name, '2. Second', 'second name transform')
  t.equals(output[1].data.some, 'OTHER STUFF', 'second nested data transform')
  t.equals(arr[0].name, 'First', 'first name transform')
  t.equals(arr[0].data.some, 'stuff', 'first nested data transform')
  t.equals(arr[1].name, 'Second', 'second name transform')
  t.equals(arr[1].data.some, 'other stuff', 'second nested data transform')
  t.end()
})
