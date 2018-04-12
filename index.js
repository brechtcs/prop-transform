var clone = require('clone')
var prop = require('dot-prop')

module.exports = function (path, fn) {
  return function (obj, i, arr) {
    var object = Object.assign({}, obj)
    var val = prop.get(obj, path)
    prop.set(object, path, fn(clone(val), i, arr))
    return object
  }
}
