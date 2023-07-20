// Creates a throttled function that only invokes "fn" at most once per every "delayMs" milliseconds
function throttle(fn, delayMs) {
  let timeout; // timeout to keep track of the executions
  return (...args) => {
    if (timeout) { // if timeout is set, this is NOT the first execution, so ignore
      return;
    }
    // this is the first execution which we need to delay by "delayMs" milliseconds
    timeout = setTimeout(() => {
      fn(...args); // call the passed function with all arguments
      timeout = null; // reset timeout so that the subsequent call launches the process anew
    }, delayMs);
  }
}

function debounce(fn, timeoutMs) {
  let timeout;
  return (...args) => {
    clearTimeout(timeout); // clear timeout every time the function is called
    timeout = setTimeout(() => fn(...args), timeoutMs); // call the original function once "timeoutMs" ms after the last call have elapsed
  };
}

///////////////////////////////////// groupBy array of objects by field

// const products = [
//   { name: 'apples', category: 'fruits' },
//   { name: 'oranges', category: 'fruits' },
//   { name: 'potatoes', category: 'vegetables' }
// ];


// const groupByCategory = {
//   'fruits': [
//     { name: 'apples', category: 'fruits' },
//     { name: 'oranges', category: 'fruits' },
//   ],
//   'vegetables': [
//     { name: 'potatoes', category: 'vegetables' }
//   ]
// };

const groupByCategory = products.reduce((group, product) => {
  const { category } = product;
  group[category] = group[category] ?? [];
  group[category].push(product);
  return group;
}, {});
console.log(groupByCategory);


////////////////////////////////////////////// curry
function curry(func) {
  return function curried(...args) {
    if (args.length >= func.length) {
      return func.apply(this, args);
    } else {
      return function(...args2) {
        return curried.apply(this, args.concat(args2));
      }
    }
  };
}


// function sum(a, b, c) {
//   return a + b + c;
// }

// let curriedSum = curry(sum);

// alert( curriedSum(1, 2, 3) ); // 6, всё ещё можно вызывать нормально
// alert( curriedSum(1)(2,3) ); // 6, каррирование первого аргумента
// alert( curriedSum(1)(2)(3) ); // 6, каррирование всех аргументов


// console.log(isPalindrom('tenet')); => true
// console.log(isPalindrom('tenet1')); => false
// console.log(isPalindrom('racecar')); => true
const isPalindrom = (str) => {
  const length = str.length;
  const mid = Math.floor(length/2);
  for (let i = 0; i < mid; i++) {
    if (str[i] !== str[length - 1 - i])  return false;
  }
  return true;
}


const findAllDuplicatesInArray = arr => arr.filter((val, index) => index !== arr.indexOf(val));


const flattenDeep = (arr) => {
  return arr.reduce((acc, cur) => acc.concat(Array.isArray(cur) ? flattenDeep(cur) : cur), [])
};

const arr = [[1,2],[3,[4,[5]]]];

const flattened = flattenDeep(arr);
console.log(flattened);


/////FlatMap
const arr1 = ["it's Sunny in", "", "California"];
const myFlatMap = (arr1) => arr1.reduce((acc, cur) => { return acc.concat(cur.split(' ')) }, [])
// arr1.flatMap((x) => x.split(" ")); -> ["it's","Sunny","in", "", "California"]


function bind(func, context) {
  return function() { // (*)
    return func.apply(context, arguments);
  };
}

