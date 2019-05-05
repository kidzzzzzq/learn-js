//封装队列类
function Queue(){
	//属性
	this.items = [];
	//方法
	//1.将元素加入到队列中
	Queue.prototype.enqueue = function (argument) {
		// body...
		this.items.push(argument);
	}
	//2.从队列中删除元素
	Queue.prototype.dequeue = function () {
		// body...
		return this.items.shift();
	}
	//3.查看前端的元素
	Queue.prototype.front = function(){
		return this.items[0];
	}
	//4.查看队列是否为空
	Queue.prototype.isEmpty = function (){
		return this.items.length == 0;
	}
	//5.查看队列中元素的个数
	Queue.prototype.size = function(){
		return this.items.length;
	}
	//6.toString
	Queue.prototype.toString = function (){
		var resultString = '';
		for (var i = 0; i < this.items.length; i++) {
			resultString += this.items[i] + ' ';
		}
		return resultString;
	}
}
//使用队列
//var queue = new Queue();
//将元素加入到队列中
//queue.enqueue('abc');
//queue.enqueue('cba');
//queue.enqueue('nba');
//queue.enqueue('mba');
//console.log(queue);
//删除队列中的元素
//queue.dequeue();
//console.log(queue);	
//查看前端的元素
//console.log(queue.front());
//查看队列是否为空
//console.log(queue.isEmpty());
//查看队列中元素的个数
//console.log(queue.size());
//toString
//console.log(queue.toString());
