const flattenDeep = (arr) => {
  return arr.reduce((acc, cur) => acc.concat(Array.isArray(cur) ? flattenDeep(cur) : cur), [])
};

const arr = [[1,2],[3,[4,[5]]]];

const flattened = flattenDeep(arr);
console.log(flattened);
