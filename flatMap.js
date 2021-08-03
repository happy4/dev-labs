Array.prototype.flatMap1 = function(lambda) {return Array.prototype.concat.apply([], this.map(lambda))};

const res = [0, 1, 2, 3, 4, 5].flatMap1(function(x) {
  return [x, x + 1];
});
console.log(res);

const res2 = [0, 1, 2, 3, 4, 5].flatMap(function(x) {
  return [x, x + 1];
});

console.log(res2);


var arr1 = [1, 2, 3, 4];

const a = arr1.flatMap(x => [x * 2]);
console.log(a);
// is equivalent to
const b = arr1.reduce((acc, x) => acc.concat([x * 2]), []);
console.log(b);
// [2, 4, 6, 8]



let sentences = [
  "JavaScript Array flatMap()",
  " ",
  "is",
  " ",
  "Awesome"
];

let words = sentences.flatMap(s => s.split(' '));
console.log(words);
