var prop = require('dot-prop')

module.exports = function (path, fn) {
  return function (obj) {
    var val = prop.get(obj, path)
    prop.set(obj, path, fn(val))
  }
}
