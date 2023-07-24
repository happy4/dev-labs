/**
 * Determine if given list is sorted in ascending order.
 *
 * @param {number[]} list - list of numbers in arbitrary order
 *
 * @return {boolean} true if list is sorted in ascending order, false otherwise
 */
 function checkIsListSorted ( list ) {
  let isSorted = true;
  for (let i=0; i < list.length - 1; i++) {
    if (list[i] > list[i+1]) {
      isSorted = false;
      break;
    }
  }
  return isSorted;
  // return list.every((curVal, i) => {return i === 0 || curVal >= list[i - 1]});
}


// tests
console.assert(checkIsListSorted([]));
console.assert(checkIsListSorted([5, 1, 0, 6, 10, -24]));
console.assert(checkIsListSorted([100, 100]));
console.assert(checkIsListSorted([-15, -39, 0, 0, 0.1, -1.5]));
console.assert(checkIsListSorted([2, 15, 39]));

