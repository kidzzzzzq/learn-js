function Queue() {
	// body...
	this.items = [];
	//增
	Queue.prototype.enqueue = function(element) {
		// body...
		this.items.push(element);
	};
	//删
	Queue.prototype.dequeue = function () {
		// body...
		return this.itmes.shift();
	};
	//查看前端的元素
	Queue.prototype.front = function () {
		// body...
		return this.items[0];
	};
	//查看队列是否为空
	Queue.prototype.isEmpty = function () {
		// body...
		return this.items.length == 0;
	};
	//查看队列中元素的个数
	Queue.prototype.size = function () {
		// body...
		return this.items.length;
	};
	//toString
	Queue.prototype.toString = function () {
		// body...
		var resultString = '';
		for (var i = 0; i < this.items.length; i++) {
			resultString += this.items[i] + ',';
		};
		return resultString;
	};
};