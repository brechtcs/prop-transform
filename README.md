# prop-transform

Wrapper function for `dot-prop`, suitable for usage as an array mapper.

## Example

```js
var transform = require('prop-transform')
var data = [{
  nested: {
    prop: 'stuff'
  }
}, {
  nested: {
    prop: 'other'
  }
}]

var output = data.map(transform('nested.prop', value => value.toUpperCase()))
console.log(output[0].nested.prop) // 'STUFF'
console.log(output[1].nested.prop) // 'OTHER'
```

## License

Apache-2.0
