// Multiple Pointers - countUniqueValues
// Implement a function called countUniqueValues, which accepts a sorted array, and counts the unique values in the array. There can be negative numbers in the array, but it will always be sorted.

// countUniqueValues([1,1,1,1,1,2]) // 2
// countUniqueValues([1,2,3,4,4,4,7,7,12,12,13]) // 7
// countUniqueValues([]) // 0
// countUniqueValues([-2,-1,-1,0,1]) // 4
// Time Complexity - O(n)
// Space Complexity - O(n)

function countUniqueValues(arr) {
  const uniqueValues = [];
  let i = 0;
  let j = 1;
  let arrSize = arr.length;
  while (j <= arrSize) {
    if (arr[i] === arr[j]) {
      j++;
    } else {
      uniqueValues.push(arr[i]);
      i = j;
    }
  }
  return uniqueValues.length;
}


// averagePair([1,2,3],2.5) // true
// averagePair([1,3,3,5,6,7,10,12,19],8) // true
// averagePair([-1,0,3,4,5,6], 4.1) // false
// averagePair([],4) // false
function averagePair(arr, average) {
  let i = 0;
  let j = 1;
  while (i < arr.length) {
    if ((arr[i] + arr[j]) / 2 !== average) {
      if (j < arr.length) {
        j++;
      } else {
        j = i;
        i++;
      }
    } else {
      return true;
    }
  }
  return false;
}

// isSubsequence('hello', 'hello world'); // true
// isSubsequence('sing', 'sting'); // true
// isSubsequence('abc', 'abracadabra'); // true
// isSubsequence('abc', 'acb'); // false (order matters)
function isSubsequence(str1, str2) {
  if (str2.length < str1.length) return false;
  let i = 0;
  let j = 0;
  while (j <= str2.length) {
    if (str1[i] === str2[j]) {
      if (i === str1.length - 1) {
        return true;
      }
      i++;
    }
    j++;
  }
  return false;
}

console.log(isSubsequence('hello', 'hello world'));
console.log(isSubsequence('sing', 'sting'));
console.log(isSubsequence('abc', 'abracadabra'));
console.log(isSubsequence('abc', 'acb'));
