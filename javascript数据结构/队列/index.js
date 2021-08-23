class Queue {
    constructor() {
			this.items = [];
			this.length = 0;			
    }

		// 向队列中添加元素
		add(element) {
			this.length++;
			return this.items.push(element);
		}

		// 返回队列头部元素
		peek() {
			return this.items[0];
		}

		// 移除并返回队列头部元素
		poll() {
			return this.items.shift();
		}
}

const queue = new Queue();
queue.add('1');
const length = queue.length; 
console.log(length);