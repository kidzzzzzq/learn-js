//封装链表
function linkedList () {
	// body...
	//内部的类
	function Node(data) {
		// body...
		this.data = data;
		this.next = null;
	}
	//封装属性
	this.head = null;
	this.length = 0;
	//1.追加节点方法
	linkedList.prototype.append = function (data) {
		// body...
		//判断是否添加的是第一个节点
		var newNode = new Node(data);
		if(this.length == 0){
			this.head = newNode;
		} else {
			var current = this.head;
			while(current.next != null){
				current = current.next;
			}
			current.next = newNode;
		}
		this.length++;
	}
	//2.toString
	linkedList.prototype.toString = function () {
		// body...
		var current = this.head;
		var listString = "";
		//获取每个节点
		while(current){
			listString += current.data + " ";
			current = current.next; 
		}
		return listString;
	}
	//3.插入一个节点
	linkedList.prototype.insert = function (position,data) {
		// body...
		//对position进行越界判断
		if(position < 0 || position > this.length){
			return false;
		}
		var newNode = new Node(data);
		//插入的是否是第一个节点
		if(position == 0){
			newNode.next = this.head;
			this.head = newNode;
		} else {
			var current = this.head;
			var previous = null;
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
	//4.得到某个位置的节点的数据
	linkedList.prototype.get = function (position) {
		// body...
		//对position进行越界判断
		if(position < 0 || position >= this.length){
			return null;
		}
		//获取data
		var current = this.head;
		for (var i = 0; i < position; i++) {
			current = current.next;
		}
		return current.data;
	}
	//5.返回指定节点在链表中的索引，没有该节点则返回-1
	linkedList.prototype.indexOf = function (data) {
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
	linkedList.prototype.update = function (position,data) {
		// body...
		//判断position进行越界判断
		if (position < 0 || position >= this.length) {
			return false;
		}
		var current = this.head;
		for (var i = 0; i < position; i++) {
			current = current.next;
		}
		current.data = data;
		return true;
	}
	//7.从链表的特定位置移除一个节点
	linkedList.prototype.removeAt = function (position) {
		// body...
		//判断position进行越界判断
		if (position < 0 || position >= this.length) {
			return false;
		}
		//判断是否删除的是第一个节点
		var current = this.head;
		if(position == 0){
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
	//8.从链表中删除对应数据的节点
	linkedList.prototype.remove = function (data) {
		// body...
		//获取data在链表中的位置
		var position = this.indexOf(data);
		//根据位置，删除节点
		return this.removeAt(position);
	}
	//9.判断当前链表是否为空
	linkedList.prototype.isEmpty = function () {
		// body...
		return this.length == 0;
	}
	//10.返回当前链表节点个数
	linkedList.prototype.size = function () {
		// body...
		return this.length;
	}
}
//创建单向链表
//var list = new linkedList();
//测试append方法
//list.append('abc');
//list.append('cba');
//list.append('nba');
//list.append('mba');
//console.log(list);
//toString
//console.log(list.toString());
//测试insert方法
//list.insert(1,'dna');
//console.log(list.toString());
//测试get方法
//console.log(list.get(1));
//测试indexOf方法
//console.log(list.indexOf('nba'));
//测试update方法
//console.log(list.update(2,'cba'));
//测试removeAt方法
//console.log(list.removeAt(2));
//测试remove方法
//console.log(list.remove('nba'));
 