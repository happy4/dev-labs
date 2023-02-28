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
// console.log(maxSum(arr, k));



// Write a function called minSubArrayLen which accepts two parameters - an array of positive integers and a positive integer.
// This function should return the minimal length of a contiguous subarray of which the sum is greater than or equal to the integer passed to the function. If there isn't one, return 0 instead.
// Examples:
// minSubArrayLen([2,3,1,2,4,3], 7) // 2 -> because [4,3] is the smallest subarray
// minSubArrayLen([2,1,6,5,4], 9) // 2 -> because [5,4] is the smallest subarray
// minSubArrayLen([3,1,7,11,2,9,8,21,62,33,19], 52) // 1 -> because [62] is greater than 52
// minSubArrayLen([1,4,16,22,5,7,8,9,10],39) // 3
function minSubArrayLen(nums, sum) {
  let total = 0;
  let start = 0;
  let end = 0;
  let minLen = Infinity;

  while (start < nums.length) {
    // if current window doesn't add up to the given sum then
		// move the window to right
    if(total < sum && end < nums.length){
      total += nums[end];
			end++;
    }
    // if current window adds up to at least the sum given then
		// we can shrink the window
    else if(total >= sum){
      minLen = Math.min(minLen, end-start);
			total -= nums[start];
			start++;
    }
    // current total less than required total but we reach the end, need this or else we'll be in an infinite loop
    else {
      break;
    }
  }

  return minLen === Infinity ? 0 : minLen;
}

console.log('minSubArrayLen([2,3,1,2,4,3], 7)', minSubArrayLen([2,3,1,2,4,3], 7));
console.log('minSubArrayLen([2,1,6,5,4], 9)', minSubArrayLen([2,1,6,5,4], 9));



function findLongestSubstring(str) {
  let longest = 0;
  let seen = {};
  let start = 0;

  for (let i = 0; i < str.length; i++) {
    let char = str[i];
    console.log('seen', seen);
    if (seen[char]) {
      start = Math.max(start, seen[char]);
    }
    console.log('start', start);
    // index - beginning of substring + 1 (to include current in count)
    longest = Math.max(longest, i - start + 1);
    console.log('longest', longest);
    // store the index of the next char so as to not double count
    seen[char] = i + 1;
  }
  return longest;
}

console.log(findLongestSubstring('rithmschool'));
console.log(findLongestSubstring('thisisawesome'));

