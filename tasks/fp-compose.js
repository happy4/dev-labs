/**
 * Create Function Composition.
 *
 * @see {@link https://en.wikipedia.org/wiki/Function_composition_(computer_science)}
 *
 * @example
 * const addEyes = part => ':' + part;
 * const addNose = part => '-' + part;
 * const addSmile = () => ')';
 *
 * compose(addEyes, addNose, addSmile)(); // :-)
 */


function compose ( ...funcs ) {
  return function() {
    return funcs.reduce((result, func) => result += func(), '');
  }
}

const addEyes = (part = '') => ':' + part;
const addNose = (part = '') => '-' + part;
const addSmile = (part = '') => ')' + part;

console.assert(compose(addEyes, addNose, addSmile)() === ':-)', 'strange face detected');
console.assert(compose(addSmile, addNose, addEyes)() === ')-:', 'not so sad');