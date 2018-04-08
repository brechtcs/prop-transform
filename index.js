var clone = require('clone')
var prop = require('dot-prop')

module.exports = function (path, fn) {
  return function (obj, i, arr) {
    var object = clone(obj)
    var val = prop.get(object, path)
    prop.set(object, path, fn(val, i, arr))
    return object
  }
}
