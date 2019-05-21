//封装双向链表
function doublyLinkedList() {
	// body...
	//属性
	//内部类
	function Node(data) {
		// body...
		this.data = data;
		this.prev = null;
		this.next = null;
	}
	this.head = null;
	this.tail = null;
	this.length = 0;
	//方法
	//增
	doublyLinkedList.prototype.append = function(data) {
		// body...
		//创建一个节点
		var newNode = new Node(data);
		//1.链表为空
		if (this.length == 0) {
			this.head = newNode;
			this.tail = newNode;
		} else {
		//2.链表不为空
		}
		

	}
}