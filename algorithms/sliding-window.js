// O(n) solution for finding
// maximum sum of a subarray of size k

function maxSum(arr, k) {
  if (arr.length < k) {
    return null;
  }
  let max = 0;
  let sum = 0;
  for (let i = 0; i < k; i++) {
    max += arr[i]
    sum = max;
  }

  for (let i=k; i < arr.length; i++) {
    sum += arr[i] - arr[i - k];
    if (sum > max) {
      max = sum;
    }
  }

  return max;
}

let arr = [1, 4, 2, 10, 2, 3, 1, 0, 20];
let k = 4;
console.log(maxSum(arr, k));
