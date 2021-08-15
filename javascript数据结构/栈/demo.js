class Stack {
  constructor() {
    this.items = [];
    this.length = 0;
  }
  
  // 将元素放入到栈中
  push(element) {
    this.items.push(element);
    this.length++;
    return element
  };

  // 删除栈顶元素
  pop() {
    const element = this.items.pop();
    this.length = this.length === 0 ? this.length - 1 : 0;
    return element;
  }

  // 返回栈顶元素， 但是不删除元素
  peek() {
    const element = this.items[this.length - 1];
    return element;
  }

  // @return {boolean} 返回栈元素是否为空
  isEmpty() {
    return this.length === 0;
  }

  // 返回元素在栈中的位置， 若没有则返回 -1
  indexOf(element) {
    return this.items.indexOf(element);
  }
  
}

const stack = new Stack();

stack.push('demo');
const ele = stack.indexOf('demo');
console.log(ele, 'ele');
const isEmpty = stack.isEmpty();
console.log(isEmpty, 'isEmpty');

stack.pop();
const isEmpty1 = stack.isEmpty();
console.log(isEmpty1, 'isEmpty1');
