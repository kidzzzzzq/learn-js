//封装链表
function doublyLinkedList(data) {
	// body...
	//内部类
	function Node(data) {
		// body...
		this.data = data;
		this.prev = null;
		this.next = null;
	}
	//属性
	this.head = null;
	this.tail = null;
	this.length = 0;
	//1.向链表尾部添加一个节点
	doublyLinkedList.prototype.append = function (data) {
		// body...
		//判断是否添加的第一个节点
		var newNode = new Node(data);
		if (this.length == 0) {
			this.head = newNode;
			this.tail = newNode;
		} else {
			newNode.prev = this.tail;
			this.tail.next = newNode;
			this.tail = newNode;
		}
		this.length++;
	}
	//2.1 toString
	doublyLinkedList.prototype.toString = function () {
		// body...
		return this.backwardString();
	}
	//2.2 forwardString
	doublyLinkedList.prototype.forwardString = function () {
		// body...
		var current = this.tail;
		var resultString = "";
		//依次向前遍历，获取每一个节点
		while(current){
			resultString += current.data + " ";
			current = current.prev;
		}
		return resultString;
	}
	//2.3 backwardString
	doublyLinkedList.prototype.backwardString = function () {
		// body...
		var current = this.head;
		var resultString = "";
		//依次向后遍历，获取每一个节点
		while(current){
			resultString += current.data + " ";
			current = current.next;
		}
		return resultString; 
	}
	//3.向链表插入一个新的节点
	doublyLinkedList.prototype.insert = function (position,data) {
		// body...
		//对position进行越界判断
		if (position < 0 || position > this.length) {
			return false;
		}
		var newNode = new Node(data);
		//第一种情况，原来的链表为空
		if (this.length == 0) {
			this.head = newNode;
			this.tail = newNode;
		} else {
			//第二种情况，链表不为空,在head后插入		
			if(position == 0){
				newNode.next = this.head;
				this.head.prev = newNode;
				this.head = newNode; 
			} else if (position == this.length) {
			//第三种情况，在末尾插入
				newNode.prev = this.tail;
				this.tail.next = newNode;
				this.tail = newNode;
			} else {
			//第四种情况，在中间插入
				var current = this.head;
				for (var i = 0; i < position; i++) {
					current = current.next;
				}
				newNode.next = current;
				newNode.prev = current.prev;
				current.prev.next = newNode;
				current.prev = newNode;
			}	
		}
		this.length++;
		return true;
	}
	//4.根据位置获取节点
	doublyLinkedList.prototype.get = function (position) {
		// body...
		//对position进行越界判断
		if(position < 0 || position >= this.length){
			return false;
		}
		//提高效率，若this.length/2 >= position,正向查找
		//若this.length/2 < position,则反向查找
		if(this.length >= position){
			var current = this.head;
			for (var i = 0; i < position; i++) {
				current = current.next;
			}
			return current.data;
		} else {
			var current = this.tail;
			for (var i = length-1; i > position; i--) {
				current = current.prev;
			}
			return current.data;
		}
	}
	//5.返回节点在链表中的索引，没有则返回-1
	doublyLinkedList.prototype.indexOf = function (data) {
		// body...
		var current = this.head;
		var index = 0;
		while(current){
			if(current.data == data){
				return index;
			}
			current = current.next;
			index++;
		}
		return -1;
	}
	//6.修改某个位置的元素
	doublyLinkedList.prototype.update = function (position,data) {
		// body...
		//对position进行越界判断
		if (position < 0 || position >= this.length) {
			return false;
		}
		//提高效率
		if (this.length >= position) {
			var current = this.head;
			for (var i = 0; i < position; i++) {
				current = current.next;
			}
			current.data = data;
		} else {
			var current = this.tail;
			for (var i = this.length-1; i > position; i--) {
				current = current.prev;
			}
			current.data = data;
		}
		return true;
	}
	//7.从链表的特定位置移除一个节点
	doublyLinkedList.prototype.removeAt = function (position) {
		// body...
		//对position进行越界判断
		if (position < 0 || position > this.length-1) {
			return null;
		}
		//可以提高效率
		var current = this.head;
		//第一种情况，只有一个节点
		if (this.length == 1) {
			this.head = null;
			this.tail = null;
		} else {
			//第二种情况，不只一个节点，删除第一个节点
			if (position == 0) {
				this.head.next.prev = null;
				this.head = this.head.next;
				//要删节点的next指向不用为null吗？
			} else if (position == this.length-1) {
			//第三种情况，删除最后一个节点
				current = this.tail;	
				this.tail.prev.next = null;
				this.tail = this.tail.prev;
			} else {
			//第四种情况，删除中间的节点
				for (var i = 0; i < position; i++) {
					current = current.next;
				}
				current.next.prev = current.prev;
				current.prev.next = current.next;
			}
		}
		this.length--;
		return current.data;
	}
}

// var doublyList = new doublyLinkedList();
// 1.测试append方法
// doublyList.append('black');
// doublyList.append('white');
// doublyList.append('blue');
// doublyList.append('red');
// doublyList.append('pink'); 
// console.log(doublyList);
// 2.测试toString	
// console.log(doublyList.toString());
// 3.测试insert方法
// console.log(doublyList.toString(doublyList.insert(2,"yellow")));
// 4.测试get方法
// console.log(doublyList.toString(doublyList.get(3)));
// 5.测试indexOf方法
// console.log(doublyList.indexOf("white"));
// 6.测试update方法
// console.log(doublyList.toString(doublyList.update(4,"yellow")));
// 7.测试removeAt方法
// console.log(doublyList.toString(doublyList.removeAt(3)));
 