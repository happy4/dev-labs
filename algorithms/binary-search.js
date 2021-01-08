//Works when the array has already been sorted.
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
  console.log(index);
};

binarySearch([1,3,2,4,7,9,8], 8);