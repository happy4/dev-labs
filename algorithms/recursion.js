// reverse
// Write a recursive function called reverse which accepts a string and returns a new string in reverse.
// reverse('awesome') // 'emosewa'
// reverse('rithmschool') // 'loohcsmhtir'

//1st variant
function reverse1(str) {
  if (str.length === 0) { return ''; }
  let arr = [...str];
  let lastEl = arr.splice(-1);
  return lastEl.concat(reverse1(arr.join(''))).join('');
}

// reverse1('awesome') // 'emosewa'

// awesome -> a
// wesome -> w
// esome -> e
// some -> s
// ome -> o
// me -> m
// e -> e

// emosewa
//2nd variant
function reverse2(str) {
  console.log(str);
  if (str.length <= 1) return str;
  return reverse2(str.slice(1)) + str[0];
}

// reverse2('awesome') // 'emosewa'


// isPalindrome('awesome') // false
// isPalindrome('foobar') // false
// isPalindrome('tacocat') // true
// isPalindrome('amanaplanacanalpanama') // true
// isPalindrome('amanaplanacanalpandemonium') // false

function isPalindrome(str) {
  if (str.length < 2) return false;
  function equal(a, b) {
    return a === b;
  }
  return equal(str[0], str.slice(-1))
}

// console.log(isPalindrome('awesome'));
// console.log(isPalindrome('tacocat'));

function capitalizeFirst(arr) {
  if (arr.length === 0) return [];
  return [arr[0].charAt(0).toUpperCase() + arr[0].slice(1), ...capitalizeFirst(arr.slice(1))];
}

// console.log(capitalizeFirst(['aaa', 'bbb', 'ccc'])); -> ['Aaa', 'Bbb', 'Ccc']

function nestedEvenSum(obj) {
  let sum = 0;
  for (let [_, value] of Object.entries(obj)) {
    if (typeof value !== 'number' && typeof value !== 'string') {
      sum += nestedEvenSum(value);
    } else {
      if (Number.isInteger(value) && value % 2 === 0) {
        sum += value;
      }
    }
  }
  return sum;
}

var obj1 = {
  outer: 2,
  obj: {
    inner: 2,
    otherObj: {
      superInner: 2,
      notANumber: true,
      alsoNotANumber: "yup"
    }
  }
}

var obj2 = {
  a: 2,
  b: { b: 2, bb: { b: 3, bb: { b: 12 } } },
  c: { c: { c: 2 }, cc: 'ball', ccc: 5 },
  d: 1,
  e: { e: { e: 2, e1: 4 }, ee: 'car' }
};

// console.log(nestedEvenSum(obj1)); // 6
// console.log(nestedEvenSum(obj2)); // 10

function collectStrings(obj) {
  let arr = [];
  for (let [_, value] of Object.entries(obj)) {
    if (typeof value !== 'string') {
      arr.push(...collectStrings(value));
    } else {
      if (typeof value === 'string') {
        arr.push(value);
      }
    }
  }
  return arr;
}

const obj4 = {
  stuff: "foo",
  data: {
    val: {
      thing: {
        info: "bar",
        moreInfo: {
          evenMoreInfo: {
            weMadeIt: "baz"
          }
        }
      }
    }
  }
}

// console.log(collectStrings(obj4)); -> [ 'foo', 'bar', 'baz' ]

function stringifyNumbers(obj) {
  let res = {};
  for (let [key, value] of Object.entries(obj)) {
    if (typeof value === 'number') {
      res[key] = value.toString();
    } else if (typeof value === 'object' && !Array.isArray(value)) {
      res[key] = stringifyNumbers(value);
    } else {
      res[key] = value;
    }
  }
  return res;
}

var obj3 = {
  num: 1,
  test: [],
  data: {
    val: 4,
    info: {
      isRight: true,
      random: 66
    }
  }
};

// console.log(stringifyNumbers(obj3));

const groupBy = (arr, key) =>
 arr.reduce(
  (acc, obj) => {
      console.log('obj[key]', obj[key], acc, obj);
      return { ...acc, [obj[key]]: [...(acc[obj[key]] || []), obj] }
  },
  {}
 )
