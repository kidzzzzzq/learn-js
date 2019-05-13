function linkedList() {
	// body...
	function Node(data) {
		// body...
		this.next = null;
		this.data = data;
	}
	this.length = 0;
	this.head = null;
	//增
	linkedList.prototype.append = function(data) {
		// body...
		var newNode = new Node(data);
		//当前链表为空
		if (this.length == 0) {
			this.head = newNode;
		} else {
			var current = this.head;
			while (current.next != null) {
				current = current.next;
			}
			current.next = newNode;
		}
		this.length++;
	}
	//toString
	linkedList.prototype.toString = function () {
		// body...
		var listString = '';
		var current = this.head;
		//获取每个节点
		while(current){
			listString += current.data + ',';
			current = current.next;
		}
		return listString;
	}
	//插入一个节点
	linkedList.prototype.insert = function (position,data) {
		// body...
		//对position进行越界判断
		if (position < 0 || position > this.length) {
			return false;
		}
		var newNode = new Node(data);
		//插入的是否是第一个节点
		if (this.length == 0) {
			this.head.next = newNode;
		} else {
			var current = this.head;
			var previous = null;
			//找到position
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
	//得到某个位置的节点的数据
	linkedList.prototype.get = function (position) {
		// body...
		//对positon进行越界判断
		if (position < 0 || position > this.length - 1) {
			return null;
		}
		//找到position
		var current = this.head;
		for (var i = 0; i < position; i++) {
			current = current.next;
		}
		return current.data;
	}
	//返回指定节点在链表中的索引
	linkedList.prototype.indexOf = function (data) {
		// body...
		var current = this.head;
		var index = 0;
		while (current) {
			if (current.data == data) {
				return index;
			}
			current = current.next;
			index++;
		}
		return -1;
	}
	//改
	linkedList.prototype.updata = function (position,data) {
		// body...
		//对position进行越界判断
		if (position < 0 || position > this.length - 1) {
			return false;
		}
		var current = this.head;
		//找到position
		for (var i = 0; i < position; i++) {
			current = current.next;
		}
		current.data = data;
		return true;
	}
	//删(根据位置来删除)
	linkedList.prototype.removeAt = function (position) {
		// body...
		//对position进行越界判断
		if (position < 0 || position > this.length - 1) {
			return false;
		}
		//找到position
		var current = this.head;
		//是否删除的是第一个节点
		if (position = 0) {
			current = current.next;
		} else {
			var previous = null;
			for (var i = 0; i < position; i++) {
				previous = current;
				current = current.next;
			}
			previous.next = current.next;
		}
		this.length--;
		return current.data;
	}
	//删(根据对应信息)
	linkedList.prototype.remove = function (data) {
		// body...
		var position = this.indexOf(data);
		return this.removeAt(position);
	}
	//是否为空
	linkedList.prototype.isEmpty = function () {
		// body...
		return this.length == 0;
	}
	//节点个数
	linkedList.prototype.size = function () {
		// body...
		return this.length;
	}
}