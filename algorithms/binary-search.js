//Works when the array has already been sorted.
// Time Complexity - log(n)
const binarySearch = (array, element) => {
  let left = 0;
  let right = array.length;

  let index = -1;
  while (left <= right) {
    const mid = Math.floor((left + right) / 2);

    if (element === array[mid]) {
      index = mid;
      break;
    }
    if (element < array[mid]) {
      right = mid - 1;
    } else {
      left = mid + 1;
    }

  }
  return index;
};

// binarySearch([1,3,2,4,7,9,8], 8);


console.log(binarySearch([1, 2, 3, 4, 5], 2)) // 1
console.log(binarySearch([1, 2, 3, 4, 5], 3)) // 2
console.log(binarySearch([1, 2, 3, 4, 5], 5)) // 4
console.log(binarySearch([1, 2, 3, 4, 5], 6)) // -1
console.log(binarySearch([
  5, 6, 10, 13, 14, 18, 30, 34, 35, 37,
  40, 44, 64, 79, 84, 86, 95, 96, 98, 99
], 10)) // 2
console.log(binarySearch([
  5, 6, 10, 13, 14, 18, 30, 34, 35, 37,
  40, 44, 64, 79, 84, 86, 95, 96, 98, 99
], 95)) // 16
console.log(binarySearch([
  5, 6, 10, 13, 14, 18, 30, 34, 35, 37,
  40, 44, 64, 79, 84, 86, 95, 96, 98, 99
], 100)) // -1

//recursive binary search
function recursiveBinarySearch(n, arr) {
  let mid = Math.floor(arr.length / 2);
  if (arr.length === 1 && arr[0] != n) {
    return false;
  }
  if (n === arr[mid]) {
    return true;
  } else if (n < arr[mid]) {
    return recursiveBinarySearch(n, arr.slice(0, mid));
  } else if (n > arr[mid]) {
    return recursiveBinarySearch(n, arr.slice(mid));
  }
}

