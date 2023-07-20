// console.log(isPalindrom('tenet')); => true
// console.log(isPalindrom('tenet1')); => false
// console.log(isPalindrom('racecar')); => true
// const isPalindrom = (str) => {
//   const middle = Math.floor(str.length / 2);
//   let i = 0;
//   while(i < middle) {
//     if (str[i] !== str[str.length - i - 1]) {
//       return false;
//     }
//     i++;
//   }
//   return true;
// }

// console.log(findAllDuplicatesInArray([1,1,3,4])); => [1]
// console.log(findAllDuplicatesInArray([1,2,3])); => []
// console.log(findAllDuplicatesInArray([1,1,1,2,3,4,4,5,6,6])); => [1,1,4,6]
// function findAllDuplicatesInArray(arr) {
//   return arr.filter((el, index) => index != arr.indexOf(el));
// }

// console.log(flattenDeep([[1,1],3,4])); => [1,1,3,4]
// console.log(flattenDeep([[1,2,[3, [4]]],5,5,3, [7]])); => [1,2,3,4,5,5,3,7]
// console.log(flattenDeep([1,2,4])); => [1,2,4]
// const flattenDeep = (arr) => {
//   return arr.reduce((acc, cur) =>  acc.concat(Array.isArray(cur) ? flattenDeep(cur) : cur), []);
// }


// const myFlatMap = (arr, func) => {
//   return arr.reduce((acc, cur) => acc.concat(func(cur)), []);
// }

// console.log(myFlatMap([1, 2, 3, 4], x => [x * 2]));

// const reduce = (arr, cb, initVal) => {
//   let acc = initVal ? initVal : arr[0];
//   for (let i = initVal ? 0 : 1, length = arr.length; i < length; i++) {
//     acc = cb(acc, arr[i], i, arr);
//   }
//   console.log('acc', acc);
//   return acc;
// }

// reduce([0, 1, 2, 3, 4], function(previousValue, currentValue, index, array) {
//   return previousValue + currentValue;
// });

const reducedFilter = (arr, keys, fn) =>
  arr.filter(fn).map((el) =>
    keys.reduce((a, k) => {
      console.log(el, a, k);
      a[k] = el[k]
      return a
    }, {})
  )

const data = [
  {
    id: 1,
    name: 'John',
    age: 23
  },
  {
    id: 2,
    name: 'Jane',
    age: 32
  }
]

console.log(reducedFilter(data, ['id', 'name'], (i) => i.age > 23));


// Генерирования последовательности чисел
Array.from({ length: 5 }, (v, k) => k);
// [0, 1, 2, 3, 4]


// Emulating private members - WeakMap (can be done with closures)
 const privateScope = new WeakMap();
  let counter = 0;

  Thing = function () {
    this.someProperty = "foo";

    privateScope.set(this, {
      hidden: ++counter,
    });
  };

  Thing.prototype.showPublic = function () {
    return this.someProperty;
  };

  Thing.prototype.showPrivate = function () {
    return privateScope.get(this).hidden;
  };
