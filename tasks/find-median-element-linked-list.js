/**
 * Find a middle/median element of given Linked List.
 *
 * @param {Object} list - Linked List
 * @example
 * { data: 1, next: { data: 2, next: null } }
 *
 * @return {Object} reference to node which is middle element of given list
 */
 function getMedianItem ( list ) {
  if (!list) {
    return;
  }

  let size = 1;

  let currentNode = { data: list.data, next: list.next };

  while(currentNode.next) {
    size++;
    currentNode = currentNode.next;
  }
  const mid = Math.floor(size/2);

  currentNode = { data: list.data, next: list.next };
  let index = 0;

  while(currentNode) {
    if (mid === index) {
      break;
    }
    index++;
    currentNode = currentNode.next;
  }

  return {
    data: currentNode.data
  };
}

// driver code
const node = (data, next) => ({data, next});
const createSingleLinkedList = dataset => {
  return dataset.reduceRight((head, item) => node(item, head), null);
};

// tests
console.assert(getMedianItem(createSingleLinkedList([100, 0, 1, 3, 2022])).data === 1);
console.assert(getMedianItem(createSingleLinkedList(['foo', 'bar'])).data === 'bar');
console.assert(getMedianItem(createSingleLinkedList([1, 2, 3, 4, 5, 6, 7])).data === 4);
console.assert(getMedianItem(createSingleLinkedList([1000, 2000, 4000, 0])).data === 4000);
