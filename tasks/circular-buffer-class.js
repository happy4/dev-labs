/**
 * Implement Circular Buffer class with basic functionality.
 * Circular Buffer (or Ring Buffer) is a data structure which uses fixed-length FIFO buffer.
 * If next item overflowed a buffer, the oldest one is dropped.
 *
 * @example
 * const linksBuffer = new CircularBuffer(3);
 *
 * linksBuffer.list(); // []
 * linksBuffer.push('URL 1');
 * linksBuffer.push('URL 2');
 * linksBuffer.push('URL 3');
 * linksBuffer.list(); // ['URL 1', 'URL 2', 'URL 3']
 * [...linksBuffer]; // ['URL 1', 'URL 2', 'URL 3'] => buffer is iterable
 * linksBuffer.push('URL 4');
 * linksBuffer.list(); // ['URL 2', 'URL 3', 'URL 4'] => oldest entry dropped
 */

class CircularBuffer {

  size = 0;
  pointer = 0;
  arr = [];

  constructor(size) {
    this.size = size;
    this.arr = new Array(size);
  }

  list() {
    return this.arr.filter(Boolean);
  }

  push(el) {
    if (this.pointer < this.size) {
      this.arr[this.pointer] = el;
      this.pointer++;
    } else {
      this.pointer = 0;
      this.push(el);
    }
  }

  [Symbol.iterator]() {
    let current = 0;
    const length = this.arr.length;
    return {
      next() {
        if (current < length) {
          return {
            done: false,
            value: current++
          }
        } else {
          return {
            done: true
          }
        }
      }
    }
  }
}

const linksBuffer = new CircularBuffer(3);
linksBuffer.list(); // []
linksBuffer.push('URL 1');
// linksBuffer.push('URL 2');
// linksBuffer.push('URL 3');

console.log(linksBuffer.list()); // ['URL 1', 'URL 2', 'URL 3']
console.log('iterator..');
[...linksBuffer]; // ['URL 1', 'URL 2', 'URL 3'] => buffer is iterable
// linksBuffer.push('URL 4');
// linksBuffer.push('URL 5');
// linksBuffer.push('URL 6');
// linksBuffer.push('URL 7');

console.log(linksBuffer.list()); // ['URL 2', 'URL 3', 'URL 4'] => oldest entry dropped