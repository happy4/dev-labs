function memoize(fn) {
  var memory = new Map();
  return function(arg) {
      if (memory.has(arg)) {
          console.log('using memory');
          return memory.get(arg);
      } else {
          var result = fn(arg);
          memory.set(arg, result);
          return result;
      }
  };
}

var fn = (n) => 2 * n
var m_fn = memoize(fn)

console.log(m_fn(2));
console.log(m_fn(3));
console.log(m_fn(2));
