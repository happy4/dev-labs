// console.log(isPalindrom('tenet')); => true
// console.log(isPalindrom('tenet1')); => false
// console.log(isPalindrom('racecar')); => true
const isPalindrom = (str) => {
  const length = str.length;
  const mid = Math.floor(length/2);
  for (let i = 0; i < mid; i++) {
    if (str[i] !== str[length - 1 - i])  return false;
  }
  return true;
}
