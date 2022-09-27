'use strict';

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  add(value) {
    const node = new Node(value);

    if(!this.head) {
      this.head = node;
      return;
    }

    let current = this.head;

    while(current.next) {
      current = current.next;
    }

    current.next = node;

  }

  traverse() {
    let current = this.head;

    while(current) {
      console.log(current.value);
      current = current.next;
    }
  }

  traverseWithCallback(callback) {
    let current = this.head;

    while(current) {
      callback(current.value);
      current = current.next;
    }
  }
}

let list = new LinkedList();
console.log('empty list', list);

list.add(1);
list.add(2);
list.add(3);
list.add(4);
list.add(5);

list.traverse();



module.exports = LinkedList;
