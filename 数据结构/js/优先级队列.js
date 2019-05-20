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
		var element = new QueueElement(element,priority);
		
	};
}
//var pq = new PriorityQueue();