'use strict';

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.top = null;
  }

  push(value) {
    let newNode = new Node(value);
    newNode.next = this.top;
    this.top = newNode;
  }

  pop() {
    if(this.top) {
      this.next = this.top;
    }
    return this.top;
  }

  peek() {
    if(this.top) {
      return this.top;
    }
  }

  isEmpty() {
    if(this.top) {
      return true;
    } else {
      return false;
    }
  }
}
