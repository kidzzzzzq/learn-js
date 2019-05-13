function Stack(element) {
	// body...
	this.items = [];
	//增
	Stack.prototype.pop = function (element) {
		// body...
		return this.items.push(elements);
	}
	//删(移除栈顶元素并返回)
	Stack.prototype.pop = function () {
		// body...
		return this.items.pop();
	}
	//查(查看栈顶元素)
	Stack.prototype.peek = function () {
		// body...
		return this.items[this.items.length - 1];
	}
	//判断栈是否为空
	Stack.prototype.isEmpty = function () {
		// body...
		return this.items.length == 0;
	}
	//返回栈中元素的个数
	Stack.prototype.size = function () {
		// body...
		return this.items.length;
	}
	//toString
	Stack.prototype.toString = function () {
		// body...
		var resultString = '';
		for (var i = 0; i < this.items.length; i++) {
			resultString += this.items[i] + ','
		}
		return resultString;
	}
}