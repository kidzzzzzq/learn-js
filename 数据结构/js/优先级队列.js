//封装优先级队列
function PriorityQueue() {
	// body...
	//内部类	
	function QueueElement(element,priority) {
		// body...
		this.element = element;
		this.priority = priority;
	}
	this.items = [];
	//增
	PriorityQueue.prototype.enqueue = function(element,priority) {
		// body...
		var queueElement = new QueueElement(element,priority);
		//队列为空
		if (this.isEmpty()) {
			this.items.push(queueElement);
		} else {
			var added = false;
			for (var i = 0; i < this.items.length; i++) {
				if (queueElement.priority < this.items[i].priority) {
					this.items.splice(i,0,queueElement);
					added = true;
					break;
				}
			}
			if (!added) {
				this.items.push(queueElement);
			}			
		}
	}
	//2.删
	PriorityQueue.prototype.dequeue = function () {
		// body...
		return this.items.shift();
	}
	//3.查看前端的元素
	PriorityQueue.prototype.front = function(){
		return this.items[0];
	}
	//4.查看队列是否为空
	PriorityQueue.prototype.isEmpty = function (){
		return this.items.length == 0;
	}
	//5.查看队列中元素的个数
	PriorityQueue.prototype.size = function(){
		return this.items.length;
	}
	//6.toString
	PriorityQueue.prototype.toString = function (){
		var resultString = '';
		for (var i = 0; i < this.items.length; i++) {
			resultString += this.items[i].element + '-' + this.items[i].priority + ' ';
		}
		return resultString;
	}
}
//var pq = new PriorityQueue();