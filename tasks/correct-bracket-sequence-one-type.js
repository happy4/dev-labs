/**
 * Check for correct bracket sequence of one type of brackets.
 * Correct bracket sequence can be defined as:
 * 1) empty string;
 * 2) correct bracket sequence inside another correct bracket sequence;
 * 3) sequence of correct bracket sequences.
 *
 * Let's use "()" as brackets.
 *
 * @param {string} sequence - string consists of left and right brackets in arbitrary order
 *
 * @return {boolean} result of checking sequence for correctness
 */
function check ( sequence ) {
    let stack = [];
    let i = 0;

    while (i < sequence.length) {
      if (sequence[i] === '(') {
        stack.push(sequence[i]);
        i++;
        continue;
      }
      if (stack.length === 0) {
        return false;
      }
      if (sequence[i] === ')') {
        let prevItem = stack.pop();
        if (prevItem !== '(') {
          break;
        } else {
          i++;
        }
      }
    }
    return (stack.length === 0);;
}

// tests

// correct
console.assert(check(''));
console.assert(check('()'));
console.assert(check('(())'));
console.assert(check('(()())'));
console.assert(check('(())()()(())'));

// incorrect
console.assert(!check(')'));
console.assert(!check('('));
console.assert(!check('(())('));
console.assert(!check(')()()(()'));
console.assert(!check('()((()(()(()))))))())))))(()'));
