function randomInteger(min, max) {
  let rand = min + Math.random() * (max + 1 - min);
  return Math.floor(rand);
}

console.log(randomInteger(1.5, 5.5));
console.log(randomInteger(2.6, 7.5));
