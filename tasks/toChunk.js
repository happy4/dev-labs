//Implement a chunk function that creates an array of elements split into groups the length of size
const toChunk = chunkSize => {
  let i,j, temporary;
  const arr = [1, 3, 4, 5, 6, 8, 9, 4, 2];
  for (i = 0, j = arr.length; i < j; i += chunkSize) {
    temporary = arr.slice(i, i + chunkSize);
    console.log(temporary);
  }
}

toChunk(2);
toChunk(5);
