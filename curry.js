function curry(func) {
  return function cur(...args) {
    if (args.length >= func.length) {
      return func.apply(this, args);
    } else {
      return function (...args2) {
        return cur.apply(this, args.concat(args2));
      }
    }
  }
};

function sum(a, b, c) {
  return a + b + c;
}

var curriedSum = curry(sum);
console.log(curriedSum(1,2,3))
console.log(curriedSum(1)(2,3))
console.log(curriedSum(1)(2)(3))
