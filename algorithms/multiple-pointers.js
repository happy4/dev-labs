// Multiple Pointers - countUniqueValues
// Implement a function called countUniqueValues, which accepts a sorted array, and counts the unique values in the array. There can be negative numbers in the array, but it will always be sorted.

// countUniqueValues([1,1,1,1,1,2]) // 2
// countUniqueValues([1,2,3,4,4,4,7,7,12,12,13]) // 7
// countUniqueValues([]) // 0
// countUniqueValues([-2,-1,-1,0,1]) // 4
// Time Complexity - O(n)
// Space Complexity - O(n)

function countUniqueValues(arr){
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
