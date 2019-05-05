//封装栈类
function Stack(argument) {
	// body...
	//栈中的属性
	this.items = [];
	//栈的相关操作
	//添加一个新元素入栈
	Stack.prototype.push = function (argument) {
		// body...
		this.items.push(argument);
	}
	//移除栈顶元素并返回
	Stack.prototype.pop = function () {
		// body...
		return this.items.pop();
	}
	//查看栈顶元素
	Stack.prototype.peek = function () {
		// body...
		return this.items[this.items.length-1];
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
			resultString += this.items[i] + ' ';
		}
		return resultString;
	}
}
//栈的使用
//var stack = new Stack();
//将元素压入到栈中
//stack.push(20);
//stack.push(10);
//stack.push(12);
//stack.push(8);
//stack.push(7);
//console.log(stack);
//移除栈顶元素并返回
//stack.pop()
//console.log(stack);
//查看栈顶元素
//console.log(stack.peek());
//判断栈是否为空
//console.log(stack.isEmpty());
//返回栈中元素的个数
//console.log(stack.size());
//toString
//console.log(stack.toString());
