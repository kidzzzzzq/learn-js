//封装单向链表
function linkedList() {
	// body...
	//属性
	//内部类
	function Node(data) {
		// body...
		this.data = data;
		this.next = null;
	}
	this.head = null;
	this.length = 0;
	//方法
	//增
	linkedList.prototype.append = function(data) {
		// body...
		//创建一个新的节点
		var newNode = new Node(data);
		//原来链表为空
		if (this.length == 0) {
			this.head = newNode;
		} else {
			var current = this.head;
			while(current.next != null) {
				current = current.next;
			}
			current.next = newNode;
		}
		this.length++;
	}
	//增
	linkedList.prototype.appendx = function(data) {
		// body...
		var newNode = new Node(data);
		if (this.length == 0) {
			this.head = newNode;
		} else {
			var current = this.head;
			var previous = this.head;
			while(current != null) {
				previous = current;
				current = current.next;
			} 
			previous.next = newNode;
		}
		this.length++;
	}
	//toString
	linkedList.prototype.toString = function() {
		// body...
		var resultString = '';
		var current = this.head;
		for (var i = 0; i < this.length; i++) {
			resultString += current.data + ',';
			current = current.next;
		}
		return resultString;
	}
	//插入
	linkedList.prototype.insert = function(position,data) {
		// body...
		//越界判断
		if (position < 0 || position > this.length) {
			return false;
		}
		var newNode = new Node(data);
		//要插入的为第一个元素
		if (position == 0) {
			newNode.next = this.head;
			this.head = newNode;
		} else {
			var current = this.head;
			var previous = this.head;
			for (var i = 0; i < position; i++) {
				previous = current;
				current = current.next;
			}
			newNode.next = current;
			previous.next = newNode;
		}
		this.length++;
		return true;
	}
	//查
	linkedList.prototype.get = function(position) {
		// body...
		//越界判断
		if (position < 0 || position >= this.length) {
			return false;
		}
		var current = this.head;
		for (var i = 0; i < position; i++) {
			current = current.next;
		}
		return current.data;
	}
	//返回指定节点的索引
	linkedList.prototype.indexOf = function(data) {
		// body...
		var index = 0;
		var current = this.head;
		while(current != null) {
			if (current.data == data) {
				return index;
			}
			current = current.next;
			index++;
		}
		return -1;
	}
	//改
	linkedList.prototype.update = function(position,newData) {
		// body...
		//越界判断
		if (position < 0 || position >= this.length) {
			return false;
		}
		var current = this.head;
		for (var i = 0; i < position; i++) {
			current = current.next;
		}
		current.data = newData;
		return true;	
	}
	//删(position)
	linkedList.prototype.removeAt = function(position) {
		// body...
		//越界判断
		if (position < 0 || position >= this.length) {
			return false;
		} 
		//position == 0
		var current = this.head;
		if (position == 0) {
			current = current.next;
		} else {
			var previous = this.head;
			for (var i = 0; i < position; i++) {
				previous = current;
				current = current.next;
			}
			previous.next = current.next;
		}
		this.length--;
		return current.data;
	}
	//删(data)
	linkedList.prototype.remove = function(data) {
		// body...
		var position = this.indexOf(data);
		return this.removeAt(position);
	}
	//isEmpty
	linkedList.prototype.isEmpty = function() {
		// body...
		return this.length == 0;
	}
	//size
	linkedList.prototype.size = function() {
		// body...
		return this.length;
	}
}